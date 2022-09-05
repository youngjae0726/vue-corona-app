const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    overlay: false,
  },
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-corona-app" : "/",
  outputDir: "docs",
};
