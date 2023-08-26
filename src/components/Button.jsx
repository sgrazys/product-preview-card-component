import CartIcon from '../images/icon-cart.svg';

function Button() {
	return (
		<button className='btn'>
			<img
				className='btn__icon'
				src={CartIcon}
				alt='Cart icon on the button'
			/>
			Add to Cart
		</button>
	);
}

export default Button;
