import { Movie } from './Movie';
import { NotFound } from './NotFound';

function Movies(props) {
	const { movies } = props;

	return movies ? (
		<div className='movies'>
			{movies.map((movie) => (
				<Movie
					key={movie.imdbID}
					{...movie}
				/>
			))}
		</div>
	) : (
		<NotFound />
	);
}

export { Movies };
