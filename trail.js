
// hexagon cursor

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".on-off");
const textlinks = document.querySelectorAll(".text-zone h1");
const buttonlinks = document.querySelectorAll(".contact-button");


document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 5;
    let topPosition = e.pageY + 5;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})



textlinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

textlinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})



buttonlinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

buttonlinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})
