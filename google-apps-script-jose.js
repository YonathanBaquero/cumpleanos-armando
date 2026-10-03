/**
 * ============================================================================
 * CÓDIGO DE GOOGLE APPS SCRIPT PARA EL MURO DE PRESCRIPCIONES MÉDICAS (DR. JOSÉ)
 * ============================================================================
 * 
 * GUÍA RÁPIDA DE CONFIGURACIÓN (Toma solo 2 minutos):
 * 
 * 1. Entra a Google Drive (drive.google.com) o Google Sheets (sheets.new) y crea una nueva Hoja de Cálculo.
 * 2. Nómbrala: "Prescripciones Médicas Dr. José".
 * 3. En el menú superior de la hoja, haz clic en:
 *      Extensiones -> Apps Script
 * 4. Borra cualquier código que aparezca allí y PEGA TODO EL CÓDIGO de este archivo.
 * 5. Haz clic en el botón azul "Implementar" (arriba a la derecha) -> "Nueva implementación".
 * 6. En el engranaje (Tipo de implementación), selecciona: "Aplicación web".
 * 7. Configura las siguientes 3 opciones:
 *      - Descripción: Muro Dr. Jose
 *      - Ejecutar como: "Yo" (tu cuenta de Google)
 *      - Quién tiene acceso: "Cualquier usuario" (o "Anyone")  <--- ¡MUY IMPORTANTE!
 * 8. Haz clic en "Implementar", autoriza los permisos con tu cuenta de Google.
 * 9. COPIA LA "URL de la aplicación web" que termina en ".../exec".
 * 10. Ve a tu página del muro (muro.html), toca el icono de engranaje (⚙️) arriba a la derecha,
 *     pega la URL y haz clic en "Guardar y Conectar".
 * 
 * ¡Listo! Cada vez que cualquier persona entre desde su celular y deje una receta
 * o le dé Me Gusta con su nombre, se guardará en tu hoja de cálculo y se verá en tiempo real!
 * ============================================================================
 */

function doGet(e) {
  try {
    var sheet = getOrCreateSheet();
    var rows = sheet.getDataRange().getValues();
    var prescriptions = [];
    
    // Si hay filas (la fila 0 son los encabezados)
    for (var i = 1; i < rows.length; i++) {
      var r = rows[i];
      if (r[0] || r[2] || r[5]) { // Si tiene ID, Nombre o Mensaje
        var likedByStr = String(r[8] || '');
        var likedBy = likedByStr ? likedByStr.split(',').map(function(s){ return s.trim(); }).filter(Boolean) : [];
        var likesCount = Number(r[7]);
        if (isNaN(likesCount) || likesCount < likedBy.length) {
          likesCount = likedBy.length;
        }

        prescriptions.push({
          id: String(r[0] || ('rx_' + i)),
          timestamp: String(r[1] || ''),
          sender: String(r[2] || 'Anónimo'),
          relationship: String(r[3] || 'Afecto'),
          diagnosis: String(r[4] || 'Sobredosis de Cariño'),
          treatment: String(r[5] || ''),
          dose: String(r[6] || ''),
          likes: likesCount,
          likedBy: likedBy
        });
      }
    }
    
    // Invertir para que los más nuevos aparezcan de primero
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
    // CASO 1: DAR O QUITAR "ME GUSTA" CON EL NOMBRE DE LA PERSONA
    // ========================================================
    if (data.action === 'like') {
      var rxId = String(data.id || '');
      var userName = String(data.userName || data.name || '').trim();
      var rows = sheet.getDataRange().getValues();
      var targetRowIndex = -1;

      for (var i = 1; i < rows.length; i++) {
        if (String(rows[i][0]) === rxId) {
          targetRowIndex = i + 1; // 1-indexed para getRange
          break;
        }
      }

      if (targetRowIndex > 0) {
        var currentLikedByStr = String(sheet.getRange(targetRowIndex, 9).getValue() || '');
        var likedByArr = currentLikedByStr ? currentLikedByStr.split(',').map(function(s){ return s.trim(); }).filter(Boolean) : [];

        if (userName) {
          var userIndex = likedByArr.indexOf(userName);
          if (userIndex > -1) {
            // Si ya le había dado me gusta, se lo quitamos
            likedByArr.splice(userIndex, 1);
          } else {
            // Si es nuevo me gusta, lo agregamos a la lista
            likedByArr.push(userName);
          }
        }

        var newLikes = likedByArr.length;
        var newLikedByStr = likedByArr.join(', ');

        sheet.getRange(targetRowIndex, 8).setValue(newLikes);
        sheet.getRange(targetRowIndex, 9).setValue(newLikedByStr);

        return ContentService.createTextOutput(JSON.stringify({
          status: 'success',
          action: 'like',
          id: rxId,
          likes: newLikes,
          likedBy: likedByArr
        })).setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          status: 'error',
          message: 'Receta no encontrada para actualizar like'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // ========================================================
    // CASO 2: GUARDAR NUEVA RECETA MÉDICA
    // ========================================================
    var id = data.id || ('rx_' + new Date().getTime());
    var timestamp = Utilities.formatDate(new Date(), "America/Bogota", "dd/MM/yyyy, hh:mm a");
    var sender = data.sender || data.name || 'Anónimo';
    var relationship = data.relationship || 'Afecto';
    var diagnosis = data.diagnosis || 'Sobredosis de Alegría';
    var treatment = data.treatment || data.message || '';
    var dose = data.dose || '';
    var likes = Number(data.likes) || 0;
    var likedByStr = Array.isArray(data.likedBy) ? data.likedBy.join(', ') : (data.likedBy || '');

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
    // Si la hoja ya tiene encabezados de 8 columnas, asegurarse de agregar el encabezado 9
    if (sheet.getLastColumn() < 9) {
      sheet.getRange(1, 9).setValue('Personas Me Gusta').setFontWeight('bold').setBackground('#bae6fd');
    }
  }
  
  return sheet;
}
