<script>
export default {
	data() {
		return {
			hoverCorp: false,
			hoverWed: false,
		};
	},

	methods: {
		handleMouseOver(target) {
			if (target === "corp") {
				this.hoverCorp = true;
			} else if (target === "wed") {
				this.hoverWed = true;
			}
		},
		handleMouseOut(target) {
			if (target === "corp") {
				this.hoverCorp = false;
			} else if (target === "wed") {
				this.hoverWed = false;
			}
		},
	},
};
</script>

<template>
	<section id="about">
		<div class="container">
			<h4 class="subtitle">Corporate & Weddings</h4>
			<h2 class="title">Baking Special Moments</h2>
			<div class="pictures">
				<div
					class="corp"
					@mouseover="this.handleMouseOver('corp')"
					@mouseleave="this.handleMouseOut('corp')">
					<img
						v-show="!this.hoverCorp"
						class="pic-corp"
						src="../assets/images/corporate-bg.jpg"
						alt="" />

					<div v-show="this.hoverCorp" class="corp-hover">
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
					@mouseover="this.handleMouseOver('wed')"
					@mouseleave="this.handleMouseOut('wed')">
					<img
						v-show="!this.hoverWed"
						class="pic-wed"
						src="../assets/images/wedding-bg.jpg"
						alt="" />

					<div v-show="this.hoverWed" class="wed-hover">
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
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);
.container {
	width: 88vw;
	min-height: 65vh;
	margin: 6rem auto;
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
	gap: 4rem;

	.corp,
	.wed {
		width: calc((100% - 4rem) / 2);
	}

	img {
		display: block;
		width: 100%;
	}
}

.wed-hover,
.corp-hover {
	position: relative;

	img {
		filter: brightness(0.6);
	}
}

div.container.hover {
	margin: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.subtitle,
	.title {
		color: white;
	}

	button {
		max-width: fit-content;
		text-align: center;
	}
}
</style>
