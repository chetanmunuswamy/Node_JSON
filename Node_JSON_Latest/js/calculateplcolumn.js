function calculateplcolumn()
{
	
			var table = document.getElementById("table1");
			//console.log("calculate pl column js has been invoked");
			//var buyquantityvaluesarray=[];

			var Salesstarted=false;
			var Buystarted=false;

			//console.log("The number of rows in the table is "+table.rows.length);

			for (var i = 1;i<table.rows.length; i++) {
				row = table.rows[i];
				//console.log("Iterating through the row "+i)
				if(row.cells[0].innerHTML=="Buy")
				{
					Salesstarted=false;
					Buystarted=true;
					quantitysalesunit=[];
					quantitysalesprice=[];
					continue;
				}
				if(row.cells[0].innerHTML=="Sell")
				{
					Salesstarted=true;
					Buystarted=false;
					totalunitexhausted=0;
					continue;
				}
			   if (Buystarted && row.cells[5].innerHTML==0){
				 quantitysalesunit.push(parseInt(row.cells[2].innerHTML));
				 var pushedvalue1=parseFloat(row.cells[3].innerHTML);
				 //console.log(" The pushed value to the salesunitprice array is "+pushedvalue1);
				 quantitysalesprice.push(pushedvalue1);
			   }

			   if (Salesstarted && row.cells[5].innerHTML==Number.MIN_VALUE){
				 //if (Salesstarted){
				 var currentsalesunitamt=parseInt(row.cells[2].innerHTML);
				 var currentsalesunitprice=parseFloat(row.cells[3].innerHTML);
				 //console.log("The current sales unit amount: "+ currentsalesunitamt);
				 //console.log("The current sales unit price: "+currentsalesunitprice);
				 //console.log("The Buying Unit array is: "+quantitysalesunit);
				 //console.log("The Buying Price array is: "+quantitysalesprice);
				 var salesval=(currentsalesunitamt*currentsalesunitprice);
				
				 var unitamountrange=[];
				 var startindex=0;
				 var unitavailableinstartindex=0;
				 var sum=0;
				 var buyvalue=0.0;
				 for(var j=0;j<quantitysalesunit.length;j++)
				 {
					 sum+=quantitysalesunit[j];
					 unitamountrange.push(sum);
				 }
				 
				 //console.log("The Unit Amount range Array is: "+unitamountrange);
				 
				 for(var k=0;k<unitamountrange.length;k++)
				 {
					//console.log("The Total Unit Exhausted is: "+totalunitexhausted);
					//console.log("The Total Unit Amount Range is: "+unitamountrange[k]);
					 if(totalunitexhausted<=unitamountrange[k])
					 {
						 startingindex=k;
						
						 unitavailableinstartindex=unitamountrange[k]-totalunitexhausted;
						 
						 break;
						 
					 }
				 }
				 //console.log(" The start index in UnitAmountrange array is: "+startindex);
				 //console.log(" The unit available in start index  is: "+unitavailableinstartindex);
				 
				 var remainingamount=currentsalesunitamt;
				 var unitavailableinthisindex=unitavailableinstartindex;
				 
				 //console.log("The Remaining Amount at start is: "+remainingamount);
				 //console.log("The Unit available in this index  at start is: "+unitavailableinthisindex);
				 var kk=0;
				 for(var n=startindex;n<quantitysalesunit.length;n++)
				 {
					 //console.log("The Remaining Amount at Iteration "+kk+" is:"+remainingamount);
					 //console.log("The value of n for the quantity sales unit array is: "+n);
					 if(unitavailableinthisindex>=remainingamount)
					 {
						 var calculatedvalue1=remainingamount*quantitysalesprice[n];
						 buyvalue+=calculatedvalue1;
						 //console.log(" The value to be added is: "+calculatedvalue1);
						 //console.log("After addition the buyvalue is: "+buyvalue);
						 break;
					 }
					 else if(n<quantitysalesunit.length)
					 {
						var calculatedvalue2=unitavailableinthisindex*quantitysalesprice[n];
						//console.log(" The value to be added is: "+calculatedvalue2);
						buyvalue+=calculatedvalue2;
						//console.log("After addition the buyvalue is: "+buyvalue)
						remainingamount=remainingamount-unitavailableinthisindex;
						unitavailableinthisindex=quantitysalesunit[n+1];
					 }
					 
					 kk++;
				 }
				 
				 totalunitexhausted +=currentsalesunitamt;
				 //console.log("The Total Unit exhausted so far from stock is"+totalunitexhausted);
				 //console.log("Sales Value is"+salesval);
				 //console.log("Buy Value is"+buyvalue);
				 var displayamount=(salesval-buyvalue).toFixed(2);
				 //var displayamount=(salesval-buyvalue);
				 row.cells[5].innerHTML=displayamount;
				 
			   }    

				  
			}

	
}//Endof function
