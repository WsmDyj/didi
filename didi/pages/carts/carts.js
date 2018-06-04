import util from '../../utils/index';
const app = getApp()
Page({

  data: {
  
  },
  onLoad(e){
  this.requestCart();
  },
  requestCart(e){
    util.request({
        url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
        mock: false,
      }).then((res)=>{
        const navData = res.data.navData;
        this.setData({
            navData,
        })
      })
},
  backIndex(e){
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
    app.globalData.id=id
    wx.reLaunch({
      url: "/pages/index/index"
    })
  },

})