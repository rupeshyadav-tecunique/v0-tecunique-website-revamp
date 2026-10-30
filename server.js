// cPanel Phusion Passenger / Node.js App Startup File
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
// Support both standard numeric ports and cPanel Passenger Unix sockets/pipes
const rawPort = process.env.PORT || 3000
const port = isNaN(Number(rawPort)) ? rawPort : parseInt(rawPort, 10)
const nextPort = typeof port === 'number' ? port : 3000
const app = next({ dev, hostname, port: nextPort })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error handling request:', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  })
    .once('error', (err) => {
      console.error('Server error:', err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> TecUnique server listening on port ${port}`)
    })
})
