import React, { Component } from 'react'
import { Food } from './components/Food'
import { Snake } from './components/Snake'

//随机生成Food坐标(0-98)偶数
const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*max + min)/2)*2;
  let y = Math.floor((Math.random()*max + min)/2)*2;
  return [x,y];
}

//初始化state
const initialState = {
  snakeDots: [
    [0,0],
    [2,0],
  ],
  food:getRandomCoordinates(),
  direction:'RIGHT',
  speed:200,
}

class App extends Component {
  state = initialState;

  //1.键盘事件
  componentDidMount() {
    setInterval(this.moveSnake,this.state.speed)
    document.onkeydown = this.onkeydown;
  }

  //更新状态
  componentDidUpdate() {
    this.checkIfOutBorders();
    this.checkIfEat();
    this.checkIfCollapsed();
  }

  //2.键盘函数
  onkeydown = (e) => {
    switch(e.keyCode) {
      case 38:
        this.setState({direction:'UP'});
        break;
      case 40:
        this.setState({direction:'DOWN'});
        break;
      case 37:
        this.setState({direction:'LEFT'});
        break;
      case 39:
        this.setState({direction:'RIGHT'});
        break;
      default:
        this.setState({direction:'RIGHT'})
    }
  }
  //3.移动函数
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length-1];

    switch(this.state.direction){
      case 'RIGHT':
        head = [head[0]+2,head[1]];
        break;
      case 'LEFT':
        head = [head[0]-2,head[1]];
        break;
      case 'DOWN':
        head = [head[0],head[1]+2];
        break;
      case 'UP':
        head = [head[0],head[1]-2];
        break;
      default:
        break;
    }

    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots:dots
    })
  }

  //4.限制活动范围
  checkIfOutBorders(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if(head[0] >= 100 || head[0] < 0 || head[1] >=100 || head[1] < 0){
      this.onGameOver()
    }
  }

  //6.验证head撞击到自身
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]){
        this.onGameOver();
      }
    })
  }


  //5.游戏结束
  onGameOver = () => {
    alert(`游戏结束！您的得分为:${this.state.snakeDots.length}分`);
    this.setState(initialState);
  }

  //8.填充贪吃蛇
  enlargeSnake(){
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({snakeDots:newSnake});
  }

  //7.验证是否吃到food
  checkIfEat(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;

    if(head[0] === food[0] && head[1] === food[1]){
      this.setState({food:getRandomCoordinates()})
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  //小蛇加速运动
  increaseSpeed(){
    if(this.state.speed > 10){
      this.setState({speed:this.state.speed - 20});
    }
  }

  render(){
    return(
      <div className='game-area'>
        <Snake snakeDots={this.state.snakeDots}/>
        <Food food={this.state.food}/>
      </div>
    )
  }
}

export default App;