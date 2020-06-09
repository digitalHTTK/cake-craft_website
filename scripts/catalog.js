window.addEventListener("load", () => {
    let button = document.getElementsByClassName("page__filter-button")[0];
    let filter = document.getElementsByClassName("page__filter_list")[0];
    button.addEventListener("click", () => {
        filter.classList.toggle("page__filter_list-active");
        button.classList.toggle("page__filter-button-active");
    });
}, true);