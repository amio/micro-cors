const DEFAULT_MAX_AGE_SECONDS = 60 * 60 * 24 // 24 hours
const DEFAULT_ALLOW_METHODS = 'HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS'
const DEFAULT_ALLOW_HEADERS = [
  'X-Requested-With',
  'X-HTTP-Method-Override',
  'Access-Control-Allow-Origin',
  'Authorization',
  'Content-Type',
  'Accept'
].join(',')

const cors = options => handler => (req, res, ...restArgs) => {
  const isPreflight = req.method === 'OPTIONS'
  const {
    origin = '*',
    maxAge = DEFAULT_MAX_AGE_SECONDS,
    allowMethods = DEFAULT_ALLOW_METHODS,
    allowHeaders = DEFAULT_ALLOW_HEADERS,
    exposeHeaders
  } = (options || {})

  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Max-Age', maxAge)
  res.setHeader('Access-Control-Allow-Origin', origin)

  if (isPreflight) {
    res.setHeader('Access-Control-Allow-Methods', allowMethods)
    res.setHeader('Access-Control-Allow-Headers', allowHeaders)
  }

  if (typeof exposeHeaders === 'string') {
    res.setHeader('Access-Control-Expose-Headers', exposeHeaders)
  }

  return handler(req, res, ...restArgs)
}

module.exports = cors
