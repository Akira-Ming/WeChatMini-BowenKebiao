// pages/headTest/headTest.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    kcxxArr: [],
    select: false,
    tihuoWay: "",
    zc: [
      "第 1 周",
      "第 2 周",
      "第 3 周",
      "第 4 周",
      "第 5 周",
      "第 6 周",
      "第 7 周",
      "第 8 周",
      "第 9 周",
      "第 10 周",
      "第 11 周",
      "第 12 周",
      "第 13 周",
      "第 14 周",
      "第 15 周",
      "第 16 周",
      "第 17 周",
      "第 18 周",
      "第 19 周",
      "第 20 周",
      "第 21 周",
      "第 22 周",
      "第 23 周",
      "第 24 周",
      "第 25 周",
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let fsm = wx.getFileSystemManager();
    fsm.readFile({
      // filePath: res.savedFilePath,
      filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
      encoding: "utf8",
      success: function (res) {
        console.log(res);
        console.log(res.data + "读取成功");
        if (res.data == "") {
          wx.reLaunch({
            url: "../../pages/loginPage/loginPage",
          });
        }
      },
      fail: (err) => {
        // 未检测到本地文件
        wx.reLaunch({
          url: "../../pages/loginPage/loginPage",
        });
      },
    });
    console.log("跳转成功onload");
  },
  // ---------------------------------
  bindShowMsg() {
    this.setData({
      select: !this.data.select,
    });
  },

  mySelect(e) {
    let fsm = wx.getFileSystemManager();
    let that = this;
    let encode;
    var name1 = e.currentTarget.dataset.name;
    var zcid = e.currentTarget.id;
    // -------------------------------------
    readEncoded();
    function readEncoded() {
      fsm.readFile({
        // filePath: res.savedFilePath,
        filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
        encoding: "utf8",
        success: function (res) {
          console.log(res.data + "点击读取成功");
          encode = res.data;
          // return res.data;
          wx.cloud.callFunction({
            name: "getKeBiao",
            data: {
              encoded: encode,
              zc: zcid,
              xnxq01id: "2019-2020-2",
            },
            success: (res) => {
              console.log(res.result);

              that.setData({
                kcxxArr: res.result,
              });
            },
          });
        },
      });
    }
    // console.log(readEncoded());
    // getCurrentPages()[getCurrentPages().length - 1].onLoad();
    // console.log(e);

    // console.log(zcid);

    this.setData({
      tihuoWay: name1,
      select: false,
    });
  },

  clooseZc() {
    this.setData({
      select: false,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 登录成功提示
    wx.showLoading({
      title: "加载中",
    });
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
    // 开学第一周
    const FIRST_WEEK_YEAR = 2020; //年
    const FIRST_WEEK_MONTH = 3; // 月
    const FIRST_WEEK_DATE = 2; // 日
    let encode;
    let fsm = wx.getFileSystemManager();
    var todayZc = getTodayWeek();
    let that = this;
    // ---------------------------------------
    console.log("跳转成功onready");
    this.setData({
      tihuoWay: "第 " + todayZc + " 周",
    });
    // 读取密码
    readEncoded();
    function readEncoded() {
      console.log("跳转成功onready");
      fsm.readFile({
        // filePath: res.savedFilePath,
        filePath: wx.env.USER_DATA_PATH + "/userFile.txt",
        encoding: "utf8",
        success: function (res) {
          encode = res.data;
          console.log(encode);
          // return res.data;
          wx.cloud.callFunction({
            name: "getKeBiao",
            data: {
              // encoded: "MTgwNjA0MzA=%%%YmU2NDg5NDM=",
              encoded: encode,
              zc: todayZc,
              xnxq01id: "2019-2020-2",
            },
            success: (res) => {
              console.log(res.result);

              that.setData({
                kcxxArr: res.result,
              });
              res.result = [];
            },

            fail: (err) => {
              console.log(err);
            },
          });
        },
        fail: (res) => {
          console.log(res);
        },
      });
    }
    // console.log(readEncoded());
    // -------------------------------

    // -----------------------------

    function getTodayWeek() {
      let todaySchoolWeek =
        getNewYearWeek() -
        getYearWeek(FIRST_WEEK_YEAR, FIRST_WEEK_MONTH, FIRST_WEEK_DATE) +
        1;
      return todaySchoolWeek;
    }

    function getYearWeek(a, b, c) {
      /*  
      date1是当前日期  
      date2是当年第一天  
      d是当前日期是今年第多少天  
      用d + 当前年的第一天的周差距的和在除以7就是本年第几周  
      */
      var date1 = new Date(a, parseInt(b) - 1, c),
        date2 = new Date(a, 0, 1),
        d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
      return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
    }

    function getNewYearWeek() {
      let date3 = new Date();
      let a = date3.getFullYear();
      let b = date3.getMonth() + 1;
      let c = date3.getDate();
      let date1 = new Date(a, parseInt(b) - 1, c),
        date2 = new Date(a, 0, 1),
        d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
      return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
    }
  },

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
