const tilelive = require('@mapbox/tilelive')
const MBTiles = require('@mapbox/mbtiles')
MBTiles.registerProtocols(tilelive)

tilelive.load('mbtiles://./test.mbtiles', (err, dst) => {
  if (err) console.log(err)
  dst.startWriting(err => { 
    dst.putTile(0, 0, 0, 'adfadca', err => {
      dst.stopWriting(err => console.log)
    })
  })
  console.log('writing finished')
})

tilelive.load('mbtiles://./test.mbtiles', (err, src) => {
  if (err) console.log(err)
  console.log('getting info')
  src.getInfo((err, info) => {
    if (err) console.log(err)
    console.log(info)
  })
//  src.getTile(0, 0, 0, (err, data, headers) => {
//    if (err) console.log(err)
//    console.log(data)
//  })
})
