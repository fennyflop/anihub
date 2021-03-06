export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popup.classList.add("zoom__opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        this._popup.classList.remove("zoom__opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    setEventListeners() {
        const closeButton = this._popup.querySelector(".zoom__close-button");
        closeButton.addEventListener("click", () => {
            this.close();
        });
        this._popup.addEventListener("click", evt => {
            if (evt.target.classList.contains("zoom__opened")) {
                this.close();
            }
        });
    }
}