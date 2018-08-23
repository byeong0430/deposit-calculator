// Create each row of the header
var makeEachHeader = function (rowDOM, subTitle, index) {
  var th = document.createElement('th');
  // The first header row has only 1 column. Set colspan to 2
  if (!index) {
    th.setAttribute('colspan', 3);
  }
  var header = document.createTextNode(subTitle);
  // Append text node to <th> and then append <th> to the row DOM
  th.appendChild(header);
  rowDOM.appendChild(th);
  return rowDOM;
};

// Create table header
var makeHeader = function (rowDOM, titleR, index) {
  var rowDOM;
  // Loop through each sub-array
  titleR.forEach(function (title) {
    rowDOM = makeEachHeader(rowDOM, title, index);
  });
  return rowDOM;
};



// Add createHeader and createTBody to window object to make them global
if (!window.createHeader) {
  window.createHeader = function (headers) {
    var thead = document.createElement('thead');
    // Loop through headers array
    headers.forEach(function (titleRow, index) {
      var tr = makeHeader(document.createElement('tr'), titleRow, index);
      thead.appendChild(tr);
    });
    return thead;
  };
}