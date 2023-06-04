import {createApp} from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import {library} from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
	faCartShopping,
	faChevronRight,
	faChevronLeft,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import {
	faInstagram,
	faTwitter,
	faFacebookF,
	faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

/* Library for Carousels */
import "@splidejs/vue-splide/css";

/* add icons to the library */
library.add(
	faCartShopping,
	faChevronRight,
	faChevronLeft,
	faChevronUp,
	faInstagram,
	faTwitter,
	faFacebookF,
	faPinterestP,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
