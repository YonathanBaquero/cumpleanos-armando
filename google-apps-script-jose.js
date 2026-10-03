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
 * ¡Listo! A partir de ese momento, cada vez que cualquier persona entre desde su celular
 * y deje una receta médica, se guardará automáticamente en tu hoja de cálculo y se verá en el muro!
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
        prescriptions.push({
          id: String(r[0] || ('rx_' + i)),
          timestamp: String(r[1] || ''),
          sender: String(r[2] || 'Anónimo'),
          relationship: String(r[3] || 'Afecto'),
          diagnosis: String(r[4] || 'Sobredosis de Cariño'),
          treatment: String(r[5] || ''),
          dose: String(r[6] || ''),
          likes: Number(r[7]) || 0
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
    
    var id = data.id || ('rx_' + new Date().getTime());
    var timestamp = Utilities.formatDate(new Date(), "America/Bogota", "dd/MM/yyyy, hh:mm a");
    var sender = data.sender || data.name || 'Anónimo';
    var relationship = data.relationship || 'Afecto';
    var diagnosis = data.diagnosis || 'Sobredosis de Alegría';
    var treatment = data.treatment || data.message || '';
    var dose = data.dose || '';
    var likes = Number(data.likes) || 0;
    
    // Agregar la nueva fila en la hoja de cálculo
    sheet.appendRow([id, timestamp, sender, relationship, diagnosis, treatment, dose, likes]);
    
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
        likes: likes
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
  
  // Si la hoja está totalmente vacía, crear los encabezados
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['ID', 'Fecha y Hora', 'Médico Remitente', 'Parentesco / Especialidad', 'Diagnóstico', 'Tratamiento (Mensaje)', 'Dosis / Posología', 'Likes']);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#bae6fd');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}
