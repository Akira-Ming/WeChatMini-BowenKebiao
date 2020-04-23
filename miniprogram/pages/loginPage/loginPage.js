// pages/loginPage/loginPage.js
Page({
  _headerSubmit: function (evt) {
    let fsm = wx.getFileSystemManager();
    console.log(evt.detail.value.pwd);
    if (
      evt.detail.value.account != "" &&
      evt.detail.value.account == evt.detail.value.pwd
    ) {
      wx.showModal({
        title: "提示",
        content: "您的密码为初始密码，请先前往官网修改",
        success(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    } else if (evt.detail.value.pwd == "" || evt.detail.value.account == "") {
      wx.showModal({
        title: "提示",
        content: "请输入账号或密码",
        // success(res) {
        //   if (res.confirm) {
        //     console.log("用户点击确定");
        //   } else if (res.cancel) {
        //     console.log("用户点击取消");
        //   }
        // },
      });
    } else {
      // 登录成功提示
      wx.showLoading({
        title: "加载中",
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 2000);
      // 账号密码加密
      wx.cloud.callFunction({
        name: "UserInfoEncoded",
        data: {
          account: evt.detail.value.account,
          pwd: evt.detail.value.pwd,
        },
        success: (res) => {
          // 得到密文，进行登录
          console.log(res.result);
          var aaa = res.result;
          fsm.writeFile({
            // 将密文写入文件wx.env.USER_DATA_PATH
            filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
            data: aaa,
            encoding: "utf8",
            success: (res) => {
              console.log(res);
              console.log(aaa + "写入成功");
              //保存文件 --- 不要用保存垃圾
              // wx.saveFile({
              //   // tempFilePath: wx.env.USER_DATA_PATH + "/userFile.txt",
              //   filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
              //   success(res) {
              //     console.log(res);
              //     console.log("保存成功");
              //     fsm.readFile({
              //       filePath: res.savedFilePath,
              //       // filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
              //       encoding: "utf8",
              //       success: function (res) {
              //         console.log(res);
              //         console.log(res.data + "读取成功");
              //       },
              //     });
              //   },
              // });
              // console.log(res.result);
            },

            fail: (res) => {
              console.log(res);
            },
          });
          // 登录
          wx.cloud.callFunction({
            name: "getKeBiao",
            data: {
              encoded: res.result,
            },
            success: (res) => {
              // 判断是否登录成功
              console.log(res.result);
              if (res.result == "") {
                wx.showModal({
                  title: "提示",
                  content: "登录失败！请检查账号或密码！",
                  // success()
                });
              } else {
                // 登录成功跳转页面
                wx.reLaunch({
                  url: "../../pages/headTest/headTest",
                });
              }
            },
          });
        },
      });
    }
  },

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
