export default class Card {
    constructor(selector, image) {
        this._selector = selector;
        this._image = image;
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
        image.src = this._image;
        return element;
    }
}