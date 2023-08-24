function Content({ category, heading, description }) {
	return (
		<main className='content'>
			<p className='content__category'>{category}</p>
			<h1 className='content__heading'>{heading}</h1>
			<p className='content__description'>{description}</p>

			<h4>PRICING COMPNENT</h4>
			<h4>BUTTON</h4>
		</main>
	);
}

export default Content;
