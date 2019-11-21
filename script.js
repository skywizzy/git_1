function Hold(){
    this.constructor = function () {
        alert('its awesomeness...');
    };
}
let handler = new Hold();
handler.constructor();