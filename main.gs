function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet() {
  var tmpl = HtmlService.createTemplateFromFile('index');
  tmpl.serviceUrl = ScriptApp.getService().getUrl();
  return tmpl.evaluate().setTitle('Adidas臺灣門市查詢系統 - Produced by 江其澤');
}

function doPost(e){
  var para = e.parameter;
  var id = para.id;
  
  var tmpl = HtmlService.createTemplateFromFile('result');
  
  var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('table').getDataRange().getValues(); 
  var r_values = [];
  var iRow   = 0;
  for (i = 1; i < values.length; i++){  r_values[i] =values[i][1]; Logger.log(r_values[i]); };
  var idform = id.replace(/\s*/g,"");
  if (idform != null)
  {
    var iRow = r_values.indexOf(id);
  }
  
  var answer = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(idform).getDataRange().getValues();
  
  // 回傳資訊
  sendToSheet();
  tmpl.id = idform
  tmpl.C_Name = idform
  tmpl.C_Tel = idform
  tmpl.C_Address = idform
  return tmpl.evaluate();
}

function searchcity()
{
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('table');
  var values = ss.getRange(2, 2, ss.getLastRow()-1, 2).getValues();
  return values;
}

function showTable(kind)
{
  var ss = SpreadsheetApp.getActiveSpreadsheet();   
  //讀取各項目資料 
  var sheet = ss.getSheetByName(kind);
  var S_vol = sheet.getDataRange();
  var values = S_vol.getValues();
  var C_row  = sheet.getLastRow();
  return values;   
}

function sendToSheet() {
   var Today       = new Date();
   var C_year      = Today.getFullYear();
   var C_month     = Today.getMonth()+1;
   var s_w         = SpreadsheetApp.getActiveSpreadsheet()
   var sheet_w     = s_w.getSheetByName('counter');
   var W_vol       = sheet_w.getDataRange();
   var W_row       = W_vol.getNumRows();
   var W_last_col  = W_vol.getLastColumn();
   var W_last_row  = W_vol.getLastRow();
   var WArray      = W_vol.getValues();
   var W_str       = C_year + "/" + C_month;
   var flag = 0;
   for (var i = 1; i < W_row; i++)
   {
     if (WArray[i][0] == W_str)
     { 
       var month_cnt = WArray[i][1];
       var range = W_vol.getCell(i+1, 2);
       i = W_row;
       flag = 1;
     }
   }
   if (flag == 0)
   {
     sheet_w.insertRowAfter(W_last_row);
     var range1 = sheet_w.getRange(W_last_row+1, 1);
     range1.setValue(W_str);
     var range  = sheet_w.getRange(W_last_row+1, 2);
     var month_cnt = 0;
   }
   month_cnt++;
   range.setValue(month_cnt);
}
