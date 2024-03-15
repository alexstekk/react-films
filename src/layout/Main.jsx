import { Movies } from '../components/Movies';
import React from 'react';

class Main extends React.Component {
	state = {
		movies: [],
	};
	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=matrix')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search }));
	}

	render() {
		const { movies } = this.state;

		return (
			<main className='main'>
				<div className='main__container container'>{movies.length ? <Movies movies={movies} /> : <h3>Loading</h3>}</div>
			</main>
		);
	}
}

export { Main };
