import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDetail(json.data.movie);
      });
  }, []);
  return (
    <div>
      {detail.title}
      <img src={detail.medium_cover_image} alt ={detail.id}/>
    </div>
  );
}

export default Detail;
