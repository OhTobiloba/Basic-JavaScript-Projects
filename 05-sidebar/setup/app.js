const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector("close-btn");

sidebarToggleBtn.addEventListener("click", () => {
    // sidebar.classList.toggle("show-sidebar");


    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar")
    } else {
        sidebar.classList.add("show-sidebar")
    }
})



sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})