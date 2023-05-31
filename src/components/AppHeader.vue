<script>
import {store} from "../store";

export default {
	data() {
		return {
			store,
			activeItem: 0,
			isScrolled: false,
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
	<section id="home">
		<header>
			<nav>
				<img
					src="../assets/images/avada-bakery-logo-retina-200x97.png"
					alt="Logo" />
				<ul class="menu">
					<li v-for="(item, index) in this.store.topMenuItems" :key="item">
						<a
							:href="`#${item.toLowerCase()}`"
							@mouseover="activeItem = index"
							:class="{active: activeItem === index}">
							{{ item }}
						</a>
					</li>
					<li>
						<a>
							<font-awesome-icon icon="fa-solid fa-cart-shopping" />
						</a>
					</li>
				</ul>
			</nav>

			<!-- Hero Text -->
			<div class="wrapper">
				<div class="container">
					<h4 class="subtitle">Fresh & Tasty Bakery Every Day</h4>
					<h2 class="title">The perfect Fresh Bread</h2>
					<p class="text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus nesciunt eum voluptates harum ipsam voluptate? Magnam
						commodi molestiae perferendis.
					</p>
					<button class="light">Explore our products</button>
				</div>
			</div>

			<!-- Pulsante "fixed" per tornare alla "home" -->
			<div>
				<button v-show="isScrolled" @click="scrollToTop" class="back-to-top">
					<font-awesome-icon icon="fa-solid fa-chevron-up" />
				</button>
			</div>
		</header>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

header {
	height: 90vh;
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
.wrapper {
	width: 30vw;
	margin-left: 7rem;
	margin-top: 8rem;
}
@include text-container-styles(0.8rem, 3.3rem, 1rem, $textColor, $mainColor);

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
