function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" name="button">Ok</button>
                    <button type="button" name="button">Cansel</button>
                </div>
            </div>
        </div>
    `)
    return modal
}

$.modal = function (options) {
    const $modal = _createModal(options)
    return {
        open() {},
        close() {},
        destroy() {}
    }
}
