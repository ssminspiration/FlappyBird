(function(Fly) {
    'use strict';
    var Land = function(config) {
        this.imgLand = config.img;
        this.context = config.context;
        this.x = config.x;
        this.y = config.y;
        this.speed = 0.2;

    }

    Land.prototype = {
        constructor: Land,
        draw: function(delta) {
            if (this.x < -this.imgLand.width) {
                this.x += this.imgLand.width * 4;
            }
            this.context.drawImage(this.imgLand, this.x -= this.speed * delta, this.y)
        }
    }

    Fly.Land = Land;
})(Fly)