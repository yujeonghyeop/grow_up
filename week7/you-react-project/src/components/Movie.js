import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, title, year, Image, summary, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        {title} ({year})
      </Link>
      <img src={Image} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  Image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.array).isRequired,
};
export default Movie;
