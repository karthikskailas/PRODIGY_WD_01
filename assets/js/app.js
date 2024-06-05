// Function to show/hide the menu

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show_menu");
			toggle.classList.toggle("show_icon");
		});
	} else {
		console.error(
			`Elements with IDs '${toggleId}' or '${navId}' not found.`
		);
	}
};

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav__menu-link");

window.onscroll = () => {
	const scrollPosition = window.scrollY;

	sections.forEach((section) => {
		const offset = section.offsetTop - 150;
		const height = section.offsetHeight;
		const id = section.getAttribute("id");

		if (scrollPosition >= offset && scrollPosition < offset + height) {
			links.forEach((link) => {
				link.classList.remove("active");
			});

			const activeLink = document.querySelector(
				`.nav__menu-link[href*="${id}"]`
			);
			if (activeLink) {
				activeLink.classList.add("active");
			}
		}
	});
};

showMenu("nav__toogle", "nav-menu");
