var clientButton   = document.getElementById('clientButton');
var mask           = document.getElementById('mask');
var clientWrapper  = document.getElementById('clientWrapper');
var clientMenu     = document.getElementById('clientMenu');
var clientCloseBtn = document.getElementById('clientCloseBtn');


var x = new Menu();
x.Init({
    mask        : mask,
    wrapper     : clientWrapper,
    menu        : clientMenu,
    closeButton    : clientCloseBtn,
    openButton     : clientButton,
//    toggleButton: clientButton,
    onOpen      : function (params) {
        clientButton.style.position = 'absolute';
        clientButton.style.zIndex   = 1001;
    },
    onClose     : function (params) {

    }
});
