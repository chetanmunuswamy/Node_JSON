var data;

function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'newData.json', true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);

    }
  }
  xobj.send(null);

}

function createRow(newrow, col1data, col2data, col3data, col4data, col5data, col6data) {
  var newcell1 = newrow.insertCell(0);
  var newcell2 = newrow.insertCell(1);
  var newcell3 = newrow.insertCell(2);
  var newcell4 = newrow.insertCell(3);
  var newcell5 = newrow.insertCell(4);
  var newcell6 = newrow.insertCell(5);

  newcell1.innerHTML = col1data;
  newcell2.innerHTML = col2data;
  newcell3.innerHTML = col3data;
  newcell4.innerHTML = col4data;
  newcell5.innerHTML = col5data;
  newcell6.innerHTML = col6data;

}

function loaddata() {

  var tablelem = document.getElementById("table1");

  var curnoofrows = tablelem.rows.length;
  //console.log(curnoofrows);

  var Grouplabel1 = [];
  var Grouplabel1flag = false;
  var Grouplabel2 = [];
  var Grouplabel2flag = false;
  var skipflag = true;

  //getting response back from my json
  loadJSON(function(response) {
    data = JSON.parse(response);

    //console.log(data.trades);

    for (var index in data.trades) {
      var tempcol1val1 = data.trades[index].Symbol;
      var tempcol1val2 = data.trades[index].Action;
      var col1data = "";
      var col2data = "";
      var col3data = "";
      var col4data = "";
      var col5data = "";
      var col6data = "";

      if (Grouplabel1.indexOf(tempcol1val1) == -1) {
        Grouplabel1.push(tempcol1val1);
        col1data = tempcol1val1;
        Grouplabel1flag = true;
        Grouplabel2.pop();
        Grouplabel2.pop();
        var newrow1 = tablelem.insertRow(curnoofrows);
        col2data = "";
        col3data = "";
        col4data = "";
        col5data = "";
        col6data = "";
        createRow(newrow1, col1data, col2data, col3data, col4data, col5data, col6data);
        curnoofrows++;
      }

      if (Grouplabel1flag) {
        if (Grouplabel2.indexOf(tempcol1val2) == -1) {
          Grouplabel2.push(tempcol1val2);
          col1data = tempcol1val2;
          Grouplabel2flag = true;
          var newrow2 = tablelem.insertRow(curnoofrows);
          col2data = "";
          col3data = "";
          col4data = "";
          col5data = "";
          col6data = "";
          createRow(newrow2, col1data, col2data, col3data, col4data, col5data, col6data);
          curnoofrows++;
        }
      }

      if ((Grouplabel2.indexOf(tempcol1val2) != -1) && (Grouplabel1.indexOf(tempcol1val1) != -1)) {
        var newrow3 = tablelem.insertRow(curnoofrows);
        col1data = "";
        col2data = data.trades[index].TxnId;
        col3data = data.trades[index].Quantity;
        col4data = data.trades[index].Price;
        col5data = data.trades[index].MarketValue;
        //col6data=(col3data*col4data;
        /*Computing the value and putting it in cell6(col6data)*/
        col6data = "";
        createRow(newrow3, col1data, col2data, col3data, col4data, col5data, col6data);
        curnoofrows++;

      }

    }

  });


}