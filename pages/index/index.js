// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    time: (new Date()).toString(),
    var2: undefined, // undefined的变量不会显示
    var3: null,
    var4: "var4",
    length: 4,
    books: [
        {name: "hello", price: 30.2},
        {name: "world", price: 73.2},
        {name: "大鸡鸡", price: 53.1}
    ],
  },
})
