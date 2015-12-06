var clientButton   = document.getElementById('clientButton');
var mask           = document.getElementById('mask');
var clientWrapper  = document.getElementById('clientWrapper');
var clientMenu     = document.getElementById('clientMenu');
var clientCloseBtn = document.getElementById('clientCloseBtn');


var x = new Menu();
x.Init({
    mask    : mask,
    wrapper : clientWrapper,
    menu    : clientMenu,
    closeBtn: clientCloseBtn
});

clientButton.addEventListener('click', function (e) {
    e.preventDefault();
    x.Open();
});

// WORKER
var workerButton   = document.getElementById('workerButton');
var workerWrapper  = document.getElementById('workerWrapper');
var workerMenu     = document.getElementById('workerMenu');
var workerCloseBtn = document.getElementById('workerCloseBtn');

var workerMenuObj = new Menu;
workerMenuObj.Init({
    mask    : mask,
    wrapper : workerWrapper,
    menu    : workerMenu,
    closeBtn: workerCloseBtn
});


workerButton.addEventListener('click', function (e) {
    e.preventDefault();
    workerMenuObj.Open();
});