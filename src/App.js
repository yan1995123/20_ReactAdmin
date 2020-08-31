import React, { Component } from 'react';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
// 应用的跟组件
export default class App extends Component{
 
  handleClick=()=>{
    message.success('成功了')
  }

    render(){
        return (

  // <div className="App"><Button type="primary" onClick={this.handleClick}>测试按钮</Button></div>
<BrowserRouter>
<Switch>{/*只匹配一个*/}
<Route path='/login' component={Login}></Route>
<Route path='/admin' component={Admin}></Route>
</Switch>

</BrowserRouter>
        )
    }
}
