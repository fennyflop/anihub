import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._image = this._popup.querySelector(".zoom__image");
    }
    open(link) {
        this._image.src = link;
        super.open();
    }
}