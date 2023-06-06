const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models')

module.exports = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    const { id, role } = verifyToken(access_token)
    if (!id) throw { name: 'Unauthorized' }

    const user = await User.findByPk(id)
    if (!user) throw { name: 'Unauthorized' }

    req.user = { id, role }
    next()
  } catch (err) {
    next(err)
  }
}

