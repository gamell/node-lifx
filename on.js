var LifxClient = require('node-lifx').Client;
var client = new LifxClient();
client.on('light-new', function(light) {
  light.on(0, process.exit);
});
client.init();
