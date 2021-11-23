const main_img = document.querySelector(".gallery-image1 img");
const imagesToClick = document.querySelectorAll(".gallery img");

imagesToClick.forEach(img => img.addEventListener('click', changeImage));

function changeImage(event){
    imagesToClick.forEach(img => (img.style.opacity = 1));
    event.target.style.opacity = 0.5;
    main_img.src = event.target.src;

    if(event.target === main_img){
        main_img.src = 'img/Akame_Ga_Kill.jpg'
        main_img.style.opacity = 1;
    }
}