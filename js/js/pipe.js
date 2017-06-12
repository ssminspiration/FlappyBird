(function(Fly) {
    'use strict';
    var Pipe = function(config) {
        this.imgTop = config.imgTop;
        this.imgBottom = config.imgBottom;
        this.context = config.context;
        this.imgH = this.imgTop.height;
        this.imgW = this.imgTop.width;
        this.pipeSpace = config.pipeSpace;
        this.x = config.x;
        this.topY = 0;
        this.bottomY = 0;
        this.speed = 0.2;
        this.initPipeHeight();

    }

    Pipe.prototype = {
        constructor: Pipe,
        draw: function(delta) {
            this.x -= this.speed * delta;
            if (this.x <= -this.imgW * 3) {
                this.x += this.imgW * 3 * 6;
                this.initPipeHeight();
            }
            this.context.rect(this.x, this.topY, this.imgW, this.imgH);
            this.context.rect(this.x, this.bottomY, this.imgW, this.imgH);
            // this.context.fill();

            //绘制上下两根管道图片
            this.context.drawImage(this.imgTop, this.x, this.topY);
            this.context.drawImage(this.imgBottom, this.x, this.bottomY);

            // this.context.rect(this.x, this.topY, this.imgW, this.imgH);
            // this.context.rect(this.x, this.bottomY, this.imgW, this.imgH);
            // this.context.fill();




        },
        initPipeHeight: function() {
            //随机生成上面管道的高度（限定在50-250）
            var pipeTopHeight = Math.random() * 200 + 50;
            //下面管道的纵坐标
            this.bottomY = pipeTopHeight + this.pipeSpace;
            //上面管道的纵坐标
            this.topY = pipeTopHeight - this.imgH;
        }

    }

    Fly.Pipe = Pipe;
})(Fly)