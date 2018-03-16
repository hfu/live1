const tilelive = require('@mapbox/tilelive')
require('tilelive-http')(tilelive)
require('@mapbox/mbtiles').registerProtocols(tilelive)


