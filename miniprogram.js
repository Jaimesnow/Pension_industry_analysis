function enlargeImage(image) {
    if (image.style.transform === "scale(1.05)") {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "20px 0 30px rgba(0, 0, 0, 0.2)";
    } else {
        image.style.transform = "scale(1.05)";
        image.style.boxShadow = "20px 0 50px rgba(0, 0, 0, 0.3)";
    }
}