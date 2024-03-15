import { Movie } from './Movie';

function Movies(props) {
	return (
		<div className='movies'>
			{props.movies.map((movie) => (
				<Movie
					key={movie.imdbID}
					id={movie.imdbID}
					title={movie.Title}
					year={movie.Year}
					type={movie.Type}
					img={movie.Poster}
				/>
			))}
		</div>
	);
}

export { Movies };
