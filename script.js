function changeMap(link) {

    alert(link);

    document.getElementById("googleMap").src = link;

}
const maps = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.5622110584077!2d20.400264099999998!3d44.806243499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f84b3349807%3A0x7cd75bcea2613d92!2sUro%C5%A1a%20Martinovic%CC%81a%2023%2C%20Beograd%2011000%2C%20Serbia!5e1!3m2!1svi!2s!4v1785838415390!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin",
  2: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2410.107529142765!2d20.461193076238903!3d44.81712297107075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ5JzAxLjYiTiAyMMKwMjcnNDkuNiJF!5e1!3m2!1svi!2s!4v1785838558211!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin",
  3: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2410.5435535597458!2d20.397623076238354!3d44.806689971070774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ4JzI0LjEiTiAyMMKwMjQnMDAuNyJF!5e1!3m2!1svi!2s!4v1785838594506!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
};

document.querySelectorAll(".location-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("googleMap").src = maps[card.dataset.map];
  });
});
