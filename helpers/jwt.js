const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secretadmin'
const JWT_SECRET_CUSTOMER = 'secretcustomer'

module.exports = {
  signToken: (payload, isCustomer) => {
    if (isCustomer) return jwt.sign(payload, JWT_SECRET_CUSTOMER)
    return jwt.sign(payload, JWT_SECRET)
  },
  verifyToken: (token, isCustomer) => {
    if (isCustomer) return jwt.verify(token, JWT_SECRET_CUSTOMER)
    return jwt.verify(token, JWT_SECRET)
  }
}
