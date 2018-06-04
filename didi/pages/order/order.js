import util from '../../utils/index';
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
  show: false,
  
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
    wx.showLoading({ 
      title: '加载中', 
      icon: 'loading', 
      duration: 500,
      success: (res)=>{
        
      }
      });
    
  setTimeout(()=>{
    const moreReason = [
      {
        value:6,
        name: '司机未在规定的时间到达站点',
        checked:false
      },{
        value:7,
        name: '司机找不到上车地点',
        checked:false
      },{
        value:8,
        name: '司机要求加价或现金交易',
        checked:false
      },
      {
        value:9,
        name: '司机服务态度恶劣',
        checked:false
      },
      {
        value:10,
        name: '不是订单显示车辆或司机',
        checked:false
      },
      {
        value:11,
        name: '其他',
        checked:false
      }
      
    ];
    
    const reasons = this.data.reasons;
    const total = reasons.concat(moreReason)
    this.setData({
      show:true,
        reasons: total
    })
    
  },500)
      
  },
})