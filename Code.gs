function productName(shname) {
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName(shname);
  //SpreadsheetApp.getActiveSheet().getRange(2, 20, 10000, 1).clear({contentsOnly: true});  
  var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i];
  
    
    //elenco
     if (row[1].indexOf("Vetrina") !=-1 || row[1].indexOf("turbo") !=-1)            {sheet.getRange(r,20).setValue('Vetrina');}
    if (row[1].indexOf("DEM") !=-1)                 {sheet.getRange(r,20).setValue('DEM');}
    
    if (row[1].indexOf("Half Page") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Leaderboard Top") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Medium Rectangle") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Skin Categoria") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Super Leaderboard Bottom") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Super Leaderboard Top") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Wide Skyscraper") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    if (row[1].indexOf("Widget") !=-1)                 {sheet.getRange(r,20).setValue('Tabellari');}
    
    if (row[1].indexOf("Text Link") !=-1)                 {sheet.getRange(r,20).setValue('Link');}
    if (row[1].indexOf("Link") !=-1)                 {sheet.getRange(r,20).setValue('Link');}
    if (row[1].indexOf("Site") !=-1)                 {sheet.getRange(r,20).setValue('LYS');}
    if (row[1].indexOf("Link your site") !=-1 || row[1].indexOf("LYS") !=-1)                 {sheet.getRange(r,20).setValue('LYS');}
    
    if (row[1].indexOf("Mobile") !=-1)                 {sheet.getRange(r,20).setValue('Mobile');}
    
    if (row[1].indexOf("Masthead") !=-1)                 {sheet.getRange(r,20).setValue('Invasivi');}
    if (row[1].indexOf("Skin Homepage") !=-1)                 {sheet.getRange(r,20).setValue('Invasivi');}
    
    if (row[1].indexOf("grafica") !=-1)                 {sheet.getRange(r,20).setValue('realizzazione grafica');}
    
    if (row[1].indexOf("Locandina") !=-1)                 {sheet.getRange(r,20).setValue('Locandina');}
    
    if (row[1].indexOf("Import") !=-1)                 {sheet.getRange(r,20).setValue('Import');}
    
    if (row[1].indexOf("Personalizzato") !=-1)                 {sheet.getRange(r,20).setValue('Personalizzato');}
    
    if (row[1].indexOf("Toplist") !=-1 || row[1].indexOf("Top List") !=-1)         {sheet.getRange(r,20).setValue('Toplist');}
    
    if (row[1].indexOf("Inserimento annunci") !=-1)                 {sheet.getRange(r,20).setValue('Inserimento annunci');}
    
    

    
     
    
    r=r+1;
  }
}


function change(shname) {
  
 var ss = SpreadsheetApp.getActiveSpreadsheet();  
 
  var sheet = ss.getSheetByName(shname);
  //SpreadsheetApp.getActiveSheet().getRange(2, 20, 10000, 1).clear({contentsOnly: true});  
  var data = sheet.getDataRange().getValues();
  var i=0;
   var r=1  ;
  for(i in data) 
  { 
    
    var row = data[i][2].toString();
  
    
    //elenco
     if (row.indexOf("Immobiliare.it - partnership annunci_Rinnovo4") !=-1 )            {sheet.getRange(r,1).setValue('LOCAL ADV'); sheet.getRange(r,2).setValue('Import'); }
    if (row.indexOf("Metriquadri Srl-vetrinavip") !=-1 )                                {sheet.getRange(r,1).setValue('LOCAL ADV'); sheet.getRange(r,2).setValue('Vetrina'); }
    if (row.indexOf("catawiki-vetrina a cpc_Rinnovo1") !=-1 )                           {sheet.getRange(r,1).setValue('LOCAL ADV'); sheet.getRange(r,2).setValue('Vetrina'); }
    if (row.indexOf("Top list personalizzata_Rinnovo2") !=-1 )                          {sheet.getRange(r,1).setValue('LOCAL ADV'); sheet.getRange(r,2).setValue('Crediti'); }
//    LOCAL ADV	Import	
//    LOCAL ADV	Vetrina	Metriquadri Srl-vetrinavip
//    LOCAL ADV	Vetrina	catawiki-vetrina a cpc_Rinnovo1
//    LOCAL ADV	Crediti Top List	Top list personalizzata_Rinnovo2
//    
    
    r=r+1;
  }
}





function run_recoding()
{
  productName("Prodotti con opportunità v2 2017") 
  productName("Prodotti con opportunità v2 2016") 
  productName("Prodotti con opportunità v2 2017 cumul")
  productName("Prodotti con opportunità v2 2016 cumul")
  change("Prodotti con opportunità v2 2017 cumul")
}