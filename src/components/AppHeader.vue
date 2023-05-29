<script>
export default {};
</script>

<template>
	<header>
		<nav>
			<img
				src="../assets/images/avada-bakery-logo-retina-200x97.png"
				alt="Logo" />
			<ul class="menu">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Shop</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
nav {
	height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;

	ul {
		height: 100%%;
		list-style-type: none;
		display: flex;
		gap: 1.5rem;

		a {
			text-decoration: none;
		}
	}
}
</style>
