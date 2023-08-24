function Card({ children }) {
	return (
		<div className='card'>
			<figure className='card__header'>
				<div
					className='img'
					role='img'
					aria-label='Bottle of parfume'
				></div>
			</figure>

			{children}
		</div>
	);
}

export default Card;
