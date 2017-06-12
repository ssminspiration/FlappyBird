(function(window) {
    'use strict';
    var FlyObj = {};

    //角度转弧度
    FlyObj.toRadian = function(angle) {
        return angle / 180 * Math.PI
    };

    //图片加载完成
    FlyObj.loadImages = function(srcList, callback) {
        var allLength = srcList.length,
            count = 0,
            imgObj = {}; //用一个对象来接收创建的所有的图片对象
        srcList.forEach(function(srcStr) {
            var img = new Image();
            img.src = './images/' + srcStr + '.png';
            imgObj[srcStr] = img
            img.onload = function() {
                count++;
                if (count >= allLength) {
                    //图片全部加载完成
                    callback(imgObj)
                }
            }
        })
    }

    window.Fly = FlyObj;
})(window)