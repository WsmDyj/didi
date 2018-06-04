var util = require('../../utils/util.js');
const app = getApp()
Page({
  data: {
  progress_txt: '以等待', 
  count:0, 
  waitTimer: null,
  time: '00:00',
  },
parseTime: function(time){
  var time = time.toString();
    return time[1]?time:'0'+time;
},


countInterval: function () {
   var curr = 0;
    var timer = new Date(0,0);
    var  randomTime = Math.floor(20*Math.random()) ;
  this.countTimer = setInterval(() => {
    if (this.data.count <= randomTime) {
      this.setData({
              time: this.parseTime(timer.getMinutes())+":"+this.parseTime(timer.getSeconds()),
          });
          timer.setMinutes(curr/60);
                timer.setSeconds(curr%60);
                curr++;
       this.drawProgress(this.data.count / (60/2))
      this.data.count++;
    } else {
      this.setData({
        progress_txt: "匹配成功"
      }); 
      wx.redirectTo({
          url:  "/pages/orderService/orderService",
        });
      clearInterval(this.countTimer);
    }
  }, 1000)
},
  drawProgressbg: function(){
   var ctx = wx.createCanvasContext('canvasProgressbg');
   ctx.setLineWidth(4);
   ctx.setStrokeStyle("#e5e5e5");
   ctx.setLineCap("round");
   ctx.beginPath();
   ctx.arc(110,110,100,0,2*Math.PI,false);
   ctx.stroke();
   ctx.draw();
  },
  onShow: function() {
    this.setData({
      address: app.globalData.bluraddress,
    })
  },
  onReady: function () {
    this.drawProgressbg();
    this.countInterval();
    this.drawProgress();
  },
  
  drawProgress: function (step){ 
    var context = wx.createCanvasContext('canvasProgress'); 
    context.setLineWidth(4);
    context.setStrokeStyle("#fbcb02");
    context.setLineCap('round')
    context.beginPath();
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(110, 110, 100, -Math.PI /2, step*Math.PI /2-Math.PI /2, false);
    context.stroke();
    context.draw()
  },
  toCancel(){
    wx.redirectTo({
      url: "/pages/cancel/cancel"
    })
   
  },
  backIndex(){
    wx.redirectTo({
      url:  "/pages/index/index",
    })
  }
 

})