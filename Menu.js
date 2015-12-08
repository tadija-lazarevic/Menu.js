var Menu = (function () {
    var settings = {};

    function InitEvents() {
        // Event for clicks on the close button inside the menu, if the button for close and open are the same
        if (settings.toggleButton) {
            settings.toggleButton.addEventListener('click', function (e) {
                if (Utils.HasClass(settings.mask, 'isActive')) {
                    e.preventDefault();
                    Close();
                }
                else if (!Utils.HasClass(settings.mask, 'isActive')) {
                    e.preventDefault();
                    Open();
                }
            });
        }
        else if (settings.openButton && settings.closeButton) {
            settings.openButton.addEventListener('click', function (e) {
                e.preventDefault();
                Open();
            });
            settings.closeButton.addEventListener('click', function (e) {
                e.preventDefault();
                Close();
            });
        }


        // Event for clicks on the mask.
        settings.mask.addEventListener('click', function (e) {
            e.preventDefault();
            Close();
        });
    }

    function Close() {
        Utils.RemoveClassWithName(settings.body, 'hasActiveMenu');
        Utils.RemoveClassWithName(settings.wrapper, 'hasActiveMenu');
        Utils.RemoveClassWithName(settings.menu, 'isActive');
        Utils.RemoveClassWithName(settings.mask, 'isActive');
        // Callback
        if (settings.onClose) {
            settings.onClose();
        }
    }

    function Open() {
        Utils.AddClass(settings.body, 'hasActiveMenu');
        Utils.AddClass(settings.menu, 'isActive');
        Utils.AddClass(settings.mask, 'isActive');
        // Callback
        if (settings.onOpen) {
            settings.onOpen();
        }
    }

    return {
        Init: function (params) {
            settings.body         = document.body;
            settings.wrapper      = params.wrapper;
            settings.mask         = params.mask;
            settings.menu         = params.menu;
            settings.closeButton  = params.closeButton;
            settings.openButton   = params.openButton;
            settings.toggleButton = params.toggleButton;
            settings.onOpen       = params.onOpen || null;
            settings.onClose      = params.onClose || null;
            InitEvents();

        }
    }
});