// Make footer
var makeFooter = function (trDOM, footer) {
  var trDOM;
  footer.forEach(function (item, index) {
    trDOM = makeEachFooter(trDOM, item, index);
  });
  return trDOM;
};

// Make each footer row
var makeEachFooter = function (trDOM, footerItem, index) {
  var td = document.createElement('td');
  td.setAttribute('class', 'name');
  // The first header row has only 1 column. Set colspan to 2
  if (!index) {
    td.setAttribute('colspan', 2);
  }

  var textNode = document.createTextNode(footerItem);
  td.appendChild(textNode);
  trDOM.appendChild(td);
  return trDOM;
};



if (!window.createTFooter) {
  window.createTFooter = function () {
    // Create tbody element
    var tbody = document.createElement('tfoot');
    var tr = makeFooter(document.createElement('tr'), window.footer);
    tbody.appendChild(tr);
    return tbody;
  }
}