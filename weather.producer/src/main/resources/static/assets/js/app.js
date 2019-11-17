/**
Core script to handle the entire theme and core functions
**/
var App = function() {

    // IE mode
    var isRTL = false;
    var isIE8 = false;
    var isIE9 = false;
    var isIE10 = false;

    var resizeHandlers = [];

    var assetsPath = '../assets/';

    var globalImgPath = 'global/img/';

    var globalPluginsPath = 'global/plugins/';

    var globalCssPath = 'global/css/';

    // theme layout color set

    var brandColors = {
        'blue': '#89C4F4',
        'red': '#F3565D',
        'green': '#1bbc9b',
        'purple': '#9b59b6',
        'grey': '#95a5a6',
        'yellow': '#F8CB00'
    };

    // initializes main settings
    var handleInit = function() {

//        if ($('body').css('direction') === 'rtl') {
//            isRTL = true;
//        }

//        isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
//        isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
//        isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);
//
//        if (isIE10) {
//            $('html').addClass('ie10'); // detect IE10 version
//        }
//
//        if (isIE10 || isIE9 || isIE8) {
//            $('html').addClass('ie'); // detect IE10 version
//        }
    };

    // runs callback functions set by App.addResponsiveHandler().
    var _runResizeHandlers = function() {
//        // reinitialize other subscribed elements
//        for (var i = 0; i < resizeHandlers.length; i++) {
//            var each = resizeHandlers[i];
//            each.call();
//        }
    };

    // handle the layout reinitialization on window resize
    var handleOnResize = function() {
//        var resize;
//        if (isIE8) {
//            var currheight;
//            $(window).resize(function() {
//                if (currheight == document.documentElement.clientHeight) {
//                    return; //quite event since only body resized not window.
//                }
//                if (resize) {
//                    clearTimeout(resize);
//                }
//                resize = setTimeout(function() {
//                    _runResizeHandlers();
//                }, 50); // wait 50ms until window resize finishes.                
//                currheight = document.documentElement.clientHeight; // store last body client height
//            });
//        } else {
//            $(window).resize(function() {
//                if (resize) {
//                    clearTimeout(resize);
//                }
//                resize = setTimeout(function() {
//                    _runResizeHandlers();
//                }, 50); // wait 50ms until window resize finishes.
//            });
//        }
    };

    // Handles portlet tools & actions
    var handlePortletTools = function() {
       
     
    };
    
    // Handlesmaterial design checkboxes
    var handleMaterialDesign = function() {

       
    }

    // Handles custom checkboxes & radios using jQuery iCheck plugin
    var handleiCheck = function() {
      
    };

    // Handles Bootstrap switches
    var handleBootstrapSwitch = function() {
      
    };

    // Handles Bootstrap confirmations
    var handleBootstrapConfirmation = function() {
        }
    
    // Handles Bootstrap Accordions.
    var handleAccordions = function() {
     };

    // Handles Bootstrap Tabs.
    var handleTabs = function() {
        //activate tab if tab id provided in the URL
       
    };

    // Handles Bootstrap Modals.
    var handleModals = function() {        
      
    };

    // Handles Bootstrap Tooltips.
    var handleTooltips = function() {
       };

    // Handles Bootstrap Dropdowns
    var handleDropdowns = function() {
    
    };

    var handleAlerts = function() {
        
    };

    // Handle Hower Dropdowns
    var handleDropdownHover = function() {
      
    };

    // Handle textarea autosize 
    var handleTextareaAutosize = function() {
       
    }

    // Handles Bootstrap Popovers

    // last popep popover
    var lastPopedPopover;

    var handlePopovers = function() {
       
    };

    // Handles scrollable contents using jQuery SlimScroll plugin.
    var handleScrollers = function() {
       
    };

    // Handles Image Preview using jQuery Fancybox plugin
    var handleFancybox = function() {
       
    };

    // Handles counterup plugin wrapper
    var handleCounterup = function() {
      
    };

    // Fix input placeholder issue for IE8 and IE9
    var handleFixInputPlaceholderForIE = function() {
     
    };

    // Handle Select2 Dropdowns
    var handleSelect2 = function() {
    
    };

    // handle group element heights
   var handleHeight = function() {
     
    }
    
    //* END:CORE HANDLERS *//

    return {

        //main function to initiate the theme
        init: function() {
            //IMPORTANT!!!: Do not modify the core handlers call order.

            //Core handlers
     //       handleInit(); // initialize core variables
     //       handleOnResize(); // set and handle responsive    

            //UI Component handlers     
//            handleMaterialDesign(); // handle material design       
//            handleiCheck(); // handles custom icheck radio and checkboxes
//            handleBootstrapSwitch(); // handle bootstrap switch plugin
//            handleScrollers(); // handles slim scrolling contents 
//            handleFancybox(); // handle fancy box
//            handleSelect2(); // handle custom Select2 dropdowns
//            handlePortletTools(); // handles portlet action bar functionality(refresh, configure, toggle, remove)
//            handleAlerts(); //handle closabled alerts
//            handleDropdowns(); // handle dropdowns
//            handleTabs(); // handle tabs
//            handleTooltips(); // handle bootstrap tooltips
//            handlePopovers(); // handles bootstrap popovers
//            handleAccordions(); //handles accordions 
//            handleModals(); // handle modals
//            handleBootstrapConfirmation(); // handle bootstrap confirmations
//            handleTextareaAutosize(); // handle autosize textareas
//            handleCounterup(); // handle counterup instances

            //Handle group element heights
         //   this.addResizeHandler(handleHeight); // handle auto calculating height on window resize

            // Hacks
 //           handleFixInputPlaceholderForIE(); //IE8 & IE9 input placeholder issue fix
        },

        //main function to initiate core javascript after ajax complete
        initAjax: function() {
            //handleUniform(); // handles custom radio & checkboxes     
//            handleiCheck(); // handles custom icheck radio and checkboxes
//            handleBootstrapSwitch(); // handle bootstrap switch plugin
//            handleDropdownHover(); // handles dropdown hover       
//            handleScrollers(); // handles slim scrolling contents 
//            handleSelect2(); // handle custom Select2 dropdowns
//            handleFancybox(); // handle fancy box
//            handleDropdowns(); // handle dropdowns
//            handleTooltips(); // handle bootstrap tooltips
//            handlePopovers(); // handles bootstrap popovers
//            handleAccordions(); //handles accordions 
//            handleBootstrapConfirmation(); // handle bootstrap confirmations
        },

       

       

     

        //check RTL mode
        isRTL: function() {
            return isRTL;
        }

       

       
    };

}();

<!-- END THEME LAYOUT SCRIPTS -->

jQuery(document).ready(function() {    
//   App.init(); // init metronic core componets
});