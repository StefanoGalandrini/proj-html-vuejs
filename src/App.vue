<script>
import AppHeader from "./components/AppHeader.vue";
import AppCarousel from "./components/AppCarousel.vue";
import AppMoments from "./components/AppMoments.vue";

export default {
	components: {
		AppHeader,
		AppCarousel,
		AppMoments,
	},
};
</script>

<template>
	<AppHeader />
	<AppCarousel />
	<AppMoments />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
