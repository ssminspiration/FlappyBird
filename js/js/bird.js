(function(Fly) {
    'use strict';
    var Bird = function(config) {
        this.context = config.ctx,
            this.img = config.img,
            this.imgW = this.img.width / 3,
            this.imgH = this.img.height,
            this.frameIndex = 0,
            this.x = 100,
            this.y = 100,
            this.a = 0.0005,
            this.speed = 0,
            this.maxSpeed = 0.3,
            this.maxAngle = 45,
            this.curAngle = 0;
    };

    Bird.prototype = {
        constructor: Bird,
        draw: function(delta) {
            this.speed += this.a * delta;
            this.y += this.speed * delta + (1 / 2) * this.a * Math.pow(delta, 2);

            this.curAngle = this.maxAngle / this.maxSpeed * this.speed;
            if (this.curAngle > this.maxAngle) {
                this.curAngle = this.maxAngle
            } else if (this.curAngle < -this.maxAngle) {
                this.curAngle = -this.maxAngle;
            }

            this.context.translate(this.x, this.y);
            this.context.rotate(Fly.toRadian(this.curAngle));
            this.context.drawImage(this.img, this.imgW * this.frameIndex++, 0, this.imgW, this.imgH, -1 / 2 * this.imgW, -1 / 2 * this.imgH, this.imgW, this.imgH);
            // if (frameIndex > 2) {
            //     frameIndex = 0;
            // }

            this.frameIndex %= 3;

            // requestAnimationFrame(render);
        },

        changeSpeed: function() {
            this.speed = -0.3;
        }

    }


    Fly.Bird = Bird;
})(Fly)