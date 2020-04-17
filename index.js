const fs = require('fs');
var path = require('path');
var csv = require("csvtojson");
const csvFilePath='customer-data.csv';


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    fs.writeFile('customer-data.json',JSON.stringify(jsonObj), 'utf8',function(err){
        if(err) return console.log(err);

    })
})

// fs.readFile('customer-data.csv','utf8',(error,data)=>{
//     let customersArr=data.split(',');
    
    
//     for(let i=0;i<50;i++){
//        //  console.log(customersArr[i].split(/(\d+)/));
//       //  console.log(customersArr[i]);
//     if(customersArr[i].includes("\r\n")){
          
//             let st=customersArr[i].split(/(\d)/);
//             console.log(st[0]);
//            i= i+1;
//             console.log('line changed');
//             console.log(st[1]);
           
//      }
//         console.log(customersArr[i]);
//     }
   
   
// })