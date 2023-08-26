import Button from './Button';
import Price from './Price';

function Content({ category, heading, description }) {
	return (
		<main className='content'>
			<p className='content__category'>{category}</p>
			<h1 className='content__heading'>{heading}</h1>
			<p className='content__description'>{description}</p>

			<Price
				price={'$149.99'}
				oldPrice={'$169.99'}
			/>
			<Button />
		</main>
	);
}

export default Content;
