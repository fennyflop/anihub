import Card from './Card.js';

const gallery = document.querySelector('.gallery');

for (let i = 0; i !== 12; i++) {
    fetch('https://randomfox.ca/floof/', {})
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.image)
            const card = new Card('#card-template', res.image);
            const renderedCard = card.renderCard();
            gallery.append(renderedCard);
        })
}