module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my-home-app/'
      : '/'
  }