//index.js
var util = require('../../utils/util.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    voices: []
  },
  //按下开始录音
  startRecorder: function() {
    var _this = this;
    console.log('开始录音');
    wx.startRecord({
      success: function(res){
        // success
        //临时路径,下次进入小程序时无法正常使用  
        var tempFilePath = res.tempFilePath  
        console.log("tempFilePath: " + tempFilePath)  
        //持久保存  
        wx.saveFile({  
          tempFilePath: tempFilePath,  
          success: function (res) {  
            //持久路径  
            //本地文件存储的大小限制为 100M  
            var savedFilePath = res.savedFilePath; 
          }  
        })
        wx.showToast({  
          title: '恭喜!录音成功',  
          icon: 'success',  
          duration: 1000  
        });
        wx.getSavedFileList({
          success: function(res){
            // success
            console.log('获取列表');
            var voices = [],
                len = res.fileList.length;
            for(var i = 0; i<len; i++){
              //格式化时间  
              var createTime = util.formatTime(new Date(res.fileList[i].createTime));
              //将音频大小B转为KB  
              var size = (res.fileList[i].size / 1024).toFixed(2);  
              var voice = { filePath: res.fileList[i].filePath, createTime: createTime, size: size };
              voices = voices.concat(voice);
              _this.setData({
                voices: voices
              });
            }
          }
        })
      },
      fail: function() {
        // fail
        wx.showModal({  
          title: '提示',  
          content: '录音的姿势不对!',  
          showCancel: false,  
          success: function (res) {  
            if (res.confirm) {  
              console.log('用户点击确定')  
              return  
            }  
          }  
        })
      }
    })
  },
  stopRecorder: function(){
    console.log('结束录音');
    wx.stopRecord();
  },
  gotoPlay: function (e) {  
    var filePath = e.currentTarget.dataset.key;  
    //点击开始播放  
    wx.showToast({  
      title: '开始播放',  
      icon: 'success',  
      duration: 1000  
    })  
    wx.playVoice({  
      filePath: filePath,  
      success: function () {  
        wx.showToast({  
          title: '播放结束',  
          icon: 'success',  
          duration: 1000  
        })  
      }  
    })  
  },
  onLoad: function () {
    var _this = this;
    // wx.getSavedFileList({
    //   success: function(res){
    //     // success
    //     var voices = [],
    //     len = res.fileList.length;
    //     for(var i = 0; i<len; i++){
    //       //格式化时间  
    //       var createTime = new Date(res.fileList[i].createTime);
    //       //将音频大小B转为KB  
    //       var size = (res.fileList[i].size / 1024).toFixed(2);  
    //       var voice = { filePath: res.fileList[i].filePath, createTime: createTime, size: size };
    //       voices = voices.concat(voice);
    //       _this.setData({
    //         voices: voices
    //       });
    //     }
    //   }
    // })
    wx.getSavedFileList({
      success: function(res) {
        for(var i = 0; i< res.fileList.length > 0; i++){
          wx.removeSavedFile({
            filePath: res.fileList[i].filePath,
            complete: function(res) {
              console.log(res)
            }
          })
        }
      }
    })
  }
})
