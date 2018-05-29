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
    const id = e.currentTarget.dataset.id;
    const name = e.currentTarget.dataset.name;
 
    wx.reLaunch({
      url: `/pages/index/index?id=${id}`
    })
  },

})