const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}
// =========================================
// FILTROS DEL BLOG
// =========================================
const categoryButtons = document.querySelectorAll(".category-button");
const articleCards = document.querySelectorAll(".article-card");
if (categoryButtons.length && articleCards.length) {
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory =
                button.dataset.category;
            // Actualizar botón activo
            categoryButtons.forEach(item => {
                item.classList.remove("active");
            });
            button.classList.add("active");
            // Filtrar artículos
            articleCards.forEach(article => {
                const articleCategory =
                    article.dataset.category;
                if (
                    selectedCategory === "todos" ||
                    articleCategory === selectedCategory
                ) {
                    article.style.display = "";
                } else {
                    article.style.display = "none";
                }
            });
        });
    });
}