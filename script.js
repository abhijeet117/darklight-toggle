let body = document.querySelector("body")
let btn = document.querySelector("button");

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"))
} else {
    systemTheme();
}


function systemTheme() {
    let darkLightToggle = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (darkLightToggle) {
    document.body.classList.add("dark")
} else {
    document.body.classList.add("light")
}
}



function btnTheme() {
    btn.addEventListener('click', function() {
    if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light")
} else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark")
}
});
}

btnTheme()




