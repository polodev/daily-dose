var grid_row = document.querySelectorAll('grid-row');
var grid_row_array = [];
grid_row.forEach(function (item) {
  $grid_row_data = {};

})
// grid row
var data  = [];
$('grid-row').each(function () {
  var grid_cells_data = [];
  $(this).find('grid-cell').each(function () {
    var text = $(this).text();
    grid_cells_data.push(text);
  })
  data.push(grid_cells_data)
})
copy(data);


$('grid-row').each(function() {
  console.log(this);
})

var s = document.createElement('script');
s.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName('head')[0].appendChild(s)


var grid_column_header  = [];
$('grid-column-header').each(function () {
    var text = $(this).text();
    grid_column_header.push(text);
})
copy(grid_column_header);
