/**
 * ============================================================================
 * CÓDIGO DE GOOGLE APPS SCRIPT PARA EL MURO DE PRESCRIPCIONES MÉDICAS (DR. JOSÉ)
 * ============================================================================
 * 
 * INSTRUCCIONES PARA APLICAR ACTUALIZACIÓN (1 minuto):
 * 1. Abre tu Hoja de Cálculo en Google Sheets.
 * 2. Ve al menú: Extensiones -> Apps Script.
 * 3. Selecciona TODO el código que haya allí, bórralo y PEGA TODO ESTE ARCHIVO.
 * 4. Haz clic en el icono de disco 💾 ("Guardar proyecto").
 * 5. Haz clic en el botón azul superior:
 *      "Implementar" -> "Administrar implementaciones"
 * 6. Haz clic en el icono del LÁPIZ ✏️ ("Editar").
 * 7. En el menú desplegable "Versión", selecciona: "Nueva versión" (¡MUY IMPORTANTE!).
 * 8. Haz clic en "Implementar" (botón azul inferior).
 * 
 * ¡Listo! Tu Web App quedará 100% actualizada con soporte para Me Gusta con nombres
 * y sincronización en tiempo real.
 * ============================================================================
 */

function doGet(e) {
  try {
    var sheet = getOrCreateSheet();

    // ========================================================
    // CASO 1: ME GUSTA POR GET (MÁXIMA VELOCIDAD Y COMPATIBILIDAD)
    // ========================================================
    if (e && e.parameter && e.parameter.action === 'like') {
      var rxIdParam = String(e.parameter.id || '').trim();
      var userNameParam = String(e.parameter.userName || e.parameter.user || '').trim();
      var likeResult = handleLikeAction(sheet, rxIdParam, userNameParam);
      return ContentService.createTextOutput(JSON.stringify(likeResult)).setMimeType(ContentService.MimeType.JSON);
    }

    // ========================================================
    // CASO 2: LEER TODAS LAS RECETAS VÁLIDAS
    // ========================================================
    var rows = sheet.getDataRange().getValues();
    var prescriptions = [];
    var seenIds = {};

    // Si hay filas (la fila 0 son los encabezados)
    for (var i = 1; i < rows.length; i++) {
      var r = rows[i];
      if (!r) continue;

      var id = String(r[0] || '').trim();
      var sender = String(r[2] || '').trim();
      var treatment = String(r[5] || '').trim();

      // Ignorar filas vacías o creadas sin mensaje real
      if (!treatment && !sender) continue;
      if (!treatment) continue; // Requiere mensaje para ser visible en el muro

      // Evitar duplicados por ID
      if (id && seenIds[id]) continue;
      if (id) seenIds[id] = true;

      var likedByStr = String(r[8] || '').trim();
      var likedBy = likedByStr ? likedByStr.split(',').map(function(s){ return s.trim(); }).filter(Boolean) : [];
      var likesCount = Number(r[7]);
      if (isNaN(likesCount) || likesCount < likedBy.length) {
        likesCount = likedBy.length;
      }

      prescriptions.push({
        id: id || ('rx_' + i),
        timestamp: String(r[1] || ''),
        sender: sender || 'Anónimo',
        relationship: String(r[3] || 'Afecto').trim(),
        diagnosis: String(r[4] || 'Sobredosis de Cariño').trim(),
        treatment: treatment,
        dose: String(r[6] || '').trim(),
        likes: likesCount,
        likedBy: likedBy
      });
    }

    // Los más recientes primero
    prescriptions.reverse();

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      count: prescriptions.length,
      data: prescriptions
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var sheet = getOrCreateSheet();
    var contents = e.postData.contents;
    var data = JSON.parse(contents);

    // ========================================================
    // CASO 1: DAR O QUITAR "ME GUSTA" CON NOMBRE (POST)
    // ========================================================
    if (data.action === 'like') {
      var rxId = String(data.id || '').trim();
      var userName = String(data.userName || data.name || '').trim();
      var result = handleLikeAction(sheet, rxId, userName);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }

    // ========================================================
    // CASO 2: GUARDAR NUEVA RECETA MÉDICA
    // ========================================================
    var id = String(data.id || ('rx_' + new Date().getTime())).trim();
    var timestamp = Utilities.formatDate(new Date(), "America/Bogota", "dd/MM/yyyy, hh:mm a");
    var sender = String(data.sender || data.name || 'Anónimo').trim();
    var relationship = String(data.relationship || 'Afecto').trim();
    var diagnosis = String(data.diagnosis || 'Sobredosis de Alegría').trim();
    var treatment = String(data.treatment || data.message || '').trim();
    var dose = String(data.dose || '').trim();
    var likes = Number(data.likes) || 0;
    var likedByStr = Array.isArray(data.likedBy) ? data.likedBy.join(', ') : (data.likedBy || '');

    // Si viene sin mensaje ni remitente real, no crear fila basura
    if (!treatment && (!sender || sender === 'Anónimo')) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'ignored',
        message: 'Fila vacía ignorada'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Agregar la nueva fila en la hoja de cálculo
    sheet.appendRow([id, timestamp, sender, relationship, diagnosis, treatment, dose, likes, likedByStr]);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Receta médica guardada exitosamente en Google Sheets',
      data: {
        id: id,
        timestamp: timestamp,
        sender: sender,
        relationship: relationship,
        diagnosis: diagnosis,
        treatment: treatment,
        dose: dose,
        likes: likes,
        likedBy: likedByStr ? likedByStr.split(',').map(function(s){ return s.trim(); }) : []
      }
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ========================================================
// FUNCIÓN CENTRAL PARA ACTUALIZAR ME GUSTA
// ========================================================
function handleLikeAction(sheet, rxId, userName) {
  if (!rxId) {
    return { status: 'error', message: 'ID de receta requerido' };
  }

  var rows = sheet.getDataRange().getValues();
  var targetRowIndex = -1;

  // 1. Buscar la fila principal que coincida con el ID y tenga mensaje
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]).trim() === rxId && String(rows[i][5] || '').trim()) {
      targetRowIndex = i + 1; // 1-indexed
      break;
    }
  }

  // 2. Si no encontró con mensaje, buscar por ID
  if (targetRowIndex === -1) {
    for (var i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim() === rxId) {
        targetRowIndex = i + 1;
        break;
      }
    }
  }

  if (targetRowIndex > 0) {
    var currentLikedByStr = String(sheet.getRange(targetRowIndex, 9).getValue() || '');
    var likedByArr = currentLikedByStr ? currentLikedByStr.split(',').map(function(s){ return s.trim(); }).filter(Boolean) : [];

    if (userName) {
      var userIndex = likedByArr.indexOf(userName);
      if (userIndex > -1) {
        likedByArr.splice(userIndex, 1); // Quitar like si ya existía
      } else {
        likedByArr.push(userName); // Agregar like
      }
    }

    var newLikes = likedByArr.length;
    var newLikedByStr = likedByArr.join(', ');

    sheet.getRange(targetRowIndex, 8).setValue(newLikes);
    sheet.getRange(targetRowIndex, 9).setValue(newLikedByStr);

    return {
      status: 'success',
      action: 'like',
      id: rxId,
      likes: newLikes,
      likedBy: likedByArr
    };
  } else {
    return {
      status: 'error',
      message: 'Receta no encontrada: ' + rxId
    };
  }
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  // Si la hoja está totalmente vacía, crear los 9 encabezados
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'ID', 
      'Fecha y Hora', 
      'Médico Remitente', 
      'Parentesco / Especialidad', 
      'Diagnóstico', 
      'Tratamiento (Mensaje)', 
      'Dosis / Posología', 
      'Likes', 
      'Personas Me Gusta'
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#bae6fd');
    sheet.setFrozenRows(1);
  } else {
    // Si la hoja tiene menos de 9 columnas, asegurarse de que la columna 9 tenga encabezado
    if (sheet.getLastColumn() < 9) {
      sheet.getRange(1, 9).setValue('Personas Me Gusta').setFontWeight('bold').setBackground('#bae6fd');
    }
  }
  
  return sheet;
}
