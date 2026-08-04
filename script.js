function changeMap(link) {
    const map = document.getElementById("googleMap");

    if (map) {
        map.src = link;
    } else {
        console.error("Không tìm thấy iframe có id='googleMap'");
    }
}
