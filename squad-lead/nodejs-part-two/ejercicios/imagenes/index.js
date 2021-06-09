const coolImages = require("cool-images");

let imageUrl = coolImages.one();
//  console.log(imageUrl);
let manyImages = coolImages.many(600, 800, 15);
manyImages.forEach((image, index) => {
    console.log("imagen" + (index + 1), ": " + image);
})