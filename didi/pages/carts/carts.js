// pages/carts/carts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData:[
      {id:0,name:'快车',url:'../../assets/images/cart1.png'},
      {id:1,name:'专车',url:'../../assets/images/cart2.png'},
      {id:2,name:'出租车',url:'../../assets/images/cart3.png'},
      {id:3,name:'顺风车',url:'../../assets/images/cart4.png'},
      {id:4,name:'公交',url:'../../assets/images/cart5.png'},
      {id:4,name:'代驾',url:'../../assets/images/cart6.png'},
      {id:4,name:'自驾租车',url:'../../assets/images/cart7.png'},
      {id:4,name:'二手车',url:'../../assets/images/cart8.png'},
    ]
  },
  backIndex(e){
    const id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateBack({ changed: true }); 
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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