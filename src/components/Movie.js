// 영화 리스트 템플릿 컴포넌트이며, 부모 컴포넌트에서 주로 호출됨

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        {/* 템플릿 리터럴 : JavaScript에서 문자열 안에 변수값을 동적으로 삽입하기 위해 사용. */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
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

// 이 Movie 컴포넌트에 props를 줄 경우 지켜야 할 규칙
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
