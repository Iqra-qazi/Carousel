var burgers = [
    "https://assets.indolj.io/upload/1689181728-duo%20signature%20deal.jpg",
    "https://texasburgers.businesswala.pk/assets/uploads/1179_d2360cb6352d6f58e1c8ea6ffc62fa26.png",
    "https://rancherscafe.com/_next/image?url=https%3A%2F%2Fstatic.rancherscafe.com%2Fproducts%2Fsku%2Fimages%2FMidnight.jpg&w=828&q=75",
  "https://img.freepik.com/premium-psd/psd-fast-food-burger-best-deals-nomlet-design-social-media-instagram-post-template_534119-3330.jpg",
  "https://assets.indolj.io/upload/1751377987-crispy%20deals.webp"
];

var index = 0;
var burger = document.getElementById("burger");

function next() {
    if (index == burgers.length - 1) {
        index = 0;
    } else {
        index++;
    }
    burger.src = burgers[index];
}

function previous() {
    if (index == 0) {
        index = burgers.length - 1;
    } else {
        index--;
    }
    burger.src = burgers[index];
}