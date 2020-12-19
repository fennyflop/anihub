import Card from './Card.js';

const card = new Card('#card-template');
const gallery = document.querySelector('.gallery');
const b = card.renderCard();
gallery.append(b);


// fetch(`https://randomfox.ca/floof/`, {
// })
//     .then((res) => {
//         return res.json();
//     })
//     .then((res) => {
//         console.log(res.image);
//     })