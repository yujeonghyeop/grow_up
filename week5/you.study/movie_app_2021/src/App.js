import PropTypes from "prop-types";
import react from "react";

class App extends react.Component{
  state={
    count:0
  }
  add=()=>{
    this.setState(current=> ({count : this.state.count +1}))
  }
  minus=()=>{
    this.setState(current=> ({count: this.state.count -1}))
  }
  render(){
    return <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    
  }
}

export default App;
