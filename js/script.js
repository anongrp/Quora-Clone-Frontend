
// Global Variables
var model = $('.model_container');
var backdrop = $('.backdrop');


function openModel(e) {
    model.fadeIn(500);
    backdrop.fadeIn(800);
}

function closeModel(e) {
    model.hide();
    backdrop.fadeOut(500);
}