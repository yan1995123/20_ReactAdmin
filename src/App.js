import React, { Component } from 'react';
import {Button , message} from 'antd';
import './App.css';
// 应用的跟组件
export default class App extends Component{
 
  handleClick=()=>{
    message.success('成功了')
  }

    render(){
        return <div className="App"><Button type="primary" onClick={this.handleClick}>测试按钮</Button></div>
    }
}
