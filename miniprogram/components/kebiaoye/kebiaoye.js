// components/kebiaoye/kebiaoye.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    kcxxArrM: Array,
    // wlistmM: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    colorArrays: [
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      "#f6f6f6",
      // "#d2e6b3",
      // "#85B8CF",
      // "#90C652",
      // "#D8AA5A",
      // "#FC9F9D",
      // "#0A9A84",
      // "#61BC69",
      // "#12AEF3",
      // "#E29AAD",
    ],

    wlist: [
      //上课长度全部默认为两节课
      // 第一大节
      {
        xqj: 1,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 1,
        skcd: 2,
        kcxx: "",
      },
      // 第二大节
      {
        xqj: 1,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 3,
        skcd: 2,
        kcxx: "",
      },
      // 第三
      {
        xqj: 1,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 5,
        skcd: 2,
        kcxx: "",
      },
      // 第四大节
      {
        xqj: 1,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 7,
        skcd: 2,
        kcxx: "",
      },
      // 第五
      {
        xqj: 1,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 9,
        skcd: 2,
        kcxx: "",
      },
      // 第六
      {
        xqj: 1,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 2,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 3,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 4,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 5,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 6,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
      {
        xqj: 7,
        sksj: 11,
        skcd: 2,
        kcxx: "",
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
