export default class Card {
    constructor(selector) {
        this._selector = selector;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._selector)
            .content.cloneNode(true);
        return cardElement;
    }
    renderCard() {
        const element = this._getTemplate();
        const image = element.querySelector('.gallery__image');
        image.src = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg';
        return element;
    }
}