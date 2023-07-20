import PropTypes from "prop-types";


function DetailMovies({ coverImage, title, genres }) {
  return (
    <div>
      <img src={coverImage} alt="{title}" />
      <h2>{title}</h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

DetailMovies.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default DetailMovies;