import Vue from "vue";
import VueResource from "vue-resource"; //请求歌曲的相关数据
var querystring = require("querystring"); //转换请求的字符串代码
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
export function fetchSongList(options) {
  var otherParams = {
    csrf_token: "",
    type: 1,
    offset: 0,
    limit: 10,
    total: true,
  };
  var postData = Object.assign(options, otherParams);
  console.log(postData);
  //vue-resource 当需要发送大量的参数到服务器的时候,需要使用post请求
  var p = Vue.http.post("/api163/search/get/web", postData);
  p.then(
    (resp) => {
      console.log(resp.data);
    },
    (resp) => {
      console.log("request error");
    }
  );
  return p;
}
export function fetchSong(music_id) {
  var p = Vue.http.get(
    "/api163/song/detail?id=" + music_id + "&ids=" + "%5B" + music_id + "%5D"
  );
  console.log(
    "url",
    "http://music.163.com/api/song/detail?id=" +
      music_id +
      "&ids=" +
      "%5B" +
      music_id +
      "%5D"
  );
  p.then(
    (resp) => {
      console.log(resp.data);
    },
    (resp) => {
      console.log("request error");
    }
  );
  return p;
}
export function fetchLyric(music_id) {
  var p = Vue.http.get(
    "/api163/song/lyric?os=pc&id=" + music_id + "&lv=-1&kv=-1&tv=-1"
  );
  p.then(
    (resp) => {
      console.log(resp.data);
    },
    (resp) => {
      console.log("request error");
    }
  );
  return p;
}
