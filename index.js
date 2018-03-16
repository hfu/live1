const tilelive = require('@mapbox/tilelive')
require('tilelive-http')(tilelive)
require('@mapbox/mbtiles').registerProtocols(tilelive)

console.log(tilelive.list)

/*
const scheme = tilelive.Scheme.create('scanline', {
  minzoom: 10, maxzoom: 11, bbox: [-118.9448, 32.8007, -117.6462, 34.8233]
})

let copyTask = new tilelive.CopyTask(
  'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
  'mbtiles://./watercolor-la.mbtlies', scheme
)
copyTask.formats = ['tile']

copyTask.start(err => {
  if(err) throw err
})

copyTask.on('progress', console.log)
copyTask.on('finished', () => {console.log('complete.')})
*/
