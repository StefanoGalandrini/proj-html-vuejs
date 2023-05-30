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
	},

	mounted() {
		console.log(this.photos);
	},
};
</script>

<template>
	<div class="grid-container">
		<div
			v-for="(item, index) in items"
			:key="index"
			:class="getClassForIndex(index)">
			<!-- contenuto dell'elemento -->
		</div>
		<div class="rectangle">
			<!-- contenuto dell'elemento più grande -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/general.scss" as *;
@import "../assets/styles/mixin.scss";

@include text-container-styles(0.7rem, 2.1rem, 0, $textColor, $mainColor);

.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
		"square1 rectangle rectangle square2"
		"square3 square4 square5 square6";
}

.grid-item {
	/* Stili comuni per tutti gli elementi della griglia */
}

.square1 {
	grid-area: square1;
}

.rectangle {
	grid-area: rectangle;
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
