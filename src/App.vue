<script>
import AppHeader from "./components/AppHeader.vue";
import AppCarousel from "./components/AppCarousel.vue";

export default {
	components: {
		AppHeader,
		AppCarousel,
	},
};
</script>

<template>
	<AppHeader />
	<AppCarousel />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
