// 云函数入口文件
const cloud = require("wx-server-sdk");
const request = require("request");
const cheerio = require("cheerio");

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  {
    var cookies;

    login();
    function login() {
      exports.abc = [];
      //登陆post地址
      let url = "http://54.222.196.251:81/gllgdxbwglxy_jsxsd/xk/LoginToXk";
      //登陆的用户邮箱和密码密文
      let loginEncode = event.encoded;
      //登陆post的所有数据form data
      let datas = {
        encoded: loginEncode,
      };

      //设置头部
      let headers = {
        "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36`,
      };

      let opts = {
        url: url,
        method: "POST",
        headers: headers,
        form: datas,
      };

      //模拟登陆
      request(opts, (e, r, b) => {
        cookies = r.headers["set-cookie"];
        getKcxx();
      });
    }

    function getKcxx() {
      let opts = {
        url: "http://54.222.196.251:81/gllgdxbwglxy_jsxsd/xskb/xskb_list.do",
        method: "POST",

        headers: {
          // encoding: null,
          "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36`,
          Cookie: cookies, //这里是登陆后得到的cookie,(重点)
        },
        form: {
          zc: event.zc,
          xnxq01id: event.xnxq01id,
        },
      };
      request(opts, (e, r, b) => {
        if (e) {
          console.log(e.message);
        } else {
          let $ = cheerio.load(r.body);
          let test = [];
          $("[id $= '-1']").each(function (i, e) {
            test[i] = $(e).text();
          });
          exports.abc = test;
        }
      });
    }
  }
  return new Promise((resolve, reject) => {
    // 在 3 秒后返回结果给调用方（小程序 / 其他云函数）
    setTimeout(() => {
      resolve(exports.abc);
    }, 500);
  });
};
