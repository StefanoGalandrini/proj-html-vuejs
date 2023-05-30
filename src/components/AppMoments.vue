<script>
export default {
	data() {
		return {
			hoverCorp: false,
			hoverWed: false,
		};
	},
};
</script>

<template>
	<div class="container">
		<h4 class="subtitle">Corporate &Weddings</h4>
		<h2 class="title">Baking Special Moments</h2>
		<div class="pictures">
			<div
				class="corp"
				@mouseover="this.hoverCorp = true"
				@mouseout="this.hoverCorp = false">
				<img
					v-if="!this.hoverCorp"
					class="pic-corp"
					src="../assets/images/corporate-bg.jpg"
					alt="" />

				<div v-if="this.hoverCorp" class="corp-hover">
					<img
						class="pic-corp-hover"
						src="../assets/images/corporate-hover-bg.jpg"
						alt="" />
					<div class="container hover">
						<h4 class="subtitle">International Bakery</h4>
						<h2 class="title">Corporate Events</h2>
						<button class="dark">Explore more</button>
					</div>
				</div>
			</div>

			<div
				class="wed"
				@mouseover="this.hoverWed = true"
				@mouseout="this.hoverWed = false">
				<img
					v-if="!this.hoverWed"
					class="pic-wed"
					src="../assets/images/wedding-bg.jpg"
					alt="" />

				<div v-if="this.hoverWed" class="wed-hover">
					<img
						class="pic-wed-hover"
						src="../assets/images/wedding-hover-bg.jpg"
						alt="" />
					<div class="container hover">
						<h4 class="subtitle">Private Dining Hall</h4>
						<h2 class="title">Weddings & Parties</h2>
						<button class="dark">Explore more</button>
					</div>
				</div>
			</div>
		</div>
	</div>
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

	.subtitle,
	.title {
		padding-bottom: 2rem;
	}
}

.pictures {
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	gap: 6rem;

	.corp,
	.wed {
		width: calc((100% - 6rem) / 2);
	}

	img {
		width: 100%;
	}
}

.wed-hover,
.corp-hover {
	position: relative;
}

div.container.hover {
	z-index: 10;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.subtitle,
	.title {
		color: white;
	}
}
</style>
