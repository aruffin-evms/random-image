// const image = document.getElementById("image");

let images = [
  "https://blogs.evms.edu/sentaraevms/sentaraevms.com/uploads/images/homepage-hero-image.jpg",
  "imageTwo",
  "imageThree",
];

let selectedImage = images[Math.floor(Math.random() * images.length)];

console.log(selectedImage)

// set the image's source
image.src = selectedImage;
