<script>
export default {
	props: {
		photos: {
			type: Array,
			required: true,
		},
	},

	methods: {
		getClassForIndex(index) {
			// restituisci la classe corretta in base all'indice dell'elemento
			// ad esempio:
			if (index === 0) return "square1";
			if (index === 1) return "square2";
			if (index === 2) return "square3";
			if (index === 3) return "square4";
			if (index === 4) return "square5";
			if (index === 5) return "square6";
		},

		getUrl(part) {
			return `/src/assets/images/${part.url}`;
		},
	},
};
</script>

<template>
	<section id="contact">
		<div class="grid-container">
			<div
				v-for="(photo, index) in photos"
				:key="photo.id"
				:class="getClassForIndex(index)"
				class="grid-item">
				<div class="socials">
					<img :src="getUrl(photo)" alt="" />
				</div>
			</div>
			<div class="rectangle">
				<div class="container">
					<h4 class="subtitle">made for sharing</h4>
					<h2 class="title">Let's stay in touch</h2>
					<button class="dark">
						<font-awesome-icon icon="fa-brands fa-instagram" />
						<span> Follow Us</span>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);

.grid-container {
	width: 88vw;
	height: 90vh;
	padding: 13rem 0;
	margin: 10rem auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
		"square1 rectangle rectangle square2"
		"square3 square4 square5 square6";
	gap: 1.5rem;
}

.grid-item {
	width: 100%;
	padding: 0;
	border: none;
	filter: brightness(0.8);
	transition: all 300ms;

	&:hover {
		filter: brightness(1.2);
		transform: scale(102%);
	}
}

.socials {
	max-width: 100%;
	overflow: hidden;

	img {
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		object-position: center top;
	}
}

.square1 {
	grid-area: square1;
}

.rectangle {
	grid-area: rectangle;
	background-color: #f8f1f3;

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

.square2 {
	grid-area: square2;
}

.square3 {
	grid-area: square3;
}

.square4 {
	grid-area: square4;
}

.square5 {
	grid-area: square5;
}

.square6 {
	grid-area: square6;
}
</style>
