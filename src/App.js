import React from 'react';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';

class App extends React.Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=6c6f4eae&s=matrix')
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search }));
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Main movies={this.state.movies} />
				<Footer />
			</React.Fragment>
		);
	}
}

export { App };
