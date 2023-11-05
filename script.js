const menuToggle = document.querySelector('.menu-toogle');
const navList = document.querySelector('.navlist');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.getElementById("downloadbutton").addEventListener("click",function() {

    var fileUrl = "./vatsalaresume.pdf";
    var a = document.createElement("a");
    a.href = fileUrl;
    a.download = "vatsalaresume.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});