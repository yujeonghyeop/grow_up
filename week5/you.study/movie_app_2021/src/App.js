import react from "react";
import axios from "axios"
import Movie from "./Movies"
class App extends react.Component{
  state={
    isLoading : true,
    movies:[]
  }
  
  getMovies = async () =>{
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState({movies:movies,isLoading:false})
  }

  componentDidMount(){
    this.getMovies()
  }
  render(){
    const {isLoading, movies}=this.state
    return <div>{isLoading ? "Loading..." : movies.map(movie=>{
      return <Movie
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title ={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}/>
  })}
    </div>
  }
}

export default App;