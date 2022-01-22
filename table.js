var table_div = document.querySelector('#table_wrapper');
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
function generate_th(text) {
  var th = document.createElement('th');
  var th_text = document.createTextNode(text);
  th.appendChild(th_text);
  return th;
}
function generate_td(text) {
  var td = document.createElement('td');
  var td_text = document.createTextNode(text);
  td.appendChild(td_text);
  return td;
}

function genrate_tr(columns, isHeading=false) {
  console.log('columns', columns)
  console.log('is_array', Array.isArray(columns))
  var tr = document.createElement('tr');
  var trOrTh = isHeading? generate_th : generate_td;
  columns.forEach(function (item) {
    var trOrThElement = trOrTh(item);
    tr.appendChild(trOrThElement);
  })
  columns.forEach( (item) => {
    var trOrThElement = trOrTh(item);
    tr.appendChild(trOrThElement);
  })
  return tr;
}

var heading_columns = [
  'column1',
  'column2',
  'column3',
];
var heading_row = genrate_tr(heading_columns, true);


var row1_values = [
  'row 1 first column',
  'row 1 2nd column',
  'row 1 third column',
];
var row2_values = [
  'row 2 first column',
  'row 2 2nd column',
  'row 2 third column',
];
var row3_values = [
  'row 3 first column',
  'row 3 2nd column',
  'row 3 third column',
];
var row4_values = [
  'row 4 first column',
  'row 4 2nd column',
  'row 4 third column',
];
var row1 = genrate_tr(row1_values);
var row2 = genrate_tr(row2_values);
var row3 = genrate_tr(row3_values);
var row4 = genrate_tr(row4_values);




thead.appendChild(heading_row);
tbody.appendChild(row1);
tbody.appendChild(row2);
tbody.appendChild(row3);
tbody.appendChild(row4);
table.appendChild(thead);
table.appendChild(tbody);
table_div.appendChild(table);


