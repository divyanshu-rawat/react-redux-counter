
import React, { Component } from 'react';
import Increment from './counter_inc';
import Decrement from './counter_dec';
import { connect } from 'react-redux';
import Counter from './reducer_in_redux';
import { bindActionCreators } from 'redux';
import {incrementCounter as INC,decrementCounter as DEC} from './action_creators';



class App extends React.Component{

  getState(){
    // console.log(this.props.incrementCounter());
    // console.log(this.props.Counter);
    // console.log(this.props.Counter(this.props.incrementCounter()));

  }

  handleClick_inc(){
    // this.props.dispatch({type:'INCREMENT'});
    // this.props.Counter({type:'INCREMENT'});
    this.props.incrementCounter()
  }

   handleClick_dec(){
    // this.props.dispatch({type:'DECREMENT'});
    // this.props.Counter({type:'DECREMENT'});
    this.props.decrementCounter();
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ INC, DEC }, dispatch);
}



export default connect(mapStateToProps,mapDispatchToProps)(App);


// https://github.com/reactjs/react-redux/blob/master/docs/api.md