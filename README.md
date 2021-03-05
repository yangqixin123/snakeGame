# snakeGame
snakeGame是使用React编写的一个简单贪吃蛇小游戏
<br/>
克隆项目后先：
npm install 安装依赖
<br/>
然后cd到snakeGame目录下
npm run start 启动项目
<br/>
预览地址：http://yqx.cool/snakeGame
<br/>
使用键盘的上下左右键控制小蛇的移动

<hr>
&nbsp;&nbsp;贪吃蛇实现逻辑：
<br/>
（1）挂载完成，调用键盘事件 ---控制贪吃蛇移动方向。<br/>
（2）创建移动贪吃蛇的函数 ---在不同方向上移动 head（数组中最后一个 dot 就是贪吃蛇的 head）<br/>
（3）实现移动效果 ---组件完成挂载时调用移动贪吃蛇函数，实现连续移动需要使用定时器 <br/>
（4）限制移动范围 ---根据 head 的坐标和画布坐标进行判断<br/>
（5）超出范围或者 head 触碰到自身的游戏结束<br/>
（6）实现吃到 food 小方块并填充贪吃蛇身体 ---head 坐标和 food 坐标进行比较<br/>
（7）实现游戏加速 ---吃到 food 后设置移动速度<br/>
