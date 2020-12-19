import Card from './Card.js';
import PopupWithImage from './PopupWithImage.js';

const imagePopup = new PopupWithImage(".zoom");
imagePopup.setEventListeners();

const gallery = document.querySelector('.gallery');

for (let i = 0; i !== 9; i++) {
    fetch('https://randomfox.ca/floof/', {})
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const card = new Card('#card-template',
                {
                    image: res.image,
                },
                (link) => {
                    imagePopup.open(link);
                }
            );
            const renderedCard = card.renderCard();
            gallery.append(renderedCard);
        })
}