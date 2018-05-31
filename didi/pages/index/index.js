import util from '../../utils/index';

const app = getApp()
Page({
    data: {
        navData:[
            {id:0,name:'快车',url:'../../assets/images/cart1.png'},
            {id:1,name:'专车',url:'../../assets/images/cart2.png'},
            {id:2,name:'出租车',url:'../../assets/images/cart3.png'},
            {id:3,name:'顺风车',url:'../../assets/images/cart4.png'},
            {id:4,name:'公交',url:'../../assets/images/cart5.png'},
            {id:5,name:'代驾',url:'../../assets/images/cart6.png'},
            {id:6,name:'自驾租车',url:'../../assets/images/cart7.png'},
            {id:7,name:'二手车',url:'../../assets/images/cart8.png'},
            ],
        currentTab: 0,
        cart: '快车',
        navScrollLeft: 0,
        imgUrls:[
            '../../assets/images/swiper-2.png',
            '../../assets/images/swiper-1.png',
            '../../assets/images/swiper-3.png'
        ],
        address: '江西财经大学麦庐校区 ',
        duration: 1000,
        interval: 5000,
        isLoading: true,
    },
    onLoad: function(options) {
        if(options.address != null && options.address !=''){
            this.setData({
                address: options.address
            })
        }
        console.log(options.address)


       const id = options.id;
       this.setData({
           currentTab:id,
       })
       this.requestWaitingtime();
    },
    requestWaitingtime(){
        setTimeout(() => {
            util.request({
                url: 'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get',
                mock: false,
                data: {
                }
              }).then((res)=>{
              const arr = res.data.waitingTimes;
            //   console.log(arr)
                var index = Math.floor((Math.random()*arr.length));
                // console.log(arr[index])
                this.setData({
                isLoading:false,
                waitingTimes: arr[index]
                })
              })
        }, 1000);
    },
    
    ToWait(){
        wx.reLaunch({
            url:  "/pages/wait/wait",
        }),
        wx.setTopBarText({
            text: '等待应答'
          })
    },
    switchNav(event){
        this.requestWaitingtime();
       const cart = event.currentTarget.dataset.name
        let text = this.data.navData;
        this.setData({
            cart,
            isLoading:true,
            waitingTimes: ''
        })
        var cur = event.currentTarget.dataset.current; 
        var singleNavWidth = this.data.windowWindth/6;
        
        this.setData({
            navScrollLeft: (cur - 1) * singleNavWidth,
            currentTab: cur,
        })      
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth =55;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 1) * singleNavWidth
        });
    },
    showUser(){
    // 如果全局未存手机号进入登录页
    if(app.globalData.userInfo && app.globalData.userInfo.phone){
        return
    }else{
        wx.navigateTo({
        url:  "/pages/login/login",
        })
    }
    }
})