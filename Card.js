export default class Card {
    constructor(selector, { image }, zoomOpen) {
        this._selector = selector;
        this._image = image;
        this._zoomOpen = zoomOpen
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
        image.addEventListener('click', () => {
            this._zoomOpen(image.src);
        })
        image.src = this._image;
        return element;
    }
}