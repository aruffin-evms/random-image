// images array
const images = [
  "https://blogs.evms.edu/sentaraevms/sentaraevms.com/uploads/images/homepage-hero-image.jpg",
  "imageTwo",
  "imageThree",
];

// random number generator. max number is the length of the array
const selectedImage = images[Math.floor(Math.random() * images.length)];

// log for testing
// console.log(selectedImage)

// set the image's source
// image.src = selectedImage;
