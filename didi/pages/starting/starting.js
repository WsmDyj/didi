var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key:'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
Page({
  data: {
    scale: 16,
    latitude: 0,
    longitude: 0,
    address: '',
    bluraddress: ''
  },
  onLoad: function (options) {
    wx.getLocation({
      type: "gcj02",
      success:(res)=>{
        // console.log(res)
        this.setData({
          longitude:res.longitude,
          latitude: res.latitude
        })
     
    var that = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude:  res.latitude,
        longitude: res.longitude,
    },
      success: function (res) {
        that.setData({
          address: res.result.address,
          bluraddress: res.result.formatted_addresses.recommend
        });
      },
    
    });
      }
      })

    // this.moveToLocation();

    wx.getSystemInfo({
      success: (res)=>{
        this.setData({
          controls:[{
            id: 1,
            iconPath: '../../assets/images/marker.png',
            position: {
              left: res.windowWidth/2 - 11,
              top: res.windowHeight/2 - 45,
              width: 22,
              height: 45
              },
            clickable: true
          },{
            id: 2,
            iconPath: '../../assets/images/location.png',
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

  onReady: function(){
    this.mapCtx = wx.createMapContext("didiMap"); // 地图组件的id
    this.movetoPosition()

  },
  controltap: function(e){
    console.log("hello")
    console.log(e.controlId)
  
  },
  bindregionchange: function(e){
    var that = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
      qqmapsdk.reverseGeocoder({
        location: {
          latitude:  res.latitude,
          longitude: res.longitude,
      },
      success: function (res) {
        console.log(res)
        that.setData({
          address: res.result.address,
          bluraddress: res.result.formatted_addresses.recommend
        })
      },
       
      });
       
      }
    })

  },
  movetoPosition: function(){
    this.mapCtx.moveToLocation();
  },
toIndex(){
  let address = this.data.bluraddress;
  // console.log(address)
  wx.redirectTo({
    url: "/pages/index/index?address="+address,
    success: function(res){
      // success
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
},
  
  
})