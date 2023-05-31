<script>
import {store} from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppCarousel from "./components/AppCarousel.vue";
import AppMoments from "./components/AppMoments.vue";
import AppCarouselSmall from "./components/AppCarouselSmall.vue";
import AppCards from "./components/AppCards.vue";
import AppLocations from "./components/AppLocations.vue";
import AppSocials from "./components/AppSocials.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	data() {
		return {
			store,
			cardsArray: [
				{
					title: `“Finally found an alternative to the mass produced products. Something that incorporates real organic ingredients, nutrient dense wellness while promoting sustainability and activity”.`,
					subtitle: "Don't just take our word for it",
					text: "Rachel Cooper, Founder",
					justify: "left",
					dimension: "small",
				},
				{
					title: "Tell us what you have in mind",
					subtitle: "manual ingredient selection",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda.",
					justify: "right",
					dimension: "large",
				},
				{
					title: "We Start Baking",
					subtitle: "sweet & delicious",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda.",
					justify: "left",
					dimension: "small",
				},
				{
					title: "Delivered to your home",
					subtitle: "baked to order & gift wrapped",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda.",
					justify: "left",
					dimension: "large",
				},
			],
		};
	},

	components: {
		AppHeader,
		AppCarousel,
		AppMoments,
		AppCarouselSmall,
		AppCards,
		AppLocations,
		AppSocials,
		AppFooter,
	},

	computed: {
		filteredCards() {
			return this.cardsArray.filter((card, index) => index !== 0);
		},

		locations() {
			return store.locations;
		},

		photos() {
			return store.photos;
		},

		bottomMenuItems() {
			return store.bottomMenuItems;
		},
	},
};
</script>

<template>
	<AppHeader />
	<AppCarousel />
	<AppMoments />
	<AppCarouselSmall />
	<div class="grid-container">
		<AppCards
			v-for="(card, index) in this.filteredCards"
			:key="card.subtitle"
			:card="card"
			:index="index"
			:class="{
				'grid-item': true,
				'grid-item-large': card.dimension === 'large',
				'grid-item-small': card.dimension === 'small',
				'grid-area-1': index === 0,
				'grid-area-2': index === 1,
				'grid-area-4': index === 2,
				'text-right': card.justify === 'right',
			}" />

		<div class="grid-item grid-item-small grid-area-3">
			<p class="subtitle">{{ cardsArray[0].subtitle }}</p>
			<p class="title">{{ cardsArray[0].title }}</p>
			<p class="text">{{ cardsArray[0].text }}</p>
		</div>
	</div>

	<AppLocations :locations="locations" />

	<AppSocials :photos="photos" />

	<AppFooter :items="bottomMenuItems" />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;

.grid-container {
	width: 88vw;
	height: 250vh;
	margin: 6rem auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(auto-fill, 19cm);
	gap: 2rem;
}

.grid-item {
	border: 1px solid black;
	padding: 20px;
}

.grid-item-large {
	grid-column: span 2;
}

.grid-area-1 {
	grid-area: 1 / 1 / 2 / 3;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: url(./assets/images/bakery-process-1.jpg);
		background-size: cover;
		filter: brightness(0.5);
	}
}

.grid-area-2 {
	grid-area: 2 / 1 / 3 / 2;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: url(./assets/images/bakery-process-2.jpg);
		background-size: cover;
		filter: brightness(0.5);
	}
}

.grid-area-3 {
	grid-area: 2 / 2 / 3 / 3;
	background-color: #f8f1f3;
	padding: 5rem 7.5rem;

	.subtitle {
		color: $textColor;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 4rem;
	}

	.title {
		font-family: "Source Serif Pro";
		color: $mainColor;
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 3.5rem;
		margin-bottom: 4rem;
	}
}

.grid-area-4 {
	grid-area: 3 / 1 / 4 / 3;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: url(./assets/images/bakery-process-3.jpg);
		background-size: cover;
		filter: brightness(0.5);
	}
}
</style>
