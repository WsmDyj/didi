const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    time: '',
  },
  toRules(){
    wx.showToast({
      title: '暂未开放',
      icon: 'success',
      duration: 2000
    })
  },
  onLoad(){
    this.setData({
      time:util.formatTime(new Date()),
      starAddress: app.globalData.bluraddress,
      eddAddress: app.globalData.destination,
    })
  }
  
})