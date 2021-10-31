import PropTypes from "prop-types";
import react from "react";

class App extends react.Component{
  state={
    isLoading : true
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false})
    },6000
    )
  }

  render(){
    const {isLoading}=this.state
    return <div>{isLoading ? "Loading..." : "We are Loading!"}</div>
  }
}

export default App;
