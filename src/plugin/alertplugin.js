export default {
  install(app, option) {
    let current = "ru";
    const cnglang = (name) => {
      current = name;
    };

    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };
    app.config.globalProperties.$i18 = (key) => {
      return key.split(".").reduce((word, k) => {
        return word[k] || "unknow";
      }, option[current]);
    };
    app.provide("cnglang", cnglang);
  },
};
