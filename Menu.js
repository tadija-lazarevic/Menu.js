var Menu = (function () {
    var settings        = {};

    function InitEvents() {
        // Event for clicks on the close button inside the menu.
        settings.closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            Close();
        }.bind(this));

        // Event for clicks on the mask.
        settings.mask.addEventListener('click', function (e) {
            e.preventDefault();
            Close();
        }.bind(this));
    }

    function Close() {
        Utils.RemoveClassWithName(settings.body, 'hasActiveMenu');
        Utils.RemoveClassWithName(settings.wrapper, 'hasActiveMenu');
        Utils.RemoveClassWithName(settings.menu, 'isActive');
        Utils.RemoveClassWithName(settings.mask, 'isActive');
    }

    return {
        Init: function (params) {
            settings.wrapper  = params.wrapper;
            settings.mask     = params.mask;
            settings.menu     = params.menu;
            settings.body     = document.body;
            settings.closeBtn = params.closeBtn;
            InitEvents();
        },
        Open: function () {
            Utils.AddClass(settings.body, 'hasActiveMenu');
            Utils.AddClass(settings.menu, 'isActive');
            Utils.AddClass(settings.mask, 'isActive');


        }
    }
});