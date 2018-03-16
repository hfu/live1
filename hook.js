const tilelive = require('@mapbox/tilelive')
const MBTiles = require('@mapbox/mbtiles')
MBTiles.registerProtocols(tilelive)

tilelive.load('mbtiles://./test.mbtiles', (err, dst) => {
  if (err) console.log(err)
  dst.startWriting(err => console.log)
  console.log(dst.putTile(0, 0, 0, 1431534314, err => console.log))
  dst.stopWriting(err => console.log)
})

