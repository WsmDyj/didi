
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude:0,
    scale: 16,
    controls: [],
    markers:[],
    mobileLocation : {//移动选择位置数据
      longitude : 0,
      latitude: 0,
      address: '',
   }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    wx.getLocation({
     type: "gcj02",
     success:(res)=>{
      console.log(res.latitude, res.longitude)
       this.setData({
         longitude:res.longitude,
         latitude: res.latitude
       })
     }
   });
   wx.getSystemInfo({
     success:(res)=>{
      this.setData({
        controls:[{
          id: 4,
          iconPath: '../../assets/images/marker.png',
          position: {
            left: res.windowWidth/2 - 11,
            top: res.windowHeight/2 - 45,
            width: 22,
            height: 45
            },
          clickable: true
        },
        {
          id: 6,
          iconPath: '../../assets/images/location.png',
          position: {
            left: 20, // 单位px
            top: res.windowHeight -200, 
            width: 50, // 控件宽度/px
            height: 50,
            },
          clickable: true
        }]
      })
     }
   })

  },
  bindregionchange: function(e){
    // if(e.type == 'begin'){
    //   wx.request({
    //     url: '',
    //     success: function(res){
    //       this.setData({
    //         _markers: res.data.data
    //       })
    //     },
    //   })
    // }else if(e.type=='end'){
    //   this.setData({
    //     makers: this.data._markers
    //   })
    // }

  },
  bindmarkertap: function(){
      //点击标记市触发
  },
  


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapCtx = wx.createMapContext("didiMap"); // 地图组件的id
    this.movetoPosition();
  },
  movetoPosition: function(){
    this.mapCtx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})