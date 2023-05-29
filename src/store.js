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
			src: "blackberry-stuffed-bread-400x510.jpg",
			name: "Blackberry Stuffed Bread",
		},
		{
			src: "cherry-cake-400x510.jpg",
			name: "Cherry Cake",
		},
		{
			src: "choco-chip-cookies-400x510.jpg",
			name: "Choco Chip Cookies",
		},
		{
			src: "cookies-with-ice-cream-400x510.jpg",
			name: "Cookies With Ice Cream",
		},
		{
			src: "glazed-pancake-with-lemon-400x510.jpg",
			name: "Glazed Pancake with Lemon",
		},
		{
			src: "home-bread-400x510.jpg",
			name: "Home Bread",
		},
		{
			src: "perfect-macarons-400x510.jpg",
			name: "Perfect Macarons",
		},
		{
			src: "premium-bread-400x510.jpg",
			name: "Premium Bread",
		},
		{
			src: "small-cupcake-400x510.jpg",
			name: "Small Cupcake",
		},
		{
			src: "strawberry-donut-400x510.jpg",
			name: "Strawberry Donut",
		},
		{
			src: "strawberry-jam-cookies-400x510.jpg",
			name: "Strawberry Jam Cookies",
		},
	],
});
