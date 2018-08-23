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
  },
  {
    name: '$10',
    description: '',
    value: 10,
    count: 0
  },
  {
    name: '$20',
    description: '',
    value: 20,
    count: 0
  },
  {
    name: '$50',
    description: '',
    value: 50,
    count: 0
  },
  {
    name: '$100',
    description: '',
    value: 100,
    count: 0
  },
  {
    name: 'RNx$2',
    description: 'RN: Roll of Nickel',
    value: 2,
    count: 0
  },
  {
    name: 'RDx$5',
    description: 'RD: Roll of Dime',
    value: 5,
    count: 0
  },
  {
    name: 'RQx$10',
    description: 'RQ: Roll of Quarter',
    value: 10,
    count: 0
  },
  {
    name: 'RLx$25',
    description: 'RL: Roll of Loonie',
    value: 25,
    count: 0
  },
  {
    name: 'RTx$50',
    description: 'RT: Roll of Toonie',
    value: 50,
    count: 0
  },
];

// Table headers
// Each sub-array represents row
window.headers = [
  ['Deposits'],
  ['Value', 'Count', 'Subtotal']
];

window.footer = ['Total', '$0'];