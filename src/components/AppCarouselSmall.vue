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
	<section id="gallery">
		<div
			class="wrapper"
			:style="{
				'--grid-columns': gridColumns,
				'--grid-gap': gridGap,
				'--align': align,
			}">
			<!-- Description Text -->
			<div class="container">
				<h2 class="title">Find a freshly baked product perfect for you</h2>
				<p class="text">
					Integer a nibh vitae ex porttior rutrum et ut velit. Etiam ac felis at
					leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.
				</p>
				<button class="dark">Shop All products</button>
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
						<div>
							<img :src="getUrl(image)" :alt="image.name" />
							<p class="under-text name">{{ image.name }}</p>
							<p class="under-text price">{{ image.price }}</p>
						</div>
						<div class="image-text">
							<p class="type">select options / quick view</p>
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
	margin: 3rem auto 0;
	display: grid;
	align-content: center;
	grid-template-columns: var(--grid-columns);
	grid-template-areas: "txt carousel";
	gap: var(--grid-gap);
	text-align: var(--align);

	@include text-container-styles(
		0.7rem,
		2.1rem,
		0.85rem,
		$textColor,
		$mainColor
	);

	.container {
		grid-area: txt;
		align-self: center;
	}
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
		top: 40%;
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

	.type {
		margin: 0;
		padding: 0;
		white-space: nowrap;
		font-size: 0.8rem;
		line-height: 2rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	img {
		display: block;
		width: 100%;
		overflow: hidden;
		object-fit: cover;
		filter: brightness(0.9);
		margin-bottom: 1rem;
		transition: all 300ms;

		&:hover {
			filter: brightness(0.6);
		}
	}
}
.under-text {
	height: 2.5rem;
	background-color: white;
	color: $mainColor;
}

.name {
	font-family: "Source Serif Pro";
	font-size: 1.5rem;
	font-weight: 700;
	line-height: 1.5rem;
}

.price {
	font-size: 1.15rem;
	font-weight: 500;
	margin-top: 1rem;
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
