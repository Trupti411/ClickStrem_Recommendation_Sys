const allBtn = document.getElementById("allBtn");
const menu = document.getElementById("dropdownMenu");

// All वर click केल्यावर menu open/close
allBtn.addEventListener("click", function(e) {
    e.stopPropagation();

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

// बाहेर click केल्यावर menu बंद
document.addEventListener("click", function() {
    menu.style.display = "none";
});