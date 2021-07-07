<template>
  <div class="page-container">
    <div @click="showImage" class="show">绘制图片</div>
    <div @click="showText" class="show">绘制文字</div>
    <!-- 创建canvas元素 -->
    <canvas ref="canvas" class="canvas"
            style="border: 1px solid red;"
    >
      您的浏览器不支持Canvas。<br />
      Your browser does not support the HTML5 canvas tag.
    </canvas>

    <canvas ref="canvasText" class="canvas"
            style="border: 1px solid greenyellow;"
    >
      您的浏览器不支持Canvas。<br />
      Your browser does not support the HTML5 canvas tag.
    </canvas>

  </div>
</template>

<script>
  import imgsrc from '@/assets/custom/img/color-line.png'

  export default {
    name: "CanvasTest2",
    data() {
      return {
        canvasWidth: null,
        canvasHeight: null,
        imgsrc: imgsrc,
      }
    },
    created() {
      this.canvasWidth = window.innerWidth/3;
      this.canvasHeight = window.innerHeight;
    },
    mounted() {
      this.drawCanvas();
    },
    methods: {
      showImage() {
        //this.clipingRegion.r = 1000
        this.drawCanvas();
      },
      showText() {
        this.drawCanvasText();
      },
      drawCanvasText: function () {
        let canvas = this.$refs.canvasText;
        // 获取上下文
        this.context = canvas.getContext('2d');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        // 绘制文字
        const font = '当前运行状况良好 无故障待处理';
        //this.context.font = '0.5rem Georgia';

        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.save(); // 保存
        // 绘制视窗
        this.context.beginPath();
        // 绘制图片
        //this.context.fillText(font, 10, 50);

        this.context.font = '1.0rem Verdana';
        // 创建渐变
        let gradient = this.context.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'magenta');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1.0, 'red');
        // 用渐变色
        this.context.fillStyle = gradient;
        // measureText方法获取文字的宽度,为了能够在画布中间绘制文字.
        const measure = this.context.measureText(font);

        this.context.fillText(font, (this.canvasWidth - measure.width)/2, this.canvasHeight/2);
        //this.context.fillText(font, 10, 90);


        this.context.restore(); // 状态恢复
      },
      drawCanvas: function () {
        let canvas = this.$refs.canvas;
        // 获取上下文
        this.context = canvas.getContext('2d');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        // 绘制图像
        let img = new Image();
        img.src = this.imgsrc;

        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.save(); // 保存
        // 绘制视窗
        this.context.beginPath();
        // 绘制图片
        this.context.drawImage(img, 0, 0);
        this.context.restore(); // 状态恢复
      },

      // 系统运行状态
      drawSystemRunStatus: function () {
        // 获取Canvas画布元素(主画布)
        let canvas = document.getElementById('system-run-status-con');
        // 渲染上下文
        let ctx = null;
        if (canvas.getContext) {
          // 获取canvas画布的上下文
          ctx = canvas.getContext('2d');

          debugger
          let points = this.createViceCanvas();
          console.log(111)
          console.log(points)

          const font = '当前运行状况良好 无故障待处理';
          ctx.font = '20px Georgia';
          ctx.fillText(font, 10, 50);

          ctx.font = '30px Verdana';

          console.log(canvas.width);

          // 创建渐变
          let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop(0, 'magenta');
          gradient.addColorStop(0.5, 'blue');
          gradient.addColorStop(1.0, 'red');
          // 用渐变色
          ctx.fillStyle = gradient;
          ctx.fillText('系统运行正常', 10, 90);

          /*this.particlesInit(ctx);

          ctx.clearRect(0,0,this.sysRunCanvasWidth,this.sysRunCanvasHeight);
          points.forEach((value) => {
            value.draw();
          });*/
          // let raf = window.requestAnimationFrame(that.particlesInit);
          // if (points[0].item>=1) {
          //   window.cancelAnimationFrame(raf);
          // }

        }
      },
      // 创建副画布,写入想展示的文字，获取到文字粒子的位置信息.(主副画布大小应一致)
      createViceCanvas: function () {
        const viceCanvas = document.createElement('canvas');
        viceCanvas.height = this.sysRunCanvasHeight;
        viceCanvas.width = this.sysRunCanvasWidth;

        let viceCtx = viceCanvas.getContext('2d');
        this.initCanvas(viceCtx);
        // 获取文字粒子的位置信息
        console.log(this.getFontInfo(viceCtx));
        this.sysRunPoints = this.getFontInfo(viceCtx);
      },
      // 初始化画布,这里的ctx是副画布
      initCanvas: function (ctx) {
        const font = '当前运行状况良好 无故障待处理';
        ctx.font = '20px Arial';
        // measureText方法获取文字的宽度,为了能够在画布中间绘制文字.
        const measure = ctx.measureText(font);
        debugger
        //ctx.fillText(font, (width - measure.width) / 2, height / 2);
        ctx.fillText(font, measure.width,this.sysRunCanvasHeight)
      },
      // 获取文字位置信息(获取每个文字在画布(副画布)中的坐标)
      getFontInfo: function (ctx) {
        let that = this;
        debugger

        class Particle {
          constructor(center) {
            this.x = center.x; // 记录点位最终应该停留在的x轴位置
            this.y = center.y; // 记录点位最终应该停留在的y轴位置
            this.item = 0;     // 贝塞尔曲线系数
            this.vx = 20;      // 点位在x轴的移动速度
            this.vy = 16;       // 点位在y轴的移动速度
            this.initX = Math.random() * that.sysRunCanvasWidth; // 点位随机在画布中的x坐标
            this.initY = Math.random() * that.sysRunCanvasHeight; // 点位随机在画布中的y坐标
          }
          draw(){ // 绘制点位
            debugger
            ctx.beginPath();
            const {x, y} = that.threeBezier( // 贝塞尔曲线，获取每一个tick点位所在位置
              this.item,
              [this.initX,this.initY],
              [this.x,this.y],
              [this.x,this.y],
              [this.x, this.y]
            );
            ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
            ctx.fillStyle="green";
            ctx.fill();
            ctx.closePath();
            this.speed(); // 点位下次tick绘制时的坐标
          }
          speed() { // 每个点位绘制后的坐标
            this.initX += this.vx;
            this.initY += this.vy;
            this.item += 0.005;
          }
        }


        // data属性返回一个 Uint8ClampedArray，它可以被使用作为查看初始像素数据。
        // 每个像素用4个1bytes值(按照红，绿，蓝和透明值的顺序; 这就是"RGBA"格式) 来代表。
        // 每个颜色值部份用0至255来代表。
        // 每个部份被分配到一个在数组内连续的索引，左上角像素的红色部份在数组的索引0位置。
        // 像素从左到右被处理，然后往下，遍历整个数组
        let imageData = ctx.getImageData(0,0,that.sysRunCanvasWidth,that.sysRunCanvasHeight).data;
        const particles = [];
        for(let x = 0; x < that.sysRunCanvasWidth; x += 4) {
          for(let y=0; y < that.sysRunCanvasHeight; y += 4) {
            const fontIndex = (x + y * that.sysRunCanvasWidth) * 4 + 3;
            if(imageData[fontIndex] > 0) {
              particles.push(new Particle({
                x,
                y,
              }))
            }
          }
        }

        console.log(2222)
        console.log(particles)
        return particles;
      },
      threeBezier: function(t, p1, p2, cp1, cp2) {
        const [startX,startY] = p1;
        const [endX,endY] = p2;
        const [cpX1,cpY1] = cp1;
        const [cpX2,cpY2] = cp2;
        let x = startX * Math.pow(1-t,3) +
          3 * cpX1 * t * Math.pow(1-t,2) +
          3 * cpX2 * Math.pow(t,2) * (1-t) +
          endX * Math.pow(t,3);
        let y = startY * Math.pow(1-t,3) +
          3 * cpY1 * Math.pow(1-t,2) * t +
          3 * cpY2 *(1- t) * Math.pow(t,2) +
          endY * Math.pow(t,3)
        return {
          x,
          y,
        }
      },
      // 文字位置、粒子运动轨迹确定后,启动/暂停动画
      // cancelAnimationFrame取消动画,要跟在requestAnimationFrame后面.
      // 保证在递归调用init方法之前去执行cancelAnimationFrame(异步!).
      particlesInit: function (ctx) {
        let that = this;
        ctx.clearRect(0,0,that.sysRunCanvasWidth,that.sysRunCanvasHeight);
        that.sysRunPoints.forEach((value) => {
          value.draw();
        });
        let raf = window.requestAnimationFrame(that.particlesInit);
        if (that.sysRunPoints[0].item>=1) {
          window.cancelAnimationFrame(raf);
        }
      }
    }
  }
</script>

<style scoped>
  .page-container {
    position: relative;
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 500px;
    background: url("/media/other/hero-gradient.jpg");
    background-size: 1000px auto;
    opacity: 0.5;
  }
</style>
