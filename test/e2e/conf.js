exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoListFeature.js'],
  capabilities: {
    'browserName': 'firefox'
  },
};