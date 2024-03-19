import { Movies } from '../components/Movies';
import React, { useEffect, useState } from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

// class Main extends React.Component {
// 	state = {
// 		movies: [],
// 		isLoading: true,
// 	};
// 	componentDidMount() {
// 		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=kung-fu`)
// 			.then((response) => response.json())
// 			.then((data) => this.setState({ movies: data.Search, isLoading: false }));
// 	}

// 	handleSearch = (query, type) => {
// 		if (query) {
// 			this.setState({ isLoading: true });
// 			fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${type === '' ? '' : `&type=${type}`}`)
// 				.then((response) => response.json())
// 				.then((data) => this.setState({ movies: data.Search, isLoading: false }));
// 		} else return;
// 	};

// 	render() {
// 		const { movies, isLoading } = this.state;

// 		return (
// 			<main className='main'>
// 				<div className='main__container container'>
// 					<Search handleSearch={this.handleSearch} />
// 					{isLoading ? <Preloader /> : <Movies movies={movies} />}
// 				</div>
// 			</main>
// 		);
// 	}
// }

function Main() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleSearch = (query, type) => {
		if (query) {
			setIsLoading(true);
			fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${type === '' ? '' : `&type=${type}`}`)
				.then((response) => response.json())
				.then((data) => {
					setMovies(data.Search);
					setIsLoading(false);
				});
		} else return;
	};

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=kung-fu`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
				setIsLoading(false);
			});
	}, []);

	return (
		<main className='main'>
			<div className='main__container container'>
				<Search handleSearch={handleSearch} />
				{isLoading ? <Preloader /> : <Movies movies={movies} />}
			</div>
		</main>
	);
}

export { Main };
