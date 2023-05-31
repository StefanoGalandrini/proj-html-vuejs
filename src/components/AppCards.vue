<script>
export default {
	data() {
		return {};
	},

	props: {
		card: {
			type: Object,
			required: true,
		},

		index: {
			type: Number,
			required: true,
		},
	},
};
</script>

<template>
	<section id="journal">
		<div class="cards container">
			<div
				class="card"
				:class="{
					large: card.dimension === 'large',
					'text-right': card.justify === 'right',
				}">
				<p class="title">{{ card.title }}</p>
				<p class="subtitle" :class="{'text-right': card.justify === 'right'}">
					{{ card.subtitle }}
				</p>
				<p class="text" :class="{'text-right': card.justify === 'right'}">
					{{ card.text }}
				</p>
				<p class="index">0{{ index + 1 }}</p>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;

.cards-container {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}

.card {
	color: white;
	padding: 3.5rem;
	position: relative;

	.title {
		width: 23ch;
		position: absolute;
		inset: 3.5rem;
		font-family: "Source Serif Pro";
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 3.5rem;
	}

	.subtitle {
		position: absolute;
		left: 3.5rem;
		top: 28rem;
		color: #dddddd;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.subtitle.text-right {
		left: 70rem;
		top: 28rem;
	}

	.text {
		position: absolute;
		left: 3.5rem;
		top: 30rem;
		width: 50ch;
		color: white;
		font-size: 1rem;
		line-height: 2rem;
		letter-spacing: 1px;
	}

	.text.text-right {
		left: 70rem;
		top: 30rem;
	}

	.text-right > .text {
		text-align: right;
	}

	.index {
		position: absolute;
		right: 3.5rem;
		top: 1rem;
		font-size: 7rem;
		font-weight: 100;
	}
}
</style>
