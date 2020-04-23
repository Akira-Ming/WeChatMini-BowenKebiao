//app.js
App({
  onLaunch: function () {
    this.globalData = {};
    wx.cloud.init({
      env: "akiraming-cloud-o6ar3",
      traceUser: true,
    });
  },
});
