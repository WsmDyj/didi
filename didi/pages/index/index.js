const app = getApp()

Page({
    data: {
        navData:[
            {
                text: '快车'
            },
            {
                text: '专车'
            },
            {
                text: '出租车'
            },
            {
                text: '顺风车'
            },
            {
                text: '公交车'
            },
            {
                text: '代驾'
            },
            {
                text: '自驾租车'
            },
            {
                text: '二手车'
            },
            
        ],
        currentTab: 0,
        navScrollLeft: 0,
        tabItem: [1,2,3,4,5,6,7]
    },
    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    }
})