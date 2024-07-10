// 영화 리스트에서 한 영화 제목 클릭 시 이동되는 상세 페이지 컴포넌트

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams(); // `:id`로 라우팅 했을 경우 해당 id 정보를 가져옴

  const [loading, setLoading] = useState(true); // 영화 상세 리스트 담는 도중 로딩 화면 state
  const [detailMovies, setDetailMovies] = useState([]); // 영화 상세 리스트를 담는 state

  // 영화 상세 리스트 API를 불러오는 함수
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetailMovies(json.data.movie);
    setLoading(false);
  };

  // 상세 페이지 접속 시 즉시 동작
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            id={detailMovies.id}
            medium_cover_image={detailMovies.medium_cover_image}
            title={detailMovies.title}
            summary={detailMovies.summary}
            genres={detailMovies.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
