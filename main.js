

// search
const btnSearch = document.querySelector('.search-box__button');
btnSearch.addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();

})

//img show
var imgFeature = document.querySelector('.img-wrap img');
var listImg = document.querySelectorAll('.list-img div');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');


var current = 0;

function updataImgByIndex(index) {
    current = index;
    imgFeature.src = listImg[index].querySelector('img').src;
    listImg.forEach((item) => {
        item.classList.remove('active');
    })
    listImg[Index].classList.add('active');
}


listImg.forEach((imgElement, index) => {

    imgElement.addEventListener('click', (e) => {
        imgFeature.style.opacity = 0;
        setTimeout(() => {
            updataImgByIndex(index);
            imgFeature.style.opacity = 1;
        }, 400);

    })
})

prevBtn.addEventListener('click', (e) => {

    if (current == 0) {
        current = listImg.length - 1;
    } else {
        current--;
    }
    imgFeature.style.animation = ''
    updataImgByIndex(current);
})
nextBtn.addEventListener('click', (e) => {
    if (current == listImg.length - 1) {
        current = 0;
    } else {
        current++;
    }

    imgFeature.style.animation = ''
    updataImgByIndex(current);
})

updataImgByIndex(0);
// image gallery
const images = document.querySelectorAll(".wrapper .image img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");
const close = document.querySelector(".gallery .close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showGallery();
    });
});

function showGallery() {
    currentIndex == images.length - 1
        ? next.classList.add("hide")
        : next.classList.remove("hide");

    currentIndex == 0
        ? prev.classList.add("hide")
        : prev.classList.remove("hide");

    gallery.classList.add("show");
    galleryImg.src = images[currentIndex].src;
}

close.addEventListener("click", () => {
    gallery.classList.remove("show");
});

next.addEventListener("click", () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined;
    showGallery();
});
prev.addEventListener("click", () => {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery();
});

// esc click
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) gallery.classList.remove("show");
});

