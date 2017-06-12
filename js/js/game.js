(function(Fly) {
    'use strict';
    var Game = function(config) {
        this.context = config.context;
        this.srcArr = ['birds', 'land', 'pipe1', 'pipe2', 'sky'];
        this.roles = [];
        this.isStart = true;
        this.delta = 0;
        this.lastTime = new Date();
        this.currentTime = 0;
        this.hero = null;
    }
    Game.prototype = {
        constructor: Game,
        start: function() {
            var that = this;
            Fly.loadImages(that.srcArr, function(imgList) {

                that.initRoles(imgList);
                that.render(imgList);
                that.bindEvent();
            })
        },

        //初始化所有的游戏角色
        initRoles: function(imgList) {
            //创建两个天空对象
            for (var i = 0; i < 2; i++) {
                var sky = new Fly.Sky({
                    context: this.context,
                    imgSky: imgList.sky,
                    x: imgList.sky.width * i
                })

                this.roles.push(sky);
            }

            //创建6个管道对象
            var imgW = imgList.pipe1.width;
            for (var i = 0; i < 6; i++) {
                var pipe = new Fly.Pipe({
                    context: this.context,
                    imgTop: imgList.pipe2,
                    imgBottom: imgList.pipe1,
                    pipeSpace: 150,
                    x: 300 + imgW * 3 * i
                })
                this.roles.push(pipe);
            }

            //创建四个陆地对象
            for (var i = 0; i < 4; i++) {
                var land = new Fly.Land({
                    context: this.context,
                    img: imgList.land,
                    x: imgList.land.width * i,
                    y: imgList.sky.height - imgList.land.height
                })

                this.roles.push(land);
            }

            //创建小鸟对象
            this.hero = new Fly.Bird({
                ctx: this.context,
                img: imgList.birds
            });
        },

        //渲染角色
        render: function(imgList) {
            var that = this;
            (function render() {
                that.context.save();
                that.context.clearRect(0, 0, cv.width, cv.height);
                that.context.beginPath();
                that.currentTime = new Date();
                that.delta = that.currentTime - that.lastTime;
                that.lastTime = that.currentTime;
                var cvW = that.context.canvas.width;
                var cvH = that.context.canvas.height;

                //统一渲染游戏里的角色
                that.roles.forEach(function(role) {
                    role.draw(that.delta)
                })

                //绘制小鸟
                that.hero.draw(that.delta);

                if (that.hero.y <= 0 || that.hero.y >= (imgList.sky.height - imgList.land.height) || that.context.isPointInPath(that.hero.x, that.hero.y)) {
                    that.isStart = false;
                }
                context.restore();
                if (that.isStart) {
                    requestAnimationFrame(render);
                }

            })()
        },
        //绑定事件
        bindEvent: function() {
            var that = this;
            that.context.canvas.addEventListener('click', function() {
                that.hero.changeSpeed();
            })
        }
    }

    Fly.Game = Game;
})(Fly)