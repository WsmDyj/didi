const app = getApp()
Page({
  data: {
      star: 0,
      starMap: [
         '','','','','',
      ],
      play:'',
      
  },
  myStarChoose(e) {
      let star = parseInt(e.target.dataset.star) || 0;
      this.setData({
          star: star,
      });
  },
  onLoad(){
    wx.getStorage({
      key:'driver',
      success: (res)=>{
          console.log(res.data)
          this.setData({
            driver:res.data
          })
      } 
    })
  // console.log(app.globalData.play)
    this.setData({
      play: app.globalData.play
    })
  },
  toIndex(){
        
    wx.showLoading({
      title: '提交中',
    })
    setTimeout(()=>{
      wx.redirectTo({
        url: '/pages/index/index',
      })
    },2000)
   
  }
});