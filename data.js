import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'Carlos',
			email: 'carlos_admin@gmail.com',
			password: bcrypt.hashSync('7894', 8),
			isAdmin: true,
		},
		{
			name: 'Juan',
			email: 'juan@gmail.com',
			password: bcrypt.hashSync('7894', 8),
			isAdmin: false,
		},
	],
	products: [
		{
			_id: '1',
			name: 'L 42 Sunglasses',
			category: 'Accessory',
			image: '/images/sunglasses.jpg',
			price: 120,
			countInStock: 32,
			brand: 'L 42',
			rating: 4.5,
			numReviews: 48,
			description: 'high quality product',
		},
		{
			_id: '2',
			name: 'Bussiness Shoes',
			category: 'Clothes',
			image: '/images/shoes.jpg',
			price: 5,
			countInStock: 5,
			brand: 'Pipino',
			rating: 2.5,
			numReviews: 122,
			description: 'high quality product',
		},
		{
			_id: '3',
			name: 'L 42 Sunglasses',
			category: 'Accessory',
			image: '/images/sunglasses.jpg',
			price: 160,
			countInStock: 15,
			brand: 'L 42',
			rating: 4,
			numReviews: 103,
			description: 'high quality product',
		},
		{
			_id: '4',
			name: 'L 42 Sunglasses',
			category: 'Accessory',
			image: '/images/sunglasses.jpg',
			price: 120,
			countInStock: 21,
			brand: 'L 42',
			rating: 1,
			numReviews: 7,
			description: 'high quality product',
		},
		{
			_id: '5',
			name: 'L 42 Sunglasses',
			category: 'Accessory',
			image: '/images/sunglasses.jpg',
			price: 20,
			countInStock: 27,
			brand: 'L 42',
			rating: 1.5,
			numReviews: 52,
			description: 'high quality product',
		},
		{
			_id: '6',
			name: 'L 42 Sunglasses',
			category: 'Accessory',
			image: '/images/hat.jpg',
			price: 220,
			countInStock: 0,
			brand: 'L 42',
			rating: 5,
			numReviews: 10,
			description: 'high quality product',
		},
	],
};

export default data;
