// Create table header
var makeHeader = function (rowDOM, titleR, index) {
  var rowDOM;
  // Loop through each sub-array
  titleR.forEach(function (title) {
    rowDOM = makeEachHeader(rowDOM, title, index);
  });
  return rowDOM;
};

// Create each row of the header
var makeEachHeader = function (rowDOM, subTitle, index) {
  var th = document.createElement('th');
  // The first header row has only 1 column. Set colspan to 2
  if (!index) {
    th.setAttribute('colspan', 2);
  }
  var header = document.createTextNode(subTitle);
  // Append text node to <th> and then append <th> to the row DOM
  th.appendChild(header);
  rowDOM.appendChild(th);
  return rowDOM;
};



// Create input rows
var makeTableRow = function (trDOM, deposit) {
  var trDOM;
  ['name', 'input'].forEach(function (el) {
    trDOM = makeEachRow(trDOM, deposit, el);
  });
  return trDOM;
};

// Create each input row
var makeEachRow = function (trDOM, deposit, element) {
  var td = document.createElement('td');
  var child;
  if (element === 'name') {
    // Add each deposit array's name
    child = document.createTextNode(deposit[element]);
  } else {
    // Add input field
    child = makeInputBox();
    // Add keyup event
    child.addEventListener('keyup', keyUpEvent);
  }
  td.appendChild(child);
  trDOM.appendChild(td);
  return trDOM;
};

// Create input for integers >= 0
var makeInputBox = function () {
  var input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('min', 0);
  return input;
};



// Execute event on keyup in input boxes
function keyUpEvent() {
  updateDeposits(this);
  updateTotal(calcTotal());
};

function getInputNumVal(currentDOM) {
  // Get current input value
  var textInputVal = $(currentDOM).val();
  // If current input value is an empty string, set it to 0
  return textInputVal === '' ? 0 : parseInt(textInputVal);
}

// Update deposit array
function updateDeposits(curDOM) {
  // Get sub-title of the selected input row (e.g.: $5);
  var siblingText = $(curDOM).parent().siblings().closest('td').text();
  // Get current input value
  var inputVal = getInputNumVal(curDOM);
  // Find the index of the selected row's sub-title and update the count value
  var updateIndex = window.deposits.findIndex(function (deposit) {
    return deposit.name === siblingText;
  });
  window.deposits[updateIndex].count = inputVal;
}

// Calculate the total of the deposit array
function calcTotal() {
  return window.deposits.reduce(function (accum, obj) {
    return accum + (obj.value * obj.count);
  }, 0);
}

// Update the total on the table
function updateTotal(total) {
  $("td:contains('Total')").siblings().text('$' + total);
}



// Make footer
var makeFooter = function (trDOM, footer) {
  var trDOM;
  footer.forEach(function (item) {
    trDOM = makeEachFooter(trDOM, item);
  });
  return trDOM;
};

// Make each footer row
var makeEachFooter = function (trDOM, footerItem) {
  var td = document.createElement('td');
  var textNode = document.createTextNode(footerItem);
  td.appendChild(textNode);
  trDOM.appendChild(td);
  return trDOM;
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

if (!window.createTBody) {
  window.createTBody = function (deposits) {
    // Create tbody element
    var tbody = document.createElement('tbody');
    deposits.forEach(function (item) {
      var tr = makeTableRow(document.createElement('tr'), item);
      tbody.appendChild(tr);
    });
    return tbody;
  };
}

if (!window.createTFooter) {
  window.createTFooter = function () {
    // Create tbody element
    var tbody = document.createElement('tfoot');
    var tr = makeFooter(document.createElement('tr'), window.footer);
    tbody.appendChild(tr);
    return tbody;
  }
}