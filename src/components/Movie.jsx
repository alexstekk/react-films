function Movie(props) {
	const { Title: title, Year: year, Type: type, Poster: img, imdbID: id } = props;
	return (
		<div
			className='card'
			id={id}>
			<div className='card__img'>
				<img
					src={img === 'N/A' ? 'https://placehold.co/400x600?text=No+image' : img}
					alt={title}
				/>
			</div>
			<div className='card__footer'>
				<h2 className='card__title'>{title}</h2>
				<div className='card__info'>
					<p>{year}</p>
					<p>{type}</p>
				</div>
			</div>
		</div>
	);
}

export { Movie };
