// pages/orderService/orderService.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 18,
    latitude: 0,
    longitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
    this.mapCtx = wx.createMapContext("didiMap");
    this.movetoPosition();
  },
  bindcontroltap: (e)=>{
    console.log("hello")
    switch(e.controlId){
      case 2: this.movetoPosition();
      break;
    }
  },
  movetoPosition: function(){
    this.mapCtx.moveToLocation();
  },
 
  bindregionchange: (e)=>{

  },
  toCancel(){
    wx.navigateTo({
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
  toHelp(){
    wx.showToast({
      title: '暂不支持',
      icon: 'success',
      duration: 1000
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