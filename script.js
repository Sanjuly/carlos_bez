function ampliarImagen(item) {
    const img = item.querySelector('.imagen');
    const desc = item.querySelector('.description');
    if (img.style.transform === "scale(1.1)") {
        img.style.transform = "scale(1)";
        desc.style.display = "none";
    } else {
        img.style.transform = "scale(1.1)";
        desc.style.display = "block";
    }
}
