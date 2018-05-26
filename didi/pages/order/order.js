// pages/order/order.js
Page({

  data: {
    reasons:[
    {
      value:0,
     name: '行程有变，暂时不需要用车',
      checked:false
    },{
      value:1,
     name: '赶时间，换用其它交通工具',
      checked:false
    },{
      value:2,
      name: '平台派单太远',
      checked:false
    },{
      value:3,
      name: '司机以各种理由不来接我',
      checked:false
    },{
      value:4,
      name: '联系不上司机',
      checked:false
    },{
      value:5,
      name: '我找不到终点',
      checked:false
    }
  ],
 
  },
  bindReasonChange(e){
    let reasons = this.data.reasons;
    let strVal = e.detail.value;
    for(var i = 0, lenI = reasons.length; i < lenI; ++i){
      reasons[i].checked = false;
      for(var j = 0, lenJ = strVal.length; j < lenJ; ++j){
        if(reasons[i].value==strVal[j]){
          reasons[i].checked =true;
          break;
        }
      }
    }
    this.setData({
      reasons
    })
  },
  moreReasons(e){
    wx.showToast({ 
      title: '加载中', 
      icon: 'loading', 
      duration: 2000
      });
     
  },
})