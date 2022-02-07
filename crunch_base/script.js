(function () {
var App = {
  init: function () {
    this.domCached()
    this.render()
  },
  data: data,
  data_head: data_head,
  domCached: function () {
    this.crunch_base_table_tbody = document.getElementById('crunch_base_table_tbody')
    this.crunch_base_table_thead = document.getElementById('crunch_base_table_thead');
  },
  generateTd: function (tdValue, tr) {
    let td = document.createElement('td');
    let text = document.createTextNode(tdValue);
    td.appendChild(text);
    tr.appendChild(td);
  },
  generateTh: function (thValue, tr) {
    let th = document.createElement('th');
    let text = document.createTextNode(thValue);
    th.appendChild(text);
    tr.appendChild(th);
  },
  render: function () {
    this.data.forEach(single_row => {
      let tr = document.createElement('tr');
      single_row.forEach(single_td => {
        this.generateTd(single_td, tr)
      })
      this.crunch_base_table_tbody.appendChild(tr);
    })

    let data_head_tr = document.createElement('tr');
    data_head.forEach(single_td => {
      this.generateTh(single_td, data_head_tr)
    })
    this.crunch_base_table_thead.appendChild(data_head_tr);

  }
}
App.init();

}())
