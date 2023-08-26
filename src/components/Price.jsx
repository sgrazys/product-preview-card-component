function Price({ price, oldPrice }) {
	return (
		<div className='price'>
			<p className='price__current'>{price}</p>
			<p className='price__old'>{oldPrice}</p>
		</div>
	);
}

export default Price;
