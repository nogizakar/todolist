import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false} //标识鼠标移入、移出

  //鼠标移入移除到回调
  handleMouse = (flag) =>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  //勾选、取消勾选某一个todo到回调
  handleCheck = (id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //删除一个todo到回调
  handleDelete = (id)=>{
    if(window.confirm('are you sure? delete?')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
        <li style= {{backgroundColor:mouse ? '#ddd' : 'white'}} 
        onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}> 
            <label>
                <input type="checkbox" Checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={()=> this.handleDelete(id)} className='btn btn-danger' style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
  }
}
