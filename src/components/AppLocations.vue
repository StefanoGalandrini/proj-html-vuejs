<script>
export default {
	data() {
		return {};
	},

	props: {
		locations: {
			type: Array,
			required: true,
		},
	},

	methods: {
		getUrl(part) {
			return `/src/assets/images/${part.url}`;
		},
	},
};
</script>

<template>
	<section id="locations">
		<div class="container">
			<h4 class="subtitle">Locations</h4>
			<h2 class="title">Visit our Bakeries</h2>

			<div class="cards">
				<div
					class="card"
					v-for="location in locations"
					:key="location.city"
					:style="{backgroundColor: location.bgColor}">
					<img :src="getUrl(location)" :alt="location.name" />
					<h3>{{ location.city }}</h3>
					<div class="info-blocks">
						<div class="info">
							<p class="text">call us</p>
							<p>{{ location.phone }}</p>
						</div>
						<div class="info">
							<p class="text">open all week</p>
							<p>{{ location.hours }}</p>
						</div>
						<button class="info light">View Map</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);
.container {
	width: 88vw;
	height: 75vh;
	margin: 11.5rem auto;
	text-align: center;
}

.cards {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 4rem;

	.card {
		width: 100%;
		text-align: center;

		img {
			width: 100%;
		}

		h3 {
			color: $mainColor;
			margin: 2rem 0;
			font-family: "Source Serif Pro";
			font-size: 2rem;
		}
	}
}

.info-blocks {
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	padding-bottom: 2rem;
}

.info {
	width: calc((70% - 2rem) / 3);
	color: $textColor;

	.text {
		text-transform: uppercase;
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
	}
}
</style>
