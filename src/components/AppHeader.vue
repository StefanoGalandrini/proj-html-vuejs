<script>
import {store} from "../store";

export default {
	data() {
		return {
			store,
			activeItem: 0,
			isScrolled: true,
		};
	},

	methods: {
		scrollToTop() {
			window.scrollTo({top: 0, behavior: "smooth"});
		},
		handleScroll() {
			this.isScrolled = window.scrollY > 0;
		},
	},

	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<template>
	<header>
		<nav>
			<img
				src="../assets/images/avada-bakery-logo-retina-200x97.png"
				alt="Logo" />
			<ul class="menu">
				<li v-for="(item, index) in this.store.topMenuItems" :key="item">
					<a
						href="#"
						@mouseover="activeItem = index"
						:class="{active: activeItem === index}">
						{{ item }}
					</a>
				</li>
				<li>
					<a href="#">
						<font-awesome-icon icon="fa-solid fa-cart-shopping" />
					</a>
				</li>
			</ul>
		</nav>

		<!-- Hero Text -->
		<div class="container">
			<h4 class="subtitle">Fresh & Tasty Bakery Every Day</h4>
			<h1 class="title">The perfect Fresh Bread</h1>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
				nesciunt eum voluptates harum ipsam voluptate? Magnam commodi molestiae
				perferendis.
			</p>
			<button class="light">Explore our products</button>
		</div>

		<!-- Pulsante "sticky" per tornare alla "home" -->
		<div>
			<button v-show="isScrolled" @click="scrollToTop" class="back-to-top">
				<font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
				<p>TORNA SU</p>
			</button>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

header {
	height: 90vh;
	background-color: gold;
	background-image: url("../assets/images/hero-header-bakery.jpg");
	background-repeat: no-repeat;
	background-position: bottom left;
	background-size: cover;
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

// Hero Text

@include text-container-styles(0.8rem, 3.3rem, 1rem);

// .container {
// 	width: 30vw;
// 	margin-left: 7rem;
// 	margin-top: 8rem;

// 	.subtitle {
// 		color: $textColor;
// 		text-transform: uppercase;
// 		font-size: 0.8rem;
// 		letter-spacing: 2px;
// 		font-weight: 500;
// 		margin-bottom: 1rem;
// 	}

// 	.title {
// 		color: $mainColor;
// 		font-family: "Source Serif Pro";
// 		font-size: 3.3rem;
// 		margin-bottom: 1rem;
// 	}

// 	.text {
// 		color: $textColor;
// 		font-size: 1rem;
// 		letter-spacing: 2px;
// 		line-height: 1.7rem;
// 		margin-bottom: 1.5rem;
// 	}

// 	.light {
// 		color: $mainColor;
// 		font-family: inherit;
// 		background-color: white;
// 		padding: 0.75rem 2rem;
// 		font-size: 0.9rem;
// 		font-weight: 500;
// 		border: none;
// 		border-radius: 10px;
// 		transition: all 250ms;

// 		&:hover {
// 			color: white;
// 			background-color: $mainColor;
// 			font-weight: 700;
// 		}
// 	}
// }

// scroll button
.back-to-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
	border: 2px solid $mainColor;
	background-color: black;
	color: white;
	padding: 1rem 1rem;
	border-radius: 1rem;
	font-size: 1.25rem;
	font-weight: 700;
	opacity: 0.8;

	p {
		margin-top: 0.5rem;
		font-size: 0.8rem;
		font-weight: 700;
	}
}
</style>
