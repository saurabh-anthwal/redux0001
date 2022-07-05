import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevprops,prevState){
        if(prevprops.number !== this.props.number){
            console.log(prevprops);
            console.log(this.props);
            console.log(this.props.number);
            
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
