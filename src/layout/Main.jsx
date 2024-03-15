import { Movies } from '../components/Movies';

function Main(props) {
	
	return (
		<main className='main'>
			<div className='main__container container'>
				<Movies movies={props.movies} />
			</div>
		</main>
	);
}

export { Main };
