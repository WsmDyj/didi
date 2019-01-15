var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key:'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
import util from '../../utils/index';

const app = getApp();
Page({
  data: {
    scale: 14,
    hiddenLoading:false
  },
  onLoad: function () {

    let { bluraddress,strLatitude,strLongitude,endLatitude,endLongitude} = app.globalData
    this.setData({
      markers: [{
        iconPath: "../../assets/images/str.png",
        id: 0,
        latitude: strLatitude,
        longitude:strLongitude,
        width: 30,
        height: 30
      },{
        iconPath: "../../assets/images/end.png",
        id: 0,
        latitude: endLatitude,
        longitude:endLongitude,
        width: 30,
        height: 30
      }],
      polyline: [{
        points: [{
          longitude: strLongitude,
          latitude: strLatitude
        }, {
          longitude:endLongitude,
          latitude:endLatitude
        }],
        color:"red",
        width: 4,
        dottedLine: true
      }],
  
    });
   
  wx.getSystemInfo({
    success: (res)=>{
      this.setData({
        controls:[{
          id: 1,
          iconPath: '../../assets/images/mapCart.png',
          position: {
            left: res.windowWidth/2 - 11,
            top: res.windowHeight/2 - 60,
            width: 22,
            height: 45
            },
          clickable: true
        },{
          id: 2,
          iconPath: '../../assets/images/location.png',
          position: {
            left: 20, // 单位px
            top: res.windowHeight -150, 
            width: 40, // 控件宽度/px
            height: 40,
            },
          clickable: true
        },{
          id: 3,
          iconPath: '../../assets/images/walk.png',
          position: {
            left: 20, // 单位px
            top: res.windowHeight -200, 
            width: 40, // 控件宽度/px
            height: 40,
            },
          clickable: true
        }],
     
      })
    }
  })
  
  },

  onShow(){
    this.requesDriver();
    this.mapCtx = wx.createMapContext("didiMap");
    this.movetoPosition();
  },
  requesDriver(){
    util.request({
      url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
      mock: false,
    }).then((res)=>{
      
      const drivers = res.data.drivers
      const driver = drivers[Math.floor(Math.random()*drivers.length)];
      wx.setStorage({
        key:"driver",
        data:driver
      });
      this.setData({
        hiddenLoading:true,
        driver:driver
      })
    })

  },
  bindcontroltap: (e)=>{
    console.log("hello")
    this.movetoPosition();
  },
  onReady(){
   
  },
  movetoPosition: function(){
    this.mapCtx.moveToLocation();
  },
 
  bindregionchange: (e)=>{

  },
  toCancel(){
    wx.redirectTo({
      url: "/pages/cancel/cancel"
    })
   
  },
  toApp(){
    wx.showToast({
      title: '暂不支持',
      icon: 'success',
      duration: 1000
    })
  },
  toEvaluation(){
    wx.redirectTo({
      url:"/pages/evaluation/evaluation",
    })
  },
  onReady: function () {
    wx.getLocation({
      type: "gcj02",
      success:(res)=>{
        this.setData({
          longitude:res.longitude,
          latitude: res.latitude
        })
      }
      })
     
  },

  
  
})