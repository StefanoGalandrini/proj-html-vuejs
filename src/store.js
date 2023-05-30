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

	locations: [
		{
			city: "New York",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "new-york-bk-800x530.jpg",
			bgColor: "#f1f9fb",
		},
		{
			city: "London",
			phone: "1.800.458.556",
			hours: "9:00 AM - 6:00 PM",
			url: "london-bk-800x530.jpg",
			bgColor: "#faf3e3",
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
			id: 4,
			url: "social-4.jpg",
		},
		{
			id: 5,
			url: "social-5.jpg",
		},
		{
			id: 6,
			url: "social-6.jpg",
		},
		{
			id: 7,
			url: "social-7.jpg",
		},
	],
});
