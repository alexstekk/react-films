function Movie(props) {
	return (
		<div className='card' id={props.id}>
			<div className='card__img'>
				<img src={props.img} />
			</div>
			<div className='card__footer'>
				<h2 className='card__title'>{props.title}</h2>
				<div className="card__info">
					<p>{props.year}</p>
					<p>{props.type}</p>
				</div>
			</div>
		</div>
	);
}

export { Movie };
