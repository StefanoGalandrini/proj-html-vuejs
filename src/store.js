import {reactive} from "vue";

export const store = reactive({
	topMenuItems: [
		"Home",
		"Shop",
		"About",
		"Gallery",
		"Locations",
		"Journal",
		"Contact",
		"My Account",
	],

	bottomMenuItems: [
		"Shop",
		"About",
		"Gallery",
		"Locations",
		"Journal",
		"Contact",
		"Orders",
	],

	carouselImages: [
		{
			src: "../../src/assets/images/blackberry-stuffed-bread-400x510.jpg",
			name: "Blackberry Stuffed Bread",
			price: "$19,00 - $39,00",
		},
		{
			src: "../../src/assets/images/cherry-cake-400x510.jpg",
			name: "Cherry Cake",
			price: "$25,00 - $48,00",
		},
		{
			src: "../../src/assets/images/choco-chip-cookies-400x510.jpg",
			name: "Choco Chip Cookies",
			price: "$15,00 - $30,00",
		},
		{
			src: "../../src/assets/images/cookies-with-ice-cream-400x510.jpg",
			name: "Cookies With Ice Cream",
			price: "$22,00 - $45,00",
		},
		{
			src: "../../src/assets/images/glazed-pancake-with-lemon-400x510.jpg",
			name: "Glazed Pancake with Lemon",
			price: "$10,00 - $18,00",
		},
		{
			src: "../../src/assets/images/home-bread-400x510.jpg",
			name: "Home Bread",
			price: "$8,00 - $15,00",
		},
		{
			src: "../../src/assets/images/perfect-macarons-400x510.jpg",
			name: "Perfect Macarons",
			price: "$22,00 - $42,00",
		},
		{
			src: "../../src/assets/images/premium-bread-400x510.jpg",
			name: "Premium Bread",
			price: "$10,00 - $27,00",
		},
		{
			src: "../../src/assets/images/small-cupcake-400x510.jpg",
			name: "Small Cupcake",
			price: "$5,00 - $15,00",
		},
		{
			src: "../../src/assets/images/strawberry-donut-400x510.jpg",
			name: "Strawberry Donut",
			price: "$4,50 - $12,00",
		},
		{
			src: "../../src/assets/images/strawberry-jam-cookies-400x510.jpg",
			name: "Strawberry Jam Cookies",
			price: "$14,50 - $30,00",
		},
	],

	cardsArray: [
		{
			id: 0,
			title: `“Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity”.`,
			subtitle: "Don't just take our word for it",
			text: "Rachel Cooper, Founder",
			dimension: "small",
			backgroundImage: "",
		},
		{
			id: 1,
			title: "Tell us what you have in mind",
			subtitle: "manual ingredient selection",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, eum nemo assumenda optio libero autem, vero sed quibusdam, necessitatibus asperiores consectetur eius est eos? Ipsa pariatur delectus illo necessitatibus asperiores qui dignissimos ullam! Fugit, sed optio.",
			dimension: "large",
			backgroundImage: "bakery-process-1.jpg",
		},
		{
			id: 2,
			title: "We Start Baking",
			subtitle: "sweet & delicious",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, eum nemo assumenda optio libero autem, vero sed quibusdam, necessitatibus asperiores consectetur eius est eos? Ipsa pariatur delectus illo necessitatibus asperiores qui dignissimos ullam! Fugit, sed optio.",
			dimension: "small",
			backgroundImage: "bakery-process-2.jpg",
		},
		{
			id: 3,
			title: "Delivered to your home",
			subtitle: "baked to order & gift wrapped",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, eum nemo assumenda optio libero autem, vero sed quibusdam, necessitatibus asperiores consectetur eius est eos? Ipsa pariatur delectus illo necessitatibus asperiores qui dignissimos ullam! Fugit, sed optio.",
			dimension: "large",
			backgroundImage: "bakery-process-3.jpg",
		},
	],

	locations: [
		{
			city: "New York",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "new-york-bk-800x530.jpg",
			bgColor: "#f1f9ff",
		},
		{
			city: "London",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "london-bk-800x530.jpg",
			bgColor: "#fdf3db",
		},
	],

	locations: [
		{
			city: "New York",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "new-york-bk-800x530.jpg",
			bgColor: "#f1f9ff",
		},
		{
			city: "London",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "london-bk-800x530.jpg",
			bgColor: "#fdf3db",
		},
	],

	photos: [
		{
			id: 1,
			url: "social-1.jpg",
		},
		{
			id: 2,
			url: "social-2.jpg",
		},
		{
			id: 3,
			url: "social-3.jpg",
		},
		{
			id: 5,
			url: "social-5.jpg",
		},
		{
			id: 4,
			url: "social-4.jpg",
		},
		{
			id: 6,
			url: "social-6.jpg",
		},
	],
});
