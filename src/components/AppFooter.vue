<script>
export default {
	data() {
		return {
			activeItem: 0,
		};
	},

	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<template>
	<div class="container">
		<h4 class="subtitle">try our seasonal products</h4>
		<h2 class="title">Order from pick-up delivery to your home</h2>
		<button class="light">Shop Now</button>
	</div>

	<nav>
		<img
			src="../assets/images/avada-bakery-logo-retina-200x97.png"
			alt="Logo" />
		<ul class="menu">
			<li v-for="(item, index) in items" :key="item">
				<a
					href=""
					@mouseover="activeItem = index"
					:class="{active: activeItem === index}">
					{{ item }}
				</a>
			</li>
			<li>
				<a href="">
					<font-awesome-icon icon="fa-solid fa-cart-shopping" />
				</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 3rem, 0, #ffffff, #ffffff);

.container {
	background-image: url("../assets/images/call-to-action-bg.jpg");
	background-size: cover;
	background-position: top center;
	height: 60vh;
	padding-left: 20vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	color: white;

	.subtitle {
		color: white;
		margin-bottom: 2rem;
	}

	.title {
		width: 30ch;
		color: white;
		margin-bottom: 5rem;
	}

	button {
		font-size: 1.2rem;
		padding: 1rem 2.5rem;
	}
}

nav {
	height: 18vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 3rem;

	ul {
		height: 100%;
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: 2.5rem;

		li {
			height: 50%;
		}

		a {
			display: flex;
			align-items: center;
			height: 100%;
			text-decoration: none;
			font-size: 0.8rem;
			letter-spacing: 2px;
			text-transform: uppercase;
			color: $mainColor;
			border-bottom: 2px solid transparent;
			cursor: pointer;
			transition: all 20ms;

			&.active {
				border-bottom: 2px solid $mainColor;
			}
		}
	}
}
</style>
