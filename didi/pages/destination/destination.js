var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key:'DHNBZ-2ZLKK-T7IJJ-AXSQW-WX5L6-A6FJZ'
});
const app = getApp();
Page({

  data: {
      entity:[
        {id:0,title:'江西农业大学',address:'江西南昌市志敏大道1101号'},
        {id:1,title:'昌北机场T2航空楼',address:'江西南昌市新建区机场大道'},
        {id:2,title:'万达广场(红谷滩店)',address:'江西省南昌市青山湖区会展路999号'},
        {id:3,title:'范家新村-公交站',address:'青三湖区广兰路东'},
        {id:4,title:'东华大道',address:'江西省南昌市青山湖区'},
        {id:5,title:'江西财经大学(蛟桥园校区)',address:'江西省南昌市青山湖区双港东大街169号'},
        {id:6,title:'江西财经大学(麦庐园校区北门)',address:'江西省南昌市青山湖区枫林大道632号'},
        {id:7,title:'东华理工大学(南昌校区)',address:'江西省南昌市青山湖区广兰大道418号'},
        {id:8,title:'南昌西站',address:'江西省南昌市新建县西站大街'},
        {id:9,title:'东华大道',address:'江西省南昌市青山湖区'},
        {id:10,title:'八一广场',address:'江西省南昌市东湖区八一大道'},
    ],
    value: '',
    address: []
  },

  toIndex(e){
    const destination = e.currentTarget.dataset.destination;
    const endAddress =  e.currentTarget.dataset.end;
    qqmapsdk.geocoder({
      address: endAddress,
      success: function(res){
        app.globalData.endLatitude=res.result.location.lat;
        app.globalData. endLongitude= res.result.location.lng;
      }
    })
    app.globalData.destination=destination,
    wx.redirectTo({
      url: "/pages/index/index",
    })
  },

  switchCity(e){
    qqmapsdk.getCityList({
      success: function(res){
        console.log(res)
      }
    })
  },
  searchInputend(e){
   
    var that = this;
    var  value = e.detail.value
    var address = that.address;
   
    qqmapsdk.getSuggestion({
      keyword: value,
      region: '南昌',
      success: function(res){
        let data = res.data
      that.setData({
        address: data,
        value
      })
      }
    })
  },
  
})