// ============================================================
// Google Apps Script — Receptor de Respostas da Pesquisa Swift
// ============================================================
//
// COMO USAR:
// 1. Crie uma Google Sheet em branco (nome sugerido: "Pesquisa Maturidade IA — Swift")
// 2. Va em Extensoes > Apps Script
// 3. Cole TODO este codigo no editor (apague o conteudo padrao)
// 4. Clique em "Implantar" > "Nova implantacao"
//    - Tipo: "App da Web"
//    - Executar como: "Eu" (sua conta)
//    - Quem tem acesso: "Qualquer pessoa"
// 5. Copie a URL gerada e cole nos arquivos HTML (variavel SHEETS_URL)
// 6. Pronto! As respostas serao gravadas automaticamente.
//

// Colunas fixas que sempre aparecem primeiro
var FIXED_COLS = ['timestamp', 'formulario', 'cpf'];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Determina a aba pelo formulario (execucao ou gestao)
    var sheetName = data.formulario === 'gestao' ? 'Gestao' : 'Execucao';
    var sheet = ss.getSheetByName(sheetName);

    // Cria a aba se nao existir
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Monta o registro completo
    var record = {
      timestamp: new Date().toISOString(),
      formulario: data.formulario || 'desconhecido',
      cpf: data.answers && data.answers.Q1 ? data.answers.Q1 : ''
    };

    // Adiciona todas as respostas (Q1, Q6, Q7, ...)
    var answers = data.answers || {};
    var answerKeys = Object.keys(answers).sort();
    for (var i = 0; i < answerKeys.length; i++) {
      var key = answerKeys[i];
      var val = answers[key];
      // Arrays viram string separada por "; "
      record[key] = Array.isArray(val) ? val.join('; ') : val;
    }

    // Adiciona sentimentos (sent_Q6, sent_Q12, ...)
    var sentiments = data.sentiments || {};
    var sentKeys = Object.keys(sentiments).sort();
    for (var i = 0; i < sentKeys.length; i++) {
      var key = sentKeys[i];
      record['sent_' + key] = sentiments[key];
    }

    // Adiciona feedbacks de dislike (fb_Q12, fb_Q15, ...)
    var feedbacks = data.feedbacks || {};
    var fbKeys = Object.keys(feedbacks).sort();
    for (var i = 0; i < fbKeys.length; i++) {
      var key = fbKeys[i];
      if (feedbacks[key] && feedbacks[key].trim() !== '') {
        record['fb_' + key] = feedbacks[key];
      }
    }

    // Pega ou cria o header
    var allKeys = Object.keys(record);
    var existingHeaders = [];
    if (sheet.getLastRow() > 0) {
      existingHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(function(h) { return h !== ''; });
    }

    // Merge headers: mantem existentes + adiciona novos
    var headerSet = {};
    for (var i = 0; i < existingHeaders.length; i++) {
      headerSet[existingHeaders[i]] = true;
    }
    var newHeaders = [];
    for (var i = 0; i < allKeys.length; i++) {
      if (!headerSet[allKeys[i]]) {
        newHeaders.push(allKeys[i]);
        headerSet[allKeys[i]] = true;
      }
    }

    var finalHeaders;
    if (existingHeaders.length === 0) {
      // Primeira vez: ordena com fixos primeiro, depois respostas, sentimentos, feedbacks
      finalHeaders = FIXED_COLS.concat(
        allKeys.filter(function(k) { return FIXED_COLS.indexOf(k) === -1; }).sort()
      );
    } else if (newHeaders.length > 0) {
      // Adiciona novas colunas ao final
      finalHeaders = existingHeaders.concat(newHeaders);
    } else {
      finalHeaders = existingHeaders;
    }

    // Escreve header
    sheet.getRange(1, 1, 1, finalHeaders.length).setValues([finalHeaders]);

    // Escreve a linha de dados
    var row = [];
    for (var i = 0; i < finalHeaders.length; i++) {
      var col = finalHeaders[i];
      row.push(record[col] !== undefined ? record[col] : '');
    }
    sheet.appendRow(row);

    // Cria/atualiza aba de Resumo
    updateResumo(ss);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', sheet: sheetName }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function updateResumo(ss) {
  var resumo = ss.getSheetByName('Resumo');
  if (!resumo) {
    resumo = ss.insertSheet('Resumo');
  }
  resumo.clear();

  var execSheet = ss.getSheetByName('Execucao');
  var gestSheet = ss.getSheetByName('Gestao');

  var execCount = execSheet ? Math.max(0, execSheet.getLastRow() - 1) : 0;
  var gestCount = gestSheet ? Math.max(0, gestSheet.getLastRow() - 1) : 0;

  resumo.getRange('A1:B1').setValues([['Metrica', 'Valor']]);
  resumo.getRange('A2:B2').setValues([['Total Respostas', execCount + gestCount]]);
  resumo.getRange('A3:B3').setValues([['Execucao', execCount]]);
  resumo.getRange('A4:B4').setValues([['Gestao', gestCount]]);
  resumo.getRange('A5:B5').setValues([['Ultima atualizacao', new Date().toLocaleString('pt-BR')]]);

  // Formata
  resumo.getRange('A1:B1').setFontWeight('bold');
  resumo.autoResizeColumns(1, 2);
}

// Funcao de teste — rode manualmente para verificar se esta tudo OK
function testDoPost() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        formulario: 'execucao',
        answers: { Q1: '12345678901', Q6: 'Sim', Q12: 4, Q15: 3 },
        sentiments: { Q6: 'like', Q12: 'like', Q15: 'dislike' },
        feedbacks: { Q15: 'Pergunta confusa' }
      })
    }
  };
  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
