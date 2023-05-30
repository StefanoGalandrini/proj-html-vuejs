<script>
import {store} from "../store";

export default {
	data() {
		return {
			store,
			currentImage: 0,
			selectedImage: null,
			imagesShown: 2,
			// autoScroll: true,
			// autoScrollInterval: null,
		};
	},

	methods: {
		nextImage() {
			if (
				this.currentImage <
				this.store.carouselImages.length - this.imagesShown
			) {
				this.currentImage++;
			} else {
				this.currentImage = 0;
			}
		},

		prevImage() {
			if (this.currentImage > 0) {
				this.currentImage--;
			} else {
				this.currentImage = this.store.carouselImages.length - this.imagesShown;
			}
		},

		toggleSelectedImage(index) {
			if (this.selectedImage === index) {
				this.selectedImage = null;
			} else {
				this.selectedImage = index;
			}
		},

		showImageText(index) {
			this.selectedImage = index;
		},

		hideImageText() {
			this.selectedImage = null;
		},

		// startAutoScroll() {
		// 	this.autoScroll = true;
		// 	this.autoScrollInterval = setInterval(() => {
		// 		if (this.autoScroll) {
		// 			this.nextImage();
		// 		}
		// 	}, 2000);
		// },

		// stopAutoScroll() {
		// 	this.autoScroll = false;
		// 	clearInterval(this.autoScrollInterval);
		// },
	},

	computed: {
		visibleImages() {
			return this.store.carouselImages.slice(
				this.currentImage,
				this.currentImage + this.imagesShown,
			);
		},
	},

	mounted() {
		this.startAutoScroll();
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
			<div class="carousel-container" :style="{'--images-shown': imagesShown}">
				<div class="carousel-images">
					<!-- <transition-group name="slide" tag="div"> -->
					<div
						v-for="(image, index) in visibleImages"
						:key="index"
						class="shown">
						<img
							:src="image.src"
							:alt="image.name"
							@mouseover="showImageText(index + currentImage)"
							@mouseleave="hideImageText" />
						<div
							v-if="selectedImage === index + currentImage"
							class="image-text">
							<p class="name">{{ image.name }}</p>
							<p class="type">Cookies, Pastries</p>
							<p class="price">{{ image.price }}</p>
						</div>
					</div>
				</div>
				<div class="carousel-arrows">
					<font-awesome-icon
						icon="fa-solid fa-chevron-left"
						@click="prevImage" />
					<font-awesome-icon
						icon="fa-solid fa-chevron-right"
						@click="nextImage" />
				</div>
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

.carousel-container {
	position: relative;
	width: 100%;
	height: 100%;
}

.carousel-images {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	gap: 1rem;
}

.carousel-images div.shown {
	flex: 0 0 50%;
	position: relative;
}

.carousel-images img {
	width: calc(100% - 1rem);
	height: 100%;
	object-fit: cover;
	filter: brightness(0.8);
}

.image-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	color: white;

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
