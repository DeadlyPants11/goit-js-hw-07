import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`,
  ""
);

const images = gallery.addEventListener("click", onClickShow);

function onClickShow(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
      return;
    }

  const instance = basicLightbox.create(
  `<img src="${evt.target.dataset.source}">`, 
  );
  instance.show();
  gallery.addEventListener("keydown", evt => {
    if (evt.code === "Escape") {
      instance.close();
    }
 })
}


gallery.insertAdjacentHTML("beforeend", markup);


console.log(galleryItems);