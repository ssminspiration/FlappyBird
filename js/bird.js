(function(Fly) {
    'use strict';
    var Bird = function(config) {
        //属性放在函数里
        this.img = config.img;
        this.imgW = this.img.width / 3;
        this.imgH = this.imh.height;
        this.frameIndex = 0;
        this.x = 100;
        this.y = 100;
        this.speed = 0;
        this.a = 0.0005;
        this.maxSpeed = 0.3;
        this.maxAngle = 45;
        this.curAngle = 0;
    }

    Bird.prototype = {
        //方法放在原型里
        constructor: Bird,
        draw: function(delta) {
            this.speed += this.a * delta;
            this.y += this.speed * delta + 1 / 2 * this.a * Math.pow(delta, 2)

            context.drawImage(this.img, this.imgW * this.frameIndex++, 0, this.imgW, this.imgH, this.x, this.y, this.imgW, this.imgH);
            // if (frameIndex >= 3) {
            //     frameIndex = 0;
            // }
            this.frameIndex %= 3;
        }
    }

    Fly.Bird = Bird;
})(Fly)