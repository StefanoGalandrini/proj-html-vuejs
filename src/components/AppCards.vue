<script>
export default {
	data() {
		return {};
	},

	props: {
		cards: {
			type: Object,
			required: true,
		},
	},

	methods: {
		getClassForIndex(index) {
			// restituisci la classe corretta in base all'indice dell'elemento
			// ad esempio:
			if (index === 0) return "grid-area-3";
			if (index === 1) return "grid-area-1";
			if (index === 2) return "grid-area-2";
			if (index === 3) return "grid-area-4";
		},

		getBackgroundImageUrl(imageName) {
			return `/src/assets/images/${imageName}`;
		},
	},

	computed: {
		filteredCards() {
			return this.cards.filter((card) => card.id !== 0);
		},
	},
};
</script>

<template>
	<section id="journal">
		<div class="cards-container">
			<div
				v-for="card in filteredCards"
				:key="card.id"
				:class="getClassForIndex(card.id)"
				class="grid-item">
				<div
					class="background-image"
					:style="{
						backgroundImage: `url(${getBackgroundImageUrl(
							card.backgroundImage,
						)})`,
					}"></div>
				<p class="title">{{ card.title }}</p>
				<p class="subtitle" :class="{'text-right': card.justify === 'right'}">
					{{ card.subtitle }}
				</p>
				<p class="text" :class="{'text-right': card.justify === 'right'}">
					{{ card.text }}
				</p>
				<p class="index">0{{ card.id }}</p>
			</div>

			<div class="card grid-item grid-area-3">
				<p class="subtitle">{{ cards[0].subtitle }}</p>
				<p class="title">{{ cards[0].title }}</p>
				<p class="text">{{ cards[0].text }}</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);

.cards-container {
	width: 88vw;
	margin: 6rem auto;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: min-content;
	gap: 2rem;
}

.grid-item {
	height: calc((88vw - 4rem) / 2);
	overflow: hidden;
	color: white;
	padding: 4rem;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: auto 40% 3rem auto;

	.title {
		grid-area: title;
		font-family: "Source Serif Pro";
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 3.5rem;
	}

	.subtitle {
		grid-area: subtitle;
		color: #dddddd;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.text {
		grid-area: text;
		color: white;
		font-size: 1rem;
		line-height: 2rem;
		letter-spacing: 1px;
	}

	.text-right > .text {
		text-align: right;
	}

	.index {
		grid-area: index;
		font-size: 7rem;
		font-weight: 100;
		margin-top: -2rem;
	}

	&:hover {
		box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.7);
	}
}

.grid-area-1 {
	grid-area: 1 / 1 / 2 / 9;
	position: relative;
	grid-template-areas:
		"title title title . . . . index"
		". . . . . . . ."
		". . . . . subtitle subtitle subtitle"
		". . . . . text text text";

	.background-image {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-size: cover;
	}

	.background-image::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4);
		transition: background-color 250ms;
	}

	&:hover .background-image::before {
		background-color: rgba(0, 0, 0, 0.7);
	}
}

.grid-area-2 {
	grid-area: 2 / 1 / 3 / 5;
	position: relative;
	grid-template-areas:
		"title title title title title title . index"
		". . . . . . . ."
		"subtitle subtitle subtitle subtitle subtitle . . ."
		"text text text text text . . .";

	.background-image {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-size: cover;
	}

	.background-image::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.2);
		transition: background-color 250ms;
	}

	&:hover .background-image::before {
		background-color: rgba(0, 0, 0, 0.5);
	}
}

.grid-area-3 {
	grid-area: 2 / 5 / 3 / 9;
	padding: 5rem 6rem;
	background-color: #f8f1f3;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.subtitle {
		color: $textColor;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 4rem;
	}

	.title {
		font-family: "Source Serif Pro";
		color: $mainColor;
		font-size: 2.75rem;
		font-weight: 700;
		line-height: 3.5rem;
		margin-bottom: 4rem;
	}

	.text {
		color: $textColor;
	}

	&:hover {
		box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.7);
	}
}

.grid-area-4 {
	grid-area: 3 / 1 / 4 / 9;
	position: relative;
	grid-template-areas:
		"title title title . . . . index"
		". . . . . . . ."
		"subtitle subtitle subtitle . . . . ."
		"text text text . . . . .";

	.background-image {
		position: absolute;
		inset: 0;
		z-index: -1;
		background-size: cover;
	}

	.background-image::before {
		content: "";
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.2);
		transition: background-color 250ms;
	}

	&:hover .background-image::before {
		background-color: rgba(0, 0, 0, 0.5);
	}
}
</style>
