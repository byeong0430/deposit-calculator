$(document).ready(function () {
  // Create table
  // Select body tag
  var body = $('body')[0];
  // Create table element
  var table = document.createElement('table');
  // Stylize table
  table.setAttribute('border', 1);

  // Construct thead
  var thead = window.createHeader(window.headers);

  // Construct tbody
  var tbody = window.createTBody(window.deposits);

  // Construct tfooter
  var tfoot = window.createTFooter();

  // Append all table elements to the table DOM
  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tfoot);

  // Append the table to body
  body.appendChild(table);
});