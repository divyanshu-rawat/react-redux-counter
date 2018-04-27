
import React, { Component } from 'react';
import Increment from './counter_inc';
import Decrement from './counter_dec';
import { connect } from 'react-redux'

class App extends React.Component{

  getState(){
    console.log(this.props);
  }

  handleClick_inc(){
    this.props.dispatch({type:'INCREMENT'});
  }

   handleClick_dec(){
    this.props.dispatch({type:'DECREMENT'});
  }

  render(){
    return(

        <div>
          <Increment onClick = {(e) => {this.handleClick_inc(e)}}/>
              {this.props.count}
          <Decrement onClick = {(e) => {this.handleClick_dec(e)}}/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { count: state  }
}



export default connect(mapStateToProps)(App);


// https://github.com/reactjs/react-redux/blob/master/docs/api.md