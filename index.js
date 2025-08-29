document.addEventListener("DOMContentLoaded", () => {
    const elementOrder = document.querySelector("#content-text");
    const elementTitle = document.querySelector("#title");
    const elementColor = document.querySelector("#description");
    const elementImage = document.querySelector("#image");

    function order() {
        elementOrder.style.flexDirection = "column";
    }

    function title() {
        elementTitle.innerHTML = "Why didn't you like the title"
    }

    function changeColor() {
        elementColor.style.color = "rgb(22, 139, 47)";
    }

    function addImage() {
        const img = document.createElement("img");
        img.src = "./image/consejo.jpeg";
        elementImage.innerHTML = "";
        elementImage.appendChild(img);
    }

    document.querySelector("#btn1").onclick = order;
    document.querySelector("#btn2").onclick = title;
    document.querySelector("#btn3").onclick = changeColor;
    document.querySelector("#btn4").onclick = addImage;


});