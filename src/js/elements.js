document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".ui-tabs .tab");

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function (e) {
            openTab(e.currentTarget, e.currentTarget.dataset.tab);
        });
    });
});

function openTab(clickedTab, tabId) {
    var contents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    clickedTab.classList.add("active");
}