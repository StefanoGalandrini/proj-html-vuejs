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
		cardsArray() {
			return store.cardsArray;
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
	<AppCards :cards="cardsArray" />

	<AppLocations :locations="locations" />

	<AppSocials :photos="photos" />

	<AppFooter :items="bottomMenuItems" />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
