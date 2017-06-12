(function(Fly) {
    'use strict';
    var Sky = function(config) {
        this.imgSky = config.imgSky;
        this.x = config.x;
        this.context = config.context;
        this.y = 0;
        this.skySpeed = 0.2;
    }
    Sky.prototype = {
        constructor: Sky,
        draw: function(delta) {
            this.x -= this.skySpeed * delta;
            if (this.x <= -this.imgSky.width) {
                this.x += 2 * this.imgSky.width;
            };
            this.context.drawImage(this.imgSky, this.x, this.y);
        }
    }

    Fly.Sky = Sky;
})(Fly)