import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {/* 이 map은 key도 value와 동일하게 `g`로 되어있는데 이건 g 자체가 고유한 값이면 상관없다. */}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
