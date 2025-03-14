export default {
  install(app, option) {
    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };
    app.config.globalProperties.$i18 = (key) => {
      return key.split(".").reduce((word, k) => {
        return word[k];
      }, option);
    };
  },
};
