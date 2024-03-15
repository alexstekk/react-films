import { Movies } from '../components/Movies';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
	state = {
		movies: [],
		isLoading: true,
	};
	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=kung-fu')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, isLoading: false }));
	}

	handleSearch = (query, type) => {
		if (query) {
			this.setState({ isLoading: true });
			fetch(`http://www.omdbapi.com/?apikey=6c6f4eae&s=${query}${type === '' ? '' : `&type=${type}`}`)
				.then((response) => response.json())
				.then((data) => this.setState({ movies: data.Search, isLoading: false }));
		} else return;
	};

	render() {
		const { movies, isLoading } = this.state;

		return (
			<main className='main'>
				<div className='main__container container'>
					<Search handleSearch={this.handleSearch} />
					{isLoading ? <Preloader /> : <Movies movies={movies} />}
				</div>
			</main>
		);
	}
}

export { Main };
