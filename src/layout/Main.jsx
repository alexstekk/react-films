import { Movies } from '../components/Movies';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
	state = {
		movies: [],
	};
	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=kung-fu')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search }));
	}

	handleSearch = (query) => {
		// console.log('handleSearch', query);
		if (query) {
			fetch(`http://www.omdbapi.com/?apikey=6c6f4eae&s=${query}`)
				.then((response) => response.json())
				.then((data) => this.setState({ movies: data.Search }));
		}
	};

	render() {
		const { movies } = this.state;

		return (
			<main className='main'>
				<div className='main__container container'>
					<Search handleSearch={this.handleSearch} />
					{/* {movies?.length ? <Movies movies={movies} /> : movies === undefined ? <p>Nothing found</p> : <Preloader />} */}
					{movies === undefined ? <p>Nothing found</p> : movies.length ? <Movies movies={movies} /> : <Preloader />}
				</div>
			</main>
		);
	}
}

export { Main };
