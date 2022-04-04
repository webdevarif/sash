(function($) {
    "use strict";

    
	var scroller = $('[avs-scroll]');
    if (scroller.length) {
		scroller.each(function () {
			var ScrollBar = $(this),
            // Slides SpaceBetween
			ScrollBarBoth = ScrollBar.data('both'),
			ScrollBarX = ScrollBar.data('x'),
			ScrollBarY = ScrollBar.data('y');
            
            const ps = new PerfectScrollbar(scroller, {
                useBothWheelAxes: (ScrollBarBoth ? ScrollBarBoth : true),
                suppressScrollX: (ScrollBarX ? ScrollBarX : true),
                suppressScrollY: (ScrollBarY ? ScrollBarY : false),
            });

        })
    };

    const ps = new PerfectScrollbar('.app-sidebar', {
        useBothWheelAxes: true,
        suppressScrollX: true,
        suppressScrollY: false,
    });
    const ps1 = new PerfectScrollbar('.header-dropdown-list', {
        useBothWheelAxes: true,
        suppressScrollX: true,
        suppressScrollY: false,
    });
    const ps2 = new PerfectScrollbar('.notifications-menu', {
        useBothWheelAxes: true,
        suppressScrollX: true,
        suppressScrollY: false,
    });
    const ps3 = new PerfectScrollbar('.message-menu-scroll', {
        useBothWheelAxes: true,
        suppressScrollX: true,
        suppressScrollY: false,
    });

    //P-scrolling
})(jQuery);