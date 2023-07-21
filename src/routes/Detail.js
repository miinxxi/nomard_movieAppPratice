import DetailMovies from "components/DetailMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react'

function Detail() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json.data.movie)
    setDetails([json.data.movie]);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(details);

  return (
    <div>
      {Array.isArray(details) ? (
        <div>
          {details.map((detail) => (
            <DetailMovies
              key={detail.id}
              coverImage={detail.medium_cover_image}
              title={detail.title}
              genres={detail.genres}
              id={detail.id}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
