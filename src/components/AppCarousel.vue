<script>
import {store} from "../store";

export default {
	data() {
		return {
			store,
			currentIndex: 0,
			intervalId: null,
			carouselImages: [
				{
					src: "../assets/images/blackberry-stuffed-bread-400x510.jpg",
					name: "Blackberry Stuffed Bread",
				},
				{
					src: "../assets/images/cherry-cake-400x510.jpg",
					name: "Cherry Cake",
				},
				{
					src: "../assets/images/choco-chip-cookies-400x510.jpg",
					name: "Choco Chip Cookies",
				},
				{
					src: "../assets/images/cookies-with-ice-cream-400x510.jpg",
					name: "Cookies With Ice Cream",
				},
				{
					src: "../assets/images/glazed-pancake-with-lemon-400x510.jpg",
					name: "Glazed Pancake with Lemon",
				},
				{
					src: "../assets/images/home-bread-400x510.jpg",
					name: "Home Bread",
				},
				{
					src: "../assets/images/perfect-macarons-400x510.jpg",
					name: "Perfect Macarons",
				},
				{
					src: "../assets/images/premium-bread-400x510.jpg",
					name: "Premium Bread",
				},
				{
					src: "../assets/images/small-cupcake-400x510.jpg",
					name: "Small Cupcake",
				},
				{
					src: "../assets/images/strawberry-donut-400x510.jpg",
					name: "Strawberry Donut",
				},
				{
					src: "../assets/images/strawberry-jam-cookies-400x510.jpg",
					name: "Strawberry Jam Cookies",
				},
			],
		};
	},

	methods: {
		nextSlide() {
			this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
		},
		prevSlide() {
			this.currentIndex =
				(this.currentIndex - 1 + this.carouselImages.length) %
				this.carouselImages.length;
		},
		startSlideInterval() {
			this.slideInterval = setInterval(this.nextSlide, 3000);
		},
	},

	mounted() {
		this.startSlideInterval();
	},
	beforeDestroy() {
		clearInterval(this.slideInterval);
	},
};
</script>

<template>
	<div class="wrapper">
		<!-- Description Text -->
		<div class="container">
			<h4 class="subtitle">Our products</h4>
			<h2 class="title">
				All our delectable pastries are backed fresh in our Kitchen every
				morning, and are made with all-natural, all organic ingredients.
			</h2>
			<button class="dark">Start Shopping</button>
		</div>

		<div>
			<div class="carousel">
				<button @click="prevSlide">Precedente</button>
				<div
					class="slide"
					v-for="(slide, index) in this.carouselImages"
					:key="index"
					v-show="index === currentIndex">
					{{ slide.src }}
					<img :src="slide.src" :alt="slide.name" />
				</div>
				<button @click="nextSlide">Successivo</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

.wrapper {
	width: 88vw;
	height: 75vh;
	margin: 11.5rem auto;
	display: grid;
	grid-template-columns: 4fr 8fr;
	grid-template-rows: auto;
	grid-template-areas: "text carousel";
	gap: 5rem;
}
@include text-container-styles(0.7rem, 2.1rem, 0);

.carousel {
	grid-area: carousel;
	background-color: gold;
	.carousel {
		display: flex;
		align-items: center;
	}

	.images {
		display: flex;
	}

	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		opacity: 0.5;
	}

	img.active {
		opacity: 1;
	}
}
</style>
