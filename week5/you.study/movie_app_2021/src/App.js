import react from "react";
import axios from "axios"
class App extends react.Component{
  state={
    isLoading : true
  }
  componentDidMount(){
    axios.get("https://yts.mx/api/v2/list_movies.json")
  }

  render(){
    const {isLoading}=this.state
    return <div>{isLoading ? "Loading..." : "We are Loading!"}</div>
  }
}

export default App;
