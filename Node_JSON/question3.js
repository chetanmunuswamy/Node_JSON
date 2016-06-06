var fs = require("fs");
var jsonObj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

/*
 * we use the javascript sort function for array and 
 * describe our custom sort order.
 */
jsonObj.trades.sort(function(a, b) {

  var result1 = a.Symbol.localeCompare(b.Symbol);
  if (result1 == -1) return -1;
  else if (result1 == 1) return 1;
  else {
    var result2 = a.Action.localeCompare(b.Action);
    if (result2 == -1) return -1;
    else if (result2 == 1) return 1;
    else {
      return a.TxnId - b.TxnId;
    }
  }

});

fs.writeFile("newData.json", JSON.stringify(jsonObj), function(err) {
  if (err) {
    return console.log(err);
  }
})

console.log("Sort and file newData.json creation competed.");