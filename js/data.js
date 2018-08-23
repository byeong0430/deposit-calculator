// Save deposits array in window object to make it globally available.
window.deposits = [
  {
    name: '$1',
    description: 'loonie',
    value: 1,
    count: 0
  },
  {
    name: '$2',
    description: 'toonie',
    value: 2,
    count: 0
  },
  {
    name: '$5',
    description: '',
    value: 5,
    count: 0
  }
];

// Table headers
// Each sub-array represents row
window.headers = [
  ['Deposits'],
  ['Value', 'Count', 'Subtotal']
];

window.footer = ['Total', '$0'];