const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secretforjwt'

module.exports = {
  signToken: (payload) => {
    return jwt.sign(payload, JWT_SECRET)
  },
  verifyToken: (token) => {
    return jwt.verify(token, JWT_SECRET)
  }
}
