function getPublicPath() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://github.com/chnkarl/vue-mobile-calendar-diy/';
  } else {
    return '/';
  }
}

module.exports = {
  lintOnSave: true,
  css: {
    extract: false,
  },
  publicPath: getPublicPath(),
};
