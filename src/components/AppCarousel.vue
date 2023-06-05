<script>
import {Splide, SplideSlide} from "@splidejs/vue-splide";

export default {
	data() {
		return {
			intervalId: null,
		};
	},

	components: {
		Splide,
		SplideSlide,
	},

	props: {
		carouselImages: {
			type: Array,
			required: true,
		},

		imagesShown: {
			type: Number,
			required: true,
		},

		carouselHeight: {
			type: String,
			required: true,
		},

		carouselWidth: {
			type: String,
			required: true,
		},

		gridColumns: {
			type: String,
			required: true,
		},

		gridGap: {
			type: String,
			required: true,
		},

		align: {
			type: String,
			required: true,
		},
	},

	methods: {
		getUrl(image) {
			return `/src/assets/images/${image.src}`;
		},

		nextImage() {
			this.$refs.splide.splide.go("+1");
		},

		prevImage() {
			this.$refs.splide.splide.go("-1");
		},

		stopAutoScroll() {
			if (this.intervalId !== null) {
				clearInterval(this.intervalId);
				this.intervalId = null;
			}
		},

		startAutoScroll() {
			if (this.intervalId === null) {
				this.intervalId = setInterval(this.nextImage, 2000);
			}
		},
	},

	mounted() {
		this.startAutoScroll();
	},
};
</script>

<template>
	<section id="shop">
		<div
			class="wrapper"
			:style="{
				'--grid-columns': gridColumns,
				'--grid-gap': gridGap,
				'--align': align,
			}">
			<!-- Description Text -->
			<div class="container">
				<h4 class="subtitle">Our products</h4>
				<h2 class="title">
					All our delectable pastries are backed fresh in our Kitchen every
					morning, and are made with all-natural, all organic ingredients.
				</h2>
				<button class="dark">Start Shopping</button>
			</div>

			<!-- Carousel -->
			<div class="carousel-container">
				<Splide
					ref="splide"
					class="carousel"
					:options="{
						type: 'loop',
						perPage: imagesShown,
						perMove: 1,
						speed: 800,
						gap: '1rem',
						arrows: false,
						pagination: false,
						interval: 3000,
					}">
					<SplideSlide
						class="carousel-images"
						v-for="(image, index) in carouselImages"
						:key="index"
						@mouseover="stopAutoScroll"
						@mouseleave="startAutoScroll">
						<img :src="getUrl(image)" :alt="image.name" />
						<div class="image-text">
							<h3 class="name">{{ image.name }}</h3>
							<p class="type">Delicious Pastry</p>
							<p class="price">{{ image.price }}</p>
						</div>
					</SplideSlide>
				</Splide>

				<div
					@mouseover="stopAutoScroll"
					@mouseleave="startAutoScroll"
					class="carousel-arrows">
					<font-awesome-icon
						icon="fa-solid fa-chevron-left"
						@click="prevImage" />
					<font-awesome-icon
						icon="fa-solid fa-chevron-right"
						@click="nextImage" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

.wrapper {
	width: 88vw;
	height: 75vh;
	margin: 6rem auto;
	display: grid;
	align-content: center;
	grid-template-columns: var(--grid-columns);
	grid-template-rows: auto;
	grid-template-areas: "txt carousel";
	gap: var(--grid-gap);
	text-align: var(--align);
}

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);

.container {
	grid-area: txt;
}

.carousel-container {
	grid-area: carousel;
	position: relative;
	width: 100%;
	height: 100%;
	align-self: center;
	overflow: hidden;
}

.splide__slide {
	max-width: 100%;
}

.carousel-images {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	gap: 1rem;
	position: relative;

	.image-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white;
		pointer-events: none;
		opacity: 0;
		transition: opacity 300ms ease-in-out;
	}

	&:hover .image-text {
		opacity: 1;
	}

	.name {
		font-family: "Source Serif Pro";
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.5rem;
	}

	.type {
		font-size: 0.8rem;
		line-height: 2rem;
	}

	.price {
		font-size: 1.6rem;
		font-weight: 500;
	}

	img {
		display: block;
		width: 100%;
		object-fit: cover;
		filter: brightness(0.9);
		margin-bottom: 1rem;
		transition: all 300ms;

		&:hover {
			filter: brightness(0.6);
		}
	}
}
.carousel-arrows {
	position: absolute;
	top: 50%;
	transform: translateY(calc(-50% - 2.2rem - 0.5rem));
	left: 0;
	right: 0;
	text-align: center;
}

.fa-chevron-left {
	line-height: 1rem;
	padding: 2.2rem 1rem;
	color: white;
	position: absolute;
	left: 0;
	background-color: #a691b2;
}
.fa-chevron-right {
	line-height: 1rem;
	padding: 2.2rem 1rem;
	color: white;
	position: absolute;
	right: 0;
	background-color: #a691b2;
}
</style>
