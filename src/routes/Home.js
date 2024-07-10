// 메인 페이지이며, 영화 리스트를 불러옴

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true); // 영화 리스트 담는 도중 로딩 화면 state
  const [movies, setMovies] = useState([]); // 영화 리스트를 담는 state

  // 영화 리스트 API를 불러오는 함수
  // 비동기(async)를 통해 각 변수(response, json)에 담는 시간(await)를 주고 state(setMovies)에 삽입
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };

  // 메인 페이지 접속 시 즉시 동작
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading....</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
