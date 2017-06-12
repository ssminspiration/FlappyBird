// 在整个全局环境中只保留一个全局对象Fly
// 在沙箱中使用严格模式
(function(window) {
    'use strict';
    // 将一些工具性函数放到Fly对象中
    var FlyObj = {};

    // 角度转弧度
    FlyObj.toRadian = function(angle) {
        return angle / 180 * Math.PI;
    }

    // 加载图片
    FlyObj.loadImages = function(srcList, callback) {
        var count = 0,
            imgsObj = {};
        srcList.forEach(function(srcStr) {
            var img = new Image();
            img.src = './images/' + srcStr + '.png';
            imgsObj[srcStr] = img;
            img.onload = function() {
                count++;
                if (count >= srcList.length) {
                    // 图片全部加载完成
                    callback(imgsObj)
                }
            }
        });
    }


    // 将FlyObj暴露到全局环境中
    window.Fly = FlyObj;
})(window)