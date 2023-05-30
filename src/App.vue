<script>
import AppHeader from "./components/AppHeader.vue";
import AppCarousel from "./components/AppCarousel.vue";
import AppMoments from "./components/AppMoments.vue";
import AppCarouselSmall from "./components/AppCarouselSmall.vue";

export default {
	data() {
		return {
			cardsArray: [
				{
					title: "Tell us what you have in mind",
					subtitle: "manual ingredient selection",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda ipsum architecto veniam quod deleniti necessitatibus.Maiores, enim.",
					justify: "right",
				},
				{
					title: "We Start Baking",
					subtitle: "manual ingredient selection",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda ipsum architecto veniam quod deleniti necessitatibus.Maiores, enim.",
					justify: "right",
				},
				{
					title: "Tell us what you have in mind",
					subtitle: "manual ingredient selection",
					text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem minus iusto fugit commodi at esse itaque corporis magni porro repudiandae voluptates dicta, saepe, cum repellendus assumenda ipsum architecto veniam quod deleniti necessitatibus.Maiores, enim.",
					justify: "right",
				},
			],
		};
	},

	components: {
		AppHeader,
		AppCarousel,
		AppMoments,
		AppCarouselSmall,
	},
};
</script>

<template>
	<AppHeader />
	<AppCarousel />
	<AppMoments />
	<AppCarouselSmall />

	<div class="cards">
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam rem
			minus iusto fugit commodi at esse itaque corporis magni porro repudiandae
			voluptates dicta, saepe, cum repellendus assumenda ipsum architecto veniam
			quod deleniti necessitatibus. Maiores, enim.
		</p>
	</div>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
