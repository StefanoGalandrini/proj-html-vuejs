<script>
export default {
	data() {
		return {
			activeItem: 0,
			showMessage: false,
			cartItemCount: 2,
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
	<footer>
		<!-- Call to Action -->
		<div class="container">
			<h4 class="subtitle">try our seasonal products</h4>
			<h2 class="title">Order from pick-up delivery to your home</h2>
			<button class="light">Shop Now</button>
		</div>

		<div class="footer-container">
			<div class="left-section">
				<img
					src="../assets/images/avada-bakery-logo-retina-200x97.png"
					alt="Logo" />
				<nav>
					<ul class="menu">
						<li v-for="(item, index) in items" :key="item">
							<a
								href=""
								@mouseover="activeItem = index"
								:class="{active: activeItem === index}">
								{{ item }}
							</a>
						</li>
						<li class="message">
							<a
								href=""
								@mouseover="showMessage = true"
								@mouseleave="showMessage = false"
								@click="showMessage = !showMessage">
								<font-awesome-icon icon="fa-solid fa-cart-shopping" />
								<span v-if="showMessage"
									>Il carrello contiene {{ cartItemCount }} elementi</span
								>
							</a>
						</li>
						<li>
							<div class="items">{{ cartItemCount }}</div>
						</li>
					</ul>
				</nav>
			</div>
			<div class="right-section">
				<p>Subscribe to our Newsletter</p>
				<form>
					<input type="email" placeholder="Enter email address*" />
					<button class="dark" type="submit">Subscribe</button>
				</form>
			</div>
		</div>

		<!-- Copyright and Socials icons -->

		<div class="copyright">
			<p>
				© Copyright 2012 - 2020 | Avada Theme by ThemeFusion ! All Rights
				Reserved ! Powered by WordPress
			</p>
			<div class="icons">
				<a href="">
					<font-awesome-icon icon="fa-brands fa-instagram" />
				</a>
				<a href="">
					<font-awesome-icon icon="fa-brands fa-twitter" />
				</a>
				<a href="">
					<font-awesome-icon icon="fa-brands fa-facebook-f" />
				</a>
				<a href="">
					<font-awesome-icon icon="fa-brands fa-pinterest-p" />
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 3rem, 0, #ffffff, #ffffff);

footer {
	font-family: "Raleway";
	height: 100vh;
	padding-top: 10rem;
}
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
	margin-bottom: 3rem;

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
		border-radius: 5px;
	}
}

.footer-container {
	font-family: "Raleway";
	width: 100%;
	height: 25vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 3rem;
}

.left-section,
.right-section {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.left-section {
	align-items: start;
	justify-content: center;
}

.right-section {
	align-items: end;
	justify-content: center;

	p {
		font-family: "Source Serif Pro";
		font-size: 1.5rem;
		font-weight: 600;
		color: $mainColor;
		margin-bottom: 3rem;
	}

	button {
		border-radius: 5px;
		font-weight: 700;
	}
}

form {
	display: flex;
}

input {
	font-family: "Raleway";
	width: 30rem;
	margin-right: 1rem;
	border: 1px solid lightgrey;
	border-radius: 5px;
	font-size: 1rem;
	padding: 0.2rem 1rem;
}

nav {
	height: 12vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	ul {
		height: 100%;
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: 2.5rem;

		li {
			height: 70%;

			span {
				width: 10rem;
				position: absolute;
				bottom: 4rem;
				left: -3rem;
				background-color: #f0edf5;
				text-transform: none;
				padding: 1rem;
				border-radius: 5px;
				text-align: center;
			}
		}

		a {
			position: relative;
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

		.items {
			font-family: "Source Serif Pro";
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			background-color: #f0edf5;
			font-size: 1.25rem;
			padding-top: 0.2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: -1.5rem;
			margin-top: 0.5rem;
		}
	}
}
.copyright {
	height: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 3rem;
	font-size: 0.8rem;
	color: $textColor;
	margin-bottom: 5rem;
}

.icons {
	display: flex;
	gap: 3rem;
	color: $mainColor;
	font-size: 1.3rem;
	margin-left: 3rem;
}
</style>
