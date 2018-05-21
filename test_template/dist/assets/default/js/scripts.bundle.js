/**
 * @class mApp  Metronic App class
 */

var mApp = function() {

    /**
    * Initializes bootstrap tooltip
    */
    var initTooltip = function(el) {
        var skin = el.data('skin') ? 'm-tooltip--skin-' + el.data('skin') : '';
        var width = el.data('width') == 'auto' ? 'm-tooltop--auto-width' : '';
        var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
            
        el.tooltip({
            trigger: triggerValue,
            template: '<div class="m-tooltip ' + skin + ' ' + width + ' tooltip" role="tooltip">\
                <div class="arrow"></div>\
                <div class="tooltip-inner"></div>\
            </div>'
        });
    }
    
    /**
    * Initializes bootstrap tooltips
    */
    var initTooltips = function() {
        // init bootstrap tooltips
        $('[data-toggle="m-tooltip"]').each(function() {
            initTooltip($(this));
        });
    }

    /**
    * Initializes bootstrap popover
    */
    var initPopover = function(el) {
        var skin = el.data('skin') ? 'm-popover--skin-' + el.data('skin') : '';
        var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
            
        el.popover({
            trigger: triggerValue,
            template: '\
            <div class="m-popover ' + skin + ' popover" role="tooltip">\
                <div class="arrow"></div>\
                <h3 class="popover-header"></h3>\
                <div class="popover-body"></div>\
            </div>'
        });
    }

    /**
    * Initializes bootstrap popovers
    */
    var initPopovers = function() {
        // init bootstrap popover
        $('[data-toggle="m-popover"]').each(function() {
            initPopover($(this));
        });
    }

    /**
    * Initializes bootstrap file input
    */
    var initFileInput = function() {
        // init bootstrap popover
        $('.custom-file-input').on('change',function(){
            var fileName = $(this).val();
            $(this).next('.custom-file-label').addClass("selected").html(fileName);
        });
    }           

    /**
    * Initializes metronic portlet
    */
    var initPortlet = function(el, options) {
        // init portlet tools
        el.mPortlet(options);
    }

    /**
    * Initializes metronic portlets
    */
    var initPortlets = function() {
        // init portlet tools
        $('[data-portlet="true"]').each(function() {
            var el = $(this);

            if ( el.data('portlet-initialized') !== true ) {
                initPortlet(el, {});
                el.data('portlet-initialized', true);
            }
        });
    }

    /**
    * Initializes scrollable contents
    */
    var initScrollables = function() {
        $('[data-scrollable="true"]').each(function(){
            var maxHeight;
            var height;
            var el = $(this);

            if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                if (el.data('mobile-max-height')) {
                    maxHeight = el.data('mobile-max-height');
                } else {
                    maxHeight = el.data('max-height');
                }

                if (el.data('mobile-height')) {
                    height = el.data('mobile-height');
                } else {
                    height = el.data('height');
                }
            } else {
                maxHeight = el.data('max-height');
                height = el.data('max-height');
            }

            if (maxHeight) {
                el.css('max-height', maxHeight);
            }
            if (height) {
                el.css('height', height);
            }

            mApp.initScroller(el, {});
        });
    }

    /**
    * Initializes bootstrap alerts
    */
    var initAlerts = function() {
        // init bootstrap popover
        $('body').on('click', '[data-close=alert]', function() {
            $(this).closest('.alert').hide();
        });
    }

    /**
    * Initializes Metronic custom tabs
    */
    var initCustomTabs = function() {
        // init bootstrap popover
        $('[data-tab-target]').each(function() {
            if ($(this).data('tabs-initialized') == true ) {
                return;
            }

            $(this).click(function(e) {
                e.preventDefault();
                
                var tab = $(this);
                var tabs = tab.closest('[data-tabs="true"]');
                var contents = $( tabs.data('tabs-contents') );
                var content = $( tab.data('tab-target') );

                tabs.find('.m-tabs__item.m-tabs__item--active').removeClass('m-tabs__item--active');
                tab.addClass('m-tabs__item--active');

                contents.find('.m-tabs-content__item.m-tabs-content__item--active').removeClass('m-tabs-content__item--active');
                content.addClass('m-tabs-content__item--active');         
            });

            $(this).data('tabs-initialized', true);
        });
    }

    /**
    * Initializes bootstrap collapse for Metronic's accordion feature
    */
    var initAccordions = function(el) {
       
    }

	var hideTouchWarning = function() {
		jQuery.event.special.touchstart = {
			setup: function(_, ns, handle) {
				if (typeof this === 'function')
					if (ns.includes('noPreventDefault')) {
						this.addEventListener('touchstart', handle, {passive: false});
					} else {
						this.addEventListener('touchstart', handle, {passive: true});
					}
			},
		};
		jQuery.event.special.touchmove = {
			setup: function(_, ns, handle) {
				if (typeof this === 'function')
					if (ns.includes('noPreventDefault')) {
						this.addEventListener('touchmove', handle, {passive: false});
					} else {
						this.addEventListener('touchmove', handle, {passive: true});
					}
			},
		};
		jQuery.event.special.wheel = {
			setup: function(_, ns, handle) {
				if (typeof this === 'function')
					if (ns.includes('noPreventDefault')) {
						this.addEventListener('wheel', handle, {passive: false});
					} else {
						this.addEventListener('wheel', handle, {passive: true});
					}
			},
		};
	};

    return {
        /**
        * Main class initializer
        */
        init: function() {
            mApp.initComponents();
        },

        /**
        * Initializes components
        */
        initComponents: function() {
            hideTouchWarning();
            initScrollables();
            initTooltips();
            initPopovers();
            initAlerts();
            initPortlets();
            initFileInput();
            initAccordions();
            initCustomTabs();
        },


        /**
        * Init custom tabs
        */
        initCustomTabs: function() {
            initCustomTabs();
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // wrJangoer function to scroll(focus) to an element
        initTooltips: function() {
            initTooltips();
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // wrJangoer function to scroll(focus) to an element
        initTooltip: function(el) {
            initTooltip(el);
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // wrJangoer function to scroll(focus) to an element
        initPopovers: function() {
            initPopovers();
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // wrJangoer function to scroll(focus) to an element
        initPopover: function(el) {
            initPopover(el);
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // function to init portlet
        initPortlet: function(el, options) {
            initPortlet(el, options);
        },

        /**
        * 
        * @param {object} el jQuery element object
        */
        // function to init portlets
        initPortlets: function() {
            initPortlets();
        },

        /**
        * Scrolls to an element with animation
        * @param {object} el jQuery element object
        * @param {number} offset Offset to element scroll position
        */
        scrollTo: function(target, offset) {
            el = $(target);

            var pos = (el && el.length > 0) ? el.offset().top : 0;
            pos = pos + (offset ? offset : 0);

            jQuery('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },

        /**
        * Scrolls until element is centered in the viewport 
        * @param {object} el jQuery element object
        */
        // wrJangoer function to scroll(focus) to an element
        scrollToViewport: function(el) {
            var elOffset = $(el).offset().top;
            var elHeight = el.height();
            var windowHeight = mUtil.getViewPort().height;
            var offset = elOffset - ((windowHeight / 2) - (elHeight / 2));

            jQuery('html,body').animate({
                scrollTop: offset
            }, 'slow');
        },

        /**
        * Scrolls to the top of the page
        */
        // function to scroll to the top
        scrollTop: function() {
            mApp.scrollTo();
        },

        /**
        * Initializes scrollable content using mCustomScrollbar plugin
        * @param {object} el jQuery element object
        * @param {object} options mCustomScrollbar plugin options(refer: http://manos.malihu.gr/jquery-custom-content-scroller/)
        */
        initScroller: function(el, options, doNotDestroy) {
            if (mUtil.isMobileDevice()) {
                el.css('overflow', 'auto');
            } else {
                if (doNotDestroy !== true) {
                     mApp.destroyScroller(el); 
                }               
                el.mCustomScrollbar({
                    scrollInertia: 0,
                    autoDraggerLength: true,
                    autoHideScrollbar: true,
                    autoExpandScrollbar: false,
                    alwaysShowScrollbar: 0,
                    axis: el.data('axis') ? el.data('axis') : 'y',
                    mouseWheel: {
                        scrollAmount: 120,
                        preventDefault: true
                    },
                    setHeight: (options.height ? options.height : ''),
                    theme:"minimal-dark"
                });
            }           
        },

        /**
        * Destroys scrollable content's mCustomScrollbar plugin instance
        * @param {object} el jQuery element object
        */
        destroyScroller: function(el) {
            el.mCustomScrollbar("destroy");
            el.removeClass('mCS_destroyed');
        },

        /**
        * Shows bootstrap alert
        * @param {object} options
        * @returns {string} ID attribute of the created alert
        */
        alert: function(options) {
            options = $.extend(true, {
                container: "", // alerts parent container(by default placed after the page breadcrumbs)
                place: "append", // "append" or "prepend" in container 
                type: 'success', // alert's type
                message: "", // alert's message
                close: true, // make alert closable
                reset: true, // close all previouse alerts first
                focus: true, // auto scroll to the alert after shown
                closeInSeconds: 0, // auto close after defined seconds
                icon: "" // put icon before the message
            }, options);

            var id = mUtil.getUniqueID("App_alert");

            var html = '<div id="' + id + '" class="custom-alerts alert alert-' + options.type + ' fade in">' + (options.close ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' : '') + (options.icon !== "" ? '<i class="fa-lg fa fa-' + options.icon + '"></i>  ' : '') + options.message + '</div>';

            if (options.reset) {
                $('.custom-alerts').remove();
            }

            if (!options.container) {
                if ($('.page-fixed-main-content').size() === 1) {
                    $('.page-fixed-main-content').prepend(html);
                } else if (($('body').hasClass("page-container-bg-solid") || $('body').hasClass("page-content-white")) && $('.page-head').size() === 0) {
                    $('.page-title').after(html);
                } else {
                    if ($('.page-bar').size() > 0) {
                        $('.page-bar').after(html);
                    } else {
                        $('.page-breadcrumb, .breadcrumbs').after(html);
                    }
                }
            } else {
                if (options.place == "append") {
                    $(options.container).append(html);
                } else {
                    $(options.container).prepend(html);
                }
            }

            if (options.focus) {
                mApp.scrollTo($('#' + id));
            }

            if (options.closeInSeconds > 0) {
                setTimeout(function() {
                    $('#' + id).remove();
                }, options.closeInSeconds * 1000);
            }

            return id;
        },

        /**
        * Blocks element with loading indiciator using http://malsup.com/jquery/block/
        * @param {object} target jQuery element object
        * @param {object} options 
        */
        block: function(target, options) {
            var el = $(target);

            options = $.extend(true, {
                opacity: 0.03,
                overlayColor: '#000000',
                state: 'brand',
                type: 'loader',
                size: 'lg',
                centerX: true,
                centerY: true,
                message: '',
                shadow: true,
                width: 'auto'
            }, options);

            var skin;
            var state;
            var loading;

            if (options.type == 'spinner') {
                skin = options.skin ? 'm-spinner--skin-' + options.skin : '';
                state = options.state ? 'm-spinner--' + options.state : '';
                loading = '<div class="m-spinner ' + skin + ' ' + state + '"></div';
            } else {
                skin = options.skin ? 'm-loader--skin-' + options.skin : '';
                state = options.state ? 'm-loader--' + options.state : '';
                size = options.size ? 'm-loader--' + options.size : '';
                loading = '<div class="m-loader ' + skin + ' ' + state + ' ' + size + '"></div';
            }

            if (options.message && options.message.length > 0) {
                var classes = 'm-blockui ' + (options.shadow === false ? 'm-blockui-no-shadow' : '');

                html = '<div class="' + classes + '"><span>' + options.message + '</span><span>' + loading + '</span></div>';
                options.width = mUtil.realWidth(html) + 10;
                if (target == 'body') {
                    html = '<div class="' + classes + '" style="margin-left:-'+ (options.width / 2) +'px;"><span>' + options.message + '</span><span>' + loading + '</span></div>';
                }
            } else {
                html = loading;
            }

            var params = {
                message: html,
                centerY: options.centerY,
                centerX: options.centerX,
                css: {
                    top: '30%',
                    left: '50%',
                    border: '0',
                    padding: '0',
                    backgroundColor: 'none',
                    width: options.width
                },
                overlayCSS: {
                    backgroundColor: options.overlayColor,
                    opacity: options.opacity,
                    cursor: 'wait',
                    zIndex: '10'
                },
                onUnblock: function() {
                    if (el) {
                        el.css('position', '');
                        el.css('zoom', '');
                    }                    
                }
            };

            if (target == 'body') {
                params.css.top = '50%';
                $.blockUI(params);
            } else {
                var el = $(target);
                el.block(params);
            }
        },

        /**
        * Un-blocks the blocked element 
        * @param {object} target jQuery element object
        */
        unblock: function(target) {
            if (target && target != 'body') {
                $(target).unblock();
            } else {
                $.unblockUI();
            }
        },

        /**
        * Blocks the page body element with loading indicator
        * @param {object} options 
        */
        blockPage: function(options) {
            return mApp.block('body', options);
        },

        /**
        * Un-blocks the blocked page body element
        */
        unblockPage: function() {
            return mApp.unblock('body');
        },

        /**
        * Enable loader progress for button and other elements
        * @param {object} target jQuery element object
        * @param {object} options
        */
        progress: function(target, options) {
            var skin = (options && options.skin) ? options.skin : 'light';
            var alignment = (options && options.alignment) ? options.alignment : 'right'; 
            var size = (options && options.size) ? 'm-spinner--' + options.size : ''; 
            var classes = 'm-loader ' + 'm-loader--' + skin + ' m-loader--' + alignment + ' m-loader--' + size;

            mApp.unprogress(target);
            
            $(target).addClass(classes);
            $(target).data('progress-classes', classes);
        },

        /**
        * Disable loader progress for button and other elements
        * @param {object} target jQuery element object
        */
        unprogress: function(target) {
            $(target).removeClass($(target).data('progress-classes'));
        }
    };
}();

//== Initialize mApp class on document ready
$(document).ready(function() {
    mApp.init();
});
/**
 * @class mUtil  Metronic base utilize class that privides helper functions
 */

var mUtil = function() {
    var resizeHandlers = [];

    /** @type {object} breakpoints The device width breakpoints **/
    var breakpoints = {        
        sm: 544, // Small screen / phone           
        md: 768, // Medium screen / tablet            
        lg: 992, // Large screen / desktop        
        xl: 1200 // Extra large screen / wide desktop
    };

    /** @type {object} colors State colors **/
    var colors = {
        brand:      '#716aca',
        metal:      '#c4c5d6',
        light:      '#ffffff',
        accent:     '#00c5dc',
        primary:    '#5867dd',
        success:    '#34bfa3',
        info:       '#36a3f7',
        warning:    '#ffb822',
        danger:     '#f4516c'
    };

    /**
    * Handle window resize event with some 
    * delay to attach event handlers upon resize complete 
    */
    var _windowResizeHandler = function() {
        var _runResizeHandlers = function() {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        };

        var timeout = false; // holder for timeout id
        var delay = 250; // delay after event is "complete" to run callback

        window.addEventListener('resize', function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                _runResizeHandlers();
            }, delay); // wait 50ms until window resize finishes.
        });
    };

    return {
        /**
        * Class main initializer.
        * @param {object} options.
        * @returns null
        */
        //main function to initiate the theme
        init: function(options) {
            if (options && options.breakpoints) {
                breakpoints = options.breakpoints;
            }

            if (options && options.colors) {
                colors = options.colors;
            }

            _windowResizeHandler();
        },

        /**
        * Adds window resize event handler.
        * @param {function} callback function.
        */
        addResizeHandler: function(callback) {
            resizeHandlers.push(callback);
        },

        /**
        * Trigger window resize handlers.
        */
        runResizeHandlers: function() {
            _runResizeHandlers();
        },        

        /**
        * Get GET parameter value from URL.
        * @param {string} paramName Parameter name.
        * @returns {string}  
        */
        getURLParam: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }

            return null;
        },

        /**
        * Checks whether current device is mobile touch.
        * @returns {boolean}  
        */
        isMobileDevice: function() {
            return (this.getViewPort().width < this.getBreakpoint('lg') ? true : false);
        },

        /**
        * Checks whether current device is desktop.
        * @returns {boolean}  
        */
        isDesktopDevice: function() {
            return mUtil.isMobileDevice() ? false : true;
        },

        /**
        * Gets browser window viewport size. Ref: http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
        * @returns {object}  
        */
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        /**
        * Checks whether given device mode is currently activated.
        * @param {string} mode Responsive mode name(e.g: desktop, desktop-and-tablet, tablet, tablet-and-mobile, mobile)
        * @returns {boolean}  
        */
        isInResponsiveRange: function(mode) {
            var breakpoint = this.getViewPort().width;

            if (mode == 'general') {
                return true;
            } else if (mode == 'desktop' && breakpoint >= (this.getBreakpoint('lg') + 1)) {
                return true;
            } else if (mode == 'tablet' && (breakpoint >= (this.getBreakpoint('md') + 1) && breakpoint < this.getBreakpoint('lg'))) {
                return true;
            } else if (mode == 'mobile' && breakpoint <= this.getBreakpoint('md')) {
                return true;
            } else if (mode == 'desktop-and-tablet' && breakpoint >= (this.getBreakpoint('md') + 1)) {
                return true;
            } else if (mode == 'tablet-and-mobile' && breakpoint <= this.getBreakpoint('lg')) {
                return true;
            } else if (mode == 'minimal-desktop-and-below' && breakpoint <= this.getBreakpoint('xl')) {
                return true;
            }

            return false;
        },

        /**
        * Generates unique ID for give prefix.
        * @param {string} prefix Prefix for generated ID
        * @returns {boolean}  
        */
        getUniqueID: function(prefix) {
            return prefix + Math.floor(Math.random() * (new Date()).getTime());
        },

        /**
        * Gets window width for give breakpoint mode.
        * @param {string} mode Responsive mode name(e.g: xl, lg, md, sm)
        * @returns {number}  
        */
        getBreakpoint: function(mode) {
            if ($.inArray(mode, breakpoints)) {
                return breakpoints[mode];
            }
        },

        /**
        * Checks whether object has property matchs given key path.
        * @param {object} obj Object contains values paired with given key path
        * @param {string} keys Keys path seperated with dots
        * @returns {object}  
        */
        isset: function(obj, keys) {
            var stone;

            keys = keys || '';

            if (keys.indexOf('[') !== -1) {
                throw new Error('Unsupported object path notation.');
            }

            keys = keys.split('.');

            do {
                if (obj === undefined) {
                    return false;
                }

                stone = keys.shift();

                if (!obj.hasOwnProperty(stone)) {
                    return false;
                }

                obj = obj[stone];

            } while (keys.length);

            return true;
        },

        /**
        * Gets highest z-index of the given element parents
        * @param {object} el jQuery element object
        * @returns {number}  
        */
        getHighestZindex: function(el) {
            var elem = $(el),
                position, value;

            while (elem.length && elem[0] !== document) {
                // Ignore z-index if position is set to a value where z-index is ignored by the browser
                // This makes behavior of this function consistent across browsers
                // WebKit always returns auto if the element is positioned
                position = elem.css("position");

                if (position === "absolute" || position === "relative" || position === "fixed") {
                    // IE returns 0 when zIndex is not specified
                    // other browsers return a string
                    // we ignore the case of nested elements with an explicit value of 0
                    // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt(elem.css("zIndex"), 10);
                    if (!isNaN(value) && value !== 0) {
                        return value;
                    }
                }
                elem = elem.parent();
            }
        },

        /**
        * Checks whether the element has given classes
        * @param {object} el jQuery element object
        * @param {string} Classes string
        * @returns {boolean}  
        */
        hasClasses: function(el, classes) {
            var classesArr = classes.split(" ");

            for ( var i = 0; i < classesArr.length; i++ ) {
                if ( el.hasClass( classesArr[i] ) == false ) {
                    return false;
                }
            }                

            return true;
        },

        /**
        * Gets element actual/real width
        * @param {object} el jQuery element object
        * @returns {number}  
        */
        realWidth: function(el){
            var clone = $(el).clone();
            clone.css("visibility","hidden");
            clone.css('overflow', 'hidden');
            clone.css("height","0");
            $('body').append(clone);
            var width = clone.outerWidth();
            clone.remove();

            return width;
        },

        /**
        * Checks whether the element has any parent with fixed position
        * @param {object} el jQuery element object
        * @returns {boolean}  
        */
        hasFixedPositionedParent: function(el) {
            var result = false;
            
            el.parents().each(function () {
                if ($(this).css('position') == 'fixed') {
                    result = true;
                    return;
                }
            });

            return result;
        },

        /**
        * Simulates delay
        */
        sleep: function(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > milliseconds){
                    break;
                }
            }
        },

        /**
        * Gets randomly generated integer value within given min and max range
        * @param {number} min Range start value
        * @param {number} min Range end value
        * @returns {number}  
        */
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        /**
        * Gets state color's hex code by color name
        * @param {string} name Color name
        * @returns {string}  
        */
        getColor: function(name) {
            return colors[name];
        },

        /**
        * Checks whether Angular library is included
        * @returns {boolean}  
        */
        isAngularVersion: function() {
            return window.Zone !== undefined  ? true : false;
        }
    }
}();

//== Initialize mUtil class on document ready
$(document).ready(function() {
    mUtil.init();
});
(function($) {
// jquery extension to add animation class into element
jQuery.fn.extend({
    animateClass: function(animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        jQuery(this).addClass('animated ' + animationName).one(animationEnd, function() {
            jQuery(this).removeClass('animated ' + animationName);
        });

        if (callback) {
            jQuery(this).one(animationEnd, callback);
        }
    },
    animateDelay: function(value) {
        var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
        for (var i = 0; i < vendors.length; i++) {
            jQuery(this).css(vendors[i] + 'animation-delay', value);
        }
    },
    animateDuration: function(value) {
        var vendors = ['webkit-', 'moz-', 'ms-', 'o-', ''];
        for (var i = 0; i < vendors.length; i++) {
            jQuery(this).css(vendors[i] + 'animation-duration', value);
        }
    }
});
(function ($) {
    // Plugin function
    $.fn.mDropdown = function (options) {
        // Plugin scope variable
        var dropdown = {};
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('dropdown')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    Plugin.setup();
                    
                    // assign instance to the element                    
                    element.data('dropdown', dropdown);
                } else {
                    // get instance from the element
                    dropdown = element.data('dropdown');
                }               

                return dropdown;
            },

            /**
             * Initialize
             */
            init: function(options) {
                dropdown.events = [];
                dropdown.eventOne = false;
                dropdown.close = element.find('.m-dropdown__close');
                dropdown.toggle = element.find('.m-dropdown__toggle');
                dropdown.arrow = element.find('.m-dropdown__arrow');
                dropdown.wrapper = element.find('.m-dropdown__wrapper');
                dropdown.scrollable = element.find('.m-dropdown__scrollable');
                dropdown.defaultDropPos = element.hasClass('m-dropdown--up') ? 'up' : 'down';
                dropdown.currentDropPos = dropdown.defaultDropPos;

                dropdown.options = $.extend(true, {}, $.fn.mDropdown.defaults, options);
                if (element.data('drop-auto') === true) {
                    dropdown.options.dropAuto = true;
                } else if (element.data('drop-auto') === false) {
                    dropdown.options.dropAuto = false;
                }               

                if (dropdown.scrollable.length > 0) {
                    if (dropdown.scrollable.data('min-height')) {
                        dropdown.options.minHeight = dropdown.scrollable.data('min-height');
                    }

                    if (dropdown.scrollable.data('max-height')) {
                        dropdown.options.maxHeight = dropdown.scrollable.data('max-height');
                    }
                }                
            },

            /**
             * Build DOM and init event handlers
             */
            build: function () {
                if (mUtil.isMobileDevice()) {
                    if (element.data('dropdown-toggle') == 'hover' || element.data('dropdown-toggle') == 'click') { 
                        dropdown.options.toggle = 'click';
                    } else {
                        dropdown.options.toggle = 'click'; 
                        dropdown.toggle.click(Plugin.toggle); 
                    }
                } else {
                    if (element.data('dropdown-toggle') == 'hover') {     
                        dropdown.options.toggle = 'hover';              
                        element.mouseleave(Plugin.hide);
                    } else if(element.data('dropdown-toggle') == 'click') {
                        dropdown.options.toggle = 'click';                  
                    } else {
                        if (dropdown.options.toggle == 'hover') {
                            element.mouseenter(Plugin.show);
                            element.mouseleave(Plugin.hide);
                        } else {
                            dropdown.toggle.click(Plugin.toggle);      
                        }
                    }
                }                

                // handle dropdown close icon
                if (dropdown.close.length) {
                    dropdown.close.on('click', Plugin.hide);
                }

                // disable dropdown close
                Plugin.disableClose();
            }, 

            /**
             * Setup dropdown
             */
            setup: function () {
                if (dropdown.options.placement) {
                    element.addClass('m-dropdown--' + dropdown.options.placement);
                }

                if (dropdown.options.align) {
                    element.addClass('m-dropdown--align-' + dropdown.options.align);
                } 

                if (dropdown.options.width) {
                    dropdown.wrapper.css('width', dropdown.options.width);
                }

                if (element.data('dropdown-persistent')) {
                    dropdown.options.persistent = true;
                }
        
                // handle height
                if (dropdown.options.minHeight) {
                    dropdown.scrollable.css('min-height', dropdown.options.minHeight);                    
                } 

                if (dropdown.options.maxHeight) {
                    dropdown.scrollable.css('max-height', dropdown.options.maxHeight);     
                    dropdown.scrollable.css('overflow-y', 'auto'); 

                    if (mUtil.isDesktopDevice()) {
                        mApp.initScroller(dropdown.scrollable, {});                
                    }   
                }      

                // set zindex
                Plugin.setZindex();
            },

            /**
             * sync 
             */
            sync: function () {
                $(element).data('dropdown', dropdown);
            }, 

            /**
             * Sync dropdown object with jQuery element
             */
            disableClose: function () {
                element.on('click', '.m-dropdown--disable-close, .mCSB_1_scrollbar', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            },

            /**
             * Toggle dropdown
             */
            toggle: function () {
                if (dropdown.open) {
                    return Plugin.hide();
                } else {
                    return Plugin.show();
                }
            },

            /**
             * Set content
             */
            setContent: function (content) {
                element.find('.m-dropdown__content').html(content);
                
                return dropdown;
            },

            /**
             * Show dropdown
             */
            show: function() {
                if (dropdown.options.toggle == 'hover' && element.data('hover')) {
                    Plugin.clearHovered(); 
                    return dropdown;
                }

                if (dropdown.open) {
                    return dropdown;
                }

                if (dropdown.arrow.length > 0) {
                    Plugin.adjustArrowPos();
                }

                Plugin.eventTrigger('beforeShow'); 

                Plugin.hideOpened();

                element.addClass('m-dropdown--open');

                if (mUtil.isMobileDevice() && dropdown.options.mobileOverlay) {
                    var zIndex = dropdown.wrapper.css('zIndex') - 1;
                    var dropdownoff = $('<div class="m-dropdown__dropoff"></div>');

                    dropdownoff.css('zIndex', zIndex);
                    dropdownoff.data('dropdown', element);
                    element.data('dropoff', dropdownoff);
                    element.after(dropdownoff);
                    dropdownoff.click(function(e) {
                        Plugin.hide();
                        $(this).remove();                    
                        e.preventDefault();
                    });
                } 

                element.focus();
                element.attr('aria-expanded', 'true');
                dropdown.open = true;

                Plugin.handleDropPosition();          

                Plugin.eventTrigger('afterShow');

                return dropdown;
            },

            /**
             * Clear dropdown hover
             */
            clearHovered: function () {
                element.removeData('hover');
                var timeout = element.data('timeout');
                element.removeData('timeout');
                clearTimeout(timeout);
            },

            /**
             * Hide hovered dropdown
             */
            hideHovered: function(force) {
                if (force) {
                    if (Plugin.eventTrigger('beforeHide') === false) {
                        // cancel hide
                        return;
                    }  

                    Plugin.clearHovered();        
                    element.removeClass('m-dropdown--open');
                    dropdown.open = false;
                    Plugin.eventTrigger('afterHide');
                } else {
                    if (Plugin.eventTrigger('beforeHide') === false) {
                        // cancel hide
                        return;
                    }
                    var timeout = setTimeout(function() {
                        if (element.data('hover')) {
                            Plugin.clearHovered();        
                            element.removeClass('m-dropdown--open');
                            dropdown.open = false;
                            Plugin.eventTrigger('afterHide');
                        }
                    }, dropdown.options.hoverTimeout);

                    element.data('hover', true);
                    element.data('timeout', timeout); 
                }     
            },

            /**
             * Hide clicked dropdown
             */
            hideClicked: function() {    
                if (Plugin.eventTrigger('beforeHide') === false) {
                    // cancel hide
                    return;
                }             
                element.removeClass('m-dropdown--open');
                if (element.data('dropoff')) {
                    element.data('dropoff').remove();
                }
                dropdown.open = false;
                Plugin.eventTrigger('afterHide');
            },

            /**
             * Hide dropdown
             */
            hide: function(force) {
                if (dropdown.open === false) {
                    return dropdown;
                }

                if (dropdown.options.toggle == 'hover') {
                    Plugin.hideHovered(force);
                } else {
                    Plugin.hideClicked();
                }

                if (dropdown.defaultDropPos == 'down' && dropdown.currentDropPos == 'up') {
                    element.removeClass('m-dropdown--up');
                    dropdown.arrow.prependTo(dropdown.wrapper);
                    dropdown.currentDropPos = 'down';
                }

                return dropdown;                
            },

            /**
             * Hide opened dropdowns
             */
            hideOpened: function() {
                $('.m-dropdown.m-dropdown--open').each(function() {
                    $(this).mDropdown().hide(true);
                });
            },

            /**
             * Adjust dropdown arrow positions
             */
            adjustArrowPos: function() {
                var width = element.outerWidth();
                var alignment = dropdown.arrow.hasClass('m-dropdown__arrow--right') ? 'right' : 'left';
                var pos = 0;

                if (dropdown.arrow.length > 0) {
                    if (mUtil.isInResponsiveRange('mobile') && element.hasClass('m-dropdown--mobile-full-width')) {
                        pos = element.offset().left + (width / 2) - Math.abs(dropdown.arrow.width() / 2) - parseInt(dropdown.wrapper.css('left'));
                        dropdown.arrow.css('right', 'auto');    
                        dropdown.arrow.css('left', pos);    
                        dropdown.arrow.css('margin-left', 'auto');
                        dropdown.arrow.css('margin-right', 'auto');
                    } else if (dropdown.arrow.hasClass('m-dropdown__arrow--adjust')) {
                        pos = width / 2 - Math.abs(dropdown.arrow.width() / 2);
                        if (element.hasClass('m-dropdown--align-push')) {
                            pos = pos + 20;
                        }
                        if (alignment == 'right') { 
                            dropdown.arrow.css('left', 'auto');  
                            dropdown.arrow.css('right', pos);
                        } else {                            
                            dropdown.arrow.css('right', 'auto');  
                            dropdown.arrow.css('left', pos);
                        }  
                    }                    
                }
            },

            /**
             * Change dropdown drop position
             */
            handleDropPosition: function() {
                return;
                
                if (dropdown.options.dropAuto == true) {
                    if (Plugin.isInVerticalViewport() === false) {
                        if (dropdown.currentDropPos == 'up') {
                            element.removeClass('m-dropdown--up');
                            dropdown.arrow.prependTo(dropdown.wrapper);
                            dropdown.currentDropPos = 'down';
                        } else if (dropdown.currentDropPos == 'down') {
                            element.addClass('m-dropdown--up');
                            dropdown.arrow.appendTo(dropdown.wrapper);
                            dropdown.currentDropPos = 'up'; 
                        }
                    }
                }
            },

            /**
             * Get zindex
             */
            setZindex: function() {
                var oldZindex = dropdown.wrapper.css('z-index');
                var newZindex = mUtil.getHighestZindex(element);
                if (newZindex > oldZindex) {
                    dropdown.wrapper.css('z-index', zindex);
                }
            },

            /**
             * Check persistent
             */
            isPersistent: function () {
                return dropdown.options.persistent;
            },

            /**
             * Check persistent
             */
            isShown: function () {
                return dropdown.open;
            },

            /**
             * Check if dropdown is in viewport
             */
            isInVerticalViewport: function() {
                var el = dropdown.wrapper;
                var offset = el.offset();
                var height = el.outerHeight();
                var width = el.width();
                var scrollable = el.find('[data-scrollable]');

                if (scrollable.length) {
                    if (scrollable.data('max-height')) {
                        height += parseInt(scrollable.data('max-height'));
                    } else if(scrollable.data('height')) {
                        height += parseInt(scrollable.data('height'));
                    }
                }

                return (offset.top + height < $(window).scrollTop() + $(window).height());
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < dropdown.events.length; i++) {
                    var event = dropdown.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                dropdown.events[i].fired = true;
                                return event.handler.call(this, dropdown);
                            }
                        } else {
                            return  event.handler.call(this, dropdown);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                dropdown.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();

                return dropdown;
            }
        };

        // Run plugin
        Plugin.run.apply(this, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////
       
        /**
         * Show dropdown
         * @returns {mDropdown}
         */
        dropdown.show = function () {
            return Plugin.show();
        };

        /**
         * Hide dropdown
         * @returns {mDropdown}
         */
        dropdown.hide = function () {
            return Plugin.hide();
        };

        /**
         * Toggle dropdown
         * @returns {mDropdown}
         */
        dropdown.toggle = function () {
            return Plugin.toggle();
        };

        /**
         * Toggle dropdown
         * @returns {mDropdown}
         */
        dropdown.isPersistent = function () {
            return Plugin.isPersistent();
        };

        /**
         * Check shown state
         * @returns {mDropdown}
         */
        dropdown.isShown = function () {
            return Plugin.isShown();
        };

        /**
         * Check shown state
         * @returns {mDropdown}
         */
        dropdown.fixDropPosition = function () {
            return Plugin.handleDropPosition();
        };

        /**
         * Set dropdown content
         * @returns {mDropdown}
         */
        dropdown.setContent = function (content) {
            return Plugin.setContent(content);
        };

        /**
         * Set dropdown content
         * @returns {mDropdown}
         */
        dropdown.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set dropdown content
         * @returns {mDropdown}
         */
        dropdown.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };        

        return dropdown;
    };

    // default options
    $.fn.mDropdown.defaults = {
        toggle: 'click',
        hoverTimeout: 300,
        skin: 'default',
        height: 'auto',
        dropAuto: true,
        maxHeight: false,
        minHeight: false,
        persistent: false,
        mobileOverlay: true
    };

    // global init
    if (mUtil.isMobileDevice()) {
        $(document).on('click', '[data-dropdown-toggle="click"] .m-dropdown__toggle, [data-dropdown-toggle="hover"] .m-dropdown__toggle', function(e) { 
            e.preventDefault(); 
            $(this).parent('.m-dropdown').mDropdown().toggle(); 
        });
    } else {
        $(document).on('click', '[data-dropdown-toggle="click"] .m-dropdown__toggle', function(e) { 
            e.preventDefault();
            $(this).parent('.m-dropdown').mDropdown().toggle();   
        });
        $(document).on('mouseenter', '[data-dropdown-toggle="hover"]', function(e) { 
             e.preventDefault();
            $(this).mDropdown().toggle();
        });
    }

    // handle global document click
    $(document).on('click', function(e) {
        $('.m-dropdown.m-dropdown--open').each(function() {
            if (!$(this).data('dropdown')) {
                return;
            }        
            
            var target = $(e.target);
            var dropdown = $(this).mDropdown();
            var toggle = $(this).find('.m-dropdown__toggle');

            if (toggle.length > 0 && target.is(toggle) !== true && toggle.find(target).length === 0 && target.find(toggle).length === 0 && dropdown.isPersistent() == false) {
                dropdown.hide();     
            } else if ($(this).find(target).length === 0) {
                dropdown.hide();       
            }
        });
    });
}(jQuery));
(function ($) {
    // Plugin function
    $.fn.mExample = function (options) {
        // Plugin scope variable
        var example = {};
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('example')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    Plugin.setup();
                    
                    // assign instance to the element                    
                    element.data('example', example);
                } else {
                    // get instance from the element
                    example = element.data('example');
                }               

                return example;
            },

            /**
             * Initialize
             */
            init: function(options) {
                example.events = [];
                example.scrollable = element.find('.m-example__scrollable');
                example.options = $.extend(true, {}, $.fn.mExample.defaults, options);
                if (example.scrollable.length > 0) {
                    if (example.scrollable.data('data-min-height')) {
                        example.options.minHeight = example.scrollable.data('data-min-height');
                    }

                    if (example.scrollable.data('data-max-height')) {
                        example.options.maxHeight = example.scrollable.data('data-max-height');
                    }
                }                
            },

            /**
             * Build DOM and init event handlers
             */
            build: function () {
                if (mUtil.isMobileDevice()) {
                    
                } else {
                    
                }                
            }, 

            /**
             * Setup example
             */
            setup: function () {
               
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < example.events.length; i++) {
                    var event = example.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                example.events[i].fired = true;
                                return event.handler.call(this, example);
                            }
                        } else {
                            return  event.handler.call(this, example);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                example.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        // Run plugin
        Plugin.run.apply(this, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////
       

        /**
         * Set example content
         * @returns {mExample}
         */
        example.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set example content
         * @returns {mExample}
         */
        example.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };        

        return example;
    };

    // default options
    $.fn.mExample.defaults = {
       
    };
}(jQuery));
(function($) {

    // Plugin function
    $.fn.mHeader = function(options) {
        // Plugin scope variable
        var header = this;
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run plugin
             * @returns {mHeader}
             */
            run: function(options) { 
                if (element.data('header')) {
                    header = element.data('header');                
                } else {
                    // reset header
                    Plugin.init(options);

                    // reset header
                    Plugin.reset();

                    // build header
                    Plugin.build();

                    element.data('header', header);
                } 

                return header;
            },

            /**
             * Handles subheader click toggle
             * @returns {mHeader}
             */
            init: function(options) {                
                header.options = $.extend(true, {}, $.fn.mHeader.defaults, options);
            },

            /**
             * Reset header
             * @returns {mHeader}
             */
            build: function() {
                Plugin.toggle();                   
            },

            toggle: function() {
                var lastScrollTop = 0;

                if (header.options.minimize.mobile === false && header.options.minimize.desktop === false) {
                    return;
                }          

                $(window).scroll(function() {
                    var offset = 0;

                    if (mUtil.isInResponsiveRange('desktop')) {
                        offset = header.options.offset.desktop;
                        on = header.options.minimize.desktop.on;
                        off = header.options.minimize.desktop.off;
                    } else if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                        offset = header.options.offset.mobile;
                        on = header.options.minimize.mobile.on;
                        off = header.options.minimize.mobile.off;
                    }

                    var st = $(this).scrollTop();

                    if (
                        (mUtil.isInResponsiveRange('tablet-and-mobile') && header.options.classic && header.options.classic.mobile) ||
                        (mUtil.isInResponsiveRange('desktop') && header.options.classic && header.options.classic.desktop)
                        
                        ) {
                        if (st > offset){ // down scroll mode
                            $("body").addClass(on);
                            $("body").removeClass(off);
                        } else { // back scroll mode
                            $("body").addClass(off);
                            $("body").removeClass(on);
                        }
                    } else {
                        if (st > offset && lastScrollTop < st){ // down scroll mode
                            $("body").addClass(on);
                            $("body").removeClass(off);
                        } else { // back scroll mode
                            $("body").addClass(off);
                            $("body").removeClass(on);
                        }
                        
                        lastScrollTop = st;
                    }
                });
            },

            /**
             * Reset menu
             * @returns {mMenu}
             */
            reset: function() {
            }
        };

        // Run plugin
        Plugin.run.apply(header, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////

        /**
         * Disable header for given time
         * @returns {jQuery}
         */
        header.publicMethod = function() {
        	//return Plugin.publicMethod();
        };

        // Return plugin instance
        return header;
    };

    // Plugin default options
    $.fn.mHeader.defaults = {
        classic: false,
        offset: {
            mobile: 150,
            desktop: 200        
        },
        minimize: {
            mobile: false,
            desktop: false
        }
    }; 
}(jQuery));
(function($) {

    // Plugin function
    $.fn.mMenu = function(options) {
        // Plugin scope variable
        var menu = this;
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run plugin
             * @returns {mMenu}
             */
            run: function(options, reinit) { 
                if (element.data('menu') && reinit !== true) {
                    menu = element.data('menu');                
                } else {
                    // reset menu
                    Plugin.init(options);
                    
                    // reset menu
                    Plugin.reset();

                    // build menu
                    Plugin.build();

                    element.data('menu', menu);
                } 

                return menu;
            },

            /**
             * Handles submenu click toggle
             * @returns {mMenu}
             */
            init: function(options) { 
                menu.events = [];

                // merge default and user defined options
                menu.options = $.extend(true, {}, $.fn.mMenu.defaults, options);

                // pause menu
                menu.pauseDropdownHoverTime = 0;
            },

            /**
             * Reset menu
             * @returns {mMenu}
             */
            build: function() {
                element.on('click', '.m-menu__toggle', Plugin.handleSubmenuAccordion);                

                // dropdown mode(hoverable)
                if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) {   
                	// dropdown submenu - hover toggle
	                element.on({mouseenter: Plugin.handleSubmenuDrodownHoverEnter, mouseleave: Plugin.handleSubmenuDrodownHoverExit}, '[data-menu-submenu-toggle="hover"]');

	                // dropdown submenu - click toggle
	                element.on('click', '[data-menu-submenu-toggle="click"] > .m-menu__toggle, [data-menu-submenu-toggle="click"] > .m-menu__link .m-menu__toggle', Plugin.handleSubmenuDropdownClick);
                    element.on('click', '[data-menu-submenu-toggle="tab"] > .m-menu__toggle, [data-menu-submenu-toggle="tab"] > .m-menu__link .m-menu__toggle', Plugin.handleSubmenuDropdownTabClick);
                }

                element.find('.m-menu__item:not(.m-menu__item--submenu) > .m-menu__link:not(.m-menu__toggle):not(.m-menu__link--toggle-skip)').click(Plugin.handleLinkClick);             
            },

            /**
             * Reset menu
             * @returns {mMenu}
             */
            reset: function() {
            	// remove accordion handler
            	element.off('click', '.m-menu__toggle', Plugin.handleSubmenuAccordion);

            	// remove dropdown handlers
            	element.off({mouseenter: Plugin.handleSubmenuDrodownHoverEnter, mouseleave: Plugin.handleSubmenuDrodownHoverExit}, '[data-menu-submenu-toggle="hover"]');

                // dropdown submenu - click toggle
                element.off('click', '[data-menu-submenu-toggle="click"] > .m-menu__toggle, [data-menu-submenu-toggle="click"] > .m-menu__link .m-menu__toggle', Plugin.handleSubmenuDropdownClick);
                element.off('click', '[data-menu-submenu-toggle="tab"] > .m-menu__toggle, [data-menu-submenu-toggle="tab"] > .m-menu__link .m-menu__toggle', Plugin.handleSubmenuDropdownTabClick);

                // reset mobile menu attributes
                menu.find('.m-menu__submenu, .m-menu__inner').css('display', '');
                menu.find('.m-menu__item--hover:not(.m-menu__item--tabs)').removeClass('m-menu__item--hover');
                menu.find('.m-menu__item--open:not(.m-menu__item--expanded)').removeClass('m-menu__item--open');
            },

            /**
            * Get submenu mode for current breakpoint and menu state
            * @returns {mMenu}
            */
            getSubmenuMode: function() {                
                if (mUtil.isInResponsiveRange('desktop')) {
                    if (mUtil.isset(menu.options.submenu, 'desktop.state.body')) {
                        if ($('body').hasClass(menu.options.submenu.desktop.state.body)) {
                            return menu.options.submenu.desktop.state.mode;
                        } else {
                            return menu.options.submenu.desktop.default;
                        }
                    } else if (mUtil.isset(menu.options.submenu, 'desktop') ){
                        return menu.options.submenu.desktop;
                    }
                } else if (mUtil.isInResponsiveRange('tablet') && mUtil.isset(menu.options.submenu, 'tablet')) {
                    return menu.options.submenu.tablet;
                } else if (mUtil.isInResponsiveRange('mobile') && mUtil.isset(menu.options.submenu, 'mobile')) {
                    return menu.options.submenu.mobile;
                } else {
                    return false;
                }
            },

            /**
            * Get submenu mode for current breakpoint and menu state
            * @returns {mMenu}
            */
            isConditionalSubmenuDropdown: function() {
                if (mUtil.isInResponsiveRange('desktop') && mUtil.isset(menu.options.submenu, 'desktop.state.body')) {
                    return true;
                } else {
                    return false;    
                }                
            },

            /**
             * Handles menu link click
             * @returns {mMenu}
             */
            handleLinkClick: function(e) {    
                if (Plugin.eventTrigger('linkClick', $(this)) === false) {
                    e.preventDefault();
                };

                if (Plugin.getSubmenuMode() === 'dropdown' || Plugin.isConditionalSubmenuDropdown()) { 
                    Plugin.handleSubmenuDropdownClose(e, $(this));
                }
            },

            /**
             * Handles submenu hover toggle
             * @returns {mMenu}
             */
            handleSubmenuDrodownHoverEnter: function(e) {
                if (Plugin.getSubmenuMode() === 'accordion') {
                    return;
                }

                if (menu.resumeDropdownHover() === false) {
                    return;
                }               

                var item = $(this);

                Plugin.showSubmenuDropdown(item);

                if (item.data('hover') == true) {
                    Plugin.hideSubmenuDropdown(item, false);
                }
            },

            /**
             * Handles submenu hover toggle
             * @returns {mMenu}
             */
            handleSubmenuDrodownHoverExit: function(e) {
                if (menu.resumeDropdownHover() === false) {
                    return;
                }

                if (Plugin.getSubmenuMode() === 'accordion') {
                    return;
                }

                var item = $(this);
                var time = menu.options.dropdown.timeout;

                var timeout = setTimeout(function() {
                    if (item.data('hover') == true) {
                        Plugin.hideSubmenuDropdown(item, true);
                    }
                }, time);

                item.data('hover', true);
                item.data('timeout', timeout);
            },

            /**
             * Handles submenu click toggle
             * @returns {mMenu}
             */
            handleSubmenuDropdownClick: function(e) {
                if (Plugin.getSubmenuMode() === 'accordion') {
                    return;
                }

                var item = $(this).closest('.m-menu__item');

                if (item.data('menu-submenu-mode') == 'accordion') {
                    return;   
                }

                if (item.hasClass('m-menu__item--hover') == false) {
                    item.addClass('m-menu__item--open-dropdown');
                    Plugin.showSubmenuDropdown(item);
                } else {
                    item.removeClass('m-menu__item--open-dropdown');
                    Plugin.hideSubmenuDropdown(item, true);
                }

                e.preventDefault();
            },

            /**
             * Handles tab click toggle
             * @returns {mMenu}
             */
            handleSubmenuDropdownTabClick: function(e) {
                if (Plugin.getSubmenuMode() === 'accordion') {
                    return;
                }

                var item = $(this).closest('.m-menu__item');

                if (item.data('menu-submenu-mode') == 'accordion') {
                    return;   
                }

                if (item.hasClass('m-menu__item--hover') == false) {
                    item.addClass('m-menu__item--open-dropdown');
                    Plugin.showSubmenuDropdown(item);
                } 

                e.preventDefault();
            },

            /**
             * Handles submenu dropdown close on link click
             * @returns {mMenu}
             */
            handleSubmenuDropdownClose: function(e, el) {
                // exit if its not submenu dropdown mode
                if (Plugin.getSubmenuMode() === 'accordion') {
                    return;
                }

                var shown = element.find('.m-menu__item.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)');

                // check if currently clicked link's parent item ha
                if (shown.length > 0 && el.hasClass('m-menu__toggle') === false && el.find('.m-menu__toggle').length === 0) {
                    // close opened dropdown menus
                    shown.each(function() {
                        Plugin.hideSubmenuDropdown($(this), true);    
                    });                     
                }
            },

            /**
             * helper functions
             * @returns {mMenu}
             */
            handleSubmenuAccordion: function(e, el) {
                var item = el ? $(el) : $(this);

                if (Plugin.getSubmenuMode() === 'dropdown' && item.closest('.m-menu__item').data('menu-submenu-mode') != 'accordion') {
                    e.preventDefault();
                    return;
                }

                var li = item.closest('li');
                var submenu = li.children('.m-menu__submenu, .m-menu__inner');

                if (item.closest('.m-menu__item').hasClass('m-menu__item--open-always')) {
                    return;
                }

                if (submenu.length > 0) {
                    e.preventDefault();
                    var speed = menu.options.accordion.slideSpeed;
                    var hasClosables = false;
                    
                    if (li.hasClass('m-menu__item--open') === false) {
                        // hide other accordions
                        if (menu.options.accordion.expandAll === false) {
                            var closables = item.closest('.m-menu__nav, .m-menu__subnav').find('> .m-menu__item.m-menu__item--open.m-menu__item--submenu:not(.m-menu__item--expanded):not(.m-menu__item--open-always)');
                            closables.each(function() {
                                $(this).children('.m-menu__submenu').slideUp(speed, function() {
                                    Plugin.scrollToItem(item);
                                });                                
                                $(this).removeClass('m-menu__item--open');
                            });

                            if (closables.length > 0) {
                                hasClosables = true;
                            }
                        }                         

                        if (hasClosables) {
                            submenu.slideDown(speed, function() {
                                Plugin.scrollToItem(item);
                            }); 
                            li.addClass('m-menu__item--open');
                        } else {
                            submenu.slideDown(speed, function() {
                                Plugin.scrollToItem(item);
                            });
                            li.addClass('m-menu__item--open');
                        }                        
                    } else {  
                        submenu.slideUp(speed, function() {
                             Plugin.scrollToItem(item);
                        });                        
                        li.removeClass('m-menu__item--open');                  
                    }
                }
            },     

            /**
             * scroll to item function
             * @returns {mMenu}
             */
            scrollToItem: function(item) {
                // handle auto scroll for accordion submenus
                if (mUtil.isInResponsiveRange('desktop') && menu.options.accordion.autoScroll && !element.data('menu-scrollable')) {                        
                    mApp.scrollToViewport(item);
                }
            },

            /**
             * helper functions
             * @returns {mMenu}
             */
            hideSubmenuDropdown: function(item, classAlso) {
                // remove submenu activation class
                if (classAlso) {
                    item.removeClass('m-menu__item--hover');
                    item.removeClass('m-menu__item--active-tab');
                }
                // clear timeout
                item.removeData('hover');
                if (item.data('menu-dropdown-toggle-class')) {
                    $('body').removeClass(item.data('menu-dropdown-toggle-class'));
                }
                var timeout = item.data('timeout');
                item.removeData('timeout');
                clearTimeout(timeout);
            },

            /**
             * helper functions
             * @returns {mMenu}
             */
            showSubmenuDropdown: function(item) {
                // close active submenus
                element.find('.m-menu__item--submenu.m-menu__item--hover, .m-menu__item--submenu.m-menu__item--active-tab').each(function() {
                    var el = $(this);
                    if (item.is(el) || el.find(item).length > 0 || item.find(el).length > 0) {
                        return;
                    } else {
                        Plugin.hideSubmenuDropdown(el, true); 
                    }
                });

                // adjust submenu position
                Plugin.adjustSubmenuDropdownArrowPos(item);
                
                // add submenu activation class
                item.addClass('m-menu__item--hover');

                if (item.data('menu-dropdown-toggle-class')) {
                    $('body').addClass(item.data('menu-dropdown-toggle-class'));
                } 

                // handle auto scroll for accordion submenus
                if (Plugin.getSubmenuMode() === 'accordion' && menu.options.accordion.autoScroll) {
                    mApp.scrollTo(item.children('.m-menu__item--submenu'));
                }              
            },                

            /**
             * Handles submenu click toggle
             * @returns {mMenu}
             */
            resize: function(e) {
                if (Plugin.getSubmenuMode() !== 'dropdown') {
                    return;
                }

                var resize = element.find('> .m-menu__nav > .m-menu__item--resize');
                var submenu = resize.find('> .m-menu__submenu');
                var breakpoint;
                var currentWidth = mUtil.getViewPort().width;
                var itemsNumber = element.find('> .m-menu__nav > .m-menu__item').length - 1;
                var check;

                if (
                    Plugin.getSubmenuMode() == 'dropdown' && 
                    (
                        (mUtil.isInResponsiveRange('desktop') && mUtil.isset(menu.options, 'resize.desktop') && (check = menu.options.resize.desktop) && currentWidth <= (breakpoint = resize.data('menu-resize-desktop-breakpoint'))) ||
                        (mUtil.isInResponsiveRange('tablet') && mUtil.isset(menu.options, 'resize.tablet') && (check = menu.options.resize.tablet) && currentWidth <= (breakpoint = resize.data('menu-resize-tablet-breakpoint'))) ||
                        (mUtil.isInResponsiveRange('mobile') && mUtil.isset(menu.options, 'resize.mobile') && (check = menu.options.resize.mobile) && currentWidth <= (breakpoint = resize.data('menu-resize-mobile-breakpoint')))
                    )
                    ) {
                 
                    var moved = submenu.find('> .m-menu__subnav > .m-menu__item').length; // currently move
                    var left = element.find('> .m-menu__nav > .m-menu__item:not(.m-menu__item--resize)').length; // currently left
                    var total = moved + left;

                    if (check.apply() === true) {
                        // return
                        if (moved > 0) {
                            submenu.find('> .m-menu__subnav > .m-menu__item').each(function() {
                                var item = $(this);

                                var elementsNumber = submenu.find('> .m-menu__nav > .m-menu__item:not(.m-menu__item--resize)').length;
                                element.find('> .m-menu__nav > .m-menu__item:not(.m-menu__item--resize)').eq(elementsNumber - 1).after(item);

                                if (check.apply() === false) {
                                    item.appendTo(submenu.find('> .m-menu__subnav'));
                                    return false;
                                }         

                                moved--;
                                left++;                        
                            });
                        }
                    } else {
                        // move
                        if (left > 0) {
                            var items = element.find('> .m-menu__nav > .m-menu__item:not(.m-menu__item--resize)');
                            var index = items.length - 1;
                                
                            for(var i = 0; i < items.length; i++) {
                                var item = $(items.get(index)); 
                                index--;

                                if (check.apply() === true) {
                                    break;
                                }

                                item.appendTo(submenu.find('> .m-menu__subnav'));

                                moved++;
                                left--; 
                            } 
                        }
                    }

                    if (moved > 0) {
                        resize.show();  
                    } else {
                        resize.hide();
                    }                   
                } else {    
                    submenu.find('> .m-menu__subnav > .m-menu__item').each(function() {
                        var elementsNumber = submenu.find('> .m-menu__subnav > .m-menu__item').length;
                        element.find('> .m-menu__nav > .m-menu__item').get(elementsNumber).after($(this));
                    });

                    resize.hide();
                }
            },

            /**
             * Handles submenu slide toggle
             * @returns {mMenu}
             */
            createSubmenuDropdownClickDropoff: function(el) {
                var zIndex = el.find('> .m-menu__submenu').css('zIndex') - 1;
                var dropoff = $('<div class="m-menu__dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' + zIndex + '"></div>');
                $('body').after(dropoff);
                dropoff.on('click', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    $(this).remove();
                    Plugin.hideSubmenuDropdown(el, true);                    
                });
            },

            /**
             * Handles submenu click toggle
             * @returns {mMenu}
             */
            adjustSubmenuDropdownArrowPos: function(item) {                
                var arrow = item.find('> .m-menu__submenu > .m-menu__arrow.m-menu__arrow--adjust');
                var submenu = item.find('> .m-menu__submenu');
                var subnav = item.find('> .m-menu__submenu > .m-menu__subnav');
                
                if (arrow.length > 0) {
                    var pos;
                    var link = item.children('.m-menu__link');

                    if (submenu.hasClass('m-menu__submenu--classic') || submenu.hasClass('m-menu__submenu--fixed')) { 
                        if (submenu.hasClass('m-menu__submenu--right')) {
                            pos = item.outerWidth() / 2;
                            if (submenu.hasClass('m-menu__submenu--pull')) {
                                pos = pos + Math.abs(parseInt(submenu.css('margin-right')));    
                            }  
                            pos = submenu.width() - pos;
                        } else if (submenu.hasClass('m-menu__submenu--left')) {
                            pos = item.outerWidth() / 2;
                            if (submenu.hasClass('m-menu__submenu--pull')) {
                                pos = pos + Math.abs(parseInt(submenu.css('margin-left')));    
                            } 
                        }
                    } else  {
                        if (submenu.hasClass('m-menu__submenu--center') || submenu.hasClass('m-menu__submenu--full')) {
                            pos = item.offset().left - ((mUtil.getViewPort().width - submenu.outerWidth()) / 2);
                            pos = pos + (item.outerWidth() / 2);
                        } else if (submenu.hasClass('m-menu__submenu--left')) {
                            // to do
                        } else if (submenu.hasClass('m-menu__submenu--right')) {
                            // to do
                        }
                    } 

                    arrow.css('left', pos);
                }
            },

            /**
             * Handles submenu hover toggle
             * @returns {mMenu}
             */
            pauseDropdownHover: function(time) {
            	var date = new Date();

            	menu.pauseDropdownHoverTime = date.getTime() + time;
            },

            /**
             * Handles submenu hover toggle
             * @returns {mMenu}
             */
            resumeDropdownHover: function() {
            	var date = new Date();

            	return (date.getTime() > menu.pauseDropdownHoverTime ? true : false);
            },

            /**
             * Reset menu's current active item
             * @returns {mMenu}
             */
            resetActiveItem: function(item) {
                element.find('.m-menu__item--active').each(function() {
                    $(this).removeClass('m-menu__item--active');
                    $(this).children('.m-menu__submenu').css('display', '');

                    $(this).parents('.m-menu__item--submenu').each(function() {
                        $(this).removeClass('m-menu__item--open');
                        $(this).children('.m-menu__submenu').css('display', '');
                    });
                });             

                // close open submenus
                if (menu.options.accordion.expandAll === false) {
                    element.find('.m-menu__item--open').each(function() {
                        $(this).removeClass('m-menu__item--open');
                    });
                }
            },

            /**
             * Sets menu's active item
             * @returns {mMenu}
             */
            setActiveItem: function(item) {
                // reset current active item
                Plugin.resetActiveItem();

                var item = $(item);
                item.addClass('m-menu__item--active');
                item.parents('.m-menu__item--submenu').each(function() {
                    $(this).addClass('m-menu__item--open');
                });
            },

            /**
             * Returns page breadcrumbs for the menu's active item
             * @returns {mMenu}
             */
            getBreadcrumbs: function(item) {
                var breadcrumbs = [];
                var item = $(item);
                var link = item.children('.m-menu__link');

                breadcrumbs.push({
                    text: link.find('.m-menu__link-text').html(), 
                    title: link.attr('title'),
                    href: link.attr('href')
                });

                item.parents('.m-menu__item--submenu').each(function() {
                    var submenuLink = $(this).children('.m-menu__link');
                    breadcrumbs.push({
                        text: submenuLink.find('.m-menu__link-text').html(), 
                        title: submenuLink.attr('title'),
                        href: submenuLink.attr('href')
                    });
                });

                breadcrumbs.reverse();

                return breadcrumbs;
            },

            /**
             * Returns page title for the menu's active item
             * @returns {mMenu}
             */
            getPageTitle: function(item) {
                item = $(item);       

                return item.children('.m-menu__link').find('.m-menu__link-text').html();
            },

            /**
             * Sync 
             */
            sync: function () {
                $(element).data('menu', menu);
            }, 

            /**
             * Trigger events
             */
            eventTrigger: function(name, args) {
                for (i = 0; i < menu.events.length; i++) {
                    var event = menu.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                menu.events[i].fired = true;
                                return event.handler.call(this, menu, args);
                            }
                        } else {
                            return  event.handler.call(this, menu, args);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                menu.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        // Run plugin
        Plugin.run.apply(menu, [options]);

        // Handle plugin on window resize
        if (typeof(options)  !== "undefined") {
            $(window).resize(function() {
                Plugin.run.apply(menu, [options, true]);
            });  
        }        

        //////////////////////
        // ** Public API ** //
        //////////////////////

        /**
         * Set active menu item
         */
        menu.setActiveItem = function(item) {
            return Plugin.setActiveItem(item);
        };

        /**
         * Set breadcrumb for menu item
         */
        menu.getBreadcrumbs = function(item) {
            return Plugin.getBreadcrumbs(item);
        };

        /**
         * Set page title for menu item
         */
        menu.getPageTitle = function(item) {
            return Plugin.getPageTitle(item);
        };

        /**
         * Get submenu mode
         */
        menu.getSubmenuMode = function() {
            return Plugin.getSubmenuMode();
        };

        /**
         * Hide dropdown submenu
         * @returns {jQuery}
         */
        menu.hideDropdown = function(item) {
            Plugin.hideSubmenuDropdown(item, true);
        };

        /**
         * Disable menu for given time
         * @returns {jQuery}
         */
        menu.pauseDropdownHover = function(time) {
        	Plugin.pauseDropdownHover(time);
        };

        /**
         * Disable menu for given time
         * @returns {jQuery}
         */
        menu.resumeDropdownHover = function() {
        	return Plugin.resumeDropdownHover();
        };

        /**
         * Register event
         */
        menu.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        // Return plugin instance
        return menu;
    };

    // Plugin default options
    $.fn.mMenu.defaults = {
        // accordion submenu mode
        accordion: {   
            slideSpeed: 200,  // accordion toggle slide speed in milliseconds
            autoScroll: true, // enable auto scrolling(focus) to the clicked menu item
            expandAll: true   // allow having multiple expanded accordions in the menu
        },
        
        // dropdown submenu mode
        dropdown: {
            timeout: 500  // timeout in milliseconds to show and hide the hoverable submenu dropdown
        }
    }; 

    // Plugin global lazy initialization
    $(document).on('click', function(e) {
        $('.m-menu__nav .m-menu__item.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)[data-menu-submenu-toggle="click"]').each(function() {
            var  element = $(this).closest('.m-menu__nav').parent();
            menu = element.mMenu(); 

            if (menu.getSubmenuMode() !== 'dropdown') { 
                return;
            }            

            if ($(e.target).is(element) == false && element.find($(e.target)).length == 0) {
                var items = element.find('.m-menu__item--submenu.m-menu__item--hover:not(.m-menu__item--tabs)[data-menu-submenu-toggle="click"]');
                items.each(function() {
                    menu.hideDropdown($(this));
                });
            }          
        });
    });
}(jQuery));
(function ($) {
    // Plugin function
    $.fn.mMessenger = function (options) {
        // Plugin scope variable
        var messenger = {};
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('messenger')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    Plugin.setup();
                    
                    // assign instance to the element                    
                    element.data('messenger', messenger);
                } else {
                    // get instance from the element
                    messenger = element.data('messenger');
                }               

                return messenger;
            },

            /**
             * Initialize
             */
            init: function(options) {
                messenger.events = [];
                messenger.scrollable = element.find('.m-messenger__scrollable');
                messenger.options = $.extend(true, {}, $.fn.mMessenger.defaults, options);
                if (messenger.scrollable.length > 0) {
                    if (messenger.scrollable.data('data-min-height')) {
                        messenger.options.minHeight = messenger.scrollable.data('data-min-height');
                    }

                    if (messenger.scrollable.data('data-max-height')) {
                        messenger.options.maxHeight = messenger.scrollable.data('data-max-height');
                    }
                }                
            },

            /**
             * Build DOM and init event handlers
             */
            build: function () {
                if (mUtil.isMobileDevice()) {
                    
                } else {
                    
                }                
            }, 

            /**
             * Setup messenger
             */
            setup: function () {
               
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < messenger.events.length; i++) {
                    var event = messenger.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                messenger.events[i].fired = true;
                                return event.handler.call(this, messenger);
                            }
                        } else {
                            return  event.handler.call(this, messenger);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                messenger.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        // Run plugin
        Plugin.run.apply(this, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////
       

        /**
         * Set messenger content
         * @returns {mMessenger}
         */
        messenger.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set messenger content
         * @returns {mMessenger}
         */
        messenger.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };        

        return messenger;
    };

    // default options
    $.fn.mMessenger.defaults = {
       
    };
}(jQuery));
(function($) {
    // plugin setup
    $.fn.mOffcanvas = function(options) {
        // main object
        var offcanvas = this;
        var element = $(this);

        /********************
         ** PRIVATE METHODS
         ********************/
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('offcanvas')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    
                    // assign instance to the element                    
                    element.data('offcanvas', offcanvas);
                } else {
                    // get instance from the element
                    offcanvas = element.data('offcanvas');
                }               

                return offcanvas;
            },

            /**
             * Handles suboffcanvas click toggle
             */
            init: function(options) {
                offcanvas.events = [];

                // merge default and user defined options
                offcanvas.options = $.extend(true, {}, $.fn.mOffcanvas.defaults, options);

                offcanvas.overlay;
                
                offcanvas.classBase = offcanvas.options.class;
                offcanvas.classShown = offcanvas.classBase + '--on';
                offcanvas.classOverlay = offcanvas.classBase + '-overlay';
                
                offcanvas.state = element.hasClass(offcanvas.classShown) ? 'shown' : 'hidden';
                offcanvas.close = offcanvas.options.close;

                if (offcanvas.options.toggle && offcanvas.options.toggle.target) {
                    offcanvas.toggleTarget = offcanvas.options.toggle.target;
                    offcanvas.toggleState = offcanvas.options.toggle.state;
                } else {
                    offcanvas.toggleTarget = offcanvas.options.toggle; 
                    offcanvas.toggleState = '';
                }
            },

            /**
             * Setup offcanvas
             */
            build: function() {
                // offcanvas toggle
                $(offcanvas.toggleTarget).on('click', Plugin.toggle);

                if (offcanvas.close) {
                    $(offcanvas.close).on('click', Plugin.hide);
                }
            },

            /**
             * sync 
             */
            sync: function () {
                $(element).data('offcanvas', offcanvas);
            }, 

            /**
             * Handles offcanvas click toggle
             */
            toggle: function() {
                var el = $(this);

                if (offcanvas.state == 'shown') {
                    Plugin.hide(el);
                } else {
                    Plugin.show(el);
                }
            },

            /**
             * Handles offcanvas click toggle
             */
            show: function(el) {
                if (offcanvas.state == 'shown') {
                    return;
                }

                var target = el ? $(el) : $(offcanvas.toggleTarget);

                Plugin.eventTrigger('beforeShow');

                if (offcanvas.toggleState != '') {
                    target.addClass(offcanvas.toggleState);
                }
                
                $('body').addClass(offcanvas.classShown);
                element.addClass(offcanvas.classShown);

                offcanvas.state = 'shown';

                if (offcanvas.options.overlay) {
                    var overlay = $('<div class="' + offcanvas.classOverlay + '"></div>');                
                    element.after(overlay);
                    offcanvas.overlay = overlay;
                    offcanvas.overlay.on('click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        Plugin.hide();
                    });
                } 

                Plugin.eventTrigger('afterShow');

                return offcanvas;
            },

            /**
             * Handles offcanvas click toggle
             */
            hide: function(el) {
                if (offcanvas.state == 'hidden') {
                    return;
                }

                var target = el ? $(el) : $(offcanvas.toggleTarget);
                                
                Plugin.eventTrigger('beforeHide');

                if (offcanvas.toggleState != '') {
                    target.removeClass(offcanvas.toggleState);
                }

                $('body').removeClass(offcanvas.classShown)
                element.removeClass(offcanvas.classShown);

                offcanvas.state = 'hidden';

                if (offcanvas.options.overlay) {
                    offcanvas.overlay.remove();
                } 

                Plugin.eventTrigger('afterHide');

                return offcanvas;
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < offcanvas.events.length; i++) {
                    var event = offcanvas.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                offcanvas.events[i].fired = true;
                                return event.handler.call(this, offcanvas);
                            }
                        } else {
                            return  event.handler.call(this, offcanvas);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                offcanvas.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        // main variables
        var the = this;
        
        // init plugin
        Plugin.run.apply(this, [options]);

        /********************
         ** PUBLIC API METHODS
         ********************/

        /**
         * Hide 
         */
        offcanvas.hide =  function () {
            return Plugin.hide();
        };

        /**
         * Show 
         */
        offcanvas.show =  function () {
            return Plugin.show();
        };

        /**
         * Get suboffcanvas mode
         */
        offcanvas.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set offcanvas content
         * @returns {mOffcanvas}
         */
        offcanvas.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };   

        return offcanvas;
    };

    // default options
    $.fn.mOffcanvas.defaults = {
        
    }; 
}(jQuery));
(function ($) {
    // Plugin function
    $.fn.mPortlet = function (options) {
        // Plugin scope variable
        var portlet = {};
        var element = $(this);

        // Plugin class
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (element.data('portlet-object')) {            
                    // get instance from the element
                    portlet = element.data('portlet-object');
                } else {                              
                    // create instance                   
                    Plugin.init(options);
                    Plugin.build();
                    
                    // assign instance to the element                    
                    element.data('portlet-object', portlet);
                }               

                return portlet;
            },

            /**
             * Initialize
             */
            init: function(options) {
                portlet.options = $.extend(true, {}, $.fn.mPortlet.defaults, options);
                portlet.events = [];
                portlet.eventOne = false;       

                if ( element.find('> .m-portlet__body').length !== 0 ) {
                    portlet.body = element.find('> .m-portlet__body');
                } else if ( element.find('> .m-form').length !== 0 ) {
                    portlet.body = element.find('> .m-form');
                }
            },

            /**
             * Build DOM and init event handlers
             */
            build: function () {
                // remove
                var remove = element.find('> .m-portlet__head [data-portlet-tool=remove]');
                if (remove.length === 1) {
                    remove.click(function(e) {
                        e.preventDefault();
                        Plugin.remove();
                    });
                }                 

                // reload
                var reload = element.find('> .m-portlet__head [data-portlet-tool=reload]')
                if (reload.length === 1) {
                    reload.click(function(e) {
                        e.preventDefault();
                        Plugin.reload();
                    });
                }

                // toggle
                var toggle = element.find('> .m-portlet__head [data-portlet-tool=toggle]');
                if (toggle.length === 1) {
                    toggle.click(function(e) {
                        e.preventDefault();
                        Plugin.toggle();
                    });
                }

                // fullscreen
                var fullscreen = element.find('> .m-portlet__head [data-portlet-tool=fullscreen]');
                if (fullscreen.length === 1) {
                    fullscreen.click(function(e) {
                        e.preventDefault();
                        Plugin.fullscreen();
                    });
                }                    

                Plugin.setupTooltips();
            }, 

            /**
             * Remove portlet
             */
            remove: function () {
                if (Plugin.eventTrigger('beforeRemove') === false) {
                    return;
                }

                if ( $('body').hasClass('m-portlet--fullscreen') && element.hasClass('m-portlet--fullscreen') ) {
                    Plugin.fullscreen('off');
                }

                Plugin.removeTooltips();

                element.remove();
                
                Plugin.eventTrigger('afterRemove');
            }, 

            /**
             * Set content
             */
            setContent: function (html) {
                if (html) {
                    portlet.body.html(html);
                }               
            },

            /**
             * Get body
             */
            getBody: function () {
                return portlet.body;
            },

            /**
             * Get self
             */
            getSelf: function () {
                return element;
            },

            /**
             * Setup tooltips
             */
            setupTooltips: function () {
                if (portlet.options.tooltips) {
                    var collapsed = element.hasClass('m-portlet--collapse') || element.hasClass('m-portlet--collapsed');
                    var fullscreenOn = $('body').hasClass('m-portlet--fullscreen') && element.hasClass('m-portlet--fullscreen');

                    var remove = element.find('> .m-portlet__head [data-portlet-tool=remove]');
                    if (remove.length === 1) {
                        remove.attr('title', portlet.options.tools.remove);
                        remove.data('placement', fullscreenOn ? 'bottom' : 'top');
                        remove.data('offset', fullscreenOn ? '0,10px,0,0' : '0,5px');
                        remove.tooltip('dispose');
                        mApp.initTooltip(remove);
                    }

                    var reload = element.find('> .m-portlet__head [data-portlet-tool=reload]');
                    if (reload.length === 1) {
                        reload.attr('title', portlet.options.tools.reload);
                        reload.data('placement', fullscreenOn ? 'bottom' : 'top');
                        reload.data('offset', fullscreenOn ? '0,10px,0,0' : '0,5px');
                        reload.tooltip('dispose');
                        mApp.initTooltip(reload);
                    }

                    var toggle = element.find('> .m-portlet__head [data-portlet-tool=toggle]');
                    if (toggle.length === 1) {
                        if (collapsed) {
                            toggle.attr('title', portlet.options.tools.toggle.expand);
                        } else {
                            toggle.attr('title', portlet.options.tools.toggle.collapse);
                        }
                        toggle.data('placement', fullscreenOn ? 'bottom' : 'top');
                        toggle.data('offset', fullscreenOn ? '0,10px,0,0' : '0,5px');
                        toggle.tooltip('dispose');
                        mApp.initTooltip(toggle);
                    }

                    var fullscreen = element.find('> .m-portlet__head [data-portlet-tool=fullscreen]');
                    if (fullscreen.length === 1) {
                        if (fullscreenOn) {
                            fullscreen.attr('title', portlet.options.tools.fullscreen.off);
                        } else {
                            fullscreen.attr('title', portlet.options.tools.fullscreen.on);
                        }
                        fullscreen.data('placement', fullscreenOn ? 'bottom' : 'top');
                        fullscreen.data('offset', fullscreenOn ? '0,10px,0,0' : '0,5px');
                        fullscreen.tooltip('dispose');
                        mApp.initTooltip(fullscreen);
                    }                
                }                   
            },

            /**
             * Setup tooltips
             */
            removeTooltips: function () {
                if (portlet.options.tooltips) {
                    var remove = element.find('> .m-portlet__head [data-portlet-tool=remove]');
                    if (remove.length === 1) {
                        remove.tooltip('dispose');
                    }

                    var reload = element.find('> .m-portlet__head [data-portlet-tool=reload]');
                    if (reload.length === 1) {
                        reload.tooltip('dispose');
                    }

                    var toggle = element.find('> .m-portlet__head [data-portlet-tool=toggle]');
                    if (toggle.length === 1) {
                        toggle.tooltip('dispose');
                    }

                    var fullscreen = element.find('> .m-portlet__head [data-portlet-tool=fullscreen]');
                    if (fullscreen.length === 1) {
                        fullscreen.tooltip('dispose');
                    }                
                }                   
            },

            /**
             * Reload
             */
            reload: function () {
                Plugin.eventTrigger('reload');                
            },

            /**
             * Toggle
             */
            toggle: function () {
                if (element.hasClass('m-portlet--collapse') || element.hasClass('m-portlet--collapsed')) {
                    Plugin.expand();                    
                } else {
                    Plugin.collapse();            
                }                  
            },

            /**
             * Collapse
             */
            collapse: function() {
                if (Plugin.eventTrigger('beforeCollapse') === false) {
                    return;
                } 

                portlet.body.slideUp(portlet.options.bodyToggleSpeed, function() {                        
                    Plugin.eventTrigger('afterCollapse');    
                });

                element.addClass('m-portlet--collapse');

                Plugin.setupTooltips();  
            },

            /**
             * Expand
             */
            expand: function() {
                if (Plugin.eventTrigger('beforeExpand') === false) {
                    return;
                } 

                portlet.body.slideDown(portlet.options.bodyToggleSpeed, function(){                        
                    Plugin.eventTrigger('afterExpand');                         
                });

                element.removeClass('m-portlet--collapse');
                element.removeClass('m-portlet--collapsed');

                Plugin.setupTooltips();
            },

            /**
             * Toggle
             */
            fullscreen: function (mode) {
                var d = {};
                var speed = 300;

                if (mode === 'off' || ($('body').hasClass('m-portlet--fullscreen') && element.hasClass('m-portlet--fullscreen'))) {
                    Plugin.eventTrigger('beforeFullscreenOff');

                    $('body').removeClass('m-portlet--fullscreen');
                    element.removeClass('m-portlet--fullscreen');

                    Plugin.setupTooltips();
                    
                    Plugin.eventTrigger('afterFullscreenOff');
                } else {
                    Plugin.eventTrigger('beforeFullscreenOn');

                    element.addClass('m-portlet--fullscreen');
                    $('body').addClass('m-portlet--fullscreen');

                    Plugin.setupTooltips();
                    
                    Plugin.eventTrigger('afterFullscreenOn');
                }                  
            }, 

            /**
             * sync 
             */
            sync: function () {
                $(element).data('portlet', portlet);
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < portlet.events.length; i++) {
                    var event = portlet.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                portlet.events[i].fired = true;
                                return event.handler.call(this, portlet);
                            }
                        } else {
                            return  event.handler.call(this, portlet);
                        }
                    }
                }
            },

            /**
             * Add event
             */
            addEvent: function(name, handler, one) {
                portlet.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();

                return portlet;
            }
        };

        // Run plugin
        Plugin.run.apply(this, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////
       
        /**
         * Remove portlet
         * @returns {mPortlet}
         */
        portlet.remove = function () {
            return Plugin.remove(html);
        };

        /**
         * Reload portlet
         * @returns {mPortlet}
         */
        portlet.reload = function () {
            return Plugin.reload();
        };

        /**
         * Set portlet content
         * @returns {mPortlet}
         */
        portlet.setContent = function (html) {
            return Plugin.setContent(html);
        };

        /**
         * Toggle portlet
         * @returns {mPortlet}
         */
        portlet.toggle = function () {
            return Plugin.toggle();
        };

        /**
         * Collapse portlet
         * @returns {mPortlet}
         */
        portlet.collapse = function () {
            return Plugin.collapse();
        };

        /**
         * Expand portlet
         * @returns {mPortlet}
         */
        portlet.expand = function () {
            return Plugin.expand();
        };

        /**
         * Fullscreen portlet
         * @returns {mPortlet}
         */
        portlet.fullscreen = function () {
            return Plugin.fullscreen('on');
        };

        /**
         * Fullscreen portlet
         * @returns {mPortlet}
         */
        portlet.unFullscreen = function () {
            return Plugin.fullscreen('off');
        };

        /**
         * Get portletbody 
         * @returns {jQuery}
         */
        portlet.getBody = function () {
            return Plugin.getBody();
        };

         /**
         * Get portletbody 
         * @returns {jQuery}
         */
        portlet.getSelf = function () {
            return Plugin.getSelf();
        };

        /**
         * Set portlet content
         * @returns {mPortlet}
         */
        portlet.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set portlet content
         * @returns {mPortlet}
         */
        portlet.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };        

        return portlet;
    };

    // default options
    $.fn.mPortlet.defaults = {
        bodyToggleSpeed: 400,
        tooltips: true,
        tools: {
            toggle: {
                collapse: 'Collapse', 
                expand: 'Expand'
            },
            reload: 'Reload',
            remove: 'Remove',
            fullscreen: {
                on: 'Fullscreen',
                off: 'Exit Fullscreen'
            }        
        }
    };
}(jQuery));
(function($) {
    // Plugin function
    $.fn.mQuicksearch = function(options) {

        // Plugin scope variables
        var qs = this;
        var element = $(this);
        
        // Plugin class        
        var Plugin = {
            /**
             * Run plugin 
             */
            run: function(options) {
                if (!element.data('qs')) {
                    // init plugin
                    Plugin.init(options);
                    // build dom
                    Plugin.build();                   
                    // store the instance in the element's data
                    element.data('qs', qs);
                } else {
                    // retrieve the instance fro the element's data
                    qs = element.data('qs'); 
                }

                return qs;
            },

            /**
             * Init plugin
             */
            init: function(options) {
                // merge default and user defined options
                qs.options = $.extend(true, {}, $.fn.mQuicksearch.defaults, options);

                // form
                qs.form = element.find('form');

                // input element
                qs.input = $(qs.options.input);

                 // close icon
                qs.iconClose = $(qs.options.iconClose);

                if (qs.options.type == 'default') {
                    // search icon
                    qs.iconSearch = $(qs.options.iconSearch);
                        
                    // cancel icon
                    qs.iconCancel = $(qs.options.iconCancel);
                }               

                // dropdown
                qs.dropdown = element.mDropdown({mobileOverlay: false});

                // cancel search timeout
                qs.cancelTimeout;

                // ajax processing state
                qs.processing = false;
            }, 

            /**
             * Build plugin
             */
            build: function() {
                // attach input keyup handler
                qs.input.keyup(Plugin.handleSearch);
                
                if (qs.options.type == 'default') {
                    qs.input.focus(Plugin.showDropdown);
                    
                    qs.iconCancel.click(Plugin.handleCancel);

                    qs.iconSearch.click(function() {
                        if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                            $('body').addClass('m-header-search--mobile-expanded');
                            qs.input.focus();
                        }
                    });

                    qs.iconClose.click(function() {
                        if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                            $('body').removeClass('m-header-search--mobile-expanded');
                            Plugin.closeDropdown();
                        }
                    });

                } else if (qs.options.type == 'dropdown') {
                    qs.dropdown.on('afterShow', function() {
                        qs.input.focus();
                    });
                    qs.iconClose.click(Plugin.closeDropdown);
                }               
            },

            /**
             * Search handler
             */ 
            handleSearch: function(e) { 
                var query = qs.input.val();

                if (query.length === 0) {
                    qs.dropdown.hide();
                    Plugin.handleCancelIconVisibility('on');
                    Plugin.closeDropdown();
                    element.removeClass(qs.options.hasResultClass);
                }

                if (query.length < qs.options.minLength || qs.processing == true) {
                    return;
                }

                qs.processing = true;
                qs.form.addClass(qs.options.spinner);
                Plugin.handleCancelIconVisibility('off');
                
                $.ajax({
                    url: qs.options.source,
                    data: {query: query},
                    dataType: 'html',
                    success: function(res) {
                        qs.processing = false;
                        qs.form.removeClass(qs.options.spinner);
                        Plugin.handleCancelIconVisibility('on');
                        qs.dropdown.setContent(res).show();
                        element.addClass(qs.options.hasResultClass);    
                    },
                    error: function(res) {
                        qs.processing = false;
                        qs.form.removeClass(qs.options.spinner);
                        Plugin.handleCancelIconVisibility('on');
                        qs.dropdown.setContent(qs.options.templates.error.apply(qs, res)).show();  
                        element.addClass(qs.options.hasResultClass);   
                    }
                });
            }, 

            /**
             * Handle cancel icon visibility
             */ 
            handleCancelIconVisibility: function(status) {
                if (qs.options.type == 'dropdown') {
                    //return;
                }

                if (status == 'on') {
                    if (qs.input.val().length === 0) {                       
                        if (qs.iconCancel) qs.iconCancel.css('visibility', 'hidden');
                        if (qs.iconClose) qs.iconClose.css('visibility', 'hidden');
                    } else {
                        clearTimeout(qs.cancelTimeout);
                        qs.cancelTimeout = setTimeout(function() {
                            if (qs.iconCancel) qs.iconCancel.css('visibility', 'visible');
                            if (qs.iconClose) qs.iconClose.css('visibility', 'visible');
                        }, 500);                        
                    }
                } else {
                    if (qs.iconCancel) qs.iconCancel.css('visibility', 'hidden');
                    if (qs.iconClose) qs.iconClose.css('visibility', 'hidden');
                }
            },

            /**
             * Cancel handler
             */ 
            handleCancel: function(e) {
                qs.input.val('');
                qs.iconCancel.css('visibility', 'hidden');
                element.removeClass(qs.options.hasResultClass);   
                //qs.input.focus();

                Plugin.closeDropdown();
            },

            /**
             * Cancel handler
             */ 
            closeDropdown: function() {
                qs.dropdown.hide();
            },

            /**
             * Show dropdown
             */ 
            showDropdown: function(e) { 
                if (qs.dropdown.isShown() == false && qs.input.val().length > qs.options.minLength && qs.processing == false) {
                    qs.dropdown.show();
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        };

        // Run plugin
        Plugin.run.apply(qs, [options]);

        //////////////////////
        // ** Public API ** //
        //////////////////////

        /**
         * Public method
         * @returns {mQuicksearch}
         */
        qs.test = function(time) {
        	//Plugin.method(time);
        };

        // Return plugin object
        return qs;
    };

    // Plugin default options
    $.fn.mQuicksearch.defaults = {
    	minLength: 1,
        maxHeight: 300,
    };

}(jQuery));
(function($) {
    // plugin setup
    $.fn.mScrollTop = function(options) {
        // main object
        var scrollTop = this;
        var element = $(this);

        /********************
         ** PRIVATE METHODS
         ********************/
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('scrollTop')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    
                    // assign instance to the element                    
                    element.data('scrollTop', scrollTop);
                } else {
                    // get instance from the element
                    scrollTop = element.data('scrollTop');
                }               

                return scrollTop;
            },

            /**
             * Handles subscrollTop click scrollTop
             */
            init: function(options) {
                scrollTop.element = element;    
                scrollTop.events = [];

                // merge default and user defined options
                scrollTop.options = $.extend(true, {}, $.fn.mScrollTop.defaults, options);
            },

            /**
             * Setup scrollTop
             */
            build: function() {
                // handle window scroll
                if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                    $(window).bind("touchend touchcancel touchleave", function() {
                        Plugin.handle();
                    });
                } else {
                    $(window).scroll(function() {
                        Plugin.handle();
                    });
                }

                // handle button click 
                element.on('click', Plugin.scroll);
            },

            /**
             * sync 
             */
            sync: function () {
                $(element).data('scrollTop', scrollTop);
            }, 

            /**
             * Handles offcanvas click scrollTop
             */
            handle: function() {
                var pos = $(window).scrollTop(); // current vertical position
                if (pos > scrollTop.options.offset) {
                    $("body").addClass('m-scroll-top--shown');
                } else {
                    $("body").removeClass('m-scroll-top--shown');
                }
            },

            /**
             * Handles offcanvas click scrollTop
             */
            scroll: function(e) {
                e.preventDefault();

                $("html, body").animate({
                    scrollTop: 0
                }, scrollTop.options.speed);
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                for (i = 0; i < scrollTop.events.length; i++) {
                    var event = scrollTop.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                scrollTop.events[i].fired = true;
                                return event.handler.call(this, scrollTop);
                            }
                        } else {
                            return  event.handler.call(this, scrollTop);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                scrollTop.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        // main variables
        var the = this;
        
        // init plugin
        Plugin.run.apply(this, [options]);

        /********************
         ** PUBLIC API METHODS
         ********************/

        /**
         * Get subscrollTop mode
         */
        scrollTop.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Set scrollTop content
         * @returns {mScrollTop}
         */
        scrollTop.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };   

        return scrollTop;
    };

    // default options
    $.fn.mScrollTop.defaults = {
        offset: 300,
        speed: 600
    }; 
}(jQuery));
(function($) {
    // plugin setup
    $.fn.mToggle = function(options) {
        // main object
        var toggle = this;
        var element = $(this);

        /********************
         ** PRIVATE METHODS
         ********************/
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('toggle')) {                      
                    // create instance
                    Plugin.init(options);
                    Plugin.build();
                    
                    // assign instance to the element                    
                    element.data('toggle', toggle);
                } else {
                    // get instance from the element
                    toggle = element.data('toggle');
                }               

                return toggle;
            },

            /**
             * Handles subtoggle click toggle
             */
            init: function(options) {
                toggle.element = element;    
                toggle.events = [];

                // merge default and user defined options
                toggle.options = $.extend(true, {}, $.fn.mToggle.defaults, options);

                toggle.target = $(toggle.options.target);
                toggle.targetState = toggle.options.targetState;
                toggle.togglerState = toggle.options.togglerState;

                toggle.state = mUtil.hasClasses(toggle.target, toggle.targetState) ? 'on' : 'off';
            },

            /**
             * Setup toggle
             */
            build: function() {
                element.on('click', Plugin.toggle);
            },

            /**
             * sync 
             */
            sync: function () {
                $(element).data('toggle', toggle);
            }, 

            /**
             * Handles offcanvas click toggle
             */
            toggle: function() {
                if (toggle.state == 'off') {
                    Plugin.toggleOn();
                } else {
                    Plugin.toggleOff();
                }
                Plugin.eventTrigger('toggle');

                return toggle;
            },

            /**
             * Handles toggle click toggle
             */
            toggleOn: function() {
                Plugin.eventTrigger('beforeOn');
                
                toggle.target.addClass(toggle.targetState);

                if (toggle.togglerState) {
                    element.addClass(toggle.togglerState);
                }

                toggle.state = 'on';

                Plugin.eventTrigger('afterOn');

                return toggle;
            },

            /**
             * Handles toggle click toggle
             */
            toggleOff: function() {
                Plugin.eventTrigger('beforeOff');

                toggle.target.removeClass(toggle.targetState);

                if (toggle.togglerState) {
                    element.removeClass(toggle.togglerState);
                }

                toggle.state = 'off';

                Plugin.eventTrigger('afterOff');

                return toggle;
            },

            /**
             * Trigger events
             */
            eventTrigger: function(name) {
                toggle.trigger(name);
                for (i = 0; i < toggle.events.length; i++) {
                    var event = toggle.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                toggle.events[i].fired = true;
                                return event.handler.call(this, toggle);
                            }
                        } else {
                            return  event.handler.call(this, toggle);
                        }
                    }
                }
            },

            addEvent: function(name, handler, one) {
                toggle.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();

                return toggle;
            }
        };

        // main variables
        var the = this;
        
        // init plugin
        Plugin.run.apply(this, [options]);

        /********************
         ** PUBLIC API METHODS
         ********************/


        /**
         * Get toggle state 
         */
        toggle.getState =  function () {
            return toggle.state;
        };

        /**
         * Toggle 
         */
        toggle.toggle =  function () {
            return Plugin.toggle();
        };

        /**
         * Toggle on 
         */
        toggle.toggleOn =  function () {
            return Plugin.toggleOn();
        };

        /**
         * Toggle off 
         */
        toggle.toggleOff =  function () {
            return Plugin.toggleOff();
        };

        /**
         * Attach event
         * @returns {mToggle}
         */
        toggle.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Attach event that will be fired once
         * @returns {mToggle}
         */
        toggle.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };     

        return toggle;
    };

    // default options
    $.fn.mToggle.defaults = {
        togglerState: '',
        targetState: ''
    }; 
}(jQuery));
(function($) {
    // plugin setup
    $.fn.mWizard = function(options) {
        //== Main object
        var wizard = this;
        var element = $(this);

        /********************
         ** PRIVATE METHODS
         ********************/
        var Plugin = {
            /**
             * Run
             */
            run: function (options) {
                if (!element.data('wizard')) {                      
                    //== Create instance
                    Plugin.init(options);
                    Plugin.build();
                    
                    //== Assign instance to the element                    
                    element.data('wizard', wizard);
                } else {
                    // get instance from the element
                    wizard = element.data('wizard');
                }               

                return wizard;
            },

            /**
             * Initialize Form Wizard
             */
            init: function(options) {
                //== Elements
                wizard.steps = wizard.find('.m-wizard__step');
                wizard.progress = wizard.find('.m-wizard__progress .progress-bar'); 
                wizard.btnSubmit = wizard.find('[data-wizard-action="submit"]'); 
                wizard.btnNext = wizard.find('[data-wizard-action="next"]'); 
                wizard.btnPrev = wizard.find('[data-wizard-action="prev"]'); 
                wizard.btnLast = wizard.find('[data-wizard-action="last"]'); 
                wizard.btnFirst = wizard.find('[data-wizard-action="first"]');  

                //== Merge default and user defined options
                wizard.options = $.extend(true, {}, $.fn.mWizard.defaults, options);

                //== Variables
                wizard.events = [];
                wizard.currentStep = 1;
                wizard.totalSteps = wizard.steps.length;  

                //== Init current step
                if (wizard.options.startStep > 1) {
                    Plugin.goTo(wizard.options.startStep);
                }       

                //== Init UI
                Plugin.updateUI();
            },

            /**
             * Build Form Wizard
             */
            build: function() {
                //== Next button event handler
                wizard.btnNext.on('click', function (e) {
                    e.preventDefault();
                    Plugin.goNext();
                });

                //== Prev button event handler
                wizard.btnPrev.on('click', function (e) {
                    e.preventDefault();
                    Plugin.goPrev();
                });

                //== First button event handler
                wizard.btnFirst.on('click', function (e) {
                    e.preventDefault();
                    Plugin.goFirst();
                });

                //== Last button event handler
                wizard.btnLast.on('click', function (e) {
                    e.preventDefault();
                    Plugin.goLast();
                });

                wizard.find('.m-wizard__step a.m-wizard__step-number').on('click', function() {
                    var step = $(this).parents('.m-wizard__step');
                    var num;
                    $(this).parents('.m-wizard__steps').find('.m-wizard__step').each(function(index) {
                        if (step.is( $(this) )) {
                            num = (index + 1);
                            return;
                        }
                    });

                    if (num) {
                        Plugin.goTo(num);
                    }                    
                });
            },

            /**
             * Sync object instance
             */
            sync: function () {
                $(element).data('wizard', wizard);
            }, 

            /**
             * Handles wizard click toggle
             */
            goTo: function(number) {
                //== Skip if this step is already shown
                if (number === wizard.currentStep) {
                    return;
                }

                //== Validate step number
                if (number) {
                    number = parseInt(number); 
                } else {
                    number = Plugin.getNextStep();
                }

                //== Before next and prev events
                var callback;

                if (number > wizard.currentStep) {
                    callback = Plugin.eventTrigger('beforeNext');
                } else {
                    callback = Plugin.eventTrigger('beforePrev');
                }

                //== Continue if no exit
                if (callback !== false) {
                    //== Set current step
                    wizard.currentStep = number;

                    //== Update UI
                    Plugin.updateUI();             

                    //== Trigger change event
                    Plugin.eventTrigger('change')       
                }
                
                //== After next and prev events
                if (number > wizard.startStep) {
                    Plugin.eventTrigger('afterNext');
                } else {
                    Plugin.eventTrigger('afterPrev');
                }

                return wizard;
            },

            updateUI: function(argument) {
                //== Update progress bar
                Plugin.updateProgress();

                //== Show current target content
                Plugin.handleTarget();

                //== Set classes
                Plugin.setStepClass();

                //== Apply nav step classes
                wizard.find('.m-wizard__step').removeClass('m-wizard__step--current').removeClass('m-wizard__step--done');
                for (var i = 1; i < wizard.currentStep; i++) {
                    wizard.find('.m-wizard__step').eq(i - 1).addClass('m-wizard__step--done');
                }
                wizard.find('.m-wizard__step').eq(wizard.currentStep - 1).addClass('m-wizard__step--current');
            },

            /**
             * Check last step
             */
            isLastStep: function() {
                return wizard.currentStep === wizard.totalSteps;
            },

            /**
             * Check first step
             */
            isFirstStep: function() {
                return wizard.currentStep === 1;
            },

            /**
             * Check between step
             */
            isBetweenStep: function() {
                return Plugin.isLastStep() === false && Plugin.isFirstStep() === false;
            },

            /**
             * Set step class
             */
            setStepClass: function() {
                if (Plugin.isLastStep()) {
                    element.addClass('m-wizard--step-last');
                } else {
                    element.removeClass('m-wizard--step-last');
                }

                if (Plugin.isFirstStep()) {
                    element.addClass('m-wizard--step-first');
                } else {
                    element.removeClass('m-wizard--step-first');
                }

                if (Plugin.isBetweenStep()) {
                    element.addClass('m-wizard--step-between');
                } else {
                    element.removeClass('m-wizard--step-between');
                }
            },

            /**
             * Go to the next step
             */
            goNext: function() {
                return Plugin.goTo( Plugin.getNextStep() );
            },

            /**
             * Go to the prev step
             */
            goPrev: function() {
                return Plugin.goTo( Plugin.getPrevStep() );
            },

            /**
             * Go to the last step
             */
            goLast: function() {
                return Plugin.goTo( wizard.totalSteps );
            },

            /**
             * Go to the first step
             */
            goFirst: function() {
                return Plugin.goTo( 1 );
            },

            /**
             * Set progress
             */
            updateProgress: function() {
                //== Calculate progress position

                if (!wizard.progress) {
                    return;
                } 

                //== Update progress
                if (element.hasClass('m-wizard--1')) {
                    var width = 100 * ((wizard.currentStep) / (wizard.totalSteps));
                    var offset = element.find('.m-wizard__step-number').width();
                    wizard.progress.css('width', 'calc(' + width + '% + ' + (offset / 2)  + 'px)');
                } else if (element.hasClass('m-wizard--2')) {
                    if (wizard.currentStep === 1) {
                        return;
                    }

                    var step = element.find('.m-wizard__step').eq(0);
                    var progress = (wizard.currentStep - 1) * (100 * (1 / (wizard.totalSteps - 1)));

                    if (mUtil.isInResponsiveRange('minimal-desktop-and-below')) {  
                        wizard.progress.css('height', progress + '%');
                    } else {
                        wizard.progress.css('width', progress + '%');
                    }
                } else {
                    var width = 100 * ((wizard.currentStep) / (wizard.totalSteps));
                    wizard.progress.css('width', width + '%'); 
                }             
            },

            /**
             * Show/hide target content
             */
            handleTarget: function() {
                var step = wizard.steps.eq(wizard.currentStep - 1);
                var target = element.find( step.data('wizard-target') );

                element.find('.m-wizard__form-step--current').removeClass('m-wizard__form-step--current');
                target.addClass('m-wizard__form-step--current');
            },

            /**
             * Get next step
             */
            getNextStep: function() {
                if (wizard.totalSteps >= (wizard.currentStep + 1)) {
                    return wizard.currentStep + 1;
                } else {
                    return wizard.totalSteps;
                } 
            },

            /**
             * Get prev step
             */
            getPrevStep: function() {
                if ((wizard.currentStep - 1) >= 1) {
                    return wizard.currentStep - 1;
                } else {
                    return 1;
                } 
            },

            /**
             * Trigger event
             */
            eventTrigger: function(name) {
                for (i = 0; i < wizard.events.length; i++) {
                    var event = wizard.events[i];
                    if (event.name == name) {
                        if (event.one == true) {
                            if (event.fired == false) {
                                wizard.events[i].fired = true;
                                return event.handler.call(this, wizard);
                            }
                        } else {
                            return  event.handler.call(this, wizard);
                        }
                    }
                }
            },

            /**
             * Register event
             */
            addEvent: function(name, handler, one) {
                wizard.events.push({
                    name: name,
                    handler: handler,
                    one: one,
                    fired: false
                });

                Plugin.sync();
            }
        };

        //== Main variables
        var the = this;
        
        //== Init plugin
        Plugin.run.apply(this, [options]);

        /********************
         ** PUBLIC API METHODS
         ********************/

        /**
         * Go to the next step 
         */
        wizard.goNext =  function () {
            return Plugin.goNext();
        };

        /**
         * Go to the prev step 
         */
        wizard.goPrev =  function () {
            return Plugin.goPrev();
        };

        /**
         * Go to the last step 
         */
        wizard.goLast =  function () {
            return Plugin.goLast();
        };

        /**
         * Go to the first step 
         */
        wizard.goFirst =  function () {
            return Plugin.goFirst();
        };

         /**
         * Go to a step
         */
        wizard.goTo =  function ( number ) {
            return Plugin.goTo( number );
        };

        /**
         * Get current step number 
         */
        wizard.getStep =  function () {
            return wizard.currentStep;
        };

        /**
         * Check last step 
         */
        wizard.isLastStep =  function () {
            return Plugin.isLastStep();
        };

        /**
         * Check first step 
         */
        wizard.isFirstStep =  function () {
            return Plugin.isFirstStep();
        };

        /**
         * Attach event
         * @returns {mwizard}
         */
        wizard.on =  function (name, handler) {
            return Plugin.addEvent(name, handler);
        };

        /**
         * Attach event that will be fired once
         * @returns {mwizard}
         */
        wizard.one =  function (name, handler) {
            return Plugin.addEvent(name, handler, true);
        };   

        return wizard;
    };

    //== Default options
    $.fn.mWizard.defaults = {
        startStep: 1
    }; 
}(jQuery));
(function($) {

	$.fn.mDatatable = $.fn.mDatatable || {};

	/**
	 * @param datatable Main datatable plugin instance
	 * @param options Extension options
	 * @returns {*}
	 */
	$.fn.mDatatable.checkbox = function(datatable, options) {

		var Extension = {
			selectedAllRows: false,
			selectedRows: [],
			unselectedRows: [],

			init: function() {
				if (Extension.selectorEnabled()) {
					// requestIds is not null
					if (options.vars.requestIds) {
						// request ids in response
						datatable.setDataSourceParam(options.vars.requestIds, true);
					}

					// select all on extension init
					Extension.selectedAllRows = datatable.getDataSourceParam(options.vars.selectedAllRows);

					$(datatable).on('m-datatable--on-layout-updated', function(e, args) {
						if (args.table != $(datatable.wrap).attr('id')) return;
						datatable.ready(function() {
							Extension.initVars();
							Extension.initEvent();
							Extension.initSelect();
						});
					});
				}
			},

			/**
			 * Init checkbox clicks event
			 */
			initEvent: function() {
				// select all checkbox click
				$(datatable.tableHead).find('.m-checkbox--all > [type="checkbox"]').click(function(e) {
					// clear selected and unselected rows
					Extension.selectedRows = Extension.unselectedRows = [];
					datatable.stateRemove('checkbox');

					// select all rows
					if ($(this).is(':checked')) {
						Extension.selectedAllRows = true;
					} else {
						Extension.selectedAllRows = false;
					}

					// local select all current page rows
					if (!options.vars.requestIds) {
						if ($(this).is(':checked')) {
							Extension.selectedRows = $.makeArray($(datatable.tableBody).find('.m-checkbox--single > [type="checkbox"]').
								map(function(i, chk) {
									return $(chk).val();
								}));
						}
						var storage = {};
						storage['selectedRows'] = $.unique(Extension.selectedRows);
						datatable.stateKeep('checkbox', storage);
					}

					// keep selectedAllRows in datasource params
					datatable.setDataSourceParam(options.vars.selectedAllRows, Extension.selectedAllRows);

					$(datatable).trigger('m-datatable--on-click-checkbox', [$(this)]);
				});

				// single row checkbox click
				$(datatable.tableBody).find('.m-checkbox--single > [type="checkbox"]').click(function(e) {
					var id = $(this).val();
					if ($(this).is(':checked')) {
						Extension.selectedRows.push(id);
						// remove from unselected rows
						Extension.unselectedRows = Extension.remove(Extension.unselectedRows, id);
					} else {
						Extension.unselectedRows.push(id);
						// remove from selected rows
						Extension.selectedRows = Extension.remove(Extension.selectedRows, id);
					}

					// local checkbox header check
					if (!options.vars.requestIds && Extension.selectedRows.length < 1) {
						// remove select all checkbox, if there is no checked checkbox left
						$(datatable.tableHead).find('.m-checkbox--all > [type="checkbox"]').prop('checked', false);
					}

					var storage = {};
					storage['selectedRows'] = $.unique(Extension.selectedRows);
					storage['unselectedRows'] = $.unique(Extension.unselectedRows);
					datatable.stateKeep('checkbox', storage);

					$(datatable).trigger('m-datatable--on-click-checkbox', [$(this)]);
				});
			},

			initSelect: function() {
				// selected all rows from server
				if (Extension.selectedAllRows && options.vars.requestIds) {
					if (!datatable.hasClass('m-datatable--error')) {
						// set header select all checkbox checked
						$(datatable.tableHead).find('.m-checkbox--all > [type="checkbox"]').prop('checked', true);
					}

					// set all checkbox in table body
					datatable.setActiveAll(true);

					// remove unselected rows
					Extension.unselectedRows.forEach(function(id) {
						datatable.setInactive(id);
					});

				} else {
					// single check for server and local
					Extension.selectedRows.forEach(function(id) {
						datatable.setActive(id);
					});

					// local checkbox; check if all checkboxes of currect page are checked
					if (!datatable.hasClass('m-datatable--error') && $(datatable.tableBody).find('.m-checkbox--single > [type="checkbox"]').not(':checked').length < 1) {
						// set header select all checkbox checked
						$(datatable.tableHead).find('.m-checkbox--all > [type="checkbox"]').prop('checked', true);
					}
				}
			},

			/**
			 * Check if selector is enabled from options
			 */
			selectorEnabled: function() {
				return $.grep(datatable.options.columns, function(n, i) {
					return n.selector || false;
				})[0];
			},

			initVars: function() {
				// get single select/unselect from localstorage
				var storage = datatable.stateGet('checkbox');
				if (typeof storage !== 'undefined') {
					Extension.selectedRows = storage['selectedRows'] || [];
					Extension.unselectedRows = storage['unselectedRows'] || [];
				}
			},

			getSelectedId: function(path) {
				Extension.initVars();

				// server selected all rows
				if (Extension.selectedAllRows && options.vars.requestIds) {
					if (typeof path === 'undefined') path = options.vars.rowIds;

					// if selected all rows, return id from response meta
					var selectedAllRows = datatable.getObject(path, datatable.lastResponse) || [];

					if (selectedAllRows.length > 0) {
						// remove single unselected rows from selectedAllRows ids from server response emta
						Extension.unselectedRows.forEach(function(id) {
							selectedAllRows = Extension.remove(selectedAllRows, parseInt(id));
						});
					}
					return selectedAllRows;
				}

				// else return single checked selected rows
				return Extension.selectedRows;
			},

			remove: function(array, element) {
				return array.filter(function(e) {
					return e !== element;
				});
			},
		};

		// make the extension accessible from datatable init
		datatable.checkbox = function() {
			return Extension;
		};

		if (typeof options === 'object') {
			options = $.extend(true, {}, $.fn.mDatatable.checkbox.default, options);
			Extension.init.apply(this, [options]);
		}

		return datatable;
	};

	$.fn.mDatatable.checkbox.default = {
		vars: {
			// select all rows flag to be sent to the server
			selectedAllRows: 'selectedAllRows',
			// request id parameter's name
			requestIds: 'requestIds',
			// response path to all rows id
			rowIds: 'meta.rowIds',
		},
	};

}(jQuery));
//== Set defaults

$.notifyDefaults({
	template: '' +
	'<div data-notify="container" class="alert alert-{0} m-alert" role="alert">' +
	'<button type="button" aria-hidden="true" class="close" data-notify="dismiss"></button>' +
	'<span data-notify="icon"></span>' +
	'<span data-notify="title">{1}</span>' +
	'<span data-notify="message">{2}</span>' +
	'<div class="progress" data-notify="progressbar">' +
	'<div class="progress-bar progress-bar-animated bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
	'</div>' +
	'<a href="{3}" target="{4}" data-notify="url"></a>' +
	'</div>'
});
//== Set defaults
swal.setDefaults({
	width: 400,
	padding: '2.5rem',
	buttonsStyling: false,
	confirmButtonClass: 'btn btn-success m-btn m-btn--custom',
	confirmButtonColor: null,
	cancelButtonClass: 'btn btn-secondary m-btn m-btn--custom',
	cancelButtonColor: null
});
Chart.elements.Rectangle.prototype.draw = function() {    
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;

    // Set Radius Here
    // If radius is large enough to cause drawing errors a max radius is imposed
    var cornerRadius = this._chart.options.barRadius ? this._chart.options.barRadius : 0;

    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;

        if (vm.y > 2 * cornerRadius) {
        	top = vm.y - cornerRadius;        
        } else {
        	top = vm.y;        
        }

        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
        //console.log(vm.base + '-' + vm.y);
    } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];

    // Find first (starting) corner with fallback to 'bottom'
    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }

    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];
        
        var radius = cornerRadius;
        
        // Fix radius being too large
        if(radius > height/2){
            radius = height/2;
        }if(radius > width/2){
            radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
}; 

  $.fn.markdown.defaults.iconlibrary = 'fa';
//$.fn.bootstrapSwitch.defaults.size = 'large';
//$.fn.bootstrapSwitch.defaults.onColor = 'success';
$.fn.timepicker.defaults = $.extend(true, {}, $.fn.timepicker.defaults, {
    icons: {
        up: 'la la-angle-up',
        down: 'la la-angle-down'  
    }
});
jQuery.validator.setDefaults({
    errorElement: 'div', //default input error message container
    errorClass: 'form-control-feedback', // default input error message class
    focusInvalid: false, // do not focus the last invalid input
    ignore: "",  // validate all fields including form hidden input

    errorPlacement: function(error, element) { // render error placement for each input type
        var group = $(element).closest('.m-form__group-sub').length > 0 ? $(element).closest('.m-form__group-sub') : $(element).closest('.m-form__group');
        var help = group.find('.m-form__help');

        if (group.find('.form-control-feedback').length !== 0) {
            return;
        }

        if (help.length > 0) {
            help.before(error);
        } else {
            if ($(element).closest('.input-group').length > 0) {
                $(element).closest('.input-group').after(error);
            } else {
                if ($(element).is(':checkbox')) {
                    $(element).closest('.m-checkbox').find('>span').after(error);
                } else {
                    $(element).after(error);
                }                
            }            
        }
    },

    highlight: function(element) { // hightlight error inputs
        var group = $(element).closest('.m-form__group-sub').length > 0  ? $(element).closest('.m-form__group-sub') : $(element).closest('.m-form__group');

        console.log('add' + group.attr('class'));

        group.addClass('has-danger'); // set error class to the control groupx
    },

    unhighlight: function(element) { // revert the change done by hightlight
        var group = $(element).closest('.m-form__group-sub').length > 0  ? $(element).closest('.m-form__group-sub') : $(element).closest('.m-form__group');

        group.removeClass('has-danger'); // set error class to the control group
    },

    success: function(label, element) {
        var group = $(label).closest('.m-form__group-sub').length > 0  ? $(label).closest('.m-form__group-sub') : $(label).closest('.m-form__group');

        //group.addClass('has-success').removeClass('has-danger'); // set success class and hide error class
        group.removeClass('has-danger'); // hide error class
        group.find('.form-control-feedback').remove();
    }
});

jQuery.validator.addMethod("email", function(value, element) {
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
        return true;
    } else {
        return false;
    }
}, "Please enter a valid Email.");
var mLayout = function() {
    var horMenu;
    var asideMenu;
    var asideMenuOffcanvas;
    var horMenuOffcanvas;

    var initStickyHeader = function() {
        var header = $('.m-header');
        var options = {
            offset: {},
            minimize:{}       
        };

        if (header.data('minimize-mobile') == 'hide') {
            options.minimize.mobile = {};
            options.minimize.mobile.on = 'm-header--hide';
            options.minimize.mobile.off = 'm-header--show';
        } else {
            options.minimize.mobile = false;
        }

        if (header.data('minimize') == 'hide') {
            options.minimize.desktop = {};
            options.minimize.desktop.on = 'm-header--hide';
            options.minimize.desktop.off = 'm-header--show';
        } else {
            options.minimize.desktop = false;
        }

        if (header.data('minimize-offset')) {
            options.offset.desktop = header.data('minimize-offset');
        }

        if (header.data('minimize-mobile-offset')) {
            options.offset.mobile = header.data('minimize-mobile-offset');
        }        

        header.mHeader(options);
    }

    // handle horizontal menu
    var initHorMenu = function() { 
        // init aside left offcanvas
        horMenuOffcanvas = $('#m_header_menu').mOffcanvas({
            class: 'm-aside-header-menu-mobile',
            overlay: true,
            close: '#m_aside_header_menu_mobile_close_btn',
            toggle: {
                target: '#m_aside_header_menu_mobile_toggle',
                state: 'm-brand__toggler--active'
            }            
        });
        
        horMenu = $('#m_header_menu').mMenu({
            // submenu modes
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            // resize menu on window resize
            resize: {
                desktop: function() {
                    var headerNavWidth = $('#m_header_nav').width();
                    var headerMenuWidth = $('#m_header_menu_container').width();
                    var headerTopbarWidth = $('#m_header_topbar').width();
                    var spareWidth = 20;

                    if ((headerMenuWidth + headerTopbarWidth + spareWidth) > headerNavWidth ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }    
        });
    }

    // handle vertical menu
    var initLeftAsideMenu = function() {
        var menu = $('#m_ver_menu');

        // init aside menu
        var menuOptions = {  
            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: (menu.data('menu-dropdown') == true ? 'dropdown' : 'accordion'),
                    // whenever body has this class switch the menu mode to dropdown
                    state: {
                        body: 'm-aside-left--minimize',  
                        mode: 'dropdown'
                    }
                },
                tablet: 'accordion', // menu set to accordion in tablet mode
                mobile: 'accordion'  // menu set to accordion in mobile mode
            },

            //accordion setup
            accordion: {
                autoScroll: true,
                expandAll: false
            }
        };

        asideMenu = menu.mMenu(menuOptions);

        // handle fixed aside menu
        if (menu.data('menu-scrollable')) {
            function initScrollableMenu(obj) {    
                if (mUtil.isInResponsiveRange('tablet-and-mobile')) {
                    // destroy if the instance was previously created
                    mApp.destroyScroller(obj);
                    return;
                }

                var height = mUtil.getViewPort().height - $('.m-header').outerHeight()
                    - ($('.m-aside-left .m-aside__header').length != 0 ? $('.m-aside-left .m-aside__header').outerHeight() : 0)
                    - ($('.m-aside-left .m-aside__footer').length != 0 ? $('.m-aside-left .m-aside__footer').outerHeight() : 0);
                    //- $('.m-footer').outerHeight(); 

                // create/re-create a new instance
                mApp.initScroller(obj, {height: height});
            }

            initScrollableMenu(asideMenu);
            
            mUtil.addResizeHandler(function() {            
                initScrollableMenu(asideMenu);
            });   
        }      
    }

    // handle vertical menu
    var initLeftAside = function() {
        // init aside left offcanvas
        var asideOffcanvasClass = ($('#m_aside_left').hasClass('m-aside-left--offcanvas-default') ? 'm-aside-left--offcanvas-default' : 'm-aside-left');

        asideMenuOffcanvas = $('#m_aside_left').mOffcanvas({
            class: asideOffcanvasClass,
            overlay: true,
            close: '#m_aside_left_close_btn',
            toggle: {
                target: '#m_aside_left_offcanvas_toggle',
                state: 'm-brand__toggler--active'                
            }            
        });        
    }

    // handle sidebar toggle
    var initLeftAsideToggle = function() {
        var asideLeftToggle = $('#m_aside_left_minimize_toggle').mToggle({
            target: 'body',
            targetState: 'm-brand--minimize m-aside-left--minimize',
            togglerState: 'm-brand__toggler--active'
        }).on('toggle', function(toggle) {
            horMenu.pauseDropdownHover(800);
            asideMenu.pauseDropdownHover(800);

            //== Remember state in cookie
            Cookies.set('sidebar_toggle_state', toggle.getState());
        });

        //== Example: minimize the left aside on page load
        //== asideLeftToggle.toggleOn();

        $('#m_aside_left_hide_toggle').mToggle({
            target: 'body',
            targetState: 'm-aside-left--hide',
            togglerState: 'm-brand__toggler--active'
        }).on('toggle', function() {
            horMenu.pauseDropdownHover(800);
            asideMenu.pauseDropdownHover(800);
        })
    }

    var initTopbar = function() {
        $('#m_aside_header_topbar_mobile_toggle').click(function() {
            $('body').toggleClass('m-topbar--on');
        });                                  

        // Animated Notification Icon 
        setInterval(function() {
            $('#m_topbar_notification_icon .m-nav__link-icon').addClass('m-animate-shake');
            $('#m_topbar_notification_icon .m-nav__link-badge').addClass('m-animate-blink');
        }, 3000);

        setInterval(function() {
            $('#m_topbar_notification_icon .m-nav__link-icon').removeClass('m-animate-shake');
            $('#m_topbar_notification_icon .m-nav__link-badge').removeClass('m-animate-blink');
        }, 6000);
    }

    // handle quick search
    var initQuicksearch = function() {
        var qs = $('#m_quicksearch');

        qs.mQuicksearch({
            type: qs.data('search-type'), // quick search type
            source: 'inc/api/quick_search.php',            
            spinner: 'm-loader m-loader--skin-light m-loader--right',

            input: '#m_quicksearch_input',
            iconClose: '#m_quicksearch_close',
            iconCancel: '#m_quicksearch_cancel',
            iconSearch: '#m_quicksearch_search',

            hasResultClass: 'm-list-search--has-result',
            minLength: 1,            
            templates: {
                error: function(qs) {
                    return '<div class="m-search-results m-search-results--skin-light"><span class="m-search-result__message">Something went wrong</div></div>';
                }                            
            }
        });      
    }

    var initScrollTop = function() {
        $('[data-toggle="m-scroll-top"]').mScrollTop({
            offset: 300,
            speed: 600
        });
    }

    return {
        init: function() {  
            this.initHeader();
            this.initAside();
        },

        initHeader: function() {
            initStickyHeader();
            initHorMenu();
            initTopbar();
            initQuicksearch();
            initScrollTop();
        },

        initAside: function() {
            initLeftAside();
            initLeftAsideMenu();            
            initLeftAsideToggle();

            this.onLeftSidebarToggle(function(e) {
              var datatables = $('.m-datatable');
              $(datatables).each(function() {
                $(this).mDatatable('redraw');
              });
            });
        },

        getAsideMenu: function() {
            return asideMenu;
        },

        onLeftSidebarToggle: function(func) {
            $('#m_aside_left_minimize_toggle').mToggle().on('toggle', func);
        },

        closeMobileAsideMenuOffcanvas: function() {
            if (mUtil.isMobileDevice()) {
                asideMenuOffcanvas.hide();
            }
        },

        closeMobileHorMenuOffcanvas: function() {
            if (mUtil.isMobileDevice()) {
                horMenuOffcanvas.hide();
            }
        }
    };
}();

$(document).ready(function() {
    if (mUtil.isAngularVersion() === false) {
        mLayout.init();
    }
});


var mQuickSidebar = function() {
    var topbarAside = $('#m_quick_sidebar');
    var topbarAsideTabs = $('#m_quick_sidebar_tabs');    
    var topbarAsideClose = $('#m_quick_sidebar_close');
    var topbarAsideToggle = $('#m_quick_sidebar_toggle');
    var topbarAsideContent = topbarAside.find('.m-quick-sidebar__content');

    var initMessages = function() {
        var messenger = $('#m_quick_sidebar_tabs_messenger');  

        if (messenger.length === 0) {
            return;
        }

        var messengerMessages = messenger.find('.m-messenger__messages');

        var init = function() {
            var height = topbarAside.outerHeight(true) - 
                topbarAsideTabs.outerHeight(true) - 
                messenger.find('.m-messenger__form').outerHeight(true) - 120;
            
            // init messages scrollable content
            messengerMessages.css('height', height);
            mApp.initScroller(messengerMessages, {});
        }

        init();        
        
        // reinit on window resize
        mUtil.addResizeHandler(init);
    }

    var initSettings = function() { 
        var settings = $('#m_quick_sidebar_tabs_settings');

        if (settings.length === 0) {
            return;
        }

        // init dropdown tabbable content
        var init = function() {
            var height = mUtil.getViewPort().height - topbarAsideTabs.outerHeight(true) - 60;

            // init settings scrollable content
            settings.css('height', height);
            mApp.initScroller(settings, {});
        }

        init();

        // reinit on window resize
        mUtil.addResizeHandler(init);
    }

    var initLogs = function() {
        // init dropdown tabbable content
        var logs = $('#m_quick_sidebar_tabs_logs');

        if (logs.length === 0) {
            return;
        }

        var init = function() {
            var height = mUtil.getViewPort().height - topbarAsideTabs.outerHeight(true) - 60;

            // init settings scrollable content
            logs.css('height', height);
            mApp.initScroller(logs, {});
        }

        init();

        // reinit on window resize
        mUtil.addResizeHandler(init);
    }

    var initOffcanvasTabs = function() {
        initMessages();
        initSettings();
        initLogs();
    }

    var initOffcanvas = function() {
        topbarAside.mOffcanvas({
            class: 'm-quick-sidebar',
            overlay: true,  
            close: topbarAsideClose,
            toggle: topbarAsideToggle
        });   

        // run once on first time dropdown shown
        topbarAside.mOffcanvas().one('afterShow', function() {
            mApp.block(topbarAside);

            setTimeout(function() {
                mApp.unblock(topbarAside);
                
                topbarAsideContent.removeClass('m--hide');

                initOffcanvasTabs();
            }, 1000);                         
        });
    }

    return {     
        init: function() {  
            if (topbarAside.length === 0) {
                return;
            }

            initOffcanvas(); 
        }
    };
}();

$(document).ready(function() {
    mQuickSidebar.init();
});
//== Class definition

var ActionsDemo = function () {    
    //== Private functions

    return {
        // public functions
        init: function() {
            $('.summernote').summernote({
                height: 250, 
            });
        }
    };
}();

//== Initialization
jQuery(document).ready(function() {
    ActionsDemo.init();
});
//== Class definition

var BlockUIDemo = function () {
    
    //== Private functions

    //== Basic demo
    var demo1 = function () {
        // default
        $('#m_blockui_1_1').click(function() {
            mApp.block('#m_blockui_1_content', {});

            setTimeout(function() {
                mApp.unblock('#m_blockui_1_content');
            }, 2000);
        });

        $('#m_blockui_1_2').click(function() {
            mApp.block('#m_blockui_1_content', {
                overlayColor: '#000000',
                state: 'primary'
            });  

            setTimeout(function() {
                mApp.unblock('#m_blockui_1_content');
            }, 2000);
        });

        $('#m_blockui_1_3').click(function() {
            mApp.block('#m_blockui_1_content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                size: 'lg'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_1_content');
            }, 2000);
        });

        $('#m_blockui_1_4').click(function() {
            mApp.block('#m_blockui_1_content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                message: 'Please wait...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_1_content');
            }, 2000);
        });

        $('#m_blockui_1_5').click(function() {
            mApp.block('#m_blockui_1_content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'primary',
                message: 'Processing...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_1_content');
            }, 2000);
        });
    }

    // portlet blocking
    var demo2 = function () {
        // default
        $('#m_blockui_2_1').click(function() {
            mApp.block('#m_blockui_2_portlet', {});

            setTimeout(function() {
                mApp.unblock('#m_blockui_2_portlet');
            }, 2000);
        });

        $('#m_blockui_2_2').click(function() {
            mApp.block('#m_blockui_2_portlet', {
                overlayColor: '#000000',
                state: 'primary'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_2_portlet');
            }, 2000);
        });

        $('#m_blockui_2_3').click(function() {
            mApp.block('#m_blockui_2_portlet', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                size: 'lg'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_2_portlet');
            }, 2000);
        });

        $('#m_blockui_2_4').click(function() {
            mApp.block('#m_blockui_2_portlet', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                message: 'Please wait...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_2_portlet');
            }, 2000);
        });

        $('#m_blockui_2_5').click(function() {
            mApp.block('#m_blockui_2_portlet', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'primary',
                message: 'Processing...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_2_portlet');
            }, 2000);
        });
    }

    // page blocking
    var demo3 = function () {
        // default
        $('#m_blockui_3_1').click(function() {
            mApp.blockPage();

            setTimeout(function() {
                mApp.unblockPage();
            }, 2000);
        });

        $('#m_blockui_3_2').click(function() {
            mApp.blockPage({
                overlayColor: '#000000',
                state: 'primary'
            });

            setTimeout(function() {
                mApp.unblockPage();
            }, 2000);
        });

        $('#m_blockui_3_3').click(function() {
            mApp.blockPage({
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                size: 'lg'
            });

            setTimeout(function() {
                mApp.unblockPage();
            }, 2000);
        });

        $('#m_blockui_3_4').click(function() {
            mApp.blockPage({
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                message: 'Please wait...'
            });

            setTimeout(function() {
                mApp.unblockPage();
            }, 2000);
        });

        $('#m_blockui_3_5').click(function() {
            mApp.blockPage({
                overlayColor: '#000000',
                type: 'loader',
                state: 'primary',
                message: 'Processing...'
            });

            setTimeout(function() {
                mApp.unblockPage();
            }, 2000);
        });
    }

    // modal blocking
    var demo4 = function () {
        // default
        $('#m_blockui_4_1').click(function() {
            mApp.block('#m_blockui_4_1_modal .modal-content', {});

            setTimeout(function() {
                mApp.unblock('#m_blockui_4_1_modal .modal-content');
            }, 2000);
        });

        $('#m_blockui_4_2').click(function() {
            mApp.block('#m_blockui_4_2_modal .modal-content', {
                overlayColor: '#000000',
                state: 'primary'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_4_2_modal .modal-content');
            }, 2000);
        });

        $('#m_blockui_4_3').click(function() {
            mApp.block('#m_blockui_4_3_modal .modal-content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                size: 'lg'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_4_3_modal .modal-content');
            }, 2000);
        });

        $('#m_blockui_4_4').click(function() {
            mApp.block('#m_blockui_4_4_modal .modal-content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
                message: 'Please wait...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_4_4_modal .modal-content');
            }, 2000);
        });

        $('#m_blockui_4_5').click(function() {
            mApp.block('#m_blockui_4_5_modal .modal-content', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'primary',
                message: 'Processing...'
            });

            setTimeout(function() {
                mApp.unblock('#m_blockui_4_5_modal .modal-content');
            }, 2000);
        });
    }

    return {
        // public functions
        init: function() {
            demo1();
            demo2(); 
            demo3(); 
            demo4(); 
        }
    };
}();

jQuery(document).ready(function() {    
    BlockUIDemo.init();
});
//== Class definition

var BootstrapNotifyDemo = function () {
    
    //== Private functions

    // basic demo
    var demo = function () {
        // init bootstrap switch
        $('[data-switch=true]').bootstrapSwitch();

        // handle the demo
        $('#m_notify_btn').click(function() {
            var content = {};

            content.message = 'New order has been placed';
            if ($('#m_notify_title').prop('checked')) {
                content.title = 'Notification Title';
            }
            if ($('#m_notify_icon').val() != '') {
                content.icon = 'icon ' + $('#m_notify_icon').val();
            }
            if ($('#m_notify_url').prop('checked')) {
                content.url = 'www.keenthemes.com';
                content.target = '_blank';
            }

            var notify = $.notify(content, { 
                type: $('#m_notify_state').val(),
                allow_dismiss: $('#m_notify_dismiss').prop('checked'),
                newest_on_top: $('#m_notify_top').prop('checked'),
                mouse_over:  $('#m_notify_pause').prop('checked'),
                showProgressbar:  $('#m_notify_progress').prop('checked'),
                spacing: $('#m_notify_spacing').val(),                    
                timer: $('#m_notify_timer').val(),
                placement: {
                    from: $('#m_notify_placement_from').val(), 
                    align: $('#m_notify_placement_align').val()
                },
                offset: {
                    x: $('#m_notify_offset_x').val(), 
                    y: $('#m_notify_offset_y').val()
                },
                delay: $('#m_notify_delay').val(),
                z_index: $('#m_notify_zindex').val(),
                animate: {
                    enter: 'animated ' + $('#m_notify_animate_enter').val(),
                    exit: 'animated ' + $('#m_notify_animate_exit').val()
                }
            });

            if ($('#m_notify_progress').prop('checked')) {
                setTimeout(function() {
                    notify.update('message', '<strong>Saving</strong> Page Data.');
                    notify.update('type', 'primary');
                    notify.update('progress', 20);
                }, 1000);

                setTimeout(function() {
                    notify.update('message', '<strong>Saving</strong> User Data.');
                    notify.update('type', 'warning');
                    notify.update('progress', 40);
                }, 2000);

                setTimeout(function() {
                    notify.update('message', '<strong>Saving</strong> Profile Data.');
                    notify.update('type', 'danger');
                    notify.update('progress', 65);
                }, 3000);

                setTimeout(function() {
                    notify.update('message', '<strong>Checking</strong> for errors.');
                    notify.update('type', 'success');
                    notify.update('progress', 100);
                }, 4000);
            }
        });
    }

    return {
        // public functions
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {    
    BootstrapNotifyDemo.init();
});
//== Class definition

var DropdownDemo = function () {
    
    //== Private functions

    // basic demo
    var demo1 = function () {
        var output = $('#m_dropdown_api_output');
        var dropdown1 = $('#m_dropdown_api_1');
        var dropdown2 = $('#m_dropdown_api_2');

        dropdown1.mDropdown().on('afterShow', function(dropdown) {
            output.append('<p>Dropdown 1: afterShow event fired</p>');
        });
        dropdown1.mDropdown().on('beforeShow', function(dropdown) {
            output.append('<p>Dropdown 1: beforeShow event fired</p>');
        });
        dropdown1.mDropdown().on('afterHide', function(dropdown) {
            output.append('<p>Dropdown 1: afterHide event fired</p>');
        });
        dropdown1.mDropdown().on('beforeHide', function(dropdown) {
            output.append('<p>Dropdown 1: beforeHide event fired</p>');
        });
    
        dropdown2.mDropdown().on('afterShow', function(dropdown) {
            output.append('<p>Dropdown 2: afterShow event fired</p>');
        });
        dropdown2.mDropdown().on('beforeShow', function(dropdown) {
            output.append('<p>Dropdown 2: beforeShow event fired</p>');
        });
        dropdown2.mDropdown().on('afterHide', function(dropdown) {
            output.append('<p>Dropdown 2: afterHide event fired</p>');
        });
        dropdown2.mDropdown().on('beforeHide', function(dropdown) {
            output.append('<p>Dropdown 2: beforeHide event fired</p>');
        });    
    }

    return {
        // public functions
        init: function() {
            demo1();
        }
    };
}();

jQuery(document).ready(function() {    
    DropdownDemo.init();
});
//== Class definition

var Scrollable = function () {
    
    //== Private functions

    // basic demo
    var demo1 = function () {
    }

    return {
        // public functions
        init: function() {
            demo1();
        }
    };
}();

jQuery(document).ready(function() {    
    Scrollable.init();
});
//== Class definition
var SweetAlert2Demo = function() {

    //== Demos
    var initDemos = function() {
        //== Sweetalert Demo 1
        $('#m_sweetalert_demo_1').click(function(e) {
            swal('Good job!');
        });

        //== Sweetalert Demo 2
        $('#m_sweetalert_demo_2').click(function(e) {
            swal("Here's the title!", "...and here's the text!");
        });

        //== Sweetalert Demo 3
        $('#m_sweetalert_demo_3_1').click(function(e) {
            swal("Good job!", "You clicked the button!", "warning");
        });

        $('#m_sweetalert_demo_3_2').click(function(e) {
            swal("Good job!", "You clicked the button!", "error");
        });

        $('#m_sweetalert_demo_3_3').click(function(e) {
            swal("Good job!", "You clicked the button!", "success");
        });

        $('#m_sweetalert_demo_3_4').click(function(e) {
            swal("Good job!", "You clicked the button!", "info");
        });

        $('#m_sweetalert_demo_3_5').click(function(e) {
            swal("Good job!", "You clicked the button!", "question");
        });

        //== Sweetalert Demo 4
        $('#m_sweetalert_demo_4').click(function(e) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                confirmButtonText: "Confirm me!",
                confirmButtonClass: "btn btn-focus m-btn m-btn--pill m-btn--air"
            });
        });

        //== Sweetalert Demo 5
        $('#m_sweetalert_demo_5').click(function(e) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",

                confirmButtonText: "<span><i class='la la-headphones'></i><span>I am game!</span></span>",
                confirmButtonClass: "btn btn-danger m-btn m-btn--pill m-btn--air m-btn--icon",

                showCancelButton: true,
                cancelButtonText: "<span><i class='la la-thumbs-down'></i><span>No, thanks</span></span>",
                cancelButtonClass: "btn btn-secondary m-btn m-btn--pill m-btn--icon"
            });
        });

        $('#m_sweetalert_demo_6').click(function(e) {
            swal({
                position: 'top-right',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        });

        $('#m_sweetalert_demo_7').click(function(e) {
            swal({
                title: 'jQuery HTML example',
                html: $('<div>')
                    .addClass('some-class')
                    .text('jQuery is everywhere.'),
                animation: false,
                customClass: 'animated tada'
            })
        });

        $('#m_sweetalert_demo_8').click(function(e) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(function(result) {
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_9').click(function(e) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then(function(result){
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    // result.dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                } else if (result.dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_10').click(function(e) {
            swal({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            });
        });

        $('#m_sweetalert_demo_11').click(function(e) {
            swal({
                title: 'Auto close alert!',
                text: 'I will close in 5 seconds.',
                timer: 5000,
                onOpen: function() {
                    swal.showLoading()
                }
            }).then(function(result) {
                if (result.dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            })
        });
    };

    return {
        //== Init
        init: function() {
            initDemos();
        },
    };
}();

//== Class Initialization
jQuery(document).ready(function() {
    SweetAlert2Demo.init();
});
//== Class definition
var ToastrDemo = function() {

    //== Private functions

    // basic demo
    var demo = function() {
        var i = -1;
        var toastCount = 0;
        var $toastlast;

        var getMessage = function () {
            var msgs = [
                'New order has been placed!',
                'Are you the six fingered man?',
                'Inconceivable!',
                'I do not think that means what you think it means.',
                'Have fun storming the castle!'
            ];
            i++;
            if (i === msgs.length) {
                i = 0;
            }

            return msgs[i];
        };

        var getMessageWithClearButton = function (msg) {
            msg = msg ? msg : 'Clear itself?';
            msg += '<br /><br /><button type="button" class="btn btn-outline-light btn-sm m-btn m-btn--air m-btn--wide clear">Yes</button>';
            return msg;
        };

        $('#showtoast').click(function () {
            var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
            var msg = $('#message').val();
            var title = $('#title').val() || '';
            var $showDuration = $('#showDuration');
            var $hideDuration = $('#hideDuration');
            var $timeOut = $('#timeOut');
            var $extendedTimeOut = $('#extendedTimeOut');
            var $showEasing = $('#showEasing');
            var $hideEasing = $('#hideEasing');
            var $showMethod = $('#showMethod');
            var $hideMethod = $('#hideMethod');
            var toastIndex = toastCount++;
            var addClear = $('#addClear').prop('checked');

            toastr.options = {
                closeButton: $('#closeButton').prop('checked'),
                debug: $('#debugInfo').prop('checked'),
                newestOnTop: $('#newestOnTop').prop('checked'),
                progressBar: $('#progressBar').prop('checked'),
                positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
                preventDuplicates: $('#preventDuplicates').prop('checked'),
                onclick: null
            };

            if ($('#addBehaviorOnToastClick').prop('checked')) {
                toastr.options.onclick = function () {
                    alert('You can perform some custom action after a toast goes away');
                };
            }

            if ($showDuration.val().length) {
                toastr.options.showDuration = $showDuration.val();
            }

            if ($hideDuration.val().length) {
                toastr.options.hideDuration = $hideDuration.val();
            }

            if ($timeOut.val().length) {
                toastr.options.timeOut = addClear ? 0 : $timeOut.val();
            }

            if ($extendedTimeOut.val().length) {
                toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
            }

            if ($showEasing.val().length) {
                toastr.options.showEasing = $showEasing.val();
            }

            if ($hideEasing.val().length) {
                toastr.options.hideEasing = $hideEasing.val();
            }

            if ($showMethod.val().length) {
                toastr.options.showMethod = $showMethod.val();
            }

            if ($hideMethod.val().length) {
                toastr.options.hideMethod = $hideMethod.val();
            }

            if (addClear) {
                msg = getMessageWithClearButton(msg);
                toastr.options.tapToDismiss = false;
            }
            if (!msg) {
                msg = getMessage();
            }

            $('#toastrOptions').text(
                    'toastr.options = '
                    + JSON.stringify(toastr.options, null, 2)
                    + ';'
                    + '\n\ntoastr.'
                    + shortCutFunction
                    + '("'
                    + msg
                    + (title ? '", "' + title : '')
                    + '");'
            );

            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
            $toastlast = $toast;

            if(typeof $toast === 'undefined'){
                return;
            }

            if ($toast.find('#okBtn').length) {
                $toast.delegate('#okBtn', 'click', function () {
                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                    $toast.remove();
                });
            }
            if ($toast.find('#surpriseBtn').length) {
                $toast.delegate('#surpriseBtn', 'click', function () {
                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                });
            }
            if ($toast.find('.clear').length) {
                $toast.delegate('.clear', 'click', function () {
                    toastr.clear($toast, { force: true });
                });
            }
        });

        function getLastToast(){
            return $toastlast;
        }
        $('#clearlasttoast').click(function () {
            toastr.clear(getLastToast());
        });
        $('#cleartoasts').click(function () {
            toastr.clear();
        });
    }

    return {
        // public functions
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {
    ToastrDemo.init();
});
var Treeview = function () {

    var demo1 = function () {
        $('#m_tree_1').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }            
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder"
                },
                "file" : {
                    "icon" : "fa fa-file"
                }
            },
            "plugins": ["types"]
        });
    }

    var demo2 = function () {
        $('#m_tree_2').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }            
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder m--font-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  m--font-warning"
                }
            },
            "plugins": ["types"]
        });

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#m_tree_2').on('select_node.jstree', function(e,data) { 
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    var demo3 = function () {
        $('#m_tree_3').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },    
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning m--font-danger"
                        }, {
                            "text": "initially open",
                            "icon" : "fa fa-folder m--font-default",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning m--font-waring"
                        }, {
                            "text": "disabled node",
                            "icon": "fa fa-check m--font-success",
                            "state": {
                                "disabled": true
                            }
                        }]
                    },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder m--font-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  m--font-warning"
                }
            },
        });
    }

    var demo4 = function() {
        $("#m_tree_4").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "fa fa-warning m--font-danger"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder m--font-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file m--font-waring"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "fa fa-warning m--font-waring"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check m--font-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder m--font-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file m--font-waring"},
                                {"text": "Item 2", "icon" : "fa fa-file m--font-success"},
                                {"text": "Item 3", "icon" : "fa fa-file m--font-default"},
                                {"text": "Item 4", "icon" : "fa fa-file m--font-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file m--font-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder m--font-brand"
                },
                "file" : {
                    "icon" : "fa fa-file  m--font-brand"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "state", "types" ]
        });    
    }

    var demo5 = function() {
        $("#m_tree_5").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "fa fa-warning m--font-danger"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder m--font-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file m--font-waring"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "fa fa-warning m--font-waring"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check m--font-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder m--font-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file m--font-waring"},
                                {"text": "Item 2", "icon" : "fa fa-file m--font-success"},
                                {"text": "Item 3", "icon" : "fa fa-file m--font-default"},
                                {"text": "Item 4", "icon" : "fa fa-file m--font-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file m--font-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder m--font-success"
                },
                "file" : {
                    "icon" : "fa fa-file  m--font-success"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "dnd", "state", "types" ]
        });    
    }

    var demo6 = function() {
        $("#m_tree_6").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }, 
                // so that create works
                "check_callback" : true,
                'data' : {
                    'url' : function (node) {
                      return 'inc/api/jstree/ajax_data.php';
                    },
                    'data' : function (node) {
                      return { 'parent' : node.id };
                    }
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder m--font-brand"
                },
                "file" : {
                    "icon" : "fa fa-file  m--font-brand"
                }
            },
            "state" : { "key" : "demo3" },
            "plugins" : [ "dnd", "state", "types" ]
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
        }
    };
}();

jQuery(document).ready(function() {    
    Treeview.init();
});
var CalendarBackgroundEvents = function() {

    return {
        //main function to initiate the module
        init: function() {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

            $('#m_calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listWeek'
                },
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                businessHours: true, // display business hours

                events: [
                    {
                        title: 'All Day Event',
                        start: YM + '-01',
                        description: 'Lorem ipsum dolor sit incid idunt ut',
                        className: "m-fc-event--danger m-fc-event--solid-success"
                    },
                    {
                        title: 'Reporting',
                        start: YM + '-14T13:30:00',
                        description: 'Lorem ipsum dolor incid idunt ut labore',
                        end: YM + '-14',
                        className: "m-fc-event--accent",
                        constraint: 'businessHours'
                    },
                    {
                        title: 'Company Trip',
                        start: YM + '-02',
                        description: 'Lorem ipsum dolor sit tempor incid',
                        end: YM + '-03',
                        className: "m-fc-event--light m-fc-event--solid-primary"
                    },
                    {
                        title: 'Expo',
                        start: YM + '-03',
                        description: 'Lorem ipsum dolor sit tempor inci',
                        end: YM + '-05',
                        className: "m-fc-event--primary",
                        rendering: 'background',
                        color: mUtil.getColor('accent')
                    },
                    {
                        title: 'Dinner',
                        start: YM + '-12',
                        description: 'Lorem ipsum dolor sit amet, conse ctetur',
                        end: YM + '-10',
                        rendering: 'background',
                        color: mUtil.getColor('info')
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: YM + '-09T16:00:00',
                        description: 'Lorem ipsum dolor sit ncididunt ut labore',
                        className: "m-fc-event--danger",
                        color: mUtil.getColor('primary')
                    },
                    {
                        id: 1000,
                        title: 'Repeating Event',
                        description: 'Lorem ipsum dolor sit amet, labore',
                        start: YM + '-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: YESTERDAY,
                        end: TOMORROW,
                        description: 'Lorem ipsum dolor eius mod tempor labore',
                        className: "m-fc-event--accent",
                        rendering: 'background',
                        color: mUtil.getColor('metal')
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T10:30:00',
                        end: TODAY + 'T12:30:00',
                        description: 'Lorem ipsum dolor eiu idunt ut labore'
                    },
                    {
                        title: 'Lunch',
                        start: TODAY + 'T12:00:00',
                        className: "m-fc-event--info",
                        description: 'Lorem ipsum dolor sit amet, ut labore'
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T14:30:00',
                        className: "m-fc-event--warning",
                        description: 'Lorem ipsum conse ctetur adipi scing',
                        rendering: 'background',
                        color: mUtil.getColor('warning')
                    },
                    {
                        title: 'Happy Hour',
                        start: TODAY + 'T17:30:00',
                        className: "m-fc-event--metal",
                        description: 'Lorem ipsum dolor sit amet, conse ctetur'
                    },
                    {
                        title: 'Dinner',
                        start: TODAY + 'T20:00:00',
                        description: 'Lorem ipsum dolor sit ctetur adipi scing'
                    },
                    {
                        title: 'Birthday Party',
                        start: TOMORROW + 'T07:00:00',
                        className: "m-fc-event--primary",
                        description: 'Lorem ipsum dolor sit amet, scing',
                        rendering: 'background',
                        color: mUtil.getColor('focus')
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: YM + '-28',
                        description: 'Lorem ipsum dolor sit amet, labore'
                    }
                ],

                eventRender: function(event, element) {
                    if (element.hasClass('fc-day-grid-event')) {
                        element.data('content', event.description);
                        element.data('placement', 'top');
                        mApp.initPopover(element); 
                    } else if (element.hasClass('fc-time-grid-event')) {
                        element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    } else if (element.find('.fc-list-item-title').lenght !== 0) {
                        element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    }
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    CalendarBackgroundEvents.init();
});
var CalendarBasic = function() {

    return {
        //main function to initiate the module
        init: function() {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

            $('#m_calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listWeek'
                },
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: YM + '-01',
                        description: 'Lorem ipsum dolor sit incid idunt ut',
                        className: "m-fc-event--danger m-fc-event--solid-warning"  
                    },
                    {
                        title: 'Reporting',
                        start: YM + '-14T13:30:00',
                        description: 'Lorem ipsum dolor incid idunt ut labore',
                        end: YM + '-14',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'Company Trip',
                        start: YM + '-02',
                        description: 'Lorem ipsum dolor sit tempor incid',
                        end: YM + '-03',
                        className: "m-fc-event--primary"
                    },
                    {
                        title: 'ICT Expo 2017 - Product Release',
                        start: YM + '-03',
                        description: 'Lorem ipsum dolor sit tempor inci',
                        end: YM + '-05',
                        className: "m-fc-event--light m-fc-event--solid-primary"
                    },
                    {
                        title: 'Dinner',
                        start: YM + '-12',
                        description: 'Lorem ipsum dolor sit amet, conse ctetur',
                        end: YM + '-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: YM + '-09T16:00:00',
                        description: 'Lorem ipsum dolor sit ncididunt ut labore',
                        className: "m-fc-event--danger"
                    },
                    {
                        id: 1000,
                        title: 'Repeating Event',
                        description: 'Lorem ipsum dolor sit amet, labore',
                        start: YM + '-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: YESTERDAY,
                        end: TOMORROW,
                        description: 'Lorem ipsum dolor eius mod tempor labore',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T10:30:00',
                        end: TODAY + 'T12:30:00',
                        description: 'Lorem ipsum dolor eiu idunt ut labore'
                    },
                    {
                        title: 'Lunch',
                        start: TODAY + 'T12:00:00',
                        className: "m-fc-event--info",
                        description: 'Lorem ipsum dolor sit amet, ut labore'
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T14:30:00',
                        className: "m-fc-event--warning",
                        description: 'Lorem ipsum conse ctetur adipi scing'
                    },
                    {
                        title: 'Happy Hour',
                        start: TODAY + 'T17:30:00',
                        className: "m-fc-event--metal",
                        description: 'Lorem ipsum dolor sit amet, conse ctetur'
                    },
                    {
                        title: 'Dinner',
                        start: TODAY + 'T20:00:00',
                        className: "m-fc-event--solid-focus m-fc-event--light",
                        description: 'Lorem ipsum dolor sit ctetur adipi scing'
                    },
                    {
                        title: 'Birthday Party',
                        start: TOMORROW + 'T07:00:00',
                        className: "m-fc-event--primary",
                        description: 'Lorem ipsum dolor sit amet, scing'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: YM + '-28',
                        className: "m-fc-event--solid-info m-fc-event--light",
                        description: 'Lorem ipsum dolor sit amet, labore'
                    }
                ],

                eventRender: function(event, element) {
                    if (element.hasClass('fc-day-grid-event')) {
                        element.data('content', event.description);
                        element.data('placement', 'top');
                        mApp.initPopover(element); 
                    } else if (element.hasClass('fc-time-grid-event')) {
                        element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    } else if (element.find('.fc-list-item-title').lenght !== 0) {
                        element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    }
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    CalendarBasic.init();
});
var CalendarExternalEvents = function() {

    var initExternalEvents = function() {
        $('#m_calendar_external_events .fc-event').each(function() {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true, // maintain when user navigates (see docs on the renderEvent method)
                className: $(this).data('color'),
                description: 'Lorem ipsum dolor eius mod tempor labore'
            });

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });
        });
    }

    var initCalendar = function() {
        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        var calendar = $('#m_calendar');

        calendar.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            eventLimit: true, // allow "more" link when too many events
            navLinks: true,
            events: [
                {
                    title: 'All Day Event',
                    start: YM + '-01',
                    description: 'Lorem ipsum dolor sit incid idunt ut',
                    className: "m-fc-event--success"
                },
                {
                    title: 'Reporting',
                    start: YM + '-14T13:30:00',
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    end: YM + '-14',
                    className: "m-fc-event--accent"
                },
                {
                    title: 'Company Trip',
                    start: YM + '-02',
                    description: 'Lorem ipsum dolor sit tempor incid',
                    end: YM + '-03',
                    className: "m-fc-event--primary"
                },
                {
                    title: 'Expo',
                    start: YM + '-03',
                    description: 'Lorem ipsum dolor sit tempor inci',
                    end: YM + '-05',
                    className: "m-fc-event--primary"
                },
                {
                    title: 'Dinner',
                    start: YM + '-12',
                    description: 'Lorem ipsum dolor sit amet, conse ctetur',
                    end: YM + '-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: YM + '-09T16:00:00',
                    description: 'Lorem ipsum dolor sit ncididunt ut labore',
                    className: "m-fc-event--danger"
                },
                {
                    id: 1000,
                    title: 'Repeating Event',
                    description: 'Lorem ipsum dolor sit amet, labore',
                    start: YM + '-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: YESTERDAY,
                    end: TOMORROW,
                    description: 'Lorem ipsum dolor eius mod tempor labore',
                    className: "m-fc-event--accent"
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T10:30:00',
                    end: TODAY + 'T12:30:00',
                    description: 'Lorem ipsum dolor eiu idunt ut labore'
                },
                {
                    title: 'Lunch',
                    start: TODAY + 'T12:00:00',
                    className: "m-fc-event--info",
                    description: 'Lorem ipsum dolor sit amet, ut labore'
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T14:30:00',
                    className: "m-fc-event--warning",
                    description: 'Lorem ipsum conse ctetur adipi scing'
                },
                {
                    title: 'Happy Hour',
                    start: TODAY + 'T17:30:00',
                    className: "m-fc-event--metal",
                    description: 'Lorem ipsum dolor sit amet, conse ctetur'
                },
                {
                    title: 'Dinner',
                    start: TODAY + 'T20:00:00',
                    description: 'Lorem ipsum dolor sit ctetur adipi scing'
                },
                {
                    title: 'Birthday Party',
                    start: TOMORROW + 'T07:00:00',
                    className: "m-fc-event--primary",
                    description: 'Lorem ipsum dolor sit amet, scing'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: YM + '-28',
                    description: 'Lorem ipsum dolor sit amet, labore'
                }
            ],

            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar

            drop: function(date, jsEvent, ui, resourceId) {
                var sdate = $.fullCalendar.moment(date.format());  // Create a clone of the dropped date.
                sdate.stripTime();        // The time should already be stripped but lets do a sanity check.
                sdate.time('08:00:00');   // Set a default start time.

                var edate = $.fullCalendar.moment(date.format());  // Create a clone.
                edate.stripTime();        // Sanity check.
                edate.time('12:00:00');   // Set a default end time.

                $(this).data('event').start = sdate;
                $(this).data('event').end = edate;

                // is the "remove after drop" checkbox checked?
                if ($('#m_calendar_external_events_remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            },

            eventRender: function(event, element) {
                // default render
                if (element.hasClass('fc-day-grid-event')) {
                    element.data('content', event.description);
                    element.data('placement', 'top');
                    mApp.initPopover(element);
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').lenght !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>');
                }
            }
        });
    }

    return {
        //main function to initiate the module
        init: function() {
            initExternalEvents();
            initCalendar(); 
        }
    };
}();

jQuery(document).ready(function() {
    CalendarExternalEvents.init();
});
var CalendarGoogle = function() {

    return {
        //main function to initiate the module
        init: function() {

            $('#m_calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,listYear'
                },

                displayEventTime: false, // don't show the time column in list view

                // THIS KEY WON'T WORK IN PRODUCTION!!!
                // To make your own Google API key, follow the directions here:
                // http://fullcalendar.io/docs/google_calendar/
                googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',
            
                // US Holidays
                events: 'en.usa#holiday@group.v.calendar.google.com',
                
                eventClick: function(event) {
                    // opens events in a popup window
                    window.open(event.url, 'gcalevent', 'width=700,height=600');
                    return false;
                },
                
                loading: function(bool) {
                    return;

                    /*
                    mApp.block(portlet.getSelf(), {
                        type: 'loader',
                        state: 'success',
                        message: 'Please wait...'  
                    });
                    */
                },                

                eventRender: function(event, element) {
                    if (!event.description) {
                        return;
                    }
                    
                    if (element.hasClass('fc-day-grid-event')) {
                        element.data('content', event.description);
                        element.data('placement', 'top');
                        mApp.initPopover(element); 
                    } else if (element.hasClass('fc-time-grid-event')) {
                        element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    } else if (element.find('.fc-list-item-title').lenght !== 0) {
                        element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    }
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    CalendarGoogle.init();
});
var CalendarListView = function() {

    return {
        //main function to initiate the module
        init: function() {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

            $('#m_calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaDay,listWeek'
                },
                defaultView: 'listWeek',
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                height: 900,
                events: [
                    {
                        title: 'All Day Event',
                        start: YM + '-01',
                        description: 'Lorem ipsum dolor sit incid idunt ut',
                        className: "m-fc-event--success"
                    },
                    {
                        title: 'Reporting',
                        start: YM + '-14T13:30:00',
                        description: 'Lorem ipsum dolor incid idunt ut labore',
                        end: YM + '-14',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'Company Trip',
                        start: YM + '-02',
                        description: 'Lorem ipsum dolor sit tempor incid',
                        end: YM + '-03',
                        className: "m-fc-event--primary"
                    },
                    {
                        title: 'Expo',
                        start: YM + '-03',
                        description: 'Lorem ipsum dolor sit tempor inci',
                        end: YM + '-05',
                        className: "m-fc-event--primary" 
                    },
                    {
                        title: 'Dinner',
                        start: YM + '-12',
                        description: 'Lorem ipsum dolor sit amet, conse ctetur',
                        end: YM + '-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: YM + '-09T16:00:00',
                        description: 'Lorem ipsum dolor sit ncididunt ut labore',
                        className: "m-fc-event--danger"
                    },
                    {
                        id: 1000,
                        title: 'Repeating Event',
                        description: 'Lorem ipsum dolor sit amet, labore',
                        start: YM + '-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: YESTERDAY,
                        end: TOMORROW,
                        description: 'Lorem ipsum dolor eius mod tempor labore',
                        className: "m-fc-event--accent"
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T10:30:00',
                        end: TODAY + 'T12:30:00',
                        description: 'Lorem ipsum dolor eiu idunt ut labore'
                    },
                    {
                        title: 'Lunch',
                        start: TODAY + 'T12:00:00',
                        className: "m-fc-event--info",
                        description: 'Lorem ipsum dolor sit amet, ut labore'
                    },
                    {
                        title: 'Meeting',
                        start: TODAY + 'T14:30:00',
                        className: "m-fc-event--warning",
                        description: 'Lorem ipsum conse ctetur adipi scing'
                    },
                    {
                        title: 'Happy Hour',
                        start: TODAY + 'T17:30:00',
                        className: "m-fc-event--metal",
                        description: 'Lorem ipsum dolor sit amet, conse ctetur'
                    },
                    {
                        title: 'Dinner',
                        start: TODAY + 'T20:00:00',
                        description: 'Lorem ipsum dolor sit ctetur adipi scing'
                    },
                    {
                        title: 'Birthday Party',
                        start: TOMORROW + 'T07:00:00',
                        className: "m-fc-event--primary",
                        description: 'Lorem ipsum dolor sit amet, scing'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: YM + '-28',
                        description: 'Lorem ipsum dolor sit amet, labore'
                    }
                ],

                eventRender: function(event, element) {
                    if (element.hasClass('fc-day-grid-event')) {
                        element.data('content', event.description);
                        element.data('placement', 'top');
                        mApp.initPopover(element); 
                    } else if (element.hasClass('fc-time-grid-event')) {
                        element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    } else if (element.find('.fc-list-item-title').lenght !== 0) {
                        element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>'); 
                    }
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    CalendarListView.init();
});
//== Class definition
var FlotchartsDemo = function() {

    //== Private functions

    var demo1 = function() {
        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts

        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }

            return res;
        }

        var d1 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d1.push([i, Math.sin(i)]);

        var d2 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.25)
            d2.push([i, Math.cos(i)]);

        var d3 = [];
        for (var i = 0; i < Math.PI * 2; i += 0.1)
            d3.push([i, Math.tan(i)]);

        $.plot($("#m_flotcharts_1"), [{
            label: "sin(x)",
            data: d1,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "cos(x)",
            data: d2,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            label: "tan(x)",
            data: d3,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], {
            series: {
                lines: {
                    show: true,
                },
                points: {
                    show: true,
                    fill: true,
                    radius: 3,
                    lineWidth: 1
                }
            },
            xaxis: {
                tickColor: "#eee",
                ticks: [0, [Math.PI / 2, "\u03c0/2"],
                    [Math.PI, "\u03c0"],
                    [Math.PI * 3 / 2, "3\u03c0/2"],
                    [Math.PI * 2, "2\u03c0"]
                ]
            },
            yaxis: {
                tickColor: "#eee",
                ticks: 10,
                min: -2,
                max: 2
            },
            grid: {
                borderColor: "#eee",
                borderWidth: 1
            }
        });
    }

    var demo2 = function() {
        function randValue() {
            return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
        }
        var pageviews = [
            [1, randValue()],
            [2, randValue()],
            [3, 2 + randValue()],
            [4, 3 + randValue()],
            [5, 5 + randValue()],
            [6, 10 + randValue()],
            [7, 15 + randValue()],
            [8, 20 + randValue()],
            [9, 25 + randValue()],
            [10, 30 + randValue()],
            [11, 35 + randValue()],
            [12, 25 + randValue()],
            [13, 15 + randValue()],
            [14, 20 + randValue()],
            [15, 45 + randValue()],
            [16, 50 + randValue()],
            [17, 65 + randValue()],
            [18, 70 + randValue()],
            [19, 85 + randValue()],
            [20, 80 + randValue()],
            [21, 75 + randValue()],
            [22, 80 + randValue()],
            [23, 75 + randValue()],
            [24, 70 + randValue()],
            [25, 65 + randValue()],
            [26, 75 + randValue()],
            [27, 80 + randValue()],
            [28, 85 + randValue()],
            [29, 90 + randValue()],
            [30, 95 + randValue()]
        ];
        var visitors = [
            [1, randValue() - 5],
            [2, randValue() - 5],
            [3, randValue() - 5],
            [4, 6 + randValue()],
            [5, 5 + randValue()],
            [6, 20 + randValue()],
            [7, 25 + randValue()],
            [8, 36 + randValue()],
            [9, 26 + randValue()],
            [10, 38 + randValue()],
            [11, 39 + randValue()],
            [12, 50 + randValue()],
            [13, 51 + randValue()],
            [14, 12 + randValue()],
            [15, 13 + randValue()],
            [16, 14 + randValue()],
            [17, 15 + randValue()],
            [18, 15 + randValue()],
            [19, 16 + randValue()],
            [20, 17 + randValue()],
            [21, 18 + randValue()],
            [22, 19 + randValue()],
            [23, 20 + randValue()],
            [24, 21 + randValue()],
            [25, 14 + randValue()],
            [26, 24 + randValue()],
            [27, 25 + randValue()],
            [28, 26 + randValue()],
            [29, 27 + randValue()],
            [30, 31 + randValue()]
        ];

        var plot = $.plot($("#m_flotcharts_2"), [{
            data: pageviews,
            label: "Unique Visits",
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0

        }, {
            data: visitors,
            label: "Page Views",
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], {
            series: {
                lines: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: {
                        colors: [{
                            opacity: 0.05
                        }, {
                            opacity: 0.01
                        }]
                    }
                },
                points: {
                    show: true,
                    radius: 3,
                    lineWidth: 1
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1
            },
            colors: ["#d12610", "#37b7f3", "#52e136"],
            xaxis: {
                ticks: 11,
                tickDecimals: 0,
                tickColor: "#eee",
            },
            yaxis: {
                ticks: 11,
                tickDecimals: 0,
                tickColor: "#eee",
            }
        });

        function showTooltip(x, y, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 15,
                border: '1px solid #333',
                padding: '4px',
                color: '#fff',
                'border-radius': '3px',
                'background-color': '#333',
                opacity: 0.80
            }).appendTo("body").fadeIn(200);
        }

        var previousPoint = null;
        $("#chart_2").bind("plothover", function(event, pos, item) {
            $("#x").text(pos.x.toFixed(2));
            $("#y").text(pos.y.toFixed(2));

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;

                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(2),
                        y = item.datapoint[1].toFixed(2);

                    showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
        });
    }

    var demo3 = function() {
        var sin = [],
            cos = [];
        for (var i = 0; i < 14; i += 0.1) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        plot = $.plot($("#m_flotcharts_3"), [{
            data: sin,
            label: "sin(x) = -0.00",
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }, {
            data: cos,
            label: "cos(x) = -0.00",
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], {
            series: {
                lines: {
                    show: true
                }
            },
            crosshair: {
                mode: "x"
            },
            grid: {
                hoverable: true,
                autoHighlight: false,
                tickColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1
            },
            yaxis: {
                min: -1.2,
                max: 1.2
            }
        });

        var legends = $("#m_flotcharts_3 .legendLabel");
        legends.each(function() {
            // fix the widths so they don't jump around
            $(this).css('width', $(this).width());
        });

        var updateLegendTimeout = null;
        var latestPosition = null;

        function updateLegend() {
            updateLegendTimeout = null;

            var pos = latestPosition;

            var axes = plot.getAxes();
            if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

            var i, j, dataset = plot.getData();
            for (i = 0; i < dataset.length; ++i) {
                var series = dataset[i];

                // find the nearest points, x-wise
                for (j = 0; j < series.data.length; ++j)
                    if (series.data[j][0] > pos.x) break;

                // now interpolate
                var y, p1 = series.data[j - 1],
                    p2 = series.data[j];

                if (p1 == null) y = p2[1];
                else if (p2 == null) y = p1[1];
                else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

                legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
            }
        }

        $("#m_flotcharts_3").bind("plothover", function(event, pos, item) {
            latestPosition = pos;
            if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
        });
    }

    var demo4 = function() {

        var data = [];
        var totalPoints = 250;

        // random data generator for plot charts

        function getRandomData() {
            if (data.length > 0) data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) y = 0;
                if (y > 100) y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]]);
            }

            return res;
        }

        //server load
        var options = {
            series: {
                shadowSize: 1
            },
            lines: {
                show: true,
                lineWidth: 0.5,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 1
                    }]
                }
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: "#eee",
                tickFormatter: function(v) {
                    return v + "%";
                }
            },
            xaxis: {
                show: false,
            },
            colors: ["#6ef146"],
            grid: {
                tickColor: "#eee",
                borderWidth: 0,
            }
        };

        var updateInterval = 30;
        var plot = $.plot($("#m_flotcharts_4"), [getRandomData()], options);

        function update() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();
    }

    var demo5 = function() {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var d2 = [];
        for (var i = 0; i <= 10; i += 1)
            d2.push([i, parseInt(Math.random() * 30)]);

        var d3 = [];
        for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(Math.random() * 30)]);

        var stack = 0,
            bars = true,
            lines = false,
            steps = false;

        function plotWithOptions() {
            $.plot($("#m_flotcharts_5"),

                [{
                    label: "sales",
                    data: d1,
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }, {
                    label: "tax",
                    data: d2,
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }, {
                    label: "profit",
                    data: d3,
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }]

                , {
                    series: {
                        stack: stack,
                        lines: {
                            show: lines,
                            fill: true,
                            steps: steps,
                            lineWidth: 0, // in pixels
                        },
                        bars: {
                            show: bars,
                            barWidth: 0.5,
                            lineWidth: 0, // in pixels
                            shadowSize: 0,
                            align: 'center'
                        }
                    },
                    grid: {
                        tickColor: "#eee",
                        borderColor: "#eee",
                        borderWidth: 1
                    }
                }
            );
        }

        $(".stackControls input").click(function(e) {
            e.preventDefault();
            stack = $(this).val() == "With stacking" ? true : null;
            plotWithOptions();
        });

        $(".graphControls input").click(function(e) {
            e.preventDefault();
            bars = $(this).val().indexOf("Bars") != -1;
            lines = $(this).val().indexOf("Lines") != -1;
            steps = $(this).val().indexOf("steps") != -1;
            plotWithOptions();
        });

        plotWithOptions();
    }

    var demo6 = function() {
        // bar chart:
        var data = GenerateSeries(0);

        function GenerateSeries(added) {
            var data = [];
            var start = 100 + added;
            var end = 200 + added;

            for (i = 1; i <= 20; i++) {
                var d = Math.floor(Math.random() * (end - start + 1) + start);
                data.push([i, d]);
                start++;
                end++;
            }

            return data;
        }

        var options = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                barWidth: 0.8,
                lineWidth: 0, // in pixels
                shadowSize: 0,
                align: 'left'
            },

            grid: {
                tickColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1
            }
        };

        $.plot($("#m_flotcharts_6"), [{
            data: data,
            lines: {
                lineWidth: 1,
            },
            shadowSize: 0
        }], options);
    }

    var demo7 = function() {
        // horizontal bar chart:

        var data1 = [
            [10, 10],
            [20, 20],
            [30, 30],
            [40, 40],
            [50, 50]
        ];

        var options = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                horizontal: true,
                barWidth: 6,
                lineWidth: 0, // in pixels
                shadowSize: 0,
                align: 'left'
            },
            grid: {
                tickColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1
            }
        };

        $.plot($("#m_flotcharts_7"), [data1], options);
    }


    var demo8 = function() {
        var data = [];
            var series = Math.floor(Math.random() * 10) + 1;
            series = series < 5 ? 5 : series;

            for (var i = 0; i < series; i++) {
                data[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor(Math.random() * 100) + 1
                };
            }

            $.plot($("#m_flotcharts_8"), data, {
                    series: {
                        pie: {
                            show: true
                        }
                    }
                });
    }

    var demo9 = function() {
         var data = [];
            var series = Math.floor(Math.random() * 10) + 1;
            series = series < 5 ? 5 : series;

            for (var i = 0; i < series; i++) {
                data[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor(Math.random() * 100) + 1
                };
            }

            $.plot($("#m_flotcharts_9"), data, {
                    series: {
                        pie: {
                            show: true
                        }
                    },
                    legend: {
                        show: false
                    }
                });
    }

    var demo10 = function() {
         var data = [];
            var series = Math.floor(Math.random() * 10) + 1;
            series = series < 5 ? 5 : series;

            for (var i = 0; i < series; i++) {
                data[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor(Math.random() * 100) + 1
                };
            }

             $.plot($("#m_flotcharts_10"), data, {
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 1,
                                formatter: function(label, series) {
                                    return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                                },
                                background: {
                                    opacity: 0.8
                                }
                            }
                        }
                    },
                    legend: {
                        show: false
                    }
                });
    }

    var demo11 = function() {
         var data = [];
            var series = Math.floor(Math.random() * 10) + 1;
            series = series < 5 ? 5 : series;

            for (var i = 0; i < series; i++) {
                data[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor(Math.random() * 100) + 1
                };
            }

             $.plot($("#m_flotcharts_11"), data, {
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 1,
                                formatter: function(label, series) {
                                    return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                                },
                                background: {
                                    opacity: 0.8
                                }
                            }
                        }
                    },
                    legend: {
                        show: false
                    }
                });
    }


    return {
        // public functions
        init: function() {
            // default charts
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
            demo7();

            // pie charts
            demo8();
            demo9();
            demo10();
            demo11();
        }
    };
}();

jQuery(document).ready(function() {
    FlotchartsDemo.init();
});
//== Class definition
var GoogleChartsDemo = function() {

    //== Private functions

    var main = function() {
        // GOOGLE CHARTS INIT
        google.load('visualization', '1', {
            packages: ['corechart', 'bar', 'line']
        });

        google.setOnLoadCallback(function() {
            GoogleChartsDemo.runDemos();
        });
    }

    var demoColumnCharts = function() {
        // COLUMN CHART
        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', 'Motivation Level');
        data.addColumn('number', 'Energy Level');

        data.addRows([
            [{
                v: [8, 0, 0],
                f: '8 am'
            }, 1, .25],
            [{
                v: [9, 0, 0],
                f: '9 am'
            }, 2, .5],
            [{
                v: [10, 0, 0],
                f: '10 am'
            }, 3, 1],
            [{
                v: [11, 0, 0],
                f: '11 am'
            }, 4, 2.25],
            [{
                v: [12, 0, 0],
                f: '12 pm'
            }, 5, 2.25],
            [{
                v: [13, 0, 0],
                f: '1 pm'
            }, 6, 3],
            [{
                v: [14, 0, 0],
                f: '2 pm'
            }, 7, 4],
            [{
                v: [15, 0, 0],
                f: '3 pm'
            }, 8, 5.25],
            [{
                v: [16, 0, 0],
                f: '4 pm'
            }, 9, 7.5],
            [{
                v: [17, 0, 0],
                f: '5 pm'
            }, 10, 10],
        ]);

        var options = {
            title: 'Motivation and Energy Level Throughout the Day',
            focusTarget: 'category',
            hAxis: {
                title: 'Time of Day',
                format: 'h:mm a',
                viewWindow: {
                    min: [7, 30, 0],
                    max: [17, 30, 0]
                },
            },
            vAxis: {
                title: 'Rating (scale of 1-10)'
            }
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('m_gchart_1'));
        chart.draw(data, options);

        var chart = new google.visualization.ColumnChart(document.getElementById('m_gchart_2'));
        chart.draw(data, options);
    }

    var demoPieCharts = function() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var options = {
            title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('m_gchart_3'));
        chart.draw(data, options);

        var options = {
            pieHole: 0.4
        };

        var chart = new google.visualization.PieChart(document.getElementById('m_gchart_4'));
        chart.draw(data, options);
    }    

    var demoLineCharts = function() {
        // LINE CHART
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Guardians of the Galaxy');
        data.addColumn('number', 'The Avengers');
        data.addColumn('number', 'Transformers: Age of Extinction');

        data.addRows([
            [1, 37.8, 80.8, 41.8],
            [2, 30.9, 69.5, 32.4],
            [3, 25.4, 57, 25.7],
            [4, 11.7, 18.8, 10.5],
            [5, 11.9, 17.6, 10.4],
            [6, 8.8, 13.6, 7.7],
            [7, 7.6, 12.3, 9.6],
            [8, 12.3, 29.2, 10.6],
            [9, 16.9, 42.9, 14.8],
            [10, 12.8, 30.9, 11.6],
            [11, 5.3, 7.9, 4.7],
            [12, 6.6, 8.4, 5.2],
            [13, 4.8, 6.3, 3.6],
            [14, 4.2, 6.2, 3.4]
        ]);

        var options = {
            chart: {
                title: 'Box Office Earnings in First Two Weeks of Opening',
                subtitle: 'in millions of dollars (USD)'
            }
        };

        var chart = new google.charts.Line(document.getElementById('m_gchart_5'));
        chart.draw(data, options);
    }

    return {
        // public functions
        init: function() {
            main();
        },

        runDemos: function() {
            demoColumnCharts();
            demoLineCharts();
            demoPieCharts();
        }
    };
}();

GoogleChartsDemo.init();
//== Class definition
var MorrisChartsDemo = function() {

    //== Private functions
    
    var demo1 = function() {
        // LINE CHART
        new Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'm_morris_1',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                },
                {
                    y: '2007',
                    a: 75,
                    b: 65
                },
                {
                    y: '2008',
                    a: 50,
                    b: 40
                },
                {
                    y: '2009',
                    a: 75,
                    b: 65
                },
                {
                    y: '2010',
                    a: 50,
                    b: 40
                },
                {
                    y: '2011',
                    a: 75,
                    b: 65
                },
                {
                    y: '2012',
                    a: 100,
                    b: 90
                }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: 'y',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['a', 'b'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Values A', 'Values B']
        });
    }

    var demo2 = function() {
        // AREA CHART
        new Morris.Area({
            element: 'm_morris_2',
            data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                },
                {
                    y: '2007',
                    a: 75,
                    b: 65
                },
                {
                    y: '2008',
                    a: 50,
                    b: 40
                },
                {
                    y: '2009',
                    a: 75,
                    b: 65
                },
                {
                    y: '2010',
                    a: 50,
                    b: 40
                },
                {
                    y: '2011',
                    a: 75,
                    b: 65
                },
                {
                    y: '2012',
                    a: 100,
                    b: 90
                }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B']
        });
    }

    var demo3 = function() {
        // BAR CHART
        new Morris.Bar({
            element: 'm_morris_3',
            data: [{
                    y: '2006',
                    a: 100,
                    b: 90
                },
                {
                    y: '2007',
                    a: 75,
                    b: 65
                },
                {
                    y: '2008',
                    a: 50,
                    b: 40
                },
                {
                    y: '2009',
                    a: 75,
                    b: 65
                },
                {
                    y: '2010',
                    a: 50,
                    b: 40
                },
                {
                    y: '2011',
                    a: 75,
                    b: 65
                },
                {
                    y: '2012',
                    a: 100,
                    b: 90
                }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B']
        });
    }

    var demo4 = function() {
        // PIE CHART
        new Morris.Donut({
            element: 'm_morris_4',
            data: [{
                    label: "Download Sales",
                    value: 12
                },
                {
                    label: "In-Store Sales",
                    value: 30
                },
                {
                    label: "Mail-Order Sales",
                    value: 20
                }
            ]
        });
    }

    return {
        // public functions
        init: function() {
            demo1();
            demo2();
            demo3();
            demo4();
        }
    };
}();

jQuery(document).ready(function() {
    MorrisChartsDemo.init();
});
//== Class definition
var GoogleMapsDemo = function() {

    //== Private functions

    var demo1 = function() {
        var map = new GMaps({
            div: '#m_gmap_1',
            lat: -12.043333,
            lng: -77.028333
        });
    }

    var demo2 = function() {
        var map = new GMaps({
            div: '#m_gmap_2',
            zoom: 16,
            lat: -12.043333,
            lng: -77.028333,
            click: function(e) {
                alert('click');
            },
            dragend: function(e) {
                alert('dragend');
            }
        });
    }

    var demo3 = function() {
        var map = new GMaps({
            div: '#m_gmap_3',
            lat: -51.38739,
            lng: -6.187181,
        });
        map.addMarker({
            lat: -51.38739,
            lng: -6.187181,
            title: 'Lima',
            details: {
                database_id: 42,
                author: 'HPNeo'
            },
            click: function(e) {
                if (console.log) console.log(e);
                alert('You clicked in this marker');
            }
        });
        map.addMarker({
            lat: -12.042,
            lng: -77.028333,
            title: 'Marker with InfoWindow',
            infoWindow: {
                content: '<span style="color:#000">HTML Content!</span>'
            }
        });
        map.setZoom(5);
    }

    var demo4 = function() {
        var map = new GMaps({
            div: '#m_gmap_4',
            lat: -12.043333,
            lng: -77.028333
        });

        GMaps.geolocate({
            success: function(position) {
                map.setCenter(position.coords.latitude, position.coords.longitude);
            },
            error: function(error) {
                alert('Geolocation failed: ' + error.message);
            },
            not_supported: function() {
                alert("Your browser does not support geolocation");
            },
            always: function() {
                //alert("Geolocation Done!");
            }
        });
    }

    var demo5 = function() {
        var map = new GMaps({
            div: '#m_gmap_5',
            lat: -12.043333,
            lng: -77.028333,
            click: function(e) {
                console.log(e);
            }
        });

        path = [
            [-12.044012922866312, -77.02470665341184],
            [-12.05449279282314, -77.03024273281858],
            [-12.055122327623378, -77.03039293652341],
            [-12.075917129727586, -77.02764635449216],
            [-12.07635776902266, -77.02792530422971],
            [-12.076819390363665, -77.02893381481931],
            [-12.088527520066453, -77.0241058385925],
            [-12.090814532191756, -77.02271108990476]
        ];

        map.drawPolyline({
            path: path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });
    }

    var demo6 = function() {
        var map = new GMaps({
            div: '#m_gmap_6',
            lat: -12.043333,
            lng: -77.028333
        });

        var path = [
            [-12.040397656836609, -77.03373871559225],
            [-12.040248585302038, -77.03993927003302],
            [-12.050047116528843, -77.02448169303511],
            [-12.044804866577001, -77.02154422636042]
        ];

        var polygon = map.drawPolygon({
            paths: path,
            strokeColor: '#BBD8E9',
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: '#BBD8E9',
            fillOpacity: 0.6
        });
    }

    var demo7 = function() {
        var map = new GMaps({
            div: '#m_gmap_7',
            lat: -12.043333,
            lng: -77.028333
        });
        $('#m_gmap_7_btn').click(function(e) {
            e.preventDefault();
            mApp.scrollTo($(this), 400);
            map.travelRoute({
                origin: [-12.044012922866312, -77.02470665341184],
                destination: [-12.090814532191756, -77.02271108990476],
                travelMode: 'driving',
                step: function(e) {
                    $('#m_gmap_7_routes').append('<li>' + e.instructions + '</li>');
                    $('#m_gmap_7_routes li:eq(' + e.step_number + ')').delay(800 * e.step_number).fadeIn(500, function() {
                        map.setCenter(e.end_location.lat(), e.end_location.lng());
                        map.drawPolyline({
                            path: e.path,
                            strokeColor: '#131540',
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });
                    });
                }
            });
        });
    }

    var demo8 = function() {
        var map = new GMaps({
            div: '#m_gmap_8',
            lat: -12.043333,
            lng: -77.028333
        });

        var handleAction = function() {
            var text = $.trim($('#m_gmap_8_address').val());
            GMaps.geocode({
                address: text,
                callback: function(results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        map.setCenter(latlng.lat(), latlng.lng());
                        map.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                        mApp.scrollTo($('#m_gmap_8'));
                    }
                }
            });
        }

        $('#m_gmap_8_btn').click(function(e) {
            e.preventDefault();
            handleAction();
        });

        $("#m_gmap_8_address").keypress(function(e) {
            var keycode = (e.keyCode ? e.keyCode : e.which);
            if (keycode == '13') {
                e.preventDefault();
                handleAction();
            }
        });
    }

    return {
        // public functions
        init: function() {
            // default charts
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
            demo7();
            demo8();
        }
    };
}();

jQuery(document).ready(function() {
    GoogleMapsDemo.init();
});
//== Class definition
var jQVMapDemo = function() {

    var sample_data = {
        "af": "16.63",
        "al": "11.58",
        "dz": "158.97",
        "ao": "85.81",
        "ag": "1.1",
        "ar": "351.02",
        "am": "8.83",
        "au": "1219.72",
        "at": "366.26",
        "az": "52.17",
        "bs": "7.54",
        "bh": "21.73",
        "bd": "105.4",
        "bb": "3.96",
        "by": "52.89",
        "be": "461.33",
        "bz": "1.43",
        "bj": "6.49",
        "bt": "1.4",
        "bo": "19.18",
        "ba": "16.2",
        "bw": "12.5",
        "br": "2023.53",
        "bn": "11.96",
        "bg": "44.84",
        "bf": "8.67",
        "bi": "1.47",
        "kh": "11.36",
        "cm": "21.88",
        "ca": "1563.66",
        "cv": "1.57",
        "cf": "2.11",
        "td": "7.59",
        "cl": "199.18",
        "cn": "5745.13",
        "co": "283.11",
        "km": "0.56",
        "cd": "12.6",
        "cg": "11.88",
        "cr": "35.02",
        "ci": "22.38",
        "hr": "59.92",
        "cy": "22.75",
        "cz": "195.23",
        "dk": "304.56",
        "dj": "1.14",
        "dm": "0.38",
        "do": "50.87",
        "ec": "61.49",
        "eg": "216.83",
        "sv": "21.8",
        "gq": "14.55",
        "er": "2.25",
        "ee": "19.22",
        "et": "30.94",
        "fj": "3.15",
        "fi": "231.98",
        "fr": "2555.44",
        "ga": "12.56",
        "gm": "1.04",
        "ge": "11.23",
        "de": "3305.9",
        "gh": "18.06",
        "gr": "305.01",
        "gd": "0.65",
        "gt": "40.77",
        "gn": "4.34",
        "gw": "0.83",
        "gy": "2.2",
        "ht": "6.5",
        "hn": "15.34",
        "hk": "226.49",
        "hu": "132.28",
        "is": "12.77",
        "in": "1430.02",
        "id": "695.06",
        "ir": "337.9",
        "iq": "84.14",
        "ie": "204.14",
        "il": "201.25",
        "it": "2036.69",
        "jm": "13.74",
        "jp": "5390.9",
        "jo": "27.13",
        "kz": "129.76",
        "ke": "32.42",
        "ki": "0.15",
        "kr": "986.26",
        "undefined": "5.73",
        "kw": "117.32",
        "kg": "4.44",
        "la": "6.34",
        "lv": "23.39",
        "lb": "39.15",
        "ls": "1.8",
        "lr": "0.98",
        "ly": "77.91",
        "lt": "35.73",
        "lu": "52.43",
        "mk": "9.58",
        "mg": "8.33",
        "mw": "5.04",
        "my": "218.95",
        "mv": "1.43",
        "ml": "9.08",
        "mt": "7.8",
        "mr": "3.49",
        "mu": "9.43",
        "mx": "1004.04",
        "md": "5.36",
        "mn": "5.81",
        "me": "3.88",
        "ma": "91.7",
        "mz": "10.21",
        "mm": "35.65",
        "na": "11.45",
        "np": "15.11",
        "nl": "770.31",
        "nz": "138",
        "ni": "6.38",
        "ne": "5.6",
        "ng": "206.66",
        "no": "413.51",
        "om": "53.78",
        "pk": "174.79",
        "pa": "27.2",
        "pg": "8.81",
        "py": "17.17",
        "pe": "153.55",
        "ph": "189.06",
        "pl": "438.88",
        "pt": "223.7",
        "qa": "126.52",
        "ro": "158.39",
        "ru": "1476.91",
        "rw": "5.69",
        "ws": "0.55",
        "st": "0.19",
        "sa": "434.44",
        "sn": "12.66",
        "rs": "38.92",
        "sc": "0.92",
        "sl": "1.9",
        "sg": "217.38",
        "sk": "86.26",
        "si": "46.44",
        "sb": "0.67",
        "za": "354.41",
        "es": "1374.78",
        "lk": "48.24",
        "kn": "0.56",
        "lc": "1",
        "vc": "0.58",
        "sd": "65.93",
        "sr": "3.3",
        "sz": "3.17",
        "se": "444.59",
        "ch": "522.44",
        "sy": "59.63",
        "tw": "426.98",
        "tj": "5.58",
        "tz": "22.43",
        "th": "312.61",
        "tl": "0.62",
        "tg": "3.07",
        "to": "0.3",
        "tt": "21.2",
        "tn": "43.86",
        "tr": "729.05",
        "tm": 0,
        "ug": "17.12",
        "ua": "136.56",
        "ae": "239.65",
        "gb": "2258.57",
        "us": "14624.18",
        "uy": "40.71",
        "uz": "37.72",
        "vu": "0.72",
        "ve": "285.21",
        "vn": "101.99",
        "ye": "30.02",
        "zm": "15.69",
        "zw": "5.57"
    };

    //== Private functions

    var setupMap = function(name) {
        var data = {
            map: 'world_en',
            backgroundColor: null,
            color: '#ffffff',
            hoverOpacity: 0.7,
            selectedColor: '#666666',
            enableZoom: true,
            showTooltip: true,
            values: sample_data,
            scaleColors: ['#C8EEFF', '#006491'],
            normalizeFunction: 'polynomial',
            onRegionOver: function(event, code) {
                //sample to interact with map
                if (code == 'ca') {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region) {
                //sample to interact with map
                var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                alert(message);
            }
        };

        data.map = name + '_en';

        var map = jQuery('#m_jqvmap_' + name);

        map.width(map.parent().width());
        map.vectorMap(data);
    }

    var setupMaps = function() {
        setupMap("world");
        setupMap("usa");
        setupMap("europe");
        setupMap("russia");
        setupMap("germany");
    }

    return {
        // public functions
        init: function() {
            // default charts
            setupMaps();

            mUtil.addResizeHandler(function() {
                setupMaps();
            });
        }
    };
}();

jQuery(document).ready(function() {
    jQVMapDemo.init();
});
//== Class definition
var jVectorMap = function() {

    //== Private functions

    var demo1 = function() {
    }

    return {
        // public functions
        init: function() {
            // default charts
            demo1();
        }
    };
}();

jQuery(document).ready(function() {
    jVectorMap.init();
});
var PortletDraggable = function () {

    return {
        //main function to initiate the module
        init: function () {
            $("#m_sortable_portlets").sortable({
                connectWith: ".m-portlet__head",
                items: ".m-portlet", 
                opacity: 0.8,
                handle : '.m-portlet__head',
                coneHelperSize: true,
                placeholder: 'm-portlet--sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",
                cancel: ".m-portlet--sortable-empty", // cancel dragging if portlet is in fullscreen mode
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("m-portlet--sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
            });
        }
    };
}();

jQuery(document).ready(function() {
    PortletDraggable.init();
});
var PortletTools = function () {
    //== Toastr
    var initToastr = function() {
        toastr.options.showDuration = 1000;
    }

    //== Demo 1
    var demo1 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_1').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                overlayColor: '#ffffff',
                type: 'loader',
                state: 'accent',
                opacity: 0.3,
                size: 'lg'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            //toastr.info('After fullscreen on event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.data('original-height', scrollable.data('max-height'));
            scrollable.css('height', '100%');
            scrollable.css('max-height', '100%');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.css('height', scrollable.data('original-height'));
            scrollable.data('max-height', scrollable.data('original-height')); 
            mApp.initScroller(scrollable, {});
        });
    }

    //== Demo 2
    var demo2 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_2').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                overlayColor: '#000000',
                type: 'spinner',
                state: 'brand',
                opacity: 0.05,
                size: 'lg'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });
    }

    //== Demo 3
    var demo3 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_3').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                type: 'loader',
                state: 'success',
                message: 'Please wait...'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            //toastr.info('After fullscreen on event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.data('original-height', scrollable.data('max-height'));
            scrollable.css('height', '100%');
            scrollable.css('max-height', '100%');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.css('height', scrollable.data('original-height'));
            scrollable.data('max-height', scrollable.data('original-height')); 
            mApp.initScroller(scrollable, {});
        });
    }
 
    //== Demo 4
    var demo4 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_4').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                type: 'loader',
                state: 'brand',
                message: 'Please wait...'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            //toastr.info('After fullscreen on event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.data('original-height', scrollable.data('max-height'));
            scrollable.css('height', '100%');
            scrollable.css('max-height', '100%');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');

            var scrollable = portlet.getBody().find('> .m-scrollable');

            scrollable.css('height', scrollable.data('original-height'));
            scrollable.data('max-height', scrollable.data('original-height')); 
            mApp.initScroller(scrollable, {});
        });
    }

    //== Demo 5
    var demo5 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_5').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                type: 'loader',
                state: 'brand',
                message: 'Please wait...'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            toastr.info('After fullscreen on event fired!');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');
        });
    }

    //== Demo 5
    var demo6 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_6').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                type: 'loader',
                state: 'brand',
                message: 'Please wait...'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            toastr.info('After fullscreen on event fired!');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');
        });
    }

    //== Demo 7
    var demo6 = function() {
        // This portlet is lazy initialized using data-portlet="true" attribute. You can access to the portlet object as shown below and override its behavior
        var portlet = $('#m_portlet_tools_7').mPortlet();

        //== Toggle event handlers
        portlet.on('beforeCollapse', function(portlet) {
            setTimeout(function() {
                toastr.info('Before collapse event fired!');
            }, 100);
        });

        portlet.on('afterCollapse', function(portlet) {
            setTimeout(function() {
                toastr.warning('Before collapse event fired!');
            }, 2000);            
        });

        portlet.on('beforeExpand', function(portlet) {
            setTimeout(function() {
                toastr.info('Before expand event fired!');
            }, 100);  
        });

        portlet.on('afterExpand', function(portlet) {
            setTimeout(function() {
                toastr.warning('After expand event fired!');
            }, 2000);
        });

        //== Remove event handlers
        portlet.on('beforeRemove', function(portlet) {
            toastr.info('Before remove event fired!');

            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation
        });

        portlet.on('afterRemove', function(portlet) {
            setTimeout(function() {
                toastr.warning('After remove event fired!');
            }, 2000);            
        });

        //== Reload event handlers
        portlet.on('reload', function(portlet) {
            toastr.info('Leload event fired!');

            mApp.block(portlet.getSelf(), {
                type: 'loader',
                state: 'brand',
                message: 'Please wait...'
            });

            // update the content here

            setTimeout(function() {
                mApp.unblock(portlet.getSelf());
            }, 2000);
        });

        //== Reload event handlers
        portlet.on('afterFullscreenOn', function(portlet) {
            toastr.info('After fullscreen on event fired!');
            mApp.initScroller(scrollable, {});
        });

        portlet.on('afterFullscreenOff', function(portlet) {
            toastr.warning('After fullscreen off event fired!');
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            initToastr();

            // init demos
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
        }
    };
}();

jQuery(document).ready(function() {
    PortletTools.init();
});
var IdleTimerDemo = function() {

    var demo1 = function() {
        //Define default
        var
            docTimeout = 5000;

        /*
        Handle raised idle/active events
        */
        $(document).on("idle.idleTimer", function(event, elem, obj) {
            $("#docStatus")
                .val(function(i, v) {
                    return v + "Idle @ " + moment().format() + " \n";
                })
                .removeClass("alert-success")
                .addClass("alert-warning")
                .scrollTop($('#docStatus')[0].scrollHeight);
        });
        $(document).on("active.idleTimer", function(event, elem, obj, e) {
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Active [" + e.type + "] [" + e.target.nodeName + "] @ " + moment().format() + " \n";
                })
                .addClass("alert-success")
                .removeClass("alert-warning")
                .scrollTop($('#docStatus')[0].scrollHeight);
        });

        /*
        Handle button events
        */
        $("#btPause").click(function() {
            $(document).idleTimer("pause");
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Paused @ " + moment().format() + " \n";
                })
                .scrollTop($('#docStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btResume").click(function() {
            $(document).idleTimer("resume");
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Resumed @ " + moment().format() + " \n";
                })
                .scrollTop($('#docStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btElapsed").click(function() {
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Elapsed (since becoming active): " + $(document).idleTimer("getElapsedTime") + " \n";
                })
                .scrollTop($('#docStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btDestroy").click(function() {
            $(document).idleTimer("destroy");
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Destroyed: @ " + moment().format() + " \n";
                })
                .removeClass("alert-success")
                .removeClass("alert-warning")
                .scrollTop($('#docStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btInit").click(function() {
            // for demo purposes show init with just object
            $(document).idleTimer({
                timeout: docTimeout
            });
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Init: @ " + moment().format() + " \n";
                })
                .scrollTop($('#docStatus')[0].scrollHeight);

            //Apply classes for default state
            if ($(document).idleTimer("isIdle")) {
                $('#docStatus')
                    .removeClass("alert-success")
                    .addClass("alert-warning");
            } else {
                $('#docStatus')
                    .addClass("alert-success")
                    .removeClass("alert-warning");
            }
            $(this).blur();
            return false;
        });

        //Clear old statuses
        $('#docStatus').val('');

        //Start timeout, passing no options
        //Same as $.idleTimer(docTimeout, docOptions);
        $(document).idleTimer(docTimeout);

        //For demo purposes, style based on initial state
        if ($(document).idleTimer("isIdle")) {
            $("#docStatus")
                .val(function(i, v) {
                    return v + "Initial Idle State @ " + moment().format() + " \n";
                })
                .removeClass("alert-success")
                .addClass("alert-warning")
                .scrollTop($('#docStatus')[0].scrollHeight);
        } else {
            $('#docStatus')
                .val(function(i, v) {
                    return v + "Initial Active State @ " + moment().format() + " \n";
                })
                .addClass("alert-success")
                .removeClass("alert-warning")
                .scrollTop($('#docStatus')[0].scrollHeight);
        }


        //For demo purposes, display the actual timeout on the page
        $('#docTimeout').text(docTimeout / 1000);

    }

    var demo2 = function() {
        //Define textarea settings
        var
            taTimeout = 3000;

        /*
        Handle raised idle/active events
        */
        $('#elStatus').on("idle.idleTimer", function(event, elem, obj) {
            //If you dont stop propagation it will bubble up to document event handler
            event.stopPropagation();

            $('#elStatus')
                .val(function(i, v) {
                    return v + "Idle @ " + moment().format() + " \n";
                })
                .removeClass("alert-success")
                .addClass("alert-warning")
                .scrollTop($('#elStatus')[0].scrollHeight);

        });
        $('#elStatus').on("active.idleTimer", function(event) {
            //If you dont stop propagation it will bubble up to document event handler
            event.stopPropagation();

            $('#elStatus')
                .val(function(i, v) {
                    return v + "Active @ " + moment().format() + " \n";
                })
                .addClass("alert-success")
                .removeClass("alert-warning")
                .scrollTop($('#elStatus')[0].scrollHeight);
        });

        /*
        Handle button events
        */
        $("#btReset").click(function() {
            $('#elStatus')
                .idleTimer("reset")
                .val(function(i, v) {
                    return v + "Reset @ " + moment().format() + " \n";
                })
                .scrollTop($('#elStatus')[0].scrollHeight);

            //Apply classes for default state
            if ($("#elStatus").idleTimer("isIdle")) {
                $('#elStatus')
                    .removeClass("alert-success")
                    .addClass("alert-warning");
            } else {
                $('#elStatus')
                    .addClass("alert-success")
                    .removeClass("alert-warning");
            }
            $(this).blur();
            return false;
        });
        $("#btRemaining").click(function() {
            $('#elStatus')
                .val(function(i, v) {
                    return v + "Remaining: " + $("#elStatus").idleTimer("getRemainingTime") + " \n";
                })
                .scrollTop($('#elStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btLastActive").click(function() {
            $('#elStatus')
                .val(function(i, v) {
                    return v + "LastActive: " + $("#elStatus").idleTimer("getLastActiveTime") + " \n";
                })
                .scrollTop($('#elStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });
        $("#btState").click(function() {
            $('#elStatus')
                .val(function(i, v) {
                    return v + "State: " + ($("#elStatus").idleTimer("isIdle") ? "idle" : "active") + " \n";
                })
                .scrollTop($('#elStatus')[0].scrollHeight);
            $(this).blur();
            return false;
        });

        //Clear value if there was one cached & start time
        $('#elStatus').val('').idleTimer(taTimeout);

        //For demo purposes, show initial state
        if ($("#elStatus").idleTimer("isIdle")) {
            $("#elStatus")
                .val(function(i, v) {
                    return v + "Initial Idle @ " + moment().format() + " \n";
                })
                .removeClass("alert-success")
                .addClass("alert-warning")
                .scrollTop($('#elStatus')[0].scrollHeight);
        } else {
            $('#elStatus')
                .val(function(i, v) {
                    return v + "Initial Active @ " + moment().format() + " \n";
                })
                .addClass("alert-success")
                .removeClass("alert-warning")
                .scrollTop($('#elStatus')[0].scrollHeight);
        }

        // Display the actual timeout on the page
        $('#elTimeout').text(taTimeout / 1000);

    }

    return {
        //main function to initiate the module
        init: function() {
            demo1();
            demo2();
        }
    };

}();

jQuery(document).ready(function() {
    IdleTimerDemo.init();
});
var SessionTimeoutDemo = function () {

    var initDemo = function () {
        $.sessionTimeout({
            title: 'Session Timeout Notification',
            message: 'Your session is about to expire.',
            keepAliveUrl: 'inc/api/session-timeout/keepalive.php',
            redirUrl: '?p=page_user_lock_1',
            logoutUrl: '?p=page_user_login_1',
            warnAfter: 3000, //warn after 5 seconds
            redirAfter: 35000, //redirect after 10 secons,
            ignoreUserActivity: true,
            countdownMessage: 'Redirecting in {timer} seconds.',
            countdownBar: true
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            initDemo();
        }
    };

}();

jQuery(document).ready(function() {    
    SessionTimeoutDemo.init();
});
//== Class definition
var amChartsChartsDemo = function() {

    //== Private functions
    var demo1 = function() {
        var chart = AmCharts.makeChart("m_amcharts_1", {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                "country": "USA",
                "visits": 2025
            }, {
                "country": "China",
                "visits": 1882
            }, {
                "country": "Japan",
                "visits": 1809
            }, {
                "country": "Germany",
                "visits": 1322
            }, {
                "country": "UK",
                "visits": 1122
            }, {
                "country": "France",
                "visits": 1114
            }, {
                "country": "India",
                "visits": 984
            }, {
                "country": "Spain",
                "visits": 711
            }, {
                "country": "Netherlands",
                "visits": 665
            }, {
                "country": "Russia",
                "visits": 580
            }, {
                "country": "South Korea",
                "visits": 443
            }, {
                "country": "Canada",
                "visits": 441
            }, {
                "country": "Brazil",
                "visits": 395
            }],
            "valueAxes": [{
                "gridColor": "#FFFFFF",
                "gridAlpha": 0.2,
                "dashLength": 0
            }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": true
            }

        });
    }

    var demo2 = function() {
        var chart = AmCharts.makeChart("m_amcharts_2", {
            "type": "serial",
            "addClassNames": true,
            "theme": "light",
            "autoMargins": false,
            "marginLeft": 30,
            "marginRight": 8,
            "marginTop": 10,
            "marginBottom": 26,
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },

            "dataProvider": [{
                "year": 2009,
                "income": 23.5,
                "expenses": 21.1
            }, {
                "year": 2010,
                "income": 26.2,
                "expenses": 30.5
            }, {
                "year": 2011,
                "income": 30.1,
                "expenses": 34.9
            }, {
                "year": 2012,
                "income": 29.5,
                "expenses": 31.1
            }, {
                "year": 2013,
                "income": 30.6,
                "expenses": 28.2,
                "dashLengthLine": 5
            }, {
                "year": 2014,
                "income": 34.1,
                "expenses": 32.9,
                "dashLengthColumn": 5,
                "alpha": 0.2,
                "additional": "(projection)"
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "alphaField": "alpha",
                "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                "fillAlphas": 1,
                "title": "Income",
                "type": "column",
                "valueField": "income",
                "dashLengthField": "dashLengthColumn"
            }, {
                "id": "graph2",
                "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                "bullet": "round",
                "lineThickness": 3,
                "bulletSize": 7,
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "useLineColorForBulletBorder": true,
                "bulletBorderThickness": 3,
                "fillAlphas": 0,
                "lineAlpha": 1,
                "title": "Expenses",
                "valueField": "expenses",
                "dashLengthField": "dashLengthLine"
            }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "tickLength": 0
            },
            "export": {
                "enabled": true
            }
        });
    }

    var demo3 = function() {
        var chart = AmCharts.makeChart("m_amcharts_3", {
            "theme": "light",
            "type": "serial",
            "dataProvider": [{
                "country": "USA",
                "year2004": 3.5,
                "year2005": 4.2
            }, {
                "country": "UK",
                "year2004": 1.7,
                "year2005": 3.1
            }, {
                "country": "Canada",
                "year2004": 2.8,
                "year2005": 2.9
            }, {
                "country": "Japan",
                "year2004": 2.6,
                "year2005": 2.3
            }, {
                "country": "France",
                "year2004": 1.4,
                "year2005": 2.1
            }, {
                "country": "Brazil",
                "year2004": 2.6,
                "year2005": 4.9
            }],
            "valueAxes": [{
                "unit": "%",
                "position": "left",
                "title": "GDP growth rate",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "2004",
                "type": "column",
                "valueField": "year2004"
            }, {
                "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "2005",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.5,
                "valueField": "year2005"
            }],
            "plotAreaFillAlphas": 0.1,
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }

        });
    }

    var demo4 = function() {
        var chart = AmCharts.makeChart("m_amcharts_4", {
            "theme": "light",
            "type": "serial",
            "dataProvider": [{
                "country": "USA",
                "year2004": 3.5,
                "year2005": 4.2
            }, {
                "country": "UK",
                "year2004": 1.7,
                "year2005": 3.1
            }, {
                "country": "Canada",
                "year2004": 2.8,
                "year2005": 2.9
            }, {
                "country": "Japan",
                "year2004": 2.6,
                "year2005": 2.3
            }, {
                "country": "France",
                "year2004": 1.4,
                "year2005": 2.1
            }, {
                "country": "Brazil",
                "year2004": 2.6,
                "year2005": 4.9
            }, {
                "country": "Russia",
                "year2004": 6.4,
                "year2005": 7.2
            }, {
                "country": "India",
                "year2004": 8,
                "year2005": 7.1
            }, {
                "country": "China",
                "year2004": 9.9,
                "year2005": 10.1
            }],
            "valueAxes": [{
                "stackType": "3d",
                "unit": "%",
                "position": "left",
                "title": "GDP growth rate",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "2004",
                "type": "column",
                "valueField": "year2004"
            }, {
                "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "2005",
                "type": "column",
                "valueField": "year2005"
            }],
            "plotAreaFillAlphas": 0.1,
            "depth3D": 60,
            "angle": 30,
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }
        });
    }

    var demo5 = function() {
        var chart = AmCharts.makeChart("m_amcharts_5", {
            "type": "serial",
            "theme": "light",
            "handDrawn": true,
            "handDrawScatter": 3,
            "legend": {
                "useGraphSettings": true,
                "markerSize": 12,
                "valueWidth": 0,
                "verticalGap": 0
            },
            "dataProvider": [{
                "year": 2005,
                "income": 23.5,
                "expenses": 18.1
            }, {
                "year": 2006,
                "income": 26.2,
                "expenses": 22.8
            }, {
                "year": 2007,
                "income": 30.1,
                "expenses": 23.9
            }, {
                "year": 2008,
                "income": 29.5,
                "expenses": 25.1
            }, {
                "year": 2009,
                "income": 24.6,
                "expenses": 25
            }],
            "valueAxes": [{
                "minorGridAlpha": 0.08,
                "minorGridEnabled": true,
                "position": "top",
                "axisAlpha": 0
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
                "title": "Income",
                "type": "column",
                "fillAlphas": 0.8,

                "valueField": "income"
            }, {
                "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "useLineColorForBulletBorder": true,
                "fillAlphas": 0,
                "lineThickness": 2,
                "lineAlpha": 1,
                "bulletSize": 7,
                "title": "Expenses",
                "valueField": "expenses"
            }],
            "rotate": true,
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }

        });
    }

    var demo6 = function() {
        var chart = AmCharts.makeChart("m_amcharts_6", {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled": true,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#ffffff"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "value",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset": 30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "limitToGraph": "g1",
                "valueLineAlpha": 0.2,
                "valueZoomable": true
            },
            "valueScrollbar": {
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 10
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": [{
                "date": "2012-07-27",
                "value": 13
            }, {
                "date": "2012-07-28",
                "value": 11
            }, {
                "date": "2012-07-29",
                "value": 15
            }, {
                "date": "2012-07-30",
                "value": 16
            }, {
                "date": "2012-07-31",
                "value": 18
            }, {
                "date": "2012-08-01",
                "value": 13
            }, {
                "date": "2012-08-02",
                "value": 22
            }, {
                "date": "2012-08-03",
                "value": 23
            }, {
                "date": "2012-08-04",
                "value": 20
            }, {
                "date": "2012-08-05",
                "value": 17
            }, {
                "date": "2012-08-06",
                "value": 16
            }, {
                "date": "2012-08-07",
                "value": 18
            }, {
                "date": "2012-08-08",
                "value": 21
            }, {
                "date": "2012-08-09",
                "value": 26
            }, {
                "date": "2012-08-10",
                "value": 24
            }, {
                "date": "2012-08-11",
                "value": 29
            }, {
                "date": "2012-08-12",
                "value": 32
            }, {
                "date": "2012-08-13",
                "value": 18
            }, {
                "date": "2012-08-14",
                "value": 24
            }, {
                "date": "2012-08-15",
                "value": 22
            }, {
                "date": "2012-08-16",
                "value": 18
            }, {
                "date": "2012-08-17",
                "value": 19
            }, {
                "date": "2012-08-18",
                "value": 14
            }, {
                "date": "2012-08-19",
                "value": 15
            }, {
                "date": "2012-08-20",
                "value": 12
            }, {
                "date": "2012-08-21",
                "value": 8
            }, {
                "date": "2012-08-22",
                "value": 9
            }, {
                "date": "2012-08-23",
                "value": 8
            }, {
                "date": "2012-08-24",
                "value": 7
            }, {
                "date": "2012-08-25",
                "value": 5
            }, {
                "date": "2012-08-26",
                "value": 11
            }, {
                "date": "2012-08-27",
                "value": 13
            }, {
                "date": "2012-08-28",
                "value": 18
            }, {
                "date": "2012-08-29",
                "value": 20
            }, {
                "date": "2012-08-30",
                "value": 29
            }, {
                "date": "2012-08-31",
                "value": 33
            }, {
                "date": "2012-09-01",
                "value": 42
            }, {
                "date": "2012-09-02",
                "value": 35
            }, {
                "date": "2012-09-03",
                "value": 31
            }, {
                "date": "2012-09-04",
                "value": 47
            }, {
                "date": "2012-09-05",
                "value": 52
            }, {
                "date": "2012-09-06",
                "value": 46
            }, {
                "date": "2012-09-07",
                "value": 41
            }, {
                "date": "2012-09-08",
                "value": 43
            }, {
                "date": "2012-09-09",
                "value": 40
            }, {
                "date": "2012-09-10",
                "value": 39
            }, {
                "date": "2012-09-11",
                "value": 34
            }, {
                "date": "2012-09-12",
                "value": 29
            }, {
                "date": "2012-09-13",
                "value": 34
            }, {
                "date": "2012-09-14",
                "value": 37
            }, {
                "date": "2012-09-15",
                "value": 42
            }, {
                "date": "2012-09-16",
                "value": 49
            }, {
                "date": "2012-09-17",
                "value": 46
            }, {
                "date": "2012-09-18",
                "value": 47
            }, {
                "date": "2012-09-19",
                "value": 55
            }, {
                "date": "2012-09-20",
                "value": 59
            }, {
                "date": "2012-09-21",
                "value": 58
            }, {
                "date": "2012-09-22",
                "value": 57
            }, {
                "date": "2012-09-23",
                "value": 61
            }, {
                "date": "2012-09-24",
                "value": 59
            }, {
                "date": "2012-09-25",
                "value": 67
            }, {
                "date": "2012-09-26",
                "value": 65
            }, {
                "date": "2012-09-27",
                "value": 61
            }, {
                "date": "2012-09-28",
                "value": 66
            }, {
                "date": "2012-09-29",
                "value": 69
            }, {
                "date": "2012-09-30",
                "value": 71
            }, {
                "date": "2012-10-01",
                "value": 67
            }, {
                "date": "2012-10-02",
                "value": 63
            }, {
                "date": "2012-10-03",
                "value": 46
            }, {
                "date": "2012-10-04",
                "value": 32
            }, {
                "date": "2012-10-05",
                "value": 21
            }, {
                "date": "2012-10-06",
                "value": 18
            }, {
                "date": "2012-10-07",
                "value": 21
            }, {
                "date": "2012-10-08",
                "value": 28
            }, {
                "date": "2012-10-09",
                "value": 27
            }, {
                "date": "2012-10-10",
                "value": 36
            }, {
                "date": "2012-10-11",
                "value": 33
            }, {
                "date": "2012-10-12",
                "value": 31
            }, {
                "date": "2012-10-13",
                "value": 30
            }, {
                "date": "2012-10-14",
                "value": 34
            }, {
                "date": "2012-10-15",
                "value": 38
            }, {
                "date": "2012-10-16",
                "value": 37
            }, {
                "date": "2012-10-17",
                "value": 44
            }, {
                "date": "2012-10-18",
                "value": 49
            }, {
                "date": "2012-10-19",
                "value": 53
            }, {
                "date": "2012-10-20",
                "value": 57
            }, {
                "date": "2012-10-21",
                "value": 60
            }, {
                "date": "2012-10-22",
                "value": 61
            }, {
                "date": "2012-10-23",
                "value": 69
            }, {
                "date": "2012-10-24",
                "value": 67
            }, {
                "date": "2012-10-25",
                "value": 72
            }, {
                "date": "2012-10-26",
                "value": 77
            }, {
                "date": "2012-10-27",
                "value": 75
            }, {
                "date": "2012-10-28",
                "value": 70
            }, {
                "date": "2012-10-29",
                "value": 72
            }, {
                "date": "2012-10-30",
                "value": 70
            }, {
                "date": "2012-10-31",
                "value": 72
            }, {
                "date": "2012-11-01",
                "value": 73
            }, {
                "date": "2012-11-02",
                "value": 67
            }, {
                "date": "2012-11-03",
                "value": 68
            }, {
                "date": "2012-11-04",
                "value": 65
            }, {
                "date": "2012-11-05",
                "value": 71
            }, {
                "date": "2012-11-06",
                "value": 75
            }, {
                "date": "2012-11-07",
                "value": 74
            }, {
                "date": "2012-11-08",
                "value": 71
            }, {
                "date": "2012-11-09",
                "value": 76
            }, {
                "date": "2012-11-10",
                "value": 77
            }, {
                "date": "2012-11-11",
                "value": 81
            }, {
                "date": "2012-11-12",
                "value": 83
            }, {
                "date": "2012-11-13",
                "value": 80
            }, {
                "date": "2012-11-14",
                "value": 81
            }, {
                "date": "2012-11-15",
                "value": 87
            }, {
                "date": "2012-11-16",
                "value": 82
            }, {
                "date": "2012-11-17",
                "value": 86
            }, {
                "date": "2012-11-18",
                "value": 80
            }, {
                "date": "2012-11-19",
                "value": 87
            }, {
                "date": "2012-11-20",
                "value": 83
            }, {
                "date": "2012-11-21",
                "value": 85
            }, {
                "date": "2012-11-22",
                "value": 84
            }, {
                "date": "2012-11-23",
                "value": 82
            }, {
                "date": "2012-11-24",
                "value": 73
            }, {
                "date": "2012-11-25",
                "value": 71
            }, {
                "date": "2012-11-26",
                "value": 75
            }, {
                "date": "2012-11-27",
                "value": 79
            }, {
                "date": "2012-11-28",
                "value": 70
            }, {
                "date": "2012-11-29",
                "value": 73
            }, {
                "date": "2012-11-30",
                "value": 61
            }, {
                "date": "2012-12-01",
                "value": 62
            }, {
                "date": "2012-12-02",
                "value": 66
            }, {
                "date": "2012-12-03",
                "value": 65
            }, {
                "date": "2012-12-04",
                "value": 73
            }, {
                "date": "2012-12-05",
                "value": 79
            }, {
                "date": "2012-12-06",
                "value": 78
            }, {
                "date": "2012-12-07",
                "value": 78
            }, {
                "date": "2012-12-08",
                "value": 78
            }, {
                "date": "2012-12-09",
                "value": 74
            }, {
                "date": "2012-12-10",
                "value": 73
            }, {
                "date": "2012-12-11",
                "value": 75
            }, {
                "date": "2012-12-12",
                "value": 70
            }, {
                "date": "2012-12-13",
                "value": 77
            }, {
                "date": "2012-12-14",
                "value": 67
            }, {
                "date": "2012-12-15",
                "value": 62
            }, {
                "date": "2012-12-16",
                "value": 64
            }, {
                "date": "2012-12-17",
                "value": 61
            }, {
                "date": "2012-12-18",
                "value": 59
            }, {
                "date": "2012-12-19",
                "value": 53
            }, {
                "date": "2012-12-20",
                "value": 54
            }, {
                "date": "2012-12-21",
                "value": 56
            }, {
                "date": "2012-12-22",
                "value": 59
            }, {
                "date": "2012-12-23",
                "value": 58
            }, {
                "date": "2012-12-24",
                "value": 55
            }, {
                "date": "2012-12-25",
                "value": 52
            }, {
                "date": "2012-12-26",
                "value": 54
            }, {
                "date": "2012-12-27",
                "value": 50
            }, {
                "date": "2012-12-28",
                "value": 50
            }, {
                "date": "2012-12-29",
                "value": 51
            }, {
                "date": "2012-12-30",
                "value": 52
            }, {
                "date": "2012-12-31",
                "value": 58
            }, {
                "date": "2013-01-01",
                "value": 60
            }, {
                "date": "2013-01-02",
                "value": 67
            }, {
                "date": "2013-01-03",
                "value": 64
            }, {
                "date": "2013-01-04",
                "value": 66
            }, {
                "date": "2013-01-05",
                "value": 60
            }, {
                "date": "2013-01-06",
                "value": 63
            }, {
                "date": "2013-01-07",
                "value": 61
            }, {
                "date": "2013-01-08",
                "value": 60
            }, {
                "date": "2013-01-09",
                "value": 65
            }, {
                "date": "2013-01-10",
                "value": 75
            }, {
                "date": "2013-01-11",
                "value": 77
            }, {
                "date": "2013-01-12",
                "value": 78
            }, {
                "date": "2013-01-13",
                "value": 70
            }, {
                "date": "2013-01-14",
                "value": 70
            }, {
                "date": "2013-01-15",
                "value": 73
            }, {
                "date": "2013-01-16",
                "value": 71
            }, {
                "date": "2013-01-17",
                "value": 74
            }, {
                "date": "2013-01-18",
                "value": 78
            }, {
                "date": "2013-01-19",
                "value": 85
            }, {
                "date": "2013-01-20",
                "value": 82
            }, {
                "date": "2013-01-21",
                "value": 83
            }, {
                "date": "2013-01-22",
                "value": 88
            }, {
                "date": "2013-01-23",
                "value": 85
            }, {
                "date": "2013-01-24",
                "value": 85
            }, {
                "date": "2013-01-25",
                "value": 80
            }, {
                "date": "2013-01-26",
                "value": 87
            }, {
                "date": "2013-01-27",
                "value": 84
            }, {
                "date": "2013-01-28",
                "value": 83
            }, {
                "date": "2013-01-29",
                "value": 84
            }, {
                "date": "2013-01-30",
                "value": 81
            }]
        });

        chart.addListener("rendered", zoomChart);

        zoomChart();

        function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
        }
    }

    var demo7 = function() {
        var chartData = generateChartData();
        var chart = AmCharts.makeChart("m_amcharts_7", {
            "type": "serial",
            "theme": "light",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "marginTop": 7,
            "dataProvider": chartData,
            "valueAxes": [{
                "axisAlpha": 0.2,
                "dashLength": 1,
                "position": "left"
            }],
            "mouseWheelZoomEnabled": true,
            "graphs": [{
                "id": "g1",
                "balloonText": "[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "hideBulletsCount": 50,
                "title": "red line",
                "valueField": "visits",
                "useLineColorForBulletBorder": true,
                "balloon": {
                    "drop": true
                }
            }],
            "chartScrollbar": {
                "autoGridCount": true,
                "graph": "g1",
                "scrollbarHeight": 40
            },
            "chartCursor": {
                "limitToGraph": "g1"
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "axisColor": "#DADADA",
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        });

        chart.addListener("rendered", zoomChart);
        zoomChart();

        // this method is called when chart is first inited as we listen for "rendered" event
        function zoomChart() {
            // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
            chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
        }


        // generate some random data, quite different range
        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 5);

            for (var i = 0; i < 1000; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var visits = Math.round(Math.random() * (40 + i / 5)) + 20 + i;

                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            return chartData;
        }
    }

    var demo8 = function() {
        var chart = AmCharts.makeChart("m_amcharts_8", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": [{
                "date": "2012-01-01",
                "distance": 227,
                "townName": "New York",
                "townName2": "New York",
                "townSize": 25,
                "latitude": 40.71,
                "duration": 408
            }, {
                "date": "2012-01-02",
                "distance": 371,
                "townName": "Washington",
                "townSize": 14,
                "latitude": 38.89,
                "duration": 482
            }, {
                "date": "2012-01-03",
                "distance": 433,
                "townName": "Wilmington",
                "townSize": 6,
                "latitude": 34.22,
                "duration": 562
            }, {
                "date": "2012-01-04",
                "distance": 345,
                "townName": "Jacksonville",
                "townSize": 7,
                "latitude": 30.35,
                "duration": 379
            }, {
                "date": "2012-01-05",
                "distance": 480,
                "townName": "Miami",
                "townName2": "Miami",
                "townSize": 10,
                "latitude": 25.83,
                "duration": 501
            }, {
                "date": "2012-01-06",
                "distance": 386,
                "townName": "Tallahassee",
                "townSize": 7,
                "latitude": 30.46,
                "duration": 443
            }, {
                "date": "2012-01-07",
                "distance": 348,
                "townName": "New Orleans",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            }, {
                "date": "2012-01-08",
                "distance": 238,
                "townName": "Houston",
                "townName2": "Houston",
                "townSize": 16,
                "latitude": 29.76,
                "duration": 309
            }, {
                "date": "2012-01-09",
                "distance": 218,
                "townName": "Dalas",
                "townSize": 17,
                "latitude": 32.8,
                "duration": 287
            }, {
                "date": "2012-01-10",
                "distance": 349,
                "townName": "Oklahoma City",
                "townSize": 11,
                "latitude": 35.49,
                "duration": 485
            }, {
                "date": "2012-01-11",
                "distance": 603,
                "townName": "Kansas City",
                "townSize": 10,
                "latitude": 39.1,
                "duration": 890
            }, {
                "date": "2012-01-12",
                "distance": 534,
                "townName": "Denver",
                "townName2": "Denver",
                "townSize": 18,
                "latitude": 39.74,
                "duration": 810
            }, {
                "date": "2012-01-13",
                "townName": "Salt Lake City",
                "townSize": 12,
                "distance": 425,
                "duration": 670,
                "latitude": 40.75,
                "dashLength": 8,
                "alpha": 0.4
            }, {
                "date": "2012-01-14",
                "latitude": 36.1,
                "duration": 470,
                "townName": "Las Vegas",
                "townName2": "Las Vegas"
            }, {
                "date": "2012-01-15"
            }, {
                "date": "2012-01-16"
            }, {
                "date": "2012-01-17"
            }, {
                "date": "2012-01-18"
            }, {
                "date": "2012-01-19"
            }],
            "valueAxes": [{
                "id": "distanceAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "title": "distance"
            }, {
                "id": "latitudeAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "labelsEnabled": false,
                "position": "right"
            }, {
                "id": "durationAxis",
                "duration": "mm",
                "durationUnits": {
                    "hh": "h ",
                    "mm": "min"
                },
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "position": "right",
                "title": "duration"
            }],
            "graphs": [{
                "alphaField": "alpha",
                "balloonText": "[[value]] miles",
                "dashLengthField": "dashLength",
                "fillAlphas": 0.7,
                "legendPeriodValueText": "total: [[value.sum]] mi",
                "legendValueText": "[[value]] mi",
                "title": "distance",
                "type": "column",
                "valueField": "distance",
                "valueAxis": "distanceAxis"
            }, {
                "balloonText": "latitude:[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "useLineColorForBulletBorder": true,
                "bulletColor": "#FFFFFF",
                "bulletSizeField": "townSize",
                "dashLengthField": "dashLength",
                "descriptionField": "townName",
                "labelPosition": "right",
                "labelText": "[[townName2]]",
                "legendValueText": "[[value]]/[[description]]",
                "title": "latitude/city",
                "fillAlphas": 0,
                "valueField": "latitude",
                "valueAxis": "latitudeAxis"
            }, {
                "bullet": "square",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 1,
                "dashLengthField": "dashLength",
                "legendValueText": "[[value]]",
                "title": "duration",
                "fillAlphas": 0,
                "valueField": "duration",
                "valueAxis": "durationAxis"
            }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "categoryAxis": {
                "dateFormats": [{
                    "period": "DD",
                    "format": "DD"
                }, {
                    "period": "WW",
                    "format": "MMM DD"
                }, {
                    "period": "MM",
                    "format": "MMM"
                }, {
                    "period": "YYYY",
                    "format": "YYYY"
                }],
                "parseDates": true,
                "autoGridCount": false,
                "axisColor": "#555555",
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "gridCount": 50
            },
            "export": {
                "enabled": true
            }
        });
    }

    var demo9 = function() {
        var chart = AmCharts.makeChart("m_amcharts_9", {
            "type": "radar",
            "theme": "light",
            "dataProvider": [{
                "country": "Czech Republic",
                "litres": 156.9
            }, {
                "country": "Ireland",
                "litres": 131.1
            }, {
                "country": "Germany",
                "litres": 115.8
            }, {
                "country": "Australia",
                "litres": 109.9
            }, {
                "country": "Austria",
                "litres": 108.3
            }, {
                "country": "UK",
                "litres": 99
            }],
            "valueAxes": [{
                "axisTitleOffset": 20,
                "minimum": 0,
                "axisAlpha": 0.15
            }],
            "startDuration": 2,
            "graphs": [{
                "balloonText": "[[value]] litres of beer per year",
                "bullet": "round",
                "lineThickness": 2,
                "valueField": "litres"
            }],
            "categoryField": "country",
            "export": {
                "enabled": true
            }
        });
    }

    var demo10 = function() {
        var chart = AmCharts.makeChart("m_amcharts_10", {
            "type": "radar",
            "theme": "light",
            "dataProvider": [{
                "direction": "N",
                "value": 8
            }, {
                "direction": "NE",
                "value": 9
            }, {
                "direction": "E",
                "value": 4.5
            }, {
                "direction": "SE",
                "value": 3.5
            }, {
                "direction": "S",
                "value": 9.2
            }, {
                "direction": "SW",
                "value": 8.4
            }, {
                "direction": "W",
                "value": 11.1
            }, {
                "direction": "NW",
                "value": 10
            }],
            "valueAxes": [{
                "gridType": "circles",
                "minimum": 0,
                "autoGridCount": false,
                "axisAlpha": 0.2,
                "fillAlpha": 0.05,
                "fillColor": "#FFFFFF",
                "gridAlpha": 0.08,
                "guides": [{
                    "angle": 225,
                    "fillAlpha": 0.3,
                    "fillColor": "#0066CC",
                    "tickLength": 0,
                    "toAngle": 315,
                    "toValue": 14,
                    "value": 0,
                    "lineAlpha": 0,

                }, {
                    "angle": 45,
                    "fillAlpha": 0.3,
                    "fillColor": "#CC3333",
                    "tickLength": 0,
                    "toAngle": 135,
                    "toValue": 14,
                    "value": 0,
                    "lineAlpha": 0,
                }],
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "[[category]]: [[value]] m/s",
                "bullet": "round",
                "fillAlphas": 0.3,
                "valueField": "value"
            }],
            "categoryField": "direction",
            "export": {
                "enabled": true
            }
        });
    }

    var demo11 = function() {
        var chart = AmCharts.makeChart("m_amcharts_11", {
            "type": "radar",
            "theme": "light",
            "dataProvider": [],
            "valueAxes": [{
                "gridType": "circles",
                "minimum": 0
            }],
            "startDuration": 1,
            "polarScatter": {
                "minimum": 0,
                "maximum": 359,
                "step": 1
            },
            "legend": {
                "position": "right"
            },
            "graphs": [{
                "title": "Trial #1",
                "balloonText": "[[category]]: [[value]] m/s",
                "bullet": "round",
                "lineAlpha": 0,
                "series": [
                    [83, 5.1],
                    [44, 5.8],
                    [76, 9],
                    [2, 1.4],
                    [100, 8.3],
                    [96, 1.7],
                    [68, 3.9],
                    [0, 3],
                    [100, 4.1],
                    [16, 5.5],
                    [71, 6.8],
                    [100, 7.9],
                    [9, 6.8],
                    [85, 8.3],
                    [51, 6.7],
                    [95, 3.8],
                    [95, 4.4],
                    [1, 0.2],
                    [107, 9.7],
                    [50, 4.2],
                    [42, 9.2],
                    [35, 8],
                    [44, 6],
                    [64, 0.7],
                    [53, 3.3],
                    [92, 4.1],
                    [43, 7.3],
                    [15, 7.5],
                    [43, 4.3],
                    [90, 9.9]
                ]
            }, {
                "title": "Trial #2",
                "balloonText": "[[category]]: [[value]] m/s",
                "bullet": "round",
                "lineAlpha": 0,
                "series": [
                    [178, 1.3],
                    [129, 3.4],
                    [99, 2.4],
                    [80, 9.9],
                    [118, 9.4],
                    [103, 8.7],
                    [91, 4.2],
                    [151, 1.2],
                    [168, 5.2],
                    [168, 1.6],
                    [152, 1.2],
                    [149, 3.4],
                    [182, 8.8],
                    [106, 6.7],
                    [111, 9.2],
                    [130, 6.3],
                    [147, 2.9],
                    [81, 8.1],
                    [138, 7.7],
                    [107, 3.9],
                    [124, 0.7],
                    [130, 2.6],
                    [86, 9.2],
                    [169, 7.5],
                    [122, 9.9],
                    [100, 3.8],
                    [172, 4.1],
                    [140, 7.3],
                    [161, 2.3],
                    [141, 0.9]
                ]
            }, {
                "title": "Trial #3",
                "balloonText": "[[category]]: [[value]] m/s",
                "bullet": "round",
                "lineAlpha": 0,
                "series": [
                    [419, 4.9],
                    [417, 5.5],
                    [434, 0.1],
                    [344, 2.5],
                    [279, 7.5],
                    [307, 8.4],
                    [279, 9],
                    [220, 8.4],
                    [204, 8],
                    [446, 0.9],
                    [397, 8.9],
                    [351, 1.7],
                    [393, 0.7],
                    [254, 1.8],
                    [260, 0.4],
                    [300, 3.5],
                    [199, 2.7],
                    [182, 5.8],
                    [173, 2],
                    [201, 9.7],
                    [288, 1.2],
                    [333, 7.4],
                    [308, 1.9],
                    [330, 8],
                    [408, 1.7],
                    [274, 0.8],
                    [296, 3.1],
                    [279, 4.3],
                    [379, 5.6],
                    [175, 6.8]
                ]
            }],
            "export": {
                "enabled": true
            }
        });
    }

    var demo12 = function() {
        var chart = AmCharts.makeChart("m_amcharts_12", {
            "type": "pie",
            "theme": "light",
            "dataProvider": [{
                "country": "Lithuania",
                "litres": 501.9
            }, {
                "country": "Czech Republic",
                "litres": 301.9
            }, {
                "country": "Ireland",
                "litres": 201.1
            }, {
                "country": "Germany",
                "litres": 165.8
            }, {
                "country": "Australia",
                "litres": 139.9
            }, {
                "country": "Austria",
                "litres": 128.3
            }, {
                "country": "UK",
                "litres": 99
            }, {
                "country": "Belgium",
                "litres": 60
            }, {
                "country": "The Netherlands",
                "litres": 50
            }],
            "valueField": "litres",
            "titleField": "country",
            "balloon": {
                "fixedPosition": true
            },
            "export": {
                "enabled": true
            }
        });
    }

    var demo13 = function() {
        /**
         * Define data for each year
         */
        var chartData = {
            "1995": [{
                    "sector": "Agriculture",
                    "size": 6.6
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.6
                },
                {
                    "sector": "Manufacturing",
                    "size": 23.2
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.2
                },
                {
                    "sector": "Construction",
                    "size": 4.5
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 14.6
                },
                {
                    "sector": "Transport and Communication",
                    "size": 9.3
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 22.5
                }
            ],
            "1996": [{
                    "sector": "Agriculture",
                    "size": 6.4
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.5
                },
                {
                    "sector": "Manufacturing",
                    "size": 22.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2
                },
                {
                    "sector": "Construction",
                    "size": 4.2
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 14.8
                },
                {
                    "sector": "Transport and Communication",
                    "size": 9.7
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 22
                }
            ],
            "1997": [{
                    "sector": "Agriculture",
                    "size": 6.1
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 20.9
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.8
                },
                {
                    "sector": "Construction",
                    "size": 4.2
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 13.7
                },
                {
                    "sector": "Transport and Communication",
                    "size": 9.4
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 22.1
                }
            ],
            "1998": [{
                    "sector": "Agriculture",
                    "size": 6.2
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 21.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.9
                },
                {
                    "sector": "Construction",
                    "size": 4.2
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 14.5
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.6
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 23
                }
            ],
            "1999": [{
                    "sector": "Agriculture",
                    "size": 5.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 20
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.8
                },
                {
                    "sector": "Construction",
                    "size": 4.4
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.2
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.5
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 24.7
                }
            ],
            "2000": [{
                    "sector": "Agriculture",
                    "size": 5.1
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 20.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.7
                },
                {
                    "sector": "Construction",
                    "size": 4
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.3
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.7
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 24.6
                }
            ],
            "2001": [{
                    "sector": "Agriculture",
                    "size": 5.5
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 20.3
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.6
                },
                {
                    "sector": "Construction",
                    "size": 3.1
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.3
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.7
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 25.8
                }
            ],
            "2002": [{
                    "sector": "Agriculture",
                    "size": 5.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 20.5
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.6
                },
                {
                    "sector": "Construction",
                    "size": 3.6
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.1
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.7
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 26
                }
            ],
            "2003": [{
                    "sector": "Agriculture",
                    "size": 4.9
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 19.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.5
                },
                {
                    "sector": "Construction",
                    "size": 3.3
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.2
                },
                {
                    "sector": "Transport and Communication",
                    "size": 11
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 27.5
                }
            ],
            "2004": [{
                    "sector": "Agriculture",
                    "size": 4.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 18.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.4
                },
                {
                    "sector": "Construction",
                    "size": 3.3
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.9
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.6
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 28.1
                }
            ],
            "2005": [{
                    "sector": "Agriculture",
                    "size": 4.3
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 18.1
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.4
                },
                {
                    "sector": "Construction",
                    "size": 3.9
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.7
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.6
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 29.1
                }
            ],
            "2006": [{
                    "sector": "Agriculture",
                    "size": 4
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 16.5
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.3
                },
                {
                    "sector": "Construction",
                    "size": 3.7
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 14.2
                },
                {
                    "sector": "Transport and Communication",
                    "size": 12.1
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 29.1
                }
            ],
            "2007": [{
                    "sector": "Agriculture",
                    "size": 4.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 16.2
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.2
                },
                {
                    "sector": "Construction",
                    "size": 4.1
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.6
                },
                {
                    "sector": "Transport and Communication",
                    "size": 11.2
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 30.4
                }
            ],
            "2008": [{
                    "sector": "Agriculture",
                    "size": 4.9
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 17.2
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.4
                },
                {
                    "sector": "Construction",
                    "size": 5.1
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.4
                },
                {
                    "sector": "Transport and Communication",
                    "size": 11.1
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 28.4
                }
            ],
            "2009": [{
                    "sector": "Agriculture",
                    "size": 4.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 16.4
                },
                {
                    "sector": "Electricity and Water",
                    "size": 1.9
                },
                {
                    "sector": "Construction",
                    "size": 4.9
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.5
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.9
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 27.9
                }
            ],
            "2010": [{
                    "sector": "Agriculture",
                    "size": 4.2
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 16.2
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.2
                },
                {
                    "sector": "Construction",
                    "size": 4.3
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.7
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.2
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 28.8
                }
            ],
            "2011": [{
                    "sector": "Agriculture",
                    "size": 4.1
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 14.9
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.3
                },
                {
                    "sector": "Construction",
                    "size": 5
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 17.3
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.2
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 27.2
                }
            ],
            "2012": [{
                    "sector": "Agriculture",
                    "size": 3.8
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.3
                },
                {
                    "sector": "Manufacturing",
                    "size": 14.9
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.6
                },
                {
                    "sector": "Construction",
                    "size": 5.1
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 15.8
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.7
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 28
                }
            ],
            "2013": [{
                    "sector": "Agriculture",
                    "size": 3.7
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 14.9
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.7
                },
                {
                    "sector": "Construction",
                    "size": 5.7
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.5
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.5
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 26.6
                }
            ],
            "2014": [{
                    "sector": "Agriculture",
                    "size": 3.9
                },
                {
                    "sector": "Mining and Quarrying",
                    "size": 0.2
                },
                {
                    "sector": "Manufacturing",
                    "size": 14.5
                },
                {
                    "sector": "Electricity and Water",
                    "size": 2.7
                },
                {
                    "sector": "Construction",
                    "size": 5.6
                },
                {
                    "sector": "Trade (Wholesale, Retail, Motor)",
                    "size": 16.6
                },
                {
                    "sector": "Transport and Communication",
                    "size": 10.5
                },
                {
                    "sector": "Finance, real estate and business services",
                    "size": 26.5
                }
            ]
        };

        /**
         * Create the chart
         */
        var currentYear = 1995;
        var chart = AmCharts.makeChart("m_amcharts_13", {
            "type": "pie",
            "theme": "light",
            "dataProvider": [],
            "valueField": "size",
            "titleField": "sector",
            "startDuration": 0,
            "innerRadius": 80,
            "pullOutRadius": 20,
            "marginTop": 30,
            "titles": [{
                "text": "South African Economy"
            }],
            "allLabels": [{
                "y": "54%",
                "align": "center",
                "size": 25,
                "bold": true,
                "text": "1995",
                "color": "#555"
            }, {
                "y": "49%",
                "align": "center",
                "size": 15,
                "text": "Year",
                "color": "#555"
            }],
            "listeners": [{
                "event": "init",
                "method": function(e) {
                    var chart = e.chart;

                    function getCurrentData() {
                        var data = chartData[currentYear];
                        currentYear++;
                        if (currentYear > 2014)
                            currentYear = 1995;
                        return data;
                    }

                    function loop() {
                        chart.allLabels[0].text = currentYear;
                        var data = getCurrentData();
                        chart.animateData(data, {
                            duration: 1000,
                            complete: function() {
                                setTimeout(loop, 3000);
                            }
                        });
                    }

                    loop();
                }
            }],
            "export": {
                "enabled": true
            }
        });
    }


    return {
        // public functions
        init: function() {
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
            demo7();
            demo8();
            demo9();
            demo10();
            demo11();
            demo12();
            demo13();
        }
    };
}();

jQuery(document).ready(function() {
    amChartsChartsDemo.init();
});
//== Class definition
var amChartsMapsDemo = function() {

    //== Private functions
    var demo1 = function() {
        /**
         * SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        /**
         * SVG path for plane icon
         */
        var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

        /**
         * Create the map
         */
        var map = AmCharts.makeChart("m_amcharts_1", {
            "type": "map",
            "theme": "light",


            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 3.5,
                "zoomLongitude": -55,
                "zoomLatitude": 42,

                "lines": [{
                    "id": "line1",
                    "arc": -0.85,
                    "alpha": 0.3,
                    "latitudes": [48.8567, 43.8163, 34.3, 23],
                    "longitudes": [2.3510, -79.4287, -118.15, -82]
                }, {
                    "id": "line2",
                    "alpha": 0,
                    "color": "#000000",
                    "latitudes": [48.8567, 43.8163, 34.3, 23],
                    "longitudes": [2.3510, -79.4287, -118.15, -82]
                }],
                "images": [{
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510
                }, {
                    "svgPath": targetSVG,
                    "title": "Toronto",
                    "latitude": 43.8163,
                    "longitude": -79.4287
                }, {
                    "svgPath": targetSVG,
                    "title": "Los Angeles",
                    "latitude": 34.3,
                    "longitude": -118.15
                }, {
                    "svgPath": targetSVG,
                    "title": "Havana",
                    "latitude": 23,
                    "longitude": -82
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#000000",
                    "alpha": 0.1,
                    "animateAlongLine": true,
                    "lineId": "line2",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.3
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#585869",
                    "animateAlongLine": true,
                    "lineId": "line1",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.8
                }]
            },

            "areasSettings": {
                "unlistedAreasColor": "#8dd9ef"
            },

            "imagesSettings": {
                "color": "#585869",
                "rollOverColor": "#585869",
                "selectedColor": "#585869",
                "pauseDuration": 0.2,
                "animationDuration": 2.5,
                "adjustAnimationSpeed": true
            },

            "linesSettings": {
                "color": "#585869",
                "alpha": 0.4
            },

            "export": {
                "enabled": true
            }

        });
    }

    var demo2 = function() {
        // svg path for target icon
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        // svg path for plane icon
        var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

        var map = AmCharts.makeChart("m_amcharts_2", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 3.5,
                "zoomLongitude": -20.1341,
                "zoomLatitude": 49.1712,

                "lines": [{
                    "latitudes": [51.5002, 50.4422],
                    "longitudes": [-0.1262, 30.5367]
                }, {
                    "latitudes": [51.5002, 46.9480],
                    "longitudes": [-0.1262, 7.4481]
                }, {
                    "latitudes": [51.5002, 59.3328],
                    "longitudes": [-0.1262, 18.0645]
                }, {
                    "latitudes": [51.5002, 40.4167],
                    "longitudes": [-0.1262, -3.7033]
                }, {
                    "latitudes": [51.5002, 46.0514],
                    "longitudes": [-0.1262, 14.5060]
                }, {
                    "latitudes": [51.5002, 48.2116],
                    "longitudes": [-0.1262, 17.1547]
                }, {
                    "latitudes": [51.5002, 44.8048],
                    "longitudes": [-0.1262, 20.4781]
                }, {
                    "latitudes": [51.5002, 55.7558],
                    "longitudes": [-0.1262, 37.6176]
                }, {
                    "latitudes": [51.5002, 38.7072],
                    "longitudes": [-0.1262, -9.1355]
                }, {
                    "latitudes": [51.5002, 54.6896],
                    "longitudes": [-0.1262, 25.2799]
                }, {
                    "latitudes": [51.5002, 64.1353],
                    "longitudes": [-0.1262, -21.8952]
                }, {
                    "latitudes": [51.5002, 40.4300],
                    "longitudes": [-0.1262, -74.0000]
                }],
                "images": [{
                    "id": "london",
                    "svgPath": targetSVG,
                    "title": "London",
                    "latitude": 51.5002,
                    "longitude": -0.1262,
                    "scale": 1
                }, {
                    "svgPath": targetSVG,
                    "title": "Brussels",
                    "latitude": 50.8371,
                    "longitude": 4.3676,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Prague",
                    "latitude": 50.0878,
                    "longitude": 14.4205,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Athens",
                    "latitude": 37.9792,
                    "longitude": 23.7166,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Reykjavik",
                    "latitude": 64.1353,
                    "longitude": -21.8952,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Dublin",
                    "latitude": 53.3441,
                    "longitude": -6.2675,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Oslo",
                    "latitude": 59.9138,
                    "longitude": 10.7387,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Lisbon",
                    "latitude": 38.7072,
                    "longitude": -9.1355,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Moscow",
                    "latitude": 55.7558,
                    "longitude": 37.6176,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Belgrade",
                    "latitude": 44.8048,
                    "longitude": 20.4781,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Bratislava",
                    "latitude": 48.2116,
                    "longitude": 17.1547,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Ljubljana",
                    "latitude": 46.0514,
                    "longitude": 14.5060,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Madrid",
                    "latitude": 40.4167,
                    "longitude": -3.7033,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Stockholm",
                    "latitude": 59.3328,
                    "longitude": 18.0645,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Bern",
                    "latitude": 46.9480,
                    "longitude": 7.4481,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Kiev",
                    "latitude": 50.4422,
                    "longitude": 30.5367,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "New York",
                    "latitude": 40.43,
                    "longitude": -74,
                    "scale": 0.5
                }]
            },

            "areasSettings": {
                "unlistedAreasColor": "#FFCC00",
                "unlistedAreasAlpha": 0.9
            },

            "imagesSettings": {
                "color": "#CC0000",
                "rollOverColor": "#CC0000",
                "selectedColor": "#000000"
            },

            "linesSettings": {
                "arc": -0.7, // this makes lines curved. Use value from -1 to 1
                "arrow": "middle",
                "color": "#CC0000",
                "alpha": 0.4,
                "arrowAlpha": 1,
                "arrowSize": 4
            },
            "zoomControl": {
                "gridHeight": 100,
                "draggerAlpha": 1,
                "gridAlpha": 0.2
            },

            "backgroundZoomsToTop": true,
            "linesAboveImages": true,

            "export": {
                "enabled": true
            }
        });
    }

    var demo3 = function() {
        var map = AmCharts.makeChart("m_amcharts_3", {

            "type": "map",
            "theme": "light",
            "projection": "miller",

            "dataProvider": {
                "map": "worldLow",
                "getAreasFromMap": true
            },
            "areasSettings": {
                "autoZoom": true,
                "selectedColor": "#CC0000"
            },
            "smallMap": {},
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }

    var demo4 = function() {
        /**
         * SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        /**
         * SVG path for plane icon
         */
        var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

        /**
         * Create the map
         */
        var map = AmCharts.makeChart("m_amcharts_4", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": "worldLow",
                "linkToObject": "london",
                "images": [{
                        "id": "london",
                        "color": "#000000",
                        "svgPath": targetSVG,
                        "title": "London",
                        "latitude": 51.5002,
                        "longitude": -0.1262,
                        "scale": 1.5,
                        "zoomLevel": 2.74,
                        "zoomLongitude": -20.1341,
                        "zoomLatitude": 49.1712,

                        "lines": [{
                            "latitudes": [51.5002, 50.4422],
                            "longitudes": [-0.1262, 30.5367]
                        }, {
                            "latitudes": [51.5002, 46.9480],
                            "longitudes": [-0.1262, 7.4481]
                        }, {
                            "latitudes": [51.5002, 59.3328],
                            "longitudes": [-0.1262, 18.0645]
                        }, {
                            "latitudes": [51.5002, 40.4167],
                            "longitudes": [-0.1262, -3.7033]
                        }, {
                            "latitudes": [51.5002, 46.0514],
                            "longitudes": [-0.1262, 14.5060]
                        }, {
                            "latitudes": [51.5002, 48.2116],
                            "longitudes": [-0.1262, 17.1547]
                        }, {
                            "latitudes": [51.5002, 44.8048],
                            "longitudes": [-0.1262, 20.4781]
                        }, {
                            "latitudes": [51.5002, 55.7558],
                            "longitudes": [-0.1262, 37.6176]
                        }, {
                            "latitudes": [51.5002, 38.7072],
                            "longitudes": [-0.1262, -9.1355]
                        }, {
                            "latitudes": [51.5002, 54.6896],
                            "longitudes": [-0.1262, 25.2799]
                        }, {
                            "latitudes": [51.5002, 64.1353],
                            "longitudes": [-0.1262, -21.8952]
                        }, {
                            "latitudes": [51.5002, 40.4300],
                            "longitudes": [-0.1262, -74.0000]
                        }],

                        "images": [{
                            "label": "Flights from London",
                            "svgPath": planeSVG,
                            "left": 100,
                            "top": 45,
                            "labelShiftY": 5,
                            "color": "#CC0000",
                            "labelColor": "#CC0000",
                            "labelRollOverColor": "#CC0000",
                            "labelFontSize": 20
                        }, {
                            "label": "show flights from Vilnius",
                            "left": 106,
                            "top": 70,
                            "labelColor": "#000000",
                            "labelRollOverColor": "#CC0000",
                            "labelFontSize": 11,
                            "linkToObject": "vilnius"
                        }]
                    },

                    {
                        "id": "vilnius",
                        "color": "#000000",
                        "svgPath": targetSVG,
                        "title": "Vilnius",
                        "latitude": 54.6896,
                        "longitude": 25.2799,
                        "scale": 1.5,
                        "zoomLevel": 4.92,
                        "zoomLongitude": 15.4492,
                        "zoomLatitude": 50.2631,

                        "lines": [{
                            "latitudes": [54.6896, 50.8371],
                            "longitudes": [25.2799, 4.3676]
                        }, {
                            "latitudes": [54.6896, 59.9138],
                            "longitudes": [25.2799, 10.7387]
                        }, {
                            "latitudes": [54.6896, 40.4167],
                            "longitudes": [25.2799, -3.7033]
                        }, {
                            "latitudes": [54.6896, 50.0878],
                            "longitudes": [25.2799, 14.4205]
                        }, {
                            "latitudes": [54.6896, 48.2116],
                            "longitudes": [25.2799, 17.1547]
                        }, {
                            "latitudes": [54.6896, 44.8048],
                            "longitudes": [25.2799, 20.4781]
                        }, {
                            "latitudes": [54.6896, 55.7558],
                            "longitudes": [25.2799, 37.6176]
                        }, {
                            "latitudes": [54.6896, 37.9792],
                            "longitudes": [25.2799, 23.7166]
                        }, {
                            "latitudes": [54.6896, 54.6896],
                            "longitudes": [25.2799, 25.2799]
                        }, {
                            "latitudes": [54.6896, 51.5002],
                            "longitudes": [25.2799, -0.1262]
                        }, {
                            "latitudes": [54.6896, 53.3441],
                            "longitudes": [25.2799, -6.2675]
                        }],

                        "images": [{
                            "label": "Flights from Vilnius",
                            "svgPath": planeSVG,
                            "left": 100,
                            "top": 45,
                            "labelShiftY": 5,
                            "color": "#CC0000",
                            "labelColor": "#CC0000",
                            "labelRollOverColor": "#CC0000",
                            "labelFontSize": 20
                        }, {
                            "label": "show flights from London",
                            "left": 106,
                            "top": 70,
                            "labelColor": "#000000",
                            "labelRollOverColor": "#CC0000",
                            "labelFontSize": 11,
                            "linkToObject": "london"
                        }]
                    }, {
                        "svgPath": targetSVG,
                        "title": "Brussels",
                        "latitude": 50.8371,
                        "longitude": 4.3676
                    }, {
                        "svgPath": targetSVG,
                        "title": "Prague",
                        "latitude": 50.0878,
                        "longitude": 14.4205
                    }, {
                        "svgPath": targetSVG,
                        "title": "Athens",
                        "latitude": 37.9792,
                        "longitude": 23.7166
                    }, {
                        "svgPath": targetSVG,
                        "title": "Reykjavik",
                        "latitude": 64.1353,
                        "longitude": -21.8952
                    }, {
                        "svgPath": targetSVG,
                        "title": "Dublin",
                        "latitude": 53.3441,
                        "longitude": -6.2675
                    }, {
                        "svgPath": targetSVG,
                        "title": "Oslo",
                        "latitude": 59.9138,
                        "longitude": 10.7387
                    }, {
                        "svgPath": targetSVG,
                        "title": "Lisbon",
                        "latitude": 38.7072,
                        "longitude": -9.1355
                    }, {
                        "svgPath": targetSVG,
                        "title": "Moscow",
                        "latitude": 55.7558,
                        "longitude": 37.6176
                    }, {
                        "svgPath": targetSVG,
                        "title": "Belgrade",
                        "latitude": 44.8048,
                        "longitude": 20.4781
                    }, {
                        "svgPath": targetSVG,
                        "title": "Bratislava",
                        "latitude": 48.2116,
                        "longitude": 17.1547
                    }, {
                        "svgPath": targetSVG,
                        "title": "Ljubljana",
                        "latitude": 46.0514,
                        "longitude": 14.5060
                    }, {
                        "svgPath": targetSVG,
                        "title": "Madrid",
                        "latitude": 40.4167,
                        "longitude": -3.7033
                    }, {
                        "svgPath": targetSVG,
                        "title": "Stockholm",
                        "latitude": 59.3328,
                        "longitude": 18.0645
                    }, {
                        "svgPath": targetSVG,
                        "title": "Bern",
                        "latitude": 46.9480,
                        "longitude": 7.4481
                    }, {
                        "svgPath": targetSVG,
                        "title": "Kiev",
                        "latitude": 50.4422,
                        "longitude": 30.5367
                    }, {
                        "svgPath": targetSVG,
                        "title": "Paris",
                        "latitude": 48.8567,
                        "longitude": 2.3510
                    }, {
                        "svgPath": targetSVG,
                        "title": "New York",
                        "latitude": 40.43,
                        "longitude": -74
                    }
                ]
            },

            "areasSettings": {
                "unlistedAreasColor": "#FFCC00"
            },

            "imagesSettings": {
                "color": "#CC0000",
                "rollOverColor": "#CC0000",
                "selectedColor": "#000000"
            },

            "linesSettings": {
                "color": "#CC0000",
                "alpha": 0.4
            },

            "balloon": {
                "drop": true
            },

            "backgroundZoomsToTop": true,
            "linesAboveImages": true,

            "export": {
                "enabled": true
            }
        });
    }

    var demo5 = function() {
        var map = AmCharts.makeChart("m_amcharts_5", {
            "type": "map",
            "theme": "light",
            "dataProvider": {
                "map": "worldHigh",
                "zoomLevel": 3.5,
                "zoomLongitude": 10,
                "zoomLatitude": 52,
                "areas": [{
                    "title": "Austria",
                    "id": "AT",
                    "color": "#67b7dc",
                    "customData": "1995",
                    "groupId": "before2004"
                }, {
                    "title": "Ireland",
                    "id": "IE",
                    "color": "#67b7dc",
                    "customData": "1973",
                    "groupId": "before2004"
                }, {
                    "title": "Denmark",
                    "id": "DK",
                    "color": "#67b7dc",
                    "customData": "1973",
                    "groupId": "before2004"
                }, {
                    "title": "Finland",
                    "id": "FI",
                    "color": "#67b7dc",
                    "customData": "1995",
                    "groupId": "before2004"
                }, {
                    "title": "Sweden",
                    "id": "SE",
                    "color": "#67b7dc",
                    "customData": "1995",
                    "groupId": "before2004"
                }, {
                    "title": "Great Britain",
                    "id": "GB",
                    "color": "#67b7dc",
                    "customData": "1973",
                    "groupId": "before2004"
                }, {
                    "title": "Italy",
                    "id": "IT",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "France",
                    "id": "FR",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "Spain",
                    "id": "ES",
                    "color": "#67b7dc",
                    "customData": "1986",
                    "groupId": "before2004"
                }, {
                    "title": "Greece",
                    "id": "GR",
                    "color": "#67b7dc",
                    "customData": "1981",
                    "groupId": "before2004"
                }, {
                    "title": "Germany",
                    "id": "DE",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "Belgium",
                    "id": "BE",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "Luxembourg",
                    "id": "LU",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "Netherlands",
                    "id": "NL",
                    "color": "#67b7dc",
                    "customData": "1957",
                    "groupId": "before2004"
                }, {
                    "title": "Portugal",
                    "id": "PT",
                    "color": "#67b7dc",
                    "customData": "1986",
                    "groupId": "before2004"
                }, {
                    "title": "Lithuania",
                    "id": "LT",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Latvia",
                    "id": "LV",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Czech Republic ",
                    "id": "CZ",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Slovakia",
                    "id": "SK",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Slovenia",
                    "id": "SI",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Estonia",
                    "id": "EE",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Hungary",
                    "id": "HU",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Cyprus",
                    "id": "CY",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Malta",
                    "id": "MT",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Poland",
                    "id": "PL",
                    "color": "#ebdb8b",
                    "customData": "2004",
                    "groupId": "2004"
                }, {
                    "title": "Romania",
                    "id": "RO",
                    "color": "#83c2ba",
                    "customData": "2007",
                    "groupId": "2007"
                }, {
                    "title": "Bulgaria",
                    "id": "BG",
                    "color": "#83c2ba",
                    "customData": "2007",
                    "groupId": "2007"
                }, {
                    "title": "Croatia",
                    "id": "HR",
                    "color": "#db8383",
                    "customData": "2013",
                    "groupId": "2013"
                }]
            },

            "areasSettings": {
                "rollOverOutlineColor": "#FFFFFF",
                "rollOverColor": "#CC0000",
                "alpha": 0.8,
                "unlistedAreasAlpha": 0.1,
                "balloonText": "[[title]] joined EU at [[customData]]"
            },


            "legend": {
                "width": "100%",
                "marginRight": 27,
                "marginLeft": 27,
                "equalWidths": false,
                "backgroundAlpha": 0.5,
                "backgroundColor": "#FFFFFF",
                "borderColor": "#ffffff",
                "borderAlpha": 1,
                "top": 450,
                "left": 0,
                "horizontalGap": 10,
                "data": [{
                    "title": "EU member before 2004",
                    "color": "#67b7dc"
                }, {
                    "title": "Joined at 2004",
                    "color": "#ebdb8b"
                }, {
                    "title": "Joined at 2007",
                    "color": "#83c2ba"
                }, {
                    "title": "Joined at 2013",
                    "color": "#db8383"
                }]
            },
            "export": {
                "enabled": true
            }

        });
    }

    var demo6 = function() {
        var map = AmCharts.makeChart("m_amcharts_6", {
            "type": "map",
            "theme": "light",
            "colorSteps": 10,

            "dataProvider": {
                "map": "usaLow",
                "areas": [{
                    "id": "US-AL",
                    "value": 4447100
                }, {
                    "id": "US-AK",
                    "value": 626932
                }, {
                    "id": "US-AZ",
                    "value": 5130632
                }, {
                    "id": "US-AR",
                    "value": 2673400
                }, {
                    "id": "US-CA",
                    "value": 33871648
                }, {
                    "id": "US-CO",
                    "value": 4301261
                }, {
                    "id": "US-CT",
                    "value": 3405565
                }, {
                    "id": "US-DE",
                    "value": 783600
                }, {
                    "id": "US-FL",
                    "value": 15982378
                }, {
                    "id": "US-GA",
                    "value": 8186453
                }, {
                    "id": "US-HI",
                    "value": 1211537
                }, {
                    "id": "US-ID",
                    "value": 1293953
                }, {
                    "id": "US-IL",
                    "value": 12419293
                }, {
                    "id": "US-IN",
                    "value": 6080485
                }, {
                    "id": "US-IA",
                    "value": 2926324
                }, {
                    "id": "US-KS",
                    "value": 2688418
                }, {
                    "id": "US-KY",
                    "value": 4041769
                }, {
                    "id": "US-LA",
                    "value": 4468976
                }, {
                    "id": "US-ME",
                    "value": 1274923
                }, {
                    "id": "US-MD",
                    "value": 5296486
                }, {
                    "id": "US-MA",
                    "value": 6349097
                }, {
                    "id": "US-MI",
                    "value": 9938444
                }, {
                    "id": "US-MN",
                    "value": 4919479
                }, {
                    "id": "US-MS",
                    "value": 2844658
                }, {
                    "id": "US-MO",
                    "value": 5595211
                }, {
                    "id": "US-MT",
                    "value": 902195
                }, {
                    "id": "US-NE",
                    "value": 1711263
                }, {
                    "id": "US-NV",
                    "value": 1998257
                }, {
                    "id": "US-NH",
                    "value": 1235786
                }, {
                    "id": "US-NJ",
                    "value": 8414350
                }, {
                    "id": "US-NM",
                    "value": 1819046
                }, {
                    "id": "US-NY",
                    "value": 18976457
                }, {
                    "id": "US-NC",
                    "value": 8049313
                }, {
                    "id": "US-ND",
                    "value": 642200
                }, {
                    "id": "US-OH",
                    "value": 11353140
                }, {
                    "id": "US-OK",
                    "value": 3450654
                }, {
                    "id": "US-OR",
                    "value": 3421399
                }, {
                    "id": "US-PA",
                    "value": 12281054
                }, {
                    "id": "US-RI",
                    "value": 1048319
                }, {
                    "id": "US-SC",
                    "value": 4012012
                }, {
                    "id": "US-SD",
                    "value": 754844
                }, {
                    "id": "US-TN",
                    "value": 5689283
                }, {
                    "id": "US-TX",
                    "value": 20851820
                }, {
                    "id": "US-UT",
                    "value": 2233169
                }, {
                    "id": "US-VT",
                    "value": 608827
                }, {
                    "id": "US-VA",
                    "value": 7078515
                }, {
                    "id": "US-WA",
                    "value": 5894121
                }, {
                    "id": "US-WV",
                    "value": 1808344
                }, {
                    "id": "US-WI",
                    "value": 5363675
                }, {
                    "id": "US-WY",
                    "value": 493782
                }]
            },

            "areasSettings": {
                "autoZoom": true
            },

            "valueLegend": {
                "right": 10,
                "minValue": "little",
                "maxValue": "a lot!"
            },

            "export": {
                "enabled": true
            }

        });
    }

    return {
        // public functions
        init: function() {
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
            demo6();
        }
    };
}();

jQuery(document).ready(function() {
    amChartsMapsDemo.init();
});
//== Class definition
var amChartsStockChartsDemo = function() {

    //== Private functions
    var demo1 = function() {
        var chartData1 = [];
        var chartData2 = [];
        var chartData3 = [];
        var chartData4 = [];

        generateChartData();

        function generateChartData() {
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 500);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < 500; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;

                var a2 = Math.round(Math.random() * (100 + i)) + 200 + i;
                var b2 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

                var a3 = Math.round(Math.random() * (100 + i)) + 200;
                var b3 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

                var a4 = Math.round(Math.random() * (100 + i)) + 200 + i;
                var b4 = Math.round(Math.random() * (100 + i)) + 600 + i;

                chartData1.push({
                    "date": newDate,
                    "value": a1,
                    "volume": b1
                });
                chartData2.push({
                    "date": newDate,
                    "value": a2,
                    "volume": b2
                });
                chartData3.push({
                    "date": newDate,
                    "value": a3,
                    "volume": b3
                });
                chartData4.push({
                    "date": newDate,
                    "value": a4,
                    "volume": b4
                });
            }
        }

        var chart = AmCharts.makeChart("m_amcharts_1", {
            "type": "stock",
            "theme": "light",
            "dataSets": [{
                "title": "first data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData1,
                "categoryField": "date"
            }, {
                "title": "second data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData2,
                "categoryField": "date"
            }, {
                "title": "third data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData3,
                "categoryField": "date"
            }, {
                "title": "fourth data set",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData4,
                "categoryField": "date"
            }],

            "panels": [{
                "showCategoryAxis": false,
                "title": "Value",
                "percentHeight": 70,
                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    "comparable": true,
                    "compareField": "value",
                    "balloonText": "[[title]]:<b>[[value]]</b>",
                    "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
                }],
                "stockLegend": {
                    "periodValueTextComparing": "[[percents.value.close]]%",
                    "periodValueTextRegular": "[[value.close]]"
                }
            }, {
                "title": "Volume",
                "percentHeight": 30,
                "stockGraphs": [{
                    "valueField": "volume",
                    "type": "column",
                    "showBalloon": false,
                    "fillAlphas": 1
                }],
                "stockLegend": {
                    "periodValueTextRegular": "[[value.close]]"
                }
            }],

            "chartScrollbarSettings": {
                "graph": "g1"
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true,
                "fullWidth": true,
                "cursorAlpha": 0.1,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueLineAlpha": 0.5
            },

            "periodSelector": {
                "position": "left",
                "periods": [{
                    "period": "MM",
                    "selected": true,
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            },

            "dataSetSelector": {
                "position": "left"
            },

            "export": {
                "enabled": true
            }
        });
    }

    var demo2 = function() {
        var chartData = [];
        generateChartData();

        function generateChartData() {
            var firstDate = new Date(2012, 0, 1);
            firstDate.setDate(firstDate.getDate() - 500);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < 500; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var a = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b = Math.round(Math.random() * 100000000);

                chartData.push({
                    "date": newDate,
                    "value": a,
                    "volume": b
                });
            }
        }

        var chart = AmCharts.makeChart("m_amcharts_2", {
            "type": "stock",
            "theme": "light",
            "dataSets": [{
                "color": "#b0de09",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
                "dataProvider": chartData,
                "categoryField": "date",
                // EVENTS
                "stockEvents": [{
                    "date": new Date(2010, 8, 19),
                    "type": "sign",
                    "backgroundColor": "#85CDE6",
                    "graph": "g1",
                    "text": "S",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2010, 10, 19),
                    "type": "flag",
                    "backgroundColor": "#FFFFFF",
                    "backgroundAlpha": 0.5,
                    "graph": "g1",
                    "text": "F",
                    "description": "Some longer\ntext can also\n be added"
                }, {
                    "date": new Date(2010, 11, 10),
                    "showOnAxis": true,
                    "backgroundColor": "#85CDE6",
                    "type": "pin",
                    "text": "X",
                    "graph": "g1",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2010, 11, 26),
                    "showOnAxis": true,
                    "backgroundColor": "#85CDE6",
                    "type": "pin",
                    "text": "Z",
                    "graph": "g1",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 0, 3),
                    "type": "sign",
                    "backgroundColor": "#85CDE6",
                    "graph": "g1",
                    "text": "U",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 1, 6),
                    "type": "sign",
                    "graph": "g1",
                    "text": "D",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 3, 5),
                    "type": "sign",
                    "graph": "g1",
                    "text": "L",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 3, 5),
                    "type": "sign",
                    "graph": "g1",
                    "text": "R",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 5, 15),
                    "type": "arrowUp",
                    "backgroundColor": "#00CC00",
                    "graph": "g1",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 6, 25),
                    "type": "arrowDown",
                    "backgroundColor": "#CC0000",
                    "graph": "g1",
                    "description": "This is description of an event"
                }, {
                    "date": new Date(2011, 8, 1),
                    "type": "text",
                    "graph": "g1",
                    "text": "Longer text can\nalso be displayed",
                    "description": "This is description of an event"
                }]
            }],


            "panels": [{
                "title": "Value",
                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value"
                }],
                "stockLegend": {
                    "valueTextRegular": " ",
                    "markerType": "none"
                }
            }],

            "chartScrollbarSettings": {
                "graph": "g1"
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true,
                "graphBulletSize": 1,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueLineAlpha": 0.5
            },

            "periodSelector": {
                "periods": [{
                    "period": "DD",
                    "count": 10,
                    "label": "10 days"
                }, {
                    "period": "MM",
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            },

            "panelsSettings": {
                "usePrefixes": true
            },
            "export": {
                "enabled": true
            }
        });
    }

    var demo3 = function() {
        var chartData = generateChartData();

        function generateChartData() {
            var chartData = [];
            var firstDate = new Date(2012, 0, 1);
            firstDate.setDate(firstDate.getDate() - 500);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < 500; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                var value = Math.round(Math.random() * (40 + i)) + 100 + i;

                chartData.push({
                    "date": newDate,
                    "value": value
                });
            }
            return chartData;
        }


        var chart = AmCharts.makeChart("m_amcharts_3", {
            "type": "stock",
            "theme": "light",
            "dataSets": [{
                "color": "#b0de09",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }],
                "dataProvider": chartData,
                "categoryField": "date"
            }],

            "panels": [{
                "showCategoryAxis": true,
                "title": "Value",
                "eraseAll": false,
                "allLabels": [{
                    "x": 0,
                    "y": 115,
                    "text": "Click on the pencil icon on top-right to start drawing",
                    "align": "center",
                    "size": 16
                }],

                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    "useDataSetColors": false
                }],

                "stockLegend": {
                    "valueTextRegular": " ",
                    "markerType": "none"
                },

                "drawingIconsEnabled": true
            }],

            "chartScrollbarSettings": {
                "graph": "g1"
            },
            "chartCursorSettings": {
                "valueBalloonsEnabled": true
            },
            "periodSelector": {
                "position": "bottom",
                "periods": [{
                    "period": "DD",
                    "count": 10,
                    "label": "10 days"
                }, {
                    "period": "MM",
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            }
        });
    }

    var demo4 = function() {
        var chartData = generateChartData();

        function generateChartData() {
            var chartData = [];
            var firstDate = new Date(2012, 0, 1);
            firstDate.setDate(firstDate.getDate() - 1000);
            firstDate.setHours(0, 0, 0, 0);

            for (var i = 0; i < 1000; i++) {
                var newDate = new Date(firstDate);
                newDate.setHours(0, i, 0, 0);

                var a = Math.round(Math.random() * (40 + i)) + 100 + i;
                var b = Math.round(Math.random() * 100000000);

                chartData.push({
                    "date": newDate,
                    "value": a,
                    "volume": b
                });
            }
            return chartData;
        }

        var chart = AmCharts.makeChart("m_amcharts_4", {
            "type": "stock",
            "theme": "light",
            "categoryAxesSettings": {
                "minPeriod": "mm"
            },

            "dataSets": [{
                "color": "#b0de09",
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],

                "dataProvider": chartData,
                "categoryField": "date"
            }],

            "panels": [{
                "showCategoryAxis": false,
                "title": "Value",
                "percentHeight": 70,

                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    "type": "smoothedLine",
                    "lineThickness": 2,
                    "bullet": "round"
                }],


                "stockLegend": {
                    "valueTextRegular": " ",
                    "markerType": "none"
                }
            }, {
                "title": "Volume",
                "percentHeight": 30,
                "stockGraphs": [{
                    "valueField": "volume",
                    "type": "column",
                    "cornerRadiusTop": 2,
                    "fillAlphas": 1
                }],

                "stockLegend": {
                    "valueTextRegular": " ",
                    "markerType": "none"
                }
            }],

            "chartScrollbarSettings": {
                "graph": "g1",
                "usePeriod": "10mm",
                "position": "top"
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true
            },

            "periodSelector": {
                "position": "top",
                "dateFormat": "YYYY-MM-DD JJ:NN",
                "inputFieldWidth": 150,
                "periods": [{
                    "period": "hh",
                    "count": 1,
                    "label": "1 hour",
                    "selected": true
                }, {
                    "period": "hh",
                    "count": 2,
                    "label": "2 hours"
                }, {
                    "period": "hh",
                    "count": 5,
                    "label": "5 hour"
                }, {
                    "period": "hh",
                    "count": 12,
                    "label": "12 hours"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            },

            "panelsSettings": {
                "usePrefixes": true
            },

            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }

    var demo5 = function() {
        var chartData = [];
        generateChartData();


        function generateChartData() {
            var firstDate = new Date();
            firstDate.setHours(0, 0, 0, 0);
            firstDate.setDate(firstDate.getDate() - 2000);

            for (var i = 0; i < 2000; i++) {
                var newDate = new Date(firstDate);

                newDate.setDate(newDate.getDate() + i);

                var open = Math.round(Math.random() * (30) + 100);
                var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

                var low;
                if (open < close) {
                    low = open - Math.round(Math.random() * 5);
                } else {
                    low = close - Math.round(Math.random() * 5);
                }

                var high;
                if (open < close) {
                    high = close + Math.round(Math.random() * 5);
                } else {
                    high = open + Math.round(Math.random() * 5);
                }

                var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;
                var value = Math.round(Math.random() * (30) + 100);

                chartData[i] = ({
                    "date": newDate,
                    "open": open,
                    "close": close,
                    "high": high,
                    "low": low,
                    "volume": volume,
                    "value": value
                });
            }
        }

        var chart = AmCharts.makeChart("m_amcharts_5", {
            "type": "stock",
            "theme": "light",
            "dataSets": [{
                "fieldMappings": [{
                    "fromField": "open",
                    "toField": "open"
                }, {
                    "fromField": "close",
                    "toField": "close"
                }, {
                    "fromField": "high",
                    "toField": "high"
                }, {
                    "fromField": "low",
                    "toField": "low"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }, {
                    "fromField": "value",
                    "toField": "value"
                }],
                "color": "#7f8da9",
                "dataProvider": chartData,
                "title": "West Stock",
                "categoryField": "date"
            }, {
                "fieldMappings": [{
                    "fromField": "value",
                    "toField": "value"
                }],
                "color": "#fac314",
                "dataProvider": chartData,
                "compared": true,
                "title": "East Stock",
                "categoryField": "date"
            }],


            "panels": [{
                    "title": "Value",
                    "showCategoryAxis": false,
                    "percentHeight": 70,
                    "valueAxes": [{
                        "id": "v1",
                        "dashLength": 5
                    }],

                    "categoryAxis": {
                        "dashLength": 5
                    },

                    "stockGraphs": [{
                        "type": "candlestick",
                        "id": "g1",
                        "openField": "open",
                        "closeField": "close",
                        "highField": "high",
                        "lowField": "low",
                        "valueField": "close",
                        "lineColor": "#7f8da9",
                        "fillColors": "#7f8da9",
                        "negativeLineColor": "#db4c3c",
                        "negativeFillColors": "#db4c3c",
                        "fillAlphas": 1,
                        "useDataSetColors": false,
                        "comparable": true,
                        "compareField": "value",
                        "showBalloon": false,
                        "proCandlesticks": true
                    }],

                    "stockLegend": {
                        "valueTextRegular": undefined,
                        "periodValueTextComparing": "[[percents.value.close]]%"
                    }
                },

                {
                    "title": "Volume",
                    "percentHeight": 30,
                    "marginTop": 1,
                    "showCategoryAxis": true,
                    "valueAxes": [{
                        "dashLength": 5
                    }],

                    "categoryAxis": {
                        "dashLength": 5
                    },

                    "stockGraphs": [{
                        "valueField": "volume",
                        "type": "column",
                        "showBalloon": false,
                        "fillAlphas": 1
                    }],

                    "stockLegend": {
                        "markerType": "none",
                        "markerSize": 0,
                        "labelText": "",
                        "periodValueTextRegular": "[[value.close]]"
                    }
                }
            ],

            "chartScrollbarSettings": {
                "graph": "g1",
                "graphType": "line",
                "usePeriod": "WW"
            },

            "chartCursorSettings": {
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true
            },

            "periodSelector": {
                "position": "bottom",
                "periods": [{
                    "period": "DD",
                    "count": 10,
                    "label": "10 days"
                }, {
                    "period": "MM",
                    "selected": true,
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                }]
            },
            "export": {
                "enabled": true
            }
        });
    }
    return {
        // public functions
        init: function() {
            demo1();
            demo2();
            demo3();
            demo4();
            demo5();
        }
    };
}();

jQuery(document).ready(function() {
    amChartsStockChartsDemo.init();
});
//== Class definition

var DefaultDatatableDemo = function () {
	//== Private functions

	// basic demo
	var demo = function () {

		var datatable = $('.m_datatable').mDatatable({
			// datasource definition
			data: {
				type: 'remote',
				source: {
					read: {
						url: 'inc/api/datatables/demos/default.php'
					}
				},
				pageSize: 5, // display 20 records per page
				serverPaging: true,
				serverFiltering: true,
				serverSorting: true
			},

			// layout definition
			layout: {
				theme: 'default', // datatable theme
				class: '', // custom wrapper class
				scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
				height: 'auto', // datatable's body's fixed height
				footer: false // display/hide footer
			},

			// column sorting
			sortable: true,

			// toolbar
			toolbar: {
				// toolbar placement can be at top or bottom or both top and bottom repeated
				placement: ['bottom'],

				// toolbar items
				items: {
					// pagination
					pagination: {
						// page size select
						pageSizeSelect: [5, 10, 20, 30, 50] // display dropdown to select pagination size. -1 is used for "ALl" option
					},
				}
			},

			search: {
				input: $('#generalSearch')
			},

			// columns definition
			columns: [{
				field: "RecordID",
				title: "#",
				sortable: false, // disable sort for this column
				width: 40,
				selector: {class: 'm-checkbox--solid m-checkbox--brand'}
			}, {
				field: "OrderID",
				title: "Order ID",
				// sortable: 'asc', // default sort
				filterable: false, // disable or enable filtering
				width: 150,
				// basic templating support for column rendering,
				template: '{{OrderID}} - {{ShipCountry}}'
			}, {
				field: "ShipCountry",
				title: "Ship Country",
				width: 150,
				template: function (row) {
					// callback function support for column rendering
					return row.ShipCountry + ' - ' + row.ShipCity;
				}
			}, {
				field: "ShipCity",
				title: "Ship City",
				sortable: false // disable sort for this column
			}, {
				field: "Currency",
				title: "Currency",
				width: 100
			}, {
				field: "ShipDate",
				title: "Ship Date",
				sortable: 'asc'
			}, {
				field: "Latitude",
				title: "Latitude"
			}, {
				field: "Status",
				title: "Status",
				// callback function support for column rendering
				template: function (row) {
					var status = {
						1: {'title': 'Pending', 'class': 'm-badge--brand'},
						2: {'title': 'Delivered', 'class': ' m-badge--metal'},
						3: {'title': 'Canceled', 'class': ' m-badge--primary'},
						4: {'title': 'Success', 'class': ' m-badge--success'},
						5: {'title': 'Info', 'class': ' m-badge--info'},
						6: {'title': 'Danger', 'class': ' m-badge--danger'},
						7: {'title': 'Warning', 'class': ' m-badge--warning'}
					};
					return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
				}
			}, {
				field: "Type",
				title: "Type",
				// callback function support for column rendering
				template: function (row) {
					var status = {
						1: {'title': 'Online', 'state': 'danger'},
						2: {'title': 'Retail', 'state': 'primary'},
						3: {'title': 'Direct', 'state': 'accent'}
					};
					return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state +'">' + status[row.Type].title + '</span>';
				}
			}, {
				field: "Actions",
				width: 110,
				title: "Actions",
				sortable: false,
				overflow: 'visible',
				template: function (row, index, datatable) {
					var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
					return '\
						<div class="dropdown '+ dropup +'">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
				}
			}]
		});

		$('#m_datatable_clear').on('click', function () {
			$('#m_datatable_console').html('');
		});

		$('#m_datatable_reload').on('click', function () {
			datatable.reload();
		});
	};

	var eventsCapture = function () {
		$('.m_datatable')
			.on('m-datatable--on-init', function () {
				eventsWriter('Datatable init');
			})
			.on('m-datatable--on-layout-updated', function () {
				eventsWriter('Layout render updated');
			})
			.on('m-datatable--on-ajax-done', function () {
				eventsWriter('Ajax data successfully updated');
			})
			.on('m-datatable--on-ajax-fail', function (e, jqXHR) {
				eventsWriter('Ajax error');
			})
			.on('m-datatable--on-goto-page', function (e, args) {
				eventsWriter('Goto to pagination: ' + args.page);
			})
			.on('m-datatable--on-update-perpage', function (e, args) {
				eventsWriter('Update page size: ' + args.perpage);
			})
			.on('m-datatable--on-reloaded', function (e) {
				eventsWriter('Datatable reloaded');
			})
			.on('m-datatable--on-check', function (e, args) {
				eventsWriter('Checkbox active: ' + args.toString());
			})
			.on('m-datatable--on-uncheck', function (e, args) {
				eventsWriter('Checkbox inactive: ' + args.toString());
			})
			.on('m-datatable--on-sort', function (e, args) {
				eventsWriter('Datatable sorted by ' + args.field + ' ' + args.sort);
			});
	};

	var eventsWriter = function (string) {
		var console = $('#m_datatable_console').append(string + "\t\n");
		$(console).scrollTop(console[0].scrollHeight - $(console).height());
	};

	return {
		// public functions
		init: function () {
			demo();
			eventsCapture();
		}
	};
}();

jQuery(document).ready(function () {
	DefaultDatatableDemo.init();
});
//== Class definition

var DefaultDatatableDemo = function() {
	//== Private functions

	// basic demo
	var demo = function() {

		var options = {
			// datasource definition
			data: {
				type: 'remote',
				source: {
					read: {
						url: 'inc/api/datatables/demos/default.php',
					},
				},
				pageSize: 20, // display 20 records per page
				serverPaging: true,
				serverFiltering: true,
				serverSorting: true,
			},

			// layout definition
			layout: {
				theme: 'default', // datatable theme
				class: '', // custom wrapper class
				scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
				height: 550, // datatable's body's fixed height
				footer: false // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: true,

			search: {
				input: $('#generalSearch'),
			},

			// columns definition
			columns: [
				{
					field: 'RecordID',
					title: '#',
					sortable: false, // disable sort for this column
					width: 40,
					selector: {class: 'm-checkbox--solid m-checkbox--brand'},
				}, {
					field: 'ID',
					title: 'ID',
					sortable: false,
					width: 40,
					template: '{{RecordID}}',
				}, {
					field: 'ShipCountry',
					title: 'Ship Country',
					width: 150,
					template: function(row) {
						// callback function support for column rendering
						return row.ShipCountry + ' - ' + row.ShipCity;
					},
				}, {
					field: 'ShipCity',
					title: 'Ship City',
				}, {
					field: 'Currency',
					title: 'Currency',
					width: 100,
				}, {
					field: 'ShipDate',
					title: 'Ship Date',
					sortable: 'asc',
				}, {
					field: 'Latitude',
					title: 'Latitude',
				}, {
					field: 'Status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Pending', 'class': 'm-badge--brand'},
							2: {'title': 'Delivered', 'class': ' m-badge--metal'},
							3: {'title': 'Canceled', 'class': ' m-badge--primary'},
							4: {'title': 'Success', 'class': ' m-badge--success'},
							5: {'title': 'Info', 'class': ' m-badge--info'},
							6: {'title': 'Danger', 'class': ' m-badge--danger'},
							7: {'title': 'Warning', 'class': ' m-badge--warning'},
						};
						return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
					},
				}, {
					field: 'Type',
					title: 'Type',
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {'title': 'Online', 'state': 'danger'},
							2: {'title': 'Retail', 'state': 'primary'},
							3: {'title': 'Direct', 'state': 'accent'},
						};
						return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' +
							status[row.Type].state + '">' +
							status[row.Type].title + '</span>';
					},
				}, {
					field: 'Actions',
					width: 110,
					title: 'Actions',
					sortable: false,
					overflow: 'visible',
					template: function (row, index, datatable) {
						var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
						return '\
						<div class="dropdown ' + dropup + '">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
					},
				}],
		};

		var datatable = $('.m_datatable').mDatatable(options);

		// both methods are supported
		// datatable.methodName(args); or $(datatable).mDatatable(methodName, args);

		$('#m_datatable_destroy').on('click', function() {
			// datatable.destroy();
			$('.m_datatable').mDatatable('destroy');
		});

		$('#m_datatable_init').on('click', function() {
			datatable = $('.m_datatable').mDatatable(options);
		});

		$('#m_datatable_reload').on('click', function() {
			// datatable.reload();
			$('.m_datatable').mDatatable('reload');
		});

		$('#m_datatable_sort').on('click', function() {
			// datatable.sort('ShipCity');
			$('.m_datatable').mDatatable('sort', 'ShipCity');
		});

		// get checked record and get value by column name
		$('#m_datatable_get').on('click', function() {
			// select active rows
			datatable.rows('.m-datatable__row--active');
			// check selected nodes
			if (datatable.nodes().length > 0) {
				// get column by field name and get the column nodes
				var value = datatable.columns('ShipCity').nodes().text();
				$('#datatable_value').html(value);
			}
		});

		// record selection
		$('#m_datatable_check').on('click', function() {
			var input = $('#m_datatable_check_input').val();
			datatable.setActive(input);
		});

		$('#m_datatable_check_all').on('click', function() {
			// datatable.setActiveAll(true);
			$('.m_datatable').mDatatable('setActiveAll', true);
		});

		$('#m_datatable_uncheck_all').on('click', function() {
			// datatable.setActiveAll(false);
			$('.m_datatable').mDatatable('setActiveAll', false);
		});

		$('#m_datatable_hide_column').on('click', function() {
			datatable.columns('Currency').visible(false);
		});

		$('#m_datatable_show_column').on('click', function() {
			datatable.columns('Currency').visible(true);
		});

		$('#m_datatable_remove_row').on('click', function() {
			datatable.rows('.m-datatable__row--active').remove();
		});
	};

	return {
		// public functions
		init: function() {
			demo();
		},
	};
}();

jQuery(document).ready(function() {
	DefaultDatatableDemo.init();
});
//== Class definition

var DatatableChildRemoteDataDemo = function() {
  //== Private functions

  // demo initializer
  var demo = function() {

    var datatable = $('.m_datatable').mDatatable({
      // datasource definition
      data: {
        type: 'remote',
        source: {
          read: {
            url: 'inc/api/datatables/demos/customers.php',
          },
        },
        pageSize: 10, // display 20 records per page
        serverPaging: true,
        serverFiltering: false,
        serverSorting: true,
      },

      // layout definition
      layout: {
        theme: 'default',
        scroll: false,
        height: null,
        footer: false,
      },

      // column sorting
      sortable: true,

      pagination: true,

      detail: {
        title: 'Load sub table',
        content: subTableInit,
      },

      search: {
        input: $('#generalSearch'),
      },

      // columns definition
      columns: [
        {
          field: 'RecordID',
          title: '',
          sortable: false,
          width: 20,
          textAlign: 'center',
        }, {
          field: 'checkbox',
          title: '',
          template: '{{RecordID}}',
          sortable: false,
          width: 20,
          textAlign: 'center',
          selector: {class: 'm-checkbox--solid m-checkbox--brand'},
        }, {
          field: 'FirstName',
          title: 'First Name',
          sortable: 'asc',
          // responsive: {hidden: 'md'}
        }, {
          field: 'LastName',
          title: 'Last Name',
        }, {
          field: 'Company',
          title: 'Company',
        }, {
          field: 'Email',
          title: 'Email',
        }, {
          field: 'Phone',
          title: 'Phone',
        }, {
          field: 'Status',
          title: 'Status',
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {'title': 'Pending', 'class': 'm-badge--brand'},
              2: {'title': 'Delivered', 'class': ' m-badge--metal'},
              3: {'title': 'Canceled', 'class': ' m-badge--primary'},
              4: {'title': 'Success', 'class': ' m-badge--success'},
              5: {'title': 'Info', 'class': ' m-badge--info'},
              6: {'title': 'Danger', 'class': ' m-badge--danger'},
              7: {'title': 'Warning', 'class': ' m-badge--warning'},
            };
            return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
          },
        }, {
          field: 'Type',
          title: 'Type',
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {'title': 'Online', 'state': 'danger'},
              2: {'title': 'Retail', 'state': 'primary'},
              3: {'title': 'Direct', 'state': 'accent'},
            };
            return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' +
                status[row.Type].title + '</span>';
          },
        }, {
          field: 'Actions',
          width: 110,
          title: 'Actions',
          sortable: false,
          overflow: 'visible',
          template: function (row, index, datatable) {
            var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
            return '\
						<div class="dropdown ' + dropup + '">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
          },
        }],
    });

    function subTableInit(e) {
      $('<div/>').attr('id', 'child_data_ajax_' + e.data.RecordID).appendTo(e.detailCell).mDatatable({
        data: {
          type: 'remote',
          source: {
            read: {
              url: 'inc/api/datatables/demos/orders.php',
              headers: {'x-my-custom-header': 'some value', 'x-test-header': 'the value'},
              params: {
                // custom query params
                query: {
                  generalSearch: '',
                  CustomerID: e.data.RecordID,
                },
              },
            },
          },
          pageSize: 10,
          serverPaging: true,
          serverFiltering: false,
          serverSorting: true,
        },

        // layout definition
        layout: {
          theme: 'default',
          scroll: true,
          height: 300,
          footer: false,

          // enable/disable datatable spinner.
          spinner: {
            type: 1,
            theme: 'default',
          },
        },

        sortable: true,

        // columns definition
        columns: [
          {
            field: 'RecordID',
            title: '#',
            sortable: false,
            width: 20,
            responsive: {hide: 'xl'},
          }, {
            field: 'OrderID',
            title: 'Order ID',
            template: function(row) {
              return '<span>' + row.OrderID + ' - ' + row.ShipCountry + '</span>';
            },
          }, {
            field: 'ShipCountry',
            title: 'Country',
            width: 100,
          }, {
            field: 'ShipAddress',
            title: 'Ship Address',
          }, {
            field: 'ShipName',
            title: 'Ship Name',
          }, {
            field: 'TotalPayment',
            title: 'Payment',
            type: 'number',
          }, {
            field: 'Status',
            title: 'Status',
            // callback function support for column rendering
            template: function(row) {
              var status = {
                1: {'title': 'Pending', 'class': 'm-badge--brand'},
                2: {'title': 'Delivered', 'class': ' m-badge--metal'},
                3: {'title': 'Canceled', 'class': ' m-badge--primary'},
                4: {'title': 'Success', 'class': ' m-badge--success'},
                5: {'title': 'Info', 'class': ' m-badge--info'},
                6: {'title': 'Danger', 'class': ' m-badge--danger'},
                7: {'title': 'Warning', 'class': ' m-badge--warning'},
              };
              return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
            },
          }, {
            field: 'Type',
            title: 'Type',
            // callback function support for column rendering
            template: function(row) {
              var status = {
                1: {'title': 'Online', 'state': 'danger'},
                2: {'title': 'Retail', 'state': 'primary'},
                3: {'title': 'Direct', 'state': 'accent'},
              };
              return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' +
                  status[row.Type].title + '</span>';
            },
          },],
      });
    }
  };

  return {
    //== Public functions
    init: function() {
      // init dmeo
      demo();
    },
  };
}();

jQuery(document).ready(function() {
  DatatableChildRemoteDataDemo.init();
});
//== Class definition
var DatatableChildDataLocalDemo = function() {
  //== Private functions

  var subTableInit = function(e) {
    $('<div/>').attr('id', 'child_data_local_' + e.data.RecordID).appendTo(e.detailCell).mDatatable({
      data: {
        type: 'local',
        source: e.data.Orders,
        pageSize: 10,
      },

      // layout definition
      layout: {
        theme: 'default',
        scroll: true,
        height: 300,
        footer: false,

        // enable/disable datatable spinner.
        spinner: {
          type: 1,
          theme: 'default',
        },
      },

      sortable: true,

      // columns definition
      columns: [
        {
          field: 'OrderID',
          title: 'Order ID',
          sortable: false,
        }, {
          field: 'ShipCountry',
          title: 'Country',
          width: 100,
        }, {
          field: 'ShipAddress',
          title: 'Ship Address',
        }, {
          field: 'ShipName',
          title: 'Ship Name',
        }, {
          field: 'OrderDate',
          title: 'Order Date',
        }, {
          field: 'TotalPayment',
          title: 'Total Payment',
        }, {
          field: 'Status',
          title: 'Status',
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {'title': 'Pending', 'class': 'm-badge--brand'},
              2: {'title': 'Delivered', 'class': ' m-badge--metal'},
              3: {'title': 'Canceled', 'class': ' m-badge--primary'},
              4: {'title': 'Success', 'class': ' m-badge--success'},
              5: {'title': 'Info', 'class': ' m-badge--info'},
              6: {'title': 'Danger', 'class': ' m-badge--danger'},
              7: {'title': 'Warning', 'class': ' m-badge--warning'},
            };
            return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
          },
        }, {
          field: 'Type',
          title: 'Type',
          // callback function support for column rendering
          template: function(row) {
            var status = {
              1: {'title': 'Online', 'state': 'danger'},
              2: {'title': 'Retail', 'state': 'primary'},
              3: {'title': 'Direct', 'state': 'accent'},
            };
            return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' +
                status[row.Type].title + '</span>';
          },
        },],
    });
  };

  // demo initializer
  var mainTableInit = function() {

    var dataJSONArray = JSON.parse('[{"RecordID":1,"FirstName":"Tommie","LastName":"Pee","Company":"Roodel","Email":"tpee0@slashdot.org","Phone":"103-891-3486","Status":4,"Type":1,"Orders":[{"OrderID":"41250-166","ShipCountry":"FR","ShipAddress":"5 Rutledge Court","ShipName":"Rogahn-Shanahan","OrderDate":"3/7/2017","TotalPayment":"$591994.23","Status":5,"Type":1},{"OrderID":"0078-0595","ShipCountry":"CN","ShipAddress":"953 Schlimgen Park","ShipName":"Hilpert-Sanford","OrderDate":"5/12/2017","TotalPayment":"$79774.93","Status":1,"Type":1},{"OrderID":"47593-443","ShipCountry":"BY","ShipAddress":"46925 Memorial Park","ShipName":"Brakus and Sons","OrderDate":"2/12/2017","TotalPayment":"$1095029.28","Status":1,"Type":1},{"OrderID":"50114-5236","ShipCountry":"NZ","ShipAddress":"1420 Mockingbird Drive","ShipName":"Beer-Harris","OrderDate":"6/6/2017","TotalPayment":"$778690.72","Status":5,"Type":3},{"OrderID":"36987-2826","ShipCountry":"PL","ShipAddress":"3995 Huxley Court","ShipName":"Kling, Miller and Quitzon","OrderDate":"9/1/2017","TotalPayment":"$773995.02","Status":5,"Type":2},{"OrderID":"62750-006","ShipCountry":"ID","ShipAddress":"2064 Dennis Parkway","ShipName":"Lang, Kohler and Considine","OrderDate":"9/21/2017","TotalPayment":"$830550.45","Status":5,"Type":2},{"OrderID":"59779-597","ShipCountry":"IR","ShipAddress":"32 Golf Course Parkway","ShipName":"Jaskolski-Hilll","OrderDate":"4/4/2017","TotalPayment":"$754685.32","Status":3,"Type":3},{"OrderID":"59762-3743","ShipCountry":"HT","ShipAddress":"76 Anthes Hill","ShipName":"Reynolds Group","OrderDate":"1/23/2017","TotalPayment":"$295435.66","Status":2,"Type":1},{"OrderID":"64942-1114","ShipCountry":"ID","ShipAddress":"7511 Mayfield Avenue","ShipName":"Purdy and Sons","OrderDate":"12/1/2016","TotalPayment":"$636911.04","Status":6,"Type":2},{"OrderID":"13537-505","ShipCountry":"KZ","ShipAddress":"36303 Esch Parkway","ShipName":"Reinger, Howe and Kertzmann","OrderDate":"1/31/2016","TotalPayment":"$753691.79","Status":4,"Type":1},{"OrderID":"16781-426","ShipCountry":"SE","ShipAddress":"507 Columbus Lane","ShipName":"Carter, Gibson and Kassulke","OrderDate":"10/26/2017","TotalPayment":"$873190.14","Status":2,"Type":2},{"OrderID":"60512-1008","ShipCountry":"ID","ShipAddress":"8 Jana Lane","ShipName":"Rutherford and Sons","OrderDate":"1/10/2017","TotalPayment":"$242894.68","Status":3,"Type":1},{"OrderID":"0456-0461","ShipCountry":"CN","ShipAddress":"5127 Roxbury Trail","ShipName":"Johnson Inc","OrderDate":"12/10/2017","TotalPayment":"$328850.50","Status":5,"Type":3},{"OrderID":"63304-098","ShipCountry":"GR","ShipAddress":"54627 Randy Lane","ShipName":"Johnston, Veum and Funk","OrderDate":"12/11/2016","TotalPayment":"$278247.03","Status":3,"Type":2},{"OrderID":"64092-317","ShipCountry":"CN","ShipAddress":"292 Rusk Lane","ShipName":"Bode, Zboncak and Reichel","OrderDate":"4/10/2016","TotalPayment":"$798173.38","Status":2,"Type":2},{"OrderID":"36987-1483","ShipCountry":"CU","ShipAddress":"2225 Saint Paul Junction","ShipName":"Dach, Haag and Koss","OrderDate":"2/7/2017","TotalPayment":"$1147799.38","Status":4,"Type":2},{"OrderID":"68084-814","ShipCountry":"ID","ShipAddress":"0 Sheridan Avenue","ShipName":"Little-O\'Hara","OrderDate":"11/24/2016","TotalPayment":"$394051.79","Status":6,"Type":1},{"OrderID":"42023-131","ShipCountry":"BR","ShipAddress":"4238 Roth Drive","ShipName":"Boehm LLC","OrderDate":"4/23/2016","TotalPayment":"$300684.31","Status":6,"Type":3},{"OrderID":"14290-350","ShipCountry":"CN","ShipAddress":"41950 Troy Point","ShipName":"Windler, Larkin and Collier","OrderDate":"4/17/2017","TotalPayment":"$467794.40","Status":4,"Type":1}]},\n' +
        '{"RecordID":2,"FirstName":"Scott","LastName":"Coldbreath","Company":"Zooxo","Email":"scoldbreath1@zdnet.com","Phone":"143-179-5104","Status":5,"Type":1,"Orders":[{"OrderID":"55316-029","ShipCountry":"ID","ShipAddress":"56955 Rusk Street","ShipName":"Paucek, Dietrich and Bergnaum","OrderDate":"9/27/2016","TotalPayment":"$662732.49","Status":2,"Type":3},{"OrderID":"68462-467","ShipCountry":"CN","ShipAddress":"13005 Bultman Court","ShipName":"Stamm Group","OrderDate":"3/22/2017","TotalPayment":"$653958.68","Status":4,"Type":2},{"OrderID":"55154-8270","ShipCountry":"UG","ShipAddress":"6 Brentwood Place","ShipName":"Stroman, Schowalter and Bogan","OrderDate":"8/20/2016","TotalPayment":"$57166.20","Status":3,"Type":2},{"OrderID":"63736-002","ShipCountry":"ID","ShipAddress":"51 Banding Junction","ShipName":"Crona-Konopelski","OrderDate":"2/5/2017","TotalPayment":"$733681.16","Status":3,"Type":2},{"OrderID":"54868-5182","ShipCountry":"CN","ShipAddress":"629 Oxford Alley","ShipName":"Lindgren LLC","OrderDate":"5/21/2016","TotalPayment":"$921137.56","Status":3,"Type":2},{"OrderID":"55714-4529","ShipCountry":"JP","ShipAddress":"9 Melvin Point","ShipName":"Kris-Will","OrderDate":"4/29/2016","TotalPayment":"$184624.81","Status":1,"Type":2},{"OrderID":"63736-305","ShipCountry":"CN","ShipAddress":"84196 New Castle Junction","ShipName":"Lockman-Luettgen","OrderDate":"9/7/2016","TotalPayment":"$922821.30","Status":2,"Type":2}]},\n' +
        '{"RecordID":3,"FirstName":"Flss","LastName":"Thake","Company":"Riffpath","Email":"fthake2@ifeng.com","Phone":"695-591-2075","Status":3,"Type":1,"Orders":[{"OrderID":"0113-0461","ShipCountry":"PS","ShipAddress":"797 Crownhardt Junction","ShipName":"Eichmann and Sons","OrderDate":"3/16/2016","TotalPayment":"$241462.16","Status":2,"Type":3},{"OrderID":"51824-023","ShipCountry":"BR","ShipAddress":"3066 Emmet Drive","ShipName":"Strosin, Lehner and Gislason","OrderDate":"9/17/2016","TotalPayment":"$194555.85","Status":3,"Type":2},{"OrderID":"57520-0221","ShipCountry":"BR","ShipAddress":"2 Havey Trail","ShipName":"Lang, Anderson and Keebler","OrderDate":"6/18/2016","TotalPayment":"$386865.72","Status":2,"Type":1},{"OrderID":"56062-388","ShipCountry":"CN","ShipAddress":"9 Boyd Avenue","ShipName":"Hegmann-Kemmer","OrderDate":"7/1/2016","TotalPayment":"$837648.17","Status":1,"Type":1},{"OrderID":"35356-723","ShipCountry":"UA","ShipAddress":"35 Chive Lane","ShipName":"Konopelski-Cummings","OrderDate":"7/17/2017","TotalPayment":"$730238.90","Status":5,"Type":2},{"OrderID":"35356-491","ShipCountry":"SE","ShipAddress":"6343 Talmadge Street","ShipName":"Wolf Inc","OrderDate":"1/18/2017","TotalPayment":"$777918.32","Status":6,"Type":1},{"OrderID":"76369-4001","ShipCountry":"CN","ShipAddress":"8737 Dunning Plaza","ShipName":"Cruickshank, Gleichner and Gerlach","OrderDate":"9/20/2016","TotalPayment":"$1197505.61","Status":1,"Type":3},{"OrderID":"0378-5042","ShipCountry":"TH","ShipAddress":"1 Old Shore Plaza","ShipName":"Olson-Stark","OrderDate":"8/2/2016","TotalPayment":"$661232.02","Status":5,"Type":2}]},\n' +
        '{"RecordID":4,"FirstName":"Vincents","LastName":"Frearson","Company":"Katz","Email":"vfrearson3@amazon.de","Phone":"197-717-7100","Status":4,"Type":2,"Orders":[{"OrderID":"68084-502","ShipCountry":"BR","ShipAddress":"0814 Briar Crest Plaza","ShipName":"Olson-Connelly","OrderDate":"4/8/2016","TotalPayment":"$494707.94","Status":3,"Type":2},{"OrderID":"76167-002","ShipCountry":"SE","ShipAddress":"7 Quincy Road","ShipName":"Heaney, Lemke and McCullough","OrderDate":"1/10/2017","TotalPayment":"$372281.64","Status":5,"Type":3},{"OrderID":"0517-9702","ShipCountry":"RU","ShipAddress":"948 Granby Lane","ShipName":"Abshire-Cartwright","OrderDate":"1/17/2017","TotalPayment":"$720235.30","Status":1,"Type":1},{"OrderID":"53499-7272","ShipCountry":"UA","ShipAddress":"2553 Ronald Regan Point","ShipName":"Hudson-Breitenberg","OrderDate":"4/29/2017","TotalPayment":"$590146.91","Status":3,"Type":3},{"OrderID":"23155-001","ShipCountry":"ID","ShipAddress":"0237 Larry Park","ShipName":"Fahey, Fritsch and Boyer","OrderDate":"12/7/2016","TotalPayment":"$918885.26","Status":6,"Type":3},{"OrderID":"24909-162","ShipCountry":"AR","ShipAddress":"338 Prentice Road","ShipName":"Yost-Kunde","OrderDate":"4/17/2016","TotalPayment":"$320952.62","Status":6,"Type":3},{"OrderID":"59078-031","ShipCountry":"CN","ShipAddress":"23409 Gale Court","ShipName":"Jenkins-Dickens","OrderDate":"9/28/2016","TotalPayment":"$374124.12","Status":1,"Type":3},{"OrderID":"30142-822","ShipCountry":"VE","ShipAddress":"64 Boyd Center","ShipName":"Bartell Group","OrderDate":"2/12/2016","TotalPayment":"$11592.95","Status":2,"Type":2},{"OrderID":"36987-3147","ShipCountry":"PK","ShipAddress":"66010 Express Pass","ShipName":"Cole, Wilkinson and Macejkovic","OrderDate":"1/28/2016","TotalPayment":"$594910.09","Status":3,"Type":2},{"OrderID":"65841-626","ShipCountry":"PH","ShipAddress":"9 West Way","ShipName":"Batz, Nienow and Spencer","OrderDate":"2/7/2016","TotalPayment":"$742058.75","Status":1,"Type":2},{"OrderID":"57520-0025","ShipCountry":"AU","ShipAddress":"18 Hanover Place","ShipName":"Bode, Upton and Christiansen","OrderDate":"3/28/2016","TotalPayment":"$555669.10","Status":2,"Type":2},{"OrderID":"24236-786","ShipCountry":"BG","ShipAddress":"29471 Kim Alley","ShipName":"Lakin-Murazik","OrderDate":"7/9/2016","TotalPayment":"$164304.08","Status":6,"Type":3}]},\n' +
        '{"RecordID":5,"FirstName":"Antony","LastName":"Stranger","Company":"Tavu","Email":"astranger4@sfgate.com","Phone":"165-466-2893","Status":2,"Type":3,"Orders":[{"OrderID":"53462-175","ShipCountry":"CL","ShipAddress":"6 Spohn Way","ShipName":"O\'Connell Inc","OrderDate":"2/3/2016","TotalPayment":"$749928.82","Status":1,"Type":3},{"OrderID":"53808-0733","ShipCountry":"VN","ShipAddress":"3 Warbler Point","ShipName":"Willms, Glover and O\'Keefe","OrderDate":"5/16/2016","TotalPayment":"$632155.47","Status":1,"Type":1},{"OrderID":"0054-0252","ShipCountry":"CN","ShipAddress":"65 Havey Alley","ShipName":"Deckow, Runolfsson and Kemmer","OrderDate":"4/10/2016","TotalPayment":"$1116585.99","Status":6,"Type":1},{"OrderID":"0093-9660","ShipCountry":"CN","ShipAddress":"2 Maple Drive","ShipName":"Padberg, Powlowski and Brekke","OrderDate":"4/11/2017","TotalPayment":"$513356.12","Status":3,"Type":3},{"OrderID":"63739-047","ShipCountry":"EC","ShipAddress":"0 Talmadge Junction","ShipName":"Rosenbaum-Yundt","OrderDate":"2/19/2016","TotalPayment":"$655497.21","Status":2,"Type":2},{"OrderID":"63323-370","ShipCountry":"ID","ShipAddress":"0 Ramsey Hill","ShipName":"Ankunding, Walsh and Stiedemann","OrderDate":"9/13/2017","TotalPayment":"$380382.26","Status":1,"Type":1},{"OrderID":"57237-040","ShipCountry":"CN","ShipAddress":"945 Golf View Junction","ShipName":"Gulgowski, Feil and Bosco","OrderDate":"2/3/2016","TotalPayment":"$545464.59","Status":3,"Type":1},{"OrderID":"62584-741","ShipCountry":"PY","ShipAddress":"82775 Prairieview Lane","ShipName":"Kihn-Barton","OrderDate":"10/16/2016","TotalPayment":"$571182.87","Status":3,"Type":2},{"OrderID":"0268-0196","ShipCountry":"RU","ShipAddress":"20712 Prentice Terrace","ShipName":"Spencer-Powlowski","OrderDate":"6/7/2017","TotalPayment":"$207925.11","Status":1,"Type":1},{"OrderID":"76214-002","ShipCountry":"US","ShipAddress":"587 Mccormick Parkway","ShipName":"King, O\'Hara and White","OrderDate":"11/14/2016","TotalPayment":"$751439.27","Status":1,"Type":1}]},\n' +
        '{"RecordID":6,"FirstName":"Valaree","LastName":"Keson","Company":"Tagcat","Email":"vkeson5@tamu.edu","Phone":"973-838-6443","Status":5,"Type":1,"Orders":[{"OrderID":"52125-512","ShipCountry":"DO","ShipAddress":"262 Muir Point","ShipName":"Macejkovic Group","OrderDate":"6/15/2017","TotalPayment":"$536675.40","Status":2,"Type":1},{"OrderID":"0832-2012","ShipCountry":"US","ShipAddress":"54258 Westport Center","ShipName":"Walker-Sawayn","OrderDate":"8/19/2016","TotalPayment":"$465873.67","Status":4,"Type":3},{"OrderID":"63187-026","ShipCountry":"YE","ShipAddress":"82133 Holy Cross Court","ShipName":"Harber LLC","OrderDate":"11/4/2016","TotalPayment":"$654402.52","Status":1,"Type":3},{"OrderID":"0591-3292","ShipCountry":"CN","ShipAddress":"68361 Stoughton Park","ShipName":"Armstrong Group","OrderDate":"12/13/2017","TotalPayment":"$1079957.36","Status":1,"Type":1},{"OrderID":"17478-221","ShipCountry":"JP","ShipAddress":"4964 Green Circle","ShipName":"Wuckert-Wiegand","OrderDate":"5/27/2016","TotalPayment":"$1033548.36","Status":5,"Type":2},{"OrderID":"67525-100","ShipCountry":"MA","ShipAddress":"22008 Susan Court","ShipName":"Monahan, Goldner and Ebert","OrderDate":"11/25/2016","TotalPayment":"$1085910.23","Status":2,"Type":3},{"OrderID":"55150-156","ShipCountry":"AR","ShipAddress":"25 Melody Point","ShipName":"Wyman-Rau","OrderDate":"2/8/2017","TotalPayment":"$223935.72","Status":6,"Type":1},{"OrderID":"49349-549","ShipCountry":"CN","ShipAddress":"129 Warner Street","ShipName":"Dietrich-Huel","OrderDate":"5/15/2017","TotalPayment":"$870692.75","Status":3,"Type":3},{"OrderID":"76237-142","ShipCountry":"JP","ShipAddress":"75958 Clyde Gallagher Parkway","ShipName":"Prosacco, Streich and Hyatt","OrderDate":"4/20/2016","TotalPayment":"$431437.76","Status":4,"Type":1},{"OrderID":"42507-668","ShipCountry":"PH","ShipAddress":"25573 La Follette Parkway","ShipName":"Deckow, Green and Larson","OrderDate":"1/26/2017","TotalPayment":"$111453.40","Status":3,"Type":3},{"OrderID":"41520-304","ShipCountry":"CN","ShipAddress":"07 Southridge Pass","ShipName":"Bechtelar Group","OrderDate":"6/25/2016","TotalPayment":"$1164588.04","Status":6,"Type":3},{"OrderID":"0054-0291","ShipCountry":"AR","ShipAddress":"9 Bobwhite Drive","ShipName":"Reichel-Kuhlman","OrderDate":"9/7/2016","TotalPayment":"$864874.30","Status":5,"Type":2},{"OrderID":"53777-001","ShipCountry":"PH","ShipAddress":"9 Spaight Point","ShipName":"Schulist-Fahey","OrderDate":"7/30/2016","TotalPayment":"$893502.67","Status":3,"Type":2}]},\n' +
        '{"RecordID":7,"FirstName":"Loella","LastName":"Tenniswood","Company":"Midel","Email":"ltenniswood6@godaddy.com","Phone":"179-534-7335","Status":6,"Type":3,"Orders":[{"OrderID":"52125-861","ShipCountry":"SE","ShipAddress":"95 Nova Place","ShipName":"Greenholt, Mosciski and Zboncak","OrderDate":"12/20/2016","TotalPayment":"$16133.40","Status":3,"Type":1},{"OrderID":"10135-541","ShipCountry":"KE","ShipAddress":"30337 Ludington Avenue","ShipName":"Deckow-Sauer","OrderDate":"1/6/2016","TotalPayment":"$653404.99","Status":3,"Type":2},{"OrderID":"50383-705","ShipCountry":"MK","ShipAddress":"92 Petterle Terrace","ShipName":"Kutch-Yundt","OrderDate":"1/6/2017","TotalPayment":"$1199359.14","Status":3,"Type":2},{"OrderID":"0006-0705","ShipCountry":"ZA","ShipAddress":"0883 Prairieview Lane","ShipName":"Emard-Cummings","OrderDate":"9/10/2017","TotalPayment":"$1082110.44","Status":6,"Type":3},{"OrderID":"49371-024","ShipCountry":"PT","ShipAddress":"0 Rutledge Crossing","ShipName":"Stracke, Mohr and Schaefer","OrderDate":"7/5/2017","TotalPayment":"$203360.38","Status":6,"Type":1},{"OrderID":"55154-6282","ShipCountry":"RU","ShipAddress":"80006 Dwight Hill","ShipName":"Zulauf, Reichert and Schaden","OrderDate":"4/21/2016","TotalPayment":"$1190061.80","Status":3,"Type":3},{"OrderID":"53808-0856","ShipCountry":"CN","ShipAddress":"87 Doe Crossing Parkway","ShipName":"Goyette, Stoltenberg and Little","OrderDate":"2/22/2016","TotalPayment":"$49978.51","Status":5,"Type":3},{"OrderID":"0363-0666","ShipCountry":"CN","ShipAddress":"13142 Chinook Street","ShipName":"Funk-Thiel","OrderDate":"1/20/2017","TotalPayment":"$524037.58","Status":5,"Type":1},{"OrderID":"11523-1350","ShipCountry":"CN","ShipAddress":"16721 Grover Trail","ShipName":"Schultz Inc","OrderDate":"1/14/2016","TotalPayment":"$716249.49","Status":5,"Type":2},{"OrderID":"43419-514","ShipCountry":"PA","ShipAddress":"273 Pankratz Park","ShipName":"Kassulke and Sons","OrderDate":"7/3/2016","TotalPayment":"$1120010.29","Status":5,"Type":1},{"OrderID":"46581-440","ShipCountry":"MA","ShipAddress":"75197 Shelley Park","ShipName":"Ritchie Group","OrderDate":"9/2/2017","TotalPayment":"$342248.74","Status":4,"Type":1},{"OrderID":"49035-005","ShipCountry":"BR","ShipAddress":"478 Forest Dale Center","ShipName":"Sporer, O\'Conner and Wehner","OrderDate":"10/9/2016","TotalPayment":"$373207.58","Status":5,"Type":2},{"OrderID":"36987-1846","ShipCountry":"KZ","ShipAddress":"60142 Kipling Pass","ShipName":"Purdy Group","OrderDate":"3/31/2017","TotalPayment":"$453333.00","Status":5,"Type":2},{"OrderID":"57525-002","ShipCountry":"GR","ShipAddress":"466 Reindahl Road","ShipName":"Halvorson, Jacobs and Moen","OrderDate":"10/17/2017","TotalPayment":"$811809.59","Status":2,"Type":1},{"OrderID":"61657-0377","ShipCountry":"PE","ShipAddress":"0910 Bunting Street","ShipName":"Rippin and Sons","OrderDate":"2/5/2017","TotalPayment":"$249995.75","Status":2,"Type":2},{"OrderID":"49230-194","ShipCountry":"AF","ShipAddress":"23 Menomonie Crossing","ShipName":"Shanahan-Considine","OrderDate":"8/18/2017","TotalPayment":"$1157608.85","Status":3,"Type":1},{"OrderID":"24385-337","ShipCountry":"SD","ShipAddress":"17 1st Junction","ShipName":"Haag, White and Sanford","OrderDate":"10/5/2017","TotalPayment":"$253432.68","Status":6,"Type":2},{"OrderID":"44911-0008","ShipCountry":"CN","ShipAddress":"1656 Lerdahl Lane","ShipName":"Effertz Group","OrderDate":"2/9/2017","TotalPayment":"$190727.96","Status":5,"Type":1},{"OrderID":"52584-201","ShipCountry":"SE","ShipAddress":"0 Summerview Avenue","ShipName":"Greenfelder Inc","OrderDate":"3/7/2016","TotalPayment":"$274799.62","Status":4,"Type":1}]},\n' +
        '{"RecordID":8,"FirstName":"Marinna","LastName":"Oda","Company":"Photofeed","Email":"moda7@live.com","Phone":"502-962-0995","Status":6,"Type":2,"Orders":[{"OrderID":"0409-3508","ShipCountry":"BJ","ShipAddress":"68092 Spaight Alley","ShipName":"Runolfsdottir Group","OrderDate":"1/6/2017","TotalPayment":"$807827.85","Status":6,"Type":3},{"OrderID":"59915-1001","ShipCountry":"CO","ShipAddress":"519 Warbler Junction","ShipName":"Flatley LLC","OrderDate":"6/3/2017","TotalPayment":"$160408.58","Status":6,"Type":1},{"OrderID":"76007-012","ShipCountry":"ID","ShipAddress":"4808 Merrick Drive","ShipName":"Fahey, Gleichner and Pacocha","OrderDate":"2/2/2017","TotalPayment":"$661547.32","Status":5,"Type":2},{"OrderID":"15127-909","ShipCountry":"CN","ShipAddress":"981 Utah Place","ShipName":"Howe Inc","OrderDate":"4/15/2017","TotalPayment":"$516128.85","Status":6,"Type":1},{"OrderID":"57469-024","ShipCountry":"BO","ShipAddress":"72 Dahle Crossing","ShipName":"Stoltenberg Inc","OrderDate":"11/11/2017","TotalPayment":"$351384.82","Status":4,"Type":3},{"OrderID":"55154-8298","ShipCountry":"IE","ShipAddress":"320 Rieder Crossing","ShipName":"Jacobi-Weber","OrderDate":"2/28/2016","TotalPayment":"$802338.51","Status":6,"Type":1},{"OrderID":"42507-355","ShipCountry":"RU","ShipAddress":"56 Morning Street","ShipName":"Klocko, Wunsch and Durgan","OrderDate":"8/31/2016","TotalPayment":"$931824.41","Status":2,"Type":3},{"OrderID":"43269-681","ShipCountry":"CN","ShipAddress":"52 Wayridge Plaza","ShipName":"Glover Inc","OrderDate":"10/13/2017","TotalPayment":"$415160.43","Status":6,"Type":2},{"OrderID":"49967-983","ShipCountry":"CL","ShipAddress":"1755 Independence Alley","ShipName":"Cummings Inc","OrderDate":"12/24/2017","TotalPayment":"$224564.93","Status":5,"Type":2},{"OrderID":"55910-645","ShipCountry":"AM","ShipAddress":"7 Sage Park","ShipName":"Turcotte-McDermott","OrderDate":"8/22/2016","TotalPayment":"$1033625.12","Status":1,"Type":2},{"OrderID":"51143-213","ShipCountry":"PH","ShipAddress":"127 Macpherson Junction","ShipName":"Grant-Feil","OrderDate":"6/21/2017","TotalPayment":"$237824.76","Status":3,"Type":1},{"OrderID":"49288-0689","ShipCountry":"ID","ShipAddress":"76 Hoard Court","ShipName":"Brakus LLC","OrderDate":"3/11/2017","TotalPayment":"$1116744.39","Status":4,"Type":1},{"OrderID":"50580-351","ShipCountry":"VN","ShipAddress":"9305 Carpenter Road","ShipName":"Little, Cole and Towne","OrderDate":"4/14/2016","TotalPayment":"$534989.20","Status":2,"Type":2},{"OrderID":"55714-4532","ShipCountry":"PT","ShipAddress":"454 Rutledge Lane","ShipName":"Bins and Sons","OrderDate":"3/30/2016","TotalPayment":"$822775.85","Status":6,"Type":3},{"OrderID":"0536-4534","ShipCountry":"FR","ShipAddress":"4 Mesta Circle","ShipName":"Glover Inc","OrderDate":"11/14/2016","TotalPayment":"$376289.30","Status":4,"Type":3},{"OrderID":"61442-122","ShipCountry":"PT","ShipAddress":"6 Canary Crossing","ShipName":"Schmeler Group","OrderDate":"2/11/2016","TotalPayment":"$1106593.62","Status":1,"Type":3},{"OrderID":"21695-314","ShipCountry":"SV","ShipAddress":"7610 Oak Trail","ShipName":"Robel, Dickens and Padberg","OrderDate":"5/12/2016","TotalPayment":"$1059270.23","Status":6,"Type":3},{"OrderID":"62032-516","ShipCountry":"PK","ShipAddress":"96678 Gerald Trail","ShipName":"Price-Leffler","OrderDate":"7/16/2017","TotalPayment":"$275030.55","Status":3,"Type":1}]},\n' +
        '{"RecordID":9,"FirstName":"Tarra","LastName":"Dallicott","Company":"Yamia","Email":"tdallicott8@goodreads.com","Phone":"575-583-1308","Status":1,"Type":2,"Orders":[{"OrderID":"17856-1000","ShipCountry":"JP","ShipAddress":"86 Basil Point","ShipName":"Kihn, Welch and Terry","OrderDate":"6/19/2017","TotalPayment":"$1129795.73","Status":2,"Type":1},{"OrderID":"60505-2761","ShipCountry":"YE","ShipAddress":"94 Aberg Pass","ShipName":"Emmerich-Mohr","OrderDate":"4/14/2017","TotalPayment":"$164303.03","Status":3,"Type":1},{"OrderID":"55714-2295","ShipCountry":"CN","ShipAddress":"857 Emmet Circle","ShipName":"Spencer, Sporer and Nikolaus","OrderDate":"4/4/2017","TotalPayment":"$671692.16","Status":1,"Type":2},{"OrderID":"48951-8185","ShipCountry":"ID","ShipAddress":"88174 Knutson Street","ShipName":"Collier, Kris and Altenwerth","OrderDate":"10/16/2016","TotalPayment":"$362918.01","Status":2,"Type":3},{"OrderID":"34690-3001","ShipCountry":"BY","ShipAddress":"69633 Kennedy Way","ShipName":"Hammes Group","OrderDate":"12/15/2016","TotalPayment":"$1069509.73","Status":4,"Type":1},{"OrderID":"31645-163","ShipCountry":"TH","ShipAddress":"8810 Bartelt Center","ShipName":"Lynch LLC","OrderDate":"4/1/2017","TotalPayment":"$156114.60","Status":1,"Type":1},{"OrderID":"36987-1341","ShipCountry":"CN","ShipAddress":"16254 Pond Pass","ShipName":"Rempel-Little","OrderDate":"3/7/2016","TotalPayment":"$576844.64","Status":2,"Type":1},{"OrderID":"54868-5190","ShipCountry":"SE","ShipAddress":"8 New Castle Pass","ShipName":"Terry, Effertz and Jerde","OrderDate":"2/15/2016","TotalPayment":"$248019.58","Status":5,"Type":1},{"OrderID":"43857-0106","ShipCountry":"CN","ShipAddress":"29 Grayhawk Hill","ShipName":"Hessel, Shanahan and Gislason","OrderDate":"10/14/2017","TotalPayment":"$449682.61","Status":3,"Type":2},{"OrderID":"53808-0858","ShipCountry":"JP","ShipAddress":"658 Nancy Pass","ShipName":"Toy and Sons","OrderDate":"4/18/2017","TotalPayment":"$1147441.95","Status":1,"Type":1}]},\n' +
        '{"RecordID":10,"FirstName":"Hakim","LastName":"Coat","Company":"Zoombox","Email":"hcoat9@google.ca","Phone":"604-363-0650","Status":3,"Type":2,"Orders":[{"OrderID":"53603-2001","ShipCountry":"US","ShipAddress":"6 Atwood Drive","ShipName":"Dare Group","OrderDate":"9/6/2017","TotalPayment":"$703020.46","Status":4,"Type":2},{"OrderID":"30142-656","ShipCountry":"BR","ShipAddress":"00472 Bayside Court","ShipName":"Cruickshank and Sons","OrderDate":"7/5/2016","TotalPayment":"$886164.21","Status":4,"Type":2},{"OrderID":"42291-755","ShipCountry":"AR","ShipAddress":"90 Coolidge Terrace","ShipName":"Denesik-McDermott","OrderDate":"5/22/2016","TotalPayment":"$749431.02","Status":4,"Type":2},{"OrderID":"60760-130","ShipCountry":"CN","ShipAddress":"42 Hoard Parkway","ShipName":"Toy, Cassin and Hoppe","OrderDate":"4/16/2016","TotalPayment":"$177828.40","Status":3,"Type":1},{"OrderID":"50845-0169","ShipCountry":"PK","ShipAddress":"0 Browning Court","ShipName":"Rogahn-Cummerata","OrderDate":"12/11/2017","TotalPayment":"$252364.93","Status":1,"Type":3},{"OrderID":"15127-268","ShipCountry":"MY","ShipAddress":"26759 Eastlawn Road","ShipName":"Schulist, Lakin and Kling","OrderDate":"4/11/2016","TotalPayment":"$406789.79","Status":6,"Type":1},{"OrderID":"0409-1144","ShipCountry":"LI","ShipAddress":"8756 Manley Avenue","ShipName":"Halvorson, Rempel and Cassin","OrderDate":"5/15/2017","TotalPayment":"$655797.50","Status":4,"Type":3},{"OrderID":"59762-0066","ShipCountry":"ID","ShipAddress":"70 Gateway Plaza","ShipName":"Davis and Sons","OrderDate":"11/24/2017","TotalPayment":"$1053827.22","Status":3,"Type":3},{"OrderID":"0615-7571","ShipCountry":"ID","ShipAddress":"0 Knutson Avenue","ShipName":"Murray-Christiansen","OrderDate":"4/14/2016","TotalPayment":"$611395.25","Status":3,"Type":2},{"OrderID":"46122-243","ShipCountry":"GR","ShipAddress":"75 Kedzie Lane","ShipName":"Mayert and Sons","OrderDate":"9/15/2017","TotalPayment":"$983523.78","Status":4,"Type":1},{"OrderID":"10812-302","ShipCountry":"BR","ShipAddress":"0030 David Junction","ShipName":"Streich, Lubowitz and Hilpert","OrderDate":"6/9/2016","TotalPayment":"$950269.54","Status":1,"Type":1},{"OrderID":"49349-209","ShipCountry":"PH","ShipAddress":"7812 Delaware Road","ShipName":"Franecki-Bosco","OrderDate":"4/7/2017","TotalPayment":"$969032.18","Status":5,"Type":3},{"OrderID":"66184-510","ShipCountry":"PA","ShipAddress":"123 Chive Avenue","ShipName":"Rogahn and Sons","OrderDate":"5/22/2017","TotalPayment":"$798858.17","Status":4,"Type":2}]},\n' +
        '{"RecordID":11,"FirstName":"Ailsun","LastName":"Duferie","Company":"Aimbu","Email":"aduferiea@marriott.com","Phone":"468-718-9867","Status":6,"Type":2,"Orders":[{"OrderID":"51346-232","ShipCountry":"RU","ShipAddress":"1036 Stang Point","ShipName":"Flatley-Lockman","OrderDate":"6/1/2016","TotalPayment":"$333376.53","Status":4,"Type":1},{"OrderID":"11390-025","ShipCountry":"FI","ShipAddress":"230 Northfield Way","ShipName":"Braun Inc","OrderDate":"2/20/2017","TotalPayment":"$1018242.29","Status":5,"Type":3},{"OrderID":"51346-014","ShipCountry":"CN","ShipAddress":"18 Farragut Crossing","ShipName":"Zboncak-Boyle","OrderDate":"11/17/2017","TotalPayment":"$1024900.54","Status":6,"Type":1},{"OrderID":"76485-1044","ShipCountry":"AR","ShipAddress":"8051 Birchwood Alley","ShipName":"Lehner, Ritchie and Legros","OrderDate":"7/1/2017","TotalPayment":"$868747.00","Status":1,"Type":3},{"OrderID":"0268-0921","ShipCountry":"HN","ShipAddress":"224 Summer Ridge Court","ShipName":"Mraz LLC","OrderDate":"4/1/2016","TotalPayment":"$306559.14","Status":2,"Type":2},{"OrderID":"54575-963","ShipCountry":"ID","ShipAddress":"738 Myrtle Lane","ShipName":"Willms, McKenzie and Konopelski","OrderDate":"9/18/2016","TotalPayment":"$381823.72","Status":5,"Type":2},{"OrderID":"0143-2128","ShipCountry":"ID","ShipAddress":"26 Spaight Circle","ShipName":"Kiehn-Hauck","OrderDate":"12/18/2017","TotalPayment":"$329032.46","Status":1,"Type":2},{"OrderID":"43269-710","ShipCountry":"PS","ShipAddress":"8883 Northridge Street","ShipName":"Kunze Group","OrderDate":"3/24/2017","TotalPayment":"$304989.41","Status":4,"Type":1},{"OrderID":"57520-0548","ShipCountry":"CN","ShipAddress":"3470 Sloan Drive","ShipName":"Heller-Bartoletti","OrderDate":"5/30/2017","TotalPayment":"$852826.32","Status":1,"Type":1},{"OrderID":"64578-0059","ShipCountry":"AM","ShipAddress":"1622 Melby Point","ShipName":"Kilback, Rohan and Berge","OrderDate":"10/11/2016","TotalPayment":"$100818.99","Status":2,"Type":1},{"OrderID":"65862-174","ShipCountry":"ID","ShipAddress":"3 Vernon Parkway","ShipName":"Schuppe, Terry and Steuber","OrderDate":"7/1/2016","TotalPayment":"$854813.26","Status":5,"Type":3},{"OrderID":"64778-0494","ShipCountry":"SE","ShipAddress":"6 Marquette Circle","ShipName":"Barrows Inc","OrderDate":"12/27/2017","TotalPayment":"$895872.94","Status":3,"Type":3}]},\n' +
        '{"RecordID":12,"FirstName":"Henrie","LastName":"Rizzelli","Company":"Gabvine","Email":"hrizzellib@google.ca","Phone":"577-614-0198","Status":2,"Type":3,"Orders":[{"OrderID":"0268-1418","ShipCountry":"TH","ShipAddress":"745 Barnett Avenue","ShipName":"Okuneva Group","OrderDate":"6/16/2017","TotalPayment":"$549432.48","Status":5,"Type":2},{"OrderID":"60681-1702","ShipCountry":"NG","ShipAddress":"9147 Sunnyside Drive","ShipName":"Simonis Inc","OrderDate":"10/18/2016","TotalPayment":"$1048987.69","Status":2,"Type":2},{"OrderID":"54868-4992","ShipCountry":"CN","ShipAddress":"262 Alpine Circle","ShipName":"Connelly-Medhurst","OrderDate":"11/9/2017","TotalPayment":"$270509.02","Status":3,"Type":3},{"OrderID":"54868-0295","ShipCountry":"BR","ShipAddress":"14 Little Fleur Crossing","ShipName":"Strosin, Frami and Kohler","OrderDate":"11/20/2016","TotalPayment":"$236751.98","Status":2,"Type":2},{"OrderID":"0067-2083","ShipCountry":"BF","ShipAddress":"07276 Pepper Wood Hill","ShipName":"Ondricka-Kling","OrderDate":"3/5/2016","TotalPayment":"$806806.54","Status":2,"Type":3},{"OrderID":"59584-140","ShipCountry":"FR","ShipAddress":"2853 Ryan Center","ShipName":"Gleichner LLC","OrderDate":"9/28/2016","TotalPayment":"$605758.72","Status":6,"Type":3},{"OrderID":"0904-5633","ShipCountry":"RU","ShipAddress":"98748 Cottonwood Road","ShipName":"Cormier and Sons","OrderDate":"8/14/2016","TotalPayment":"$73438.51","Status":1,"Type":3},{"OrderID":"11673-054","ShipCountry":"PT","ShipAddress":"464 Myrtle Road","ShipName":"Schaefer Inc","OrderDate":"10/13/2016","TotalPayment":"$847457.03","Status":6,"Type":3},{"OrderID":"35000-703","ShipCountry":"PT","ShipAddress":"1195 Goodland Drive","ShipName":"Franecki, Ullrich and Reinger","OrderDate":"10/19/2016","TotalPayment":"$549390.75","Status":1,"Type":3},{"OrderID":"50804-252","ShipCountry":"UA","ShipAddress":"3 Nelson Hill","ShipName":"Yundt-West","OrderDate":"7/10/2016","TotalPayment":"$602875.09","Status":5,"Type":3}]},\n' +
        '{"RecordID":13,"FirstName":"Marjy","LastName":"Knevit","Company":"Topicstorm","Email":"mknevitc@nyu.edu","Phone":"927-108-0751","Status":1,"Type":2,"Orders":[{"OrderID":"0054-8299","ShipCountry":"RU","ShipAddress":"44 Thompson Way","ShipName":"Labadie Group","OrderDate":"12/20/2017","TotalPayment":"$634798.75","Status":6,"Type":2},{"OrderID":"0179-1482","ShipCountry":"MY","ShipAddress":"48716 Scofield Drive","ShipName":"Gleichner, Cremin and Becker","OrderDate":"4/21/2016","TotalPayment":"$882102.56","Status":6,"Type":3},{"OrderID":"43353-888","ShipCountry":"EC","ShipAddress":"2135 Northfield Drive","ShipName":"Dickens, Hills and Zulauf","OrderDate":"1/18/2016","TotalPayment":"$292760.70","Status":1,"Type":1},{"OrderID":"63459-548","ShipCountry":"AR","ShipAddress":"22 Carberry Alley","ShipName":"Gerhold, Padberg and Strosin","OrderDate":"3/22/2017","TotalPayment":"$1168455.92","Status":5,"Type":1},{"OrderID":"69261-001","ShipCountry":"PL","ShipAddress":"73536 Crescent Oaks Drive","ShipName":"Mante-Olson","OrderDate":"8/30/2016","TotalPayment":"$107961.66","Status":3,"Type":2},{"OrderID":"49999-347","ShipCountry":"CZ","ShipAddress":"695 Truax Crossing","ShipName":"Collins, Eichmann and Trantow","OrderDate":"11/17/2016","TotalPayment":"$958790.75","Status":6,"Type":1},{"OrderID":"49288-0454","ShipCountry":"PT","ShipAddress":"460 Waxwing Place","ShipName":"Carter, Will and MacGyver","OrderDate":"9/29/2016","TotalPayment":"$264659.62","Status":3,"Type":2},{"OrderID":"62175-570","ShipCountry":"CA","ShipAddress":"84 Tony Way","ShipName":"O\'Kon, Rodriguez and Pfeffer","OrderDate":"3/28/2016","TotalPayment":"$1114174.72","Status":2,"Type":3},{"OrderID":"36987-1757","ShipCountry":"CN","ShipAddress":"8115 Lerdahl Terrace","ShipName":"Schiller Inc","OrderDate":"5/12/2016","TotalPayment":"$358901.83","Status":4,"Type":2},{"OrderID":"48951-1149","ShipCountry":"JP","ShipAddress":"0 Jana Point","ShipName":"Kerluke, Boehm and Schamberger","OrderDate":"8/18/2017","TotalPayment":"$432215.44","Status":2,"Type":2},{"OrderID":"55648-315","ShipCountry":"FR","ShipAddress":"8674 Roxbury Terrace","ShipName":"Morar-Gutkowski","OrderDate":"7/27/2017","TotalPayment":"$1077213.84","Status":6,"Type":1},{"OrderID":"67544-268","ShipCountry":"ID","ShipAddress":"2264 Manufacturers Road","ShipName":"Kuhic Inc","OrderDate":"7/17/2016","TotalPayment":"$70671.10","Status":1,"Type":3},{"OrderID":"68788-9933","ShipCountry":"NG","ShipAddress":"74 Village Trail","ShipName":"Gerlach, Hodkiewicz and Ankunding","OrderDate":"12/8/2016","TotalPayment":"$239201.40","Status":3,"Type":2},{"OrderID":"37808-234","ShipCountry":"CZ","ShipAddress":"81263 Calypso Plaza","ShipName":"Willms and Sons","OrderDate":"7/5/2017","TotalPayment":"$29271.02","Status":4,"Type":3},{"OrderID":"48951-3009","ShipCountry":"TH","ShipAddress":"13796 Monument Center","ShipName":"Grant, Carter and Koss","OrderDate":"12/18/2017","TotalPayment":"$1110434.95","Status":5,"Type":2},{"OrderID":"67253-145","ShipCountry":"PL","ShipAddress":"39 Butternut Crossing","ShipName":"Klein-Bechtelar","OrderDate":"12/4/2016","TotalPayment":"$94688.79","Status":1,"Type":1},{"OrderID":"52125-968","ShipCountry":"PT","ShipAddress":"47 Independence Lane","ShipName":"Pollich, Waters and Braun","OrderDate":"11/22/2016","TotalPayment":"$516304.60","Status":6,"Type":1},{"OrderID":"0378-2264","ShipCountry":"PH","ShipAddress":"0 Comanche Court","ShipName":"Johnston-Kautzer","OrderDate":"10/21/2017","TotalPayment":"$892603.93","Status":5,"Type":3},{"OrderID":"36987-1216","ShipCountry":"CO","ShipAddress":"019 Kenwood Point","ShipName":"Effertz and Sons","OrderDate":"9/6/2016","TotalPayment":"$445064.37","Status":4,"Type":2}]},\n' +
        '{"RecordID":14,"FirstName":"Baillie","LastName":"Gullyes","Company":"Skinder","Email":"bgullyesd@army.mil","Phone":"566-804-6864","Status":4,"Type":3,"Orders":[{"OrderID":"50436-1223","ShipCountry":"PH","ShipAddress":"2571 Helena Road","ShipName":"Barrows-Dach","OrderDate":"11/8/2017","TotalPayment":"$1101259.11","Status":3,"Type":1},{"OrderID":"43846-0021","ShipCountry":"PE","ShipAddress":"50363 Butterfield Point","ShipName":"Jones, Kuhic and Frami","OrderDate":"4/12/2016","TotalPayment":"$182473.50","Status":5,"Type":3},{"OrderID":"54868-1173","ShipCountry":"ZA","ShipAddress":"250 Morningstar Parkway","ShipName":"Swift-Bergnaum","OrderDate":"10/3/2017","TotalPayment":"$1134676.85","Status":5,"Type":2},{"OrderID":"49643-423","ShipCountry":"PL","ShipAddress":"0295 Glacier Hill Terrace","ShipName":"Langworth-Kohler","OrderDate":"4/6/2016","TotalPayment":"$718961.06","Status":4,"Type":2},{"OrderID":"63354-322","ShipCountry":"ET","ShipAddress":"4140 Dakota Center","ShipName":"Oberbrunner, Fadel and Renner","OrderDate":"10/27/2017","TotalPayment":"$291614.46","Status":5,"Type":2},{"OrderID":"44924-003","ShipCountry":"PH","ShipAddress":"647 Toban Terrace","ShipName":"Wehner-Lind","OrderDate":"11/18/2016","TotalPayment":"$562090.23","Status":2,"Type":2},{"OrderID":"63323-282","ShipCountry":"PT","ShipAddress":"07 Nobel Parkway","ShipName":"Swaniawski, Altenwerth and Kuphal","OrderDate":"10/27/2017","TotalPayment":"$140295.88","Status":3,"Type":3},{"OrderID":"52685-442","ShipCountry":"ID","ShipAddress":"70686 Del Sol Plaza","ShipName":"Price, Hessel and Bahringer","OrderDate":"2/28/2016","TotalPayment":"$313738.32","Status":6,"Type":3}]},\n' +
        '{"RecordID":15,"FirstName":"Cris","LastName":"Domke","Company":"Yamia","Email":"cdomkee@xing.com","Phone":"591-995-0816","Status":1,"Type":2,"Orders":[{"OrderID":"58118-0613","ShipCountry":"CN","ShipAddress":"38 Scofield Alley","ShipName":"Parisian-Deckow","OrderDate":"7/17/2017","TotalPayment":"$858726.54","Status":6,"Type":3},{"OrderID":"0378-5550","ShipCountry":"IT","ShipAddress":"2755 Coolidge Point","ShipName":"Jast, Bechtelar and Conroy","OrderDate":"3/5/2017","TotalPayment":"$349939.86","Status":3,"Type":2},{"OrderID":"11410-044","ShipCountry":"ID","ShipAddress":"3344 Lerdahl Street","ShipName":"Kautzer, Fahey and Barrows","OrderDate":"1/19/2017","TotalPayment":"$324163.14","Status":1,"Type":3},{"OrderID":"11822-0843","ShipCountry":"CI","ShipAddress":"8609 Kedzie Park","ShipName":"Corkery-Bergnaum","OrderDate":"12/2/2016","TotalPayment":"$680415.41","Status":2,"Type":1},{"OrderID":"75990-365","ShipCountry":"CN","ShipAddress":"8 Eastlawn Circle","ShipName":"Braun, Oberbrunner and Bode","OrderDate":"11/20/2016","TotalPayment":"$898420.40","Status":2,"Type":2},{"OrderID":"68135-301","ShipCountry":"CN","ShipAddress":"501 Loftsgordon Court","ShipName":"Ryan-Gislason","OrderDate":"11/28/2017","TotalPayment":"$1040364.18","Status":5,"Type":3},{"OrderID":"24236-496","ShipCountry":"PT","ShipAddress":"13933 Clyde Gallagher Place","ShipName":"Boehm, Stehr and Frami","OrderDate":"4/12/2017","TotalPayment":"$948812.54","Status":2,"Type":2},{"OrderID":"48951-7053","ShipCountry":"AR","ShipAddress":"74 Fremont Terrace","ShipName":"Kilback LLC","OrderDate":"2/4/2017","TotalPayment":"$943938.97","Status":1,"Type":2}]},\n' +
        '{"RecordID":16,"FirstName":"Myranda","LastName":"Risebarer","Company":"Devbug","Email":"mrisebarerf@icq.com","Phone":"127-856-4898","Status":6,"Type":1,"Orders":[{"OrderID":"0591-3204","ShipCountry":"CO","ShipAddress":"49559 Stephen Road","ShipName":"Lemke and Sons","OrderDate":"10/18/2017","TotalPayment":"$742084.02","Status":5,"Type":1},{"OrderID":"49483-272","ShipCountry":"ID","ShipAddress":"30 Forster Alley","ShipName":"Harber-Brakus","OrderDate":"10/25/2017","TotalPayment":"$629172.17","Status":6,"Type":1},{"OrderID":"11673-330","ShipCountry":"YE","ShipAddress":"8 Vahlen Drive","ShipName":"Dach and Sons","OrderDate":"11/18/2017","TotalPayment":"$161271.00","Status":6,"Type":1},{"OrderID":"37000-238","ShipCountry":"FR","ShipAddress":"62 Clove Avenue","ShipName":"Rau-Price","OrderDate":"12/2/2016","TotalPayment":"$744246.99","Status":6,"Type":1},{"OrderID":"0085-0517","ShipCountry":"PT","ShipAddress":"08 8th Pass","ShipName":"Marquardt-Graham","OrderDate":"12/8/2016","TotalPayment":"$1066352.27","Status":3,"Type":1},{"OrderID":"51285-063","ShipCountry":"JP","ShipAddress":"40821 Fallview Alley","ShipName":"Thompson-Sipes","OrderDate":"7/26/2016","TotalPayment":"$803965.87","Status":5,"Type":3},{"OrderID":"58118-1512","ShipCountry":"BR","ShipAddress":"43474 Heffernan Way","ShipName":"Predovic, Lynch and Rogahn","OrderDate":"2/13/2016","TotalPayment":"$964045.35","Status":1,"Type":2},{"OrderID":"41167-4002","ShipCountry":"CN","ShipAddress":"6989 Moland Plaza","ShipName":"Carter, Braun and Ferry","OrderDate":"6/3/2016","TotalPayment":"$987904.62","Status":1,"Type":3},{"OrderID":"16590-295","ShipCountry":"TZ","ShipAddress":"80 Forest Run Point","ShipName":"Witting, Bergnaum and Stroman","OrderDate":"5/1/2017","TotalPayment":"$655363.89","Status":5,"Type":3},{"OrderID":"24208-299","ShipCountry":"CN","ShipAddress":"41 Upham Alley","ShipName":"Harvey, Reinger and Boyle","OrderDate":"12/24/2016","TotalPayment":"$753640.29","Status":2,"Type":3},{"OrderID":"55910-437","ShipCountry":"BG","ShipAddress":"935 Rockefeller Center","ShipName":"Boyer, Cassin and Schaden","OrderDate":"1/14/2017","TotalPayment":"$791040.48","Status":4,"Type":2},{"OrderID":"63868-612","ShipCountry":"CN","ShipAddress":"7304 Kedzie Park","ShipName":"Pfeffer Inc","OrderDate":"4/23/2017","TotalPayment":"$146510.35","Status":2,"Type":1},{"OrderID":"63868-133","ShipCountry":"PK","ShipAddress":"823 Rusk Park","ShipName":"Stroman-Kris","OrderDate":"8/23/2017","TotalPayment":"$808374.39","Status":3,"Type":3},{"OrderID":"0409-9157","ShipCountry":"FR","ShipAddress":"8638 Lawn Point","ShipName":"Watsica-Hermann","OrderDate":"2/20/2016","TotalPayment":"$213632.22","Status":1,"Type":3}]},\n' +
        '{"RecordID":17,"FirstName":"Lana","LastName":"Redit","Company":"Edgetag","Email":"lreditg@rambler.ru","Phone":"443-713-4257","Status":5,"Type":1,"Orders":[{"OrderID":"49999-122","ShipCountry":"ID","ShipAddress":"24171 Iowa Park","ShipName":"Harber Inc","OrderDate":"4/18/2017","TotalPayment":"$188645.10","Status":6,"Type":1},{"OrderID":"53808-0644","ShipCountry":"TH","ShipAddress":"90 Rusk Avenue","ShipName":"Heller and Sons","OrderDate":"11/4/2017","TotalPayment":"$285957.55","Status":2,"Type":1},{"OrderID":"68258-6010","ShipCountry":"SE","ShipAddress":"436 Commercial Avenue","ShipName":"Ullrich-Gislason","OrderDate":"5/21/2017","TotalPayment":"$423935.10","Status":2,"Type":2},{"OrderID":"65465-0001","ShipCountry":"SO","ShipAddress":"26343 Fulton Terrace","ShipName":"Langosh-Moen","OrderDate":"11/3/2017","TotalPayment":"$96756.85","Status":1,"Type":1},{"OrderID":"67172-595","ShipCountry":"RU","ShipAddress":"38 Towne Avenue","ShipName":"Franecki-Jacobi","OrderDate":"7/17/2017","TotalPayment":"$889970.24","Status":3,"Type":2},{"OrderID":"55316-431","ShipCountry":"PK","ShipAddress":"242 Ruskin Junction","ShipName":"Grimes-Kemmer","OrderDate":"11/3/2017","TotalPayment":"$453780.44","Status":2,"Type":2},{"OrderID":"63304-951","ShipCountry":"BJ","ShipAddress":"2495 Pawling Road","ShipName":"Adams-Morissette","OrderDate":"8/28/2016","TotalPayment":"$392175.26","Status":3,"Type":1},{"OrderID":"63739-494","ShipCountry":"PH","ShipAddress":"3962 Heath Circle","ShipName":"Wilderman, Zboncak and Wisozk","OrderDate":"7/24/2016","TotalPayment":"$988233.53","Status":6,"Type":1},{"OrderID":"45737-242","ShipCountry":"CN","ShipAddress":"1 Westridge Circle","ShipName":"Jones, Reichel and McLaughlin","OrderDate":"9/24/2016","TotalPayment":"$725217.59","Status":1,"Type":1},{"OrderID":"57344-150","ShipCountry":"VN","ShipAddress":"7395 Amoth Pass","ShipName":"Carroll, Kiehn and Hahn","OrderDate":"4/22/2017","TotalPayment":"$781462.83","Status":3,"Type":3},{"OrderID":"33261-491","ShipCountry":"CN","ShipAddress":"1 Loomis Court","ShipName":"McLaughlin Group","OrderDate":"12/26/2017","TotalPayment":"$283735.31","Status":5,"Type":1}]},\n' +
        '{"RecordID":18,"FirstName":"Pascal","LastName":"Richold","Company":"Lazz","Email":"pricholdh@ed.gov","Phone":"423-479-6879","Status":4,"Type":1,"Orders":[{"OrderID":"68788-9549","ShipCountry":"MV","ShipAddress":"003 Jenifer Center","ShipName":"Gleichner, Ziemann and DuBuque","OrderDate":"8/2/2017","TotalPayment":"$125706.11","Status":3,"Type":2},{"OrderID":"0517-0730","ShipCountry":"AF","ShipAddress":"88773 Nancy Circle","ShipName":"Hamill Group","OrderDate":"5/24/2016","TotalPayment":"$36318.26","Status":1,"Type":1},{"OrderID":"65588-1206","ShipCountry":"UA","ShipAddress":"01097 Gerald Hill","ShipName":"Bednar Group","OrderDate":"5/18/2016","TotalPayment":"$1106007.43","Status":5,"Type":3},{"OrderID":"52125-561","ShipCountry":"PT","ShipAddress":"067 Delaware Place","ShipName":"Harber LLC","OrderDate":"4/17/2017","TotalPayment":"$270198.81","Status":4,"Type":1},{"OrderID":"68016-073","ShipCountry":"CN","ShipAddress":"24 Stang Center","ShipName":"Grimes and Sons","OrderDate":"8/1/2017","TotalPayment":"$665773.24","Status":5,"Type":2},{"OrderID":"0093-5562","ShipCountry":"UA","ShipAddress":"4772 Thackeray Hill","ShipName":"Deckow Group","OrderDate":"2/24/2017","TotalPayment":"$466943.51","Status":6,"Type":1},{"OrderID":"55154-6265","ShipCountry":"RU","ShipAddress":"2 Mandrake Court","ShipName":"Bernhard-Feil","OrderDate":"1/26/2017","TotalPayment":"$12260.64","Status":5,"Type":1}]},\n' +
        '{"RecordID":19,"FirstName":"Evered","LastName":"Massow","Company":"Chatterbridge","Email":"emassowi@apple.com","Phone":"429-251-6310","Status":5,"Type":2,"Orders":[{"OrderID":"63629-5435","ShipCountry":"CM","ShipAddress":"0 Moose Plaza","ShipName":"Gorczany and Sons","OrderDate":"6/27/2017","TotalPayment":"$474565.63","Status":1,"Type":1},{"OrderID":"64117-534","ShipCountry":"ID","ShipAddress":"1236 Ryan Avenue","ShipName":"Upton, Kuvalis and Welch","OrderDate":"2/5/2016","TotalPayment":"$260489.33","Status":4,"Type":3},{"OrderID":"52544-495","ShipCountry":"PH","ShipAddress":"27073 Mayer Place","ShipName":"Prohaska-Skiles","OrderDate":"12/27/2017","TotalPayment":"$901171.25","Status":6,"Type":3},{"OrderID":"49349-430","ShipCountry":"YE","ShipAddress":"6613 Evergreen Park","ShipName":"Watsica-Kub","OrderDate":"11/15/2017","TotalPayment":"$594278.46","Status":5,"Type":3},{"OrderID":"54569-0322","ShipCountry":"CZ","ShipAddress":"48 Thompson Drive","ShipName":"Barton LLC","OrderDate":"6/20/2016","TotalPayment":"$348473.52","Status":6,"Type":3},{"OrderID":"0378-1813","ShipCountry":"FR","ShipAddress":"698 Graedel Lane","ShipName":"Collins, Marks and Goyette","OrderDate":"6/26/2017","TotalPayment":"$859477.22","Status":6,"Type":1},{"OrderID":"52125-399","ShipCountry":"RU","ShipAddress":"0621 Arizona Road","ShipName":"Jacobi-Conn","OrderDate":"4/14/2017","TotalPayment":"$743880.29","Status":4,"Type":2},{"OrderID":"55910-038","ShipCountry":"US","ShipAddress":"3803 Evergreen Road","ShipName":"Pfeffer-Lueilwitz","OrderDate":"10/22/2017","TotalPayment":"$204204.28","Status":2,"Type":3},{"OrderID":"51655-301","ShipCountry":"RU","ShipAddress":"8512 Calypso Terrace","ShipName":"Nienow and Sons","OrderDate":"11/18/2017","TotalPayment":"$160761.72","Status":6,"Type":3},{"OrderID":"24385-200","ShipCountry":"CN","ShipAddress":"28347 Heath Street","ShipName":"Shanahan Group","OrderDate":"5/5/2017","TotalPayment":"$1040163.34","Status":6,"Type":3},{"OrderID":"10956-003","ShipCountry":"ID","ShipAddress":"00 Southridge Avenue","ShipName":"Crooks Group","OrderDate":"8/11/2017","TotalPayment":"$945611.35","Status":6,"Type":1},{"OrderID":"65626-017","ShipCountry":"MV","ShipAddress":"70123 Knutson Parkway","ShipName":"O\'Conner, Veum and Blanda","OrderDate":"11/21/2017","TotalPayment":"$621240.52","Status":3,"Type":1},{"OrderID":"58668-1103","ShipCountry":"ID","ShipAddress":"0513 Anzinger Park","ShipName":"Greenholt, Bartell and Kemmer","OrderDate":"10/5/2017","TotalPayment":"$506764.60","Status":4,"Type":2},{"OrderID":"0781-3302","ShipCountry":"BR","ShipAddress":"725 Myrtle Lane","ShipName":"Barrows-Heidenreich","OrderDate":"6/24/2017","TotalPayment":"$64651.31","Status":3,"Type":2},{"OrderID":"0115-5911","ShipCountry":"BR","ShipAddress":"98143 Mesta Alley","ShipName":"Daniel-Welch","OrderDate":"9/3/2016","TotalPayment":"$804125.45","Status":4,"Type":2},{"OrderID":"61657-0052","ShipCountry":"CN","ShipAddress":"54126 Banding Point","ShipName":"Dickens-Koss","OrderDate":"3/28/2017","TotalPayment":"$489717.89","Status":4,"Type":3},{"OrderID":"29500-2435","ShipCountry":"SY","ShipAddress":"6 Kinsman Circle","ShipName":"Ledner Inc","OrderDate":"5/16/2017","TotalPayment":"$523060.11","Status":1,"Type":2}]},\n' +
        '{"RecordID":20,"FirstName":"Werner","LastName":"Davy","Company":"Mybuzz","Email":"wdavyj@lycos.com","Phone":"207-709-2159","Status":5,"Type":3,"Orders":[{"OrderID":"0409-6637","ShipCountry":"US","ShipAddress":"8 Golf Way","ShipName":"VonRueden Group","OrderDate":"12/3/2017","TotalPayment":"$676139.26","Status":5,"Type":2},{"OrderID":"55154-4728","ShipCountry":"PK","ShipAddress":"4443 Fallview Junction","ShipName":"Ziemann-King","OrderDate":"6/7/2016","TotalPayment":"$909920.97","Status":6,"Type":1},{"OrderID":"64141-010","ShipCountry":"CN","ShipAddress":"4 Laurel Drive","ShipName":"Heaney-Leffler","OrderDate":"9/22/2017","TotalPayment":"$305292.44","Status":1,"Type":3},{"OrderID":"0268-1182","ShipCountry":"UA","ShipAddress":"9 Arkansas Plaza","ShipName":"Cruickshank LLC","OrderDate":"3/29/2016","TotalPayment":"$1183733.44","Status":6,"Type":2},{"OrderID":"0115-9633","ShipCountry":"ID","ShipAddress":"229 Spenser Circle","ShipName":"Harvey-Johnston","OrderDate":"9/28/2017","TotalPayment":"$806663.05","Status":1,"Type":3},{"OrderID":"47335-804","ShipCountry":"VN","ShipAddress":"6 Forest Dale Avenue","ShipName":"Gerhold-Ratke","OrderDate":"6/20/2017","TotalPayment":"$771173.24","Status":4,"Type":2},{"OrderID":"0363-4816","ShipCountry":"NL","ShipAddress":"945 Scott Junction","ShipName":"Morissette, Hodkiewicz and Grimes","OrderDate":"1/13/2017","TotalPayment":"$912300.59","Status":4,"Type":1},{"OrderID":"12634-909","ShipCountry":"CO","ShipAddress":"2372 Havey Pass","ShipName":"Hand, Nader and Jerde","OrderDate":"1/22/2016","TotalPayment":"$90438.21","Status":3,"Type":1},{"OrderID":"0054-4581","ShipCountry":"ID","ShipAddress":"3 Hanson Point","ShipName":"Gutmann-Crona","OrderDate":"1/7/2016","TotalPayment":"$319363.30","Status":6,"Type":1},{"OrderID":"49371-024","ShipCountry":"CN","ShipAddress":"98148 Kenwood Pass","ShipName":"Raynor Group","OrderDate":"1/31/2016","TotalPayment":"$27223.28","Status":3,"Type":2},{"OrderID":"61699-3977","ShipCountry":"PH","ShipAddress":"91522 Cambridge Lane","ShipName":"Waters, Herman and Hudson","OrderDate":"12/11/2016","TotalPayment":"$576844.09","Status":2,"Type":1},{"OrderID":"50452-221","ShipCountry":"US","ShipAddress":"20658 Shopko Park","ShipName":"Aufderhar Group","OrderDate":"8/4/2017","TotalPayment":"$1092940.53","Status":6,"Type":2},{"OrderID":"41163-557","ShipCountry":"FR","ShipAddress":"155 Sutteridge Avenue","ShipName":"Koelpin, Hessel and Rogahn","OrderDate":"8/13/2017","TotalPayment":"$546465.11","Status":4,"Type":2}]},\n' +
        '{"RecordID":21,"FirstName":"Carina","LastName":"Sloyan","Company":"Edgepulse","Email":"csloyank@qq.com","Phone":"211-855-3589","Status":2,"Type":2,"Orders":[{"OrderID":"49884-932","ShipCountry":"CN","ShipAddress":"30239 Service Lane","ShipName":"Schmitt, Littel and Hayes","OrderDate":"1/20/2017","TotalPayment":"$23390.21","Status":1,"Type":1},{"OrderID":"49349-562","ShipCountry":"AR","ShipAddress":"8 Shoshone Court","ShipName":"McGlynn, Kling and Heaney","OrderDate":"1/18/2017","TotalPayment":"$185932.20","Status":5,"Type":1},{"OrderID":"24286-1558","ShipCountry":"US","ShipAddress":"46 Melrose Terrace","ShipName":"Satterfield, Reynolds and Johnson","OrderDate":"4/13/2016","TotalPayment":"$672941.27","Status":3,"Type":2},{"OrderID":"67345-0671","ShipCountry":"TT","ShipAddress":"032 Emmet Court","ShipName":"Ratke-Brown","OrderDate":"6/25/2017","TotalPayment":"$302787.56","Status":2,"Type":1},{"OrderID":"65626-206","ShipCountry":"CN","ShipAddress":"44 Iowa Terrace","ShipName":"Cormier, Gerlach and Goodwin","OrderDate":"5/22/2016","TotalPayment":"$1112348.00","Status":4,"Type":2},{"OrderID":"62802-116","ShipCountry":"GT","ShipAddress":"604 Scott Court","ShipName":"Jacobi, Pollich and Hoeger","OrderDate":"8/22/2017","TotalPayment":"$732225.33","Status":3,"Type":2},{"OrderID":"0363-0443","ShipCountry":"ID","ShipAddress":"5 Eggendart Way","ShipName":"Rolfson, Bradtke and Turner","OrderDate":"11/19/2016","TotalPayment":"$820850.48","Status":2,"Type":1},{"OrderID":"10733-395","ShipCountry":"UA","ShipAddress":"71557 Brickson Park Terrace","ShipName":"Dickens-Erdman","OrderDate":"3/21/2017","TotalPayment":"$574900.99","Status":3,"Type":3},{"OrderID":"13668-001","ShipCountry":"CN","ShipAddress":"7 Springview Alley","ShipName":"Hettinger Inc","OrderDate":"10/1/2016","TotalPayment":"$390271.23","Status":2,"Type":2},{"OrderID":"11118-3000","ShipCountry":"CN","ShipAddress":"06 Clarendon Hill","ShipName":"Kohler, Hirthe and Erdman","OrderDate":"3/18/2016","TotalPayment":"$840691.78","Status":2,"Type":2},{"OrderID":"60505-6087","ShipCountry":"CN","ShipAddress":"369 Grayhawk Junction","ShipName":"Price-Rippin","OrderDate":"1/30/2017","TotalPayment":"$242520.21","Status":1,"Type":1},{"OrderID":"69097-149","ShipCountry":"CO","ShipAddress":"862 Carioca Circle","ShipName":"Huels-Hayes","OrderDate":"12/2/2016","TotalPayment":"$450006.58","Status":4,"Type":3},{"OrderID":"68084-108","ShipCountry":"NG","ShipAddress":"0 Kings Junction","ShipName":"Mitchell, Schneider and Schulist","OrderDate":"2/1/2016","TotalPayment":"$471457.13","Status":2,"Type":2},{"OrderID":"64117-285","ShipCountry":"NO","ShipAddress":"896 Nancy Terrace","ShipName":"Fay LLC","OrderDate":"1/7/2016","TotalPayment":"$334428.76","Status":6,"Type":2},{"OrderID":"52125-144","ShipCountry":"US","ShipAddress":"10 Waxwing Hill","ShipName":"Fritsch-Bins","OrderDate":"10/28/2017","TotalPayment":"$1015892.49","Status":6,"Type":3}]},\n' +
        '{"RecordID":22,"FirstName":"Dyane","LastName":"Petraitis","Company":"Thoughtmix","Email":"dpetraitisl@chronoengine.com","Phone":"400-332-4756","Status":2,"Type":1,"Orders":[{"OrderID":"54868-4970","ShipCountry":"PL","ShipAddress":"1382 Heffernan Place","ShipName":"Walker, Lehner and Schumm","OrderDate":"10/22/2016","TotalPayment":"$550011.09","Status":5,"Type":2},{"OrderID":"0781-7244","ShipCountry":"NZ","ShipAddress":"340 Carioca Hill","ShipName":"Ritchie-Kertzmann","OrderDate":"7/15/2016","TotalPayment":"$301703.59","Status":2,"Type":1},{"OrderID":"50563-301","ShipCountry":"CN","ShipAddress":"0 Union Lane","ShipName":"Bechtelar-Cormier","OrderDate":"4/16/2016","TotalPayment":"$738279.45","Status":6,"Type":1},{"OrderID":"47781-264","ShipCountry":"AM","ShipAddress":"00 Old Gate Drive","ShipName":"Bauch Group","OrderDate":"10/31/2016","TotalPayment":"$552838.67","Status":6,"Type":3},{"OrderID":"58411-129","ShipCountry":"CN","ShipAddress":"231 Randy Place","ShipName":"Halvorson-Kulas","OrderDate":"12/13/2017","TotalPayment":"$121851.27","Status":2,"Type":1},{"OrderID":"64380-735","ShipCountry":"CN","ShipAddress":"21 Dryden Avenue","ShipName":"Kuhlman, Lockman and Schmidt","OrderDate":"2/15/2016","TotalPayment":"$1179842.45","Status":4,"Type":3},{"OrderID":"37012-498","ShipCountry":"MD","ShipAddress":"24437 Southridge Park","ShipName":"Mraz-Rempel","OrderDate":"8/30/2017","TotalPayment":"$872008.48","Status":2,"Type":1},{"OrderID":"64058-145","ShipCountry":"SE","ShipAddress":"3608 Anthes Crossing","ShipName":"DuBuque-Gleason","OrderDate":"9/19/2016","TotalPayment":"$471599.11","Status":6,"Type":2},{"OrderID":"0781-3222","ShipCountry":"FR","ShipAddress":"1 Graceland Junction","ShipName":"McLaughlin-Mayer","OrderDate":"11/17/2017","TotalPayment":"$939417.30","Status":6,"Type":3},{"OrderID":"13537-533","ShipCountry":"CN","ShipAddress":"637 Mcbride Lane","ShipName":"Wolf, Wuckert and Witting","OrderDate":"11/22/2016","TotalPayment":"$364109.83","Status":2,"Type":2},{"OrderID":"64011-010","ShipCountry":"CZ","ShipAddress":"86543 Raven Place","ShipName":"Schuster, Reinger and Stokes","OrderDate":"4/7/2017","TotalPayment":"$1077247.86","Status":3,"Type":3},{"OrderID":"50242-073","ShipCountry":"MG","ShipAddress":"5147 Northfield Lane","ShipName":"Daugherty, Pagac and Hackett","OrderDate":"3/23/2017","TotalPayment":"$191786.31","Status":3,"Type":2}]},\n' +
        '{"RecordID":23,"FirstName":"Stanislaw","LastName":"Fruen","Company":"Kwideo","Email":"sfruenm@senate.gov","Phone":"962-404-6507","Status":2,"Type":1,"Orders":[{"OrderID":"76485-1013","ShipCountry":"GQ","ShipAddress":"67725 4th Junction","ShipName":"Ward-Welch","OrderDate":"7/30/2017","TotalPayment":"$359608.70","Status":3,"Type":3},{"OrderID":"43269-803","ShipCountry":"PE","ShipAddress":"4 Mallard Drive","ShipName":"Waters Inc","OrderDate":"7/21/2017","TotalPayment":"$482120.25","Status":5,"Type":2},{"OrderID":"59663-130","ShipCountry":"CN","ShipAddress":"095 Farwell Park","ShipName":"Hansen LLC","OrderDate":"8/5/2017","TotalPayment":"$209680.67","Status":2,"Type":1},{"OrderID":"0363-0591","ShipCountry":"CN","ShipAddress":"4 Northland Avenue","ShipName":"Padberg, Bogan and Buckridge","OrderDate":"9/28/2017","TotalPayment":"$954836.79","Status":5,"Type":1},{"OrderID":"0185-0342","ShipCountry":"CO","ShipAddress":"33 Roxbury Junction","ShipName":"Gislason, Zieme and Huels","OrderDate":"11/13/2016","TotalPayment":"$468101.37","Status":6,"Type":2},{"OrderID":"59779-603","ShipCountry":"ID","ShipAddress":"33143 Red Cloud Trail","ShipName":"Ledner Inc","OrderDate":"3/13/2017","TotalPayment":"$420910.81","Status":4,"Type":1},{"OrderID":"0172-5412","ShipCountry":"ES","ShipAddress":"07560 Warbler Way","ShipName":"Ward, Sawayn and Brown","OrderDate":"9/30/2017","TotalPayment":"$275684.41","Status":5,"Type":1},{"OrderID":"64942-1048","ShipCountry":"CN","ShipAddress":"570 Bartillon Plaza","ShipName":"Huels, Dietrich and Ondricka","OrderDate":"3/11/2017","TotalPayment":"$1148838.85","Status":4,"Type":2},{"OrderID":"42546-270","ShipCountry":"RU","ShipAddress":"35 Wayridge Alley","ShipName":"Ledner, Rosenbaum and Kreiger","OrderDate":"11/14/2016","TotalPayment":"$849166.46","Status":3,"Type":3},{"OrderID":"55312-053","ShipCountry":"CN","ShipAddress":"00 Bartillon Road","ShipName":"Spencer LLC","OrderDate":"11/15/2017","TotalPayment":"$360062.76","Status":2,"Type":2},{"OrderID":"51060-052","ShipCountry":"CN","ShipAddress":"753 Lillian Drive","ShipName":"Kautzer-Murphy","OrderDate":"3/27/2017","TotalPayment":"$176638.86","Status":2,"Type":2},{"OrderID":"0245-0014","ShipCountry":"HT","ShipAddress":"401 Oak Crossing","ShipName":"Durgan LLC","OrderDate":"7/11/2017","TotalPayment":"$301693.94","Status":1,"Type":1},{"OrderID":"59762-0811","ShipCountry":"GR","ShipAddress":"0209 Menomonie Circle","ShipName":"Pouros Inc","OrderDate":"12/9/2016","TotalPayment":"$977827.86","Status":3,"Type":1}]},\n' +
        '{"RecordID":24,"FirstName":"Claudette","LastName":"Warmisham","Company":"Babbleset","Email":"cwarmishamn@over-blog.com","Phone":"762-180-1606","Status":6,"Type":3,"Orders":[{"OrderID":"60681-1001","ShipCountry":"ID","ShipAddress":"59125 Longview Place","ShipName":"Runolfsson Group","OrderDate":"9/19/2016","TotalPayment":"$766887.24","Status":5,"Type":2},{"OrderID":"62011-0100","ShipCountry":"BR","ShipAddress":"313 Porter Point","ShipName":"Okuneva, Cremin and Schumm","OrderDate":"11/3/2017","TotalPayment":"$250500.74","Status":5,"Type":2},{"OrderID":"36800-030","ShipCountry":"CF","ShipAddress":"2 Shasta Circle","ShipName":"Wilkinson Inc","OrderDate":"8/12/2017","TotalPayment":"$87063.24","Status":6,"Type":1},{"OrderID":"50014-100","ShipCountry":"UA","ShipAddress":"86 Granby Terrace","ShipName":"Bosco-Mosciski","OrderDate":"11/1/2016","TotalPayment":"$1091822.07","Status":4,"Type":2},{"OrderID":"59630-993","ShipCountry":"ID","ShipAddress":"0785 Nevada Place","ShipName":"Stehr-Wisozk","OrderDate":"6/30/2016","TotalPayment":"$887185.07","Status":1,"Type":1},{"OrderID":"72036-720","ShipCountry":"FR","ShipAddress":"36797 Cottonwood Point","ShipName":"Hegmann LLC","OrderDate":"10/6/2016","TotalPayment":"$385042.54","Status":2,"Type":3},{"OrderID":"0603-3162","ShipCountry":"AR","ShipAddress":"38 Utah Way","ShipName":"Hintz LLC","OrderDate":"2/16/2016","TotalPayment":"$743289.41","Status":2,"Type":1},{"OrderID":"55154-5074","ShipCountry":"BR","ShipAddress":"96306 Bultman Hill","ShipName":"Moore-Yundt","OrderDate":"11/25/2017","TotalPayment":"$767884.55","Status":3,"Type":3},{"OrderID":"55154-2388","ShipCountry":"CU","ShipAddress":"01365 Brickson Park Terrace","ShipName":"Ward, Marquardt and Schimmel","OrderDate":"8/16/2017","TotalPayment":"$581799.78","Status":1,"Type":2},{"OrderID":"63776-694","ShipCountry":"DK","ShipAddress":"01967 Cherokee Court","ShipName":"Stehr-Keeling","OrderDate":"3/3/2017","TotalPayment":"$910431.75","Status":5,"Type":2},{"OrderID":"65954-770","ShipCountry":"FR","ShipAddress":"692 Chinook Crossing","ShipName":"Lebsack, Yost and Little","OrderDate":"4/11/2017","TotalPayment":"$516514.31","Status":2,"Type":2},{"OrderID":"49035-454","ShipCountry":"FR","ShipAddress":"19777 7th Road","ShipName":"Collier, Jacobi and Botsford","OrderDate":"4/13/2016","TotalPayment":"$873455.68","Status":6,"Type":3},{"OrderID":"29500-9711","ShipCountry":"KP","ShipAddress":"540 Pepper Wood Circle","ShipName":"Halvorson, Miller and Block","OrderDate":"3/23/2016","TotalPayment":"$280279.42","Status":1,"Type":1},{"OrderID":"0115-1245","ShipCountry":"ID","ShipAddress":"5921 Shelley Trail","ShipName":"Hackett-Hilpert","OrderDate":"7/10/2017","TotalPayment":"$535967.95","Status":2,"Type":2},{"OrderID":"54868-5499","ShipCountry":"CN","ShipAddress":"4625 Fremont Court","ShipName":"Blanda-Leannon","OrderDate":"8/2/2017","TotalPayment":"$89560.17","Status":6,"Type":1},{"OrderID":"35356-754","ShipCountry":"GT","ShipAddress":"7654 Killdeer Alley","ShipName":"Fahey, Greenfelder and Jacobson","OrderDate":"11/2/2017","TotalPayment":"$100090.40","Status":5,"Type":3}]},\n' +
        '{"RecordID":25,"FirstName":"Dalia","LastName":"Smitton","Company":"Dynabox","Email":"dsmittono@sohu.com","Phone":"787-788-1737","Status":5,"Type":1,"Orders":[{"OrderID":"64762-874","ShipCountry":"SV","ShipAddress":"134 Lillian Lane","ShipName":"Ankunding, Kunze and Hoppe","OrderDate":"2/10/2017","TotalPayment":"$441824.95","Status":4,"Type":2},{"OrderID":"50964-100","ShipCountry":"ID","ShipAddress":"70 Grim Circle","ShipName":"Runolfsson, Considine and Kshlerin","OrderDate":"1/1/2016","TotalPayment":"$528602.82","Status":1,"Type":2},{"OrderID":"60512-8033","ShipCountry":"BR","ShipAddress":"4561 Hoffman Avenue","ShipName":"Barrows-Reichel","OrderDate":"6/20/2017","TotalPayment":"$883125.66","Status":3,"Type":3},{"OrderID":"49348-527","ShipCountry":"YE","ShipAddress":"6 Cascade Pass","ShipName":"Feil-Bernier","OrderDate":"11/26/2016","TotalPayment":"$394440.43","Status":3,"Type":1},{"OrderID":"0135-0136","ShipCountry":"IE","ShipAddress":"02409 Nelson Street","ShipName":"Osinski, Kreiger and Strosin","OrderDate":"2/12/2016","TotalPayment":"$892613.88","Status":4,"Type":2},{"OrderID":"50685-006","ShipCountry":"CN","ShipAddress":"98 Jackson Way","ShipName":"Krajcik-Goyette","OrderDate":"8/4/2017","TotalPayment":"$968152.25","Status":2,"Type":1},{"OrderID":"0093-4444","ShipCountry":"PK","ShipAddress":"931 Trailsway Court","ShipName":"Brown, Kris and Lockman","OrderDate":"8/25/2017","TotalPayment":"$595249.08","Status":5,"Type":3},{"OrderID":"0363-9030","ShipCountry":"SE","ShipAddress":"86613 Hayes Alley","ShipName":"Breitenberg-Ledner","OrderDate":"8/10/2016","TotalPayment":"$1113571.26","Status":2,"Type":1},{"OrderID":"65044-2855","ShipCountry":"CN","ShipAddress":"90286 Clove Parkway","ShipName":"Will-Howell","OrderDate":"2/16/2016","TotalPayment":"$1140836.17","Status":5,"Type":1},{"OrderID":"0268-6316","ShipCountry":"PT","ShipAddress":"84 Kinsman Point","ShipName":"Lowe-Bernhard","OrderDate":"5/30/2016","TotalPayment":"$1079786.05","Status":1,"Type":1},{"OrderID":"59779-375","ShipCountry":"PH","ShipAddress":"186 Moose Road","ShipName":"Goyette-Donnelly","OrderDate":"3/20/2016","TotalPayment":"$687723.83","Status":5,"Type":3},{"OrderID":"76420-482","ShipCountry":"PH","ShipAddress":"42 Carpenter Plaza","ShipName":"Stamm-Nolan","OrderDate":"7/1/2017","TotalPayment":"$309255.05","Status":6,"Type":2},{"OrderID":"61715-093","ShipCountry":"NI","ShipAddress":"01836 Golden Leaf Way","ShipName":"Welch, Schmitt and Flatley","OrderDate":"10/22/2017","TotalPayment":"$480961.06","Status":2,"Type":1}]},\n' +
        '{"RecordID":26,"FirstName":"Amara","LastName":"Livett","Company":"Tambee","Email":"alivettp@acquirethisname.com","Phone":"738-721-3662","Status":6,"Type":3,"Orders":[{"OrderID":"62756-543","ShipCountry":"CN","ShipAddress":"7851 Ramsey Park","ShipName":"O\'Connell, MacGyver and Boyer","OrderDate":"1/1/2017","TotalPayment":"$637633.93","Status":1,"Type":2},{"OrderID":"10742-1567","ShipCountry":"IE","ShipAddress":"5616 Springs Junction","ShipName":"Funk, Bernier and Stark","OrderDate":"10/29/2017","TotalPayment":"$49512.18","Status":6,"Type":1},{"OrderID":"50051-0010","ShipCountry":"FR","ShipAddress":"7997 Warrior Center","ShipName":"Rosenbaum-Braun","OrderDate":"11/5/2017","TotalPayment":"$390657.00","Status":2,"Type":1},{"OrderID":"65044-6513","ShipCountry":"CN","ShipAddress":"283 Sullivan Drive","ShipName":"Willms, Batz and Gleason","OrderDate":"4/22/2016","TotalPayment":"$534376.39","Status":3,"Type":2},{"OrderID":"65044-2862","ShipCountry":"AR","ShipAddress":"32877 Kipling Alley","ShipName":"Quitzon, Harber and Nitzsche","OrderDate":"3/30/2017","TotalPayment":"$775956.38","Status":1,"Type":3},{"OrderID":"53113-557","ShipCountry":"PE","ShipAddress":"3178 Di Loreto Place","ShipName":"Schneider, Boyer and Feil","OrderDate":"6/24/2017","TotalPayment":"$1042514.12","Status":6,"Type":2},{"OrderID":"53217-009","ShipCountry":"VN","ShipAddress":"0 Mayfield Junction","ShipName":"Hoppe, Goyette and Hagenes","OrderDate":"7/28/2017","TotalPayment":"$41944.00","Status":4,"Type":1},{"OrderID":"55312-588","ShipCountry":"ID","ShipAddress":"236 Vidon Parkway","ShipName":"Heathcote-Powlowski","OrderDate":"3/26/2017","TotalPayment":"$495197.89","Status":6,"Type":2},{"OrderID":"50988-454","ShipCountry":"GR","ShipAddress":"6 Jenna Park","ShipName":"Reichert-Nolan","OrderDate":"11/17/2016","TotalPayment":"$134992.56","Status":5,"Type":3},{"OrderID":"59779-812","ShipCountry":"ID","ShipAddress":"36203 Talisman Parkway","ShipName":"Miller Inc","OrderDate":"5/3/2017","TotalPayment":"$1017603.90","Status":2,"Type":2},{"OrderID":"0574-0118","ShipCountry":"PL","ShipAddress":"5374 Myrtle Center","ShipName":"Schmeler, Howell and Luettgen","OrderDate":"2/19/2017","TotalPayment":"$943709.39","Status":2,"Type":3},{"OrderID":"10742-1538","ShipCountry":"MU","ShipAddress":"9 Fieldstone Pass","ShipName":"Tromp-Altenwerth","OrderDate":"9/4/2017","TotalPayment":"$396688.33","Status":1,"Type":3},{"OrderID":"76329-3012","ShipCountry":"ID","ShipAddress":"24 Luster Pass","ShipName":"Daniel, Zboncak and Bergstrom","OrderDate":"3/22/2016","TotalPayment":"$839859.79","Status":5,"Type":2},{"OrderID":"10812-198","ShipCountry":"CN","ShipAddress":"175 Springview Avenue","ShipName":"Hickle-Jast","OrderDate":"5/31/2017","TotalPayment":"$1066695.07","Status":5,"Type":2},{"OrderID":"57664-502","ShipCountry":"JP","ShipAddress":"20281 Brickson Park Park","ShipName":"Flatley Inc","OrderDate":"9/16/2016","TotalPayment":"$63615.82","Status":3,"Type":3},{"OrderID":"64117-181","ShipCountry":"CN","ShipAddress":"34 Chinook Parkway","ShipName":"Block, Hamill and Kulas","OrderDate":"5/7/2017","TotalPayment":"$469520.18","Status":2,"Type":3},{"OrderID":"0603-5439","ShipCountry":"SI","ShipAddress":"670 New Castle Plaza","ShipName":"Gerlach and Sons","OrderDate":"6/24/2016","TotalPayment":"$303449.81","Status":4,"Type":3},{"OrderID":"76045-103","ShipCountry":"ID","ShipAddress":"34970 Cody Place","ShipName":"Braun and Sons","OrderDate":"1/26/2016","TotalPayment":"$329380.58","Status":6,"Type":1},{"OrderID":"52891-104","ShipCountry":"CN","ShipAddress":"244 Ramsey Pass","ShipName":"Kulas-Quitzon","OrderDate":"7/14/2017","TotalPayment":"$54868.44","Status":4,"Type":3}]},\n' +
        '{"RecordID":27,"FirstName":"Lucky","LastName":"Pendlebury","Company":"Flashdog","Email":"lpendleburyq@gravatar.com","Phone":"360-362-9735","Status":4,"Type":3,"Orders":[{"OrderID":"35356-948","ShipCountry":"BR","ShipAddress":"5075 Golf View Plaza","ShipName":"Jakubowski, Nikolaus and Little","OrderDate":"7/5/2017","TotalPayment":"$674147.25","Status":3,"Type":1},{"OrderID":"63323-398","ShipCountry":"GB","ShipAddress":"74 Shopko Terrace","ShipName":"Schimmel LLC","OrderDate":"2/15/2016","TotalPayment":"$475506.35","Status":1,"Type":1},{"OrderID":"25021-501","ShipCountry":"MY","ShipAddress":"461 Hoard Crossing","ShipName":"Bashirian, Wilkinson and Gottlieb","OrderDate":"7/31/2016","TotalPayment":"$79868.33","Status":5,"Type":1},{"OrderID":"68788-9182","ShipCountry":"CN","ShipAddress":"9773 Waubesa Drive","ShipName":"Feeney-Kub","OrderDate":"11/1/2017","TotalPayment":"$81480.05","Status":3,"Type":3},{"OrderID":"63941-525","ShipCountry":"BY","ShipAddress":"17 Birchwood Parkway","ShipName":"Zulauf-Ankunding","OrderDate":"5/13/2017","TotalPayment":"$939205.77","Status":5,"Type":2},{"OrderID":"49702-207","ShipCountry":"ID","ShipAddress":"095 Delladonna Center","ShipName":"Zboncak, Klein and Moen","OrderDate":"11/10/2017","TotalPayment":"$222069.03","Status":3,"Type":1}]},\n' +
        '{"RecordID":28,"FirstName":"Aidan","LastName":"Bonsall","Company":"Jayo","Email":"abonsallr@ycombinator.com","Phone":"691-647-3894","Status":3,"Type":1,"Orders":[{"OrderID":"54092-515","ShipCountry":"IE","ShipAddress":"1810 Golden Leaf Court","ShipName":"Lindgren Group","OrderDate":"9/2/2016","TotalPayment":"$1155450.50","Status":3,"Type":1},{"OrderID":"57520-0938","ShipCountry":"BR","ShipAddress":"6687 Harbort Plaza","ShipName":"Erdman-McGlynn","OrderDate":"4/28/2017","TotalPayment":"$711798.08","Status":4,"Type":3},{"OrderID":"61995-2390","ShipCountry":"ID","ShipAddress":"899 Clemons Alley","ShipName":"Prosacco-Bailey","OrderDate":"8/24/2016","TotalPayment":"$170894.15","Status":5,"Type":1},{"OrderID":"75857-1001","ShipCountry":"PL","ShipAddress":"5 Del Mar Alley","ShipName":"Anderson-Effertz","OrderDate":"12/8/2017","TotalPayment":"$440996.85","Status":5,"Type":3},{"OrderID":"42549-613","ShipCountry":"SV","ShipAddress":"891 Truax Pass","ShipName":"Ratke, Glover and Davis","OrderDate":"10/30/2016","TotalPayment":"$985272.60","Status":1,"Type":1}]},\n' +
        '{"RecordID":29,"FirstName":"Dolores","LastName":"Dabs","Company":"Dabvine","Email":"ddabss@xing.com","Phone":"608-905-5454","Status":1,"Type":3,"Orders":[{"OrderID":"0019-1177","ShipCountry":"ID","ShipAddress":"4682 Brentwood Center","ShipName":"Hermiston, McCullough and Durgan","OrderDate":"10/17/2016","TotalPayment":"$417957.95","Status":1,"Type":1},{"OrderID":"0268-0130","ShipCountry":"GR","ShipAddress":"337 Forster Hill","ShipName":"Turcotte-Walker","OrderDate":"7/24/2017","TotalPayment":"$97200.49","Status":5,"Type":2},{"OrderID":"11523-7237","ShipCountry":"AR","ShipAddress":"2 Alpine Parkway","ShipName":"Kuhn, Skiles and Jakubowski","OrderDate":"4/18/2016","TotalPayment":"$689237.51","Status":1,"Type":3},{"OrderID":"36987-2537","ShipCountry":"MA","ShipAddress":"3 Banding Trail","ShipName":"Cole-Denesik","OrderDate":"1/3/2017","TotalPayment":"$871155.51","Status":2,"Type":1},{"OrderID":"0781-6141","ShipCountry":"ID","ShipAddress":"17 Bellgrove Park","ShipName":"Deckow-Feest","OrderDate":"12/15/2016","TotalPayment":"$280265.77","Status":5,"Type":2},{"OrderID":"68180-185","ShipCountry":"PY","ShipAddress":"69963 Pleasure Plaza","ShipName":"Halvorson-Kunde","OrderDate":"6/16/2017","TotalPayment":"$986175.37","Status":5,"Type":3},{"OrderID":"52686-230","ShipCountry":"PE","ShipAddress":"3 Walton Place","ShipName":"Windler LLC","OrderDate":"2/4/2017","TotalPayment":"$1072678.60","Status":1,"Type":1},{"OrderID":"37000-761","ShipCountry":"EG","ShipAddress":"0996 Merchant Crossing","ShipName":"Towne and Sons","OrderDate":"7/22/2016","TotalPayment":"$117592.52","Status":5,"Type":2},{"OrderID":"60691-116","ShipCountry":"CN","ShipAddress":"5072 Welch Pass","ShipName":"Weber-Prosacco","OrderDate":"6/3/2017","TotalPayment":"$670103.20","Status":3,"Type":2}]},\n' +
        '{"RecordID":30,"FirstName":"Page","LastName":"Ethridge","Company":"Zoonoodle","Email":"pethridget@biblegateway.com","Phone":"535-144-7585","Status":6,"Type":2,"Orders":[{"OrderID":"55312-468","ShipCountry":"RU","ShipAddress":"3774 Golden Leaf Parkway","ShipName":"Kihn, Kuhic and Braun","OrderDate":"1/18/2017","TotalPayment":"$218591.20","Status":4,"Type":1},{"OrderID":"21130-439","ShipCountry":"CM","ShipAddress":"793 Oakridge Parkway","ShipName":"Hoppe Group","OrderDate":"6/19/2016","TotalPayment":"$815754.18","Status":3,"Type":3},{"OrderID":"41520-112","ShipCountry":"SY","ShipAddress":"3 Continental Trail","ShipName":"Bogisich Group","OrderDate":"7/21/2016","TotalPayment":"$695252.50","Status":6,"Type":2},{"OrderID":"59535-3301","ShipCountry":"HN","ShipAddress":"21 John Wall Center","ShipName":"Rutherford Inc","OrderDate":"1/1/2017","TotalPayment":"$653041.23","Status":5,"Type":3},{"OrderID":"42227-081","ShipCountry":"CZ","ShipAddress":"8 Ramsey Center","ShipName":"MacGyver, Bogan and Bashirian","OrderDate":"7/5/2016","TotalPayment":"$159205.76","Status":4,"Type":3},{"OrderID":"33261-142","ShipCountry":"CN","ShipAddress":"2 Fordem Point","ShipName":"Fay, Nader and Mayer","OrderDate":"5/9/2017","TotalPayment":"$402665.55","Status":2,"Type":3},{"OrderID":"17478-122","ShipCountry":"PT","ShipAddress":"9125 Kenwood Crossing","ShipName":"Kozey-Mitchell","OrderDate":"9/20/2016","TotalPayment":"$385255.13","Status":6,"Type":1},{"OrderID":"49035-066","ShipCountry":"FR","ShipAddress":"547 Jackson Point","ShipName":"Legros-Lemke","OrderDate":"4/5/2017","TotalPayment":"$916118.34","Status":5,"Type":3},{"OrderID":"0378-0344","ShipCountry":"CN","ShipAddress":"9 Mallard Lane","ShipName":"Collins-Deckow","OrderDate":"1/2/2016","TotalPayment":"$992891.41","Status":6,"Type":3},{"OrderID":"51523-034","ShipCountry":"US","ShipAddress":"02 8th Center","ShipName":"Schimmel-Lueilwitz","OrderDate":"7/11/2017","TotalPayment":"$922442.63","Status":5,"Type":2},{"OrderID":"67046-477","ShipCountry":"AL","ShipAddress":"71 Continental Drive","ShipName":"Wolff-Fisher","OrderDate":"3/23/2017","TotalPayment":"$875333.65","Status":3,"Type":3},{"OrderID":"60429-300","ShipCountry":"CN","ShipAddress":"02 Merry Park","ShipName":"Fadel Inc","OrderDate":"12/15/2017","TotalPayment":"$170451.35","Status":6,"Type":3},{"OrderID":"65841-673","ShipCountry":"CN","ShipAddress":"6 Waubesa Pass","ShipName":"Barrows Inc","OrderDate":"5/5/2016","TotalPayment":"$997586.75","Status":4,"Type":2},{"OrderID":"58892-336","ShipCountry":"GR","ShipAddress":"83673 Thompson Street","ShipName":"Schowalter-Toy","OrderDate":"6/17/2016","TotalPayment":"$1115920.56","Status":2,"Type":2}]},\n' +
        '{"RecordID":31,"FirstName":"Codie","LastName":"Martusewicz","Company":"Avavee","Email":"cmartusewiczu@soup.io","Phone":"824-564-5918","Status":1,"Type":2,"Orders":[{"OrderID":"51079-294","ShipCountry":"PH","ShipAddress":"93 Hoard Crossing","ShipName":"Gleason Group","OrderDate":"2/20/2017","TotalPayment":"$1082321.51","Status":4,"Type":3},{"OrderID":"21130-199","ShipCountry":"HN","ShipAddress":"1 Gerald Junction","ShipName":"Labadie LLC","OrderDate":"1/10/2017","TotalPayment":"$59374.44","Status":1,"Type":3},{"OrderID":"48951-5032","ShipCountry":"NZ","ShipAddress":"150 Arizona Center","ShipName":"Heaney and Sons","OrderDate":"12/20/2017","TotalPayment":"$802593.16","Status":4,"Type":1},{"OrderID":"0597-0286","ShipCountry":"ID","ShipAddress":"100 Bellgrove Crossing","ShipName":"Kulas and Sons","OrderDate":"8/21/2017","TotalPayment":"$169613.88","Status":1,"Type":3},{"OrderID":"60505-3807","ShipCountry":"PL","ShipAddress":"63 Garrison Circle","ShipName":"Dickens LLC","OrderDate":"1/5/2016","TotalPayment":"$194662.61","Status":5,"Type":2},{"OrderID":"35356-570","ShipCountry":"CN","ShipAddress":"362 Eggendart Lane","ShipName":"Hills, Medhurst and Borer","OrderDate":"10/12/2016","TotalPayment":"$1150726.41","Status":1,"Type":1},{"OrderID":"42924-001","ShipCountry":"MT","ShipAddress":"36150 Evergreen Park","ShipName":"Zboncak-Kiehn","OrderDate":"2/14/2016","TotalPayment":"$1078465.02","Status":5,"Type":3},{"OrderID":"0178-0891","ShipCountry":"CO","ShipAddress":"3696 Sundown Lane","ShipName":"Considine, Hand and Auer","OrderDate":"3/31/2016","TotalPayment":"$1040290.68","Status":2,"Type":3},{"OrderID":"60429-765","ShipCountry":"BR","ShipAddress":"5 Chive Drive","ShipName":"Will Inc","OrderDate":"2/2/2017","TotalPayment":"$130815.95","Status":5,"Type":2},{"OrderID":"63833-616","ShipCountry":"MX","ShipAddress":"65 Waxwing Street","ShipName":"Marvin, Johns and Mosciski","OrderDate":"3/21/2016","TotalPayment":"$948358.82","Status":4,"Type":2},{"OrderID":"0185-0325","ShipCountry":"CN","ShipAddress":"582 Calypso Place","ShipName":"Hyatt LLC","OrderDate":"5/26/2016","TotalPayment":"$570088.03","Status":4,"Type":3},{"OrderID":"63323-127","ShipCountry":"PH","ShipAddress":"9 Maywood Plaza","ShipName":"Morar and Sons","OrderDate":"11/7/2016","TotalPayment":"$340195.83","Status":3,"Type":3},{"OrderID":"13537-217","ShipCountry":"UA","ShipAddress":"0 Pierstorff Street","ShipName":"Keeling and Sons","OrderDate":"7/28/2017","TotalPayment":"$373640.81","Status":4,"Type":1},{"OrderID":"0409-7075","ShipCountry":"UG","ShipAddress":"4767 High Crossing Pass","ShipName":"Pfannerstill, Lubowitz and Robel","OrderDate":"8/18/2016","TotalPayment":"$510518.43","Status":3,"Type":1},{"OrderID":"63323-379","ShipCountry":"IE","ShipAddress":"2613 Anhalt Way","ShipName":"Hansen, Howell and Durgan","OrderDate":"7/15/2016","TotalPayment":"$100254.95","Status":5,"Type":3},{"OrderID":"64525-0562","ShipCountry":"SY","ShipAddress":"770 Thackeray Junction","ShipName":"Renner-Keebler","OrderDate":"9/11/2017","TotalPayment":"$999829.02","Status":3,"Type":3},{"OrderID":"0603-5770","ShipCountry":"RU","ShipAddress":"23407 Lighthouse Bay Center","ShipName":"Stokes-Durgan","OrderDate":"7/12/2017","TotalPayment":"$550153.43","Status":2,"Type":2}]},\n' +
        '{"RecordID":32,"FirstName":"Goldina","LastName":"Houltham","Company":"Rooxo","Email":"ghoulthamv@chron.com","Phone":"285-375-1139","Status":5,"Type":3,"Orders":[{"OrderID":"0143-2424","ShipCountry":"RU","ShipAddress":"61 Hoepker Place","ShipName":"Weissnat-Schiller","OrderDate":"11/26/2016","TotalPayment":"$1149558.15","Status":5,"Type":3},{"OrderID":"65862-619","ShipCountry":"PH","ShipAddress":"46405 Clarendon Circle","ShipName":"Rogahn-Jaskolski","OrderDate":"1/3/2017","TotalPayment":"$1082455.50","Status":3,"Type":3},{"OrderID":"0597-0191","ShipCountry":"PH","ShipAddress":"14090 Corben Avenue","ShipName":"Fisher, Casper and Will","OrderDate":"5/3/2016","TotalPayment":"$1021605.17","Status":4,"Type":1},{"OrderID":"49349-519","ShipCountry":"PE","ShipAddress":"05 Kings Center","ShipName":"Hintz, Hamill and Lindgren","OrderDate":"9/21/2016","TotalPayment":"$64126.33","Status":4,"Type":3},{"OrderID":"57955-5071","ShipCountry":"RU","ShipAddress":"1898 Ronald Regan Parkway","ShipName":"Wilderman, Renner and Pagac","OrderDate":"4/17/2016","TotalPayment":"$978612.20","Status":5,"Type":2},{"OrderID":"55648-635","ShipCountry":"CN","ShipAddress":"3 Ramsey Parkway","ShipName":"Mitchell, Beer and Rowe","OrderDate":"8/31/2017","TotalPayment":"$84201.59","Status":5,"Type":2},{"OrderID":"41167-0040","ShipCountry":"HR","ShipAddress":"8 La Follette Terrace","ShipName":"McClure, Effertz and Hamill","OrderDate":"11/24/2017","TotalPayment":"$940416.17","Status":5,"Type":3},{"OrderID":"50436-4604","ShipCountry":"AF","ShipAddress":"27 Claremont Avenue","ShipName":"Rau, Murphy and Bradtke","OrderDate":"5/6/2016","TotalPayment":"$932412.96","Status":4,"Type":1},{"OrderID":"68196-115","ShipCountry":"HN","ShipAddress":"0 Southridge Drive","ShipName":"Hoppe, Harvey and Kihn","OrderDate":"5/1/2017","TotalPayment":"$221770.47","Status":3,"Type":3},{"OrderID":"59746-127","ShipCountry":"PH","ShipAddress":"46491 Lerdahl Alley","ShipName":"Lang, Larson and Schumm","OrderDate":"2/24/2016","TotalPayment":"$996454.79","Status":1,"Type":1},{"OrderID":"0615-7507","ShipCountry":"ID","ShipAddress":"3 Saint Paul Drive","ShipName":"Fadel-Corkery","OrderDate":"11/23/2016","TotalPayment":"$173926.73","Status":4,"Type":3}]},\n' +
        '{"RecordID":33,"FirstName":"Rosalind","LastName":"Denerley","Company":"Skidoo","Email":"rdenerleyw@xing.com","Phone":"356-957-2661","Status":6,"Type":1,"Orders":[{"OrderID":"0527-1375","ShipCountry":"CN","ShipAddress":"6019 Union Alley","ShipName":"Zieme-Schimmel","OrderDate":"6/28/2016","TotalPayment":"$64016.90","Status":4,"Type":2},{"OrderID":"60432-126","ShipCountry":"TH","ShipAddress":"66 Amoth Trail","ShipName":"Dickinson-Cremin","OrderDate":"5/25/2017","TotalPayment":"$691416.33","Status":3,"Type":1},{"OrderID":"0113-0335","ShipCountry":"CN","ShipAddress":"555 Londonderry Street","ShipName":"O\'Connell Group","OrderDate":"4/14/2017","TotalPayment":"$551411.79","Status":2,"Type":3},{"OrderID":"45802-840","ShipCountry":"MX","ShipAddress":"9285 Arapahoe Lane","ShipName":"Mann-Kautzer","OrderDate":"1/26/2017","TotalPayment":"$453296.70","Status":2,"Type":1},{"OrderID":"54868-5268","ShipCountry":"ID","ShipAddress":"71136 Ruskin Center","ShipName":"Carter-Collins","OrderDate":"5/30/2016","TotalPayment":"$794042.64","Status":5,"Type":1},{"OrderID":"41167-0675","ShipCountry":"PH","ShipAddress":"18 Bartillon Park","ShipName":"Macejkovic, Ziemann and Lowe","OrderDate":"7/12/2017","TotalPayment":"$800530.44","Status":2,"Type":3},{"OrderID":"76237-246","ShipCountry":"BR","ShipAddress":"885 Nobel Plaza","ShipName":"Wintheiser, Turcotte and Altenwerth","OrderDate":"9/29/2017","TotalPayment":"$214393.89","Status":1,"Type":2},{"OrderID":"13630-0012","ShipCountry":"CL","ShipAddress":"84330 Steensland Junction","ShipName":"Streich Inc","OrderDate":"10/13/2016","TotalPayment":"$517036.83","Status":1,"Type":2},{"OrderID":"35813-374","ShipCountry":"ID","ShipAddress":"3 School Pass","ShipName":"Huel Inc","OrderDate":"1/12/2017","TotalPayment":"$179662.13","Status":5,"Type":3},{"OrderID":"21695-741","ShipCountry":"SE","ShipAddress":"8 Hovde Hill","ShipName":"Bosco, Ratke and Lemke","OrderDate":"8/19/2017","TotalPayment":"$860068.75","Status":1,"Type":1},{"OrderID":"68400-358","ShipCountry":"SD","ShipAddress":"26 Reinke Junction","ShipName":"Watsica, Marquardt and O\'Conner","OrderDate":"8/28/2017","TotalPayment":"$824030.40","Status":3,"Type":2},{"OrderID":"43063-522","ShipCountry":"JP","ShipAddress":"1 Monument Hill","ShipName":"Carroll, Nitzsche and Cronin","OrderDate":"11/16/2016","TotalPayment":"$494506.55","Status":4,"Type":3},{"OrderID":"14783-441","ShipCountry":"NG","ShipAddress":"7 Russell Street","ShipName":"Davis Inc","OrderDate":"10/4/2017","TotalPayment":"$1049593.38","Status":3,"Type":2},{"OrderID":"60549-2108","ShipCountry":"CN","ShipAddress":"83 Maple Wood Drive","ShipName":"Russel-McClure","OrderDate":"7/23/2017","TotalPayment":"$1047584.16","Status":3,"Type":1},{"OrderID":"0054-0118","ShipCountry":"LT","ShipAddress":"52595 Morning Plaza","ShipName":"Stroman, Buckridge and Mosciski","OrderDate":"6/9/2016","TotalPayment":"$908316.52","Status":6,"Type":1},{"OrderID":"34645-4025","ShipCountry":"PT","ShipAddress":"5 Rigney Park","ShipName":"Rempel and Sons","OrderDate":"5/22/2017","TotalPayment":"$1004712.01","Status":1,"Type":2},{"OrderID":"0024-5840","ShipCountry":"JP","ShipAddress":"5 Daystar Avenue","ShipName":"Kiehn, Bednar and McGlynn","OrderDate":"12/7/2016","TotalPayment":"$751946.80","Status":6,"Type":1}]},\n' +
        '{"RecordID":34,"FirstName":"Urson","LastName":"Medendorp","Company":"Thoughtbridge","Email":"umedendorpx@gmpg.org","Phone":"262-251-2289","Status":4,"Type":2,"Orders":[{"OrderID":"53808-0394","ShipCountry":"HR","ShipAddress":"492 Warrior Avenue","ShipName":"Kunde-Bashirian","OrderDate":"6/21/2017","TotalPayment":"$595872.62","Status":1,"Type":3},{"OrderID":"59779-529","ShipCountry":"PE","ShipAddress":"0 Nelson Junction","ShipName":"Hayes Inc","OrderDate":"3/7/2016","TotalPayment":"$472874.02","Status":3,"Type":3},{"OrderID":"60512-0016","ShipCountry":"AZ","ShipAddress":"147 Maryland Terrace","ShipName":"Jast-Hettinger","OrderDate":"3/30/2016","TotalPayment":"$454118.42","Status":5,"Type":1},{"OrderID":"36987-2388","ShipCountry":"CN","ShipAddress":"778 Almo Terrace","ShipName":"Quitzon LLC","OrderDate":"3/12/2017","TotalPayment":"$1031362.22","Status":3,"Type":2},{"OrderID":"49288-0463","ShipCountry":"BR","ShipAddress":"992 Buhler Point","ShipName":"Kuhlman-Koepp","OrderDate":"6/19/2016","TotalPayment":"$83031.65","Status":2,"Type":2},{"OrderID":"63187-064","ShipCountry":"ID","ShipAddress":"8858 Heath Plaza","ShipName":"Ratke-Mayert","OrderDate":"2/4/2016","TotalPayment":"$29605.88","Status":4,"Type":2},{"OrderID":"55154-0884","ShipCountry":"RU","ShipAddress":"130 Bonner Court","ShipName":"Schoen-Farrell","OrderDate":"8/15/2017","TotalPayment":"$844867.03","Status":2,"Type":3},{"OrderID":"37000-148","ShipCountry":"RU","ShipAddress":"004 Bunting Drive","ShipName":"Denesik and Sons","OrderDate":"4/5/2016","TotalPayment":"$1038868.30","Status":2,"Type":2},{"OrderID":"68180-196","ShipCountry":"PH","ShipAddress":"17407 Gateway Alley","ShipName":"Ziemann-Runte","OrderDate":"9/16/2016","TotalPayment":"$57899.32","Status":1,"Type":2},{"OrderID":"0615-7641","ShipCountry":"ID","ShipAddress":"647 Mosinee Plaza","ShipName":"Metz LLC","OrderDate":"6/9/2016","TotalPayment":"$819345.62","Status":2,"Type":2},{"OrderID":"24987-435","ShipCountry":"GR","ShipAddress":"5830 Express Center","ShipName":"Osinski Group","OrderDate":"6/14/2017","TotalPayment":"$544925.79","Status":3,"Type":2},{"OrderID":"41190-203","ShipCountry":"PL","ShipAddress":"9476 East Center","ShipName":"Wehner LLC","OrderDate":"10/18/2017","TotalPayment":"$32903.01","Status":5,"Type":1},{"OrderID":"65862-287","ShipCountry":"MX","ShipAddress":"19 Pine View Terrace","ShipName":"Effertz, Jast and Johnston","OrderDate":"9/30/2016","TotalPayment":"$803140.47","Status":2,"Type":3},{"OrderID":"59564-251","ShipCountry":"EE","ShipAddress":"5164 Chinook Junction","ShipName":"Nitzsche-Runolfsdottir","OrderDate":"10/20/2016","TotalPayment":"$541197.47","Status":2,"Type":3},{"OrderID":"65841-763","ShipCountry":"BR","ShipAddress":"8730 Schurz Center","ShipName":"Hudson, Turner and Hartmann","OrderDate":"3/9/2017","TotalPayment":"$926490.96","Status":5,"Type":2},{"OrderID":"65044-1791","ShipCountry":"MU","ShipAddress":"6 Hanson Drive","ShipName":"Grimes Inc","OrderDate":"1/1/2016","TotalPayment":"$28888.89","Status":6,"Type":3},{"OrderID":"0409-3374","ShipCountry":"CZ","ShipAddress":"8797 Blackbird Park","ShipName":"Cremin Group","OrderDate":"10/2/2016","TotalPayment":"$781105.83","Status":6,"Type":2},{"OrderID":"67296-0673","ShipCountry":"CN","ShipAddress":"03 Emmet Point","ShipName":"Hackett Inc","OrderDate":"4/21/2017","TotalPayment":"$959853.95","Status":3,"Type":1},{"OrderID":"68703-080","ShipCountry":"MZ","ShipAddress":"22018 Randy Terrace","ShipName":"Buckridge-Keebler","OrderDate":"2/26/2016","TotalPayment":"$826774.96","Status":1,"Type":1},{"OrderID":"49035-732","ShipCountry":"CN","ShipAddress":"2817 Spenser Hill","ShipName":"Mante-Yundt","OrderDate":"5/8/2017","TotalPayment":"$888048.45","Status":6,"Type":3}]},\n' +
        '{"RecordID":35,"FirstName":"Henderson","LastName":"L\'Episcopio","Company":"Meevee","Email":"hlepiscopioy@weebly.com","Phone":"973-729-6584","Status":6,"Type":2,"Orders":[{"OrderID":"43772-0043","ShipCountry":"PL","ShipAddress":"209 Harper Lane","ShipName":"Pouros-Quigley","OrderDate":"6/20/2016","TotalPayment":"$32152.57","Status":3,"Type":2},{"OrderID":"14783-018","ShipCountry":"SD","ShipAddress":"42 Meadow Ridge Crossing","ShipName":"Rempel, Fritsch and Wiegand","OrderDate":"9/30/2016","TotalPayment":"$763902.07","Status":5,"Type":3},{"OrderID":"33342-058","ShipCountry":"BR","ShipAddress":"4047 Almo Terrace","ShipName":"Kemmer-Dach","OrderDate":"3/29/2016","TotalPayment":"$113475.23","Status":2,"Type":1},{"OrderID":"0406-0360","ShipCountry":"ZM","ShipAddress":"0 Charing Cross Alley","ShipName":"Hagenes-Hand","OrderDate":"3/25/2017","TotalPayment":"$819581.17","Status":2,"Type":2},{"OrderID":"52125-526","ShipCountry":"ID","ShipAddress":"31038 Mcguire Point","ShipName":"Altenwerth-Kemmer","OrderDate":"10/7/2016","TotalPayment":"$685401.03","Status":3,"Type":1},{"OrderID":"68828-127","ShipCountry":"UA","ShipAddress":"376 Ridge Oak Place","ShipName":"Douglas LLC","OrderDate":"8/21/2016","TotalPayment":"$806224.79","Status":6,"Type":3},{"OrderID":"13537-068","ShipCountry":"FI","ShipAddress":"29035 Vidon Terrace","ShipName":"Smitham, Macejkovic and Kohler","OrderDate":"10/1/2017","TotalPayment":"$385796.57","Status":4,"Type":3},{"OrderID":"52584-810","ShipCountry":"ID","ShipAddress":"69089 Morningstar Court","ShipName":"Cormier and Sons","OrderDate":"9/16/2016","TotalPayment":"$52052.87","Status":3,"Type":2},{"OrderID":"37000-402","ShipCountry":"CN","ShipAddress":"61 Brickson Park Street","ShipName":"Cummerata, Hoeger and Lynch","OrderDate":"3/25/2017","TotalPayment":"$185200.96","Status":2,"Type":3},{"OrderID":"61995-0758","ShipCountry":"RU","ShipAddress":"6640 Di Loreto Pass","ShipName":"Hegmann, Wilkinson and Barrows","OrderDate":"5/6/2017","TotalPayment":"$1004277.88","Status":6,"Type":2},{"OrderID":"11523-0934","ShipCountry":"RU","ShipAddress":"3850 Delaware Pass","ShipName":"Senger-Wuckert","OrderDate":"1/1/2017","TotalPayment":"$306635.63","Status":6,"Type":2},{"OrderID":"58118-9895","ShipCountry":"SE","ShipAddress":"15 Clove Drive","ShipName":"Abshire Inc","OrderDate":"2/24/2016","TotalPayment":"$486383.83","Status":5,"Type":1},{"OrderID":"63941-299","ShipCountry":"MK","ShipAddress":"25 Jenifer Plaza","ShipName":"Auer Group","OrderDate":"3/13/2017","TotalPayment":"$1059189.62","Status":1,"Type":1},{"OrderID":"48951-8029","ShipCountry":"CN","ShipAddress":"0391 Everett Lane","ShipName":"Ortiz, Dare and Kilback","OrderDate":"2/11/2016","TotalPayment":"$893831.46","Status":1,"Type":2},{"OrderID":"65785-160","ShipCountry":"CN","ShipAddress":"60696 Marcy Plaza","ShipName":"Littel, Abernathy and Welch","OrderDate":"12/12/2017","TotalPayment":"$1079219.05","Status":1,"Type":2},{"OrderID":"0093-5118","ShipCountry":"ID","ShipAddress":"4302 Green Ridge Crossing","ShipName":"Torp Group","OrderDate":"9/30/2017","TotalPayment":"$260832.45","Status":6,"Type":3},{"OrderID":"10158-001","ShipCountry":"KE","ShipAddress":"3287 Talmadge Terrace","ShipName":"Gleason-Wilkinson","OrderDate":"8/17/2016","TotalPayment":"$139911.09","Status":5,"Type":1},{"OrderID":"0135-0522","ShipCountry":"ID","ShipAddress":"3 Sullivan Street","ShipName":"Watsica-Tremblay","OrderDate":"5/6/2016","TotalPayment":"$682951.51","Status":5,"Type":3},{"OrderID":"68001-115","ShipCountry":"CZ","ShipAddress":"3 Surrey Point","ShipName":"Lowe-Anderson","OrderDate":"6/26/2017","TotalPayment":"$688893.09","Status":1,"Type":3}]},\n' +
        '{"RecordID":36,"FirstName":"Barclay","LastName":"Fern","Company":"Demizz","Email":"bfernz@cloudflare.com","Phone":"692-973-4785","Status":6,"Type":3,"Orders":[{"OrderID":"55154-1399","ShipCountry":"RU","ShipAddress":"67 Lillian Pass","ShipName":"Nikolaus-McGlynn","OrderDate":"11/15/2016","TotalPayment":"$752538.83","Status":3,"Type":1},{"OrderID":"42571-103","ShipCountry":"CN","ShipAddress":"35343 Veith Crossing","ShipName":"Wiegand, Abbott and Green","OrderDate":"12/1/2017","TotalPayment":"$1089143.16","Status":5,"Type":2},{"OrderID":"51991-631","ShipCountry":"UA","ShipAddress":"42 Division Road","ShipName":"VonRueden-Harris","OrderDate":"2/13/2017","TotalPayment":"$677628.11","Status":6,"Type":1},{"OrderID":"16714-583","ShipCountry":"GR","ShipAddress":"22 American Ash Park","ShipName":"Gerlach-Bayer","OrderDate":"12/22/2016","TotalPayment":"$302661.75","Status":3,"Type":1},{"OrderID":"49351-018","ShipCountry":"PL","ShipAddress":"52767 Jenifer Parkway","ShipName":"Swift and Sons","OrderDate":"6/25/2016","TotalPayment":"$1124477.50","Status":5,"Type":3},{"OrderID":"54868-2223","ShipCountry":"BR","ShipAddress":"198 Scoville Road","ShipName":"Funk LLC","OrderDate":"11/11/2017","TotalPayment":"$1022352.31","Status":6,"Type":2},{"OrderID":"68180-182","ShipCountry":"ID","ShipAddress":"25765 Northland Alley","ShipName":"McGlynn LLC","OrderDate":"10/14/2017","TotalPayment":"$928775.03","Status":5,"Type":3},{"OrderID":"49035-091","ShipCountry":"ID","ShipAddress":"89 Mitchell Center","ShipName":"Bode, Kshlerin and Mante","OrderDate":"8/30/2016","TotalPayment":"$61556.61","Status":5,"Type":2},{"OrderID":"55045-3602","ShipCountry":"CN","ShipAddress":"211 Dottie Junction","ShipName":"Leffler, Bergnaum and D\'Amore","OrderDate":"1/18/2016","TotalPayment":"$75868.02","Status":2,"Type":2},{"OrderID":"61314-628","ShipCountry":"UA","ShipAddress":"19 Nobel Junction","ShipName":"Rodriguez-Schaefer","OrderDate":"1/8/2016","TotalPayment":"$1102042.50","Status":3,"Type":1},{"OrderID":"10742-8456","ShipCountry":"RU","ShipAddress":"2 Corben Street","ShipName":"Stamm, Stoltenberg and Schuppe","OrderDate":"12/16/2017","TotalPayment":"$632144.68","Status":4,"Type":1},{"OrderID":"40046-0043","ShipCountry":"UY","ShipAddress":"06294 Pierstorff Place","ShipName":"Hudson, Grant and Huels","OrderDate":"3/15/2017","TotalPayment":"$982299.72","Status":3,"Type":3},{"OrderID":"55711-069","ShipCountry":"RU","ShipAddress":"55 Gateway Park","ShipName":"Rowe-Miller","OrderDate":"5/8/2017","TotalPayment":"$683301.38","Status":4,"Type":3},{"OrderID":"36987-2299","ShipCountry":"JP","ShipAddress":"756 Springs Drive","ShipName":"Braun, Gaylord and Aufderhar","OrderDate":"4/17/2017","TotalPayment":"$742007.82","Status":1,"Type":2},{"OrderID":"33992-2360","ShipCountry":"CN","ShipAddress":"39 Fieldstone Junction","ShipName":"Torphy-Harber","OrderDate":"4/9/2016","TotalPayment":"$1105142.07","Status":6,"Type":1},{"OrderID":"65977-5033","ShipCountry":"MG","ShipAddress":"2 Raven Park","ShipName":"Balistreri, Rippin and Quigley","OrderDate":"11/16/2017","TotalPayment":"$153891.34","Status":5,"Type":3}]},\n' +
        '{"RecordID":37,"FirstName":"Samuele","LastName":"Ewdale","Company":"Wordpedia","Email":"sewdale10@plala.or.jp","Phone":"323-311-3835","Status":1,"Type":2,"Orders":[{"OrderID":"43857-0288","ShipCountry":"CN","ShipAddress":"355 Dixon Pass","ShipName":"Howell, Koss and Dietrich","OrderDate":"11/12/2016","TotalPayment":"$969261.35","Status":6,"Type":3},{"OrderID":"55390-163","ShipCountry":"IR","ShipAddress":"492 Bluestem Place","ShipName":"Emmerich and Sons","OrderDate":"8/13/2017","TotalPayment":"$182758.14","Status":1,"Type":2},{"OrderID":"0087-6071","ShipCountry":"US","ShipAddress":"76 La Follette Circle","ShipName":"Willms-Bruen","OrderDate":"11/22/2017","TotalPayment":"$864683.60","Status":5,"Type":2},{"OrderID":"21695-044","ShipCountry":"CA","ShipAddress":"3955 Colorado Plaza","ShipName":"Huels LLC","OrderDate":"11/17/2017","TotalPayment":"$136107.89","Status":6,"Type":3},{"OrderID":"0378-3632","ShipCountry":"GR","ShipAddress":"69784 Golf View Park","ShipName":"Medhurst LLC","OrderDate":"1/31/2017","TotalPayment":"$321838.99","Status":6,"Type":3},{"OrderID":"68001-182","ShipCountry":"CN","ShipAddress":"16 Lakewood Gardens Lane","ShipName":"Rippin, Bruen and Gerhold","OrderDate":"6/24/2017","TotalPayment":"$211092.23","Status":6,"Type":3},{"OrderID":"46123-014","ShipCountry":"KZ","ShipAddress":"84262 Kensington Street","ShipName":"Rippin-Gulgowski","OrderDate":"8/13/2016","TotalPayment":"$766848.55","Status":6,"Type":1},{"OrderID":"52125-012","ShipCountry":"BR","ShipAddress":"596 Rowland Place","ShipName":"Streich-Mraz","OrderDate":"12/21/2016","TotalPayment":"$702098.92","Status":3,"Type":3},{"OrderID":"0054-0544","ShipCountry":"CZ","ShipAddress":"64 Dayton Way","ShipName":"Krajcik-Waelchi","OrderDate":"12/28/2016","TotalPayment":"$726630.53","Status":4,"Type":1},{"OrderID":"64578-0094","ShipCountry":"ID","ShipAddress":"95821 Debs Center","ShipName":"Macejkovic-Sawayn","OrderDate":"10/25/2016","TotalPayment":"$1199043.82","Status":6,"Type":1}]},\n' +
        '{"RecordID":38,"FirstName":"Melonie","LastName":"McCarney","Company":"Shufflebeat","Email":"mmccarney11@edublogs.org","Phone":"631-770-4502","Status":1,"Type":2,"Orders":[{"OrderID":"67544-697","ShipCountry":"TZ","ShipAddress":"5115 Prentice Hill","ShipName":"Koelpin-Dicki","OrderDate":"9/15/2017","TotalPayment":"$398654.43","Status":2,"Type":1},{"OrderID":"59676-101","ShipCountry":"PL","ShipAddress":"76 Tennessee Way","ShipName":"Muller, Torphy and Stokes","OrderDate":"10/27/2016","TotalPayment":"$1099193.30","Status":5,"Type":2},{"OrderID":"68788-9163","ShipCountry":"VN","ShipAddress":"9 Schurz Road","ShipName":"O\'Conner-Hagenes","OrderDate":"2/22/2017","TotalPayment":"$624422.78","Status":1,"Type":1},{"OrderID":"50988-232","ShipCountry":"CK","ShipAddress":"48079 Kingsford Park","ShipName":"Beatty-Adams","OrderDate":"10/21/2017","TotalPayment":"$386294.23","Status":6,"Type":3},{"OrderID":"52125-707","ShipCountry":"CN","ShipAddress":"8 Dawn Crossing","ShipName":"Homenick-Wintheiser","OrderDate":"3/27/2016","TotalPayment":"$995026.46","Status":6,"Type":2}]},\n' +
        '{"RecordID":39,"FirstName":"Kissie","LastName":"Evelyn","Company":"Twiyo","Email":"kevelyn12@canalblog.com","Phone":"311-553-7561","Status":5,"Type":2,"Orders":[{"OrderID":"55289-963","ShipCountry":"CN","ShipAddress":"031 Bashford Way","ShipName":"Mertz, Kozey and Kling","OrderDate":"9/17/2017","TotalPayment":"$475627.03","Status":5,"Type":2},{"OrderID":"64679-105","ShipCountry":"CN","ShipAddress":"27612 Briar Crest Center","ShipName":"Schroeder-Wisozk","OrderDate":"2/11/2016","TotalPayment":"$280942.11","Status":5,"Type":2},{"OrderID":"61715-122","ShipCountry":"ID","ShipAddress":"4 Banding Center","ShipName":"Wolf Group","OrderDate":"4/2/2016","TotalPayment":"$390933.48","Status":2,"Type":1},{"OrderID":"63739-801","ShipCountry":"CN","ShipAddress":"95077 Redwing Alley","ShipName":"Feeney, Emard and Bergnaum","OrderDate":"8/22/2017","TotalPayment":"$968871.16","Status":5,"Type":1},{"OrderID":"59779-806","ShipCountry":"RU","ShipAddress":"943 Garrison Crossing","ShipName":"Hagenes Inc","OrderDate":"3/15/2016","TotalPayment":"$165356.77","Status":1,"Type":1},{"OrderID":"16590-286","ShipCountry":"RU","ShipAddress":"5 Porter Terrace","ShipName":"Abshire-Morar","OrderDate":"7/31/2016","TotalPayment":"$1005759.58","Status":4,"Type":1}]},\n' +
        '{"RecordID":40,"FirstName":"Margret","LastName":"Skarr","Company":"Blognation","Email":"mskarr13@dagondesign.com","Phone":"942-648-8669","Status":3,"Type":1,"Orders":[{"OrderID":"49035-678","ShipCountry":"RU","ShipAddress":"2 Cardinal Park","ShipName":"Bergnaum-Tromp","OrderDate":"7/3/2016","TotalPayment":"$596489.01","Status":3,"Type":3},{"OrderID":"44523-609","ShipCountry":"FR","ShipAddress":"16 Scott Way","ShipName":"Dach-Jones","OrderDate":"1/12/2017","TotalPayment":"$1111810.58","Status":2,"Type":1},{"OrderID":"0517-0101","ShipCountry":"FR","ShipAddress":"2633 Anzinger Court","ShipName":"Moore-Wisozk","OrderDate":"11/9/2016","TotalPayment":"$886320.75","Status":5,"Type":2},{"OrderID":"63629-4355","ShipCountry":"CN","ShipAddress":"714 Oakridge Park","ShipName":"Hammes-Howe","OrderDate":"1/28/2016","TotalPayment":"$475892.16","Status":6,"Type":1},{"OrderID":"54866-003","ShipCountry":"ID","ShipAddress":"5067 Gerald Park","ShipName":"Emard Inc","OrderDate":"5/6/2016","TotalPayment":"$1156916.28","Status":1,"Type":2},{"OrderID":"43353-614","ShipCountry":"MT","ShipAddress":"099 Manufacturers Park","ShipName":"Gutmann, Jaskolski and Terry","OrderDate":"11/23/2017","TotalPayment":"$679301.95","Status":6,"Type":3},{"OrderID":"54569-1218","ShipCountry":"CZ","ShipAddress":"4256 Blaine Avenue","ShipName":"Cremin, Hessel and Gusikowski","OrderDate":"8/28/2016","TotalPayment":"$771630.39","Status":4,"Type":1},{"OrderID":"21695-737","ShipCountry":"PH","ShipAddress":"75739 Ramsey Alley","ShipName":"Larkin-Farrell","OrderDate":"6/13/2017","TotalPayment":"$571486.78","Status":1,"Type":3},{"OrderID":"51079-588","ShipCountry":"CZ","ShipAddress":"2771 Portage Avenue","ShipName":"Corkery Group","OrderDate":"8/27/2016","TotalPayment":"$220458.70","Status":2,"Type":1},{"OrderID":"68210-1902","ShipCountry":"CO","ShipAddress":"5998 Hoepker Hill","ShipName":"O\'Connell and Sons","OrderDate":"11/8/2017","TotalPayment":"$1010159.51","Status":3,"Type":1},{"OrderID":"62914-1000","ShipCountry":"DK","ShipAddress":"1 Barby Crossing","ShipName":"Fahey, Corwin and Shields","OrderDate":"5/26/2016","TotalPayment":"$556641.10","Status":4,"Type":2},{"OrderID":"63667-976","ShipCountry":"KZ","ShipAddress":"247 Hagan Lane","ShipName":"Kertzmann Group","OrderDate":"11/28/2017","TotalPayment":"$239193.74","Status":5,"Type":3},{"OrderID":"0378-3530","ShipCountry":"ID","ShipAddress":"984 Canary Crossing","ShipName":"Cormier Group","OrderDate":"4/22/2017","TotalPayment":"$707338.78","Status":4,"Type":2}]},\n' +
        '{"RecordID":41,"FirstName":"Walden","LastName":"Chese","Company":"Vimbo","Email":"wchese14@technorati.com","Phone":"164-917-9924","Status":3,"Type":3,"Orders":[{"OrderID":"50228-107","ShipCountry":"CN","ShipAddress":"9922 Corscot Park","ShipName":"Pfeffer and Sons","OrderDate":"12/2/2017","TotalPayment":"$751619.40","Status":4,"Type":3},{"OrderID":"55154-7456","ShipCountry":"CN","ShipAddress":"8 Stone Corner Alley","ShipName":"Kiehn-Turner","OrderDate":"3/17/2017","TotalPayment":"$258007.35","Status":6,"Type":3},{"OrderID":"0093-3193","ShipCountry":"CN","ShipAddress":"873 High Crossing Crossing","ShipName":"Schmidt, Gusikowski and Volkman","OrderDate":"1/8/2016","TotalPayment":"$798690.80","Status":1,"Type":3},{"OrderID":"49288-0468","ShipCountry":"CN","ShipAddress":"363 Karstens Hill","ShipName":"Kuphal, Robel and Hane","OrderDate":"4/13/2016","TotalPayment":"$338272.63","Status":5,"Type":3},{"OrderID":"0904-5050","ShipCountry":"CN","ShipAddress":"9803 Green Place","ShipName":"Spencer Group","OrderDate":"5/29/2017","TotalPayment":"$860121.94","Status":4,"Type":3},{"OrderID":"0113-0955","ShipCountry":"SA","ShipAddress":"42 Cambridge Court","ShipName":"Ratke, Gaylord and Kuhlman","OrderDate":"11/26/2017","TotalPayment":"$642703.71","Status":4,"Type":1},{"OrderID":"43269-684","ShipCountry":"ID","ShipAddress":"0 Vidon Center","ShipName":"Boyle, Boehm and Nienow","OrderDate":"3/11/2017","TotalPayment":"$170585.44","Status":3,"Type":3},{"OrderID":"48951-1116","ShipCountry":"JP","ShipAddress":"34966 Blue Bill Park Way","ShipName":"Ziemann-Davis","OrderDate":"1/26/2016","TotalPayment":"$246611.81","Status":5,"Type":3},{"OrderID":"67226-2820","ShipCountry":"CN","ShipAddress":"9481 Bunker Hill Junction","ShipName":"Becker-Cruickshank","OrderDate":"7/13/2016","TotalPayment":"$250093.33","Status":2,"Type":2}]},\n' +
        '{"RecordID":42,"FirstName":"Wilfrid","LastName":"Gameson","Company":"Mycat","Email":"wgameson15@trellian.com","Phone":"928-458-7479","Status":1,"Type":1,"Orders":[{"OrderID":"57520-0615","ShipCountry":"CO","ShipAddress":"52 Erie Avenue","ShipName":"Rice LLC","OrderDate":"11/18/2017","TotalPayment":"$719018.05","Status":6,"Type":2},{"OrderID":"37808-970","ShipCountry":"VN","ShipAddress":"18 Sycamore Junction","ShipName":"Batz Inc","OrderDate":"12/18/2017","TotalPayment":"$262747.46","Status":5,"Type":3},{"OrderID":"64720-141","ShipCountry":"FR","ShipAddress":"45512 Westerfield Circle","ShipName":"Sauer Inc","OrderDate":"10/13/2017","TotalPayment":"$841888.13","Status":1,"Type":2},{"OrderID":"10812-913","ShipCountry":"RU","ShipAddress":"29 Nova Court","ShipName":"Beier and Sons","OrderDate":"8/14/2016","TotalPayment":"$846404.28","Status":5,"Type":2},{"OrderID":"42707-1001","ShipCountry":"BD","ShipAddress":"37525 Roth Avenue","ShipName":"Carroll Inc","OrderDate":"7/28/2017","TotalPayment":"$445332.68","Status":2,"Type":2},{"OrderID":"54868-3267","ShipCountry":"BH","ShipAddress":"16 Barnett Alley","ShipName":"Torp Group","OrderDate":"5/16/2016","TotalPayment":"$778074.64","Status":2,"Type":3},{"OrderID":"55150-116","ShipCountry":"RU","ShipAddress":"34 Mendota Drive","ShipName":"Kshlerin, Koch and Friesen","OrderDate":"8/9/2017","TotalPayment":"$804843.31","Status":3,"Type":3},{"OrderID":"49288-0768","ShipCountry":"BR","ShipAddress":"796 Superior Parkway","ShipName":"Gibson Group","OrderDate":"12/8/2016","TotalPayment":"$872624.76","Status":4,"Type":3},{"OrderID":"24286-1557","ShipCountry":"CN","ShipAddress":"98108 Kim Street","ShipName":"Heaney, Cronin and Witting","OrderDate":"11/20/2017","TotalPayment":"$141214.07","Status":2,"Type":2},{"OrderID":"35356-890","ShipCountry":"ID","ShipAddress":"56 Lien Hill","ShipName":"Mitchell Group","OrderDate":"3/9/2017","TotalPayment":"$1077387.51","Status":5,"Type":2}]},\n' +
        '{"RecordID":43,"FirstName":"Lenora","LastName":"Tremain","Company":"Talane","Email":"ltremain16@multiply.com","Phone":"661-344-3222","Status":2,"Type":1,"Orders":[{"OrderID":"0781-5181","ShipCountry":"ID","ShipAddress":"24 Warner Way","ShipName":"Stark, Langosh and Kerluke","OrderDate":"11/26/2017","TotalPayment":"$457333.38","Status":2,"Type":1},{"OrderID":"36987-1237","ShipCountry":"TH","ShipAddress":"9893 Fairfield Place","ShipName":"Connelly and Sons","OrderDate":"1/9/2016","TotalPayment":"$521519.72","Status":3,"Type":3},{"OrderID":"65841-755","ShipCountry":"ZA","ShipAddress":"1907 Shasta Pass","ShipName":"Stehr-Boyle","OrderDate":"9/7/2016","TotalPayment":"$266053.75","Status":1,"Type":2},{"OrderID":"0363-0462","ShipCountry":"MA","ShipAddress":"0 Spohn Junction","ShipName":"Ullrich, Mante and Willms","OrderDate":"12/21/2016","TotalPayment":"$330258.63","Status":6,"Type":2},{"OrderID":"0363-0871","ShipCountry":"GT","ShipAddress":"5 Schurz Lane","ShipName":"Erdman-Wunsch","OrderDate":"7/14/2017","TotalPayment":"$239149.26","Status":3,"Type":3},{"OrderID":"10122-510","ShipCountry":"ID","ShipAddress":"97119 Springview Terrace","ShipName":"Dach, Daugherty and Howell","OrderDate":"3/6/2016","TotalPayment":"$119613.27","Status":3,"Type":3},{"OrderID":"42377-001","ShipCountry":"RU","ShipAddress":"887 Chinook Avenue","ShipName":"Franecki, Pagac and Schmidt","OrderDate":"3/25/2016","TotalPayment":"$120602.49","Status":5,"Type":1},{"OrderID":"10210-0008","ShipCountry":"PH","ShipAddress":"598 Messerschmidt Way","ShipName":"Heathcote-Haley","OrderDate":"11/10/2016","TotalPayment":"$341362.85","Status":6,"Type":1},{"OrderID":"62864-902","ShipCountry":"PE","ShipAddress":"329 Sunnyside Parkway","ShipName":"Kreiger, Grant and Stark","OrderDate":"7/6/2016","TotalPayment":"$906952.88","Status":6,"Type":2},{"OrderID":"58668-2541","ShipCountry":"GR","ShipAddress":"10193 Rigney Avenue","ShipName":"Fisher Group","OrderDate":"11/21/2017","TotalPayment":"$174111.01","Status":3,"Type":1},{"OrderID":"0268-7000","ShipCountry":"JM","ShipAddress":"7219 Ludington Court","ShipName":"Cassin-Dickinson","OrderDate":"10/12/2017","TotalPayment":"$809990.29","Status":3,"Type":3},{"OrderID":"41268-041","ShipCountry":"ID","ShipAddress":"7573 Kedzie Pass","ShipName":"Brakus-Raynor","OrderDate":"4/28/2016","TotalPayment":"$188810.10","Status":1,"Type":2},{"OrderID":"36987-2883","ShipCountry":"CN","ShipAddress":"3354 Dwight Trail","ShipName":"Kling-Gerhold","OrderDate":"4/14/2017","TotalPayment":"$456085.21","Status":1,"Type":2},{"OrderID":"52125-748","ShipCountry":"PL","ShipAddress":"1 Alpine Street","ShipName":"Thiel-Hamill","OrderDate":"6/20/2017","TotalPayment":"$142366.65","Status":3,"Type":1},{"OrderID":"68258-3012","ShipCountry":"BF","ShipAddress":"55 Cordelia Park","ShipName":"Feest, Pollich and Fritsch","OrderDate":"1/30/2017","TotalPayment":"$86471.29","Status":3,"Type":3},{"OrderID":"63354-316","ShipCountry":"CN","ShipAddress":"15 Valley Edge Center","ShipName":"Williamson Group","OrderDate":"4/10/2017","TotalPayment":"$925246.86","Status":3,"Type":1},{"OrderID":"61722-060","ShipCountry":"MX","ShipAddress":"2 American Ash Hill","ShipName":"Frami Inc","OrderDate":"4/2/2016","TotalPayment":"$804470.91","Status":4,"Type":3}]},\n' +
        '{"RecordID":44,"FirstName":"Earl","LastName":"Thoma","Company":"Wikido","Email":"ethoma17@google.com.hk","Phone":"637-246-5413","Status":6,"Type":3,"Orders":[{"OrderID":"21839-011","ShipCountry":"CN","ShipAddress":"6186 Troy Road","ShipName":"Donnelly and Sons","OrderDate":"8/25/2017","TotalPayment":"$424860.70","Status":3,"Type":3},{"OrderID":"11084-534","ShipCountry":"VN","ShipAddress":"92874 Killdeer Terrace","ShipName":"Hammes, Price and Murazik","OrderDate":"8/25/2017","TotalPayment":"$876134.76","Status":5,"Type":1},{"OrderID":"58411-194","ShipCountry":"AR","ShipAddress":"4225 Hoard Junction","ShipName":"Treutel, Littel and Buckridge","OrderDate":"12/25/2016","TotalPayment":"$49424.17","Status":6,"Type":1},{"OrderID":"55316-177","ShipCountry":"CN","ShipAddress":"478 Fair Oaks Circle","ShipName":"Dickens, Ruecker and Fay","OrderDate":"6/30/2017","TotalPayment":"$1074464.54","Status":5,"Type":1},{"OrderID":"44924-111","ShipCountry":"CN","ShipAddress":"58505 Toban Avenue","ShipName":"Robel and Sons","OrderDate":"10/19/2016","TotalPayment":"$401377.25","Status":2,"Type":1},{"OrderID":"65044-6518","ShipCountry":"ID","ShipAddress":"6371 Dorton Terrace","ShipName":"Donnelly-Kuhic","OrderDate":"8/26/2016","TotalPayment":"$819994.95","Status":4,"Type":3}]},\n' +
        '{"RecordID":45,"FirstName":"Paola","LastName":"Gibling","Company":"DabZ","Email":"pgibling18@spotify.com","Phone":"557-392-7467","Status":6,"Type":3,"Orders":[{"OrderID":"36987-2564","ShipCountry":"CN","ShipAddress":"5001 Harper Street","ShipName":"Keeling Group","OrderDate":"7/6/2017","TotalPayment":"$206368.10","Status":5,"Type":1},{"OrderID":"52125-169","ShipCountry":"EE","ShipAddress":"4 Burrows Street","ShipName":"Huels LLC","OrderDate":"1/11/2016","TotalPayment":"$720624.25","Status":6,"Type":2},{"OrderID":"49281-395","ShipCountry":"CN","ShipAddress":"4 Armistice Circle","ShipName":"Borer-Berge","OrderDate":"2/27/2016","TotalPayment":"$424993.82","Status":4,"Type":2},{"OrderID":"67253-940","ShipCountry":"JP","ShipAddress":"58351 Farragut Hill","ShipName":"Bernhard, Bode and Mayert","OrderDate":"11/10/2017","TotalPayment":"$337747.37","Status":3,"Type":2},{"OrderID":"49999-845","ShipCountry":"RU","ShipAddress":"8 Montana Way","ShipName":"Wolf, Denesik and Waelchi","OrderDate":"6/6/2017","TotalPayment":"$803617.91","Status":5,"Type":1},{"OrderID":"55714-4447","ShipCountry":"CN","ShipAddress":"36 Fuller Crossing","ShipName":"Tillman-Brakus","OrderDate":"7/15/2016","TotalPayment":"$1124857.80","Status":3,"Type":3},{"OrderID":"39822-1001","ShipCountry":"PH","ShipAddress":"85 Moose Way","ShipName":"Orn LLC","OrderDate":"7/1/2016","TotalPayment":"$699686.49","Status":5,"Type":1},{"OrderID":"36987-1390","ShipCountry":"ME","ShipAddress":"61489 Bellgrove Trail","ShipName":"Becker LLC","OrderDate":"10/20/2016","TotalPayment":"$663753.44","Status":1,"Type":2},{"OrderID":"17575-005","ShipCountry":"RU","ShipAddress":"779 Jay Crossing","ShipName":"Heathcote-Homenick","OrderDate":"9/8/2017","TotalPayment":"$438328.73","Status":3,"Type":3},{"OrderID":"42508-255","ShipCountry":"PH","ShipAddress":"5 Macpherson Court","ShipName":"Medhurst Group","OrderDate":"4/3/2016","TotalPayment":"$826521.68","Status":3,"Type":2},{"OrderID":"55312-550","ShipCountry":"IQ","ShipAddress":"8635 Knutson Pass","ShipName":"Erdman and Sons","OrderDate":"12/29/2017","TotalPayment":"$165123.17","Status":5,"Type":1},{"OrderID":"51346-235","ShipCountry":"ID","ShipAddress":"23141 7th Circle","ShipName":"Rolfson LLC","OrderDate":"6/23/2017","TotalPayment":"$132620.49","Status":4,"Type":2},{"OrderID":"30142-425","ShipCountry":"TH","ShipAddress":"917 Comanche Lane","ShipName":"Lakin and Sons","OrderDate":"3/16/2017","TotalPayment":"$99883.02","Status":5,"Type":2},{"OrderID":"51991-526","ShipCountry":"BR","ShipAddress":"70 La Follette Point","ShipName":"Bartell LLC","OrderDate":"10/25/2017","TotalPayment":"$111899.61","Status":3,"Type":1},{"OrderID":"37000-609","ShipCountry":"ID","ShipAddress":"3052 Darwin Crossing","ShipName":"Thiel and Sons","OrderDate":"1/21/2016","TotalPayment":"$539670.97","Status":1,"Type":1}]},\n' +
        '{"RecordID":46,"FirstName":"Ninetta","LastName":"Havvock","Company":"Jabberbean","Email":"nhavvock19@e-recht24.de","Phone":"526-460-3680","Status":5,"Type":2,"Orders":[{"OrderID":"33261-144","ShipCountry":"CN","ShipAddress":"78213 Fuller Park","ShipName":"Sanford-Kutch","OrderDate":"4/11/2016","TotalPayment":"$409098.57","Status":3,"Type":3},{"OrderID":"25225-020","ShipCountry":"BR","ShipAddress":"93795 Bonner Court","ShipName":"Davis-Conroy","OrderDate":"6/27/2016","TotalPayment":"$891701.23","Status":4,"Type":3},{"OrderID":"0378-1054","ShipCountry":"TH","ShipAddress":"2821 Buhler Crossing","ShipName":"Crooks LLC","OrderDate":"1/11/2017","TotalPayment":"$247783.70","Status":6,"Type":1},{"OrderID":"58633-269","ShipCountry":"CN","ShipAddress":"8373 Elmside Crossing","ShipName":"Gorczany LLC","OrderDate":"12/10/2016","TotalPayment":"$812871.73","Status":3,"Type":2},{"OrderID":"10544-079","ShipCountry":"ID","ShipAddress":"805 Bobwhite Way","ShipName":"Franecki-Hills","OrderDate":"10/13/2016","TotalPayment":"$36221.83","Status":5,"Type":1},{"OrderID":"0268-1191","ShipCountry":"MG","ShipAddress":"86 Quincy Plaza","ShipName":"Considine-Jenkins","OrderDate":"5/7/2017","TotalPayment":"$109307.23","Status":6,"Type":1},{"OrderID":"42806-014","ShipCountry":"SE","ShipAddress":"8658 Schurz Parkway","ShipName":"Wintheiser and Sons","OrderDate":"8/15/2016","TotalPayment":"$1019123.78","Status":1,"Type":2},{"OrderID":"49817-0049","ShipCountry":"CN","ShipAddress":"720 Union Terrace","ShipName":"Nikolaus-Shields","OrderDate":"6/3/2016","TotalPayment":"$547806.95","Status":6,"Type":2},{"OrderID":"63304-736","ShipCountry":"BR","ShipAddress":"397 Monterey Parkway","ShipName":"Abshire-Spinka","OrderDate":"6/10/2016","TotalPayment":"$753996.77","Status":2,"Type":1},{"OrderID":"68927-0819","ShipCountry":"GR","ShipAddress":"89155 Farmco Circle","ShipName":"Trantow Group","OrderDate":"2/2/2016","TotalPayment":"$476306.31","Status":2,"Type":1},{"OrderID":"64495-2366","ShipCountry":"AR","ShipAddress":"046 Arizona Lane","ShipName":"Emmerich, Miller and Wuckert","OrderDate":"4/30/2017","TotalPayment":"$408891.07","Status":1,"Type":3},{"OrderID":"56104-008","ShipCountry":"CN","ShipAddress":"9 Sommers Road","ShipName":"Douglas, Walter and Barton","OrderDate":"9/27/2017","TotalPayment":"$699330.78","Status":4,"Type":2},{"OrderID":"54838-115","ShipCountry":"ID","ShipAddress":"4039 Washington Way","ShipName":"Jenkins LLC","OrderDate":"12/5/2017","TotalPayment":"$13689.52","Status":2,"Type":2},{"OrderID":"13537-429","ShipCountry":"US","ShipAddress":"27 Loftsgordon Pass","ShipName":"Hirthe, Botsford and Heidenreich","OrderDate":"2/8/2016","TotalPayment":"$582740.39","Status":3,"Type":1},{"OrderID":"57520-0608","ShipCountry":"PL","ShipAddress":"6578 Macpherson Road","ShipName":"Smith-Pagac","OrderDate":"9/19/2017","TotalPayment":"$126112.66","Status":5,"Type":1},{"OrderID":"63936-8504","ShipCountry":"CD","ShipAddress":"32490 Harbort Road","ShipName":"Bernhard-Kilback","OrderDate":"7/3/2017","TotalPayment":"$772950.81","Status":3,"Type":2},{"OrderID":"54575-299","ShipCountry":"US","ShipAddress":"11 Kenwood Trail","ShipName":"Veum Group","OrderDate":"11/9/2017","TotalPayment":"$989986.95","Status":6,"Type":1},{"OrderID":"58980-811","ShipCountry":"BD","ShipAddress":"1 Morningstar Parkway","ShipName":"Halvorson Group","OrderDate":"7/29/2016","TotalPayment":"$262119.50","Status":6,"Type":1}]},\n' +
        '{"RecordID":47,"FirstName":"Lebbie","LastName":"Winson","Company":"Trupe","Email":"lwinson1a@comcast.net","Phone":"713-500-3935","Status":3,"Type":3,"Orders":[{"OrderID":"14783-034","ShipCountry":"ID","ShipAddress":"0677 Goodland Center","ShipName":"Zieme and Sons","OrderDate":"2/1/2016","TotalPayment":"$162901.45","Status":6,"Type":2},{"OrderID":"63304-579","ShipCountry":"MX","ShipAddress":"5 Florence Alley","ShipName":"Schoen-Schmidt","OrderDate":"5/24/2016","TotalPayment":"$537381.19","Status":1,"Type":2},{"OrderID":"0168-0056","ShipCountry":"CN","ShipAddress":"0854 Cardinal Street","ShipName":"Beier-Borer","OrderDate":"5/22/2016","TotalPayment":"$1059210.06","Status":1,"Type":1},{"OrderID":"49349-107","ShipCountry":"UG","ShipAddress":"7779 Heffernan Way","ShipName":"Windler, Mayer and Will","OrderDate":"1/10/2017","TotalPayment":"$934099.74","Status":5,"Type":3},{"OrderID":"49288-0959","ShipCountry":"BO","ShipAddress":"7091 Forest Trail","ShipName":"Schmeler Group","OrderDate":"1/9/2016","TotalPayment":"$243944.30","Status":4,"Type":2},{"OrderID":"60541-0706","ShipCountry":"PH","ShipAddress":"1463 Lillian Parkway","ShipName":"Rowe, Kuphal and Goyette","OrderDate":"9/10/2016","TotalPayment":"$276150.35","Status":1,"Type":3},{"OrderID":"56062-423","ShipCountry":"MX","ShipAddress":"015 Redwing Court","ShipName":"Skiles Group","OrderDate":"10/26/2017","TotalPayment":"$1055541.02","Status":6,"Type":2},{"OrderID":"0603-0209","ShipCountry":"KE","ShipAddress":"29783 Shopko Trail","ShipName":"McDermott-Renner","OrderDate":"7/13/2016","TotalPayment":"$177934.20","Status":1,"Type":2},{"OrderID":"37000-710","ShipCountry":"BR","ShipAddress":"5 Bunker Hill Parkway","ShipName":"Ledner-Ruecker","OrderDate":"7/13/2017","TotalPayment":"$20453.64","Status":6,"Type":2},{"OrderID":"62011-0227","ShipCountry":"PE","ShipAddress":"3240 Ruskin Plaza","ShipName":"Kunze Group","OrderDate":"1/28/2017","TotalPayment":"$355333.68","Status":6,"Type":2},{"OrderID":"10738-302","ShipCountry":"SE","ShipAddress":"6 Vermont Way","ShipName":"Lang, Rath and Hagenes","OrderDate":"1/26/2016","TotalPayment":"$470693.52","Status":6,"Type":1},{"OrderID":"51672-4123","ShipCountry":"RU","ShipAddress":"272 Debra Street","ShipName":"Harris-Kohler","OrderDate":"2/11/2017","TotalPayment":"$89976.51","Status":3,"Type":1},{"OrderID":"68169-0127","ShipCountry":"SE","ShipAddress":"30 Michigan Point","ShipName":"Goodwin Group","OrderDate":"9/13/2017","TotalPayment":"$1076778.47","Status":1,"Type":1},{"OrderID":"67345-0004","ShipCountry":"SI","ShipAddress":"88 Valley Edge Hill","ShipName":"Gutmann Group","OrderDate":"11/30/2016","TotalPayment":"$238794.88","Status":3,"Type":1},{"OrderID":"65841-030","ShipCountry":"MT","ShipAddress":"1 Luster Alley","ShipName":"Quitzon-Reilly","OrderDate":"9/26/2017","TotalPayment":"$684504.51","Status":2,"Type":3},{"OrderID":"0187-2221","ShipCountry":"PH","ShipAddress":"666 Warner Alley","ShipName":"Cremin-Rutherford","OrderDate":"11/27/2016","TotalPayment":"$275011.23","Status":3,"Type":2},{"OrderID":"0093-7601","ShipCountry":"PH","ShipAddress":"14 Saint Paul Lane","ShipName":"West, Sanford and Homenick","OrderDate":"4/7/2016","TotalPayment":"$807291.66","Status":4,"Type":3},{"OrderID":"42549-554","ShipCountry":"CN","ShipAddress":"734 New Castle Plaza","ShipName":"Renner LLC","OrderDate":"4/24/2016","TotalPayment":"$880678.22","Status":5,"Type":2}]},\n' +
        '{"RecordID":48,"FirstName":"Tabitha","LastName":"Malcher","Company":"Shuffletag","Email":"tmalcher1b@godaddy.com","Phone":"494-929-6491","Status":6,"Type":3,"Orders":[{"OrderID":"49035-104","ShipCountry":"ID","ShipAddress":"82 Bobwhite Park","ShipName":"Heller, Gutmann and Collins","OrderDate":"5/28/2017","TotalPayment":"$959672.54","Status":2,"Type":2},{"OrderID":"35356-821","ShipCountry":"RU","ShipAddress":"00 Sachtjen Trail","ShipName":"Padberg Inc","OrderDate":"1/9/2016","TotalPayment":"$519302.58","Status":6,"Type":2},{"OrderID":"59535-5101","ShipCountry":"ID","ShipAddress":"4849 Kinsman Parkway","ShipName":"Murazik, Marquardt and Brown","OrderDate":"6/22/2016","TotalPayment":"$627948.92","Status":3,"Type":2},{"OrderID":"0641-6063","ShipCountry":"PE","ShipAddress":"89569 Sage Court","ShipName":"Collins, Price and Sawayn","OrderDate":"1/8/2017","TotalPayment":"$104107.44","Status":6,"Type":2},{"OrderID":"62670-3715","ShipCountry":"US","ShipAddress":"7387 Fallview Crossing","ShipName":"Gislason-Bashirian","OrderDate":"4/13/2016","TotalPayment":"$1104414.27","Status":2,"Type":2},{"OrderID":"37205-356","ShipCountry":"CN","ShipAddress":"1 Merrick Point","ShipName":"Wiza, Champlin and Murazik","OrderDate":"11/8/2017","TotalPayment":"$666026.64","Status":3,"Type":2},{"OrderID":"42979-110","ShipCountry":"GR","ShipAddress":"647 Westend Place","ShipName":"Zboncak, Cremin and Kuvalis","OrderDate":"8/15/2016","TotalPayment":"$199307.28","Status":3,"Type":2},{"OrderID":"48951-5027","ShipCountry":"CN","ShipAddress":"4721 Beilfuss Avenue","ShipName":"Roob and Sons","OrderDate":"3/12/2016","TotalPayment":"$354844.94","Status":3,"Type":3},{"OrderID":"0067-8100","ShipCountry":"MK","ShipAddress":"55 Packers Trail","ShipName":"Ankunding-Christiansen","OrderDate":"8/21/2017","TotalPayment":"$21719.68","Status":1,"Type":1},{"OrderID":"24338-516","ShipCountry":"GR","ShipAddress":"60 Bartillon Alley","ShipName":"Pacocha, Walsh and Purdy","OrderDate":"3/17/2016","TotalPayment":"$882486.40","Status":2,"Type":2},{"OrderID":"0406-0123","ShipCountry":"CN","ShipAddress":"7 Forest Run Terrace","ShipName":"Grimes, Lemke and Hackett","OrderDate":"9/16/2016","TotalPayment":"$944836.77","Status":1,"Type":3},{"OrderID":"44523-732","ShipCountry":"CN","ShipAddress":"0 Memorial Crossing","ShipName":"Hermiston, Hand and Greenfelder","OrderDate":"6/19/2016","TotalPayment":"$130224.05","Status":4,"Type":2},{"OrderID":"12213-730","ShipCountry":"HN","ShipAddress":"1325 Victoria Plaza","ShipName":"Reichert-Crooks","OrderDate":"1/16/2016","TotalPayment":"$224481.68","Status":5,"Type":3},{"OrderID":"63629-1532","ShipCountry":"CZ","ShipAddress":"5180 Almo Circle","ShipName":"Spinka and Sons","OrderDate":"7/26/2016","TotalPayment":"$332935.39","Status":2,"Type":3},{"OrderID":"68387-140","ShipCountry":"JP","ShipAddress":"54 Ruskin Terrace","ShipName":"McCullough-Hudson","OrderDate":"11/6/2016","TotalPayment":"$921327.29","Status":6,"Type":1},{"OrderID":"0173-0791","ShipCountry":"RU","ShipAddress":"37 Melby Road","ShipName":"Farrell LLC","OrderDate":"3/21/2016","TotalPayment":"$240964.48","Status":3,"Type":1},{"OrderID":"59630-320","ShipCountry":"PL","ShipAddress":"61416 Orin Way","ShipName":"Welch LLC","OrderDate":"5/31/2016","TotalPayment":"$646061.64","Status":2,"Type":1},{"OrderID":"62037-832","ShipCountry":"CZ","ShipAddress":"280 Glacier Hill Parkway","ShipName":"Lockman Inc","OrderDate":"2/26/2016","TotalPayment":"$421297.23","Status":5,"Type":3},{"OrderID":"36987-3003","ShipCountry":"PH","ShipAddress":"37 Ramsey Pass","ShipName":"Bartoletti, Strosin and Welch","OrderDate":"2/23/2016","TotalPayment":"$700953.45","Status":5,"Type":3}]},\n' +
        '{"RecordID":49,"FirstName":"Ula","LastName":"Matiasek","Company":"Wikivu","Email":"umatiasek1c@biglobe.ne.jp","Phone":"320-439-1744","Status":6,"Type":2,"Orders":[{"OrderID":"11673-583","ShipCountry":"FI","ShipAddress":"24 Mariners Cove Trail","ShipName":"Kertzmann LLC","OrderDate":"10/29/2017","TotalPayment":"$173255.43","Status":5,"Type":3},{"OrderID":"0462-0162","ShipCountry":"ID","ShipAddress":"5600 Crest Line Parkway","ShipName":"Witting, Terry and Nicolas","OrderDate":"7/4/2016","TotalPayment":"$180949.88","Status":4,"Type":2},{"OrderID":"68472-028","ShipCountry":"FR","ShipAddress":"627 Hoffman Drive","ShipName":"Weimann Inc","OrderDate":"3/13/2017","TotalPayment":"$634807.22","Status":6,"Type":3},{"OrderID":"55312-238","ShipCountry":"JP","ShipAddress":"19057 Southridge Point","ShipName":"Rosenbaum and Sons","OrderDate":"9/1/2016","TotalPayment":"$356832.26","Status":1,"Type":3},{"OrderID":"49371-022","ShipCountry":"RU","ShipAddress":"94194 Fairfield Parkway","ShipName":"Wuckert, Breitenberg and Gerlach","OrderDate":"8/25/2016","TotalPayment":"$927453.65","Status":4,"Type":2},{"OrderID":"61755-005","ShipCountry":"US","ShipAddress":"48 Vahlen Place","ShipName":"Balistreri, Lind and Wilderman","OrderDate":"2/13/2017","TotalPayment":"$129263.86","Status":4,"Type":3},{"OrderID":"65841-666","ShipCountry":"AR","ShipAddress":"97617 Debs Plaza","ShipName":"Larson, Renner and Morar","OrderDate":"8/6/2016","TotalPayment":"$902801.32","Status":1,"Type":2},{"OrderID":"61442-143","ShipCountry":"LU","ShipAddress":"0582 Anhalt Trail","ShipName":"Hauck-Haag","OrderDate":"7/18/2016","TotalPayment":"$282496.35","Status":4,"Type":2},{"OrderID":"42421-229","ShipCountry":"SE","ShipAddress":"18 Hoard Way","ShipName":"Kling, Strosin and Mohr","OrderDate":"9/27/2017","TotalPayment":"$1073110.72","Status":5,"Type":1},{"OrderID":"33261-773","ShipCountry":"SE","ShipAddress":"67428 Hintze Way","ShipName":"Stroman, Bode and Hermann","OrderDate":"11/9/2016","TotalPayment":"$632592.77","Status":1,"Type":1},{"OrderID":"0268-6622","ShipCountry":"CY","ShipAddress":"15676 Lillian Drive","ShipName":"Bashirian Inc","OrderDate":"5/8/2017","TotalPayment":"$1147897.82","Status":1,"Type":3},{"OrderID":"36987-2588","ShipCountry":"FI","ShipAddress":"20131 Hallows Way","ShipName":"Jacobs and Sons","OrderDate":"2/14/2016","TotalPayment":"$255908.82","Status":5,"Type":3},{"OrderID":"49349-694","ShipCountry":"VN","ShipAddress":"3012 Annamark Point","ShipName":"Thompson-Harris","OrderDate":"7/1/2016","TotalPayment":"$1058038.12","Status":4,"Type":3},{"OrderID":"36987-3210","ShipCountry":"CN","ShipAddress":"741 Laurel Circle","ShipName":"Bartoletti Inc","OrderDate":"3/16/2017","TotalPayment":"$444750.02","Status":4,"Type":1},{"OrderID":"61748-302","ShipCountry":"AR","ShipAddress":"0 Chinook Alley","ShipName":"Marquardt, Treutel and Block","OrderDate":"6/14/2017","TotalPayment":"$78799.99","Status":3,"Type":2},{"OrderID":"0268-0199","ShipCountry":"ID","ShipAddress":"926 Maryland Hill","ShipName":"Bergnaum, Oberbrunner and Eichmann","OrderDate":"2/3/2016","TotalPayment":"$282131.79","Status":1,"Type":3},{"OrderID":"48951-7079","ShipCountry":"GR","ShipAddress":"272 Village Hill","ShipName":"Schoen and Sons","OrderDate":"5/24/2016","TotalPayment":"$388145.92","Status":1,"Type":1},{"OrderID":"36987-2890","ShipCountry":"JP","ShipAddress":"5846 Prentice Road","ShipName":"Homenick-Leffler","OrderDate":"4/15/2016","TotalPayment":"$422371.39","Status":3,"Type":1}]},\n' +
        '{"RecordID":50,"FirstName":"Dwain","LastName":"Ferrey","Company":"Yakidoo","Email":"dferrey1d@fda.gov","Phone":"658-189-1289","Status":5,"Type":3,"Orders":[{"OrderID":"10736-012","ShipCountry":"RU","ShipAddress":"783 Ryan Hill","ShipName":"Huels Group","OrderDate":"12/3/2017","TotalPayment":"$724342.29","Status":3,"Type":1},{"OrderID":"63029-433","ShipCountry":"ID","ShipAddress":"5117 Schiller Terrace","ShipName":"Leannon, Nolan and Abbott","OrderDate":"3/6/2016","TotalPayment":"$1124366.18","Status":1,"Type":2},{"OrderID":"63323-237","ShipCountry":"CU","ShipAddress":"1536 Caliangt Hill","ShipName":"Romaguera-Williamson","OrderDate":"1/14/2016","TotalPayment":"$1073508.60","Status":2,"Type":2},{"OrderID":"68788-9953","ShipCountry":"CY","ShipAddress":"5192 Arapahoe Place","ShipName":"Boehm, Gusikowski and Cummings","OrderDate":"3/6/2017","TotalPayment":"$997731.07","Status":1,"Type":2},{"OrderID":"68151-0526","ShipCountry":"UA","ShipAddress":"5367 Bartillon Terrace","ShipName":"Krajcik-Aufderhar","OrderDate":"5/7/2016","TotalPayment":"$721029.51","Status":6,"Type":1},{"OrderID":"54473-215","ShipCountry":"MK","ShipAddress":"9942 Lunder Pass","ShipName":"Jones LLC","OrderDate":"10/12/2017","TotalPayment":"$1017053.77","Status":1,"Type":1}]},\n' +
        '{"RecordID":51,"FirstName":"Verne","LastName":"Buggy","Company":"Brainverse","Email":"vbuggy1e@economist.com","Phone":"150-832-2807","Status":2,"Type":2,"Orders":[{"OrderID":"55910-220","ShipCountry":"RU","ShipAddress":"64291 Briar Crest Plaza","ShipName":"Franecki, Dare and Lemke","OrderDate":"10/15/2017","TotalPayment":"$795918.14","Status":4,"Type":1},{"OrderID":"49349-724","ShipCountry":"CN","ShipAddress":"08328 Lukken Court","ShipName":"Satterfield-Waelchi","OrderDate":"2/12/2016","TotalPayment":"$946416.40","Status":4,"Type":1},{"OrderID":"61598-200","ShipCountry":"AL","ShipAddress":"7 Saint Paul Court","ShipName":"Heathcote-Feeney","OrderDate":"3/22/2016","TotalPayment":"$352177.16","Status":5,"Type":3},{"OrderID":"46122-263","ShipCountry":"RS","ShipAddress":"97 Hansons Junction","ShipName":"Breitenberg Group","OrderDate":"6/8/2016","TotalPayment":"$157466.40","Status":6,"Type":2},{"OrderID":"68472-101","ShipCountry":"CN","ShipAddress":"4952 Barnett Hill","ShipName":"Little LLC","OrderDate":"2/19/2016","TotalPayment":"$11785.69","Status":5,"Type":2},{"OrderID":"0280-0922","ShipCountry":"CN","ShipAddress":"429 Crowley Drive","ShipName":"Blick Inc","OrderDate":"1/28/2017","TotalPayment":"$392077.03","Status":3,"Type":1},{"OrderID":"52125-178","ShipCountry":"ID","ShipAddress":"9 Buhler Way","ShipName":"Greenfelder and Sons","OrderDate":"9/26/2017","TotalPayment":"$1029917.26","Status":3,"Type":1},{"OrderID":"59779-425","ShipCountry":"ID","ShipAddress":"4371 Carey Place","ShipName":"Altenwerth LLC","OrderDate":"11/1/2017","TotalPayment":"$1097363.76","Status":2,"Type":3},{"OrderID":"64725-0111","ShipCountry":"ID","ShipAddress":"2 Carberry Center","ShipName":"Rath-Erdman","OrderDate":"12/6/2016","TotalPayment":"$575191.11","Status":6,"Type":1},{"OrderID":"0268-0824","ShipCountry":"RU","ShipAddress":"789 Dixon Park","ShipName":"Purdy, Sawayn and Gutkowski","OrderDate":"10/17/2016","TotalPayment":"$353149.07","Status":2,"Type":1},{"OrderID":"24385-546","ShipCountry":"ID","ShipAddress":"59430 Village Green Hill","ShipName":"Goodwin Group","OrderDate":"2/10/2016","TotalPayment":"$840578.73","Status":1,"Type":2},{"OrderID":"0228-2996","ShipCountry":"AR","ShipAddress":"7 Roth Park","ShipName":"Kulas Group","OrderDate":"4/25/2016","TotalPayment":"$323929.94","Status":6,"Type":1},{"OrderID":"53119-575","ShipCountry":"GH","ShipAddress":"0 Brown Center","ShipName":"Hand-Hyatt","OrderDate":"6/16/2016","TotalPayment":"$477442.21","Status":4,"Type":2}]},\n' +
        '{"RecordID":52,"FirstName":"Merridie","LastName":"Beasley","Company":"Realbuzz","Email":"mbeasley1f@tamu.edu","Phone":"312-515-8198","Status":5,"Type":3,"Orders":[{"OrderID":"52342-001","ShipCountry":"FR","ShipAddress":"651 Stang Center","ShipName":"Walter, Spencer and Howell","OrderDate":"11/18/2017","TotalPayment":"$815175.88","Status":5,"Type":2},{"OrderID":"45865-451","ShipCountry":"CN","ShipAddress":"307 Fallview Park","ShipName":"Steuber LLC","OrderDate":"5/15/2016","TotalPayment":"$458521.60","Status":4,"Type":1},{"OrderID":"37808-394","ShipCountry":"CN","ShipAddress":"518 Canary Hill","ShipName":"Jakubowski, Barrows and Strosin","OrderDate":"1/19/2016","TotalPayment":"$175739.33","Status":5,"Type":3},{"OrderID":"68084-283","ShipCountry":"CN","ShipAddress":"7 Meadow Vale Court","ShipName":"Thompson-Jaskolski","OrderDate":"8/9/2016","TotalPayment":"$1145971.67","Status":2,"Type":1},{"OrderID":"46708-128","ShipCountry":"CN","ShipAddress":"6 Coleman Center","ShipName":"Aufderhar and Sons","OrderDate":"5/11/2017","TotalPayment":"$695264.81","Status":1,"Type":2},{"OrderID":"55154-4519","ShipCountry":"US","ShipAddress":"7667 Gina Point","ShipName":"Pfannerstill, Simonis and Bergnaum","OrderDate":"12/24/2016","TotalPayment":"$1024535.28","Status":6,"Type":2},{"OrderID":"62011-0214","ShipCountry":"PT","ShipAddress":"5649 Springview Way","ShipName":"Lang and Sons","OrderDate":"6/11/2017","TotalPayment":"$467527.22","Status":5,"Type":3},{"OrderID":"37000-326","ShipCountry":"PE","ShipAddress":"9 Warbler Way","ShipName":"Swift, Nienow and Spencer","OrderDate":"1/3/2017","TotalPayment":"$1041717.40","Status":6,"Type":1},{"OrderID":"66096-175","ShipCountry":"ID","ShipAddress":"77363 Saint Paul Parkway","ShipName":"Kris-Torphy","OrderDate":"9/23/2017","TotalPayment":"$464261.82","Status":6,"Type":2}]},\n' +
        '{"RecordID":53,"FirstName":"Kathi","LastName":"Soff","Company":"Skippad","Email":"ksoff1g@oracle.com","Phone":"937-813-1057","Status":2,"Type":1,"Orders":[{"OrderID":"58668-1261","ShipCountry":"HR","ShipAddress":"3610 Grasskamp Alley","ShipName":"Heidenreich Inc","OrderDate":"12/19/2017","TotalPayment":"$1181191.29","Status":2,"Type":1},{"OrderID":"0527-1347","ShipCountry":"MN","ShipAddress":"3 Heath Crossing","ShipName":"Howell LLC","OrderDate":"6/13/2017","TotalPayment":"$298197.07","Status":5,"Type":3},{"OrderID":"53208-452","ShipCountry":"TM","ShipAddress":"4 Petterle Court","ShipName":"Effertz, Trantow and Nitzsche","OrderDate":"4/20/2016","TotalPayment":"$532309.33","Status":3,"Type":1},{"OrderID":"54868-4675","ShipCountry":"CN","ShipAddress":"852 Warner Lane","ShipName":"Emmerich, Wisoky and Wolff","OrderDate":"5/28/2017","TotalPayment":"$342952.30","Status":4,"Type":1},{"OrderID":"63868-966","ShipCountry":"PH","ShipAddress":"5 Moose Pass","ShipName":"Hayes and Sons","OrderDate":"9/25/2017","TotalPayment":"$724699.25","Status":6,"Type":2},{"OrderID":"49349-859","ShipCountry":"RU","ShipAddress":"81 Village Crossing","ShipName":"Schowalter, Schneider and Welch","OrderDate":"3/21/2016","TotalPayment":"$288602.33","Status":1,"Type":3},{"OrderID":"68026-108","ShipCountry":"PT","ShipAddress":"964 4th Parkway","ShipName":"Fritsch-Gulgowski","OrderDate":"9/15/2016","TotalPayment":"$708946.01","Status":5,"Type":3},{"OrderID":"30142-546","ShipCountry":"CN","ShipAddress":"45 Lukken Pass","ShipName":"Willms-Corwin","OrderDate":"6/11/2016","TotalPayment":"$334812.48","Status":1,"Type":1},{"OrderID":"13668-160","ShipCountry":"BA","ShipAddress":"010 Lakewood Gardens Avenue","ShipName":"Ondricka-Hyatt","OrderDate":"6/2/2017","TotalPayment":"$944910.96","Status":1,"Type":3},{"OrderID":"21695-673","ShipCountry":"ID","ShipAddress":"18 Fuller Road","ShipName":"Bednar, Hayes and Greenfelder","OrderDate":"8/15/2016","TotalPayment":"$1192286.42","Status":2,"Type":3},{"OrderID":"58118-0798","ShipCountry":"PH","ShipAddress":"5 Mifflin Place","ShipName":"Rath, Adams and Stanton","OrderDate":"11/17/2017","TotalPayment":"$564817.66","Status":6,"Type":1},{"OrderID":"24236-656","ShipCountry":"PT","ShipAddress":"2 Loftsgordon Junction","ShipName":"Grady, Hamill and Kohler","OrderDate":"6/6/2016","TotalPayment":"$410296.55","Status":5,"Type":2},{"OrderID":"0942-9505","ShipCountry":"IR","ShipAddress":"69 South Terrace","ShipName":"Hamill-Ernser","OrderDate":"11/18/2017","TotalPayment":"$482048.52","Status":2,"Type":1},{"OrderID":"36987-3046","ShipCountry":"CL","ShipAddress":"37310 Doe Crossing Junction","ShipName":"Blick-Jacobi","OrderDate":"12/8/2016","TotalPayment":"$895394.40","Status":6,"Type":1}]},\n' +
        '{"RecordID":54,"FirstName":"Elbert","LastName":"Andrews","Company":"Mybuzz","Email":"eandrews1h@joomla.org","Phone":"707-738-2679","Status":3,"Type":2,"Orders":[{"OrderID":"29300-114","ShipCountry":"PH","ShipAddress":"8 Mallard Avenue","ShipName":"Funk and Sons","OrderDate":"1/30/2016","TotalPayment":"$261492.30","Status":3,"Type":3},{"OrderID":"52125-482","ShipCountry":"PH","ShipAddress":"4549 Morrow Pass","ShipName":"Moore and Sons","OrderDate":"9/5/2016","TotalPayment":"$617726.94","Status":4,"Type":3},{"OrderID":"11410-162","ShipCountry":"ZA","ShipAddress":"3919 Scott Pass","ShipName":"Yost-Boyle","OrderDate":"7/11/2016","TotalPayment":"$1185208.65","Status":6,"Type":1},{"OrderID":"67938-0823","ShipCountry":"FR","ShipAddress":"96 Bluejay Crossing","ShipName":"Brown-Leuschke","OrderDate":"11/7/2017","TotalPayment":"$222774.18","Status":2,"Type":2},{"OrderID":"49349-675","ShipCountry":"PS","ShipAddress":"648 Luster Drive","ShipName":"Rodriguez, Moore and Hackett","OrderDate":"7/13/2016","TotalPayment":"$1182736.62","Status":5,"Type":3},{"OrderID":"16590-102","ShipCountry":"UY","ShipAddress":"98 Swallow Street","ShipName":"Gaylord-Veum","OrderDate":"4/30/2016","TotalPayment":"$68479.58","Status":4,"Type":1},{"OrderID":"63736-232","ShipCountry":"NO","ShipAddress":"476 Calypso Plaza","ShipName":"Bernhard and Sons","OrderDate":"8/11/2017","TotalPayment":"$695993.63","Status":2,"Type":3},{"OrderID":"16590-349","ShipCountry":"CN","ShipAddress":"14 Harbort Circle","ShipName":"Hagenes Group","OrderDate":"12/11/2017","TotalPayment":"$488749.84","Status":4,"Type":3},{"OrderID":"0268-6195","ShipCountry":"ID","ShipAddress":"63733 Elgar Junction","ShipName":"Heidenreich Inc","OrderDate":"9/19/2016","TotalPayment":"$761935.25","Status":6,"Type":2},{"OrderID":"55154-8275","ShipCountry":"CN","ShipAddress":"76 Spohn Street","ShipName":"Mraz-Padberg","OrderDate":"3/7/2017","TotalPayment":"$240494.58","Status":2,"Type":1},{"OrderID":"66902-001","ShipCountry":"ID","ShipAddress":"056 Eastlawn Plaza","ShipName":"Sawayn, Kuphal and Leuschke","OrderDate":"3/7/2016","TotalPayment":"$669821.38","Status":2,"Type":1},{"OrderID":"0113-0990","ShipCountry":"ID","ShipAddress":"7 Nobel Road","ShipName":"Hamill Inc","OrderDate":"8/15/2017","TotalPayment":"$956514.31","Status":2,"Type":1},{"OrderID":"40046-0053","ShipCountry":"CN","ShipAddress":"39134 Tomscot Pass","ShipName":"Eichmann-Brekke","OrderDate":"3/8/2016","TotalPayment":"$690239.56","Status":2,"Type":3}]},\n' +
        '{"RecordID":55,"FirstName":"Gladi","LastName":"McGillreich","Company":"Skiptube","Email":"gmcgillreich1i@forbes.com","Phone":"426-232-1445","Status":3,"Type":2,"Orders":[{"OrderID":"54868-5776","ShipCountry":"PH","ShipAddress":"9 5th Lane","ShipName":"Treutel-D\'Amore","OrderDate":"8/24/2017","TotalPayment":"$1111440.65","Status":3,"Type":2},{"OrderID":"67544-097","ShipCountry":"BD","ShipAddress":"2 Morning Alley","ShipName":"Herman LLC","OrderDate":"1/13/2017","TotalPayment":"$1018191.16","Status":4,"Type":2},{"OrderID":"36987-1467","ShipCountry":"FI","ShipAddress":"53 Drewry Place","ShipName":"Wiza, Anderson and Schoen","OrderDate":"6/15/2016","TotalPayment":"$934058.55","Status":5,"Type":2},{"OrderID":"0135-0090","ShipCountry":"PK","ShipAddress":"790 8th Point","ShipName":"Pollich Group","OrderDate":"1/5/2017","TotalPayment":"$1084043.22","Status":2,"Type":3},{"OrderID":"11822-0650","ShipCountry":"SE","ShipAddress":"7516 Morningstar Street","ShipName":"Towne Inc","OrderDate":"12/29/2017","TotalPayment":"$837688.74","Status":4,"Type":3},{"OrderID":"0069-9321","ShipCountry":"KE","ShipAddress":"9528 Old Shore Alley","ShipName":"Oberbrunner, Steuber and Gerlach","OrderDate":"4/13/2017","TotalPayment":"$561112.17","Status":4,"Type":2},{"OrderID":"21695-206","ShipCountry":"TZ","ShipAddress":"35 Aberg Court","ShipName":"Pfannerstill Inc","OrderDate":"6/5/2017","TotalPayment":"$406130.84","Status":1,"Type":3},{"OrderID":"59762-1520","ShipCountry":"PK","ShipAddress":"089 Colorado Avenue","ShipName":"Grimes Inc","OrderDate":"6/27/2017","TotalPayment":"$654539.36","Status":3,"Type":2},{"OrderID":"16110-260","ShipCountry":"CN","ShipAddress":"76 Sheridan Park","ShipName":"Kiehn LLC","OrderDate":"6/11/2017","TotalPayment":"$343371.93","Status":4,"Type":2},{"OrderID":"61957-0820","ShipCountry":"ZA","ShipAddress":"6 Mayer Point","ShipName":"Rau, Hahn and Ratke","OrderDate":"7/11/2017","TotalPayment":"$1040467.16","Status":2,"Type":3},{"OrderID":"0597-0031","ShipCountry":"AR","ShipAddress":"9 Jenifer Road","ShipName":"Hamill and Sons","OrderDate":"4/22/2017","TotalPayment":"$33352.82","Status":4,"Type":3},{"OrderID":"68703-043","ShipCountry":"AZ","ShipAddress":"80 Russell Hill","ShipName":"Nicolas-Crona","OrderDate":"10/9/2017","TotalPayment":"$525978.07","Status":3,"Type":1},{"OrderID":"10702-036","ShipCountry":"BR","ShipAddress":"85215 Fair Oaks Crossing","ShipName":"Jast-McLaughlin","OrderDate":"1/20/2017","TotalPayment":"$416971.17","Status":1,"Type":2},{"OrderID":"49643-019","ShipCountry":"UA","ShipAddress":"182 Jackson Road","ShipName":"Weber Group","OrderDate":"5/27/2016","TotalPayment":"$37042.20","Status":2,"Type":2},{"OrderID":"67046-275","ShipCountry":"ID","ShipAddress":"60691 Shelley Street","ShipName":"Dare-Douglas","OrderDate":"4/23/2016","TotalPayment":"$628294.88","Status":3,"Type":1},{"OrderID":"68084-364","ShipCountry":"FR","ShipAddress":"399 Calypso Point","ShipName":"Quigley-Baumbach","OrderDate":"12/5/2017","TotalPayment":"$551561.72","Status":1,"Type":1},{"OrderID":"49349-797","ShipCountry":"CZ","ShipAddress":"49230 Dunning Drive","ShipName":"Weissnat, Welch and Stanton","OrderDate":"3/25/2017","TotalPayment":"$263988.94","Status":4,"Type":1}]},\n' +
        '{"RecordID":56,"FirstName":"Piotr","LastName":"Spelling","Company":"Thoughtworks","Email":"pspelling1j@sakura.ne.jp","Phone":"584-468-9586","Status":6,"Type":1,"Orders":[{"OrderID":"68428-152","ShipCountry":"PT","ShipAddress":"73 Valley Edge Terrace","ShipName":"Stehr Inc","OrderDate":"8/13/2016","TotalPayment":"$984123.64","Status":3,"Type":2},{"OrderID":"55154-9370","ShipCountry":"ID","ShipAddress":"4495 Pleasure Crossing","ShipName":"Mayer Group","OrderDate":"6/18/2016","TotalPayment":"$1057366.46","Status":2,"Type":2},{"OrderID":"99207-465","ShipCountry":"PE","ShipAddress":"5 Texas Crossing","ShipName":"O\'Kon-Schaden","OrderDate":"10/29/2016","TotalPayment":"$102859.55","Status":4,"Type":2},{"OrderID":"57955-0815","ShipCountry":"AR","ShipAddress":"6310 Quincy Junction","ShipName":"King LLC","OrderDate":"5/15/2016","TotalPayment":"$31103.75","Status":1,"Type":2},{"OrderID":"51815-216","ShipCountry":"PE","ShipAddress":"8486 Mallory Drive","ShipName":"Stanton-Armstrong","OrderDate":"6/5/2016","TotalPayment":"$128531.37","Status":2,"Type":3},{"OrderID":"64578-0110","ShipCountry":"US","ShipAddress":"1 Dunning Terrace","ShipName":"Rolfson LLC","OrderDate":"10/5/2017","TotalPayment":"$1108488.59","Status":1,"Type":2},{"OrderID":"54868-4367","ShipCountry":"EC","ShipAddress":"56 Mariners Cove Way","ShipName":"Gorczany, Windler and Kautzer","OrderDate":"8/19/2016","TotalPayment":"$808188.93","Status":3,"Type":1},{"OrderID":"68196-808","ShipCountry":"GB","ShipAddress":"199 Manitowish Drive","ShipName":"Schmidt LLC","OrderDate":"3/12/2016","TotalPayment":"$1017538.13","Status":1,"Type":2},{"OrderID":"36987-1651","ShipCountry":"BR","ShipAddress":"46043 Kim Lane","ShipName":"Bernhard, Miller and Gulgowski","OrderDate":"5/31/2016","TotalPayment":"$1123363.34","Status":1,"Type":2},{"OrderID":"62756-710","ShipCountry":"EG","ShipAddress":"103 Melby Street","ShipName":"Bartoletti Inc","OrderDate":"7/9/2016","TotalPayment":"$929285.67","Status":3,"Type":1},{"OrderID":"0378-8020","ShipCountry":"AM","ShipAddress":"4 Donald Court","ShipName":"Pollich Inc","OrderDate":"5/25/2017","TotalPayment":"$132844.93","Status":6,"Type":1},{"OrderID":"62211-070","ShipCountry":"ID","ShipAddress":"44 Sherman Point","ShipName":"Beier-Kuhn","OrderDate":"9/24/2016","TotalPayment":"$61639.40","Status":4,"Type":1},{"OrderID":"0404-5991","ShipCountry":"UA","ShipAddress":"108 Shasta Park","ShipName":"Leannon and Sons","OrderDate":"11/17/2017","TotalPayment":"$580430.88","Status":1,"Type":3},{"OrderID":"57520-1005","ShipCountry":"CN","ShipAddress":"413 Eagan Crossing","ShipName":"Weber-Wehner","OrderDate":"4/22/2017","TotalPayment":"$700079.89","Status":3,"Type":2},{"OrderID":"59915-4001","ShipCountry":"ID","ShipAddress":"826 Merchant Place","ShipName":"Jacobs-Grimes","OrderDate":"5/3/2017","TotalPayment":"$142953.49","Status":6,"Type":1}]},\n' +
        '{"RecordID":57,"FirstName":"Carolyne","LastName":"Corkish","Company":"Zoombox","Email":"ccorkish1k@hugedomains.com","Phone":"457-155-1937","Status":2,"Type":1,"Orders":[{"OrderID":"60505-2865","ShipCountry":"CN","ShipAddress":"8077 Bayside Terrace","ShipName":"Skiles-Nader","OrderDate":"7/21/2017","TotalPayment":"$410521.49","Status":6,"Type":2},{"OrderID":"28595-800","ShipCountry":"ID","ShipAddress":"507 Menomonie Plaza","ShipName":"Walsh, Price and Mertz","OrderDate":"3/17/2016","TotalPayment":"$732271.16","Status":1,"Type":3},{"OrderID":"58160-826","ShipCountry":"FI","ShipAddress":"098 Dovetail Center","ShipName":"Bechtelar and Sons","OrderDate":"6/4/2016","TotalPayment":"$179371.74","Status":3,"Type":2},{"OrderID":"36987-1012","ShipCountry":"CZ","ShipAddress":"54 Barnett Road","ShipName":"Littel-Purdy","OrderDate":"4/18/2017","TotalPayment":"$1091379.75","Status":3,"Type":3},{"OrderID":"51862-215","ShipCountry":"FR","ShipAddress":"9 Jana Circle","ShipName":"Bechtelar-Okuneva","OrderDate":"1/3/2016","TotalPayment":"$458507.55","Status":2,"Type":3},{"OrderID":"52959-891","ShipCountry":"PH","ShipAddress":"2 Lukken Junction","ShipName":"Stiedemann-Watsica","OrderDate":"4/8/2016","TotalPayment":"$752467.95","Status":3,"Type":3},{"OrderID":"0006-0533","ShipCountry":"SY","ShipAddress":"2 Summit Crossing","ShipName":"Hammes Inc","OrderDate":"9/1/2016","TotalPayment":"$1121203.60","Status":6,"Type":2},{"OrderID":"55154-1242","ShipCountry":"PK","ShipAddress":"8 Westend Terrace","ShipName":"Hirthe, Witting and Legros","OrderDate":"11/17/2017","TotalPayment":"$211674.19","Status":5,"Type":1},{"OrderID":"50114-8200","ShipCountry":"CN","ShipAddress":"83528 Melby Lane","ShipName":"Bernier LLC","OrderDate":"4/28/2016","TotalPayment":"$715183.49","Status":4,"Type":2}]},\n' +
        '{"RecordID":58,"FirstName":"Gan","LastName":"Houlahan","Company":"Oodoo","Email":"ghoulahan1l@reverbnation.com","Phone":"319-445-4983","Status":5,"Type":2,"Orders":[{"OrderID":"55346-0404","ShipCountry":"AR","ShipAddress":"1 Lindbergh Hill","ShipName":"Jacobson-Cummerata","OrderDate":"6/14/2017","TotalPayment":"$626811.81","Status":6,"Type":3},{"OrderID":"0113-0323","ShipCountry":"ID","ShipAddress":"7359 Fairfield Circle","ShipName":"Larkin Group","OrderDate":"8/12/2016","TotalPayment":"$139421.43","Status":4,"Type":2},{"OrderID":"68428-038","ShipCountry":"PL","ShipAddress":"56 Beilfuss Place","ShipName":"Rosenbaum LLC","OrderDate":"8/20/2016","TotalPayment":"$1155009.89","Status":3,"Type":2},{"OrderID":"43063-247","ShipCountry":"ID","ShipAddress":"50 Sycamore Center","ShipName":"Runte-McClure","OrderDate":"11/10/2016","TotalPayment":"$339838.19","Status":4,"Type":1},{"OrderID":"52125-445","ShipCountry":"ID","ShipAddress":"16278 Bultman Parkway","ShipName":"Harris, Barrows and Spinka","OrderDate":"4/5/2016","TotalPayment":"$867179.89","Status":1,"Type":3},{"OrderID":"61957-0903","ShipCountry":"UA","ShipAddress":"6 Johnson Place","ShipName":"Ryan Group","OrderDate":"12/5/2017","TotalPayment":"$1018062.83","Status":4,"Type":2},{"OrderID":"63629-1360","ShipCountry":"RU","ShipAddress":"012 Briar Crest Alley","ShipName":"Littel-Fahey","OrderDate":"9/26/2017","TotalPayment":"$1097609.90","Status":4,"Type":2},{"OrderID":"52000-006","ShipCountry":"LK","ShipAddress":"740 Division Place","ShipName":"Muller Group","OrderDate":"12/29/2016","TotalPayment":"$156068.94","Status":6,"Type":1},{"OrderID":"37205-825","ShipCountry":"UY","ShipAddress":"50 Dennis Pass","ShipName":"Purdy, Sanford and Blanda","OrderDate":"6/11/2016","TotalPayment":"$49563.69","Status":1,"Type":3},{"OrderID":"63347-700","ShipCountry":"MA","ShipAddress":"198 Hansons Place","ShipName":"Bode, Buckridge and Kunze","OrderDate":"12/13/2017","TotalPayment":"$1148595.57","Status":4,"Type":3},{"OrderID":"0049-2770","ShipCountry":"PS","ShipAddress":"2999 Jay Trail","ShipName":"Kunde-Gorczany","OrderDate":"6/11/2017","TotalPayment":"$897972.95","Status":2,"Type":2},{"OrderID":"0378-7010","ShipCountry":"ID","ShipAddress":"15726 Hallows Way","ShipName":"Luettgen, Brekke and Rice","OrderDate":"7/24/2017","TotalPayment":"$85711.90","Status":6,"Type":2},{"OrderID":"0186-0450","ShipCountry":"TN","ShipAddress":"12 Donald Pass","ShipName":"Kuhlman, Kozey and Ruecker","OrderDate":"2/21/2016","TotalPayment":"$515457.45","Status":2,"Type":1},{"OrderID":"36987-1718","ShipCountry":"PT","ShipAddress":"79 Jenna Point","ShipName":"Mayert-Murazik","OrderDate":"1/8/2017","TotalPayment":"$1013729.59","Status":1,"Type":1},{"OrderID":"43063-495","ShipCountry":"CN","ShipAddress":"6 Morning Point","ShipName":"Buckridge-Gleichner","OrderDate":"5/4/2016","TotalPayment":"$307098.37","Status":3,"Type":2},{"OrderID":"36987-2528","ShipCountry":"PH","ShipAddress":"16701 Longview Circle","ShipName":"Miller, McCullough and Dach","OrderDate":"7/26/2016","TotalPayment":"$1088649.56","Status":4,"Type":1},{"OrderID":"41250-423","ShipCountry":"YE","ShipAddress":"45870 Bartillon Drive","ShipName":"McLaughlin-Yundt","OrderDate":"6/22/2017","TotalPayment":"$100498.36","Status":6,"Type":2},{"OrderID":"0378-6165","ShipCountry":"VN","ShipAddress":"5 Tennessee Plaza","ShipName":"Herman-Satterfield","OrderDate":"7/12/2016","TotalPayment":"$509719.53","Status":2,"Type":1},{"OrderID":"57955-0003","ShipCountry":"US","ShipAddress":"0 Armistice Crossing","ShipName":"Hilpert-Mitchell","OrderDate":"1/31/2017","TotalPayment":"$954888.87","Status":3,"Type":2}]},\n' +
        '{"RecordID":59,"FirstName":"Biddie","LastName":"Gascoyne","Company":"Miboo","Email":"bgascoyne1m@upenn.edu","Phone":"220-871-1081","Status":1,"Type":2,"Orders":[{"OrderID":"68382-387","ShipCountry":"SO","ShipAddress":"41 Brown Park","ShipName":"Anderson-McDermott","OrderDate":"5/25/2016","TotalPayment":"$103189.53","Status":1,"Type":1},{"OrderID":"55319-866","ShipCountry":"NO","ShipAddress":"0590 Melody Avenue","ShipName":"Goodwin, King and Kassulke","OrderDate":"9/3/2016","TotalPayment":"$471805.05","Status":3,"Type":1},{"OrderID":"54436-010","ShipCountry":"AL","ShipAddress":"6506 Schmedeman Pass","ShipName":"Carter LLC","OrderDate":"3/29/2016","TotalPayment":"$60716.55","Status":3,"Type":2},{"OrderID":"60681-2505","ShipCountry":"ID","ShipAddress":"3649 Tomscot Way","ShipName":"O\'Connell and Sons","OrderDate":"4/23/2017","TotalPayment":"$291474.29","Status":5,"Type":2},{"OrderID":"58118-0031","ShipCountry":"GB","ShipAddress":"35 International Street","ShipName":"McDermott, Windler and Lebsack","OrderDate":"9/17/2017","TotalPayment":"$96074.83","Status":1,"Type":1},{"OrderID":"51141-7000","ShipCountry":"CA","ShipAddress":"3 Glacier Hill Lane","ShipName":"Goyette-Zboncak","OrderDate":"12/27/2016","TotalPayment":"$953877.62","Status":4,"Type":2},{"OrderID":"51885-3100","ShipCountry":"UA","ShipAddress":"4856 Rieder Trail","ShipName":"Olson Group","OrderDate":"9/12/2016","TotalPayment":"$93999.71","Status":6,"Type":2},{"OrderID":"62296-0045","ShipCountry":"PK","ShipAddress":"7 Spohn Avenue","ShipName":"Gleason Group","OrderDate":"4/4/2016","TotalPayment":"$230733.27","Status":2,"Type":1},{"OrderID":"52982-107","ShipCountry":"KZ","ShipAddress":"668 Morning Center","ShipName":"Hegmann-Larson","OrderDate":"5/18/2017","TotalPayment":"$116076.80","Status":3,"Type":2},{"OrderID":"59779-946","ShipCountry":"CA","ShipAddress":"351 Bowman Park","ShipName":"Stamm-Stanton","OrderDate":"5/31/2017","TotalPayment":"$127869.15","Status":3,"Type":3},{"OrderID":"41268-535","ShipCountry":"PH","ShipAddress":"2401 Fairfield Avenue","ShipName":"Kiehn, Satterfield and Goyette","OrderDate":"9/18/2017","TotalPayment":"$615467.94","Status":1,"Type":3}]},\n' +
        '{"RecordID":60,"FirstName":"Tiff","LastName":"McCurlye","Company":"Zava","Email":"tmccurlye1n@marketwatch.com","Phone":"834-559-5951","Status":1,"Type":3,"Orders":[{"OrderID":"0591-3198","ShipCountry":"HN","ShipAddress":"798 Glendale Alley","ShipName":"Hintz, Mertz and Blick","OrderDate":"5/31/2017","TotalPayment":"$321133.54","Status":4,"Type":3},{"OrderID":"0093-8122","ShipCountry":"BR","ShipAddress":"6 Hoffman Trail","ShipName":"Howe, Nader and Steuber","OrderDate":"10/31/2017","TotalPayment":"$406521.92","Status":1,"Type":2},{"OrderID":"0002-8715","ShipCountry":"CN","ShipAddress":"48 Clove Plaza","ShipName":"Wolff, Gottlieb and Fadel","OrderDate":"2/6/2017","TotalPayment":"$592880.01","Status":4,"Type":1},{"OrderID":"41520-300","ShipCountry":"CN","ShipAddress":"1618 Novick Parkway","ShipName":"Langosh Group","OrderDate":"2/6/2017","TotalPayment":"$927933.02","Status":1,"Type":2},{"OrderID":"60505-2658","ShipCountry":"CN","ShipAddress":"18199 Loomis Trail","ShipName":"Johnson-Beer","OrderDate":"10/19/2016","TotalPayment":"$474587.05","Status":3,"Type":3},{"OrderID":"58468-0080","ShipCountry":"CN","ShipAddress":"01 Schlimgen Drive","ShipName":"Klein Group","OrderDate":"5/22/2016","TotalPayment":"$408411.93","Status":1,"Type":1},{"OrderID":"54868-4798","ShipCountry":"ID","ShipAddress":"669 Fordem Park","ShipName":"Koss-Goldner","OrderDate":"3/28/2017","TotalPayment":"$651637.06","Status":5,"Type":3},{"OrderID":"68788-0014","ShipCountry":"SE","ShipAddress":"85 Welch Alley","ShipName":"Gislason-Ankunding","OrderDate":"2/7/2016","TotalPayment":"$899623.09","Status":6,"Type":2},{"OrderID":"67425-007","ShipCountry":"AZ","ShipAddress":"717 Westend Street","ShipName":"Boehm-Murazik","OrderDate":"2/16/2017","TotalPayment":"$873587.91","Status":6,"Type":1},{"OrderID":"54868-4711","ShipCountry":"ZA","ShipAddress":"514 Kropf Parkway","ShipName":"Casper-Fahey","OrderDate":"1/23/2017","TotalPayment":"$545739.51","Status":6,"Type":3}]},\n' +
        '{"RecordID":61,"FirstName":"Sherill","LastName":"Morrish","Company":"Reallinks","Email":"smorrish1o@wikimedia.org","Phone":"696-168-0798","Status":2,"Type":3,"Orders":[{"OrderID":"68016-440","ShipCountry":"CN","ShipAddress":"01 Algoma Drive","ShipName":"Williamson, Mosciski and VonRueden","OrderDate":"8/14/2016","TotalPayment":"$647322.10","Status":5,"Type":2},{"OrderID":"52125-617","ShipCountry":"ID","ShipAddress":"980 Lunder Court","ShipName":"Bradtke-Keeling","OrderDate":"3/30/2017","TotalPayment":"$769554.30","Status":4,"Type":3},{"OrderID":"0054-8858","ShipCountry":"FR","ShipAddress":"8 Monica Pass","ShipName":"Lebsack, Paucek and Beatty","OrderDate":"2/21/2016","TotalPayment":"$201804.39","Status":4,"Type":3},{"OrderID":"0115-1483","ShipCountry":"FR","ShipAddress":"6541 Old Shore Terrace","ShipName":"Steuber, Hoeger and Deckow","OrderDate":"6/11/2016","TotalPayment":"$404845.13","Status":6,"Type":1},{"OrderID":"64455-106","ShipCountry":"VN","ShipAddress":"92 Merrick Park","ShipName":"Hegmann-Deckow","OrderDate":"2/14/2016","TotalPayment":"$1169704.29","Status":4,"Type":3},{"OrderID":"54157-102","ShipCountry":"KG","ShipAddress":"2875 Fuller Park","ShipName":"Lindgren Inc","OrderDate":"4/23/2016","TotalPayment":"$1162513.37","Status":3,"Type":1},{"OrderID":"52125-740","ShipCountry":"ID","ShipAddress":"50 Delaware Court","ShipName":"Dietrich, Von and Volkman","OrderDate":"5/7/2017","TotalPayment":"$118157.06","Status":4,"Type":1},{"OrderID":"59011-757","ShipCountry":"UA","ShipAddress":"06877 Eagle Crest Terrace","ShipName":"Hettinger, Marvin and Adams","OrderDate":"3/29/2016","TotalPayment":"$826378.02","Status":2,"Type":2},{"OrderID":"0093-2075","ShipCountry":"IR","ShipAddress":"868 Arkansas Avenue","ShipName":"Hessel Group","OrderDate":"1/6/2016","TotalPayment":"$204418.03","Status":6,"Type":1},{"OrderID":"0378-2099","ShipCountry":"AL","ShipAddress":"6 Granby Center","ShipName":"McDermott Inc","OrderDate":"12/29/2016","TotalPayment":"$361967.62","Status":5,"Type":2},{"OrderID":"61657-0251","ShipCountry":"IQ","ShipAddress":"9017 Ohio Crossing","ShipName":"Kuhlman, Hickle and Kuhn","OrderDate":"7/20/2016","TotalPayment":"$366582.30","Status":1,"Type":1},{"OrderID":"0179-0030","ShipCountry":"PE","ShipAddress":"8331 Caliangt Avenue","ShipName":"Rutherford Inc","OrderDate":"1/9/2017","TotalPayment":"$330993.83","Status":5,"Type":1},{"OrderID":"60681-2808","ShipCountry":"US","ShipAddress":"31548 Orin Lane","ShipName":"Hartmann LLC","OrderDate":"9/26/2016","TotalPayment":"$546782.07","Status":2,"Type":2},{"OrderID":"39822-0330","ShipCountry":"NG","ShipAddress":"84129 Ruskin Trail","ShipName":"Gottlieb, Miller and Harvey","OrderDate":"1/18/2016","TotalPayment":"$783652.54","Status":4,"Type":1},{"OrderID":"43857-0276","ShipCountry":"LC","ShipAddress":"3 Raven Avenue","ShipName":"Kshlerin-Schmeler","OrderDate":"6/5/2016","TotalPayment":"$860164.20","Status":6,"Type":2},{"OrderID":"36987-2661","ShipCountry":"HU","ShipAddress":"15 Roxbury Hill","ShipName":"Dietrich Inc","OrderDate":"10/4/2016","TotalPayment":"$799439.42","Status":6,"Type":3},{"OrderID":"16590-087","ShipCountry":"PT","ShipAddress":"63 Sachs Way","ShipName":"Hamill and Sons","OrderDate":"12/5/2016","TotalPayment":"$1192649.55","Status":2,"Type":2},{"OrderID":"21130-217","ShipCountry":"MY","ShipAddress":"4 Thackeray Plaza","ShipName":"Orn, Brown and Windler","OrderDate":"8/26/2016","TotalPayment":"$192648.48","Status":2,"Type":3},{"OrderID":"0093-4741","ShipCountry":"US","ShipAddress":"052 Scofield Crossing","ShipName":"Moen-Herman","OrderDate":"1/25/2017","TotalPayment":"$683628.54","Status":2,"Type":3},{"OrderID":"60512-6037","ShipCountry":"RU","ShipAddress":"1581 Mallard Lane","ShipName":"Wolf LLC","OrderDate":"5/13/2016","TotalPayment":"$868071.30","Status":3,"Type":1}]},\n' +
        '{"RecordID":62,"FirstName":"Tressa","LastName":"Daouze","Company":"Zooxo","Email":"tdaouze1p@phoca.cz","Phone":"790-731-8935","Status":3,"Type":3,"Orders":[{"OrderID":"42571-105","ShipCountry":"SV","ShipAddress":"047 Calypso Plaza","ShipName":"Wilderman LLC","OrderDate":"12/27/2016","TotalPayment":"$85182.60","Status":4,"Type":1},{"OrderID":"98132-186","ShipCountry":"PA","ShipAddress":"9 Dunning Parkway","ShipName":"Runolfsdottir, Gaylord and Wisoky","OrderDate":"7/29/2017","TotalPayment":"$1192351.31","Status":3,"Type":3},{"OrderID":"55316-678","ShipCountry":"SE","ShipAddress":"3 Mesta Junction","ShipName":"Reynolds-Swaniawski","OrderDate":"1/23/2017","TotalPayment":"$267559.10","Status":6,"Type":3},{"OrderID":"49884-123","ShipCountry":"BR","ShipAddress":"81810 Westerfield Street","ShipName":"Klein Inc","OrderDate":"10/24/2017","TotalPayment":"$13921.52","Status":4,"Type":2},{"OrderID":"0037-0431","ShipCountry":"AU","ShipAddress":"25716 Morrow Point","ShipName":"Lueilwitz, Macejkovic and Ritchie","OrderDate":"2/18/2017","TotalPayment":"$467822.35","Status":6,"Type":1},{"OrderID":"36987-1724","ShipCountry":"MA","ShipAddress":"92725 Blackbird Way","ShipName":"Kuhlman-Williamson","OrderDate":"8/30/2016","TotalPayment":"$1167161.13","Status":2,"Type":2}]},\n' +
        '{"RecordID":63,"FirstName":"Beatrice","LastName":"Levington","Company":"Quimba","Email":"blevington1q@bloomberg.com","Phone":"847-783-6717","Status":5,"Type":1,"Orders":[{"OrderID":"65862-119","ShipCountry":"HR","ShipAddress":"9850 Luster Hill","ShipName":"Olson-Harber","OrderDate":"10/2/2017","TotalPayment":"$880938.07","Status":4,"Type":1},{"OrderID":"54973-3156","ShipCountry":"RU","ShipAddress":"118 Shoshone Drive","ShipName":"Bernhard, Reilly and Kirlin","OrderDate":"7/26/2017","TotalPayment":"$167984.52","Status":1,"Type":2},{"OrderID":"43353-160","ShipCountry":"CO","ShipAddress":"097 Tomscot Parkway","ShipName":"Stoltenberg, Wolff and Rodriguez","OrderDate":"2/6/2017","TotalPayment":"$766687.92","Status":3,"Type":2},{"OrderID":"0409-2347","ShipCountry":"PT","ShipAddress":"4 Sheridan Alley","ShipName":"Rolfson, Funk and Grimes","OrderDate":"1/22/2016","TotalPayment":"$848597.32","Status":1,"Type":1},{"OrderID":"44523-535","ShipCountry":"CM","ShipAddress":"6807 Raven Plaza","ShipName":"McClure Group","OrderDate":"4/19/2017","TotalPayment":"$385078.10","Status":1,"Type":3},{"OrderID":"62011-0174","ShipCountry":"NO","ShipAddress":"8 Arizona Street","ShipName":"Prohaska Inc","OrderDate":"2/3/2017","TotalPayment":"$1030678.60","Status":3,"Type":3},{"OrderID":"10742-8142","ShipCountry":"BR","ShipAddress":"1 Dixon Court","ShipName":"Gerlach, Bruen and Tillman","OrderDate":"6/4/2017","TotalPayment":"$480874.20","Status":2,"Type":2},{"OrderID":"58411-175","ShipCountry":"CN","ShipAddress":"82260 Dapin Pass","ShipName":"Franecki-Murphy","OrderDate":"8/16/2016","TotalPayment":"$752558.44","Status":5,"Type":1},{"OrderID":"65841-635","ShipCountry":"BR","ShipAddress":"87 Petterle Terrace","ShipName":"Reichert LLC","OrderDate":"9/7/2016","TotalPayment":"$78280.43","Status":4,"Type":3}]},\n' +
        '{"RecordID":64,"FirstName":"Livvie","LastName":"Rigney","Company":"Voonyx","Email":"lrigney1r@buzzfeed.com","Phone":"630-904-0637","Status":2,"Type":3,"Orders":[{"OrderID":"60429-578","ShipCountry":"CN","ShipAddress":"50661 Grayhawk Junction","ShipName":"Cruickshank and Sons","OrderDate":"10/22/2016","TotalPayment":"$251999.82","Status":1,"Type":2},{"OrderID":"0143-9803","ShipCountry":"AR","ShipAddress":"78 Delladonna Lane","ShipName":"Jacobi-Hammes","OrderDate":"10/19/2016","TotalPayment":"$837678.69","Status":2,"Type":3},{"OrderID":"49999-034","ShipCountry":"BA","ShipAddress":"07889 Basil Alley","ShipName":"O\'Reilly, Ankunding and Schulist","OrderDate":"11/20/2017","TotalPayment":"$893967.72","Status":2,"Type":3},{"OrderID":"11822-6201","ShipCountry":"BY","ShipAddress":"596 Continental Trail","ShipName":"Langosh and Sons","OrderDate":"5/18/2017","TotalPayment":"$1019845.13","Status":4,"Type":3},{"OrderID":"49288-0719","ShipCountry":"ID","ShipAddress":"1 Kim Place","ShipName":"Runte-Trantow","OrderDate":"2/25/2017","TotalPayment":"$1095949.30","Status":4,"Type":3},{"OrderID":"62045-6333","ShipCountry":"BR","ShipAddress":"3092 Nova Place","ShipName":"Kohler-Greenfelder","OrderDate":"11/9/2016","TotalPayment":"$1138141.36","Status":2,"Type":3},{"OrderID":"53208-475","ShipCountry":"AO","ShipAddress":"10718 Bluestem Circle","ShipName":"Schuster-Koss","OrderDate":"5/10/2017","TotalPayment":"$262491.70","Status":4,"Type":3},{"OrderID":"68258-6041","ShipCountry":"PH","ShipAddress":"1 Mockingbird Street","ShipName":"Runte Inc","OrderDate":"12/30/2016","TotalPayment":"$276676.63","Status":3,"Type":2},{"OrderID":"13537-047","ShipCountry":"PL","ShipAddress":"70922 Jenna Park","ShipName":"Schamberger, Reichel and Kemmer","OrderDate":"12/11/2016","TotalPayment":"$865466.93","Status":1,"Type":3}]},\n' +
        '{"RecordID":65,"FirstName":"Alaine","LastName":"Crudge","Company":"Skaboo","Email":"acrudge1s@cbc.ca","Phone":"951-467-5400","Status":6,"Type":3,"Orders":[{"OrderID":"50436-6103","ShipCountry":"PT","ShipAddress":"84698 Huxley Place","ShipName":"Connelly and Sons","OrderDate":"11/20/2017","TotalPayment":"$645329.23","Status":5,"Type":3},{"OrderID":"43611-006","ShipCountry":"UA","ShipAddress":"80 Oneill Junction","ShipName":"Paucek-Armstrong","OrderDate":"8/12/2016","TotalPayment":"$992644.29","Status":5,"Type":1},{"OrderID":"55316-267","ShipCountry":"JP","ShipAddress":"69 Colorado Alley","ShipName":"Deckow LLC","OrderDate":"12/28/2017","TotalPayment":"$193438.17","Status":3,"Type":3},{"OrderID":"52125-433","ShipCountry":"ID","ShipAddress":"224 Dixon Drive","ShipName":"Koelpin Inc","OrderDate":"2/5/2016","TotalPayment":"$871915.33","Status":1,"Type":3},{"OrderID":"48951-3042","ShipCountry":"PT","ShipAddress":"2 Lillian Alley","ShipName":"Wiza-Jaskolski","OrderDate":"2/27/2016","TotalPayment":"$124340.47","Status":3,"Type":1},{"OrderID":"43063-051","ShipCountry":"PT","ShipAddress":"53 Reindahl Drive","ShipName":"Mertz, Sipes and Quigley","OrderDate":"7/25/2016","TotalPayment":"$59067.64","Status":3,"Type":1},{"OrderID":"54575-220","ShipCountry":"PT","ShipAddress":"421 Gale Center","ShipName":"Kutch-Haag","OrderDate":"8/28/2016","TotalPayment":"$662562.15","Status":3,"Type":3},{"OrderID":"55670-133","ShipCountry":"PH","ShipAddress":"72 Dawn Way","ShipName":"Kemmer LLC","OrderDate":"2/23/2017","TotalPayment":"$109397.00","Status":1,"Type":1},{"OrderID":"0228-3091","ShipCountry":"CN","ShipAddress":"7 Cherokee Lane","ShipName":"Torp and Sons","OrderDate":"7/19/2017","TotalPayment":"$1001560.56","Status":1,"Type":1},{"OrderID":"41525-6001","ShipCountry":"FR","ShipAddress":"3691 Sheridan Way","ShipName":"Johnston-Kemmer","OrderDate":"12/3/2016","TotalPayment":"$879369.23","Status":4,"Type":1},{"OrderID":"20276-158","ShipCountry":"CN","ShipAddress":"0437 Luster Pass","ShipName":"Farrell, Abbott and Hirthe","OrderDate":"10/22/2016","TotalPayment":"$533042.11","Status":2,"Type":1},{"OrderID":"25000-117","ShipCountry":"CO","ShipAddress":"673 Oxford Park","ShipName":"Shields-Beatty","OrderDate":"6/12/2016","TotalPayment":"$796482.24","Status":2,"Type":1},{"OrderID":"55154-5471","ShipCountry":"SV","ShipAddress":"478 Oneill Way","ShipName":"Spinka and Sons","OrderDate":"11/1/2017","TotalPayment":"$265540.20","Status":4,"Type":2},{"OrderID":"51346-101","ShipCountry":"RU","ShipAddress":"64 Susan Plaza","ShipName":"Satterfield, Wolf and Hettinger","OrderDate":"10/24/2016","TotalPayment":"$475446.40","Status":4,"Type":2},{"OrderID":"36987-1138","ShipCountry":"JP","ShipAddress":"1043 Heath Alley","ShipName":"Mitchell LLC","OrderDate":"8/28/2016","TotalPayment":"$970369.46","Status":2,"Type":3}]},\n' +
        '{"RecordID":66,"FirstName":"Winn","LastName":"Withrington","Company":"Photofeed","Email":"wwithrington1t@cmu.edu","Phone":"224-763-7882","Status":3,"Type":1,"Orders":[{"OrderID":"53499-5159","ShipCountry":"VE","ShipAddress":"62149 Talisman Crossing","ShipName":"Turcotte-Purdy","OrderDate":"11/20/2017","TotalPayment":"$42099.71","Status":5,"Type":3},{"OrderID":"0641-6084","ShipCountry":"ID","ShipAddress":"545 Cody Drive","ShipName":"Haley Group","OrderDate":"9/7/2017","TotalPayment":"$754416.43","Status":6,"Type":3},{"OrderID":"62756-555","ShipCountry":"RU","ShipAddress":"54099 Milwaukee Drive","ShipName":"Sipes, Schmeler and Marvin","OrderDate":"1/8/2016","TotalPayment":"$150675.46","Status":1,"Type":1},{"OrderID":"59148-070","ShipCountry":"ID","ShipAddress":"57 Towne Avenue","ShipName":"Predovic Inc","OrderDate":"5/30/2016","TotalPayment":"$715608.00","Status":2,"Type":2},{"OrderID":"53187-199","ShipCountry":"FR","ShipAddress":"642 Gateway Road","ShipName":"Krajcik, Dach and Huels","OrderDate":"7/29/2016","TotalPayment":"$451757.91","Status":2,"Type":3},{"OrderID":"36800-949","ShipCountry":"CZ","ShipAddress":"01 Bonner Avenue","ShipName":"Turcotte-Franecki","OrderDate":"7/28/2016","TotalPayment":"$977925.68","Status":4,"Type":2},{"OrderID":"42787-101","ShipCountry":"BG","ShipAddress":"26 Bellgrove Terrace","ShipName":"Grimes Inc","OrderDate":"3/5/2016","TotalPayment":"$77092.70","Status":5,"Type":2},{"OrderID":"68703-026","ShipCountry":"US","ShipAddress":"104 Spohn Plaza","ShipName":"Bode-Wilderman","OrderDate":"11/19/2016","TotalPayment":"$328709.01","Status":3,"Type":2},{"OrderID":"0472-0381","ShipCountry":"BR","ShipAddress":"47771 Algoma Parkway","ShipName":"Hegmann-McClure","OrderDate":"9/21/2017","TotalPayment":"$1150766.62","Status":3,"Type":1},{"OrderID":"30698-032","ShipCountry":"BR","ShipAddress":"7523 Buell Street","ShipName":"Stroman, Runolfsson and Daugherty","OrderDate":"5/11/2016","TotalPayment":"$787151.00","Status":2,"Type":3},{"OrderID":"55910-702","ShipCountry":"AL","ShipAddress":"976 Sundown Street","ShipName":"Moen Inc","OrderDate":"10/9/2017","TotalPayment":"$955803.97","Status":6,"Type":2},{"OrderID":"54868-5907","ShipCountry":"CN","ShipAddress":"1 Hansons Circle","ShipName":"Block-Paucek","OrderDate":"2/13/2017","TotalPayment":"$674410.39","Status":1,"Type":1},{"OrderID":"0268-0173","ShipCountry":"CU","ShipAddress":"229 Clemons Hill","ShipName":"Zulauf and Sons","OrderDate":"4/7/2016","TotalPayment":"$452933.31","Status":6,"Type":2}]},\n' +
        '{"RecordID":67,"FirstName":"Goober","LastName":"Humber","Company":"Latz","Email":"ghumber1u@wiley.com","Phone":"677-646-7765","Status":1,"Type":2,"Orders":[{"OrderID":"55154-5706","ShipCountry":"CN","ShipAddress":"6 Lillian Terrace","ShipName":"Vandervort-Schowalter","OrderDate":"4/28/2017","TotalPayment":"$1166134.32","Status":2,"Type":2},{"OrderID":"65862-525","ShipCountry":"PH","ShipAddress":"06707 Donald Hill","ShipName":"Yundt Group","OrderDate":"7/22/2017","TotalPayment":"$840740.59","Status":3,"Type":3},{"OrderID":"53187-480","ShipCountry":"CN","ShipAddress":"7819 Dawn Plaza","ShipName":"Stracke Group","OrderDate":"11/6/2017","TotalPayment":"$1194013.06","Status":3,"Type":3},{"OrderID":"49035-555","ShipCountry":"MX","ShipAddress":"8893 Forest Way","ShipName":"Abshire-Leannon","OrderDate":"4/26/2017","TotalPayment":"$371421.48","Status":1,"Type":3},{"OrderID":"53808-0396","ShipCountry":"CU","ShipAddress":"539 Waywood Drive","ShipName":"Hills-Braun","OrderDate":"6/30/2017","TotalPayment":"$719684.41","Status":1,"Type":2},{"OrderID":"50390-703","ShipCountry":"ID","ShipAddress":"333 Mccormick Lane","ShipName":"Mante and Sons","OrderDate":"2/2/2016","TotalPayment":"$1056075.81","Status":3,"Type":1},{"OrderID":"66949-339","ShipCountry":"MX","ShipAddress":"89929 Crest Line Street","ShipName":"Schuppe-Littel","OrderDate":"12/7/2016","TotalPayment":"$1179863.92","Status":6,"Type":3},{"OrderID":"53208-447","ShipCountry":"KZ","ShipAddress":"1582 Luster Point","ShipName":"Krajcik-Cassin","OrderDate":"9/10/2017","TotalPayment":"$455342.76","Status":3,"Type":1},{"OrderID":"43063-190","ShipCountry":"BR","ShipAddress":"11191 Dwight Trail","ShipName":"Ortiz, Sauer and Kirlin","OrderDate":"3/3/2017","TotalPayment":"$624489.75","Status":6,"Type":2},{"OrderID":"0067-4000","ShipCountry":"PT","ShipAddress":"03918 Rigney Terrace","ShipName":"Sporer, Muller and Lind","OrderDate":"6/22/2017","TotalPayment":"$936303.83","Status":1,"Type":3},{"OrderID":"42926-120","ShipCountry":"PT","ShipAddress":"68112 Golf Course Crossing","ShipName":"Harris-Nicolas","OrderDate":"4/6/2017","TotalPayment":"$934323.57","Status":1,"Type":1},{"OrderID":"42002-616","ShipCountry":"PL","ShipAddress":"080 Green Ridge Pass","ShipName":"Kihn-Hintz","OrderDate":"2/3/2017","TotalPayment":"$1034113.34","Status":2,"Type":3},{"OrderID":"57955-5151","ShipCountry":"PH","ShipAddress":"29992 Brentwood Court","ShipName":"Bernier, McGlynn and Zboncak","OrderDate":"10/20/2017","TotalPayment":"$86775.26","Status":6,"Type":3},{"OrderID":"63187-017","ShipCountry":"PH","ShipAddress":"39 Eagan Avenue","ShipName":"Corwin, Bins and Lind","OrderDate":"2/20/2016","TotalPayment":"$1007066.30","Status":5,"Type":1},{"OrderID":"36987-3271","ShipCountry":"VN","ShipAddress":"0 4th Alley","ShipName":"Torphy Group","OrderDate":"5/12/2016","TotalPayment":"$541551.65","Status":4,"Type":2},{"OrderID":"0591-3292","ShipCountry":"CO","ShipAddress":"52048 Anthes Plaza","ShipName":"Jacobi, Hahn and Effertz","OrderDate":"11/5/2017","TotalPayment":"$982824.91","Status":6,"Type":2},{"OrderID":"59535-8901","ShipCountry":"FR","ShipAddress":"6 Sommers Point","ShipName":"O\'Connell-Block","OrderDate":"6/23/2017","TotalPayment":"$787012.80","Status":2,"Type":3},{"OrderID":"68788-9077","ShipCountry":"CN","ShipAddress":"37525 Dunning Street","ShipName":"D\'Amore, D\'Amore and Boyer","OrderDate":"2/13/2016","TotalPayment":"$309977.50","Status":5,"Type":3}]},\n' +
        '{"RecordID":68,"FirstName":"Deana","LastName":"Broxup","Company":"Leenti","Email":"dbroxup1v@cafepress.com","Phone":"548-638-4115","Status":1,"Type":3,"Orders":[{"OrderID":"67777-404","ShipCountry":"CN","ShipAddress":"72898 Portage Road","ShipName":"Kohler and Sons","OrderDate":"4/21/2016","TotalPayment":"$1149407.29","Status":4,"Type":3},{"OrderID":"49884-210","ShipCountry":"BR","ShipAddress":"011 Moose Place","ShipName":"Renner-Klein","OrderDate":"9/30/2017","TotalPayment":"$495209.66","Status":1,"Type":3},{"OrderID":"48951-3116","ShipCountry":"GA","ShipAddress":"29 Londonderry Center","ShipName":"Weber, Olson and Ward","OrderDate":"9/18/2016","TotalPayment":"$1005400.67","Status":3,"Type":1},{"OrderID":"51079-152","ShipCountry":"ID","ShipAddress":"237 Grim Place","ShipName":"Williamson Inc","OrderDate":"4/19/2017","TotalPayment":"$343445.06","Status":6,"Type":2},{"OrderID":"60505-0253","ShipCountry":"MM","ShipAddress":"68 Delaware Point","ShipName":"Boyer Inc","OrderDate":"2/12/2016","TotalPayment":"$408136.08","Status":6,"Type":1},{"OrderID":"50436-7073","ShipCountry":"CN","ShipAddress":"3359 Kedzie Terrace","ShipName":"Mills-Aufderhar","OrderDate":"7/30/2016","TotalPayment":"$1028889.21","Status":5,"Type":2},{"OrderID":"43455-0008","ShipCountry":"SA","ShipAddress":"01 Duke Plaza","ShipName":"Morissette, Nikolaus and Ernser","OrderDate":"8/28/2016","TotalPayment":"$645471.44","Status":2,"Type":1},{"OrderID":"36987-2950","ShipCountry":"PL","ShipAddress":"650 Clarendon Center","ShipName":"Lind LLC","OrderDate":"3/23/2016","TotalPayment":"$362412.69","Status":5,"Type":1},{"OrderID":"52533-060","ShipCountry":"ZA","ShipAddress":"864 Sugar Pass","ShipName":"Anderson-Waelchi","OrderDate":"11/14/2016","TotalPayment":"$201405.21","Status":1,"Type":1},{"OrderID":"49349-550","ShipCountry":"CN","ShipAddress":"8840 Nevada Way","ShipName":"Willms-Kiehn","OrderDate":"2/14/2016","TotalPayment":"$343712.60","Status":4,"Type":3},{"OrderID":"55910-664","ShipCountry":"CN","ShipAddress":"3443 Fairfield Plaza","ShipName":"Wilderman LLC","OrderDate":"7/3/2016","TotalPayment":"$517636.86","Status":2,"Type":1},{"OrderID":"0093-7336","ShipCountry":"CN","ShipAddress":"486 Hoard Hill","ShipName":"Stanton, Bogan and Zemlak","OrderDate":"1/8/2017","TotalPayment":"$241932.54","Status":4,"Type":2},{"OrderID":"33342-016","ShipCountry":"XK","ShipAddress":"3038 Meadow Valley Circle","ShipName":"Botsford, Goldner and Emmerich","OrderDate":"11/5/2016","TotalPayment":"$1075402.45","Status":6,"Type":2},{"OrderID":"0574-0426","ShipCountry":"SY","ShipAddress":"249 Hermina Court","ShipName":"Prohaska, Schumm and Douglas","OrderDate":"1/7/2017","TotalPayment":"$205824.73","Status":6,"Type":1}]},\n' +
        '{"RecordID":69,"FirstName":"Bernhard","LastName":"Cane","Company":"Trilia","Email":"bcane1w@etsy.com","Phone":"971-738-0822","Status":3,"Type":2,"Orders":[{"OrderID":"36987-1559","ShipCountry":"ID","ShipAddress":"33973 Warbler Circle","ShipName":"Auer-Nader","OrderDate":"8/12/2017","TotalPayment":"$678877.70","Status":1,"Type":1},{"OrderID":"60429-030","ShipCountry":"VN","ShipAddress":"839 Forest Dale Parkway","ShipName":"Hermann, Lubowitz and Kuhic","OrderDate":"4/23/2016","TotalPayment":"$57183.41","Status":2,"Type":3},{"OrderID":"55301-612","ShipCountry":"CN","ShipAddress":"32006 Maryland Place","ShipName":"Casper LLC","OrderDate":"2/21/2016","TotalPayment":"$303638.63","Status":3,"Type":2},{"OrderID":"48951-6028","ShipCountry":"PA","ShipAddress":"1857 Susan Trail","ShipName":"Schuster Inc","OrderDate":"9/29/2016","TotalPayment":"$97080.99","Status":4,"Type":3},{"OrderID":"11523-7356","ShipCountry":"CO","ShipAddress":"25 Carioca Street","ShipName":"Lesch-Torp","OrderDate":"10/18/2017","TotalPayment":"$229844.67","Status":1,"Type":3},{"OrderID":"17478-209","ShipCountry":"RU","ShipAddress":"62 3rd Court","ShipName":"Gaylord-Wehner","OrderDate":"5/20/2016","TotalPayment":"$740851.02","Status":5,"Type":1},{"OrderID":"62742-4030","ShipCountry":"BR","ShipAddress":"39195 Loeprich Way","ShipName":"Wiza-Waters","OrderDate":"8/7/2017","TotalPayment":"$845334.28","Status":5,"Type":1},{"OrderID":"54868-6326","ShipCountry":"AF","ShipAddress":"500 Village Green Plaza","ShipName":"Cormier, Huels and Fritsch","OrderDate":"4/2/2017","TotalPayment":"$199971.24","Status":3,"Type":2},{"OrderID":"53942-503","ShipCountry":"CN","ShipAddress":"94 Eagle Crest Terrace","ShipName":"Feeney Inc","OrderDate":"3/27/2016","TotalPayment":"$565124.63","Status":2,"Type":2},{"OrderID":"61010-8600","ShipCountry":"KP","ShipAddress":"9154 Holmberg Road","ShipName":"Nicolas-Robel","OrderDate":"6/30/2016","TotalPayment":"$870122.32","Status":2,"Type":1},{"OrderID":"76119-1325","ShipCountry":"DO","ShipAddress":"8 Pepper Wood Street","ShipName":"Lueilwitz, Wyman and Jerde","OrderDate":"12/7/2016","TotalPayment":"$938699.20","Status":2,"Type":3},{"OrderID":"0093-6137","ShipCountry":"PH","ShipAddress":"757 Toban Parkway","ShipName":"Kuphal-Weber","OrderDate":"12/6/2017","TotalPayment":"$401118.05","Status":1,"Type":1},{"OrderID":"55714-2259","ShipCountry":"BY","ShipAddress":"5 Everett Lane","ShipName":"Lebsack, Lubowitz and Glover","OrderDate":"11/9/2017","TotalPayment":"$115441.60","Status":2,"Type":1},{"OrderID":"53808-0852","ShipCountry":"JP","ShipAddress":"83305 Glacier Hill Parkway","ShipName":"Witting, Bauch and Balistreri","OrderDate":"1/30/2016","TotalPayment":"$339321.27","Status":5,"Type":1},{"OrderID":"57344-113","ShipCountry":"CN","ShipAddress":"725 Glacier Hill Point","ShipName":"Stiedemann, Bauch and Jast","OrderDate":"1/11/2016","TotalPayment":"$704911.03","Status":3,"Type":2},{"OrderID":"60505-2640","ShipCountry":"FR","ShipAddress":"1066 Canary Pass","ShipName":"Mohr, Hodkiewicz and Koelpin","OrderDate":"7/30/2016","TotalPayment":"$304238.67","Status":4,"Type":1}]},\n' +
        '{"RecordID":70,"FirstName":"Korella","LastName":"Winterborne","Company":"Yamia","Email":"kwinterborne1x@mapquest.com","Phone":"949-514-4136","Status":5,"Type":1,"Orders":[{"OrderID":"0264-7885","ShipCountry":"ID","ShipAddress":"82750 Brickson Park Plaza","ShipName":"Hermann, Harber and Schneider","OrderDate":"10/5/2017","TotalPayment":"$279462.97","Status":2,"Type":1},{"OrderID":"21695-318","ShipCountry":"CN","ShipAddress":"11 Northview Street","ShipName":"Von LLC","OrderDate":"12/2/2017","TotalPayment":"$222925.54","Status":4,"Type":1},{"OrderID":"55289-612","ShipCountry":"CA","ShipAddress":"0 Novick Street","ShipName":"Erdman-Mosciski","OrderDate":"5/21/2016","TotalPayment":"$900381.48","Status":2,"Type":2},{"OrderID":"0187-2097","ShipCountry":"LK","ShipAddress":"68 Monument Terrace","ShipName":"Prohaska-Mitchell","OrderDate":"9/12/2016","TotalPayment":"$406769.91","Status":3,"Type":3},{"OrderID":"62011-0144","ShipCountry":"BR","ShipAddress":"35223 Vernon Crossing","ShipName":"Heidenreich-Mohr","OrderDate":"2/8/2017","TotalPayment":"$829510.20","Status":5,"Type":1},{"OrderID":"61715-039","ShipCountry":"GR","ShipAddress":"005 Chinook Road","ShipName":"Wehner-Gusikowski","OrderDate":"3/6/2016","TotalPayment":"$957153.57","Status":4,"Type":1},{"OrderID":"50382-003","ShipCountry":"AR","ShipAddress":"9 Carioca Court","ShipName":"Breitenberg, Little and Predovic","OrderDate":"4/8/2017","TotalPayment":"$203981.90","Status":3,"Type":1},{"OrderID":"33261-788","ShipCountry":"HN","ShipAddress":"7214 Menomonie Parkway","ShipName":"Lehner Inc","OrderDate":"7/27/2016","TotalPayment":"$127002.75","Status":4,"Type":1},{"OrderID":"0173-0602","ShipCountry":"CZ","ShipAddress":"4879 Springs Hill","ShipName":"Welch Group","OrderDate":"2/15/2016","TotalPayment":"$394763.67","Status":1,"Type":1},{"OrderID":"10096-0291","ShipCountry":"PL","ShipAddress":"7 Coleman Drive","ShipName":"Leannon-Bartell","OrderDate":"10/22/2016","TotalPayment":"$1049314.52","Status":4,"Type":3}]},\n' +
        '{"RecordID":71,"FirstName":"Eustacia","LastName":"Gaenor","Company":"Meevee","Email":"egaenor1y@europa.eu","Phone":"240-169-3315","Status":2,"Type":2,"Orders":[{"OrderID":"68151-1294","ShipCountry":"RU","ShipAddress":"4509 Donald Terrace","ShipName":"Little, Abernathy and Jacobs","OrderDate":"11/9/2016","TotalPayment":"$222587.27","Status":6,"Type":1},{"OrderID":"63629-3205","ShipCountry":"CN","ShipAddress":"273 Karstens Lane","ShipName":"Emmerich, Yundt and Kohler","OrderDate":"1/21/2017","TotalPayment":"$637138.35","Status":5,"Type":2},{"OrderID":"14060-006","ShipCountry":"BA","ShipAddress":"12 Ludington Place","ShipName":"Rohan Group","OrderDate":"3/21/2016","TotalPayment":"$1049336.73","Status":6,"Type":2},{"OrderID":"29500-8010","ShipCountry":"PL","ShipAddress":"650 Rigney Pass","ShipName":"Rutherford and Sons","OrderDate":"6/17/2017","TotalPayment":"$353186.21","Status":5,"Type":3},{"OrderID":"68016-137","ShipCountry":"RS","ShipAddress":"71 Leroy Crossing","ShipName":"Von-Dickens","OrderDate":"1/16/2017","TotalPayment":"$1150344.51","Status":2,"Type":3},{"OrderID":"43063-481","ShipCountry":"PH","ShipAddress":"9 Northwestern Pass","ShipName":"Welch-O\'Conner","OrderDate":"12/16/2017","TotalPayment":"$490108.31","Status":1,"Type":1},{"OrderID":"49873-302","ShipCountry":"NE","ShipAddress":"50 Farragut Street","ShipName":"Gorczany Inc","OrderDate":"12/22/2017","TotalPayment":"$904431.71","Status":2,"Type":2},{"OrderID":"0832-1082","ShipCountry":"NZ","ShipAddress":"5 Goodland Road","ShipName":"Murazik LLC","OrderDate":"10/3/2017","TotalPayment":"$268357.60","Status":5,"Type":3},{"OrderID":"50580-679","ShipCountry":"PH","ShipAddress":"58 Knutson Plaza","ShipName":"Nicolas, Streich and Miller","OrderDate":"1/6/2017","TotalPayment":"$741583.70","Status":6,"Type":3},{"OrderID":"30142-839","ShipCountry":"BR","ShipAddress":"853 Twin Pines Circle","ShipName":"Murphy Inc","OrderDate":"12/21/2017","TotalPayment":"$85054.02","Status":6,"Type":2},{"OrderID":"62296-0036","ShipCountry":"GR","ShipAddress":"830 Transport Street","ShipName":"Kassulke and Sons","OrderDate":"2/23/2016","TotalPayment":"$142674.89","Status":6,"Type":3},{"OrderID":"37808-308","ShipCountry":"CN","ShipAddress":"15 Southridge Trail","ShipName":"Little-Vandervort","OrderDate":"3/19/2017","TotalPayment":"$1059783.68","Status":1,"Type":2},{"OrderID":"42982-4441","ShipCountry":"RU","ShipAddress":"247 Summerview Park","ShipName":"Romaguera, Ondricka and Will","OrderDate":"6/14/2016","TotalPayment":"$447605.64","Status":2,"Type":1},{"OrderID":"53157-120","ShipCountry":"EC","ShipAddress":"1 Becker Circle","ShipName":"Keeling Inc","OrderDate":"1/22/2017","TotalPayment":"$48283.93","Status":4,"Type":2}]},\n' +
        '{"RecordID":72,"FirstName":"Una","LastName":"Husbands","Company":"Realfire","Email":"uhusbands1z@phoca.cz","Phone":"505-785-4296","Status":4,"Type":1,"Orders":[{"OrderID":"0904-6331","ShipCountry":"CN","ShipAddress":"0 Dovetail Center","ShipName":"Bahringer Inc","OrderDate":"1/13/2017","TotalPayment":"$347336.72","Status":6,"Type":2},{"OrderID":"37012-667","ShipCountry":"ID","ShipAddress":"58 Hayes Road","ShipName":"Schimmel, Schimmel and Douglas","OrderDate":"5/11/2016","TotalPayment":"$511564.26","Status":2,"Type":2},{"OrderID":"63940-611","ShipCountry":"RS","ShipAddress":"05 Sullivan Hill","ShipName":"MacGyver-Bernier","OrderDate":"4/11/2017","TotalPayment":"$139802.18","Status":3,"Type":2},{"OrderID":"0268-0802","ShipCountry":"PH","ShipAddress":"052 Blue Bill Park Pass","ShipName":"Schimmel and Sons","OrderDate":"10/9/2016","TotalPayment":"$169528.13","Status":4,"Type":1},{"OrderID":"0006-3941","ShipCountry":"KY","ShipAddress":"9696 Blue Bill Park Drive","ShipName":"Cummerata-Schmitt","OrderDate":"3/21/2016","TotalPayment":"$622927.79","Status":4,"Type":2},{"OrderID":"68151-2946","ShipCountry":"HN","ShipAddress":"9847 Holy Cross Park","ShipName":"Okuneva, Wintheiser and Hayes","OrderDate":"1/13/2016","TotalPayment":"$28781.40","Status":6,"Type":2},{"OrderID":"50458-551","ShipCountry":"SI","ShipAddress":"86 Blaine Park","ShipName":"Langworth-Fisher","OrderDate":"8/28/2016","TotalPayment":"$1188173.44","Status":5,"Type":2},{"OrderID":"48951-8232","ShipCountry":"BR","ShipAddress":"29800 Barby Street","ShipName":"Tillman-Schowalter","OrderDate":"2/7/2017","TotalPayment":"$1104584.72","Status":5,"Type":3},{"OrderID":"13537-166","ShipCountry":"BD","ShipAddress":"363 Bartelt Drive","ShipName":"Rempel LLC","OrderDate":"8/2/2017","TotalPayment":"$838386.65","Status":6,"Type":1},{"OrderID":"65862-134","ShipCountry":"ID","ShipAddress":"59 West Junction","ShipName":"Jenkins, MacGyver and Hane","OrderDate":"12/2/2016","TotalPayment":"$140971.92","Status":1,"Type":3},{"OrderID":"49288-0354","ShipCountry":"ID","ShipAddress":"49 Merrick Place","ShipName":"Dickinson-Hermann","OrderDate":"8/25/2017","TotalPayment":"$580465.12","Status":1,"Type":3},{"OrderID":"47335-004","ShipCountry":"SY","ShipAddress":"83 Meadow Valley Crossing","ShipName":"Brekke-Dicki","OrderDate":"9/13/2016","TotalPayment":"$1019550.38","Status":4,"Type":1},{"OrderID":"0113-0857","ShipCountry":"CN","ShipAddress":"0367 Moose Crossing","ShipName":"Grady Group","OrderDate":"3/29/2016","TotalPayment":"$1062930.64","Status":4,"Type":3}]},\n' +
        '{"RecordID":73,"FirstName":"Moria","LastName":"Broschke","Company":"Cogidoo","Email":"mbroschke20@i2i.jp","Phone":"804-717-8125","Status":1,"Type":2,"Orders":[{"OrderID":"54868-5821","ShipCountry":"ID","ShipAddress":"6 Reindahl Parkway","ShipName":"Ebert, Hilpert and Stark","OrderDate":"10/12/2016","TotalPayment":"$448304.63","Status":6,"Type":2},{"OrderID":"54569-2095","ShipCountry":"CN","ShipAddress":"79 Packers Terrace","ShipName":"Schoen, Treutel and Schaden","OrderDate":"11/17/2017","TotalPayment":"$852815.93","Status":3,"Type":3},{"OrderID":"37000-756","ShipCountry":"US","ShipAddress":"191 Merrick Crossing","ShipName":"Raynor, Torphy and D\'Amore","OrderDate":"8/11/2017","TotalPayment":"$146132.63","Status":2,"Type":2},{"OrderID":"0135-0195","ShipCountry":"PE","ShipAddress":"8360 Springview Plaza","ShipName":"Langworth-Crist","OrderDate":"11/13/2016","TotalPayment":"$469787.48","Status":1,"Type":1},{"OrderID":"75857-1104","ShipCountry":"CN","ShipAddress":"5 Westridge Avenue","ShipName":"McClure-Rolfson","OrderDate":"4/23/2016","TotalPayment":"$1163537.49","Status":2,"Type":2},{"OrderID":"55648-374","ShipCountry":"VN","ShipAddress":"2 Larry Circle","ShipName":"Kutch, Greenholt and Keeling","OrderDate":"5/16/2016","TotalPayment":"$1115192.06","Status":2,"Type":3},{"OrderID":"68387-531","ShipCountry":"ID","ShipAddress":"787 Vera Trail","ShipName":"Jones-Kozey","OrderDate":"7/25/2016","TotalPayment":"$188989.38","Status":4,"Type":1},{"OrderID":"53808-0665","ShipCountry":"US","ShipAddress":"340 Thackeray Terrace","ShipName":"Tromp, Schmitt and Bradtke","OrderDate":"9/29/2017","TotalPayment":"$473215.90","Status":6,"Type":3}]},\n' +
        '{"RecordID":74,"FirstName":"Eb","LastName":"Easdon","Company":"Jabbercube","Email":"eeasdon21@walmart.com","Phone":"313-866-7485","Status":2,"Type":3,"Orders":[{"OrderID":"66613-8148","ShipCountry":"TH","ShipAddress":"2 Pepper Wood Junction","ShipName":"Treutel-Ondricka","OrderDate":"7/25/2016","TotalPayment":"$1053146.25","Status":5,"Type":2},{"OrderID":"42254-005","ShipCountry":"CA","ShipAddress":"69 Miller Point","ShipName":"Jones, Fritsch and Konopelski","OrderDate":"9/11/2017","TotalPayment":"$987505.47","Status":2,"Type":2},{"OrderID":"59579-004","ShipCountry":"BR","ShipAddress":"2 Carey Road","ShipName":"Bruen Inc","OrderDate":"5/26/2016","TotalPayment":"$495090.65","Status":4,"Type":3},{"OrderID":"53942-311","ShipCountry":"AS","ShipAddress":"39915 Grayhawk Court","ShipName":"Dicki-Rath","OrderDate":"4/22/2016","TotalPayment":"$491591.60","Status":6,"Type":2},{"OrderID":"55111-126","ShipCountry":"NL","ShipAddress":"642 Susan Circle","ShipName":"Towne-Bailey","OrderDate":"8/11/2017","TotalPayment":"$1137269.20","Status":1,"Type":3},{"OrderID":"35356-477","ShipCountry":"CN","ShipAddress":"26 Blue Bill Park Court","ShipName":"Pagac-Rolfson","OrderDate":"2/13/2017","TotalPayment":"$795657.78","Status":5,"Type":2},{"OrderID":"60505-0003","ShipCountry":"MY","ShipAddress":"53 Jenna Point","ShipName":"Schimmel, Kovacek and Huels","OrderDate":"9/4/2016","TotalPayment":"$1087904.40","Status":5,"Type":2},{"OrderID":"62011-0003","ShipCountry":"ID","ShipAddress":"6149 Dahle Terrace","ShipName":"Corkery-Aufderhar","OrderDate":"3/9/2017","TotalPayment":"$323700.81","Status":2,"Type":3},{"OrderID":"0615-5620","ShipCountry":"TZ","ShipAddress":"4943 Talisman Center","ShipName":"Hills-Lindgren","OrderDate":"5/8/2016","TotalPayment":"$846261.40","Status":6,"Type":2},{"OrderID":"0682-0480","ShipCountry":"AL","ShipAddress":"8 Portage Circle","ShipName":"Ullrich LLC","OrderDate":"11/3/2017","TotalPayment":"$894753.65","Status":6,"Type":3},{"OrderID":"55154-7352","ShipCountry":"PH","ShipAddress":"29 Karstens Junction","ShipName":"Haag, Graham and Murray","OrderDate":"6/17/2017","TotalPayment":"$588964.71","Status":5,"Type":1},{"OrderID":"64679-422","ShipCountry":"JM","ShipAddress":"34 West Street","ShipName":"Dietrich, Miller and Pouros","OrderDate":"11/14/2016","TotalPayment":"$163818.34","Status":2,"Type":3},{"OrderID":"0067-6394","ShipCountry":"ID","ShipAddress":"98 Green Ridge Parkway","ShipName":"Zboncak-Williamson","OrderDate":"12/5/2016","TotalPayment":"$883747.99","Status":6,"Type":3},{"OrderID":"55154-6726","ShipCountry":"CN","ShipAddress":"954 Holmberg Place","ShipName":"Hamill Inc","OrderDate":"9/10/2016","TotalPayment":"$479400.53","Status":5,"Type":1},{"OrderID":"52125-095","ShipCountry":"KZ","ShipAddress":"4 Crest Line Way","ShipName":"McKenzie LLC","OrderDate":"8/30/2017","TotalPayment":"$157693.58","Status":5,"Type":1}]},\n' +
        '{"RecordID":75,"FirstName":"Hoyt","LastName":"Foucar","Company":"Trilith","Email":"hfoucar22@nydailynews.com","Phone":"768-708-1455","Status":2,"Type":3,"Orders":[{"OrderID":"68788-9548","ShipCountry":"PH","ShipAddress":"6456 Muir Point","ShipName":"Pacocha, Morar and Kihn","OrderDate":"5/8/2017","TotalPayment":"$196609.24","Status":4,"Type":2},{"OrderID":"63629-4148","ShipCountry":"RU","ShipAddress":"15002 Waxwing Drive","ShipName":"Runolfsdottir, Fay and Nader","OrderDate":"6/25/2016","TotalPayment":"$482281.21","Status":4,"Type":1},{"OrderID":"0069-0336","ShipCountry":"GR","ShipAddress":"9091 Sunnyside Place","ShipName":"Parisian, Schimmel and Rempel","OrderDate":"12/12/2017","TotalPayment":"$732402.85","Status":4,"Type":3},{"OrderID":"49349-717","ShipCountry":"CN","ShipAddress":"57 Garrison Avenue","ShipName":"Mohr Group","OrderDate":"8/19/2016","TotalPayment":"$96083.24","Status":2,"Type":2},{"OrderID":"57520-0407","ShipCountry":"US","ShipAddress":"8 Blaine Avenue","ShipName":"Wiza Group","OrderDate":"8/20/2017","TotalPayment":"$676741.06","Status":5,"Type":3},{"OrderID":"30142-306","ShipCountry":"TZ","ShipAddress":"3766 Reinke Parkway","ShipName":"Auer, Barrows and Kuhic","OrderDate":"5/21/2016","TotalPayment":"$556538.40","Status":5,"Type":2},{"OrderID":"51523-011","ShipCountry":"SE","ShipAddress":"79 Melrose Trail","ShipName":"Beier, Gerlach and Davis","OrderDate":"5/12/2016","TotalPayment":"$877529.05","Status":5,"Type":3},{"OrderID":"0121-4788","ShipCountry":"SE","ShipAddress":"11 Lakeland Drive","ShipName":"Kirlin, Ortiz and Prosacco","OrderDate":"7/20/2017","TotalPayment":"$476308.51","Status":2,"Type":1},{"OrderID":"68084-863","ShipCountry":"MX","ShipAddress":"7 Dakota Plaza","ShipName":"Walter LLC","OrderDate":"5/6/2016","TotalPayment":"$701061.21","Status":3,"Type":1},{"OrderID":"22700-098","ShipCountry":"HN","ShipAddress":"2 Autumn Leaf Point","ShipName":"Macejkovic Inc","OrderDate":"10/31/2017","TotalPayment":"$698149.31","Status":5,"Type":3},{"OrderID":"45963-500","ShipCountry":"TH","ShipAddress":"38 Iowa Hill","ShipName":"Muller-Kunde","OrderDate":"5/19/2016","TotalPayment":"$824311.32","Status":3,"Type":3},{"OrderID":"49349-352","ShipCountry":"CN","ShipAddress":"934 Memorial Terrace","ShipName":"Satterfield-Cartwright","OrderDate":"12/12/2017","TotalPayment":"$498189.34","Status":6,"Type":3},{"OrderID":"0378-9121","ShipCountry":"OM","ShipAddress":"30975 Express Point","ShipName":"Cassin, Miller and Heidenreich","OrderDate":"6/28/2017","TotalPayment":"$729547.78","Status":3,"Type":3},{"OrderID":"60905-0405","ShipCountry":"CN","ShipAddress":"70083 Farwell Pass","ShipName":"Kertzmann Group","OrderDate":"11/12/2017","TotalPayment":"$943226.70","Status":1,"Type":2}]},\n' +
        '{"RecordID":76,"FirstName":"Joseph","LastName":"Bahlmann","Company":"Twitterwire","Email":"jbahlmann23@twitpic.com","Phone":"924-273-4946","Status":5,"Type":3,"Orders":[{"OrderID":"0093-7599","ShipCountry":"MX","ShipAddress":"08 Sutherland Alley","ShipName":"Koepp-Murphy","OrderDate":"4/6/2016","TotalPayment":"$237076.77","Status":6,"Type":1},{"OrderID":"59667-0105","ShipCountry":"JP","ShipAddress":"06599 Sherman Plaza","ShipName":"Hoppe LLC","OrderDate":"7/19/2016","TotalPayment":"$42445.51","Status":1,"Type":3},{"OrderID":"11523-4765","ShipCountry":"AR","ShipAddress":"814 Ruskin Circle","ShipName":"Larkin LLC","OrderDate":"2/22/2017","TotalPayment":"$821767.09","Status":2,"Type":1},{"OrderID":"0273-0358","ShipCountry":"ID","ShipAddress":"57905 Upham Place","ShipName":"Keeling-Howell","OrderDate":"12/26/2016","TotalPayment":"$1068593.69","Status":1,"Type":1},{"OrderID":"68599-0208","ShipCountry":"MX","ShipAddress":"2371 Upham Center","ShipName":"Jacobi Inc","OrderDate":"4/23/2017","TotalPayment":"$247619.83","Status":3,"Type":3},{"OrderID":"49738-866","ShipCountry":"PK","ShipAddress":"536 Buell Parkway","ShipName":"Lemke LLC","OrderDate":"6/3/2017","TotalPayment":"$132385.73","Status":6,"Type":3},{"OrderID":"67938-2019","ShipCountry":"CN","ShipAddress":"5202 Northport Parkway","ShipName":"Beier-Rogahn","OrderDate":"7/19/2017","TotalPayment":"$418381.92","Status":5,"Type":2},{"OrderID":"55390-358","ShipCountry":"BD","ShipAddress":"6982 Nancy Avenue","ShipName":"O\'Reilly, Ratke and Fadel","OrderDate":"11/13/2017","TotalPayment":"$337143.21","Status":4,"Type":1},{"OrderID":"11822-0442","ShipCountry":"PH","ShipAddress":"130 Kipling Hill","ShipName":"Rau, Schamberger and Stehr","OrderDate":"11/17/2016","TotalPayment":"$97335.17","Status":5,"Type":3},{"OrderID":"0363-0601","ShipCountry":"CN","ShipAddress":"3 Beilfuss Way","ShipName":"Osinski, Monahan and Wilkinson","OrderDate":"2/1/2016","TotalPayment":"$1066752.17","Status":1,"Type":1},{"OrderID":"52257-1201","ShipCountry":"EE","ShipAddress":"8380 Kedzie Terrace","ShipName":"Wilkinson-Trantow","OrderDate":"11/28/2017","TotalPayment":"$1150391.40","Status":1,"Type":1},{"OrderID":"27808-001","ShipCountry":"SE","ShipAddress":"577 Tennyson Hill","ShipName":"Welch LLC","OrderDate":"8/11/2016","TotalPayment":"$752935.22","Status":4,"Type":2},{"OrderID":"54569-0199","ShipCountry":"PT","ShipAddress":"976 Ilene Alley","ShipName":"Feeney and Sons","OrderDate":"11/17/2017","TotalPayment":"$600213.04","Status":4,"Type":3},{"OrderID":"67512-224","ShipCountry":"TH","ShipAddress":"0 Becker Circle","ShipName":"Rath and Sons","OrderDate":"6/25/2017","TotalPayment":"$895233.38","Status":3,"Type":2},{"OrderID":"0536-3605","ShipCountry":"CZ","ShipAddress":"1700 Melby Junction","ShipName":"Rohan-Tillman","OrderDate":"3/24/2016","TotalPayment":"$557375.93","Status":3,"Type":2},{"OrderID":"20802-1501","ShipCountry":"PL","ShipAddress":"09 Porter Junction","ShipName":"Zemlak, Fadel and Hintz","OrderDate":"6/20/2016","TotalPayment":"$653709.53","Status":2,"Type":3},{"OrderID":"63736-363","ShipCountry":"BR","ShipAddress":"0 Main Way","ShipName":"Hyatt, Will and Schoen","OrderDate":"6/6/2016","TotalPayment":"$751901.97","Status":5,"Type":2},{"OrderID":"61703-342","ShipCountry":"PL","ShipAddress":"049 Park Meadow Parkway","ShipName":"Torp, Murazik and Jacobi","OrderDate":"10/8/2017","TotalPayment":"$682640.70","Status":2,"Type":3},{"OrderID":"10812-435","ShipCountry":"NL","ShipAddress":"78 Trailsway Plaza","ShipName":"Roob, Kutch and Lakin","OrderDate":"11/2/2017","TotalPayment":"$991195.03","Status":5,"Type":1},{"OrderID":"63323-370","ShipCountry":"TZ","ShipAddress":"0 Farwell Pass","ShipName":"Hoppe, Sanford and Herzog","OrderDate":"3/8/2016","TotalPayment":"$1082637.89","Status":5,"Type":3}]},\n' +
        '{"RecordID":77,"FirstName":"Francklin","LastName":"Kliemann","Company":"Trudeo","Email":"fkliemann24@squarespace.com","Phone":"931-145-2463","Status":6,"Type":1,"Orders":[{"OrderID":"62742-4036","ShipCountry":"PH","ShipAddress":"3985 Lighthouse Bay Trail","ShipName":"Stracke-Treutel","OrderDate":"1/13/2016","TotalPayment":"$1179891.22","Status":4,"Type":3},{"OrderID":"62032-200","ShipCountry":"FI","ShipAddress":"3425 6th Crossing","ShipName":"Pollich Group","OrderDate":"7/4/2016","TotalPayment":"$215273.29","Status":4,"Type":1},{"OrderID":"10702-013","ShipCountry":"RU","ShipAddress":"8969 Weeping Birch Junction","ShipName":"Gottlieb Inc","OrderDate":"10/6/2017","TotalPayment":"$988731.76","Status":1,"Type":3},{"OrderID":"55154-6964","ShipCountry":"DE","ShipAddress":"76902 Fulton Center","ShipName":"Bogisich-Gorczany","OrderDate":"4/3/2017","TotalPayment":"$195719.92","Status":4,"Type":3},{"OrderID":"75854-202","ShipCountry":"ID","ShipAddress":"8 Tony Crossing","ShipName":"Koch-Hartmann","OrderDate":"9/15/2017","TotalPayment":"$998284.39","Status":3,"Type":3},{"OrderID":"54569-4466","ShipCountry":"PH","ShipAddress":"3 Granby Circle","ShipName":"Roob-Glover","OrderDate":"11/21/2016","TotalPayment":"$13516.76","Status":3,"Type":1},{"OrderID":"76237-206","ShipCountry":"US","ShipAddress":"8691 Roth Lane","ShipName":"Johnson, Doyle and Fadel","OrderDate":"7/19/2016","TotalPayment":"$955144.03","Status":1,"Type":1},{"OrderID":"17478-523","ShipCountry":"XK","ShipAddress":"497 Melrose Park","ShipName":"Goyette LLC","OrderDate":"4/11/2017","TotalPayment":"$1031737.34","Status":2,"Type":3},{"OrderID":"68151-0527","ShipCountry":"IL","ShipAddress":"6 Sugar Hill","ShipName":"Rau LLC","OrderDate":"10/17/2016","TotalPayment":"$1120002.93","Status":3,"Type":3},{"OrderID":"0085-1312","ShipCountry":"PH","ShipAddress":"9 Canary Plaza","ShipName":"Ward-Grady","OrderDate":"10/13/2016","TotalPayment":"$357305.47","Status":3,"Type":2},{"OrderID":"49349-995","ShipCountry":"US","ShipAddress":"7332 Arapahoe Road","ShipName":"Cummerata-Hartmann","OrderDate":"5/8/2016","TotalPayment":"$804133.74","Status":2,"Type":2}]},\n' +
        '{"RecordID":78,"FirstName":"Emilie","LastName":"Barbera","Company":"Zazio","Email":"ebarbera25@arstechnica.com","Phone":"559-615-8821","Status":5,"Type":1,"Orders":[{"OrderID":"49349-856","ShipCountry":"CN","ShipAddress":"8 Killdeer Circle","ShipName":"Sporer, Schiller and Schroeder","OrderDate":"5/11/2016","TotalPayment":"$297892.06","Status":1,"Type":2},{"OrderID":"49035-479","ShipCountry":"ID","ShipAddress":"852 Vera Street","ShipName":"Huel, Graham and Prohaska","OrderDate":"5/22/2016","TotalPayment":"$668595.89","Status":1,"Type":1},{"OrderID":"68769-002","ShipCountry":"AZ","ShipAddress":"89 Meadow Valley Road","ShipName":"Reichert Group","OrderDate":"12/24/2017","TotalPayment":"$57961.30","Status":3,"Type":1},{"OrderID":"68180-518","ShipCountry":"CN","ShipAddress":"15 Derek Road","ShipName":"Schmeler Inc","OrderDate":"10/17/2017","TotalPayment":"$283811.19","Status":6,"Type":3},{"OrderID":"44363-1815","ShipCountry":"ZM","ShipAddress":"65546 Grover Drive","ShipName":"Walter, Gerlach and Bartell","OrderDate":"2/20/2017","TotalPayment":"$1166480.43","Status":2,"Type":3},{"OrderID":"65954-014","ShipCountry":"CN","ShipAddress":"52653 Red Cloud Court","ShipName":"Beer-Braun","OrderDate":"6/6/2017","TotalPayment":"$983678.39","Status":2,"Type":1},{"OrderID":"41520-193","ShipCountry":"BR","ShipAddress":"58366 Oxford Hill","ShipName":"Jacobson-Kassulke","OrderDate":"6/19/2017","TotalPayment":"$160170.87","Status":4,"Type":3},{"OrderID":"52125-680","ShipCountry":"EC","ShipAddress":"9265 Sundown Junction","ShipName":"Ratke and Sons","OrderDate":"9/17/2017","TotalPayment":"$930206.45","Status":5,"Type":3},{"OrderID":"63347-120","ShipCountry":"PL","ShipAddress":"02830 Kedzie Way","ShipName":"Gulgowski Inc","OrderDate":"6/3/2017","TotalPayment":"$133638.46","Status":2,"Type":2},{"OrderID":"63629-4177","ShipCountry":"CY","ShipAddress":"10987 Macpherson Avenue","ShipName":"Wilkinson and Sons","OrderDate":"7/13/2016","TotalPayment":"$710238.52","Status":2,"Type":1},{"OrderID":"21695-474","ShipCountry":"PH","ShipAddress":"8 Sheridan Crossing","ShipName":"Klocko and Sons","OrderDate":"1/22/2016","TotalPayment":"$58077.54","Status":4,"Type":2},{"OrderID":"67112-401","ShipCountry":"ID","ShipAddress":"0 Old Gate Crossing","ShipName":"Hegmann Inc","OrderDate":"8/25/2016","TotalPayment":"$341006.70","Status":1,"Type":3},{"OrderID":"48951-1218","ShipCountry":"CZ","ShipAddress":"1 Lyons Avenue","ShipName":"McCullough-Windler","OrderDate":"10/15/2017","TotalPayment":"$430365.30","Status":6,"Type":3},{"OrderID":"60512-0009","ShipCountry":"MY","ShipAddress":"65621 Memorial Center","ShipName":"Greenfelder-Goyette","OrderDate":"1/11/2016","TotalPayment":"$423892.53","Status":4,"Type":3},{"OrderID":"36800-971","ShipCountry":"GT","ShipAddress":"42 Village Parkway","ShipName":"Rowe and Sons","OrderDate":"10/19/2016","TotalPayment":"$1138252.75","Status":6,"Type":2},{"OrderID":"64376-821","ShipCountry":"ID","ShipAddress":"7 Badeau Way","ShipName":"Hudson Group","OrderDate":"1/30/2017","TotalPayment":"$674957.53","Status":1,"Type":1},{"OrderID":"0517-0830","ShipCountry":"AF","ShipAddress":"55911 Marquette Park","ShipName":"Swaniawski-Jerde","OrderDate":"2/10/2016","TotalPayment":"$415283.49","Status":6,"Type":2},{"OrderID":"67544-911","ShipCountry":"CN","ShipAddress":"945 Eagle Crest Point","ShipName":"Adams-Weissnat","OrderDate":"8/2/2016","TotalPayment":"$700160.78","Status":3,"Type":3},{"OrderID":"0615-7639","ShipCountry":"MY","ShipAddress":"9 Arrowood Street","ShipName":"Kassulke, Murphy and Mann","OrderDate":"1/29/2017","TotalPayment":"$182117.86","Status":6,"Type":2},{"OrderID":"68012-102","ShipCountry":"CN","ShipAddress":"15 Sugar Lane","ShipName":"Upton-Ryan","OrderDate":"4/23/2016","TotalPayment":"$1068078.93","Status":6,"Type":1}]},\n' +
        '{"RecordID":79,"FirstName":"Terencio","LastName":"Vido","Company":"Buzzster","Email":"tvido26@europa.eu","Phone":"570-682-9012","Status":1,"Type":2,"Orders":[{"OrderID":"51079-062","ShipCountry":"ZA","ShipAddress":"42644 Anzinger Point","ShipName":"DuBuque Inc","OrderDate":"4/17/2016","TotalPayment":"$773512.98","Status":5,"Type":2},{"OrderID":"0456-4020","ShipCountry":"PT","ShipAddress":"5 Talmadge Circle","ShipName":"Hyatt Inc","OrderDate":"12/5/2017","TotalPayment":"$187738.47","Status":3,"Type":2},{"OrderID":"0006-0019","ShipCountry":"PE","ShipAddress":"990 Magdeline Way","ShipName":"Corwin, Streich and Kiehn","OrderDate":"5/30/2016","TotalPayment":"$374277.36","Status":2,"Type":3},{"OrderID":"24385-677","ShipCountry":"ID","ShipAddress":"6 Paget Plaza","ShipName":"O\'Kon Group","OrderDate":"6/27/2016","TotalPayment":"$918925.58","Status":3,"Type":3},{"OrderID":"0008-4990","ShipCountry":"CZ","ShipAddress":"3560 Forest Park","ShipName":"Beatty, Bins and Ebert","OrderDate":"10/21/2016","TotalPayment":"$1046538.73","Status":5,"Type":1},{"OrderID":"68387-802","ShipCountry":"AL","ShipAddress":"06574 John Wall Way","ShipName":"Berge-Von","OrderDate":"3/16/2016","TotalPayment":"$797136.53","Status":1,"Type":2},{"OrderID":"13107-012","ShipCountry":"BF","ShipAddress":"11386 Arapahoe Alley","ShipName":"Wilkinson, Oberbrunner and O\'Keefe","OrderDate":"3/29/2017","TotalPayment":"$327442.31","Status":2,"Type":3},{"OrderID":"54868-4991","ShipCountry":"BG","ShipAddress":"3182 Dayton Parkway","ShipName":"Gerlach-Lockman","OrderDate":"12/26/2016","TotalPayment":"$97244.05","Status":6,"Type":3},{"OrderID":"49349-043","ShipCountry":"SE","ShipAddress":"86 Meadow Ridge Street","ShipName":"Murphy, Davis and Schmidt","OrderDate":"9/11/2017","TotalPayment":"$511292.20","Status":2,"Type":2},{"OrderID":"53499-7172","ShipCountry":"PA","ShipAddress":"90 Longview Way","ShipName":"Rau, Fritsch and Spinka","OrderDate":"1/31/2016","TotalPayment":"$168332.29","Status":4,"Type":2},{"OrderID":"67510-0505","ShipCountry":"CN","ShipAddress":"18 Aberg Street","ShipName":"Gusikowski-Rath","OrderDate":"5/14/2017","TotalPayment":"$902108.30","Status":3,"Type":3},{"OrderID":"53808-0629","ShipCountry":"BO","ShipAddress":"185 Lakewood Gardens Junction","ShipName":"Dicki, Kerluke and McLaughlin","OrderDate":"9/5/2017","TotalPayment":"$524275.68","Status":4,"Type":2},{"OrderID":"62856-601","ShipCountry":"GR","ShipAddress":"49 American Alley","ShipName":"Steuber and Sons","OrderDate":"7/29/2017","TotalPayment":"$399239.36","Status":2,"Type":2},{"OrderID":"11559-035","ShipCountry":"ET","ShipAddress":"1207 Elka Plaza","ShipName":"Block LLC","OrderDate":"10/6/2016","TotalPayment":"$123416.54","Status":6,"Type":1},{"OrderID":"44946-1021","ShipCountry":"TH","ShipAddress":"703 Sloan Lane","ShipName":"Steuber-Rodriguez","OrderDate":"3/25/2016","TotalPayment":"$665393.75","Status":6,"Type":3},{"OrderID":"35356-542","ShipCountry":"ID","ShipAddress":"52 Tennessee Park","ShipName":"Wuckert LLC","OrderDate":"2/8/2016","TotalPayment":"$719949.18","Status":5,"Type":2}]},\n' +
        '{"RecordID":80,"FirstName":"Walther","LastName":"Weedenburg","Company":"Layo","Email":"wweedenburg27@surveymonkey.com","Phone":"545-809-0943","Status":5,"Type":1,"Orders":[{"OrderID":"41167-0091","ShipCountry":"PH","ShipAddress":"5 Buell Circle","ShipName":"Konopelski Inc","OrderDate":"7/11/2017","TotalPayment":"$1038301.78","Status":2,"Type":3},{"OrderID":"0004-0802","ShipCountry":"FM","ShipAddress":"12925 Oxford Plaza","ShipName":"Runte Inc","OrderDate":"8/31/2017","TotalPayment":"$356774.59","Status":4,"Type":2},{"OrderID":"65044-5054","ShipCountry":"CN","ShipAddress":"0 Westerfield Park","ShipName":"Anderson-Kiehn","OrderDate":"4/11/2017","TotalPayment":"$179756.40","Status":4,"Type":1},{"OrderID":"41163-166","ShipCountry":"GR","ShipAddress":"9 Claremont Drive","ShipName":"Stamm-Mohr","OrderDate":"10/26/2016","TotalPayment":"$868672.84","Status":1,"Type":2},{"OrderID":"66969-6024","ShipCountry":"CN","ShipAddress":"36 Valley Edge Road","ShipName":"Schumm, Klein and Feest","OrderDate":"7/6/2016","TotalPayment":"$404134.24","Status":4,"Type":3},{"OrderID":"57469-059","ShipCountry":"ID","ShipAddress":"5 Morningstar Parkway","ShipName":"Koch-Harvey","OrderDate":"7/8/2017","TotalPayment":"$986695.34","Status":1,"Type":3},{"OrderID":"0781-7137","ShipCountry":"PK","ShipAddress":"581 Oakridge Street","ShipName":"Reynolds, Purdy and Pfeffer","OrderDate":"11/24/2017","TotalPayment":"$272908.62","Status":3,"Type":1},{"OrderID":"65293-005","ShipCountry":"ID","ShipAddress":"756 Ramsey Avenue","ShipName":"Stanton-Upton","OrderDate":"9/4/2017","TotalPayment":"$613377.87","Status":2,"Type":3},{"OrderID":"49288-0182","ShipCountry":"NA","ShipAddress":"4870 Katie Terrace","ShipName":"Carroll-Rice","OrderDate":"3/12/2016","TotalPayment":"$1000611.22","Status":3,"Type":1},{"OrderID":"68084-350","ShipCountry":"IR","ShipAddress":"9180 Farwell Drive","ShipName":"Skiles-Murphy","OrderDate":"10/29/2017","TotalPayment":"$1176142.38","Status":4,"Type":2},{"OrderID":"0406-9916","ShipCountry":"VN","ShipAddress":"00131 Golf Course Trail","ShipName":"Zemlak, Roob and Abernathy","OrderDate":"7/22/2017","TotalPayment":"$692348.69","Status":1,"Type":3},{"OrderID":"55154-8509","ShipCountry":"RU","ShipAddress":"01544 Stephen Trail","ShipName":"Bartoletti and Sons","OrderDate":"8/7/2017","TotalPayment":"$1157509.56","Status":3,"Type":2},{"OrderID":"0603-6468","ShipCountry":"RU","ShipAddress":"50118 Grover Road","ShipName":"Kiehn-Heathcote","OrderDate":"8/31/2016","TotalPayment":"$1171950.58","Status":1,"Type":1},{"OrderID":"66129-105","ShipCountry":"NG","ShipAddress":"8256 Schurz Point","ShipName":"Cremin Inc","OrderDate":"11/6/2017","TotalPayment":"$203380.99","Status":3,"Type":1},{"OrderID":"48951-5049","ShipCountry":"CN","ShipAddress":"24 Kingsford Park","ShipName":"Waelchi-Glover","OrderDate":"9/1/2017","TotalPayment":"$551628.70","Status":6,"Type":3},{"OrderID":"15828-106","ShipCountry":"KP","ShipAddress":"71988 Chive Way","ShipName":"Adams and Sons","OrderDate":"5/24/2016","TotalPayment":"$133757.06","Status":5,"Type":1},{"OrderID":"50804-686","ShipCountry":"PL","ShipAddress":"651 Heffernan Hill","ShipName":"Jakubowski, Bartell and Lowe","OrderDate":"4/16/2017","TotalPayment":"$124131.17","Status":6,"Type":1},{"OrderID":"29500-2436","ShipCountry":"ID","ShipAddress":"90957 4th Center","ShipName":"Rice LLC","OrderDate":"7/20/2017","TotalPayment":"$481798.92","Status":6,"Type":3}]},\n' +
        '{"RecordID":81,"FirstName":"Carlota","LastName":"Tudhope","Company":"Quaxo","Email":"ctudhope28@marketwatch.com","Phone":"795-441-1536","Status":4,"Type":2,"Orders":[{"OrderID":"43419-861","ShipCountry":"PH","ShipAddress":"49166 Drewry Crossing","ShipName":"Wuckert-Romaguera","OrderDate":"4/13/2016","TotalPayment":"$1066100.46","Status":4,"Type":3},{"OrderID":"48951-9015","ShipCountry":"PT","ShipAddress":"12 Judy Street","ShipName":"White, Denesik and Braun","OrderDate":"1/7/2016","TotalPayment":"$1029397.30","Status":5,"Type":2},{"OrderID":"43742-0409","ShipCountry":"MX","ShipAddress":"49400 Helena Court","ShipName":"Gibson Inc","OrderDate":"11/13/2016","TotalPayment":"$754679.90","Status":3,"Type":1},{"OrderID":"0085-4610","ShipCountry":"CN","ShipAddress":"07 Glendale Parkway","ShipName":"Medhurst, Jacobson and Mertz","OrderDate":"4/25/2016","TotalPayment":"$346698.00","Status":1,"Type":2},{"OrderID":"21695-947","ShipCountry":"BR","ShipAddress":"2 Mccormick Point","ShipName":"Emard Group","OrderDate":"2/26/2017","TotalPayment":"$109719.72","Status":6,"Type":1},{"OrderID":"52584-610","ShipCountry":"CN","ShipAddress":"25683 Westport Trail","ShipName":"Carter, Runte and Ondricka","OrderDate":"11/24/2017","TotalPayment":"$304419.90","Status":3,"Type":2},{"OrderID":"49999-122","ShipCountry":"PK","ShipAddress":"1528 Larry Lane","ShipName":"Runte Inc","OrderDate":"1/14/2017","TotalPayment":"$110536.85","Status":2,"Type":1},{"OrderID":"37000-904","ShipCountry":"PT","ShipAddress":"1 Golf Crossing","ShipName":"Marvin, Hudson and Bashirian","OrderDate":"7/18/2016","TotalPayment":"$435074.34","Status":2,"Type":3},{"OrderID":"57691-120","ShipCountry":"RU","ShipAddress":"78112 Pond Lane","ShipName":"Gerhold, Lesch and Graham","OrderDate":"11/16/2016","TotalPayment":"$561812.12","Status":6,"Type":1},{"OrderID":"59779-221","ShipCountry":"VN","ShipAddress":"393 Schurz Avenue","ShipName":"Streich-Braun","OrderDate":"10/30/2016","TotalPayment":"$605873.86","Status":6,"Type":2},{"OrderID":"67046-014","ShipCountry":"ZA","ShipAddress":"86 Farwell Circle","ShipName":"Harris, Green and Jaskolski","OrderDate":"11/27/2016","TotalPayment":"$739178.63","Status":3,"Type":1},{"OrderID":"42254-340","ShipCountry":"CN","ShipAddress":"2585 Havey Lane","ShipName":"Shanahan, Jones and Steuber","OrderDate":"1/28/2017","TotalPayment":"$1027159.71","Status":4,"Type":3},{"OrderID":"24658-243","ShipCountry":"CN","ShipAddress":"926 Express Junction","ShipName":"Murray, Hettinger and Kohler","OrderDate":"6/12/2017","TotalPayment":"$767944.25","Status":1,"Type":1},{"OrderID":"57520-0990","ShipCountry":"FR","ShipAddress":"27653 Carpenter Center","ShipName":"Legros-McGlynn","OrderDate":"12/23/2016","TotalPayment":"$38634.30","Status":2,"Type":1},{"OrderID":"43857-0206","ShipCountry":"DK","ShipAddress":"78 Ramsey Court","ShipName":"Klocko, Ritchie and Zemlak","OrderDate":"2/23/2016","TotalPayment":"$833835.22","Status":4,"Type":3},{"OrderID":"59779-369","ShipCountry":"EE","ShipAddress":"8 Rusk Circle","ShipName":"Gerhold-Ebert","OrderDate":"10/20/2017","TotalPayment":"$140874.05","Status":5,"Type":2},{"OrderID":"72036-220","ShipCountry":"BR","ShipAddress":"36684 Pepper Wood Center","ShipName":"O\'Conner, O\'Kon and Zemlak","OrderDate":"7/12/2017","TotalPayment":"$1014462.20","Status":6,"Type":2},{"OrderID":"49349-899","ShipCountry":"PL","ShipAddress":"11 Oneill Court","ShipName":"Gutmann-Stokes","OrderDate":"7/21/2016","TotalPayment":"$500603.29","Status":1,"Type":3}]},\n' +
        '{"RecordID":82,"FirstName":"Hubert","LastName":"Hasnney","Company":"Vipe","Email":"hhasnney29@usa.gov","Phone":"884-673-3875","Status":2,"Type":2,"Orders":[{"OrderID":"63981-766","ShipCountry":"RU","ShipAddress":"9 Ruskin Crossing","ShipName":"Haley and Sons","OrderDate":"11/7/2017","TotalPayment":"$198971.93","Status":5,"Type":1},{"OrderID":"35418-750","ShipCountry":"ID","ShipAddress":"4 Roxbury Circle","ShipName":"Koch-Legros","OrderDate":"3/10/2017","TotalPayment":"$605811.21","Status":5,"Type":3},{"OrderID":"59762-0925","ShipCountry":"BR","ShipAddress":"46 Commercial Avenue","ShipName":"Lueilwitz, Quitzon and Williamson","OrderDate":"5/21/2016","TotalPayment":"$63158.62","Status":6,"Type":2},{"OrderID":"57520-0271","ShipCountry":"PL","ShipAddress":"00124 Sundown Plaza","ShipName":"Mohr, Reichel and Rogahn","OrderDate":"4/3/2017","TotalPayment":"$495846.49","Status":5,"Type":2},{"OrderID":"50383-889","ShipCountry":"KR","ShipAddress":"99 Texas Pass","ShipName":"Stroman-Little","OrderDate":"3/29/2016","TotalPayment":"$543745.92","Status":1,"Type":1}]},\n' +
        '{"RecordID":83,"FirstName":"Darya","LastName":"Oulett","Company":"Ntags","Email":"doulett2a@nhs.uk","Phone":"784-663-2169","Status":2,"Type":3,"Orders":[{"OrderID":"60429-138","ShipCountry":"CN","ShipAddress":"3 Bunting Point","ShipName":"Hauck-Jacobi","OrderDate":"9/11/2017","TotalPayment":"$673217.93","Status":5,"Type":3},{"OrderID":"24909-120","ShipCountry":"BA","ShipAddress":"09 Melrose Pass","ShipName":"Douglas-D\'Amore","OrderDate":"5/14/2017","TotalPayment":"$53917.91","Status":4,"Type":1},{"OrderID":"58232-4021","ShipCountry":"CL","ShipAddress":"514 Morningstar Parkway","ShipName":"Hagenes LLC","OrderDate":"4/13/2017","TotalPayment":"$1013246.14","Status":2,"Type":1},{"OrderID":"55910-708","ShipCountry":"BR","ShipAddress":"44872 Mcbride Avenue","ShipName":"Kertzmann, Nitzsche and Bogan","OrderDate":"9/20/2017","TotalPayment":"$755573.11","Status":1,"Type":1},{"OrderID":"0268-0721","ShipCountry":"CN","ShipAddress":"5665 Bartillon Avenue","ShipName":"King, Schamberger and Wintheiser","OrderDate":"12/22/2017","TotalPayment":"$549575.45","Status":3,"Type":3},{"OrderID":"63629-4698","ShipCountry":"FR","ShipAddress":"4660 Sundown Center","ShipName":"Aufderhar-Senger","OrderDate":"9/13/2016","TotalPayment":"$391345.95","Status":6,"Type":2},{"OrderID":"0069-0094","ShipCountry":"CO","ShipAddress":"97034 Vidon Alley","ShipName":"Kuhn, Durgan and Turner","OrderDate":"9/5/2016","TotalPayment":"$786021.22","Status":3,"Type":3},{"OrderID":"50268-051","ShipCountry":"CN","ShipAddress":"15379 Dunning Avenue","ShipName":"Will-Cassin","OrderDate":"6/30/2016","TotalPayment":"$1154186.69","Status":5,"Type":2},{"OrderID":"68047-253","ShipCountry":"RU","ShipAddress":"28 International Circle","ShipName":"Wiza, Roob and Reinger","OrderDate":"3/2/2016","TotalPayment":"$1099448.31","Status":4,"Type":1},{"OrderID":"24794-223","ShipCountry":"CA","ShipAddress":"22 Rockefeller Parkway","ShipName":"Koss Inc","OrderDate":"10/4/2016","TotalPayment":"$1037279.22","Status":5,"Type":3},{"OrderID":"11344-616","ShipCountry":"RU","ShipAddress":"5 Eastwood Place","ShipName":"Koelpin Inc","OrderDate":"9/22/2017","TotalPayment":"$1133327.62","Status":5,"Type":1}]},\n' +
        '{"RecordID":84,"FirstName":"Steffie","LastName":"Walewicz","Company":"Feednation","Email":"swalewicz2b@timesonline.co.uk","Phone":"444-386-9191","Status":2,"Type":3,"Orders":[{"OrderID":"65044-3141","ShipCountry":"RU","ShipAddress":"7 2nd Park","ShipName":"Cummerata LLC","OrderDate":"2/28/2016","TotalPayment":"$848021.24","Status":1,"Type":2},{"OrderID":"17478-920","ShipCountry":"ID","ShipAddress":"19 Towne Plaza","ShipName":"Cole-Ward","OrderDate":"8/1/2016","TotalPayment":"$272331.87","Status":4,"Type":2},{"OrderID":"65162-734","ShipCountry":"CN","ShipAddress":"37703 Bayside Crossing","ShipName":"Bradtke-Bauch","OrderDate":"8/22/2016","TotalPayment":"$749986.22","Status":3,"Type":2},{"OrderID":"59726-019","ShipCountry":"AR","ShipAddress":"2 Manley Lane","ShipName":"Jacobson and Sons","OrderDate":"6/12/2017","TotalPayment":"$163681.00","Status":4,"Type":1},{"OrderID":"54569-0235","ShipCountry":"CL","ShipAddress":"10887 Raven Pass","ShipName":"Wehner, Auer and Shanahan","OrderDate":"1/12/2016","TotalPayment":"$42204.81","Status":4,"Type":1},{"OrderID":"50845-0085","ShipCountry":"PL","ShipAddress":"727 Kings Way","ShipName":"Nader LLC","OrderDate":"9/18/2016","TotalPayment":"$748950.52","Status":6,"Type":2},{"OrderID":"55910-988","ShipCountry":"CN","ShipAddress":"252 Westerfield Way","ShipName":"Zieme-Sipes","OrderDate":"10/12/2017","TotalPayment":"$31468.38","Status":1,"Type":2},{"OrderID":"65628-052","ShipCountry":"FR","ShipAddress":"371 Bashford Lane","ShipName":"Simonis-Hilpert","OrderDate":"1/3/2017","TotalPayment":"$852849.52","Status":5,"Type":2},{"OrderID":"0378-3065","ShipCountry":"CO","ShipAddress":"2847 Muir Crossing","ShipName":"Schroeder, Fay and Gutkowski","OrderDate":"12/18/2017","TotalPayment":"$702493.55","Status":3,"Type":1},{"OrderID":"59450-231","ShipCountry":"BR","ShipAddress":"5283 Ruskin Road","ShipName":"Considine Inc","OrderDate":"8/10/2017","TotalPayment":"$904695.74","Status":2,"Type":2},{"OrderID":"68220-143","ShipCountry":"CN","ShipAddress":"38 Sloan Crossing","ShipName":"Schultz, Rolfson and Okuneva","OrderDate":"5/12/2017","TotalPayment":"$912840.56","Status":3,"Type":1},{"OrderID":"55319-081","ShipCountry":"PL","ShipAddress":"8 Iowa Crossing","ShipName":"Kautzer, MacGyver and Jerde","OrderDate":"6/8/2017","TotalPayment":"$277759.59","Status":4,"Type":3},{"OrderID":"10678-005","ShipCountry":"CN","ShipAddress":"80543 Crescent Oaks Junction","ShipName":"Waelchi, Rau and Crona","OrderDate":"12/7/2016","TotalPayment":"$1170553.76","Status":3,"Type":1},{"OrderID":"0409-1483","ShipCountry":"CN","ShipAddress":"5 Upham Alley","ShipName":"Emard-Aufderhar","OrderDate":"1/15/2017","TotalPayment":"$736032.84","Status":6,"Type":1},{"OrderID":"0228-3086","ShipCountry":"RU","ShipAddress":"574 Havey Court","ShipName":"Leannon, Berge and Upton","OrderDate":"4/18/2017","TotalPayment":"$377550.94","Status":3,"Type":3},{"OrderID":"36987-2553","ShipCountry":"CA","ShipAddress":"26 Summit Point","ShipName":"Ferry-Ryan","OrderDate":"5/21/2017","TotalPayment":"$883567.47","Status":4,"Type":3},{"OrderID":"67752-0001","ShipCountry":"CM","ShipAddress":"81 Everett Point","ShipName":"Swift Group","OrderDate":"5/30/2017","TotalPayment":"$688616.65","Status":3,"Type":2},{"OrderID":"60429-260","ShipCountry":"KZ","ShipAddress":"8224 Atwood Place","ShipName":"Schaefer, Strosin and Schmidt","OrderDate":"7/7/2016","TotalPayment":"$979466.32","Status":2,"Type":3}]},\n' +
        '{"RecordID":85,"FirstName":"Dannie","LastName":"Blakeborough","Company":"Flipbug","Email":"dblakeborough2c@tamu.edu","Phone":"668-217-8095","Status":1,"Type":2,"Orders":[{"OrderID":"64376-132","ShipCountry":"PT","ShipAddress":"13618 Acker Plaza","ShipName":"Legros LLC","OrderDate":"11/3/2017","TotalPayment":"$432849.13","Status":5,"Type":1},{"OrderID":"0228-2067","ShipCountry":"CN","ShipAddress":"6 Fordem Road","ShipName":"Labadie Inc","OrderDate":"2/6/2016","TotalPayment":"$165733.88","Status":5,"Type":3},{"OrderID":"53329-138","ShipCountry":"SE","ShipAddress":"9 Moland Court","ShipName":"Herzog-Becker","OrderDate":"4/4/2017","TotalPayment":"$684816.58","Status":4,"Type":3},{"OrderID":"54868-0269","ShipCountry":"ID","ShipAddress":"23187 Lindbergh Hill","ShipName":"Schoen, Kiehn and Berge","OrderDate":"10/13/2017","TotalPayment":"$108362.04","Status":5,"Type":2},{"OrderID":"63629-1619","ShipCountry":"BR","ShipAddress":"638 Melvin Pass","ShipName":"Considine, Waelchi and Satterfield","OrderDate":"6/14/2016","TotalPayment":"$95715.01","Status":5,"Type":2},{"OrderID":"63776-525","ShipCountry":"ID","ShipAddress":"144 Eastlawn Parkway","ShipName":"Wintheiser-Bernhard","OrderDate":"4/14/2017","TotalPayment":"$867926.48","Status":2,"Type":1},{"OrderID":"48951-4035","ShipCountry":"JO","ShipAddress":"0 Johnson Lane","ShipName":"Parker Inc","OrderDate":"2/10/2016","TotalPayment":"$295067.45","Status":5,"Type":1},{"OrderID":"55910-047","ShipCountry":"BR","ShipAddress":"3 Blackbird Hill","ShipName":"Kunze LLC","OrderDate":"10/10/2016","TotalPayment":"$598419.67","Status":5,"Type":1},{"OrderID":"43269-723","ShipCountry":"AR","ShipAddress":"92 Moulton Park","ShipName":"Tromp Inc","OrderDate":"5/6/2016","TotalPayment":"$22322.67","Status":2,"Type":3},{"OrderID":"0703-3343","ShipCountry":"ID","ShipAddress":"892 Mcguire Street","ShipName":"Hagenes-Stokes","OrderDate":"6/13/2017","TotalPayment":"$166872.53","Status":5,"Type":3},{"OrderID":"59260-135","ShipCountry":"ET","ShipAddress":"19 Troy Drive","ShipName":"Hayes Group","OrderDate":"5/10/2017","TotalPayment":"$1025704.62","Status":3,"Type":3},{"OrderID":"52125-441","ShipCountry":"PH","ShipAddress":"392 Dryden Pass","ShipName":"Murphy, Boehm and Bogan","OrderDate":"6/18/2016","TotalPayment":"$117229.26","Status":5,"Type":1}]},\n' +
        '{"RecordID":86,"FirstName":"Yetty","LastName":"Tabbitt","Company":"Kimia","Email":"ytabbitt2d@tinyurl.com","Phone":"322-145-9318","Status":4,"Type":1,"Orders":[{"OrderID":"0145-0985","ShipCountry":"PH","ShipAddress":"7 Hanson Point","ShipName":"McDermott and Sons","OrderDate":"3/11/2016","TotalPayment":"$1183727.38","Status":5,"Type":3},{"OrderID":"59762-1815","ShipCountry":"RU","ShipAddress":"0205 Little Fleur Terrace","ShipName":"King, MacGyver and Parisian","OrderDate":"2/14/2017","TotalPayment":"$247437.68","Status":6,"Type":2},{"OrderID":"50241-143","ShipCountry":"VE","ShipAddress":"129 Dorton Drive","ShipName":"Stoltenberg and Sons","OrderDate":"5/31/2017","TotalPayment":"$566471.83","Status":2,"Type":2},{"OrderID":"36987-1449","ShipCountry":"RU","ShipAddress":"3 Warner Road","ShipName":"Volkman, Powlowski and Osinski","OrderDate":"10/26/2016","TotalPayment":"$600346.85","Status":5,"Type":1},{"OrderID":"0409-2025","ShipCountry":"LY","ShipAddress":"42113 Corben Lane","ShipName":"Mohr, Hickle and Tromp","OrderDate":"7/6/2017","TotalPayment":"$905878.42","Status":2,"Type":3},{"OrderID":"54868-1103","ShipCountry":"SE","ShipAddress":"0 Crest Line Circle","ShipName":"Marquardt and Sons","OrderDate":"3/17/2017","TotalPayment":"$124261.55","Status":3,"Type":2},{"OrderID":"52125-569","ShipCountry":"SE","ShipAddress":"5 Merrick Trail","ShipName":"Walsh Group","OrderDate":"10/13/2016","TotalPayment":"$567931.67","Status":6,"Type":1},{"OrderID":"11344-484","ShipCountry":"ID","ShipAddress":"65484 Helena Court","ShipName":"Nicolas Group","OrderDate":"4/5/2016","TotalPayment":"$497484.31","Status":3,"Type":1},{"OrderID":"60589-001","ShipCountry":"ID","ShipAddress":"0344 Fair Oaks Drive","ShipName":"Turcotte-Barrows","OrderDate":"9/12/2016","TotalPayment":"$209135.47","Status":6,"Type":1},{"OrderID":"16590-480","ShipCountry":"CN","ShipAddress":"12 Independence Point","ShipName":"Larkin-Ebert","OrderDate":"9/10/2016","TotalPayment":"$566909.70","Status":6,"Type":2},{"OrderID":"48951-2092","ShipCountry":"ID","ShipAddress":"5 Tennyson Hill","ShipName":"Turner-Leannon","OrderDate":"7/4/2017","TotalPayment":"$749256.97","Status":1,"Type":2},{"OrderID":"63402-510","ShipCountry":"NG","ShipAddress":"98541 Mayer Street","ShipName":"Greenholt, Bashirian and Kerluke","OrderDate":"11/3/2016","TotalPayment":"$936277.23","Status":3,"Type":1},{"OrderID":"48951-3028","ShipCountry":"PH","ShipAddress":"910 Mifflin Hill","ShipName":"Sauer, Will and Kilback","OrderDate":"4/6/2017","TotalPayment":"$176756.56","Status":3,"Type":3}]},\n' +
        '{"RecordID":87,"FirstName":"Davine","LastName":"MacScherie","Company":"Eimbee","Email":"dmacscherie2e@trellian.com","Phone":"662-393-3301","Status":6,"Type":1,"Orders":[{"OrderID":"52125-444","ShipCountry":"PE","ShipAddress":"54 Oak Way","ShipName":"Langosh-Schuppe","OrderDate":"12/15/2016","TotalPayment":"$460341.78","Status":2,"Type":2},{"OrderID":"48951-3056","ShipCountry":"BR","ShipAddress":"51 Prentice Park","ShipName":"Gerhold-Graham","OrderDate":"8/26/2016","TotalPayment":"$979657.38","Status":4,"Type":1},{"OrderID":"49882-0929","ShipCountry":"CN","ShipAddress":"1704 Bluestem Alley","ShipName":"Nienow-Jerde","OrderDate":"12/9/2016","TotalPayment":"$77330.84","Status":6,"Type":3},{"OrderID":"64370-532","ShipCountry":"KZ","ShipAddress":"03445 Ilene Park","ShipName":"Hintz, Ullrich and Stamm","OrderDate":"1/18/2017","TotalPayment":"$788099.51","Status":4,"Type":3},{"OrderID":"36987-1432","ShipCountry":"TZ","ShipAddress":"3 Main Center","ShipName":"Kohler, Stamm and Schiller","OrderDate":"12/2/2016","TotalPayment":"$312673.21","Status":6,"Type":1},{"OrderID":"0378-3286","ShipCountry":"PK","ShipAddress":"608 5th Crossing","ShipName":"Jerde, Vandervort and Swaniawski","OrderDate":"10/31/2016","TotalPayment":"$638792.88","Status":2,"Type":3},{"OrderID":"52125-314","ShipCountry":"CN","ShipAddress":"4 Northridge Avenue","ShipName":"Dibbert-Weimann","OrderDate":"12/15/2017","TotalPayment":"$1120937.55","Status":6,"Type":1},{"OrderID":"57520-0781","ShipCountry":"ID","ShipAddress":"4122 Maywood Trail","ShipName":"Witting, Nienow and Farrell","OrderDate":"8/12/2016","TotalPayment":"$600946.63","Status":3,"Type":2},{"OrderID":"0378-1190","ShipCountry":"CN","ShipAddress":"26 Stoughton Street","ShipName":"Bartoletti-D\'Amore","OrderDate":"4/2/2016","TotalPayment":"$438039.58","Status":3,"Type":3},{"OrderID":"58468-0041","ShipCountry":"JP","ShipAddress":"339 Pawling Avenue","ShipName":"Rempel Inc","OrderDate":"12/24/2016","TotalPayment":"$632012.70","Status":6,"Type":1}]},\n' +
        '{"RecordID":88,"FirstName":"Jonell","LastName":"O\'Looney","Company":"Twimm","Email":"jolooney2f@flavors.me","Phone":"335-995-7293","Status":5,"Type":3,"Orders":[{"OrderID":"54868-6376","ShipCountry":"RU","ShipAddress":"98 Merchant Plaza","ShipName":"Gleason-Rolfson","OrderDate":"8/28/2016","TotalPayment":"$915507.53","Status":5,"Type":3},{"OrderID":"16714-375","ShipCountry":"ID","ShipAddress":"74786 Waxwing Parkway","ShipName":"Turcotte, Mante and Trantow","OrderDate":"5/23/2017","TotalPayment":"$222725.49","Status":3,"Type":1},{"OrderID":"53329-165","ShipCountry":"RU","ShipAddress":"59358 Ruskin Pass","ShipName":"Schuppe Inc","OrderDate":"11/8/2017","TotalPayment":"$165061.10","Status":4,"Type":2},{"OrderID":"11673-248","ShipCountry":"TF","ShipAddress":"6937 Kenwood Court","ShipName":"Brakus, Fritsch and Lockman","OrderDate":"10/5/2016","TotalPayment":"$932728.51","Status":5,"Type":1},{"OrderID":"10096-0138","ShipCountry":"DO","ShipAddress":"26 Katie Center","ShipName":"Muller and Sons","OrderDate":"11/21/2016","TotalPayment":"$697590.20","Status":4,"Type":1},{"OrderID":"61570-260","ShipCountry":"TD","ShipAddress":"6435 Rigney Pass","ShipName":"Stiedemann-Connelly","OrderDate":"7/9/2016","TotalPayment":"$464236.25","Status":3,"Type":2},{"OrderID":"54868-0053","ShipCountry":"KP","ShipAddress":"991 Norway Maple Circle","ShipName":"Mertz and Sons","OrderDate":"4/7/2017","TotalPayment":"$879309.12","Status":5,"Type":2},{"OrderID":"55111-201","ShipCountry":"JP","ShipAddress":"419 Oak Valley Point","ShipName":"Kirlin Group","OrderDate":"11/14/2017","TotalPayment":"$581314.23","Status":2,"Type":2},{"OrderID":"75936-111","ShipCountry":"ID","ShipAddress":"9 Amoth Park","ShipName":"Murphy Group","OrderDate":"6/17/2017","TotalPayment":"$1023341.49","Status":6,"Type":1},{"OrderID":"0378-4050","ShipCountry":"PK","ShipAddress":"768 La Follette Road","ShipName":"Hackett and Sons","OrderDate":"11/19/2017","TotalPayment":"$1152644.38","Status":6,"Type":2},{"OrderID":"0019-3183","ShipCountry":"CM","ShipAddress":"22 Twin Pines Drive","ShipName":"Hane-Labadie","OrderDate":"7/29/2017","TotalPayment":"$11383.20","Status":6,"Type":1},{"OrderID":"0395-1685","ShipCountry":"CN","ShipAddress":"588 Fair Oaks Street","ShipName":"Bergstrom LLC","OrderDate":"11/30/2017","TotalPayment":"$584539.91","Status":5,"Type":3},{"OrderID":"50222-227","ShipCountry":"CN","ShipAddress":"689 Kipling Avenue","ShipName":"Harris Inc","OrderDate":"10/20/2017","TotalPayment":"$362300.00","Status":6,"Type":1},{"OrderID":"68828-162","ShipCountry":"BR","ShipAddress":"032 Nobel Place","ShipName":"Douglas-DuBuque","OrderDate":"5/6/2016","TotalPayment":"$880361.73","Status":5,"Type":2},{"OrderID":"62756-915","ShipCountry":"ZA","ShipAddress":"36 Montana Court","ShipName":"Morar, Ward and Lubowitz","OrderDate":"6/15/2017","TotalPayment":"$341582.38","Status":5,"Type":2},{"OrderID":"0179-0138","ShipCountry":"UG","ShipAddress":"1742 Grayhawk Road","ShipName":"Schimmel, Marvin and Littel","OrderDate":"1/29/2016","TotalPayment":"$877251.79","Status":2,"Type":3},{"OrderID":"60505-2660","ShipCountry":"ID","ShipAddress":"2 Prairie Rose Plaza","ShipName":"Adams-Hamill","OrderDate":"9/16/2016","TotalPayment":"$501240.91","Status":4,"Type":2},{"OrderID":"0378-0217","ShipCountry":"ID","ShipAddress":"7 Eagan Crossing","ShipName":"Schuppe, Kessler and Gutkowski","OrderDate":"4/21/2016","TotalPayment":"$919986.40","Status":5,"Type":1}]},\n' +
        '{"RecordID":89,"FirstName":"Suzann","LastName":"Gulk","Company":"Skyvu","Email":"sgulk2g@wikia.com","Phone":"382-814-8377","Status":1,"Type":3,"Orders":[{"OrderID":"35000-674","ShipCountry":"ID","ShipAddress":"1 Namekagon Trail","ShipName":"Spinka and Sons","OrderDate":"2/8/2017","TotalPayment":"$475714.62","Status":1,"Type":2},{"OrderID":"44924-119","ShipCountry":"CN","ShipAddress":"35045 Dovetail Center","ShipName":"Hirthe and Sons","OrderDate":"8/12/2017","TotalPayment":"$241115.26","Status":2,"Type":2},{"OrderID":"0135-0228","ShipCountry":"UA","ShipAddress":"0 Sunbrook Drive","ShipName":"Mante Inc","OrderDate":"9/19/2016","TotalPayment":"$1039143.66","Status":5,"Type":3},{"OrderID":"60760-104","ShipCountry":"PH","ShipAddress":"43 Division Pass","ShipName":"Champlin and Sons","OrderDate":"6/17/2017","TotalPayment":"$598633.84","Status":1,"Type":2},{"OrderID":"11509-0014","ShipCountry":"PL","ShipAddress":"447 Cardinal Crossing","ShipName":"Marquardt-Muller","OrderDate":"8/14/2016","TotalPayment":"$410680.95","Status":5,"Type":1},{"OrderID":"0135-0532","ShipCountry":"AF","ShipAddress":"82953 Roth Crossing","ShipName":"Kunze-Braun","OrderDate":"8/8/2017","TotalPayment":"$619518.55","Status":3,"Type":3},{"OrderID":"50375-2001","ShipCountry":"ID","ShipAddress":"4038 Meadow Vale Terrace","ShipName":"Langosh-Wehner","OrderDate":"2/16/2017","TotalPayment":"$689764.29","Status":1,"Type":2},{"OrderID":"49967-254","ShipCountry":"ID","ShipAddress":"0150 Swallow Alley","ShipName":"VonRueden-Ondricka","OrderDate":"8/2/2016","TotalPayment":"$976004.18","Status":6,"Type":3},{"OrderID":"67544-408","ShipCountry":"PS","ShipAddress":"6 Fairfield Hill","ShipName":"Bergnaum, Hodkiewicz and Schuster","OrderDate":"5/27/2017","TotalPayment":"$221506.44","Status":4,"Type":2},{"OrderID":"16729-150","ShipCountry":"BR","ShipAddress":"8 Sunfield Park","ShipName":"Walker-Quitzon","OrderDate":"8/13/2016","TotalPayment":"$52854.86","Status":1,"Type":1},{"OrderID":"61601-1117","ShipCountry":"CN","ShipAddress":"568 Kennedy Terrace","ShipName":"Kuhlman-Dach","OrderDate":"2/1/2017","TotalPayment":"$821403.38","Status":1,"Type":1},{"OrderID":"0049-2720","ShipCountry":"CN","ShipAddress":"0443 Harper Center","ShipName":"Lockman, Wilkinson and Ondricka","OrderDate":"5/21/2016","TotalPayment":"$747707.21","Status":1,"Type":1}]},\n' +
        '{"RecordID":90,"FirstName":"Peta","LastName":"Lowerson","Company":"Flashdog","Email":"plowerson2h@google.nl","Phone":"720-284-2160","Status":6,"Type":2,"Orders":[{"OrderID":"76237-115","ShipCountry":"CN","ShipAddress":"80 Glacier Hill Place","ShipName":"West-Gulgowski","OrderDate":"5/14/2017","TotalPayment":"$875204.16","Status":3,"Type":2},{"OrderID":"0603-6135","ShipCountry":"FR","ShipAddress":"5 Becker Park","ShipName":"Ortiz-Hudson","OrderDate":"10/16/2017","TotalPayment":"$866133.74","Status":5,"Type":2},{"OrderID":"43419-016","ShipCountry":"US","ShipAddress":"53 Del Mar Avenue","ShipName":"Boehm, Hermiston and Jast","OrderDate":"12/25/2016","TotalPayment":"$19830.02","Status":4,"Type":2},{"OrderID":"50488-1201","ShipCountry":"FR","ShipAddress":"54 Stang Crossing","ShipName":"Ledner-Ebert","OrderDate":"1/19/2017","TotalPayment":"$16451.23","Status":1,"Type":2},{"OrderID":"49580-2104","ShipCountry":"ID","ShipAddress":"187 Fremont Hill","ShipName":"Brakus-Kunze","OrderDate":"1/21/2017","TotalPayment":"$282407.28","Status":5,"Type":3},{"OrderID":"64679-736","ShipCountry":"ID","ShipAddress":"13 Mandrake Avenue","ShipName":"Bruen and Sons","OrderDate":"5/26/2016","TotalPayment":"$582639.74","Status":6,"Type":3},{"OrderID":"47202-1504","ShipCountry":"CN","ShipAddress":"9705 Browning Parkway","ShipName":"Willms-Jerde","OrderDate":"12/30/2016","TotalPayment":"$286905.37","Status":1,"Type":1},{"OrderID":"52125-933","ShipCountry":"ID","ShipAddress":"39 Eastwood Terrace","ShipName":"Schaefer-Wunsch","OrderDate":"4/9/2017","TotalPayment":"$1058775.01","Status":1,"Type":2},{"OrderID":"51772-314","ShipCountry":"PL","ShipAddress":"437 Barby Center","ShipName":"DuBuque, Thompson and Wilderman","OrderDate":"9/5/2017","TotalPayment":"$488389.95","Status":1,"Type":3}]},\n' +
        '{"RecordID":91,"FirstName":"Conny","LastName":"Van Velde","Company":"Kamba","Email":"cvanvelde2i@whitehouse.gov","Phone":"757-718-0233","Status":3,"Type":3,"Orders":[{"OrderID":"75862-019","ShipCountry":"PE","ShipAddress":"1306 David Terrace","ShipName":"Stehr, Jacobi and Aufderhar","OrderDate":"3/30/2016","TotalPayment":"$166737.13","Status":3,"Type":3},{"OrderID":"51346-227","ShipCountry":"ID","ShipAddress":"0440 Logan Drive","ShipName":"Luettgen, Leffler and Braun","OrderDate":"12/13/2016","TotalPayment":"$558879.07","Status":5,"Type":2},{"OrderID":"17478-705","ShipCountry":"MN","ShipAddress":"6816 Logan Parkway","ShipName":"Price LLC","OrderDate":"8/9/2017","TotalPayment":"$248873.06","Status":6,"Type":1},{"OrderID":"55154-4793","ShipCountry":"CN","ShipAddress":"875 Milwaukee Plaza","ShipName":"Bayer-McLaughlin","OrderDate":"5/29/2016","TotalPayment":"$314883.79","Status":2,"Type":3},{"OrderID":"65044-2015","ShipCountry":"PT","ShipAddress":"0433 Prairieview Street","ShipName":"Douglas-Armstrong","OrderDate":"4/8/2016","TotalPayment":"$843415.27","Status":5,"Type":1},{"OrderID":"46362-004","ShipCountry":"CN","ShipAddress":"48 Northland Alley","ShipName":"Quitzon, Koss and Padberg","OrderDate":"8/1/2017","TotalPayment":"$533000.08","Status":2,"Type":2},{"OrderID":"52125-840","ShipCountry":"US","ShipAddress":"937 Clarendon Trail","ShipName":"Raynor-Ernser","OrderDate":"6/17/2017","TotalPayment":"$916324.68","Status":2,"Type":2},{"OrderID":"68983-003","ShipCountry":"CA","ShipAddress":"137 Del Sol Place","ShipName":"Lehner Group","OrderDate":"4/27/2016","TotalPayment":"$996661.61","Status":3,"Type":1},{"OrderID":"0006-3845","ShipCountry":"ID","ShipAddress":"6 Fulton Alley","ShipName":"Runte, Bosco and Lubowitz","OrderDate":"5/30/2016","TotalPayment":"$1046943.59","Status":6,"Type":1},{"OrderID":"57520-0287","ShipCountry":"CZ","ShipAddress":"84369 Homewood Drive","ShipName":"Stracke, Howe and Fadel","OrderDate":"5/1/2017","TotalPayment":"$334368.68","Status":6,"Type":1},{"OrderID":"43269-845","ShipCountry":"ID","ShipAddress":"58 Sommers Road","ShipName":"Kozey-Mraz","OrderDate":"8/21/2016","TotalPayment":"$653252.16","Status":3,"Type":2},{"OrderID":"50988-216","ShipCountry":"PH","ShipAddress":"2765 Mcbride Center","ShipName":"Upton, Orn and Altenwerth","OrderDate":"10/15/2016","TotalPayment":"$85009.11","Status":6,"Type":3},{"OrderID":"48951-4089","ShipCountry":"RU","ShipAddress":"7 North Junction","ShipName":"Harris-Hettinger","OrderDate":"1/7/2016","TotalPayment":"$730607.14","Status":4,"Type":3},{"OrderID":"41250-314","ShipCountry":"TH","ShipAddress":"7716 Londonderry Junction","ShipName":"Donnelly and Sons","OrderDate":"1/6/2017","TotalPayment":"$100162.43","Status":6,"Type":1},{"OrderID":"42291-211","ShipCountry":"CN","ShipAddress":"84148 Harper Road","ShipName":"Pfeffer-Wyman","OrderDate":"7/27/2016","TotalPayment":"$814064.01","Status":6,"Type":2},{"OrderID":"64942-1310","ShipCountry":"SY","ShipAddress":"72 Golden Leaf Drive","ShipName":"Bahringer-Rau","OrderDate":"7/12/2017","TotalPayment":"$292241.17","Status":6,"Type":1},{"OrderID":"60637-006","ShipCountry":"ID","ShipAddress":"0565 Scofield Park","ShipName":"McCullough Group","OrderDate":"3/12/2016","TotalPayment":"$253805.96","Status":5,"Type":1},{"OrderID":"55289-119","ShipCountry":"RU","ShipAddress":"56299 Gateway Avenue","ShipName":"Murazik-Stroman","OrderDate":"1/8/2017","TotalPayment":"$950408.30","Status":5,"Type":2},{"OrderID":"24236-168","ShipCountry":"AR","ShipAddress":"5529 Sunbrook Plaza","ShipName":"Trantow Inc","OrderDate":"10/22/2016","TotalPayment":"$725269.64","Status":1,"Type":3}]},\n' +
        '{"RecordID":92,"FirstName":"Elset","LastName":"Troppmann","Company":"Myworks","Email":"etroppmann2j@nbcnews.com","Phone":"589-896-6572","Status":4,"Type":3,"Orders":[{"OrderID":"68084-053","ShipCountry":"CN","ShipAddress":"150 Butterfield Hill","ShipName":"Huels LLC","OrderDate":"11/8/2017","TotalPayment":"$828367.64","Status":3,"Type":2},{"OrderID":"0268-6711","ShipCountry":"RU","ShipAddress":"3942 Harbort Avenue","ShipName":"Altenwerth and Sons","OrderDate":"11/9/2016","TotalPayment":"$804100.87","Status":3,"Type":3},{"OrderID":"51346-218","ShipCountry":"FR","ShipAddress":"5 Express Street","ShipName":"Metz LLC","OrderDate":"7/8/2016","TotalPayment":"$122247.53","Status":6,"Type":1},{"OrderID":"64778-0218","ShipCountry":"UZ","ShipAddress":"2 Del Sol Avenue","ShipName":"Reichert, Abbott and Stark","OrderDate":"6/11/2016","TotalPayment":"$864395.39","Status":5,"Type":2},{"OrderID":"51060-003","ShipCountry":"ID","ShipAddress":"3 Esch Drive","ShipName":"VonRueden, Haley and Christiansen","OrderDate":"7/3/2016","TotalPayment":"$238996.02","Status":3,"Type":2},{"OrderID":"62584-693","ShipCountry":"CN","ShipAddress":"8377 Sunfield Terrace","ShipName":"Jast Inc","OrderDate":"6/15/2017","TotalPayment":"$1087549.29","Status":4,"Type":2},{"OrderID":"41520-528","ShipCountry":"US","ShipAddress":"3193 Warner Trail","ShipName":"Leffler, Graham and Fritsch","OrderDate":"2/13/2016","TotalPayment":"$551029.70","Status":1,"Type":1},{"OrderID":"27808-001","ShipCountry":"CN","ShipAddress":"78665 Glendale Center","ShipName":"Stark and Sons","OrderDate":"4/18/2016","TotalPayment":"$1028580.53","Status":2,"Type":3},{"OrderID":"64764-304","ShipCountry":"CN","ShipAddress":"6 Manitowish Center","ShipName":"Mitchell-Bergnaum","OrderDate":"3/19/2017","TotalPayment":"$234839.83","Status":6,"Type":3},{"OrderID":"59779-175","ShipCountry":"TN","ShipAddress":"44121 Bay Place","ShipName":"Gerlach-Schaden","OrderDate":"8/28/2016","TotalPayment":"$308722.03","Status":6,"Type":3},{"OrderID":"64950-230","ShipCountry":"ID","ShipAddress":"7048 Tennyson Plaza","ShipName":"Lesch-Schimmel","OrderDate":"11/27/2017","TotalPayment":"$1159082.28","Status":4,"Type":2},{"OrderID":"41163-678","ShipCountry":"AR","ShipAddress":"2056 Cardinal Terrace","ShipName":"Yost Group","OrderDate":"2/18/2017","TotalPayment":"$994037.39","Status":2,"Type":2},{"OrderID":"62011-0194","ShipCountry":"CN","ShipAddress":"49626 Brown Parkway","ShipName":"Russel-Towne","OrderDate":"10/21/2016","TotalPayment":"$990683.04","Status":4,"Type":2},{"OrderID":"55289-187","ShipCountry":"RS","ShipAddress":"2619 Blaine Street","ShipName":"Howe-Flatley","OrderDate":"11/21/2016","TotalPayment":"$1122988.11","Status":4,"Type":2}]},\n' +
        '{"RecordID":93,"FirstName":"Andras","LastName":"Imos","Company":"Shufflebeat","Email":"aimos2k@creativecommons.org","Phone":"843-961-3303","Status":6,"Type":2,"Orders":[{"OrderID":"60760-128","ShipCountry":"SI","ShipAddress":"2730 6th Junction","ShipName":"Kerluke-Larkin","OrderDate":"11/28/2017","TotalPayment":"$42250.74","Status":6,"Type":2},{"OrderID":"36987-2760","ShipCountry":"PT","ShipAddress":"038 Sutteridge Crossing","ShipName":"Rolfson-Huel","OrderDate":"3/30/2017","TotalPayment":"$1124121.07","Status":6,"Type":1},{"OrderID":"68599-6112","ShipCountry":"CN","ShipAddress":"329 Kim Lane","ShipName":"Leffler, Howell and Heathcote","OrderDate":"5/28/2016","TotalPayment":"$1102967.88","Status":1,"Type":2},{"OrderID":"75981-226","ShipCountry":"RU","ShipAddress":"5 Talisman Place","ShipName":"Wisoky-Trantow","OrderDate":"12/1/2017","TotalPayment":"$534482.80","Status":4,"Type":3},{"OrderID":"68987-014","ShipCountry":"BR","ShipAddress":"22 Rowland Park","ShipName":"Green-Carter","OrderDate":"1/28/2016","TotalPayment":"$968494.39","Status":1,"Type":2},{"OrderID":"65862-503","ShipCountry":"ID","ShipAddress":"78 Eastwood Terrace","ShipName":"Raynor-Doyle","OrderDate":"1/18/2017","TotalPayment":"$409292.08","Status":5,"Type":1},{"OrderID":"37808-352","ShipCountry":"ID","ShipAddress":"1037 Fremont Place","ShipName":"Stehr Group","OrderDate":"12/25/2016","TotalPayment":"$793192.36","Status":6,"Type":3},{"OrderID":"35356-783","ShipCountry":"PH","ShipAddress":"0 Bunting Point","ShipName":"Kerluke-Kris","OrderDate":"10/14/2016","TotalPayment":"$877510.41","Status":2,"Type":2},{"OrderID":"59762-1852","ShipCountry":"CN","ShipAddress":"96797 Mallard Trail","ShipName":"Donnelly-Tremblay","OrderDate":"6/6/2016","TotalPayment":"$830085.86","Status":6,"Type":3},{"OrderID":"62011-0148","ShipCountry":"PK","ShipAddress":"0617 Jenna Place","ShipName":"Wisoky-Feil","OrderDate":"8/28/2017","TotalPayment":"$1130566.55","Status":4,"Type":1},{"OrderID":"24385-039","ShipCountry":"GT","ShipAddress":"067 Ohio Alley","ShipName":"Monahan, Hagenes and Larkin","OrderDate":"12/9/2017","TotalPayment":"$158778.64","Status":5,"Type":3},{"OrderID":"64942-1169","ShipCountry":"BR","ShipAddress":"5836 Darwin Place","ShipName":"Brekke-Kuhn","OrderDate":"6/30/2017","TotalPayment":"$822795.89","Status":6,"Type":1},{"OrderID":"68220-111","ShipCountry":"CO","ShipAddress":"629 Straubel Point","ShipName":"Anderson, Grady and Okuneva","OrderDate":"8/18/2016","TotalPayment":"$83037.97","Status":5,"Type":3}]},\n' +
        '{"RecordID":94,"FirstName":"Tom","LastName":"Oneill","Company":"Twitterbridge","Email":"toneill2l@twitter.com","Phone":"913-201-6258","Status":4,"Type":3,"Orders":[{"OrderID":"55111-154","ShipCountry":"PH","ShipAddress":"62 Little Fleur Avenue","ShipName":"Kris, Cronin and Ebert","OrderDate":"1/21/2016","TotalPayment":"$683381.79","Status":1,"Type":1},{"OrderID":"11822-0348","ShipCountry":"CN","ShipAddress":"140 Nancy Street","ShipName":"Mraz-Cole","OrderDate":"11/13/2017","TotalPayment":"$847098.44","Status":3,"Type":3},{"OrderID":"35356-473","ShipCountry":"PL","ShipAddress":"44 Mariners Cove Way","ShipName":"Rosenbaum Group","OrderDate":"2/21/2016","TotalPayment":"$788055.20","Status":4,"Type":1},{"OrderID":"60512-9300","ShipCountry":"VN","ShipAddress":"8 Dwight Terrace","ShipName":"Borer, Renner and McClure","OrderDate":"3/11/2017","TotalPayment":"$678113.91","Status":6,"Type":2},{"OrderID":"68084-055","ShipCountry":"BR","ShipAddress":"4 Farragut Crossing","ShipName":"McGlynn Inc","OrderDate":"3/28/2017","TotalPayment":"$1126780.70","Status":1,"Type":3},{"OrderID":"62499-535","ShipCountry":"PH","ShipAddress":"18 Anniversary Parkway","ShipName":"Toy LLC","OrderDate":"9/21/2016","TotalPayment":"$116014.63","Status":1,"Type":2},{"OrderID":"17433-9877","ShipCountry":"ZA","ShipAddress":"2 Hoepker Parkway","ShipName":"Wolff Inc","OrderDate":"8/17/2017","TotalPayment":"$976577.47","Status":3,"Type":2},{"OrderID":"10056-306","ShipCountry":"CN","ShipAddress":"97 Tennessee Plaza","ShipName":"Kautzer LLC","OrderDate":"7/8/2016","TotalPayment":"$1145695.83","Status":5,"Type":2},{"OrderID":"60505-6025","ShipCountry":"RU","ShipAddress":"168 Sycamore Way","ShipName":"Wisoky, Schuppe and Monahan","OrderDate":"10/7/2016","TotalPayment":"$903744.35","Status":6,"Type":3},{"OrderID":"54973-2906","ShipCountry":"CN","ShipAddress":"6 Porter Hill","ShipName":"Crist, Gaylord and Gerlach","OrderDate":"12/25/2017","TotalPayment":"$770673.33","Status":5,"Type":1},{"OrderID":"0603-1584","ShipCountry":"PH","ShipAddress":"697 Moland Trail","ShipName":"Koepp Group","OrderDate":"7/30/2016","TotalPayment":"$860539.83","Status":6,"Type":2},{"OrderID":"36987-1178","ShipCountry":"AM","ShipAddress":"73 Ruskin Lane","ShipName":"Hansen Group","OrderDate":"6/20/2017","TotalPayment":"$834647.39","Status":6,"Type":3},{"OrderID":"21695-228","ShipCountry":"CN","ShipAddress":"0722 Arapahoe Circle","ShipName":"Kuhic Group","OrderDate":"2/10/2016","TotalPayment":"$499027.62","Status":5,"Type":1}]},\n' +
        '{"RecordID":95,"FirstName":"Laural","LastName":"Jandel","Company":"Aivee","Email":"ljandel2m@house.gov","Phone":"201-172-8173","Status":1,"Type":2,"Orders":[{"OrderID":"65862-200","ShipCountry":"GR","ShipAddress":"051 Fallview Pass","ShipName":"Gutmann, Keebler and Ward","OrderDate":"3/31/2016","TotalPayment":"$907342.41","Status":3,"Type":1},{"OrderID":"61722-084","ShipCountry":"ID","ShipAddress":"3 Springview Terrace","ShipName":"Emard LLC","OrderDate":"1/11/2017","TotalPayment":"$776461.97","Status":3,"Type":2},{"OrderID":"50436-6106","ShipCountry":"ID","ShipAddress":"21 Anniversary Pass","ShipName":"Hamill, Feest and Bashirian","OrderDate":"2/24/2016","TotalPayment":"$61980.05","Status":2,"Type":1},{"OrderID":"60793-435","ShipCountry":"CN","ShipAddress":"76751 Sugar Lane","ShipName":"Carter, Johns and Hahn","OrderDate":"8/26/2016","TotalPayment":"$222122.28","Status":6,"Type":3},{"OrderID":"67751-140","ShipCountry":"ID","ShipAddress":"048 Ronald Regan Park","ShipName":"Mann-Borer","OrderDate":"9/9/2016","TotalPayment":"$974085.28","Status":4,"Type":3},{"OrderID":"48951-5008","ShipCountry":"CN","ShipAddress":"761 Birchwood Circle","ShipName":"Kuvalis, Collins and Treutel","OrderDate":"5/19/2017","TotalPayment":"$1086820.63","Status":3,"Type":2},{"OrderID":"54118-7993","ShipCountry":"BR","ShipAddress":"8757 Bellgrove Point","ShipName":"Barrows and Sons","OrderDate":"11/1/2017","TotalPayment":"$504835.65","Status":3,"Type":1}]},\n' +
        '{"RecordID":96,"FirstName":"Ainsley","LastName":"Downes","Company":"Skyba","Email":"adownes2n@simplemachines.org","Phone":"878-228-3589","Status":2,"Type":2,"Orders":[{"OrderID":"41250-808","ShipCountry":"CN","ShipAddress":"87601 Fremont Center","ShipName":"McGlynn, Daugherty and Bradtke","OrderDate":"8/28/2017","TotalPayment":"$1120848.09","Status":1,"Type":1},{"OrderID":"0140-0004","ShipCountry":"NO","ShipAddress":"8520 Mayer Plaza","ShipName":"Cruickshank Inc","OrderDate":"1/3/2016","TotalPayment":"$535728.14","Status":5,"Type":3},{"OrderID":"25021-668","ShipCountry":"FR","ShipAddress":"6883 Debra Court","ShipName":"Doyle-Keebler","OrderDate":"9/3/2017","TotalPayment":"$94121.60","Status":5,"Type":2},{"OrderID":"60193-202","ShipCountry":"ID","ShipAddress":"148 Dawn Parkway","ShipName":"Rogahn, Dooley and Rippin","OrderDate":"8/30/2016","TotalPayment":"$609235.39","Status":4,"Type":2},{"OrderID":"55315-238","ShipCountry":"CN","ShipAddress":"4 Hoard Lane","ShipName":"Bogan Inc","OrderDate":"11/14/2017","TotalPayment":"$423241.38","Status":5,"Type":2},{"OrderID":"0168-0336","ShipCountry":"NL","ShipAddress":"0891 Anderson Point","ShipName":"Rutherford-Crona","OrderDate":"2/6/2016","TotalPayment":"$592220.51","Status":5,"Type":2},{"OrderID":"36987-2399","ShipCountry":"US","ShipAddress":"2 Fremont Hill","ShipName":"Upton, Schmidt and Harber","OrderDate":"4/21/2017","TotalPayment":"$273539.88","Status":2,"Type":3},{"OrderID":"36987-1620","ShipCountry":"NZ","ShipAddress":"75 Birchwood Trail","ShipName":"Marquardt Group","OrderDate":"1/19/2016","TotalPayment":"$885687.30","Status":6,"Type":2},{"OrderID":"59667-0014","ShipCountry":"LC","ShipAddress":"5 Butternut Point","ShipName":"Batz-Kautzer","OrderDate":"11/2/2016","TotalPayment":"$167057.92","Status":3,"Type":2},{"OrderID":"0409-5758","ShipCountry":"CN","ShipAddress":"853 Mcguire Point","ShipName":"Hettinger, Dibbert and Carter","OrderDate":"11/17/2017","TotalPayment":"$687912.02","Status":6,"Type":3},{"OrderID":"21695-277","ShipCountry":"PT","ShipAddress":"0191 Oak Valley Terrace","ShipName":"Schuster, Wolf and Ritchie","OrderDate":"5/30/2016","TotalPayment":"$76351.06","Status":5,"Type":2},{"OrderID":"55714-4588","ShipCountry":"MZ","ShipAddress":"95 Commercial Drive","ShipName":"Becker Group","OrderDate":"12/8/2016","TotalPayment":"$790129.86","Status":1,"Type":3},{"OrderID":"49999-192","ShipCountry":"FR","ShipAddress":"54 Rieder Way","ShipName":"Ebert Inc","OrderDate":"5/18/2016","TotalPayment":"$441078.53","Status":6,"Type":1},{"OrderID":"14783-253","ShipCountry":"BG","ShipAddress":"3 Trailsway Terrace","ShipName":"Senger, Bauch and Collier","OrderDate":"1/6/2017","TotalPayment":"$1122929.05","Status":5,"Type":1},{"OrderID":"43063-486","ShipCountry":"GR","ShipAddress":"91324 Hoepker Alley","ShipName":"Koss, Emmerich and Lehner","OrderDate":"3/25/2016","TotalPayment":"$388402.36","Status":1,"Type":1},{"OrderID":"37000-395","ShipCountry":"CN","ShipAddress":"8375 Stephen Pass","ShipName":"Legros, Hand and Emard","OrderDate":"5/12/2017","TotalPayment":"$219180.53","Status":2,"Type":3},{"OrderID":"37808-272","ShipCountry":"UZ","ShipAddress":"7302 Basil Alley","ShipName":"Kassulke-Vandervort","OrderDate":"2/21/2016","TotalPayment":"$1089789.57","Status":4,"Type":1}]},\n' +
        '{"RecordID":97,"FirstName":"Zeke","LastName":"Woodall","Company":"Wikizz","Email":"zwoodall2o@trellian.com","Phone":"706-661-5835","Status":1,"Type":1,"Orders":[{"OrderID":"55150-117","ShipCountry":"GE","ShipAddress":"3 Jenna Pass","ShipName":"Auer, Towne and Cremin","OrderDate":"6/25/2016","TotalPayment":"$295291.68","Status":4,"Type":3},{"OrderID":"68786-212","ShipCountry":"FR","ShipAddress":"59 Shasta Way","ShipName":"Quigley, Stoltenberg and Hermiston","OrderDate":"10/9/2017","TotalPayment":"$34719.10","Status":5,"Type":1},{"OrderID":"50436-6578","ShipCountry":"MX","ShipAddress":"993 Anzinger Pass","ShipName":"Bruen LLC","OrderDate":"8/16/2017","TotalPayment":"$195900.25","Status":1,"Type":1},{"OrderID":"10578-037","ShipCountry":"MX","ShipAddress":"522 Burning Wood Court","ShipName":"Ondricka, Leffler and Gusikowski","OrderDate":"8/12/2016","TotalPayment":"$1191897.61","Status":4,"Type":1},{"OrderID":"68026-501","ShipCountry":"ID","ShipAddress":"730 Barnett Street","ShipName":"Powlowski and Sons","OrderDate":"9/6/2016","TotalPayment":"$649539.60","Status":1,"Type":1},{"OrderID":"0781-5311","ShipCountry":"PH","ShipAddress":"2476 Scofield Street","ShipName":"Bartoletti Group","OrderDate":"11/23/2017","TotalPayment":"$75470.34","Status":2,"Type":1}]},\n' +
        '{"RecordID":98,"FirstName":"Justis","LastName":"Nisbith","Company":"Linktype","Email":"jnisbith2p@amazonaws.com","Phone":"839-577-2833","Status":2,"Type":1,"Orders":[{"OrderID":"54868-1362","ShipCountry":"SI","ShipAddress":"51131 Oakridge Hill","ShipName":"Kris-Grant","OrderDate":"7/29/2017","TotalPayment":"$558522.49","Status":3,"Type":3},{"OrderID":"36987-1678","ShipCountry":"RU","ShipAddress":"13196 Fair Oaks Terrace","ShipName":"Towne, Dare and O\'Kon","OrderDate":"6/17/2017","TotalPayment":"$333307.86","Status":4,"Type":1},{"OrderID":"51143-296","ShipCountry":"CN","ShipAddress":"24330 Parkside Crossing","ShipName":"Cummerata Group","OrderDate":"3/24/2016","TotalPayment":"$1089056.77","Status":2,"Type":2},{"OrderID":"11673-230","ShipCountry":"SE","ShipAddress":"1259 Erie Terrace","ShipName":"Mertz, Walker and Mueller","OrderDate":"3/29/2016","TotalPayment":"$1087498.16","Status":2,"Type":2},{"OrderID":"68745-1046","ShipCountry":"MN","ShipAddress":"199 3rd Park","ShipName":"Smith Inc","OrderDate":"3/23/2017","TotalPayment":"$289840.91","Status":4,"Type":1},{"OrderID":"49288-0248","ShipCountry":"ID","ShipAddress":"59350 Sugar Circle","ShipName":"Runte LLC","OrderDate":"12/14/2017","TotalPayment":"$323198.84","Status":4,"Type":1},{"OrderID":"14060-002","ShipCountry":"PH","ShipAddress":"3229 Summit Crossing","ShipName":"Barrows Inc","OrderDate":"8/10/2017","TotalPayment":"$504532.87","Status":6,"Type":3},{"OrderID":"50438-400","ShipCountry":"AF","ShipAddress":"04 Messerschmidt Lane","ShipName":"Gleichner-Lakin","OrderDate":"3/10/2016","TotalPayment":"$437054.77","Status":5,"Type":1},{"OrderID":"0363-0306","ShipCountry":"MA","ShipAddress":"55 Russell Court","ShipName":"Cole, Mraz and Romaguera","OrderDate":"5/2/2016","TotalPayment":"$565789.97","Status":1,"Type":2},{"OrderID":"0224-1866","ShipCountry":"SE","ShipAddress":"23441 Meadow Ridge Crossing","ShipName":"Watsica, Schulist and Boyle","OrderDate":"7/28/2016","TotalPayment":"$589391.99","Status":2,"Type":2},{"OrderID":"63517-160","ShipCountry":"MN","ShipAddress":"64299 Westend Park","ShipName":"Zboncak-Satterfield","OrderDate":"3/29/2016","TotalPayment":"$457636.51","Status":2,"Type":3},{"OrderID":"55154-5434","ShipCountry":"RU","ShipAddress":"939 Paget Street","ShipName":"Becker Inc","OrderDate":"6/25/2016","TotalPayment":"$195024.63","Status":5,"Type":2},{"OrderID":"0006-4943","ShipCountry":"PL","ShipAddress":"20886 Moulton Plaza","ShipName":"Mante, Upton and Anderson","OrderDate":"8/25/2016","TotalPayment":"$918116.45","Status":5,"Type":2},{"OrderID":"56062-602","ShipCountry":"CN","ShipAddress":"9 Moland Trail","ShipName":"Ruecker, Bernier and Lubowitz","OrderDate":"11/1/2017","TotalPayment":"$1004782.88","Status":1,"Type":1},{"OrderID":"54235-204","ShipCountry":"CN","ShipAddress":"73072 Mcbride Point","ShipName":"Kilback-Mann","OrderDate":"4/28/2016","TotalPayment":"$903662.48","Status":2,"Type":3},{"OrderID":"54569-1056","ShipCountry":"PH","ShipAddress":"9 Lakewood Gardens Road","ShipName":"Harris-Hudson","OrderDate":"6/22/2016","TotalPayment":"$825792.33","Status":5,"Type":1},{"OrderID":"17630-2025","ShipCountry":"AM","ShipAddress":"2 Donald Park","ShipName":"Paucek, Blick and Jones","OrderDate":"12/9/2017","TotalPayment":"$1174344.68","Status":1,"Type":2}]},\n' +
        '{"RecordID":99,"FirstName":"Romola","LastName":"Alman","Company":"Meetz","Email":"ralman2q@thetimes.co.uk","Phone":"411-805-2589","Status":4,"Type":3,"Orders":[{"OrderID":"0641-0929","ShipCountry":"NG","ShipAddress":"4032 Schurz Hill","ShipName":"Heaney-Collins","OrderDate":"2/14/2017","TotalPayment":"$1071862.39","Status":1,"Type":2},{"OrderID":"52862-303","ShipCountry":"AM","ShipAddress":"673 Doe Crossing Hill","ShipName":"Durgan, Barrows and Littel","OrderDate":"11/19/2016","TotalPayment":"$558546.39","Status":2,"Type":3},{"OrderID":"63629-4089","ShipCountry":"PH","ShipAddress":"6308 Reinke Crossing","ShipName":"Parker Group","OrderDate":"10/24/2016","TotalPayment":"$232703.99","Status":1,"Type":1},{"OrderID":"11673-882","ShipCountry":"ID","ShipAddress":"25429 Birchwood Lane","ShipName":"Funk, Bergstrom and Quigley","OrderDate":"8/14/2017","TotalPayment":"$983974.55","Status":4,"Type":1},{"OrderID":"63550-191","ShipCountry":"ID","ShipAddress":"5 Northland Park","ShipName":"Collier-Gottlieb","OrderDate":"7/19/2016","TotalPayment":"$1113597.44","Status":5,"Type":1},{"OrderID":"60429-101","ShipCountry":"ID","ShipAddress":"47 Carpenter Road","ShipName":"Bauch, Hammes and Wehner","OrderDate":"7/10/2016","TotalPayment":"$206192.89","Status":1,"Type":2}]},\n' +
        '{"RecordID":100,"FirstName":"Starla","LastName":"Marrows","Company":"Dabshots","Email":"smarrows2r@jalbum.net","Phone":"627-415-9760","Status":2,"Type":1,"Orders":[{"OrderID":"0603-4210","ShipCountry":"BR","ShipAddress":"26418 Macpherson Place","ShipName":"Schuppe-Prohaska","OrderDate":"8/11/2017","TotalPayment":"$873735.12","Status":6,"Type":1},{"OrderID":"64117-121","ShipCountry":"BG","ShipAddress":"8 Gateway Crossing","ShipName":"Wisoky-Lynch","OrderDate":"5/24/2016","TotalPayment":"$843360.37","Status":4,"Type":3},{"OrderID":"49035-007","ShipCountry":"FR","ShipAddress":"588 Superior Parkway","ShipName":"Kerluke, Lehner and Miller","OrderDate":"1/30/2017","TotalPayment":"$12987.89","Status":3,"Type":3},{"OrderID":"55253-801","ShipCountry":"XK","ShipAddress":"90 Waubesa Point","ShipName":"Yost-Considine","OrderDate":"4/19/2017","TotalPayment":"$440975.42","Status":5,"Type":1},{"OrderID":"55741-412","ShipCountry":"CN","ShipAddress":"8732 Springview Circle","ShipName":"Trantow, Leffler and Williamson","OrderDate":"3/20/2017","TotalPayment":"$833143.21","Status":2,"Type":2},{"OrderID":"53723-0001","ShipCountry":"FR","ShipAddress":"76 Ludington Pass","ShipName":"Jast Inc","OrderDate":"4/27/2017","TotalPayment":"$991927.23","Status":6,"Type":3},{"OrderID":"11822-2160","ShipCountry":"JP","ShipAddress":"26 Barnett Circle","ShipName":"Stracke LLC","OrderDate":"8/17/2017","TotalPayment":"$823641.75","Status":4,"Type":1},{"OrderID":"0054-0211","ShipCountry":"RU","ShipAddress":"10 Spohn Lane","ShipName":"Parisian LLC","OrderDate":"12/2/2017","TotalPayment":"$884005.07","Status":2,"Type":2},{"OrderID":"64942-1154","ShipCountry":"PH","ShipAddress":"30192 Mifflin Trail","ShipName":"Bergnaum-O\'Conner","OrderDate":"5/8/2017","TotalPayment":"$156595.27","Status":3,"Type":2}]},\n' +
        '{"RecordID":101,"FirstName":"Mozes","LastName":"Van Salzberger","Company":"Reallinks","Email":"mvansalzberger2s@shop-pro.jp","Phone":"839-240-1855","Status":5,"Type":3,"Orders":[{"OrderID":"66336-608","ShipCountry":"PL","ShipAddress":"1298 3rd Plaza","ShipName":"Wehner, Spinka and O\'Kon","OrderDate":"11/16/2016","TotalPayment":"$364235.64","Status":5,"Type":3},{"OrderID":"65044-1213","ShipCountry":"CN","ShipAddress":"8 Leroy Alley","ShipName":"Cole and Sons","OrderDate":"6/12/2017","TotalPayment":"$903074.73","Status":4,"Type":3},{"OrderID":"67510-0172","ShipCountry":"BR","ShipAddress":"93300 Hansons Point","ShipName":"Jakubowski-Keeling","OrderDate":"3/22/2016","TotalPayment":"$302983.62","Status":6,"Type":2},{"OrderID":"68462-455","ShipCountry":"PF","ShipAddress":"498 Cardinal Drive","ShipName":"Denesik, Ziemann and Schinner","OrderDate":"10/26/2017","TotalPayment":"$967496.44","Status":3,"Type":2},{"OrderID":"52268-400","ShipCountry":"CN","ShipAddress":"77 Thackeray Circle","ShipName":"Pagac and Sons","OrderDate":"11/9/2016","TotalPayment":"$493580.73","Status":4,"Type":2},{"OrderID":"33261-994","ShipCountry":"RU","ShipAddress":"8 Kropf Circle","ShipName":"Anderson LLC","OrderDate":"10/29/2017","TotalPayment":"$875558.87","Status":6,"Type":3},{"OrderID":"58160-830","ShipCountry":"CN","ShipAddress":"738 Eastwood Crossing","ShipName":"Emmerich Group","OrderDate":"2/18/2017","TotalPayment":"$952171.71","Status":2,"Type":1},{"OrderID":"64616-101","ShipCountry":"GR","ShipAddress":"6 Kings Alley","ShipName":"Goyette, Romaguera and Block","OrderDate":"5/25/2016","TotalPayment":"$837784.89","Status":1,"Type":3}]},\n' +
        '{"RecordID":102,"FirstName":"Darby","LastName":"Edis","Company":"Skimia","Email":"dedis2t@gmpg.org","Phone":"686-750-2419","Status":4,"Type":3,"Orders":[{"OrderID":"13537-262","ShipCountry":"MN","ShipAddress":"51 Thierer Road","ShipName":"Mraz, Bechtelar and Lubowitz","OrderDate":"11/23/2016","TotalPayment":"$338109.13","Status":2,"Type":1},{"OrderID":"46122-201","ShipCountry":"ID","ShipAddress":"36 Darwin Hill","ShipName":"Crist-Zemlak","OrderDate":"8/15/2016","TotalPayment":"$570437.74","Status":4,"Type":2},{"OrderID":"35356-851","ShipCountry":"CZ","ShipAddress":"0 Anzinger Way","ShipName":"Kub, Abshire and Carroll","OrderDate":"1/7/2016","TotalPayment":"$1153461.46","Status":5,"Type":3},{"OrderID":"63824-417","ShipCountry":"GT","ShipAddress":"7161 Buhler Court","ShipName":"Crist-Kub","OrderDate":"5/5/2016","TotalPayment":"$597534.49","Status":4,"Type":1},{"OrderID":"51138-045","ShipCountry":"BR","ShipAddress":"3874 Westend Point","ShipName":"Shanahan-Fadel","OrderDate":"6/22/2016","TotalPayment":"$1181674.61","Status":6,"Type":1},{"OrderID":"43857-0157","ShipCountry":"UA","ShipAddress":"1391 Bartillon Alley","ShipName":"Borer, Kemmer and Frami","OrderDate":"7/21/2017","TotalPayment":"$972546.24","Status":4,"Type":2},{"OrderID":"63323-300","ShipCountry":"ID","ShipAddress":"94 Johnson Lane","ShipName":"Schowalter, Stanton and Frami","OrderDate":"10/12/2016","TotalPayment":"$1095878.84","Status":6,"Type":1},{"OrderID":"49348-634","ShipCountry":"ID","ShipAddress":"8 Brentwood Center","ShipName":"Kuhlman-Hansen","OrderDate":"5/4/2016","TotalPayment":"$219656.17","Status":2,"Type":1},{"OrderID":"54868-4985","ShipCountry":"CN","ShipAddress":"6641 Haas Lane","ShipName":"Upton Inc","OrderDate":"6/22/2017","TotalPayment":"$487066.62","Status":4,"Type":1},{"OrderID":"53808-0618","ShipCountry":"PT","ShipAddress":"2017 Marquette Street","ShipName":"Fritsch, Carter and Hirthe","OrderDate":"2/13/2017","TotalPayment":"$534313.91","Status":5,"Type":2},{"OrderID":"52125-466","ShipCountry":"CA","ShipAddress":"2908 Farragut Park","ShipName":"Bashirian-Leuschke","OrderDate":"9/24/2016","TotalPayment":"$26343.68","Status":1,"Type":1},{"OrderID":"63868-935","ShipCountry":"ID","ShipAddress":"3 Utah Avenue","ShipName":"Mraz-Crooks","OrderDate":"7/20/2016","TotalPayment":"$947268.41","Status":1,"Type":3},{"OrderID":"10742-8669","ShipCountry":"RU","ShipAddress":"6 Fair Oaks Avenue","ShipName":"Wiegand, Boyle and Turcotte","OrderDate":"10/6/2017","TotalPayment":"$290125.66","Status":5,"Type":1},{"OrderID":"68472-129","ShipCountry":"PH","ShipAddress":"42 Stone Corner Circle","ShipName":"Reichert Inc","OrderDate":"10/30/2016","TotalPayment":"$664406.09","Status":4,"Type":2},{"OrderID":"59779-392","ShipCountry":"GM","ShipAddress":"004 Schurz Center","ShipName":"Reynolds-Greenholt","OrderDate":"6/9/2017","TotalPayment":"$921075.04","Status":2,"Type":1},{"OrderID":"69016-001","ShipCountry":"BR","ShipAddress":"9 Paget Road","ShipName":"Rice and Sons","OrderDate":"12/18/2017","TotalPayment":"$674714.67","Status":1,"Type":3}]},\n' +
        '{"RecordID":103,"FirstName":"Cassius","LastName":"McDonand","Company":"Yoveo","Email":"cmcdonand2u@joomla.org","Phone":"351-852-6887","Status":4,"Type":2,"Orders":[{"OrderID":"36987-2421","ShipCountry":"MG","ShipAddress":"1 Boyd Hill","ShipName":"Lueilwitz-Wehner","OrderDate":"4/15/2017","TotalPayment":"$223293.93","Status":2,"Type":2},{"OrderID":"49035-180","ShipCountry":"CA","ShipAddress":"60 Mallard Point","ShipName":"West Group","OrderDate":"6/14/2017","TotalPayment":"$79526.46","Status":2,"Type":1},{"OrderID":"0185-0714","ShipCountry":"CN","ShipAddress":"89482 Sundown Plaza","ShipName":"Mertz Inc","OrderDate":"6/13/2016","TotalPayment":"$230421.44","Status":6,"Type":1},{"OrderID":"61715-118","ShipCountry":"FR","ShipAddress":"5 Lunder Pass","ShipName":"Turner-Greenholt","OrderDate":"6/10/2017","TotalPayment":"$601398.72","Status":1,"Type":3},{"OrderID":"10237-645","ShipCountry":"CN","ShipAddress":"16995 Rowland Junction","ShipName":"Crona-Price","OrderDate":"3/12/2016","TotalPayment":"$55251.54","Status":6,"Type":2}]},\n' +
        '{"RecordID":104,"FirstName":"Ola","LastName":"Slight","Company":"Centizu","Email":"oslight2v@artisteer.com","Phone":"949-292-5097","Status":3,"Type":1,"Orders":[{"OrderID":"24478-190","ShipCountry":"UA","ShipAddress":"57365 Hayes Lane","ShipName":"Koss-Waters","OrderDate":"10/7/2016","TotalPayment":"$1109297.13","Status":5,"Type":3},{"OrderID":"57520-0939","ShipCountry":"RU","ShipAddress":"76488 3rd Trail","ShipName":"Quigley, Funk and Quigley","OrderDate":"1/29/2016","TotalPayment":"$579830.83","Status":3,"Type":3},{"OrderID":"50991-399","ShipCountry":"CN","ShipAddress":"879 Vidon Road","ShipName":"Moen, Ryan and Konopelski","OrderDate":"8/20/2017","TotalPayment":"$906023.43","Status":1,"Type":2},{"OrderID":"37808-305","ShipCountry":"RU","ShipAddress":"75087 Pawling Park","ShipName":"Ondricka, Vandervort and Green","OrderDate":"8/9/2016","TotalPayment":"$223305.06","Status":5,"Type":3},{"OrderID":"35356-722","ShipCountry":"CN","ShipAddress":"1740 Commercial Court","ShipName":"Crist and Sons","OrderDate":"7/29/2016","TotalPayment":"$521955.71","Status":6,"Type":1},{"OrderID":"0078-0597","ShipCountry":"PE","ShipAddress":"64 Bluestem Terrace","ShipName":"Marquardt and Sons","OrderDate":"3/25/2017","TotalPayment":"$857031.11","Status":1,"Type":3},{"OrderID":"76457-004","ShipCountry":"KE","ShipAddress":"7022 Loeprich Alley","ShipName":"Ziemann-Boehm","OrderDate":"11/10/2017","TotalPayment":"$726381.92","Status":3,"Type":2},{"OrderID":"0904-5230","ShipCountry":"YE","ShipAddress":"70672 Mayfield Way","ShipName":"Gleason and Sons","OrderDate":"1/6/2016","TotalPayment":"$696901.16","Status":3,"Type":2},{"OrderID":"54868-5658","ShipCountry":"VN","ShipAddress":"8649 Browning Road","ShipName":"Dooley Inc","OrderDate":"11/14/2017","TotalPayment":"$572674.00","Status":6,"Type":1},{"OrderID":"0591-2786","ShipCountry":"SE","ShipAddress":"066 Prentice Terrace","ShipName":"Mosciski Inc","OrderDate":"5/3/2017","TotalPayment":"$406605.89","Status":6,"Type":2},{"OrderID":"59640-155","ShipCountry":"CN","ShipAddress":"18276 Union Avenue","ShipName":"Streich-Dach","OrderDate":"12/6/2017","TotalPayment":"$1119663.71","Status":4,"Type":2},{"OrderID":"16590-874","ShipCountry":"GA","ShipAddress":"042 Bultman Point","ShipName":"Gleason, Pagac and Littel","OrderDate":"4/28/2016","TotalPayment":"$734279.56","Status":2,"Type":1},{"OrderID":"11822-6201","ShipCountry":"PT","ShipAddress":"774 Mockingbird Trail","ShipName":"Kozey and Sons","OrderDate":"1/29/2016","TotalPayment":"$352649.26","Status":5,"Type":2},{"OrderID":"65121-495","ShipCountry":"CN","ShipAddress":"354 Dayton Park","ShipName":"Dietrich-Herzog","OrderDate":"6/29/2017","TotalPayment":"$567011.43","Status":4,"Type":1},{"OrderID":"68828-101","ShipCountry":"LT","ShipAddress":"7 Prentice Pass","ShipName":"Schamberger-Mayer","OrderDate":"5/3/2017","TotalPayment":"$539212.76","Status":6,"Type":1},{"OrderID":"0069-0122","ShipCountry":"GT","ShipAddress":"8325 Division Way","ShipName":"Veum, Marvin and Klocko","OrderDate":"11/26/2016","TotalPayment":"$59099.56","Status":6,"Type":2},{"OrderID":"68387-600","ShipCountry":"SY","ShipAddress":"6 Mallory Point","ShipName":"Schimmel Inc","OrderDate":"10/21/2017","TotalPayment":"$22097.89","Status":1,"Type":2},{"OrderID":"42291-526","ShipCountry":"CN","ShipAddress":"4297 Reinke Junction","ShipName":"DuBuque LLC","OrderDate":"2/2/2017","TotalPayment":"$1199686.91","Status":4,"Type":1},{"OrderID":"55154-4559","ShipCountry":"NO","ShipAddress":"90 Sutherland Center","ShipName":"Purdy, Olson and Vandervort","OrderDate":"8/5/2016","TotalPayment":"$111683.71","Status":5,"Type":3},{"OrderID":"60760-983","ShipCountry":"CN","ShipAddress":"18458 Duke Pass","ShipName":"Hyatt and Sons","OrderDate":"4/5/2016","TotalPayment":"$1001796.85","Status":5,"Type":1}]},\n' +
        '{"RecordID":105,"FirstName":"Edithe","LastName":"Sherington","Company":"Katz","Email":"esherington2w@ed.gov","Phone":"467-103-9518","Status":4,"Type":1,"Orders":[{"OrderID":"55312-489","ShipCountry":"LT","ShipAddress":"5447 Algoma Hill","ShipName":"Walter and Sons","OrderDate":"10/10/2016","TotalPayment":"$716695.61","Status":6,"Type":1},{"OrderID":"50436-6375","ShipCountry":"CN","ShipAddress":"05 Manley Circle","ShipName":"Bednar, Eichmann and Stokes","OrderDate":"3/29/2017","TotalPayment":"$348349.95","Status":1,"Type":3},{"OrderID":"13811-529","ShipCountry":"PL","ShipAddress":"16 Oak Circle","ShipName":"Turcotte Inc","OrderDate":"9/24/2017","TotalPayment":"$116759.65","Status":5,"Type":3},{"OrderID":"57664-399","ShipCountry":"CO","ShipAddress":"913 1st Court","ShipName":"Renner-Pollich","OrderDate":"5/18/2017","TotalPayment":"$1033668.93","Status":2,"Type":2},{"OrderID":"0904-5785","ShipCountry":"JP","ShipAddress":"0 Crest Line Junction","ShipName":"Kemmer Group","OrderDate":"12/19/2017","TotalPayment":"$216527.02","Status":4,"Type":2},{"OrderID":"65841-069","ShipCountry":"PT","ShipAddress":"415 Kropf Lane","ShipName":"Cronin, Carter and Sawayn","OrderDate":"10/18/2017","TotalPayment":"$205108.47","Status":4,"Type":3}]},\n' +
        '{"RecordID":106,"FirstName":"Yank","LastName":"Arens","Company":"Livepath","Email":"yarens2x@illinois.edu","Phone":"758-792-8983","Status":4,"Type":2,"Orders":[{"OrderID":"49349-534","ShipCountry":"CN","ShipAddress":"32 Russell Street","ShipName":"Deckow Inc","OrderDate":"11/18/2016","TotalPayment":"$455427.57","Status":5,"Type":3},{"OrderID":"50051-0014","ShipCountry":"BA","ShipAddress":"338 American Alley","ShipName":"Crona and Sons","OrderDate":"1/28/2016","TotalPayment":"$949994.98","Status":2,"Type":2},{"OrderID":"54868-4507","ShipCountry":"GR","ShipAddress":"76 Lukken Point","ShipName":"Daugherty, Lowe and Vandervort","OrderDate":"7/13/2016","TotalPayment":"$866890.38","Status":1,"Type":2},{"OrderID":"51393-7633","ShipCountry":"CN","ShipAddress":"849 Cottonwood Junction","ShipName":"Harber-Veum","OrderDate":"9/25/2017","TotalPayment":"$46235.19","Status":4,"Type":1},{"OrderID":"47335-509","ShipCountry":"CF","ShipAddress":"48011 Kedzie Crossing","ShipName":"Ankunding, Kreiger and Schimmel","OrderDate":"10/16/2017","TotalPayment":"$603200.44","Status":2,"Type":3},{"OrderID":"42002-213","ShipCountry":"CN","ShipAddress":"7 Clarendon Hill","ShipName":"Predovic, Anderson and Green","OrderDate":"11/8/2016","TotalPayment":"$366373.00","Status":5,"Type":2},{"OrderID":"68040-705","ShipCountry":"AS","ShipAddress":"2 Corry Terrace","ShipName":"Stroman and Sons","OrderDate":"8/2/2016","TotalPayment":"$977109.41","Status":5,"Type":3},{"OrderID":"0781-5181","ShipCountry":"ID","ShipAddress":"938 Veith Center","ShipName":"Paucek, Wehner and Schumm","OrderDate":"12/25/2016","TotalPayment":"$1004225.78","Status":3,"Type":3},{"OrderID":"64745-001","ShipCountry":"HN","ShipAddress":"2 Northfield Crossing","ShipName":"Powlowski Inc","OrderDate":"5/1/2016","TotalPayment":"$638398.81","Status":1,"Type":1},{"OrderID":"0078-0240","ShipCountry":"RS","ShipAddress":"4 Park Meadow Hill","ShipName":"Schumm, O\'Kon and Hane","OrderDate":"2/2/2017","TotalPayment":"$448117.64","Status":6,"Type":1}]},\n' +
        '{"RecordID":107,"FirstName":"Jack","LastName":"Bunney","Company":"Mita","Email":"jbunney2y@csmonitor.com","Phone":"389-306-9112","Status":2,"Type":3,"Orders":[{"OrderID":"43406-0072","ShipCountry":"RU","ShipAddress":"908 Sage Junction","ShipName":"Bode-Weissnat","OrderDate":"3/25/2017","TotalPayment":"$657361.25","Status":4,"Type":1},{"OrderID":"49288-0185","ShipCountry":"AZ","ShipAddress":"05 Badeau Plaza","ShipName":"Wolf-Kub","OrderDate":"9/26/2016","TotalPayment":"$867319.13","Status":5,"Type":3},{"OrderID":"37808-964","ShipCountry":"CA","ShipAddress":"72015 Helena Avenue","ShipName":"Sauer and Sons","OrderDate":"5/12/2017","TotalPayment":"$769244.78","Status":2,"Type":2},{"OrderID":"60760-749","ShipCountry":"CN","ShipAddress":"5145 Kim Center","ShipName":"Littel-Bauch","OrderDate":"5/7/2017","TotalPayment":"$900962.95","Status":2,"Type":1},{"OrderID":"58118-2530","ShipCountry":"SL","ShipAddress":"190 Derek Park","ShipName":"Cruickshank-Wilderman","OrderDate":"4/13/2016","TotalPayment":"$508598.82","Status":6,"Type":2},{"OrderID":"0268-0895","ShipCountry":"CN","ShipAddress":"4 Badeau Way","ShipName":"O\'Hara, Tromp and Aufderhar","OrderDate":"2/25/2017","TotalPayment":"$442518.90","Status":5,"Type":2},{"OrderID":"55648-974","ShipCountry":"CN","ShipAddress":"8717 Prairie Rose Hill","ShipName":"Gusikowski-Buckridge","OrderDate":"6/6/2017","TotalPayment":"$1096132.15","Status":4,"Type":3},{"OrderID":"45802-245","ShipCountry":"CN","ShipAddress":"92 Larry Junction","ShipName":"Schmidt, Muller and Corwin","OrderDate":"2/19/2016","TotalPayment":"$512403.40","Status":4,"Type":2},{"OrderID":"60429-098","ShipCountry":"CN","ShipAddress":"6 Roxbury Circle","ShipName":"Walker LLC","OrderDate":"5/30/2017","TotalPayment":"$468406.64","Status":2,"Type":2}]},\n' +
        '{"RecordID":108,"FirstName":"Correy","LastName":"Tilt","Company":"Dabshots","Email":"ctilt2z@barnesandnoble.com","Phone":"835-261-5227","Status":5,"Type":3,"Orders":[{"OrderID":"0116-2994","ShipCountry":"RU","ShipAddress":"3981 Doe Crossing Street","ShipName":"Treutel-Wiza","OrderDate":"7/20/2016","TotalPayment":"$777739.91","Status":3,"Type":2},{"OrderID":"50181-0004","ShipCountry":"PH","ShipAddress":"70 5th Avenue","ShipName":"Hermiston and Sons","OrderDate":"5/8/2017","TotalPayment":"$170734.55","Status":1,"Type":3},{"OrderID":"12462-300","ShipCountry":"MY","ShipAddress":"726 Sommers Crossing","ShipName":"McLaughlin-Leannon","OrderDate":"8/3/2016","TotalPayment":"$35090.88","Status":5,"Type":3},{"OrderID":"21695-935","ShipCountry":"CN","ShipAddress":"01877 Moose Terrace","ShipName":"Rosenbaum, Hettinger and Gleason","OrderDate":"6/11/2017","TotalPayment":"$50710.02","Status":4,"Type":2},{"OrderID":"12634-191","ShipCountry":"PE","ShipAddress":"8868 Spaight Alley","ShipName":"Hammes, Fritsch and Beer","OrderDate":"8/2/2017","TotalPayment":"$227303.33","Status":6,"Type":1},{"OrderID":"58118-0106","ShipCountry":"CZ","ShipAddress":"9905 La Follette Street","ShipName":"Reilly and Sons","OrderDate":"6/28/2016","TotalPayment":"$1115256.20","Status":4,"Type":2},{"OrderID":"46708-031","ShipCountry":"CN","ShipAddress":"5 Melby Junction","ShipName":"Rau-Kling","OrderDate":"5/26/2017","TotalPayment":"$85823.20","Status":5,"Type":3},{"OrderID":"49348-818","ShipCountry":"PL","ShipAddress":"333 Longview Crossing","ShipName":"Paucek Group","OrderDate":"1/17/2016","TotalPayment":"$750963.96","Status":3,"Type":1},{"OrderID":"62011-0133","ShipCountry":"CN","ShipAddress":"6 Kenwood Lane","ShipName":"Pouros Group","OrderDate":"3/21/2016","TotalPayment":"$567401.88","Status":5,"Type":2},{"OrderID":"64141-001","ShipCountry":"KZ","ShipAddress":"47 Sullivan Point","ShipName":"Anderson Group","OrderDate":"1/27/2017","TotalPayment":"$1102267.89","Status":3,"Type":2},{"OrderID":"59779-980","ShipCountry":"BS","ShipAddress":"041 Summit Center","ShipName":"Lakin-Ebert","OrderDate":"1/13/2017","TotalPayment":"$1044141.64","Status":5,"Type":3},{"OrderID":"55319-015","ShipCountry":"CZ","ShipAddress":"623 Loftsgordon Court","ShipName":"Metz, Feest and Cummings","OrderDate":"8/22/2017","TotalPayment":"$592896.19","Status":5,"Type":2},{"OrderID":"63941-378","ShipCountry":"CO","ShipAddress":"8616 American Terrace","ShipName":"Emard, Schmeler and Abernathy","OrderDate":"7/21/2016","TotalPayment":"$763965.13","Status":6,"Type":2},{"OrderID":"36800-656","ShipCountry":"IT","ShipAddress":"664 Farragut Trail","ShipName":"Wolff, Lakin and Hansen","OrderDate":"6/21/2017","TotalPayment":"$535430.94","Status":5,"Type":1},{"OrderID":"33261-838","ShipCountry":"PE","ShipAddress":"37922 Grasskamp Parkway","ShipName":"Zulauf Inc","OrderDate":"3/28/2017","TotalPayment":"$541141.06","Status":3,"Type":1},{"OrderID":"0268-0829","ShipCountry":"ID","ShipAddress":"8267 5th Place","ShipName":"Lehner, Feil and Russel","OrderDate":"9/8/2016","TotalPayment":"$1194093.56","Status":6,"Type":1},{"OrderID":"63981-306","ShipCountry":"TH","ShipAddress":"1587 Northport Pass","ShipName":"Leannon, Mills and Nader","OrderDate":"9/30/2016","TotalPayment":"$541685.46","Status":6,"Type":3}]},\n' +
        '{"RecordID":109,"FirstName":"Rhea","LastName":"Dallaghan","Company":"Demizz","Email":"rdallaghan30@theguardian.com","Phone":"686-756-4673","Status":3,"Type":1,"Orders":[{"OrderID":"53113-550","ShipCountry":"SE","ShipAddress":"5 Ryan Road","ShipName":"Kerluke-Koss","OrderDate":"6/11/2016","TotalPayment":"$639247.12","Status":1,"Type":2},{"OrderID":"43063-222","ShipCountry":"RU","ShipAddress":"892 Red Cloud Plaza","ShipName":"Quigley, Johnson and Wyman","OrderDate":"1/10/2017","TotalPayment":"$692470.85","Status":1,"Type":3},{"OrderID":"68308-219","ShipCountry":"US","ShipAddress":"7156 Nevada Lane","ShipName":"Schiller, Emmerich and Welch","OrderDate":"2/15/2017","TotalPayment":"$962045.15","Status":5,"Type":3},{"OrderID":"41520-092","ShipCountry":"BR","ShipAddress":"80102 Springs Place","ShipName":"Wolff-Morar","OrderDate":"6/26/2017","TotalPayment":"$1026418.82","Status":5,"Type":3},{"OrderID":"0065-0656","ShipCountry":"CO","ShipAddress":"35040 Algoma Court","ShipName":"Torphy Inc","OrderDate":"1/10/2016","TotalPayment":"$840254.68","Status":4,"Type":3},{"OrderID":"52125-744","ShipCountry":"FR","ShipAddress":"65 Hagan Hill","ShipName":"Rutherford, Jones and Vandervort","OrderDate":"6/19/2017","TotalPayment":"$838971.55","Status":1,"Type":2},{"OrderID":"68405-098","ShipCountry":"AR","ShipAddress":"6 Myrtle Point","ShipName":"Smith-Ernser","OrderDate":"9/17/2017","TotalPayment":"$789700.18","Status":1,"Type":3},{"OrderID":"66336-567","ShipCountry":"CN","ShipAddress":"176 Judy Trail","ShipName":"King-Parker","OrderDate":"5/10/2017","TotalPayment":"$975186.02","Status":3,"Type":3},{"OrderID":"47124-295","ShipCountry":"UA","ShipAddress":"91 Clarendon Park","ShipName":"Spencer, Lynch and Kilback","OrderDate":"9/14/2017","TotalPayment":"$712092.66","Status":5,"Type":2},{"OrderID":"0115-9822","ShipCountry":"CN","ShipAddress":"779 Main Center","ShipName":"Simonis, Dach and Krajcik","OrderDate":"10/3/2017","TotalPayment":"$1017868.11","Status":6,"Type":1},{"OrderID":"58517-300","ShipCountry":"CN","ShipAddress":"229 Sullivan Alley","ShipName":"Mante-Gibson","OrderDate":"9/22/2016","TotalPayment":"$700082.78","Status":3,"Type":3}]},\n' +
        '{"RecordID":110,"FirstName":"Boris","LastName":"Bramah","Company":"Jayo","Email":"bbramah31@bravesites.com","Phone":"717-255-1844","Status":2,"Type":1,"Orders":[{"OrderID":"43406-0112","ShipCountry":"FR","ShipAddress":"62123 Forest Run Avenue","ShipName":"Hartmann-Osinski","OrderDate":"2/8/2016","TotalPayment":"$213201.23","Status":3,"Type":2},{"OrderID":"0268-1214","ShipCountry":"US","ShipAddress":"82449 Westridge Parkway","ShipName":"Konopelski and Sons","OrderDate":"7/10/2016","TotalPayment":"$886952.32","Status":5,"Type":2},{"OrderID":"64540-011","ShipCountry":"IT","ShipAddress":"128 Annamark Lane","ShipName":"Hartmann-Jast","OrderDate":"12/7/2016","TotalPayment":"$1137122.44","Status":4,"Type":1},{"OrderID":"55513-267","ShipCountry":"PL","ShipAddress":"5911 Morningstar Terrace","ShipName":"Koelpin-Wisoky","OrderDate":"7/19/2017","TotalPayment":"$519933.67","Status":3,"Type":1},{"OrderID":"61957-1023","ShipCountry":"CN","ShipAddress":"1096 Blaine Pass","ShipName":"Orn-Douglas","OrderDate":"7/10/2017","TotalPayment":"$1174389.42","Status":4,"Type":1},{"OrderID":"0378-4001","ShipCountry":"ID","ShipAddress":"62978 Melby Crossing","ShipName":"Dietrich, Boehm and Upton","OrderDate":"2/19/2016","TotalPayment":"$360158.76","Status":1,"Type":2},{"OrderID":"61748-111","ShipCountry":"PE","ShipAddress":"3 Graedel Parkway","ShipName":"Gorczany-Streich","OrderDate":"8/12/2016","TotalPayment":"$1068686.29","Status":4,"Type":2},{"OrderID":"67296-0649","ShipCountry":"FR","ShipAddress":"98 Shopko Crossing","ShipName":"Quigley Inc","OrderDate":"2/19/2016","TotalPayment":"$404220.73","Status":1,"Type":1},{"OrderID":"16590-859","ShipCountry":"SE","ShipAddress":"55712 Lawn Hill","ShipName":"Labadie, Roberts and Schoen","OrderDate":"1/1/2017","TotalPayment":"$394666.83","Status":5,"Type":3},{"OrderID":"35356-608","ShipCountry":"ID","ShipAddress":"530 Boyd Plaza","ShipName":"Hoppe-Johnson","OrderDate":"5/17/2016","TotalPayment":"$1044454.62","Status":4,"Type":2},{"OrderID":"64997-150","ShipCountry":"PH","ShipAddress":"71 Old Gate Way","ShipName":"Steuber-Fisher","OrderDate":"1/12/2017","TotalPayment":"$1151182.35","Status":6,"Type":3},{"OrderID":"11701-025","ShipCountry":"CN","ShipAddress":"7 Vermont Hill","ShipName":"Conn, Waters and Howell","OrderDate":"5/18/2016","TotalPayment":"$1120354.79","Status":5,"Type":2},{"OrderID":"37012-059","ShipCountry":"NG","ShipAddress":"94820 Merrick Alley","ShipName":"Mosciski-Brekke","OrderDate":"12/9/2017","TotalPayment":"$985040.45","Status":2,"Type":1},{"OrderID":"55566-5020","ShipCountry":"ID","ShipAddress":"45 Fuller Alley","ShipName":"O\'Hara, Heathcote and Walsh","OrderDate":"12/24/2017","TotalPayment":"$441288.14","Status":5,"Type":1},{"OrderID":"54868-4451","ShipCountry":"SD","ShipAddress":"81383 Alpine Plaza","ShipName":"Toy-Russel","OrderDate":"7/27/2017","TotalPayment":"$280973.51","Status":1,"Type":2},{"OrderID":"54868-4384","ShipCountry":"CU","ShipAddress":"583 Schmedeman Street","ShipName":"Moen Group","OrderDate":"2/27/2016","TotalPayment":"$395364.76","Status":5,"Type":3},{"OrderID":"36987-2434","ShipCountry":"SI","ShipAddress":"78 Grasskamp Plaza","ShipName":"Kihn-Mueller","OrderDate":"7/11/2017","TotalPayment":"$663029.82","Status":5,"Type":1}]},\n' +
        '{"RecordID":111,"FirstName":"Gordy","LastName":"Lipgens","Company":"Wordpedia","Email":"glipgens32@shareasale.com","Phone":"255-153-2683","Status":6,"Type":2,"Orders":[{"OrderID":"43474-001","ShipCountry":"NO","ShipAddress":"8591 Ryan Avenue","ShipName":"Gleichner, Schaden and Stehr","OrderDate":"12/26/2016","TotalPayment":"$134143.89","Status":2,"Type":2},{"OrderID":"61221-010","ShipCountry":"SE","ShipAddress":"63 Dovetail Crossing","ShipName":"Wilkinson LLC","OrderDate":"12/6/2016","TotalPayment":"$73414.59","Status":4,"Type":3},{"OrderID":"36987-3316","ShipCountry":"HN","ShipAddress":"350 Miller Center","ShipName":"Bernhard, Nienow and O\'Reilly","OrderDate":"6/16/2017","TotalPayment":"$77246.96","Status":6,"Type":1},{"OrderID":"68788-9025","ShipCountry":"CN","ShipAddress":"2442 Miller Lane","ShipName":"Willms-Renner","OrderDate":"10/18/2017","TotalPayment":"$953948.67","Status":6,"Type":3},{"OrderID":"68180-137","ShipCountry":"CZ","ShipAddress":"72502 Northridge Avenue","ShipName":"Smitham-Rempel","OrderDate":"9/29/2017","TotalPayment":"$824538.31","Status":3,"Type":3},{"OrderID":"64764-890","ShipCountry":"IR","ShipAddress":"648 Fair Oaks Court","ShipName":"Hahn, Hansen and Stanton","OrderDate":"8/2/2017","TotalPayment":"$696716.72","Status":6,"Type":3},{"OrderID":"36987-2426","ShipCountry":"VE","ShipAddress":"5288 Logan Lane","ShipName":"Steuber-Quitzon","OrderDate":"1/19/2017","TotalPayment":"$503080.51","Status":5,"Type":2},{"OrderID":"49230-212","ShipCountry":"JP","ShipAddress":"18 Elmside Lane","ShipName":"Kling Group","OrderDate":"6/9/2017","TotalPayment":"$546332.16","Status":6,"Type":3},{"OrderID":"0054-4180","ShipCountry":"ID","ShipAddress":"90914 Dennis Hill","ShipName":"Russel, Greenfelder and VonRueden","OrderDate":"12/1/2017","TotalPayment":"$918750.26","Status":1,"Type":3},{"OrderID":"51655-560","ShipCountry":"RU","ShipAddress":"37 Nelson Road","ShipName":"Spencer, Hickle and Bernier","OrderDate":"3/27/2017","TotalPayment":"$1030443.29","Status":5,"Type":3},{"OrderID":"68084-833","ShipCountry":"CN","ShipAddress":"21904 Shelley Terrace","ShipName":"Altenwerth, Schmidt and Miller","OrderDate":"2/8/2017","TotalPayment":"$1130934.10","Status":1,"Type":2},{"OrderID":"54868-4341","ShipCountry":"MX","ShipAddress":"56781 Glacier Hill Drive","ShipName":"Miller, Tremblay and Gerlach","OrderDate":"2/23/2017","TotalPayment":"$559694.45","Status":1,"Type":1},{"OrderID":"43353-802","ShipCountry":"MX","ShipAddress":"42 Southridge Circle","ShipName":"Nienow and Sons","OrderDate":"4/24/2017","TotalPayment":"$64248.08","Status":2,"Type":3},{"OrderID":"43846-0032","ShipCountry":"ID","ShipAddress":"13 Arrowood Street","ShipName":"Sauer-Hansen","OrderDate":"1/22/2016","TotalPayment":"$851491.04","Status":4,"Type":3},{"OrderID":"10096-0158","ShipCountry":"BA","ShipAddress":"592 Trailsway Hill","ShipName":"Rutherford, Farrell and Connelly","OrderDate":"7/26/2017","TotalPayment":"$330081.49","Status":3,"Type":1},{"OrderID":"67457-425","ShipCountry":"ID","ShipAddress":"43 Grayhawk Crossing","ShipName":"Gottlieb, Hauck and Stokes","OrderDate":"6/10/2017","TotalPayment":"$1122253.75","Status":1,"Type":3},{"OrderID":"45802-061","ShipCountry":"IR","ShipAddress":"58788 Green Ridge Avenue","ShipName":"Morissette and Sons","OrderDate":"9/19/2016","TotalPayment":"$248231.45","Status":4,"Type":1},{"OrderID":"66854-015","ShipCountry":"PL","ShipAddress":"74909 Cody Crossing","ShipName":"Murphy, Schulist and Grant","OrderDate":"12/29/2017","TotalPayment":"$901315.05","Status":4,"Type":1},{"OrderID":"57955-2291","ShipCountry":"MX","ShipAddress":"53 Duke Center","ShipName":"DuBuque Inc","OrderDate":"7/18/2016","TotalPayment":"$834526.52","Status":5,"Type":1},{"OrderID":"37000-233","ShipCountry":"CN","ShipAddress":"32009 Ilene Crossing","ShipName":"Jacobi, Lind and Witting","OrderDate":"5/4/2017","TotalPayment":"$1157098.23","Status":3,"Type":3}]},\n' +
        '{"RecordID":112,"FirstName":"Estevan","LastName":"Avrahamian","Company":"Oyoyo","Email":"eavrahamian33@chron.com","Phone":"779-135-4701","Status":5,"Type":3,"Orders":[{"OrderID":"0603-5914","ShipCountry":"AM","ShipAddress":"42 Kings Center","ShipName":"Lebsack-Koch","OrderDate":"10/2/2017","TotalPayment":"$91803.53","Status":5,"Type":2},{"OrderID":"36800-176","ShipCountry":"ID","ShipAddress":"64 Glendale Court","ShipName":"Crooks LLC","OrderDate":"1/9/2017","TotalPayment":"$1103135.65","Status":6,"Type":2},{"OrderID":"42507-478","ShipCountry":"AR","ShipAddress":"618 Sycamore Alley","ShipName":"Windler, Collier and Wilderman","OrderDate":"12/22/2016","TotalPayment":"$622328.46","Status":3,"Type":3},{"OrderID":"42719-345","ShipCountry":"RU","ShipAddress":"4 Florence Trail","ShipName":"Borer LLC","OrderDate":"3/28/2016","TotalPayment":"$396986.58","Status":4,"Type":1},{"OrderID":"48951-4075","ShipCountry":"ID","ShipAddress":"740 Scoville Avenue","ShipName":"Effertz-Lowe","OrderDate":"3/23/2017","TotalPayment":"$460219.71","Status":1,"Type":1},{"OrderID":"55648-990","ShipCountry":"LU","ShipAddress":"59 Hanson Point","ShipName":"Sawayn Group","OrderDate":"4/26/2016","TotalPayment":"$441692.40","Status":1,"Type":1},{"OrderID":"0037-4401","ShipCountry":"ES","ShipAddress":"42 Farwell Lane","ShipName":"Nader-Schimmel","OrderDate":"3/19/2017","TotalPayment":"$61295.33","Status":3,"Type":1},{"OrderID":"60429-074","ShipCountry":"ID","ShipAddress":"85565 Bellgrove Crossing","ShipName":"Hackett, Cassin and Farrell","OrderDate":"8/9/2017","TotalPayment":"$101040.22","Status":6,"Type":3},{"OrderID":"68788-9940","ShipCountry":"MN","ShipAddress":"12 Oxford Hill","ShipName":"Auer, Muller and Mraz","OrderDate":"4/21/2016","TotalPayment":"$494391.45","Status":4,"Type":1},{"OrderID":"37000-908","ShipCountry":"DO","ShipAddress":"68 Ridgeway Parkway","ShipName":"Johns, Marquardt and Harris","OrderDate":"9/3/2017","TotalPayment":"$423911.20","Status":5,"Type":2},{"OrderID":"21695-155","ShipCountry":"CA","ShipAddress":"56 Reinke Plaza","ShipName":"Schneider and Sons","OrderDate":"7/30/2017","TotalPayment":"$1126684.32","Status":2,"Type":2},{"OrderID":"75981-153","ShipCountry":"CD","ShipAddress":"7 Dakota Circle","ShipName":"Dach LLC","OrderDate":"11/5/2016","TotalPayment":"$635803.91","Status":6,"Type":2},{"OrderID":"10297-001","ShipCountry":"GT","ShipAddress":"5 Gateway Lane","ShipName":"Beatty LLC","OrderDate":"5/30/2016","TotalPayment":"$359232.90","Status":5,"Type":2},{"OrderID":"11673-722","ShipCountry":"HN","ShipAddress":"59689 Logan Crossing","ShipName":"Cruickshank, Schimmel and Prohaska","OrderDate":"5/28/2016","TotalPayment":"$45306.54","Status":5,"Type":3},{"OrderID":"11673-980","ShipCountry":"CN","ShipAddress":"0962 Center Trail","ShipName":"Altenwerth-Ziemann","OrderDate":"5/28/2017","TotalPayment":"$715013.09","Status":4,"Type":1}]},\n' +
        '{"RecordID":113,"FirstName":"Farand","LastName":"Trask","Company":"Meedoo","Email":"ftrask34@booking.com","Phone":"282-156-9089","Status":6,"Type":2,"Orders":[{"OrderID":"36987-3393","ShipCountry":"CN","ShipAddress":"8017 Sauthoff Place","ShipName":"Vandervort LLC","OrderDate":"12/9/2017","TotalPayment":"$162594.03","Status":2,"Type":1},{"OrderID":"51545-120","ShipCountry":"PH","ShipAddress":"5001 Nancy Way","ShipName":"Lehner-Feest","OrderDate":"11/25/2016","TotalPayment":"$1024059.96","Status":1,"Type":2},{"OrderID":"0363-0223","ShipCountry":"CN","ShipAddress":"92388 Mccormick Alley","ShipName":"Cummings, Witting and Pfannerstill","OrderDate":"2/26/2016","TotalPayment":"$240500.96","Status":5,"Type":1},{"OrderID":"49404-111","ShipCountry":"BA","ShipAddress":"163 Fremont Parkway","ShipName":"Jerde, Jacobi and Heidenreich","OrderDate":"12/5/2016","TotalPayment":"$1024917.85","Status":4,"Type":1},{"OrderID":"0409-7171","ShipCountry":"PK","ShipAddress":"796 Harbort Way","ShipName":"Schumm Group","OrderDate":"11/22/2016","TotalPayment":"$295962.51","Status":2,"Type":3},{"OrderID":"0023-0506","ShipCountry":"VE","ShipAddress":"673 Cascade Crossing","ShipName":"Huels-Lynch","OrderDate":"4/19/2017","TotalPayment":"$635850.99","Status":6,"Type":3},{"OrderID":"67226-2230","ShipCountry":"FR","ShipAddress":"2 Sutherland Hill","ShipName":"Emmerich and Sons","OrderDate":"11/21/2016","TotalPayment":"$592691.86","Status":3,"Type":1},{"OrderID":"0268-6198","ShipCountry":"WS","ShipAddress":"668 Hanson Place","ShipName":"Dibbert Group","OrderDate":"7/18/2017","TotalPayment":"$542742.36","Status":4,"Type":1},{"OrderID":"10370-210","ShipCountry":"CN","ShipAddress":"54375 Butternut Hill","ShipName":"McKenzie, Cummings and Boyer","OrderDate":"1/31/2017","TotalPayment":"$936961.00","Status":5,"Type":2},{"OrderID":"54575-400","ShipCountry":"CN","ShipAddress":"2 Nelson Circle","ShipName":"Kub-Metz","OrderDate":"12/2/2017","TotalPayment":"$679692.29","Status":3,"Type":1},{"OrderID":"36987-1427","ShipCountry":"TN","ShipAddress":"08720 Lerdahl Circle","ShipName":"Nicolas and Sons","OrderDate":"12/29/2016","TotalPayment":"$1016371.54","Status":1,"Type":1},{"OrderID":"16590-056","ShipCountry":"CR","ShipAddress":"89 Anderson Trail","ShipName":"Corkery-Funk","OrderDate":"1/16/2016","TotalPayment":"$893208.93","Status":2,"Type":2}]},\n' +
        '{"RecordID":114,"FirstName":"Antonio","LastName":"Easeman","Company":"Bubbletube","Email":"aeaseman35@is.gd","Phone":"759-399-7050","Status":6,"Type":3,"Orders":[{"OrderID":"0168-0293","ShipCountry":"MX","ShipAddress":"085 Clemons Pass","ShipName":"Franecki LLC","OrderDate":"2/9/2017","TotalPayment":"$37671.72","Status":2,"Type":2},{"OrderID":"55154-5412","ShipCountry":"SE","ShipAddress":"7017 Erie Alley","ShipName":"Bergstrom-Gutkowski","OrderDate":"3/22/2017","TotalPayment":"$1027765.76","Status":2,"Type":2},{"OrderID":"60637-018","ShipCountry":"PE","ShipAddress":"544 Ridge Oak Point","ShipName":"Weimann-Spinka","OrderDate":"2/3/2017","TotalPayment":"$940014.96","Status":5,"Type":2},{"OrderID":"49288-0231","ShipCountry":"PH","ShipAddress":"7 Pawling Hill","ShipName":"Schaden, Daugherty and Moore","OrderDate":"2/11/2017","TotalPayment":"$980508.22","Status":1,"Type":1},{"OrderID":"0642-0077","ShipCountry":"RU","ShipAddress":"51 Lunder Street","ShipName":"Lynch, Lowe and Adams","OrderDate":"7/20/2016","TotalPayment":"$505558.40","Status":2,"Type":3},{"OrderID":"0536-1000","ShipCountry":"RU","ShipAddress":"33 Farwell Lane","ShipName":"Ritchie-Pouros","OrderDate":"5/25/2017","TotalPayment":"$725541.95","Status":2,"Type":2},{"OrderID":"51079-881","ShipCountry":"BR","ShipAddress":"0 Basil Road","ShipName":"Krajcik-Kreiger","OrderDate":"2/19/2017","TotalPayment":"$1098729.65","Status":5,"Type":1}]},\n' +
        '{"RecordID":115,"FirstName":"Torie","LastName":"Loos","Company":"Quinu","Email":"tloos36@dell.com","Phone":"205-754-2684","Status":4,"Type":2,"Orders":[{"OrderID":"0268-0606","ShipCountry":"CN","ShipAddress":"2592 Southridge Street","ShipName":"Conroy-Brekke","OrderDate":"12/15/2017","TotalPayment":"$798762.45","Status":1,"Type":1},{"OrderID":"63824-112","ShipCountry":"UA","ShipAddress":"40 Carpenter Circle","ShipName":"Lockman Inc","OrderDate":"12/16/2017","TotalPayment":"$129554.31","Status":5,"Type":1},{"OrderID":"23360-160","ShipCountry":"US","ShipAddress":"9927 Golf Terrace","ShipName":"Bruen-Hermann","OrderDate":"10/29/2016","TotalPayment":"$941929.65","Status":2,"Type":1},{"OrderID":"51346-145","ShipCountry":"PL","ShipAddress":"12526 Meadow Ridge Place","ShipName":"Rippin, Lemke and Glover","OrderDate":"11/7/2017","TotalPayment":"$823968.18","Status":2,"Type":1},{"OrderID":"68788-9926","ShipCountry":"BG","ShipAddress":"36 Dexter Trail","ShipName":"Towne Group","OrderDate":"1/15/2016","TotalPayment":"$1009245.07","Status":2,"Type":3},{"OrderID":"10096-0229","ShipCountry":"ID","ShipAddress":"82484 Londonderry Terrace","ShipName":"Boehm LLC","OrderDate":"1/9/2017","TotalPayment":"$244033.78","Status":4,"Type":3},{"OrderID":"63323-738","ShipCountry":"CN","ShipAddress":"5 Sage Circle","ShipName":"Hyatt Inc","OrderDate":"10/9/2016","TotalPayment":"$1146194.18","Status":4,"Type":1},{"OrderID":"13668-158","ShipCountry":"CN","ShipAddress":"78 Lotheville Drive","ShipName":"Blick-Bernhard","OrderDate":"3/6/2016","TotalPayment":"$395227.96","Status":1,"Type":2},{"OrderID":"68703-114","ShipCountry":"HR","ShipAddress":"28078 Northridge Drive","ShipName":"Koelpin, Kertzmann and Mueller","OrderDate":"12/9/2016","TotalPayment":"$117759.65","Status":6,"Type":1},{"OrderID":"10888-5003","ShipCountry":"CN","ShipAddress":"2 Dayton Alley","ShipName":"Langworth Group","OrderDate":"12/6/2016","TotalPayment":"$235730.08","Status":1,"Type":3},{"OrderID":"76174-130","ShipCountry":"KZ","ShipAddress":"2 Hayes Way","ShipName":"Ritchie LLC","OrderDate":"8/25/2017","TotalPayment":"$276203.97","Status":2,"Type":3},{"OrderID":"68428-151","ShipCountry":"PT","ShipAddress":"4627 Ludington Hill","ShipName":"Schmidt, Welch and Marvin","OrderDate":"1/6/2017","TotalPayment":"$742467.70","Status":1,"Type":3}]},\n' +
        '{"RecordID":116,"FirstName":"Alley","LastName":"Bage","Company":"Thoughtsphere","Email":"abage37@cocolog-nifty.com","Phone":"717-668-5493","Status":5,"Type":2,"Orders":[{"OrderID":"30142-321","ShipCountry":"FR","ShipAddress":"1126 Coleman Lane","ShipName":"Gerhold-Braun","OrderDate":"10/2/2017","TotalPayment":"$816724.59","Status":5,"Type":3},{"OrderID":"50458-541","ShipCountry":"CN","ShipAddress":"21266 Fisk Crossing","ShipName":"Bruen and Sons","OrderDate":"6/8/2016","TotalPayment":"$690481.77","Status":5,"Type":3},{"OrderID":"0268-0606","ShipCountry":"RU","ShipAddress":"8848 Bonner Terrace","ShipName":"Ankunding, Stroman and Raynor","OrderDate":"4/27/2016","TotalPayment":"$528012.23","Status":3,"Type":1},{"OrderID":"29300-241","ShipCountry":"CR","ShipAddress":"66 Manley Trail","ShipName":"Corkery, Morar and Waters","OrderDate":"12/25/2016","TotalPayment":"$334532.39","Status":5,"Type":3},{"OrderID":"63187-044","ShipCountry":"CN","ShipAddress":"8 South Junction","ShipName":"Heidenreich LLC","OrderDate":"1/11/2017","TotalPayment":"$487085.33","Status":1,"Type":3},{"OrderID":"57650-159","ShipCountry":"HN","ShipAddress":"0371 Helena Avenue","ShipName":"Douglas-Bernhard","OrderDate":"11/9/2016","TotalPayment":"$478948.11","Status":1,"Type":3},{"OrderID":"59779-279","ShipCountry":"TH","ShipAddress":"0 Evergreen Center","ShipName":"Keebler-Rice","OrderDate":"12/9/2016","TotalPayment":"$868507.41","Status":6,"Type":1},{"OrderID":"33342-092","ShipCountry":"CL","ShipAddress":"221 Brown Alley","ShipName":"Klein Group","OrderDate":"5/29/2017","TotalPayment":"$694583.16","Status":4,"Type":3},{"OrderID":"43063-090","ShipCountry":"ID","ShipAddress":"028 7th Park","ShipName":"Herzog-Spencer","OrderDate":"1/3/2017","TotalPayment":"$453258.26","Status":3,"Type":3},{"OrderID":"66689-403","ShipCountry":"JP","ShipAddress":"47 Eliot Plaza","ShipName":"Considine and Sons","OrderDate":"4/10/2017","TotalPayment":"$251817.62","Status":2,"Type":2},{"OrderID":"0363-0243","ShipCountry":"CN","ShipAddress":"3 Forest Dale Road","ShipName":"Schultz-Kris","OrderDate":"6/4/2017","TotalPayment":"$375189.89","Status":3,"Type":3},{"OrderID":"49884-428","ShipCountry":"MX","ShipAddress":"9 Mariners Cove Drive","ShipName":"Kuhlman-Boyle","OrderDate":"8/2/2016","TotalPayment":"$972935.79","Status":5,"Type":2},{"OrderID":"51621-039","ShipCountry":"PT","ShipAddress":"507 Rusk Parkway","ShipName":"Durgan, Kovacek and Jacobson","OrderDate":"2/23/2016","TotalPayment":"$433218.42","Status":1,"Type":2},{"OrderID":"58593-781","ShipCountry":"CN","ShipAddress":"458 Nancy Place","ShipName":"Dietrich-Dickinson","OrderDate":"9/5/2016","TotalPayment":"$235824.28","Status":4,"Type":1},{"OrderID":"64942-1148","ShipCountry":"ID","ShipAddress":"3327 Manitowish Point","ShipName":"Lesch, Bednar and Abshire","OrderDate":"3/11/2016","TotalPayment":"$585752.92","Status":1,"Type":1},{"OrderID":"0591-2070","ShipCountry":"AR","ShipAddress":"83 Emmet Junction","ShipName":"Kohler, Jacobson and Corwin","OrderDate":"3/2/2016","TotalPayment":"$938636.74","Status":5,"Type":1},{"OrderID":"54569-4816","ShipCountry":"CA","ShipAddress":"4 Pepper Wood Park","ShipName":"Quigley-Mueller","OrderDate":"2/28/2016","TotalPayment":"$1103636.02","Status":5,"Type":2},{"OrderID":"33261-132","ShipCountry":"CA","ShipAddress":"5 Kropf Place","ShipName":"Larson LLC","OrderDate":"2/11/2017","TotalPayment":"$1089298.44","Status":4,"Type":1},{"OrderID":"65862-148","ShipCountry":"ID","ShipAddress":"440 Washington Lane","ShipName":"Kulas, Windler and Dickinson","OrderDate":"9/1/2016","TotalPayment":"$502823.71","Status":4,"Type":3}]},\n' +
        '{"RecordID":117,"FirstName":"Randell","LastName":"Guidini","Company":"Jazzy","Email":"rguidini38@redcross.org","Phone":"662-493-4263","Status":2,"Type":1,"Orders":[{"OrderID":"0054-0002","ShipCountry":"CN","ShipAddress":"74026 Del Sol Alley","ShipName":"Herzog-Becker","OrderDate":"10/30/2016","TotalPayment":"$398358.84","Status":3,"Type":2},{"OrderID":"0065-0429","ShipCountry":"TH","ShipAddress":"24795 Kings Court","ShipName":"Windler, Reynolds and Luettgen","OrderDate":"10/12/2016","TotalPayment":"$363683.75","Status":6,"Type":2},{"OrderID":"60793-854","ShipCountry":"CO","ShipAddress":"02 Ohio Alley","ShipName":"Turner, Spencer and McCullough","OrderDate":"4/23/2017","TotalPayment":"$777032.92","Status":1,"Type":3},{"OrderID":"11673-160","ShipCountry":"PA","ShipAddress":"43 Huxley Junction","ShipName":"Robel, Tremblay and Orn","OrderDate":"5/31/2016","TotalPayment":"$116569.54","Status":1,"Type":2},{"OrderID":"59535-5001","ShipCountry":"CN","ShipAddress":"049 Nancy Terrace","ShipName":"Brown LLC","OrderDate":"7/24/2016","TotalPayment":"$128038.41","Status":2,"Type":1},{"OrderID":"24488-001","ShipCountry":"RU","ShipAddress":"50384 Beilfuss Terrace","ShipName":"Bogan-Gerlach","OrderDate":"1/2/2016","TotalPayment":"$547262.41","Status":1,"Type":1},{"OrderID":"57955-1804","ShipCountry":"CN","ShipAddress":"3274 Valley Edge Hill","ShipName":"Becker Inc","OrderDate":"2/1/2017","TotalPayment":"$133729.75","Status":4,"Type":3},{"OrderID":"76329-3013","ShipCountry":"PA","ShipAddress":"81103 Scofield Court","ShipName":"Oberbrunner, Ledner and Cartwright","OrderDate":"12/21/2017","TotalPayment":"$208474.17","Status":1,"Type":2},{"OrderID":"11559-020","ShipCountry":"CL","ShipAddress":"6423 Utah Way","ShipName":"Morar, Koss and Bernier","OrderDate":"11/18/2016","TotalPayment":"$1182193.15","Status":6,"Type":2},{"OrderID":"16590-230","ShipCountry":"BD","ShipAddress":"44843 Helena Street","ShipName":"Jacobi-Torphy","OrderDate":"5/14/2016","TotalPayment":"$1196232.36","Status":6,"Type":1},{"OrderID":"62175-570","ShipCountry":"ID","ShipAddress":"76 Bultman Pass","ShipName":"Herzog, Kling and Hoeger","OrderDate":"6/18/2017","TotalPayment":"$665155.70","Status":2,"Type":3},{"OrderID":"65841-631","ShipCountry":"JP","ShipAddress":"854 Surrey Crossing","ShipName":"Rice, MacGyver and Tillman","OrderDate":"11/20/2016","TotalPayment":"$508760.26","Status":6,"Type":3},{"OrderID":"49349-779","ShipCountry":"RU","ShipAddress":"29 Gale Junction","ShipName":"Schamberger Inc","OrderDate":"1/2/2016","TotalPayment":"$147583.12","Status":6,"Type":3},{"OrderID":"41250-959","ShipCountry":"CN","ShipAddress":"4412 Troy Road","ShipName":"Kuvalis-Towne","OrderDate":"5/23/2017","TotalPayment":"$577874.99","Status":6,"Type":2},{"OrderID":"0378-3020","ShipCountry":"MA","ShipAddress":"6187 Dwight Way","ShipName":"Ledner Inc","OrderDate":"7/20/2017","TotalPayment":"$1063539.45","Status":2,"Type":1},{"OrderID":"76138-104","ShipCountry":"CN","ShipAddress":"6826 Barby Avenue","ShipName":"O\'Connell-Adams","OrderDate":"1/31/2017","TotalPayment":"$542363.32","Status":3,"Type":3},{"OrderID":"49349-790","ShipCountry":"RU","ShipAddress":"3 Vahlen Lane","ShipName":"Zulauf, O\'Keefe and Ernser","OrderDate":"10/3/2016","TotalPayment":"$195388.35","Status":6,"Type":1},{"OrderID":"61062-0008","ShipCountry":"UA","ShipAddress":"11048 Summit Center","ShipName":"Ondricka-Kerluke","OrderDate":"1/8/2017","TotalPayment":"$156274.48","Status":3,"Type":3},{"OrderID":"63187-114","ShipCountry":"MX","ShipAddress":"39 Hallows Court","ShipName":"Casper Inc","OrderDate":"11/22/2017","TotalPayment":"$1110387.71","Status":2,"Type":2},{"OrderID":"36987-2247","ShipCountry":"RU","ShipAddress":"2 Sommers Center","ShipName":"Pfeffer Group","OrderDate":"9/16/2017","TotalPayment":"$1157405.88","Status":4,"Type":2}]},\n' +
        '{"RecordID":118,"FirstName":"Cecily","LastName":"Pinkie","Company":"Fadeo","Email":"cpinkie39@earthlink.net","Phone":"443-263-4334","Status":1,"Type":2,"Orders":[{"OrderID":"69153-020","ShipCountry":"CN","ShipAddress":"45379 Hermina Park","ShipName":"Harris, Mosciski and White","OrderDate":"12/1/2016","TotalPayment":"$683959.81","Status":2,"Type":3},{"OrderID":"13267-123","ShipCountry":"CN","ShipAddress":"5118 Bobwhite Avenue","ShipName":"Thompson and Sons","OrderDate":"6/21/2017","TotalPayment":"$253839.37","Status":6,"Type":3},{"OrderID":"67777-214","ShipCountry":"TZ","ShipAddress":"74187 Sheridan Circle","ShipName":"Runte LLC","OrderDate":"1/13/2016","TotalPayment":"$769638.97","Status":5,"Type":3},{"OrderID":"53808-0707","ShipCountry":"RU","ShipAddress":"8 Erie Place","ShipName":"Hintz-VonRueden","OrderDate":"8/27/2016","TotalPayment":"$659561.87","Status":4,"Type":2},{"OrderID":"59535-1051","ShipCountry":"BA","ShipAddress":"33 Summerview Place","ShipName":"Boyle LLC","OrderDate":"7/4/2016","TotalPayment":"$101769.98","Status":1,"Type":3},{"OrderID":"68788-9219","ShipCountry":"TH","ShipAddress":"6167 Sycamore Court","ShipName":"Herman-Tillman","OrderDate":"9/2/2016","TotalPayment":"$674513.01","Status":6,"Type":3},{"OrderID":"68645-483","ShipCountry":"FR","ShipAddress":"68756 Schurz Point","ShipName":"Mosciski, Stehr and Corkery","OrderDate":"3/19/2017","TotalPayment":"$1020130.89","Status":6,"Type":3},{"OrderID":"50436-3155","ShipCountry":"FR","ShipAddress":"6 Northport Center","ShipName":"Simonis, Emmerich and Wolf","OrderDate":"11/6/2017","TotalPayment":"$640544.47","Status":2,"Type":1},{"OrderID":"66993-464","ShipCountry":"CN","ShipAddress":"9 Manitowish Alley","ShipName":"O\'Reilly, Hodkiewicz and Heaney","OrderDate":"6/23/2017","TotalPayment":"$230347.50","Status":6,"Type":1},{"OrderID":"48951-7051","ShipCountry":"CN","ShipAddress":"21 Utah Center","ShipName":"Kautzer and Sons","OrderDate":"8/12/2017","TotalPayment":"$857645.46","Status":1,"Type":2},{"OrderID":"63539-183","ShipCountry":"PH","ShipAddress":"54 Summerview Road","ShipName":"Gusikowski Inc","OrderDate":"10/17/2017","TotalPayment":"$631111.33","Status":3,"Type":1},{"OrderID":"55390-194","ShipCountry":"UA","ShipAddress":"324 Sherman Road","ShipName":"Wuckert, Kozey and Schimmel","OrderDate":"6/10/2016","TotalPayment":"$484452.04","Status":6,"Type":3}]},\n' +
        '{"RecordID":119,"FirstName":"Welch","LastName":"Demageard","Company":"Innojam","Email":"wdemageard3a@twitter.com","Phone":"537-759-3449","Status":1,"Type":1,"Orders":[{"OrderID":"60778-010","ShipCountry":"AL","ShipAddress":"6841 Sachtjen Alley","ShipName":"Corwin Group","OrderDate":"5/13/2017","TotalPayment":"$441561.46","Status":6,"Type":2},{"OrderID":"37000-845","ShipCountry":"FR","ShipAddress":"00 David Plaza","ShipName":"Zieme-Considine","OrderDate":"10/2/2016","TotalPayment":"$79006.68","Status":4,"Type":3},{"OrderID":"48951-9015","ShipCountry":"PY","ShipAddress":"3800 Lakewood Gardens Drive","ShipName":"Hills, Lesch and Lockman","OrderDate":"12/28/2017","TotalPayment":"$654299.71","Status":4,"Type":1},{"OrderID":"49035-447","ShipCountry":"CN","ShipAddress":"26376 Montana Pass","ShipName":"Pfeffer, Kemmer and Leannon","OrderDate":"3/21/2017","TotalPayment":"$237588.01","Status":1,"Type":2},{"OrderID":"37012-227","ShipCountry":"RU","ShipAddress":"07164 South Park","ShipName":"Bahringer Inc","OrderDate":"8/28/2017","TotalPayment":"$1130012.52","Status":1,"Type":2},{"OrderID":"49348-276","ShipCountry":"CN","ShipAddress":"51 Coleman Place","ShipName":"Turner-Stroman","OrderDate":"11/25/2016","TotalPayment":"$142365.07","Status":6,"Type":3},{"OrderID":"0703-5046","ShipCountry":"PL","ShipAddress":"1766 Rutledge Drive","ShipName":"Stamm, Schaden and Flatley","OrderDate":"10/5/2017","TotalPayment":"$913548.88","Status":4,"Type":3},{"OrderID":"65044-2631","ShipCountry":"CO","ShipAddress":"72778 Anhalt Road","ShipName":"Shields, Treutel and Bins","OrderDate":"6/10/2016","TotalPayment":"$222135.91","Status":4,"Type":3},{"OrderID":"37205-719","ShipCountry":"IE","ShipAddress":"67 Village Point","ShipName":"McKenzie-Walter","OrderDate":"4/4/2017","TotalPayment":"$1052775.85","Status":4,"Type":2},{"OrderID":"0363-8480","ShipCountry":"CL","ShipAddress":"957 Monument Hill","ShipName":"Okuneva-Senger","OrderDate":"7/4/2016","TotalPayment":"$575992.01","Status":2,"Type":2},{"OrderID":"11527-161","ShipCountry":"CN","ShipAddress":"9038 Tennyson Circle","ShipName":"Volkman-Gleichner","OrderDate":"10/30/2017","TotalPayment":"$1113166.69","Status":6,"Type":3},{"OrderID":"41190-477","ShipCountry":"CZ","ShipAddress":"69409 5th Avenue","ShipName":"Hansen, Monahan and Nitzsche","OrderDate":"4/4/2017","TotalPayment":"$1073139.30","Status":2,"Type":2},{"OrderID":"43742-0136","ShipCountry":"RU","ShipAddress":"050 Melody Lane","ShipName":"Kassulke-Beatty","OrderDate":"5/19/2016","TotalPayment":"$854570.14","Status":1,"Type":1},{"OrderID":"59735-314","ShipCountry":"PL","ShipAddress":"7 Spohn Point","ShipName":"Walker-Carter","OrderDate":"12/11/2016","TotalPayment":"$788551.03","Status":2,"Type":2},{"OrderID":"54868-3230","ShipCountry":"BH","ShipAddress":"91 Longview Lane","ShipName":"Haley Group","OrderDate":"9/11/2017","TotalPayment":"$305037.84","Status":2,"Type":1},{"OrderID":"64942-1122","ShipCountry":"US","ShipAddress":"9562 Di Loreto Circle","ShipName":"Crona-Nikolaus","OrderDate":"4/13/2016","TotalPayment":"$1192061.30","Status":4,"Type":1},{"OrderID":"68828-142","ShipCountry":"SE","ShipAddress":"73 Oakridge Street","ShipName":"Volkman, Barrows and Schuster","OrderDate":"7/15/2017","TotalPayment":"$987848.70","Status":1,"Type":3}]},\n' +
        '{"RecordID":120,"FirstName":"Tybi","LastName":"Izacenko","Company":"Buzzster","Email":"tizacenko3b@pen.io","Phone":"540-411-1230","Status":3,"Type":2,"Orders":[{"OrderID":"11822-0397","ShipCountry":"PT","ShipAddress":"0081 Mallard Trail","ShipName":"Maggio-Wunsch","OrderDate":"3/23/2016","TotalPayment":"$913132.87","Status":2,"Type":1},{"OrderID":"17518-056","ShipCountry":"SE","ShipAddress":"6 Little Fleur Way","ShipName":"Cassin, Koelpin and Corkery","OrderDate":"10/21/2016","TotalPayment":"$869918.88","Status":5,"Type":2},{"OrderID":"0268-6732","ShipCountry":"RU","ShipAddress":"3925 Eliot Drive","ShipName":"Murphy-Kuhlman","OrderDate":"12/2/2017","TotalPayment":"$64182.96","Status":5,"Type":1},{"OrderID":"0363-0452","ShipCountry":"BR","ShipAddress":"466 Homewood Trail","ShipName":"Schmidt, Wintheiser and Casper","OrderDate":"10/3/2016","TotalPayment":"$437818.67","Status":3,"Type":1},{"OrderID":"0115-9611","ShipCountry":"PH","ShipAddress":"1954 Katie Way","ShipName":"Wilkinson, Hegmann and Beatty","OrderDate":"12/28/2017","TotalPayment":"$1179874.84","Status":1,"Type":2},{"OrderID":"0363-0698","ShipCountry":"AU","ShipAddress":"0 Northridge Avenue","ShipName":"Ankunding, Crist and Hessel","OrderDate":"6/12/2016","TotalPayment":"$1118420.91","Status":4,"Type":1},{"OrderID":"48878-4020","ShipCountry":"JP","ShipAddress":"66 Amoth Avenue","ShipName":"Renner Inc","OrderDate":"1/17/2016","TotalPayment":"$1127342.65","Status":6,"Type":3},{"OrderID":"64117-213","ShipCountry":"PL","ShipAddress":"96 Monica Pass","ShipName":"Cruickshank-Dooley","OrderDate":"4/19/2017","TotalPayment":"$202143.17","Status":2,"Type":3},{"OrderID":"55154-4728","ShipCountry":"PH","ShipAddress":"055 Morrow Crossing","ShipName":"Fritsch LLC","OrderDate":"11/26/2017","TotalPayment":"$168356.17","Status":4,"Type":3},{"OrderID":"0078-0325","ShipCountry":"GR","ShipAddress":"02 Superior Park","ShipName":"Bernier Inc","OrderDate":"10/24/2016","TotalPayment":"$901834.89","Status":4,"Type":3},{"OrderID":"68151-0526","ShipCountry":"BR","ShipAddress":"815 Sage Junction","ShipName":"Wehner, Nikolaus and Fisher","OrderDate":"1/12/2017","TotalPayment":"$726327.73","Status":3,"Type":1},{"OrderID":"43419-034","ShipCountry":"TH","ShipAddress":"89642 Talmadge Street","ShipName":"Keeling, D\'Amore and Senger","OrderDate":"8/14/2017","TotalPayment":"$857283.01","Status":2,"Type":1},{"OrderID":"65044-2126","ShipCountry":"BR","ShipAddress":"2 Marcy Parkway","ShipName":"Cruickshank LLC","OrderDate":"1/23/2017","TotalPayment":"$1058633.63","Status":2,"Type":2},{"OrderID":"76058-101","ShipCountry":"CN","ShipAddress":"9 Hudson Court","ShipName":"Treutel and Sons","OrderDate":"8/27/2017","TotalPayment":"$1031333.28","Status":1,"Type":1},{"OrderID":"54868-6157","ShipCountry":"CN","ShipAddress":"31847 Scoville Parkway","ShipName":"Schuster-Ledner","OrderDate":"8/13/2016","TotalPayment":"$482608.75","Status":1,"Type":2},{"OrderID":"37808-085","ShipCountry":"MX","ShipAddress":"82 Oakridge Lane","ShipName":"Ruecker, Buckridge and Kub","OrderDate":"2/8/2017","TotalPayment":"$604069.62","Status":3,"Type":2},{"OrderID":"52125-957","ShipCountry":"CN","ShipAddress":"6681 Arapahoe Junction","ShipName":"Zieme-Kemmer","OrderDate":"2/22/2017","TotalPayment":"$475675.59","Status":5,"Type":3}]},\n' +
        '{"RecordID":121,"FirstName":"Mercy","LastName":"Blakeden","Company":"Edgeblab","Email":"mblakeden3c@apple.com","Phone":"582-443-0925","Status":2,"Type":3,"Orders":[{"OrderID":"0591-0397","ShipCountry":"PL","ShipAddress":"9271 Cherokee Trail","ShipName":"Goodwin-Monahan","OrderDate":"12/30/2017","TotalPayment":"$94214.30","Status":1,"Type":2},{"OrderID":"0378-9080","ShipCountry":"CZ","ShipAddress":"0493 Caliangt Court","ShipName":"Bergstrom, Wolff and Braun","OrderDate":"5/20/2017","TotalPayment":"$399495.51","Status":4,"Type":1},{"OrderID":"55154-4787","ShipCountry":"US","ShipAddress":"5 Hoffman Circle","ShipName":"Runolfsdottir-Robel","OrderDate":"7/17/2017","TotalPayment":"$989598.47","Status":1,"Type":1},{"OrderID":"52125-335","ShipCountry":"FI","ShipAddress":"1 Dexter Terrace","ShipName":"Breitenberg-Skiles","OrderDate":"2/17/2016","TotalPayment":"$760962.50","Status":2,"Type":2},{"OrderID":"13668-149","ShipCountry":"RU","ShipAddress":"850 Redwing Place","ShipName":"Kautzer, VonRueden and Hessel","OrderDate":"4/18/2016","TotalPayment":"$168570.70","Status":2,"Type":2},{"OrderID":"65862-186","ShipCountry":"UA","ShipAddress":"37 Menomonie Center","ShipName":"Farrell LLC","OrderDate":"12/8/2016","TotalPayment":"$743720.11","Status":6,"Type":3},{"OrderID":"0591-0860","ShipCountry":"IS","ShipAddress":"8542 Florence Point","ShipName":"Frami-Jacobi","OrderDate":"2/2/2016","TotalPayment":"$165660.23","Status":3,"Type":3},{"OrderID":"54569-0330","ShipCountry":"CZ","ShipAddress":"7 Atwood Plaza","ShipName":"Barrows Group","OrderDate":"9/25/2016","TotalPayment":"$889252.39","Status":5,"Type":2},{"OrderID":"23155-196","ShipCountry":"HN","ShipAddress":"4 Fulton Junction","ShipName":"Moen Inc","OrderDate":"7/27/2017","TotalPayment":"$367813.40","Status":5,"Type":2},{"OrderID":"49349-607","ShipCountry":"ID","ShipAddress":"5490 Mccormick Trail","ShipName":"Crooks-Cummings","OrderDate":"6/26/2017","TotalPayment":"$1104780.46","Status":2,"Type":2}]},\n' +
        '{"RecordID":122,"FirstName":"Dusty","LastName":"Stailey","Company":"Kazu","Email":"dstailey3d@bigcartel.com","Phone":"188-497-1628","Status":4,"Type":1,"Orders":[{"OrderID":"43386-712","ShipCountry":"CN","ShipAddress":"82 Tennyson Alley","ShipName":"Boehm Inc","OrderDate":"12/15/2016","TotalPayment":"$960379.91","Status":2,"Type":2},{"OrderID":"60760-429","ShipCountry":"CN","ShipAddress":"090 Cordelia Place","ShipName":"Keeling, Carter and Haag","OrderDate":"4/14/2017","TotalPayment":"$1026759.17","Status":6,"Type":3},{"OrderID":"59779-087","ShipCountry":"AZ","ShipAddress":"05 Tennyson Avenue","ShipName":"Rippin-Bruen","OrderDate":"7/5/2017","TotalPayment":"$478596.47","Status":5,"Type":1},{"OrderID":"33261-756","ShipCountry":"CN","ShipAddress":"257 Anniversary Road","ShipName":"Schaden-Runolfsson","OrderDate":"2/12/2016","TotalPayment":"$968094.77","Status":1,"Type":1},{"OrderID":"0074-3079","ShipCountry":"NG","ShipAddress":"86042 Fulton Park","ShipName":"Kub, Thiel and Thiel","OrderDate":"3/3/2016","TotalPayment":"$310592.46","Status":1,"Type":2},{"OrderID":"63783-400","ShipCountry":"JM","ShipAddress":"8333 Thackeray Place","ShipName":"Hintz-Rowe","OrderDate":"11/14/2017","TotalPayment":"$449804.81","Status":4,"Type":3},{"OrderID":"65923-012","ShipCountry":"BR","ShipAddress":"34 Dryden Drive","ShipName":"Herzog Group","OrderDate":"10/16/2017","TotalPayment":"$716772.27","Status":1,"Type":2},{"OrderID":"0093-5851","ShipCountry":"CN","ShipAddress":"6315 Derek Plaza","ShipName":"Rolfson Inc","OrderDate":"5/13/2017","TotalPayment":"$780421.26","Status":6,"Type":3},{"OrderID":"43478-241","ShipCountry":"PT","ShipAddress":"5 Brown Place","ShipName":"Buckridge-Denesik","OrderDate":"12/1/2017","TotalPayment":"$1096223.13","Status":2,"Type":2},{"OrderID":"30142-702","ShipCountry":"BR","ShipAddress":"5 Mcbride Road","ShipName":"Ruecker, Lakin and Boyer","OrderDate":"3/22/2016","TotalPayment":"$310927.49","Status":1,"Type":2},{"OrderID":"0615-7584","ShipCountry":"CN","ShipAddress":"90611 Sutherland Avenue","ShipName":"Runolfsson-Gusikowski","OrderDate":"12/27/2016","TotalPayment":"$782488.33","Status":6,"Type":3},{"OrderID":"68828-091","ShipCountry":"IL","ShipAddress":"5642 Memorial Hill","ShipName":"Boyle, Hintz and Streich","OrderDate":"2/25/2016","TotalPayment":"$431930.00","Status":1,"Type":1},{"OrderID":"11673-458","ShipCountry":"VE","ShipAddress":"79713 Judy Street","ShipName":"Dickinson-Armstrong","OrderDate":"6/2/2016","TotalPayment":"$384070.94","Status":3,"Type":3},{"OrderID":"76214-009","ShipCountry":"DK","ShipAddress":"9 Bartillon Plaza","ShipName":"Frami, Kunze and Greenfelder","OrderDate":"7/31/2017","TotalPayment":"$766397.21","Status":6,"Type":3},{"OrderID":"63739-964","ShipCountry":"PH","ShipAddress":"1 American Ash Way","ShipName":"Lubowitz-Rosenbaum","OrderDate":"9/19/2017","TotalPayment":"$863453.32","Status":5,"Type":1},{"OrderID":"16714-314","ShipCountry":"ID","ShipAddress":"12399 Bellgrove Court","ShipName":"Bode and Sons","OrderDate":"5/19/2016","TotalPayment":"$399420.85","Status":4,"Type":1}]},\n' +
        '{"RecordID":123,"FirstName":"Ileane","LastName":"Culkin","Company":"Rhyzio","Email":"iculkin3e@utexas.edu","Phone":"361-836-2234","Status":3,"Type":1,"Orders":[{"OrderID":"45861-100","ShipCountry":"US","ShipAddress":"0231 Manitowish Junction","ShipName":"Hintz-Smith","OrderDate":"9/23/2017","TotalPayment":"$221401.39","Status":5,"Type":2},{"OrderID":"0186-1092","ShipCountry":"PT","ShipAddress":"19 Hooker Lane","ShipName":"Collins and Sons","OrderDate":"8/17/2017","TotalPayment":"$673320.78","Status":6,"Type":3},{"OrderID":"55714-8006","ShipCountry":"FR","ShipAddress":"42 Vernon Lane","ShipName":"Maggio-Torp","OrderDate":"7/16/2017","TotalPayment":"$589053.06","Status":6,"Type":1},{"OrderID":"0268-1435","ShipCountry":"RU","ShipAddress":"72 Vernon Hill","ShipName":"Schumm and Sons","OrderDate":"11/5/2017","TotalPayment":"$989835.47","Status":5,"Type":2},{"OrderID":"43742-0015","ShipCountry":"AM","ShipAddress":"32 Fairfield Court","ShipName":"Schultz, Cummings and Torphy","OrderDate":"7/17/2017","TotalPayment":"$740110.06","Status":1,"Type":3},{"OrderID":"68084-703","ShipCountry":"SE","ShipAddress":"8 Ludington Avenue","ShipName":"Heaney-Brekke","OrderDate":"6/14/2016","TotalPayment":"$243159.57","Status":4,"Type":1},{"OrderID":"49349-777","ShipCountry":"CN","ShipAddress":"55097 Melrose Pass","ShipName":"Little, Cormier and Fay","OrderDate":"6/23/2016","TotalPayment":"$1171651.75","Status":5,"Type":1},{"OrderID":"0338-1005","ShipCountry":"VE","ShipAddress":"17 Oneill Trail","ShipName":"Feest Inc","OrderDate":"10/4/2016","TotalPayment":"$1062960.61","Status":6,"Type":2},{"OrderID":"0338-0695","ShipCountry":"HU","ShipAddress":"504 Thierer Parkway","ShipName":"Wyman, Huels and Trantow","OrderDate":"1/17/2017","TotalPayment":"$109992.81","Status":4,"Type":3},{"OrderID":"58668-4101","ShipCountry":"MG","ShipAddress":"336 Luster Street","ShipName":"Collier Inc","OrderDate":"5/12/2016","TotalPayment":"$988503.27","Status":2,"Type":3},{"OrderID":"43853-0005","ShipCountry":"RU","ShipAddress":"77 Tennessee Street","ShipName":"Feil Group","OrderDate":"4/6/2017","TotalPayment":"$64272.93","Status":5,"Type":3},{"OrderID":"48951-1202","ShipCountry":"BO","ShipAddress":"803 Moose Place","ShipName":"Torp-Jacobson","OrderDate":"12/10/2017","TotalPayment":"$1125500.27","Status":1,"Type":1},{"OrderID":"51009-111","ShipCountry":"GR","ShipAddress":"829 Sloan Pass","ShipName":"VonRueden, Hudson and Williamson","OrderDate":"4/24/2017","TotalPayment":"$1095412.16","Status":5,"Type":3},{"OrderID":"52125-567","ShipCountry":"KR","ShipAddress":"249 Spohn Lane","ShipName":"Volkman and Sons","OrderDate":"11/1/2016","TotalPayment":"$588788.40","Status":5,"Type":3},{"OrderID":"66129-840","ShipCountry":"PH","ShipAddress":"0 Golf Course Way","ShipName":"Dare-Sipes","OrderDate":"4/11/2017","TotalPayment":"$367334.36","Status":1,"Type":3},{"OrderID":"52686-310","ShipCountry":"ZA","ShipAddress":"456 Lindbergh Center","ShipName":"Klein Group","OrderDate":"12/21/2016","TotalPayment":"$194501.65","Status":6,"Type":3},{"OrderID":"57344-133","ShipCountry":"PH","ShipAddress":"991 Raven Center","ShipName":"Williamson LLC","OrderDate":"5/31/2017","TotalPayment":"$901552.12","Status":6,"Type":1},{"OrderID":"68151-4488","ShipCountry":"CN","ShipAddress":"77373 Northfield Park","ShipName":"Muller LLC","OrderDate":"8/27/2017","TotalPayment":"$720130.06","Status":2,"Type":2},{"OrderID":"15127-595","ShipCountry":"SE","ShipAddress":"4 Old Gate Avenue","ShipName":"DuBuque, Greenfelder and Balistreri","OrderDate":"6/2/2017","TotalPayment":"$89390.86","Status":6,"Type":3}]},\n' +
        '{"RecordID":124,"FirstName":"Avie","LastName":"Beric","Company":"Viva","Email":"aberic3f@google.com","Phone":"202-543-2464","Status":4,"Type":3,"Orders":[{"OrderID":"54973-3174","ShipCountry":"PL","ShipAddress":"1 Elka Way","ShipName":"Zboncak-Torp","OrderDate":"10/4/2017","TotalPayment":"$75383.16","Status":5,"Type":3},{"OrderID":"65862-228","ShipCountry":"TG","ShipAddress":"7 Jay Point","ShipName":"Marks Group","OrderDate":"1/13/2016","TotalPayment":"$405448.69","Status":2,"Type":3},{"OrderID":"43269-902","ShipCountry":"RU","ShipAddress":"74 Talisman Way","ShipName":"Mills Inc","OrderDate":"11/21/2017","TotalPayment":"$239545.89","Status":4,"Type":1},{"OrderID":"0264-4001","ShipCountry":"FI","ShipAddress":"9892 Susan Court","ShipName":"Howell-Mante","OrderDate":"6/5/2016","TotalPayment":"$497726.68","Status":4,"Type":1},{"OrderID":"16590-174","ShipCountry":"LT","ShipAddress":"33 Oak Drive","ShipName":"Witting LLC","OrderDate":"10/4/2016","TotalPayment":"$715587.89","Status":3,"Type":2},{"OrderID":"64942-1233","ShipCountry":"RU","ShipAddress":"2321 Tennyson Parkway","ShipName":"Quigley, Kutch and Mann","OrderDate":"3/27/2017","TotalPayment":"$690292.75","Status":5,"Type":3},{"OrderID":"98132-706","ShipCountry":"FI","ShipAddress":"01 Golf View Way","ShipName":"Kertzmann LLC","OrderDate":"9/12/2017","TotalPayment":"$438411.22","Status":1,"Type":3},{"OrderID":"43857-0166","ShipCountry":"RU","ShipAddress":"99 Sunbrook Junction","ShipName":"McLaughlin-Trantow","OrderDate":"6/23/2017","TotalPayment":"$307569.40","Status":1,"Type":3},{"OrderID":"55289-298","ShipCountry":"CN","ShipAddress":"610 Parkside Crossing","ShipName":"Langosh Inc","OrderDate":"9/6/2017","TotalPayment":"$692586.02","Status":3,"Type":2},{"OrderID":"49349-612","ShipCountry":"UG","ShipAddress":"1012 Rieder Place","ShipName":"Abernathy Group","OrderDate":"5/5/2016","TotalPayment":"$205787.49","Status":6,"Type":1}]},\n' +
        '{"RecordID":125,"FirstName":"Gardiner","LastName":"Gorrie","Company":"Yodo","Email":"ggorrie3g@psu.edu","Phone":"703-624-6153","Status":2,"Type":2,"Orders":[{"OrderID":"54575-963","ShipCountry":"CR","ShipAddress":"40152 Muir Drive","ShipName":"Marks, Emard and Fay","OrderDate":"3/21/2017","TotalPayment":"$990299.45","Status":5,"Type":1},{"OrderID":"37205-308","ShipCountry":"PH","ShipAddress":"331 Harbort Crossing","ShipName":"Hoeger-Bode","OrderDate":"10/9/2017","TotalPayment":"$848108.31","Status":5,"Type":2},{"OrderID":"10578-032","ShipCountry":"CN","ShipAddress":"9345 Grasskamp Hill","ShipName":"Haley-Harris","OrderDate":"3/26/2017","TotalPayment":"$335821.14","Status":5,"Type":1},{"OrderID":"43386-530","ShipCountry":"ID","ShipAddress":"363 Westport Pass","ShipName":"Williamson, Sawayn and Prosacco","OrderDate":"7/5/2016","TotalPayment":"$808962.70","Status":3,"Type":2},{"OrderID":"76378-017","ShipCountry":"ID","ShipAddress":"797 Sachs Point","ShipName":"Schmitt Inc","OrderDate":"9/7/2017","TotalPayment":"$986373.86","Status":5,"Type":3},{"OrderID":"64159-6970","ShipCountry":"PH","ShipAddress":"967 Hermina Road","ShipName":"Goodwin Group","OrderDate":"2/8/2016","TotalPayment":"$733486.10","Status":2,"Type":2},{"OrderID":"10096-0253","ShipCountry":"CN","ShipAddress":"9942 Schurz Center","ShipName":"Schmidt-Bins","OrderDate":"3/13/2017","TotalPayment":"$251234.25","Status":3,"Type":1},{"OrderID":"37000-123","ShipCountry":"PH","ShipAddress":"29948 Forest Court","ShipName":"Pollich, Lesch and Lemke","OrderDate":"8/27/2017","TotalPayment":"$1013778.00","Status":3,"Type":1},{"OrderID":"49999-035","ShipCountry":"NL","ShipAddress":"1167 Kropf Trail","ShipName":"Murazik-Murray","OrderDate":"3/18/2017","TotalPayment":"$975004.31","Status":6,"Type":1},{"OrderID":"50111-326","ShipCountry":"PE","ShipAddress":"9 Scoville Junction","ShipName":"Smitham LLC","OrderDate":"5/22/2016","TotalPayment":"$1022474.85","Status":3,"Type":1},{"OrderID":"21695-477","ShipCountry":"PL","ShipAddress":"0 Steensland Way","ShipName":"Christiansen Inc","OrderDate":"7/8/2017","TotalPayment":"$979013.11","Status":4,"Type":2},{"OrderID":"60429-012","ShipCountry":"AM","ShipAddress":"64 Eggendart Crossing","ShipName":"Armstrong, Leannon and Stanton","OrderDate":"1/23/2016","TotalPayment":"$708305.00","Status":6,"Type":2},{"OrderID":"76439-269","ShipCountry":"RU","ShipAddress":"80 Green Avenue","ShipName":"Kihn, Lebsack and Gulgowski","OrderDate":"4/21/2017","TotalPayment":"$1010158.79","Status":4,"Type":2},{"OrderID":"60429-247","ShipCountry":"CA","ShipAddress":"69422 Eastwood Hill","ShipName":"Grimes-Yost","OrderDate":"7/11/2017","TotalPayment":"$533159.43","Status":4,"Type":2},{"OrderID":"68084-603","ShipCountry":"CN","ShipAddress":"6601 Mcguire Plaza","ShipName":"Lang LLC","OrderDate":"11/14/2017","TotalPayment":"$1020230.69","Status":5,"Type":3}]},\n' +
        '{"RecordID":126,"FirstName":"Suzi","LastName":"Noseworthy","Company":"Aivee","Email":"snoseworthy3h@lycos.com","Phone":"670-352-0018","Status":4,"Type":2,"Orders":[{"OrderID":"41250-352","ShipCountry":"FR","ShipAddress":"09188 Pawling Crossing","ShipName":"Russel, Shields and Fisher","OrderDate":"1/24/2017","TotalPayment":"$800703.87","Status":6,"Type":3},{"OrderID":"52731-7050","ShipCountry":"RU","ShipAddress":"6 Gerald Terrace","ShipName":"Kub, Gutkowski and Greenholt","OrderDate":"9/9/2016","TotalPayment":"$369642.16","Status":2,"Type":3},{"OrderID":"59779-811","ShipCountry":"PE","ShipAddress":"72 Larry Terrace","ShipName":"Quigley, Predovic and Jaskolski","OrderDate":"11/3/2017","TotalPayment":"$839557.95","Status":6,"Type":1},{"OrderID":"54868-6222","ShipCountry":"FR","ShipAddress":"9 Carpenter Plaza","ShipName":"Walter, Hane and Waelchi","OrderDate":"6/25/2017","TotalPayment":"$164969.57","Status":5,"Type":2},{"OrderID":"49738-206","ShipCountry":"US","ShipAddress":"189 Westridge Street","ShipName":"Walker-Maggio","OrderDate":"4/16/2017","TotalPayment":"$182865.46","Status":2,"Type":2},{"OrderID":"0051-8425","ShipCountry":"CN","ShipAddress":"6 Porter Drive","ShipName":"Bernhard, Bernhard and Zemlak","OrderDate":"3/9/2016","TotalPayment":"$996835.51","Status":5,"Type":2},{"OrderID":"11084-533","ShipCountry":"CN","ShipAddress":"714 Elka Circle","ShipName":"Kohler-Gulgowski","OrderDate":"11/14/2017","TotalPayment":"$420169.01","Status":3,"Type":3},{"OrderID":"55319-510","ShipCountry":"HU","ShipAddress":"00062 Graceland Lane","ShipName":"Streich, Bernhard and Hyatt","OrderDate":"12/12/2017","TotalPayment":"$784793.73","Status":3,"Type":3}]},\n' +
        '{"RecordID":127,"FirstName":"Leola","LastName":"Audenis","Company":"Gabspot","Email":"laudenis3i@irs.gov","Phone":"709-249-8178","Status":3,"Type":1,"Orders":[{"OrderID":"55312-358","ShipCountry":"CR","ShipAddress":"3558 Loomis Road","ShipName":"Will, Kutch and Kassulke","OrderDate":"3/26/2017","TotalPayment":"$557390.42","Status":5,"Type":1},{"OrderID":"37000-606","ShipCountry":"PH","ShipAddress":"9284 Mosinee Trail","ShipName":"Friesen-Denesik","OrderDate":"11/28/2016","TotalPayment":"$846856.24","Status":4,"Type":1},{"OrderID":"59078-028","ShipCountry":"US","ShipAddress":"32 Michigan Parkway","ShipName":"D\'Amore-Johnson","OrderDate":"1/12/2016","TotalPayment":"$1130994.35","Status":5,"Type":1},{"OrderID":"0268-1062","ShipCountry":"RU","ShipAddress":"3184 Hanson Terrace","ShipName":"Kilback, Sauer and Dare","OrderDate":"1/15/2016","TotalPayment":"$618206.91","Status":4,"Type":2},{"OrderID":"51334-0001","ShipCountry":"CN","ShipAddress":"9067 Lakewood Lane","ShipName":"Rowe Group","OrderDate":"12/30/2017","TotalPayment":"$326162.55","Status":6,"Type":3},{"OrderID":"41163-173","ShipCountry":"JP","ShipAddress":"7985 Mallard Hill","ShipName":"Macejkovic, Rutherford and Ward","OrderDate":"3/25/2016","TotalPayment":"$1014820.07","Status":2,"Type":2},{"OrderID":"0143-1765","ShipCountry":"CN","ShipAddress":"0160 Anniversary Avenue","ShipName":"Carroll, Carroll and Bednar","OrderDate":"5/16/2017","TotalPayment":"$864452.99","Status":5,"Type":3},{"OrderID":"54868-6745","ShipCountry":"BR","ShipAddress":"049 Katie Junction","ShipName":"Gleason, Kerluke and Gutkowski","OrderDate":"4/11/2016","TotalPayment":"$1136115.08","Status":1,"Type":2},{"OrderID":"55154-0910","ShipCountry":"PK","ShipAddress":"0 Waxwing Alley","ShipName":"Gleason, Okuneva and Willms","OrderDate":"4/17/2017","TotalPayment":"$471296.57","Status":5,"Type":3},{"OrderID":"52544-930","ShipCountry":"CL","ShipAddress":"7 Transport Place","ShipName":"Kutch and Sons","OrderDate":"7/29/2016","TotalPayment":"$108988.26","Status":5,"Type":2},{"OrderID":"55312-843","ShipCountry":"SY","ShipAddress":"91745 Lakeland Center","ShipName":"Moore-Huel","OrderDate":"12/29/2017","TotalPayment":"$345058.30","Status":2,"Type":2},{"OrderID":"51808-206","ShipCountry":"CN","ShipAddress":"998 Mandrake Crossing","ShipName":"Feest, Boehm and Torphy","OrderDate":"3/4/2016","TotalPayment":"$1174200.13","Status":1,"Type":3},{"OrderID":"0591-3494","ShipCountry":"CN","ShipAddress":"5 Parkside Lane","ShipName":"Trantow, Haag and Williamson","OrderDate":"9/11/2017","TotalPayment":"$39212.01","Status":3,"Type":2},{"OrderID":"36987-3278","ShipCountry":"BR","ShipAddress":"6356 North Avenue","ShipName":"Feest-Abshire","OrderDate":"8/2/2016","TotalPayment":"$238230.92","Status":2,"Type":3},{"OrderID":"68428-156","ShipCountry":"CN","ShipAddress":"586 Sheridan Lane","ShipName":"Rolfson-Schiller","OrderDate":"12/24/2017","TotalPayment":"$936629.83","Status":4,"Type":2},{"OrderID":"42254-190","ShipCountry":"CZ","ShipAddress":"279 Pepper Wood Alley","ShipName":"Herzog, Denesik and Fadel","OrderDate":"2/15/2017","TotalPayment":"$227065.49","Status":1,"Type":1}]},\n' +
        '{"RecordID":128,"FirstName":"Catie","LastName":"Mapstone","Company":"Latz","Email":"cmapstone3j@uiuc.edu","Phone":"595-921-8691","Status":4,"Type":3,"Orders":[{"OrderID":"24338-300","ShipCountry":"KP","ShipAddress":"7949 Ludington Pass","ShipName":"Romaguera-Wuckert","OrderDate":"6/11/2017","TotalPayment":"$1112687.03","Status":5,"Type":1},{"OrderID":"61442-171","ShipCountry":"ID","ShipAddress":"4 Bayside Center","ShipName":"Beahan LLC","OrderDate":"1/7/2016","TotalPayment":"$656246.45","Status":6,"Type":1},{"OrderID":"46123-006","ShipCountry":"BR","ShipAddress":"2131 Browning Circle","ShipName":"Schuppe, Konopelski and Johnson","OrderDate":"7/8/2017","TotalPayment":"$1064465.35","Status":6,"Type":2},{"OrderID":"64942-1186","ShipCountry":"PH","ShipAddress":"5 Union Court","ShipName":"Gerlach, Batz and Nicolas","OrderDate":"10/13/2016","TotalPayment":"$678329.02","Status":1,"Type":1},{"OrderID":"0781-2865","ShipCountry":"UA","ShipAddress":"43305 Pearson Way","ShipName":"Weimann, Marks and Thiel","OrderDate":"3/19/2017","TotalPayment":"$679657.38","Status":2,"Type":1},{"OrderID":"21695-801","ShipCountry":"SI","ShipAddress":"812 Hintze Crossing","ShipName":"Hodkiewicz, Littel and Hartmann","OrderDate":"7/26/2016","TotalPayment":"$1110397.93","Status":5,"Type":1},{"OrderID":"43353-757","ShipCountry":"ID","ShipAddress":"9669 Ludington Court","ShipName":"Sawayn and Sons","OrderDate":"1/2/2017","TotalPayment":"$763290.33","Status":1,"Type":2},{"OrderID":"0093-4030","ShipCountry":"SV","ShipAddress":"0707 Huxley Plaza","ShipName":"Keebler-Padberg","OrderDate":"8/24/2016","TotalPayment":"$1084459.73","Status":4,"Type":2},{"OrderID":"65310-002","ShipCountry":"ID","ShipAddress":"3776 Dorton Junction","ShipName":"Bahringer, Gottlieb and Johnston","OrderDate":"8/5/2017","TotalPayment":"$381154.24","Status":2,"Type":2},{"OrderID":"0703-4686","ShipCountry":"SY","ShipAddress":"70296 Sheridan Street","ShipName":"Mills-Ward","OrderDate":"6/16/2017","TotalPayment":"$331409.44","Status":4,"Type":2},{"OrderID":"49035-014","ShipCountry":"ID","ShipAddress":"54072 Pleasure Place","ShipName":"Goyette-Will","OrderDate":"9/13/2016","TotalPayment":"$1104359.76","Status":4,"Type":1},{"OrderID":"14783-272","ShipCountry":"VE","ShipAddress":"65 Boyd Plaza","ShipName":"Swift-Gutmann","OrderDate":"12/6/2016","TotalPayment":"$11031.31","Status":1,"Type":2},{"OrderID":"10096-0221","ShipCountry":"PH","ShipAddress":"4972 Red Cloud Street","ShipName":"Langworth, Borer and Corkery","OrderDate":"12/9/2016","TotalPayment":"$785314.17","Status":4,"Type":1},{"OrderID":"44911-0042","ShipCountry":"JP","ShipAddress":"217 Sage Crossing","ShipName":"Bruen Inc","OrderDate":"12/15/2017","TotalPayment":"$983034.00","Status":1,"Type":2},{"OrderID":"68472-108","ShipCountry":"CN","ShipAddress":"834 Dexter Point","ShipName":"Christiansen and Sons","OrderDate":"3/26/2016","TotalPayment":"$511734.18","Status":5,"Type":1},{"OrderID":"0085-0314","ShipCountry":"CZ","ShipAddress":"2 Packers Center","ShipName":"Upton-Jacobs","OrderDate":"12/1/2016","TotalPayment":"$959233.76","Status":1,"Type":2},{"OrderID":"64117-138","ShipCountry":"TH","ShipAddress":"889 Stephen Hill","ShipName":"Bode-Little","OrderDate":"6/18/2017","TotalPayment":"$626006.72","Status":2,"Type":2}]},\n' +
        '{"RecordID":129,"FirstName":"Barny","LastName":"Trevan","Company":"Fatz","Email":"btrevan3k@scribd.com","Phone":"313-456-4274","Status":2,"Type":3,"Orders":[{"OrderID":"68788-9871","ShipCountry":"PE","ShipAddress":"55 Nobel Center","ShipName":"Schuster, Kunze and Lebsack","OrderDate":"7/16/2017","TotalPayment":"$1006476.19","Status":3,"Type":2},{"OrderID":"65044-2101","ShipCountry":"AM","ShipAddress":"75 Mallory Alley","ShipName":"Robel Group","OrderDate":"2/12/2017","TotalPayment":"$256811.31","Status":4,"Type":3},{"OrderID":"42291-801","ShipCountry":"CN","ShipAddress":"96738 Lotheville Place","ShipName":"Beatty, Luettgen and Koch","OrderDate":"7/5/2016","TotalPayment":"$824205.11","Status":2,"Type":3},{"OrderID":"50988-170","ShipCountry":"ME","ShipAddress":"4 Eliot Way","ShipName":"Bashirian and Sons","OrderDate":"4/7/2017","TotalPayment":"$1088212.02","Status":4,"Type":1},{"OrderID":"24286-1521","ShipCountry":"CZ","ShipAddress":"9 Sundown Trail","ShipName":"Kohler, Cassin and Hilll","OrderDate":"11/15/2017","TotalPayment":"$711456.21","Status":6,"Type":3},{"OrderID":"63481-907","ShipCountry":"JP","ShipAddress":"1542 East Circle","ShipName":"Moen, Bergstrom and Franecki","OrderDate":"12/26/2017","TotalPayment":"$330710.18","Status":4,"Type":3},{"OrderID":"58668-1971","ShipCountry":"GR","ShipAddress":"617 Merry Way","ShipName":"Haag, Osinski and Quigley","OrderDate":"5/22/2017","TotalPayment":"$881469.73","Status":2,"Type":3}]},\n' +
        '{"RecordID":130,"FirstName":"Patience","LastName":"Haken","Company":"Mynte","Email":"phaken3l@state.tx.us","Phone":"796-932-3331","Status":3,"Type":1,"Orders":[{"OrderID":"0268-6319","ShipCountry":"US","ShipAddress":"5280 Chinook Terrace","ShipName":"Barton-Langosh","OrderDate":"6/13/2016","TotalPayment":"$1112416.97","Status":6,"Type":1},{"OrderID":"0378-2071","ShipCountry":"ID","ShipAddress":"6 Ronald Regan Terrace","ShipName":"Cartwright, Daniel and Wisoky","OrderDate":"3/19/2017","TotalPayment":"$905027.60","Status":5,"Type":3},{"OrderID":"53489-387","ShipCountry":"ID","ShipAddress":"5823 Crowley Circle","ShipName":"Bins Group","OrderDate":"5/15/2016","TotalPayment":"$437682.93","Status":1,"Type":2},{"OrderID":"51079-128","ShipCountry":"RU","ShipAddress":"72 Stoughton Junction","ShipName":"Hand LLC","OrderDate":"3/10/2017","TotalPayment":"$829066.11","Status":6,"Type":2},{"OrderID":"0603-0851","ShipCountry":"IS","ShipAddress":"520 Hauk Crossing","ShipName":"Jakubowski, Hayes and Prosacco","OrderDate":"2/17/2017","TotalPayment":"$768559.57","Status":1,"Type":2},{"OrderID":"0603-4381","ShipCountry":"ID","ShipAddress":"9108 Northridge Trail","ShipName":"Paucek, Bashirian and Thiel","OrderDate":"7/16/2016","TotalPayment":"$437647.39","Status":6,"Type":2},{"OrderID":"54868-4867","ShipCountry":"PL","ShipAddress":"8 Esch Pass","ShipName":"Hilll-Bailey","OrderDate":"3/10/2017","TotalPayment":"$683266.11","Status":2,"Type":3},{"OrderID":"57955-0758","ShipCountry":"ID","ShipAddress":"5257 Cody Circle","ShipName":"Crist, Gislason and Sipes","OrderDate":"1/3/2016","TotalPayment":"$1155453.28","Status":3,"Type":2},{"OrderID":"41250-917","ShipCountry":"JP","ShipAddress":"84 Summerview Terrace","ShipName":"Wilkinson Inc","OrderDate":"3/6/2017","TotalPayment":"$557086.82","Status":4,"Type":2},{"OrderID":"57520-1021","ShipCountry":"RU","ShipAddress":"3545 Clove Court","ShipName":"Osinski-Skiles","OrderDate":"1/3/2017","TotalPayment":"$651791.70","Status":3,"Type":1},{"OrderID":"0268-0805","ShipCountry":"ID","ShipAddress":"6 Spenser Plaza","ShipName":"Durgan and Sons","OrderDate":"3/15/2017","TotalPayment":"$799331.56","Status":2,"Type":1},{"OrderID":"48951-9048","ShipCountry":"DO","ShipAddress":"0 Golf View Lane","ShipName":"Balistreri Group","OrderDate":"11/24/2016","TotalPayment":"$616619.75","Status":2,"Type":3},{"OrderID":"0143-9756","ShipCountry":"CN","ShipAddress":"92473 Boyd Lane","ShipName":"Windler-Will","OrderDate":"4/8/2017","TotalPayment":"$583357.49","Status":6,"Type":1},{"OrderID":"57520-1029","ShipCountry":"PH","ShipAddress":"3357 Morrow Place","ShipName":"Nolan and Sons","OrderDate":"5/6/2016","TotalPayment":"$119880.83","Status":3,"Type":1},{"OrderID":"49288-0377","ShipCountry":"MG","ShipAddress":"98515 Sheridan Crossing","ShipName":"Marquardt-Kling","OrderDate":"9/23/2016","TotalPayment":"$1060570.06","Status":1,"Type":2},{"OrderID":"68788-9802","ShipCountry":"SE","ShipAddress":"8562 Pankratz Park","ShipName":"Botsford, Padberg and Torp","OrderDate":"10/5/2017","TotalPayment":"$600666.98","Status":1,"Type":2},{"OrderID":"17452-390","ShipCountry":"PT","ShipAddress":"65617 Old Shore Lane","ShipName":"Price-Huel","OrderDate":"1/31/2017","TotalPayment":"$605519.84","Status":3,"Type":1},{"OrderID":"55154-5976","ShipCountry":"NG","ShipAddress":"7 Spaight Drive","ShipName":"Konopelski-Wyman","OrderDate":"11/2/2017","TotalPayment":"$165604.21","Status":1,"Type":1},{"OrderID":"59779-488","ShipCountry":"CN","ShipAddress":"2 Randy Avenue","ShipName":"Simonis-Stehr","OrderDate":"7/15/2016","TotalPayment":"$58261.81","Status":5,"Type":2}]},\n' +
        '{"RecordID":131,"FirstName":"Ward","LastName":"Darrach","Company":"Skippad","Email":"wdarrach3m@mlb.com","Phone":"898-211-1223","Status":2,"Type":2,"Orders":[{"OrderID":"49483-330","ShipCountry":"ID","ShipAddress":"43 Fallview Drive","ShipName":"Skiles LLC","OrderDate":"5/17/2017","TotalPayment":"$1112158.80","Status":5,"Type":1},{"OrderID":"65162-998","ShipCountry":"CN","ShipAddress":"67378 Drewry Pass","ShipName":"Beier, Ortiz and Rodriguez","OrderDate":"9/11/2016","TotalPayment":"$910409.74","Status":6,"Type":2},{"OrderID":"10337-395","ShipCountry":"CU","ShipAddress":"889 Pearson Court","ShipName":"Carroll, Huels and Bosco","OrderDate":"3/19/2016","TotalPayment":"$531678.63","Status":3,"Type":2},{"OrderID":"52125-047","ShipCountry":"ID","ShipAddress":"9 Sullivan Crossing","ShipName":"Hand-Dickinson","OrderDate":"6/8/2017","TotalPayment":"$642593.10","Status":2,"Type":1},{"OrderID":"63323-285","ShipCountry":"CN","ShipAddress":"00722 Randy Junction","ShipName":"Ferry and Sons","OrderDate":"1/28/2017","TotalPayment":"$274006.82","Status":6,"Type":1},{"OrderID":"10019-953","ShipCountry":"ID","ShipAddress":"9 Browning Street","ShipName":"Hudson Group","OrderDate":"3/2/2017","TotalPayment":"$554177.24","Status":3,"Type":1},{"OrderID":"48951-6045","ShipCountry":"CN","ShipAddress":"8851 Mallory Way","ShipName":"Zulauf LLC","OrderDate":"7/13/2016","TotalPayment":"$382962.13","Status":5,"Type":2},{"OrderID":"55714-4630","ShipCountry":"KR","ShipAddress":"2089 Dennis Parkway","ShipName":"Yundt Inc","OrderDate":"5/13/2016","TotalPayment":"$543496.58","Status":2,"Type":2},{"OrderID":"37205-750","ShipCountry":"CN","ShipAddress":"82378 Rieder Junction","ShipName":"Kihn, Legros and Ratke","OrderDate":"4/19/2017","TotalPayment":"$904593.54","Status":1,"Type":3},{"OrderID":"0115-1471","ShipCountry":"LY","ShipAddress":"7485 Fremont Hill","ShipName":"Yundt, Pagac and Zulauf","OrderDate":"2/26/2017","TotalPayment":"$837934.36","Status":3,"Type":2},{"OrderID":"34666-040","ShipCountry":"CN","ShipAddress":"7520 South Pass","ShipName":"Feeney-Hane","OrderDate":"4/19/2017","TotalPayment":"$324505.82","Status":1,"Type":3},{"OrderID":"55315-127","ShipCountry":"UA","ShipAddress":"48067 Chive Trail","ShipName":"Sporer, Heller and Ratke","OrderDate":"10/23/2016","TotalPayment":"$984428.53","Status":3,"Type":2}]},\n' +
        '{"RecordID":132,"FirstName":"Jillane","LastName":"Fitzroy","Company":"JumpXS","Email":"jfitzroy3n@walmart.com","Phone":"342-347-5469","Status":3,"Type":2,"Orders":[{"OrderID":"0268-6229","ShipCountry":"CO","ShipAddress":"8 Doe Crossing Drive","ShipName":"Rath Inc","OrderDate":"2/6/2016","TotalPayment":"$181671.12","Status":3,"Type":3},{"OrderID":"37012-845","ShipCountry":"CN","ShipAddress":"1071 Monterey Circle","ShipName":"Jaskolski-Herzog","OrderDate":"5/26/2016","TotalPayment":"$1064428.92","Status":2,"Type":1},{"OrderID":"65193-939","ShipCountry":"ID","ShipAddress":"9047 Lyons Circle","ShipName":"Jacobs-Kuvalis","OrderDate":"9/13/2016","TotalPayment":"$504739.93","Status":6,"Type":2},{"OrderID":"50563-163","ShipCountry":"VN","ShipAddress":"719 Sheridan Drive","ShipName":"Feeney-Collins","OrderDate":"2/2/2017","TotalPayment":"$208595.57","Status":4,"Type":2},{"OrderID":"0781-2811","ShipCountry":"RU","ShipAddress":"61606 Moland Parkway","ShipName":"Armstrong, Considine and Schmidt","OrderDate":"10/12/2016","TotalPayment":"$1094995.84","Status":1,"Type":2},{"OrderID":"10738-101","ShipCountry":"BJ","ShipAddress":"97 Dottie Alley","ShipName":"Kihn, Gutmann and Wilderman","OrderDate":"1/13/2017","TotalPayment":"$811764.72","Status":2,"Type":1},{"OrderID":"36987-3043","ShipCountry":"CU","ShipAddress":"3 Judy Junction","ShipName":"Konopelski Group","OrderDate":"10/9/2017","TotalPayment":"$67675.60","Status":5,"Type":2},{"OrderID":"67046-714","ShipCountry":"HN","ShipAddress":"47 Cherokee Alley","ShipName":"Fay, Waters and Heaney","OrderDate":"11/15/2017","TotalPayment":"$644986.52","Status":6,"Type":1},{"OrderID":"52204-103","ShipCountry":"RU","ShipAddress":"50300 Mendota Lane","ShipName":"Mante-Ward","OrderDate":"8/8/2016","TotalPayment":"$709194.37","Status":1,"Type":2},{"OrderID":"63304-460","ShipCountry":"ID","ShipAddress":"4 Almo Junction","ShipName":"Runolfsson and Sons","OrderDate":"11/16/2016","TotalPayment":"$109055.82","Status":3,"Type":2},{"OrderID":"47682-810","ShipCountry":"UA","ShipAddress":"06531 Fulton Lane","ShipName":"Lebsack Group","OrderDate":"7/30/2016","TotalPayment":"$430441.76","Status":6,"Type":2},{"OrderID":"60742-473","ShipCountry":"CO","ShipAddress":"299 Green Ridge Parkway","ShipName":"Satterfield Inc","OrderDate":"4/27/2016","TotalPayment":"$420939.16","Status":1,"Type":2}]},\n' +
        '{"RecordID":133,"FirstName":"Merilee","LastName":"Tuffley","Company":"Yodel","Email":"mtuffley3o@google.es","Phone":"273-436-0567","Status":1,"Type":3,"Orders":[{"OrderID":"0904-6269","ShipCountry":"ID","ShipAddress":"3 Becker Circle","ShipName":"Feil Group","OrderDate":"9/21/2017","TotalPayment":"$811102.68","Status":4,"Type":3},{"OrderID":"41163-531","ShipCountry":"UG","ShipAddress":"19 Hanson Pass","ShipName":"Ebert, DuBuque and Abbott","OrderDate":"1/4/2017","TotalPayment":"$519125.02","Status":5,"Type":2},{"OrderID":"59779-282","ShipCountry":"AR","ShipAddress":"063 Michigan Place","ShipName":"Kohler Inc","OrderDate":"9/8/2017","TotalPayment":"$645471.38","Status":6,"Type":1},{"OrderID":"46122-279","ShipCountry":"SE","ShipAddress":"890 8th Circle","ShipName":"Becker LLC","OrderDate":"2/29/2016","TotalPayment":"$277431.81","Status":1,"Type":3},{"OrderID":"0781-5181","ShipCountry":"PH","ShipAddress":"40358 Bunting Drive","ShipName":"Berge LLC","OrderDate":"1/23/2017","TotalPayment":"$285326.36","Status":4,"Type":3},{"OrderID":"62011-0021","ShipCountry":"BR","ShipAddress":"15550 Washington Terrace","ShipName":"Becker, Will and Upton","OrderDate":"7/29/2016","TotalPayment":"$1010184.32","Status":3,"Type":1},{"OrderID":"0904-6169","ShipCountry":"LB","ShipAddress":"05 Clemons Point","ShipName":"Dickens, Hansen and Will","OrderDate":"7/13/2016","TotalPayment":"$193194.68","Status":6,"Type":2},{"OrderID":"49288-0636","ShipCountry":"RU","ShipAddress":"21 Cottonwood Crossing","ShipName":"Ankunding-Orn","OrderDate":"8/2/2016","TotalPayment":"$923981.04","Status":3,"Type":3},{"OrderID":"63739-167","ShipCountry":"AM","ShipAddress":"06815 Walton Avenue","ShipName":"Zulauf Inc","OrderDate":"8/27/2017","TotalPayment":"$22336.00","Status":2,"Type":3},{"OrderID":"52544-732","ShipCountry":"CN","ShipAddress":"3079 Bunting Way","ShipName":"Kirlin, Corwin and Abernathy","OrderDate":"10/12/2016","TotalPayment":"$550560.55","Status":1,"Type":3},{"OrderID":"0409-1161","ShipCountry":"AR","ShipAddress":"62591 Union Point","ShipName":"Gutmann-Cummings","OrderDate":"4/9/2016","TotalPayment":"$469235.26","Status":1,"Type":3},{"OrderID":"76126-075","ShipCountry":"CN","ShipAddress":"6509 High Crossing Way","ShipName":"McClure, Kunde and Lockman","OrderDate":"7/7/2017","TotalPayment":"$948674.19","Status":2,"Type":1},{"OrderID":"63629-4028","ShipCountry":"CN","ShipAddress":"00285 Vera Point","ShipName":"Ruecker-Smith","OrderDate":"3/8/2016","TotalPayment":"$1102560.18","Status":3,"Type":2},{"OrderID":"44224-0006","ShipCountry":"PT","ShipAddress":"1 Fordem Lane","ShipName":"Reichel, Mraz and Stehr","OrderDate":"8/2/2016","TotalPayment":"$76152.12","Status":2,"Type":3},{"OrderID":"17156-524","ShipCountry":"RU","ShipAddress":"7888 Sutteridge Point","ShipName":"Conn, Erdman and Bergnaum","OrderDate":"2/27/2016","TotalPayment":"$228548.10","Status":5,"Type":3}]},\n' +
        '{"RecordID":134,"FirstName":"Christian","LastName":"Marusik","Company":"Yodoo","Email":"cmarusik3p@eepurl.com","Phone":"490-516-3249","Status":4,"Type":3,"Orders":[{"OrderID":"49349-649","ShipCountry":"ID","ShipAddress":"8065 Del Sol Trail","ShipName":"Paucek, Lakin and Corkery","OrderDate":"1/10/2017","TotalPayment":"$448532.31","Status":5,"Type":1},{"OrderID":"41163-075","ShipCountry":"PE","ShipAddress":"40 Riverside Junction","ShipName":"Reynolds-Klocko","OrderDate":"5/25/2017","TotalPayment":"$126444.16","Status":4,"Type":1},{"OrderID":"0603-1393","ShipCountry":"BR","ShipAddress":"50 Raven Place","ShipName":"Corkery, Hansen and Corwin","OrderDate":"8/15/2017","TotalPayment":"$317256.51","Status":1,"Type":2},{"OrderID":"51655-414","ShipCountry":"IE","ShipAddress":"0590 Mandrake Way","ShipName":"Keeling, Fadel and Toy","OrderDate":"4/20/2016","TotalPayment":"$232978.06","Status":3,"Type":1},{"OrderID":"62032-118","ShipCountry":"BR","ShipAddress":"47 Butterfield Alley","ShipName":"Stokes, Ryan and Heathcote","OrderDate":"4/13/2017","TotalPayment":"$317603.39","Status":6,"Type":3},{"OrderID":"36987-3331","ShipCountry":"AL","ShipAddress":"8076 Mccormick Lane","ShipName":"Considine LLC","OrderDate":"4/25/2017","TotalPayment":"$16526.60","Status":1,"Type":2},{"OrderID":"76282-323","ShipCountry":"RU","ShipAddress":"4231 Graedel Junction","ShipName":"Schiller, Volkman and Heller","OrderDate":"10/31/2016","TotalPayment":"$721368.52","Status":4,"Type":3},{"OrderID":"0093-7387","ShipCountry":"NG","ShipAddress":"67 Beilfuss Crossing","ShipName":"Ortiz-Brakus","OrderDate":"8/8/2017","TotalPayment":"$536264.90","Status":5,"Type":3},{"OrderID":"0603-4415","ShipCountry":"PL","ShipAddress":"3 Waywood Street","ShipName":"Durgan-Reinger","OrderDate":"2/12/2016","TotalPayment":"$109927.20","Status":5,"Type":1},{"OrderID":"10967-583","ShipCountry":"PT","ShipAddress":"1 Messerschmidt Trail","ShipName":"Bergnaum, Steuber and Windler","OrderDate":"2/16/2016","TotalPayment":"$624045.83","Status":4,"Type":2},{"OrderID":"21695-068","ShipCountry":"RU","ShipAddress":"9 Fair Oaks Pass","ShipName":"Farrell-Bahringer","OrderDate":"8/7/2017","TotalPayment":"$210940.68","Status":3,"Type":3},{"OrderID":"0615-6593","ShipCountry":"CN","ShipAddress":"35408 Almo Pass","ShipName":"Effertz-Green","OrderDate":"9/17/2017","TotalPayment":"$466778.99","Status":4,"Type":1},{"OrderID":"41167-0262","ShipCountry":"CN","ShipAddress":"32 Magdeline Place","ShipName":"Harvey-Okuneva","OrderDate":"8/1/2017","TotalPayment":"$363289.55","Status":5,"Type":2}]},\n' +
        '{"RecordID":135,"FirstName":"Ingamar","LastName":"Wasielewicz","Company":"Avavee","Email":"iwasielewicz3q@tumblr.com","Phone":"772-516-4409","Status":2,"Type":1,"Orders":[{"OrderID":"57237-014","ShipCountry":"BY","ShipAddress":"58 Sutteridge Park","ShipName":"Marvin-Denesik","OrderDate":"12/9/2017","TotalPayment":"$641539.92","Status":5,"Type":2},{"OrderID":"57520-0444","ShipCountry":"PT","ShipAddress":"00622 Northport Avenue","ShipName":"Stamm, Hegmann and Wisozk","OrderDate":"4/28/2016","TotalPayment":"$627212.14","Status":4,"Type":1},{"OrderID":"10216-3110","ShipCountry":"PY","ShipAddress":"26 Alpine Avenue","ShipName":"Shanahan Group","OrderDate":"1/10/2016","TotalPayment":"$324622.08","Status":4,"Type":2},{"OrderID":"63629-5436","ShipCountry":"CN","ShipAddress":"899 Carey Center","ShipName":"Cartwright-Krajcik","OrderDate":"6/17/2017","TotalPayment":"$796994.35","Status":1,"Type":2},{"OrderID":"24338-300","ShipCountry":"CN","ShipAddress":"12 Nobel Court","ShipName":"Stehr Inc","OrderDate":"6/13/2016","TotalPayment":"$888659.58","Status":5,"Type":2},{"OrderID":"55346-2904","ShipCountry":"PH","ShipAddress":"0613 North Trail","ShipName":"Hayes-Buckridge","OrderDate":"5/6/2016","TotalPayment":"$326212.83","Status":3,"Type":2},{"OrderID":"24236-720","ShipCountry":"RU","ShipAddress":"4090 Grayhawk Point","ShipName":"Reinger, Ryan and Ward","OrderDate":"5/27/2016","TotalPayment":"$1187606.57","Status":5,"Type":1},{"OrderID":"64764-250","ShipCountry":"AD","ShipAddress":"0 Gale Circle","ShipName":"Heller and Sons","OrderDate":"9/9/2016","TotalPayment":"$1007067.09","Status":6,"Type":3},{"OrderID":"59999-001","ShipCountry":"ID","ShipAddress":"47 Little Fleur Point","ShipName":"Hoeger and Sons","OrderDate":"6/14/2016","TotalPayment":"$868586.30","Status":4,"Type":3},{"OrderID":"24236-624","ShipCountry":"CN","ShipAddress":"88 Monument Trail","ShipName":"Hand Group","OrderDate":"6/19/2017","TotalPayment":"$1051410.65","Status":6,"Type":1},{"OrderID":"0603-1588","ShipCountry":"CN","ShipAddress":"51356 Tennessee Crossing","ShipName":"Stamm, Hoeger and Windler","OrderDate":"2/22/2016","TotalPayment":"$747676.96","Status":3,"Type":1},{"OrderID":"49288-0354","ShipCountry":"GN","ShipAddress":"7 Colorado Point","ShipName":"Kovacek, Haley and Upton","OrderDate":"3/21/2016","TotalPayment":"$71506.07","Status":5,"Type":2},{"OrderID":"66689-695","ShipCountry":"US","ShipAddress":"813 Harbort Center","ShipName":"Greenholt and Sons","OrderDate":"6/8/2017","TotalPayment":"$329422.98","Status":6,"Type":1},{"OrderID":"0591-3562","ShipCountry":"MY","ShipAddress":"74408 Jackson Place","ShipName":"Morissette-Jacobson","OrderDate":"10/6/2016","TotalPayment":"$210451.46","Status":6,"Type":1},{"OrderID":"36987-3172","ShipCountry":"CA","ShipAddress":"1698 Prairie Rose Crossing","ShipName":"Collins-Simonis","OrderDate":"11/4/2017","TotalPayment":"$940831.47","Status":3,"Type":1},{"OrderID":"54868-6026","ShipCountry":"CN","ShipAddress":"67695 Basil Park","ShipName":"Schaden-Tremblay","OrderDate":"9/13/2016","TotalPayment":"$87230.58","Status":5,"Type":2},{"OrderID":"58118-9839","ShipCountry":"CN","ShipAddress":"427 Holmberg Road","ShipName":"Pollich-Bayer","OrderDate":"12/11/2017","TotalPayment":"$781613.93","Status":1,"Type":2},{"OrderID":"0078-0327","ShipCountry":"RU","ShipAddress":"35044 Annamark Circle","ShipName":"Parisian-Reynolds","OrderDate":"8/20/2017","TotalPayment":"$919974.45","Status":3,"Type":3},{"OrderID":"50114-0110","ShipCountry":"CN","ShipAddress":"6354 Victoria Avenue","ShipName":"Mayert-Prosacco","OrderDate":"2/28/2017","TotalPayment":"$164166.22","Status":6,"Type":1}]},\n' +
        '{"RecordID":136,"FirstName":"Christal","LastName":"Rickards","Company":"Zoombeat","Email":"crickards3r@4shared.com","Phone":"847-718-6074","Status":1,"Type":2,"Orders":[{"OrderID":"10685-978","ShipCountry":"IE","ShipAddress":"15712 Sherman Drive","ShipName":"Marvin, Cummings and Johns","OrderDate":"3/7/2017","TotalPayment":"$46093.90","Status":4,"Type":2},{"OrderID":"49967-382","ShipCountry":"CA","ShipAddress":"44478 Sutteridge Street","ShipName":"Borer-Pfannerstill","OrderDate":"11/17/2016","TotalPayment":"$769112.18","Status":3,"Type":3},{"OrderID":"11822-0294","ShipCountry":"MN","ShipAddress":"47372 Sugar Alley","ShipName":"Wiza, Harvey and Mayer","OrderDate":"11/2/2017","TotalPayment":"$342294.16","Status":1,"Type":2},{"OrderID":"51393-7333","ShipCountry":"US","ShipAddress":"1520 Badeau Terrace","ShipName":"Jacobs-Pacocha","OrderDate":"11/28/2016","TotalPayment":"$51745.64","Status":2,"Type":3},{"OrderID":"36800-285","ShipCountry":"ET","ShipAddress":"9 Gale Street","ShipName":"Klocko-Jones","OrderDate":"2/24/2016","TotalPayment":"$201669.47","Status":4,"Type":3},{"OrderID":"10742-1442","ShipCountry":"PL","ShipAddress":"7 Gulseth Lane","ShipName":"Hamill, Waelchi and Collins","OrderDate":"11/14/2017","TotalPayment":"$553010.85","Status":3,"Type":1}]},\n' +
        '{"RecordID":137,"FirstName":"Kelsy","LastName":"Canizares","Company":"Gabtune","Email":"kcanizares3s@imageshack.us","Phone":"450-531-8258","Status":3,"Type":3,"Orders":[{"OrderID":"16590-266","ShipCountry":"PS","ShipAddress":"86904 Onsgard Park","ShipName":"Waters Group","OrderDate":"11/15/2016","TotalPayment":"$1008824.91","Status":3,"Type":2},{"OrderID":"61098-020","ShipCountry":"PH","ShipAddress":"6 Utah Way","ShipName":"Yundt-Wolff","OrderDate":"6/6/2016","TotalPayment":"$994412.19","Status":4,"Type":2},{"OrderID":"36987-1123","ShipCountry":"SE","ShipAddress":"694 Arapahoe Court","ShipName":"Zieme Group","OrderDate":"11/7/2016","TotalPayment":"$496282.92","Status":1,"Type":1},{"OrderID":"60681-2402","ShipCountry":"UA","ShipAddress":"30 Southridge Lane","ShipName":"Hand LLC","OrderDate":"10/31/2016","TotalPayment":"$405135.54","Status":4,"Type":3},{"OrderID":"23155-488","ShipCountry":"CU","ShipAddress":"29459 Boyd Court","ShipName":"Jacobs, Cormier and Ferry","OrderDate":"7/13/2016","TotalPayment":"$530294.16","Status":1,"Type":1},{"OrderID":"49999-799","ShipCountry":"SY","ShipAddress":"389 Maple Parkway","ShipName":"Lakin-Grady","OrderDate":"2/26/2016","TotalPayment":"$59257.60","Status":6,"Type":1},{"OrderID":"0093-3107","ShipCountry":"UA","ShipAddress":"447 Cottonwood Terrace","ShipName":"Veum LLC","OrderDate":"10/4/2017","TotalPayment":"$439619.39","Status":4,"Type":1},{"OrderID":"52438-011","ShipCountry":"VE","ShipAddress":"8239 Esch Avenue","ShipName":"Wyman, Dickinson and Cole","OrderDate":"8/9/2017","TotalPayment":"$143122.28","Status":5,"Type":3},{"OrderID":"11673-117","ShipCountry":"CN","ShipAddress":"80 Leroy Trail","ShipName":"Purdy and Sons","OrderDate":"5/26/2017","TotalPayment":"$1012372.68","Status":4,"Type":3},{"OrderID":"11523-7272","ShipCountry":"NL","ShipAddress":"97 Bultman Court","ShipName":"Kirlin, Towne and Feeney","OrderDate":"6/18/2016","TotalPayment":"$1187484.78","Status":6,"Type":1},{"OrderID":"49349-424","ShipCountry":"BO","ShipAddress":"1889 Towne Plaza","ShipName":"Skiles, Hoeger and Gleason","OrderDate":"2/20/2017","TotalPayment":"$611817.79","Status":5,"Type":2},{"OrderID":"54868-5994","ShipCountry":"CN","ShipAddress":"72203 Lakewood Place","ShipName":"Hegmann-Cormier","OrderDate":"10/12/2017","TotalPayment":"$922965.28","Status":2,"Type":2},{"OrderID":"13537-107","ShipCountry":"BR","ShipAddress":"0 Paget Center","ShipName":"Rowe and Sons","OrderDate":"5/5/2017","TotalPayment":"$482562.15","Status":2,"Type":1},{"OrderID":"51389-250","ShipCountry":"PH","ShipAddress":"70 Packers Alley","ShipName":"Becker-Robel","OrderDate":"7/13/2017","TotalPayment":"$568392.75","Status":6,"Type":2},{"OrderID":"0115-2122","ShipCountry":"ID","ShipAddress":"51489 Stephen Way","ShipName":"Yundt Inc","OrderDate":"1/17/2017","TotalPayment":"$511300.91","Status":2,"Type":1},{"OrderID":"11822-0669","ShipCountry":"ID","ShipAddress":"20601 Mallory Parkway","ShipName":"Gislason-Bahringer","OrderDate":"11/1/2016","TotalPayment":"$357147.69","Status":6,"Type":2},{"OrderID":"0268-1364","ShipCountry":"CN","ShipAddress":"3 Canary Alley","ShipName":"Jones Inc","OrderDate":"4/18/2017","TotalPayment":"$1116751.57","Status":4,"Type":2},{"OrderID":"54569-4953","ShipCountry":"ID","ShipAddress":"3063 High Crossing Court","ShipName":"Corwin LLC","OrderDate":"4/3/2016","TotalPayment":"$55057.95","Status":4,"Type":1},{"OrderID":"47335-902","ShipCountry":"CN","ShipAddress":"2530 Sutherland Road","ShipName":"Lakin Group","OrderDate":"1/20/2017","TotalPayment":"$1030245.77","Status":5,"Type":2}]},\n' +
        '{"RecordID":138,"FirstName":"Laryssa","LastName":"Halton","Company":"Meembee","Email":"lhalton3t@cargocollective.com","Phone":"665-659-2350","Status":1,"Type":2,"Orders":[{"OrderID":"67046-590","ShipCountry":"US","ShipAddress":"8753 Maple Wood Center","ShipName":"Ratke, Wilkinson and Jones","OrderDate":"9/21/2016","TotalPayment":"$296936.55","Status":3,"Type":1},{"OrderID":"0074-3072","ShipCountry":"CZ","ShipAddress":"20 Forest Run Alley","ShipName":"Kub-Bode","OrderDate":"2/4/2016","TotalPayment":"$254676.02","Status":5,"Type":1},{"OrderID":"50845-0109","ShipCountry":"CN","ShipAddress":"4232 Mendota Parkway","ShipName":"Rohan Inc","OrderDate":"1/10/2017","TotalPayment":"$906459.39","Status":3,"Type":3},{"OrderID":"49738-617","ShipCountry":"JP","ShipAddress":"5747 Banding Avenue","ShipName":"Keeling Inc","OrderDate":"1/7/2017","TotalPayment":"$1030599.21","Status":5,"Type":3},{"OrderID":"49035-892","ShipCountry":"DO","ShipAddress":"9147 Luster Alley","ShipName":"Schowalter and Sons","OrderDate":"8/12/2017","TotalPayment":"$837067.86","Status":2,"Type":2},{"OrderID":"66831-123","ShipCountry":"PT","ShipAddress":"7780 Debra Pass","ShipName":"MacGyver, Von and Lesch","OrderDate":"7/16/2017","TotalPayment":"$316955.95","Status":2,"Type":3},{"OrderID":"0228-3660","ShipCountry":"ID","ShipAddress":"71 Bonner Court","ShipName":"Bartell LLC","OrderDate":"7/21/2017","TotalPayment":"$823976.57","Status":5,"Type":1},{"OrderID":"0187-3013","ShipCountry":"PL","ShipAddress":"19397 Pine View Drive","ShipName":"Greenholt LLC","OrderDate":"10/5/2017","TotalPayment":"$130780.38","Status":4,"Type":2},{"OrderID":"51004-1051","ShipCountry":"BR","ShipAddress":"4 Manley Avenue","ShipName":"Thompson Group","OrderDate":"1/8/2016","TotalPayment":"$549291.30","Status":1,"Type":1},{"OrderID":"54868-2131","ShipCountry":"IR","ShipAddress":"4 Waywood Avenue","ShipName":"Homenick, Kirlin and Hammes","OrderDate":"8/27/2016","TotalPayment":"$547537.49","Status":4,"Type":2},{"OrderID":"0009-0352","ShipCountry":"FR","ShipAddress":"893 Vahlen Junction","ShipName":"Von Group","OrderDate":"12/26/2017","TotalPayment":"$856418.25","Status":6,"Type":2},{"OrderID":"55301-519","ShipCountry":"MX","ShipAddress":"37 Colorado Terrace","ShipName":"Cole, Veum and Jast","OrderDate":"9/18/2017","TotalPayment":"$298258.82","Status":5,"Type":3},{"OrderID":"58668-2031","ShipCountry":"CN","ShipAddress":"20469 Warrior Circle","ShipName":"Kirlin and Sons","OrderDate":"5/9/2016","TotalPayment":"$35575.54","Status":6,"Type":2},{"OrderID":"42884-456","ShipCountry":"ER","ShipAddress":"048 Cardinal Pass","ShipName":"Lueilwitz, Bednar and Hansen","OrderDate":"9/9/2016","TotalPayment":"$357423.48","Status":2,"Type":2},{"OrderID":"0093-1172","ShipCountry":"ID","ShipAddress":"9072 Crest Line Way","ShipName":"O\'Conner, Medhurst and Dooley","OrderDate":"5/24/2017","TotalPayment":"$517201.77","Status":4,"Type":1}]},\n' +
        '{"RecordID":139,"FirstName":"Colin","LastName":"Baskeyfied","Company":"Cogibox","Email":"cbaskeyfied3u@networksolutions.com","Phone":"101-733-9331","Status":4,"Type":3,"Orders":[{"OrderID":"55289-039","ShipCountry":"US","ShipAddress":"0306 Goodland Terrace","ShipName":"Kreiger, Kub and Leffler","OrderDate":"9/18/2016","TotalPayment":"$948384.76","Status":2,"Type":2},{"OrderID":"68001-201","ShipCountry":"BR","ShipAddress":"771 Eastlawn Circle","ShipName":"Botsford Inc","OrderDate":"3/5/2017","TotalPayment":"$248230.37","Status":4,"Type":2},{"OrderID":"67475-212","ShipCountry":"ID","ShipAddress":"5926 Thackeray Drive","ShipName":"Brekke, Johnson and Fahey","OrderDate":"8/27/2017","TotalPayment":"$556444.55","Status":4,"Type":2},{"OrderID":"60429-712","ShipCountry":"AR","ShipAddress":"0963 Haas Street","ShipName":"Turner, Zulauf and Stark","OrderDate":"2/12/2016","TotalPayment":"$1134604.38","Status":6,"Type":3},{"OrderID":"55154-3430","ShipCountry":"PT","ShipAddress":"9 Anniversary Road","ShipName":"Zboncak Inc","OrderDate":"3/9/2016","TotalPayment":"$627592.77","Status":5,"Type":1},{"OrderID":"0268-6600","ShipCountry":"BY","ShipAddress":"3358 Calypso Way","ShipName":"Kub Inc","OrderDate":"2/2/2017","TotalPayment":"$603607.60","Status":3,"Type":2},{"OrderID":"58411-218","ShipCountry":"BG","ShipAddress":"204 4th Lane","ShipName":"Lowe, Green and Luettgen","OrderDate":"6/6/2016","TotalPayment":"$1009082.65","Status":4,"Type":2},{"OrderID":"47593-263","ShipCountry":"AR","ShipAddress":"69125 Hooker Court","ShipName":"Turcotte Inc","OrderDate":"1/5/2016","TotalPayment":"$569830.11","Status":4,"Type":1},{"OrderID":"68788-9813","ShipCountry":"PS","ShipAddress":"9303 Hayes Trail","ShipName":"Hane Inc","OrderDate":"8/22/2017","TotalPayment":"$309763.18","Status":6,"Type":2},{"OrderID":"43063-371","ShipCountry":"CN","ShipAddress":"3193 Farmco Center","ShipName":"Legros, Boyer and Bernier","OrderDate":"9/1/2017","TotalPayment":"$655882.80","Status":6,"Type":2},{"OrderID":"11822-0637","ShipCountry":"WS","ShipAddress":"67 Londonderry Park","ShipName":"Hodkiewicz, Rohan and Dare","OrderDate":"1/3/2016","TotalPayment":"$857467.09","Status":2,"Type":3},{"OrderID":"54569-2285","ShipCountry":"HR","ShipAddress":"7 La Follette Hill","ShipName":"McDermott Group","OrderDate":"4/22/2016","TotalPayment":"$192691.70","Status":5,"Type":1},{"OrderID":"66215-201","ShipCountry":"SE","ShipAddress":"3 Bartelt Center","ShipName":"Gerlach, Connelly and Ziemann","OrderDate":"9/2/2017","TotalPayment":"$216100.59","Status":6,"Type":1},{"OrderID":"17478-503","ShipCountry":"BR","ShipAddress":"8 North Park","ShipName":"Fahey Inc","OrderDate":"8/13/2017","TotalPayment":"$789226.92","Status":5,"Type":2},{"OrderID":"59726-190","ShipCountry":"PS","ShipAddress":"0 Crownhardt Hill","ShipName":"Koepp, Pagac and Feest","OrderDate":"5/11/2017","TotalPayment":"$1109540.46","Status":2,"Type":3},{"OrderID":"55714-1714","ShipCountry":"CN","ShipAddress":"1937 Memorial Crossing","ShipName":"Dooley-Rogahn","OrderDate":"3/9/2017","TotalPayment":"$100525.03","Status":6,"Type":3},{"OrderID":"64679-736","ShipCountry":"ID","ShipAddress":"95853 Morrow Terrace","ShipName":"Kulas and Sons","OrderDate":"2/20/2016","TotalPayment":"$739704.42","Status":5,"Type":1}]},\n' +
        '{"RecordID":140,"FirstName":"Fleurette","LastName":"Grace","Company":"Aivee","Email":"fgrace3v@cocolog-nifty.com","Phone":"144-467-8577","Status":4,"Type":1,"Orders":[{"OrderID":"17478-065","ShipCountry":"NG","ShipAddress":"232 Dayton Plaza","ShipName":"Lakin LLC","OrderDate":"2/12/2017","TotalPayment":"$864352.29","Status":4,"Type":2},{"OrderID":"11410-413","ShipCountry":"EE","ShipAddress":"27277 Straubel Alley","ShipName":"Mante, Wuckert and Christiansen","OrderDate":"12/23/2017","TotalPayment":"$714690.46","Status":1,"Type":2},{"OrderID":"52125-639","ShipCountry":"AU","ShipAddress":"56521 Bowman Junction","ShipName":"Treutel-Gerlach","OrderDate":"2/29/2016","TotalPayment":"$722608.39","Status":4,"Type":3},{"OrderID":"52686-318","ShipCountry":"ME","ShipAddress":"328 Butterfield Crossing","ShipName":"Stroman Group","OrderDate":"12/14/2016","TotalPayment":"$1133164.25","Status":2,"Type":1},{"OrderID":"65649-511","ShipCountry":"ID","ShipAddress":"69120 Melody Point","ShipName":"Block LLC","OrderDate":"9/2/2017","TotalPayment":"$1026687.82","Status":2,"Type":2},{"OrderID":"55312-118","ShipCountry":"KW","ShipAddress":"38 Marquette Plaza","ShipName":"Grady, Cole and Mante","OrderDate":"10/31/2017","TotalPayment":"$58433.51","Status":1,"Type":3},{"OrderID":"53499-5273","ShipCountry":"CN","ShipAddress":"4 Oriole Center","ShipName":"Willms LLC","OrderDate":"6/3/2016","TotalPayment":"$735688.46","Status":6,"Type":2},{"OrderID":"37808-535","ShipCountry":"ID","ShipAddress":"75400 Village Court","ShipName":"Tremblay-Lynch","OrderDate":"4/18/2017","TotalPayment":"$349145.31","Status":5,"Type":3},{"OrderID":"30142-218","ShipCountry":"PY","ShipAddress":"4592 Birchwood Circle","ShipName":"Kling and Sons","OrderDate":"3/30/2017","TotalPayment":"$709648.61","Status":2,"Type":3},{"OrderID":"17312-027","ShipCountry":"BG","ShipAddress":"4 Merchant Hill","ShipName":"Rice-Bogan","OrderDate":"11/11/2016","TotalPayment":"$309365.13","Status":6,"Type":1},{"OrderID":"50438-401","ShipCountry":"ID","ShipAddress":"8238 Holmberg Pass","ShipName":"Hermiston-Koch","OrderDate":"8/5/2017","TotalPayment":"$1157604.27","Status":6,"Type":1},{"OrderID":"66467-9730","ShipCountry":"MX","ShipAddress":"7 Summer Ridge Center","ShipName":"Yundt, Feest and Beahan","OrderDate":"9/22/2017","TotalPayment":"$43470.47","Status":1,"Type":2},{"OrderID":"50580-679","ShipCountry":"CO","ShipAddress":"310 Del Mar Crossing","ShipName":"Ratke-Simonis","OrderDate":"9/29/2017","TotalPayment":"$568090.05","Status":6,"Type":2},{"OrderID":"0904-5892","ShipCountry":"ID","ShipAddress":"6 Cherokee Hill","ShipName":"Weimann-Johnston","OrderDate":"11/6/2017","TotalPayment":"$918100.41","Status":2,"Type":3},{"OrderID":"36800-759","ShipCountry":"AR","ShipAddress":"770 Elmside Terrace","ShipName":"Hansen and Sons","OrderDate":"1/4/2017","TotalPayment":"$252676.33","Status":6,"Type":3},{"OrderID":"49643-422","ShipCountry":"CN","ShipAddress":"12 Memorial Lane","ShipName":"Quitzon LLC","OrderDate":"1/2/2016","TotalPayment":"$502075.62","Status":5,"Type":3},{"OrderID":"0363-0522","ShipCountry":"RU","ShipAddress":"926 Knutson Avenue","ShipName":"Lang Group","OrderDate":"6/14/2017","TotalPayment":"$1006706.35","Status":2,"Type":3},{"OrderID":"60429-317","ShipCountry":"RU","ShipAddress":"7 Alpine Plaza","ShipName":"Beer, Sawayn and Stokes","OrderDate":"9/29/2017","TotalPayment":"$1128380.05","Status":3,"Type":2}]},\n' +
        '{"RecordID":141,"FirstName":"Penny","LastName":"Lavall","Company":"Zooveo","Email":"plavall3w@mashable.com","Phone":"600-365-1174","Status":4,"Type":3,"Orders":[{"OrderID":"54312-270","ShipCountry":"CA","ShipAddress":"5 Hollow Ridge Court","ShipName":"Hartmann, Windler and Robel","OrderDate":"10/6/2017","TotalPayment":"$896041.86","Status":4,"Type":3},{"OrderID":"62756-755","ShipCountry":"ID","ShipAddress":"077 Old Shore Trail","ShipName":"Wilkinson Group","OrderDate":"11/22/2016","TotalPayment":"$596272.72","Status":5,"Type":2},{"OrderID":"57896-778","ShipCountry":"PS","ShipAddress":"2 Iowa Lane","ShipName":"Effertz-Mayert","OrderDate":"2/27/2017","TotalPayment":"$768611.97","Status":6,"Type":2},{"OrderID":"52125-039","ShipCountry":"CN","ShipAddress":"152 Fallview Road","ShipName":"Brakus-Hegmann","OrderDate":"12/21/2017","TotalPayment":"$315038.77","Status":2,"Type":2},{"OrderID":"52959-053","ShipCountry":"AF","ShipAddress":"1 Havey Court","ShipName":"Gusikowski, Lockman and Yundt","OrderDate":"7/20/2016","TotalPayment":"$437230.43","Status":3,"Type":2},{"OrderID":"30142-809","ShipCountry":"PH","ShipAddress":"58112 Birchwood Crossing","ShipName":"Cartwright, Borer and Rosenbaum","OrderDate":"10/11/2016","TotalPayment":"$11837.93","Status":2,"Type":2},{"OrderID":"53808-0752","ShipCountry":"CN","ShipAddress":"1696 La Follette Crossing","ShipName":"Deckow and Sons","OrderDate":"6/12/2017","TotalPayment":"$809096.90","Status":6,"Type":1},{"OrderID":"43596-0003","ShipCountry":"ID","ShipAddress":"9794 Michigan Parkway","ShipName":"Wilderman, Goodwin and McDermott","OrderDate":"7/6/2016","TotalPayment":"$1194094.50","Status":2,"Type":1},{"OrderID":"50845-0205","ShipCountry":"RU","ShipAddress":"6520 Darwin Crossing","ShipName":"Wuckert Inc","OrderDate":"4/16/2016","TotalPayment":"$582057.62","Status":4,"Type":1},{"OrderID":"57955-5113","ShipCountry":"MG","ShipAddress":"017 Clyde Gallagher Lane","ShipName":"Johnson-Toy","OrderDate":"11/10/2016","TotalPayment":"$973659.90","Status":1,"Type":1},{"OrderID":"43742-0179","ShipCountry":"BR","ShipAddress":"4339 Kim Lane","ShipName":"Gleason-DuBuque","OrderDate":"5/30/2017","TotalPayment":"$731161.46","Status":6,"Type":1},{"OrderID":"24385-541","ShipCountry":"GR","ShipAddress":"907 Fair Oaks Pass","ShipName":"Lebsack-Lang","OrderDate":"12/12/2016","TotalPayment":"$223133.96","Status":2,"Type":2},{"OrderID":"52380-1614","ShipCountry":"AR","ShipAddress":"79 Hauk Road","ShipName":"Schultz Inc","OrderDate":"11/14/2017","TotalPayment":"$624932.69","Status":4,"Type":3},{"OrderID":"61727-052","ShipCountry":"AL","ShipAddress":"56270 Daystar Park","ShipName":"Tillman, O\'Reilly and Fadel","OrderDate":"7/14/2017","TotalPayment":"$476990.01","Status":6,"Type":1},{"OrderID":"64380-742","ShipCountry":"CN","ShipAddress":"02487 Commercial Trail","ShipName":"Hagenes and Sons","OrderDate":"2/27/2016","TotalPayment":"$257578.17","Status":3,"Type":3}]},\n' +
        '{"RecordID":142,"FirstName":"Courtnay","LastName":"Hessentaler","Company":"Quamba","Email":"chessentaler3x@mapquest.com","Phone":"624-491-5114","Status":2,"Type":2,"Orders":[{"OrderID":"0268-6619","ShipCountry":"GR","ShipAddress":"06 Independence Crossing","ShipName":"Steuber Inc","OrderDate":"11/12/2017","TotalPayment":"$1060720.22","Status":2,"Type":1},{"OrderID":"63739-167","ShipCountry":"US","ShipAddress":"3 Leroy Alley","ShipName":"Zemlak-Bailey","OrderDate":"8/11/2016","TotalPayment":"$707378.37","Status":3,"Type":1},{"OrderID":"49999-153","ShipCountry":"IR","ShipAddress":"01695 Magdeline Plaza","ShipName":"Brekke-Effertz","OrderDate":"12/19/2016","TotalPayment":"$49966.14","Status":5,"Type":2},{"OrderID":"66382-223","ShipCountry":"PG","ShipAddress":"95 Cardinal Trail","ShipName":"Cruickshank-Turcotte","OrderDate":"10/10/2016","TotalPayment":"$1031029.55","Status":5,"Type":2},{"OrderID":"63783-501","ShipCountry":"GR","ShipAddress":"764 Buhler Plaza","ShipName":"Wiza-Paucek","OrderDate":"4/8/2017","TotalPayment":"$167282.52","Status":6,"Type":3},{"OrderID":"68169-4059","ShipCountry":"RS","ShipAddress":"808 Hooker Circle","ShipName":"Larkin, Tromp and Roob","OrderDate":"5/31/2016","TotalPayment":"$190729.63","Status":1,"Type":3},{"OrderID":"64159-6348","ShipCountry":"SE","ShipAddress":"337 Mcbride Plaza","ShipName":"Mraz-Lind","OrderDate":"1/5/2016","TotalPayment":"$973742.20","Status":6,"Type":2},{"OrderID":"49349-950","ShipCountry":"TJ","ShipAddress":"66547 Mcbride Point","ShipName":"Ledner-Rau","OrderDate":"4/18/2017","TotalPayment":"$866600.57","Status":3,"Type":2},{"OrderID":"53499-6371","ShipCountry":"ID","ShipAddress":"633 Burrows Avenue","ShipName":"Rohan, Sporer and Effertz","OrderDate":"10/13/2016","TotalPayment":"$1158579.58","Status":4,"Type":2}]},\n' +
        '{"RecordID":143,"FirstName":"Joli","LastName":"Parmiter","Company":"Jazzy","Email":"jparmiter3y@lulu.com","Phone":"460-647-3671","Status":1,"Type":3,"Orders":[{"OrderID":"35000-800","ShipCountry":"JP","ShipAddress":"04 Hauk Place","ShipName":"Hane, Stanton and Ebert","OrderDate":"12/1/2017","TotalPayment":"$175221.31","Status":4,"Type":1},{"OrderID":"0944-4351","ShipCountry":"PL","ShipAddress":"67 Golf View Street","ShipName":"Stiedemann, Stanton and Turcotte","OrderDate":"5/2/2017","TotalPayment":"$353955.35","Status":6,"Type":3},{"OrderID":"33342-015","ShipCountry":"ID","ShipAddress":"10 Vermont Terrace","ShipName":"Hyatt, Franecki and Funk","OrderDate":"5/9/2016","TotalPayment":"$588748.09","Status":5,"Type":2},{"OrderID":"0363-1007","ShipCountry":"KP","ShipAddress":"378 Ryan Parkway","ShipName":"Schmidt-Gleichner","OrderDate":"10/19/2017","TotalPayment":"$987273.57","Status":3,"Type":1},{"OrderID":"63941-242","ShipCountry":"RU","ShipAddress":"4 Pond Way","ShipName":"McGlynn-Grady","OrderDate":"3/4/2017","TotalPayment":"$998099.96","Status":1,"Type":1},{"OrderID":"37000-771","ShipCountry":"BR","ShipAddress":"77 Packers Plaza","ShipName":"Ward, Casper and Schultz","OrderDate":"11/22/2016","TotalPayment":"$293558.79","Status":2,"Type":2},{"OrderID":"58411-161","ShipCountry":"MX","ShipAddress":"249 Schurz Center","ShipName":"Johns, Bode and Daniel","OrderDate":"5/22/2016","TotalPayment":"$366170.52","Status":3,"Type":1},{"OrderID":"54575-375","ShipCountry":"UG","ShipAddress":"12 Stone Corner Parkway","ShipName":"Tromp, Kshlerin and Block","OrderDate":"9/21/2017","TotalPayment":"$479315.69","Status":3,"Type":3},{"OrderID":"58737-104","ShipCountry":"NI","ShipAddress":"268 Redwing Circle","ShipName":"Keeling-O\'Kon","OrderDate":"3/18/2016","TotalPayment":"$72789.87","Status":3,"Type":3},{"OrderID":"0185-0932","ShipCountry":"CN","ShipAddress":"6660 Briar Crest Alley","ShipName":"Hagenes, Robel and Lockman","OrderDate":"10/1/2016","TotalPayment":"$902970.82","Status":4,"Type":3},{"OrderID":"49967-129","ShipCountry":"ID","ShipAddress":"80 Hayes Junction","ShipName":"Gaylord, Hegmann and Williamson","OrderDate":"4/6/2017","TotalPayment":"$302943.45","Status":1,"Type":3},{"OrderID":"25021-157","ShipCountry":"TJ","ShipAddress":"4518 American Ash Hill","ShipName":"Smitham and Sons","OrderDate":"8/27/2016","TotalPayment":"$541972.32","Status":4,"Type":3},{"OrderID":"30142-802","ShipCountry":"ID","ShipAddress":"204 Sachs Avenue","ShipName":"Buckridge Group","OrderDate":"11/1/2016","TotalPayment":"$99766.59","Status":5,"Type":2},{"OrderID":"43772-0017","ShipCountry":"PT","ShipAddress":"1087 Sachs Plaza","ShipName":"Greenfelder, Goyette and Bahringer","OrderDate":"9/7/2016","TotalPayment":"$131232.69","Status":4,"Type":3},{"OrderID":"52007-240","ShipCountry":"CN","ShipAddress":"33535 Fieldstone Park","ShipName":"Feil, McKenzie and Brown","OrderDate":"5/27/2017","TotalPayment":"$754601.38","Status":5,"Type":1}]},\n' +
        '{"RecordID":144,"FirstName":"Welch","LastName":"Yanshonok","Company":"Yodo","Email":"wyanshonok3z@statcounter.com","Phone":"881-662-7128","Status":6,"Type":3,"Orders":[{"OrderID":"60681-3601","ShipCountry":"ID","ShipAddress":"96 Springview Park","ShipName":"Dach, Auer and O\'Reilly","OrderDate":"7/28/2017","TotalPayment":"$1161032.64","Status":3,"Type":1},{"OrderID":"10742-8214","ShipCountry":"CN","ShipAddress":"2415 Buhler Plaza","ShipName":"Balistreri-Heller","OrderDate":"10/24/2017","TotalPayment":"$681518.48","Status":6,"Type":3},{"OrderID":"65923-132","ShipCountry":"PE","ShipAddress":"58609 Mcguire Terrace","ShipName":"Farrell-Nitzsche","OrderDate":"4/22/2016","TotalPayment":"$329777.49","Status":4,"Type":3},{"OrderID":"54235-204","ShipCountry":"CN","ShipAddress":"94 Darwin Road","ShipName":"Streich-Satterfield","OrderDate":"3/17/2017","TotalPayment":"$514140.05","Status":5,"Type":2},{"OrderID":"52125-384","ShipCountry":"CO","ShipAddress":"01 Jackson Road","ShipName":"Ratke-Baumbach","OrderDate":"11/25/2016","TotalPayment":"$1182063.39","Status":2,"Type":1},{"OrderID":"67475-112","ShipCountry":"CN","ShipAddress":"81 Swallow Court","ShipName":"Graham, Sanford and Parisian","OrderDate":"6/19/2016","TotalPayment":"$180518.39","Status":1,"Type":2},{"OrderID":"59039-002","ShipCountry":"NG","ShipAddress":"5 Toban Alley","ShipName":"Beahan, Pagac and Howell","OrderDate":"12/3/2017","TotalPayment":"$534602.89","Status":6,"Type":2},{"OrderID":"55316-407","ShipCountry":"FR","ShipAddress":"55752 Logan Way","ShipName":"Mohr and Sons","OrderDate":"8/15/2016","TotalPayment":"$480925.78","Status":2,"Type":2},{"OrderID":"55379-407","ShipCountry":"MU","ShipAddress":"98 Grayhawk Road","ShipName":"Koch Group","OrderDate":"11/12/2017","TotalPayment":"$474472.31","Status":5,"Type":2},{"OrderID":"41163-496","ShipCountry":"CN","ShipAddress":"04 Service Trail","ShipName":"Hammes, Bosco and Friesen","OrderDate":"5/16/2017","TotalPayment":"$344836.63","Status":5,"Type":2},{"OrderID":"59735-306","ShipCountry":"TH","ShipAddress":"6 Carpenter Crossing","ShipName":"Glover Inc","OrderDate":"1/30/2016","TotalPayment":"$885762.58","Status":5,"Type":3},{"OrderID":"68258-6031","ShipCountry":"BR","ShipAddress":"521 Lotheville Street","ShipName":"Marvin, Denesik and Boyer","OrderDate":"8/22/2017","TotalPayment":"$796089.54","Status":4,"Type":3},{"OrderID":"55154-8270","ShipCountry":"LU","ShipAddress":"92 Ridgeview Circle","ShipName":"Berge Group","OrderDate":"4/15/2016","TotalPayment":"$553779.79","Status":1,"Type":1},{"OrderID":"43526-113","ShipCountry":"HN","ShipAddress":"929 Monterey Drive","ShipName":"Stehr and Sons","OrderDate":"7/27/2017","TotalPayment":"$583186.25","Status":4,"Type":1},{"OrderID":"53808-0931","ShipCountry":"PT","ShipAddress":"53 Graceland Drive","ShipName":"Mann, Bailey and Treutel","OrderDate":"4/6/2017","TotalPayment":"$69574.66","Status":2,"Type":2},{"OrderID":"55154-6276","ShipCountry":"CR","ShipAddress":"420 Fremont Crossing","ShipName":"Zulauf, Schmitt and Hilll","OrderDate":"10/19/2016","TotalPayment":"$44679.76","Status":5,"Type":1}]},\n' +
        '{"RecordID":145,"FirstName":"Hyacintha","LastName":"Heinish","Company":"Skipstorm","Email":"hheinish40@t-online.de","Phone":"488-328-2353","Status":5,"Type":1,"Orders":[{"OrderID":"24208-399","ShipCountry":"PT","ShipAddress":"79 Banding Point","ShipName":"Powlowski and Sons","OrderDate":"9/4/2017","TotalPayment":"$508603.36","Status":4,"Type":2},{"OrderID":"16714-601","ShipCountry":"GB","ShipAddress":"40 Chive Circle","ShipName":"Deckow, Hoppe and Stark","OrderDate":"11/27/2016","TotalPayment":"$857218.89","Status":3,"Type":1},{"OrderID":"69153-060","ShipCountry":"CN","ShipAddress":"5 Mandrake Junction","ShipName":"Mayert Inc","OrderDate":"3/9/2016","TotalPayment":"$136144.77","Status":5,"Type":2},{"OrderID":"0904-6391","ShipCountry":"EC","ShipAddress":"90 Glacier Hill Place","ShipName":"Stiedemann and Sons","OrderDate":"1/14/2016","TotalPayment":"$811280.15","Status":1,"Type":3},{"OrderID":"68084-470","ShipCountry":"CN","ShipAddress":"10570 3rd Pass","ShipName":"Schaden-Kihn","OrderDate":"10/5/2016","TotalPayment":"$372467.51","Status":1,"Type":2},{"OrderID":"49349-518","ShipCountry":"KM","ShipAddress":"5033 Nelson Street","ShipName":"Hermann, Mraz and Little","OrderDate":"10/21/2017","TotalPayment":"$267064.17","Status":2,"Type":2},{"OrderID":"0998-0225","ShipCountry":"CN","ShipAddress":"3 Dwight Point","ShipName":"Kertzmann, Mayer and Block","OrderDate":"7/5/2016","TotalPayment":"$475080.74","Status":2,"Type":2},{"OrderID":"0024-0393","ShipCountry":"SE","ShipAddress":"36483 Maywood Drive","ShipName":"Wilkinson-Powlowski","OrderDate":"10/9/2017","TotalPayment":"$1139569.04","Status":3,"Type":1},{"OrderID":"57955-0162","ShipCountry":"PL","ShipAddress":"3988 Bunting Place","ShipName":"Schumm, Lindgren and Hilll","OrderDate":"10/24/2016","TotalPayment":"$673808.11","Status":3,"Type":3},{"OrderID":"55111-467","ShipCountry":"PH","ShipAddress":"7 Homewood Terrace","ShipName":"Ledner and Sons","OrderDate":"1/29/2016","TotalPayment":"$580770.60","Status":1,"Type":1},{"OrderID":"52125-499","ShipCountry":"RU","ShipAddress":"39 Darwin Way","ShipName":"Mueller-Hagenes","OrderDate":"11/9/2016","TotalPayment":"$1172519.78","Status":1,"Type":3},{"OrderID":"51655-362","ShipCountry":"ID","ShipAddress":"3693 Debs Street","ShipName":"Hansen-Goldner","OrderDate":"10/4/2017","TotalPayment":"$992339.95","Status":6,"Type":2},{"OrderID":"24236-204","ShipCountry":"ID","ShipAddress":"786 Declaration Alley","ShipName":"Deckow Group","OrderDate":"7/20/2016","TotalPayment":"$703397.06","Status":2,"Type":3},{"OrderID":"65643-329","ShipCountry":"ID","ShipAddress":"98 Westend Avenue","ShipName":"Kling-Leannon","OrderDate":"11/11/2016","TotalPayment":"$523260.31","Status":3,"Type":1},{"OrderID":"54868-4562","ShipCountry":"PL","ShipAddress":"399 Russell Drive","ShipName":"Skiles, Quitzon and VonRueden","OrderDate":"4/23/2016","TotalPayment":"$1136978.08","Status":6,"Type":3},{"OrderID":"58503-045","ShipCountry":"JP","ShipAddress":"3 Northridge Way","ShipName":"Ward, Sporer and Emard","OrderDate":"4/30/2016","TotalPayment":"$119546.70","Status":2,"Type":3},{"OrderID":"52810-201","ShipCountry":"ID","ShipAddress":"52 Vernon Parkway","ShipName":"Rodriguez-Reilly","OrderDate":"2/5/2017","TotalPayment":"$635123.24","Status":6,"Type":3},{"OrderID":"42291-709","ShipCountry":"PH","ShipAddress":"1395 Hanover Center","ShipName":"Baumbach, Feil and Larkin","OrderDate":"5/19/2016","TotalPayment":"$273875.59","Status":2,"Type":3}]},\n' +
        '{"RecordID":146,"FirstName":"Gardie","LastName":"Snewin","Company":"Dynabox","Email":"gsnewin41@oakley.com","Phone":"382-922-9253","Status":3,"Type":3,"Orders":[{"OrderID":"68809-544","ShipCountry":"CN","ShipAddress":"48 Mayfield Crossing","ShipName":"Dach-O\'Hara","OrderDate":"12/14/2016","TotalPayment":"$308508.44","Status":6,"Type":2},{"OrderID":"11673-367","ShipCountry":"MX","ShipAddress":"3 Fordem Avenue","ShipName":"Dibbert, Gislason and Schultz","OrderDate":"8/24/2017","TotalPayment":"$723458.89","Status":5,"Type":2},{"OrderID":"68828-137","ShipCountry":"AF","ShipAddress":"27 Monument Crossing","ShipName":"Koepp, Farrell and Stanton","OrderDate":"2/1/2016","TotalPayment":"$1184297.92","Status":4,"Type":2},{"OrderID":"60505-3222","ShipCountry":"CZ","ShipAddress":"8 8th Pass","ShipName":"Greenfelder, Runte and Ledner","OrderDate":"7/26/2017","TotalPayment":"$1005918.94","Status":6,"Type":1},{"OrderID":"60793-801","ShipCountry":"ID","ShipAddress":"206 Summerview Crossing","ShipName":"Christiansen, Rempel and Kutch","OrderDate":"11/4/2016","TotalPayment":"$621774.35","Status":2,"Type":3},{"OrderID":"0145-0061","ShipCountry":"ID","ShipAddress":"0003 Cherokee Center","ShipName":"Gutmann-Purdy","OrderDate":"5/27/2017","TotalPayment":"$854811.00","Status":3,"Type":3},{"OrderID":"10337-153","ShipCountry":"JP","ShipAddress":"2362 Prentice Alley","ShipName":"Medhurst, Cormier and Bartell","OrderDate":"10/11/2017","TotalPayment":"$813160.59","Status":5,"Type":1},{"OrderID":"49288-0933","ShipCountry":"CN","ShipAddress":"30 Bartelt Point","ShipName":"Altenwerth LLC","OrderDate":"12/13/2016","TotalPayment":"$531547.97","Status":5,"Type":2},{"OrderID":"33261-222","ShipCountry":"ID","ShipAddress":"53 Toban Point","ShipName":"Borer, Maggio and Gerhold","OrderDate":"5/12/2016","TotalPayment":"$1093667.87","Status":2,"Type":1},{"OrderID":"0641-6143","ShipCountry":"ID","ShipAddress":"7 Hoard Parkway","ShipName":"Kirlin and Sons","OrderDate":"4/23/2017","TotalPayment":"$190645.97","Status":1,"Type":1},{"OrderID":"49035-352","ShipCountry":"ID","ShipAddress":"135 Brown Lane","ShipName":"Ankunding-DuBuque","OrderDate":"5/20/2017","TotalPayment":"$826070.35","Status":1,"Type":2},{"OrderID":"0904-6184","ShipCountry":"RU","ShipAddress":"40 Golf Course Circle","ShipName":"Brekke-Heaney","OrderDate":"5/5/2016","TotalPayment":"$874044.14","Status":3,"Type":1}]},\n' +
        '{"RecordID":147,"FirstName":"Mandi","LastName":"Brounsell","Company":"Aibox","Email":"mbrounsell42@constantcontact.com","Phone":"160-127-3864","Status":1,"Type":3,"Orders":[{"OrderID":"55316-647","ShipCountry":"US","ShipAddress":"9 Forster Plaza","ShipName":"Mueller-Boyle","OrderDate":"10/27/2017","TotalPayment":"$787779.16","Status":1,"Type":3},{"OrderID":"0487-2784","ShipCountry":"PL","ShipAddress":"256 Fremont Lane","ShipName":"Wolff-Collier","OrderDate":"1/25/2017","TotalPayment":"$78437.53","Status":4,"Type":3},{"OrderID":"24208-342","ShipCountry":"AR","ShipAddress":"44 Hoepker Hill","ShipName":"Herzog-Rohan","OrderDate":"8/18/2016","TotalPayment":"$805086.34","Status":1,"Type":2},{"OrderID":"21695-867","ShipCountry":"PH","ShipAddress":"8 Dawn Parkway","ShipName":"Cummings Group","OrderDate":"5/27/2016","TotalPayment":"$337502.12","Status":5,"Type":2},{"OrderID":"63402-711","ShipCountry":"PH","ShipAddress":"53 Almo Center","ShipName":"Leannon, Flatley and Rowe","OrderDate":"5/11/2017","TotalPayment":"$148746.02","Status":3,"Type":2},{"OrderID":"13925-104","ShipCountry":"CN","ShipAddress":"6 Hagan Place","ShipName":"Kozey-Dach","OrderDate":"11/9/2016","TotalPayment":"$1129044.93","Status":6,"Type":3},{"OrderID":"43063-442","ShipCountry":"PY","ShipAddress":"884 Mallard Hill","ShipName":"Bartell-Kutch","OrderDate":"6/10/2016","TotalPayment":"$245645.08","Status":2,"Type":2},{"OrderID":"51655-626","ShipCountry":"UG","ShipAddress":"2117 Beilfuss Point","ShipName":"Lindgren-Bashirian","OrderDate":"4/12/2017","TotalPayment":"$802753.26","Status":3,"Type":3},{"OrderID":"67253-200","ShipCountry":"ID","ShipAddress":"900 Portage Crossing","ShipName":"Toy, Hoeger and Batz","OrderDate":"10/11/2017","TotalPayment":"$110681.80","Status":6,"Type":1},{"OrderID":"68180-181","ShipCountry":"VN","ShipAddress":"49 Hudson Junction","ShipName":"Toy Group","OrderDate":"8/18/2016","TotalPayment":"$581245.64","Status":1,"Type":1},{"OrderID":"55154-6263","ShipCountry":"PH","ShipAddress":"62046 Bartillon Parkway","ShipName":"Ryan, Bosco and Kunde","OrderDate":"3/31/2016","TotalPayment":"$115637.28","Status":4,"Type":3},{"OrderID":"63629-4442","ShipCountry":"PK","ShipAddress":"8433 Atwood Hill","ShipName":"Grimes-Langworth","OrderDate":"9/11/2017","TotalPayment":"$615258.44","Status":6,"Type":3},{"OrderID":"61734-415","ShipCountry":"RU","ShipAddress":"00 Morningstar Pass","ShipName":"Walter Inc","OrderDate":"9/3/2016","TotalPayment":"$24094.71","Status":5,"Type":1},{"OrderID":"75981-210","ShipCountry":"PY","ShipAddress":"75 Hudson Crossing","ShipName":"Christiansen Group","OrderDate":"9/15/2016","TotalPayment":"$72963.58","Status":6,"Type":3},{"OrderID":"49348-026","ShipCountry":"FR","ShipAddress":"8293 Jenifer Lane","ShipName":"Goodwin, Fay and Gulgowski","OrderDate":"10/20/2017","TotalPayment":"$1077094.87","Status":1,"Type":2},{"OrderID":"24090-491","ShipCountry":"CO","ShipAddress":"368 Grayhawk Park","ShipName":"Satterfield, Kuvalis and Stanton","OrderDate":"12/30/2016","TotalPayment":"$194354.67","Status":4,"Type":3}]},\n' +
        '{"RecordID":148,"FirstName":"Moshe","LastName":"Gerram","Company":"Thoughtstorm","Email":"mgerram43@zimbio.com","Phone":"549-209-2093","Status":5,"Type":3,"Orders":[{"OrderID":"43419-864","ShipCountry":"RU","ShipAddress":"48407 Heath Drive","ShipName":"Gaylord Group","OrderDate":"8/21/2017","TotalPayment":"$666580.02","Status":5,"Type":2},{"OrderID":"11673-884","ShipCountry":"CN","ShipAddress":"56700 Sunnyside Trail","ShipName":"Brekke, Wunsch and Smith","OrderDate":"4/14/2016","TotalPayment":"$1021500.05","Status":2,"Type":2},{"OrderID":"57520-0069","ShipCountry":"AF","ShipAddress":"79800 Spaight Circle","ShipName":"Cole, Hoeger and Murphy","OrderDate":"2/18/2017","TotalPayment":"$150530.36","Status":1,"Type":2},{"OrderID":"55648-903","ShipCountry":"BR","ShipAddress":"0 Cordelia Circle","ShipName":"Prosacco-McCullough","OrderDate":"6/10/2016","TotalPayment":"$269788.07","Status":5,"Type":3},{"OrderID":"0009-3449","ShipCountry":"PT","ShipAddress":"12258 Dottie Road","ShipName":"McClure-Kuphal","OrderDate":"5/11/2017","TotalPayment":"$525646.62","Status":5,"Type":3},{"OrderID":"53157-100","ShipCountry":"PT","ShipAddress":"7 Upham Plaza","ShipName":"Lang Inc","OrderDate":"12/2/2016","TotalPayment":"$28412.28","Status":1,"Type":3},{"OrderID":"63739-416","ShipCountry":"CN","ShipAddress":"428 Grayhawk Trail","ShipName":"Gulgowski LLC","OrderDate":"9/23/2016","TotalPayment":"$317514.05","Status":5,"Type":2},{"OrderID":"48951-1026","ShipCountry":"CN","ShipAddress":"93 Mockingbird Crossing","ShipName":"O\'Keefe-Pfeffer","OrderDate":"2/18/2017","TotalPayment":"$806052.43","Status":3,"Type":2},{"OrderID":"50268-696","ShipCountry":"SE","ShipAddress":"0 Rieder Place","ShipName":"Bahringer, Auer and Will","OrderDate":"9/8/2016","TotalPayment":"$849801.29","Status":5,"Type":2}]},\n' +
        '{"RecordID":149,"FirstName":"Kimble","LastName":"Haley","Company":"Tazz","Email":"khaley44@bizjournals.com","Phone":"351-819-2694","Status":4,"Type":3,"Orders":[{"OrderID":"0078-0423","ShipCountry":"TH","ShipAddress":"5117 Anthes Circle","ShipName":"Miller-Frami","OrderDate":"10/30/2016","TotalPayment":"$656477.30","Status":1,"Type":2},{"OrderID":"0093-3129","ShipCountry":"PT","ShipAddress":"25295 Colorado Plaza","ShipName":"Heaney-Kuhlman","OrderDate":"5/13/2017","TotalPayment":"$1063453.07","Status":1,"Type":3},{"OrderID":"63783-011","ShipCountry":"HR","ShipAddress":"40 Bellgrove Crossing","ShipName":"Farrell, Hudson and Bode","OrderDate":"5/15/2017","TotalPayment":"$527732.06","Status":6,"Type":1},{"OrderID":"50436-5015","ShipCountry":"CN","ShipAddress":"447 Pierstorff Drive","ShipName":"Pfannerstill-Boyle","OrderDate":"6/29/2016","TotalPayment":"$41131.37","Status":5,"Type":3},{"OrderID":"59779-367","ShipCountry":"IR","ShipAddress":"24810 Hansons Road","ShipName":"Corkery and Sons","OrderDate":"12/24/2017","TotalPayment":"$829313.82","Status":4,"Type":2},{"OrderID":"63459-205","ShipCountry":"CN","ShipAddress":"6653 Calypso Terrace","ShipName":"Herman-Cartwright","OrderDate":"9/24/2017","TotalPayment":"$422122.37","Status":3,"Type":3},{"OrderID":"67858-001","ShipCountry":"ID","ShipAddress":"73 Crest Line Point","ShipName":"Prosacco, Wintheiser and Prohaska","OrderDate":"2/3/2016","TotalPayment":"$761377.05","Status":2,"Type":3},{"OrderID":"49288-0715","ShipCountry":"DE","ShipAddress":"69035 Rieder Crossing","ShipName":"Gislason-Daugherty","OrderDate":"9/7/2017","TotalPayment":"$320897.14","Status":4,"Type":2},{"OrderID":"55714-2286","ShipCountry":"BR","ShipAddress":"05329 Badeau Point","ShipName":"Kerluke and Sons","OrderDate":"10/1/2017","TotalPayment":"$1096813.56","Status":6,"Type":1},{"OrderID":"63776-415","ShipCountry":"AR","ShipAddress":"0307 Oak Valley Junction","ShipName":"Morar Inc","OrderDate":"4/18/2017","TotalPayment":"$1166882.39","Status":4,"Type":2},{"OrderID":"61958-1701","ShipCountry":"SE","ShipAddress":"62 Leroy Court","ShipName":"Rath LLC","OrderDate":"1/21/2017","TotalPayment":"$963347.68","Status":1,"Type":3},{"OrderID":"52343-021","ShipCountry":"CO","ShipAddress":"8044 Everett Hill","ShipName":"Becker, Howe and Hamill","OrderDate":"8/1/2017","TotalPayment":"$960737.45","Status":5,"Type":2}]},\n' +
        '{"RecordID":150,"FirstName":"Maud","LastName":"Seabrocke","Company":"Gabtune","Email":"mseabrocke45@mlb.com","Phone":"863-325-2784","Status":5,"Type":3,"Orders":[{"OrderID":"33261-972","ShipCountry":"ID","ShipAddress":"5648 Katie Avenue","ShipName":"Larkin-Kemmer","OrderDate":"8/29/2016","TotalPayment":"$232681.08","Status":4,"Type":1},{"OrderID":"36987-3283","ShipCountry":"ID","ShipAddress":"85175 Mayer Street","ShipName":"Little, Gerhold and Little","OrderDate":"12/9/2016","TotalPayment":"$1172380.07","Status":4,"Type":2},{"OrderID":"60691-116","ShipCountry":"CU","ShipAddress":"441 Daystar Drive","ShipName":"Zboncak, Ryan and Schmeler","OrderDate":"9/1/2017","TotalPayment":"$954202.04","Status":2,"Type":3},{"OrderID":"63941-180","ShipCountry":"PE","ShipAddress":"8155 Sycamore Court","ShipName":"Runolfsson and Sons","OrderDate":"10/3/2016","TotalPayment":"$932709.77","Status":3,"Type":2},{"OrderID":"41167-0625","ShipCountry":"US","ShipAddress":"39457 Anderson Terrace","ShipName":"Borer Inc","OrderDate":"8/16/2017","TotalPayment":"$414424.08","Status":3,"Type":3},{"OrderID":"50268-180","ShipCountry":"CM","ShipAddress":"7009 Sachs Center","ShipName":"Marvin, Renner and Sauer","OrderDate":"3/21/2016","TotalPayment":"$963666.77","Status":1,"Type":3}]},\n' +
        '{"RecordID":151,"FirstName":"Marissa","LastName":"Maren","Company":"Quimba","Email":"mmaren46@webs.com","Phone":"171-128-0030","Status":5,"Type":2,"Orders":[{"OrderID":"64735-011","ShipCountry":"PH","ShipAddress":"68698 Shopko Center","ShipName":"Bode and Sons","OrderDate":"3/21/2017","TotalPayment":"$95196.23","Status":2,"Type":1},{"OrderID":"58411-197","ShipCountry":"RU","ShipAddress":"5 Hoepker Junction","ShipName":"Walker, Sauer and Dicki","OrderDate":"10/12/2017","TotalPayment":"$1044102.74","Status":5,"Type":3},{"OrderID":"64679-775","ShipCountry":"RE","ShipAddress":"74 Gulseth Plaza","ShipName":"Abbott-Lowe","OrderDate":"9/16/2016","TotalPayment":"$804732.76","Status":2,"Type":3},{"OrderID":"0498-0010","ShipCountry":"UG","ShipAddress":"75874 Gateway Street","ShipName":"Mann-Volkman","OrderDate":"5/9/2017","TotalPayment":"$692910.31","Status":1,"Type":2},{"OrderID":"49738-536","ShipCountry":"IT","ShipAddress":"7 Steensland Park","ShipName":"Schroeder LLC","OrderDate":"10/27/2016","TotalPayment":"$993560.12","Status":6,"Type":1}]},\n' +
        '{"RecordID":152,"FirstName":"Dorothee","LastName":"Athowe","Company":"Yoveo","Email":"dathowe47@google.com.br","Phone":"849-640-3501","Status":4,"Type":1,"Orders":[{"OrderID":"50580-536","ShipCountry":"RU","ShipAddress":"8 Westridge Way","ShipName":"Mante-Bahringer","OrderDate":"5/13/2017","TotalPayment":"$397238.79","Status":4,"Type":3},{"OrderID":"0363-0348","ShipCountry":"CN","ShipAddress":"1 Havey Way","ShipName":"Medhurst, O\'Conner and Halvorson","OrderDate":"11/14/2017","TotalPayment":"$577412.05","Status":5,"Type":2},{"OrderID":"10812-359","ShipCountry":"ZA","ShipAddress":"39 Oneill Junction","ShipName":"Padberg and Sons","OrderDate":"8/17/2016","TotalPayment":"$1183197.56","Status":1,"Type":3},{"OrderID":"60505-2512","ShipCountry":"HN","ShipAddress":"15 Nancy Terrace","ShipName":"Legros-Breitenberg","OrderDate":"3/7/2017","TotalPayment":"$943791.44","Status":4,"Type":2},{"OrderID":"65862-374","ShipCountry":"AR","ShipAddress":"6761 Daystar Junction","ShipName":"Balistreri, Dooley and Herman","OrderDate":"6/4/2017","TotalPayment":"$1099102.34","Status":3,"Type":3},{"OrderID":"68084-086","ShipCountry":"MG","ShipAddress":"5 Reindahl Terrace","ShipName":"Pouros and Sons","OrderDate":"3/31/2016","TotalPayment":"$195981.11","Status":3,"Type":3},{"OrderID":"59779-711","ShipCountry":"UG","ShipAddress":"67 Gateway Hill","ShipName":"Nader Group","OrderDate":"11/5/2017","TotalPayment":"$187444.00","Status":5,"Type":2},{"OrderID":"52862-014","ShipCountry":"ID","ShipAddress":"772 Stuart Way","ShipName":"Wunsch, Ledner and Kautzer","OrderDate":"8/1/2017","TotalPayment":"$411778.81","Status":4,"Type":2},{"OrderID":"62011-0094","ShipCountry":"CN","ShipAddress":"5990 Westport Street","ShipName":"Erdman, Ernser and Powlowski","OrderDate":"6/3/2017","TotalPayment":"$376639.96","Status":3,"Type":2},{"OrderID":"55700-003","ShipCountry":"RU","ShipAddress":"20282 Brentwood Plaza","ShipName":"McKenzie-Conn","OrderDate":"7/7/2016","TotalPayment":"$540152.96","Status":3,"Type":2},{"OrderID":"31722-339","ShipCountry":"US","ShipAddress":"534 Doe Crossing Park","ShipName":"Cummerata Group","OrderDate":"6/25/2017","TotalPayment":"$231450.19","Status":1,"Type":2},{"OrderID":"0363-6170","ShipCountry":"PH","ShipAddress":"33 Milwaukee Street","ShipName":"Bayer LLC","OrderDate":"4/2/2016","TotalPayment":"$347383.65","Status":5,"Type":1},{"OrderID":"42546-180","ShipCountry":"PH","ShipAddress":"51 Swallow Circle","ShipName":"Monahan-Veum","OrderDate":"1/26/2016","TotalPayment":"$621599.57","Status":4,"Type":3},{"OrderID":"50813-0004","ShipCountry":"TM","ShipAddress":"80 Brentwood Court","ShipName":"Murphy, Hills and Farrell","OrderDate":"8/13/2017","TotalPayment":"$821571.72","Status":3,"Type":1},{"OrderID":"55154-1492","ShipCountry":"PH","ShipAddress":"87862 Scofield Circle","ShipName":"Botsford, Cormier and Muller","OrderDate":"10/1/2016","TotalPayment":"$730189.83","Status":3,"Type":3},{"OrderID":"60681-2810","ShipCountry":"PT","ShipAddress":"38964 Rusk Lane","ShipName":"Price, Will and Lind","OrderDate":"7/14/2016","TotalPayment":"$904608.65","Status":6,"Type":2},{"OrderID":"60760-278","ShipCountry":"FR","ShipAddress":"525 Thackeray Crossing","ShipName":"Heidenreich, MacGyver and Pfannerstill","OrderDate":"5/1/2017","TotalPayment":"$1128594.71","Status":5,"Type":2},{"OrderID":"57344-156","ShipCountry":"ID","ShipAddress":"23532 Florence Plaza","ShipName":"Barrows, Heaney and Gibson","OrderDate":"1/13/2017","TotalPayment":"$482075.42","Status":1,"Type":3},{"OrderID":"52125-616","ShipCountry":"CZ","ShipAddress":"6 Springs Lane","ShipName":"Hintz LLC","OrderDate":"1/14/2017","TotalPayment":"$1196624.12","Status":3,"Type":1}]},\n' +
        '{"RecordID":153,"FirstName":"Merle","LastName":"Demaine","Company":"Shufflebeat","Email":"mdemaine48@is.gd","Phone":"813-581-2207","Status":1,"Type":2,"Orders":[{"OrderID":"68151-1494","ShipCountry":"ID","ShipAddress":"4483 Buell Court","ShipName":"Jaskolski-Lebsack","OrderDate":"1/9/2016","TotalPayment":"$1181167.37","Status":6,"Type":2},{"OrderID":"53346-1337","ShipCountry":"MX","ShipAddress":"04872 Green Road","ShipName":"Tremblay-Runte","OrderDate":"10/9/2017","TotalPayment":"$994173.52","Status":5,"Type":3},{"OrderID":"57627-164","ShipCountry":"PT","ShipAddress":"80343 Burning Wood Place","ShipName":"Moen, Heaney and Goldner","OrderDate":"8/25/2016","TotalPayment":"$1103550.06","Status":4,"Type":3},{"OrderID":"65585-577","ShipCountry":"NP","ShipAddress":"4 Mockingbird Drive","ShipName":"Ruecker, Lehner and Feest","OrderDate":"1/6/2016","TotalPayment":"$297342.59","Status":2,"Type":1},{"OrderID":"65954-534","ShipCountry":"ID","ShipAddress":"7 Meadow Valley Road","ShipName":"Abbott, Bernier and Walker","OrderDate":"9/19/2017","TotalPayment":"$642363.99","Status":5,"Type":3},{"OrderID":"0363-0610","ShipCountry":"ID","ShipAddress":"72 Loeprich Road","ShipName":"Witting-Ziemann","OrderDate":"5/31/2016","TotalPayment":"$447632.05","Status":5,"Type":2},{"OrderID":"55154-4056","ShipCountry":"SA","ShipAddress":"27375 Sherman Pass","ShipName":"Murray Group","OrderDate":"12/30/2016","TotalPayment":"$112987.29","Status":4,"Type":2}]},\n' +
        '{"RecordID":154,"FirstName":"Teresa","LastName":"Kirimaa","Company":"Geba","Email":"tkirimaa49@ustream.tv","Phone":"531-728-2996","Status":2,"Type":2,"Orders":[{"OrderID":"57337-017","ShipCountry":"CN","ShipAddress":"99 Westport Lane","ShipName":"Block and Sons","OrderDate":"3/9/2016","TotalPayment":"$683113.18","Status":6,"Type":2},{"OrderID":"52125-327","ShipCountry":"CO","ShipAddress":"28359 Sherman Pass","ShipName":"Kautzer and Sons","OrderDate":"11/6/2017","TotalPayment":"$559034.21","Status":3,"Type":2},{"OrderID":"43419-381","ShipCountry":"CN","ShipAddress":"45250 Arizona Place","ShipName":"Dibbert-Pacocha","OrderDate":"7/11/2017","TotalPayment":"$499470.83","Status":5,"Type":2},{"OrderID":"24090-496","ShipCountry":"ID","ShipAddress":"86 Rigney Street","ShipName":"Dooley, Boyer and Deckow","OrderDate":"9/21/2016","TotalPayment":"$452524.93","Status":5,"Type":1},{"OrderID":"0228-2981","ShipCountry":"CN","ShipAddress":"64345 Helena Crossing","ShipName":"Hahn-Schroeder","OrderDate":"1/15/2017","TotalPayment":"$1190088.58","Status":3,"Type":3},{"OrderID":"66685-1002","ShipCountry":"HK","ShipAddress":"8 Graedel Circle","ShipName":"Blanda Group","OrderDate":"4/19/2017","TotalPayment":"$721477.19","Status":5,"Type":1},{"OrderID":"54569-2095","ShipCountry":"TJ","ShipAddress":"50228 Onsgard Place","ShipName":"Krajcik and Sons","OrderDate":"1/4/2016","TotalPayment":"$1040556.38","Status":5,"Type":1},{"OrderID":"36987-2517","ShipCountry":"DK","ShipAddress":"988 Morning Place","ShipName":"Dickinson, Smitham and McGlynn","OrderDate":"6/15/2017","TotalPayment":"$1071084.94","Status":2,"Type":2},{"OrderID":"24286-1561","ShipCountry":"RU","ShipAddress":"199 Hallows Street","ShipName":"Zboncak and Sons","OrderDate":"10/15/2017","TotalPayment":"$608311.91","Status":4,"Type":1},{"OrderID":"68084-230","ShipCountry":"RU","ShipAddress":"57457 Toban Hill","ShipName":"Marvin-Kemmer","OrderDate":"2/16/2016","TotalPayment":"$348071.15","Status":6,"Type":3},{"OrderID":"64117-744","ShipCountry":"MY","ShipAddress":"9228 Fairview Plaza","ShipName":"Miller, Bartell and Ankunding","OrderDate":"11/19/2017","TotalPayment":"$894992.39","Status":4,"Type":1},{"OrderID":"55910-449","ShipCountry":"PA","ShipAddress":"05127 Mayfield Street","ShipName":"Romaguera LLC","OrderDate":"9/13/2017","TotalPayment":"$1075958.79","Status":2,"Type":2}]},\n' +
        '{"RecordID":155,"FirstName":"Krispin","LastName":"Mabbe","Company":"Browsetype","Email":"kmabbe4a@abc.net.au","Phone":"129-198-3421","Status":3,"Type":1,"Orders":[{"OrderID":"37000-849","ShipCountry":"ID","ShipAddress":"04302 Parkside Junction","ShipName":"Kilback-Schoen","OrderDate":"5/24/2016","TotalPayment":"$36773.27","Status":5,"Type":1},{"OrderID":"41520-490","ShipCountry":"SE","ShipAddress":"76394 West Avenue","ShipName":"Dibbert Group","OrderDate":"11/5/2017","TotalPayment":"$658181.10","Status":2,"Type":2},{"OrderID":"65044-2679","ShipCountry":"CN","ShipAddress":"87546 Mcguire Trail","ShipName":"Metz LLC","OrderDate":"5/29/2017","TotalPayment":"$1173954.63","Status":4,"Type":2},{"OrderID":"0591-3228","ShipCountry":"MY","ShipAddress":"400 Vidon Avenue","ShipName":"Romaguera Inc","OrderDate":"8/30/2016","TotalPayment":"$241156.09","Status":4,"Type":3},{"OrderID":"0268-1456","ShipCountry":"CN","ShipAddress":"384 Arkansas Lane","ShipName":"Boyer-Barrows","OrderDate":"2/3/2017","TotalPayment":"$1022072.94","Status":1,"Type":1},{"OrderID":"52533-107","ShipCountry":"RU","ShipAddress":"7174 Lyons Trail","ShipName":"Kling, Cronin and Beer","OrderDate":"6/30/2017","TotalPayment":"$77236.48","Status":3,"Type":1},{"OrderID":"76029-002","ShipCountry":"TH","ShipAddress":"5 Lindbergh Street","ShipName":"Rath-Schmitt","OrderDate":"9/8/2016","TotalPayment":"$1073095.17","Status":6,"Type":3},{"OrderID":"63739-080","ShipCountry":"PH","ShipAddress":"201 Meadow Valley Court","ShipName":"Gusikowski-Morar","OrderDate":"8/29/2016","TotalPayment":"$708372.82","Status":3,"Type":3}]},\n' +
        '{"RecordID":156,"FirstName":"Constantia","LastName":"Langstone","Company":"Thoughtstorm","Email":"clangstone4b@mac.com","Phone":"935-903-0056","Status":1,"Type":2,"Orders":[{"OrderID":"0268-6401","ShipCountry":"PY","ShipAddress":"13645 Marquette Court","ShipName":"Ebert, Torphy and Lang","OrderDate":"10/29/2016","TotalPayment":"$376556.46","Status":3,"Type":2},{"OrderID":"63629-4694","ShipCountry":"GR","ShipAddress":"419 Dorton Drive","ShipName":"Walsh, Torphy and Lubowitz","OrderDate":"2/2/2016","TotalPayment":"$612126.72","Status":2,"Type":1},{"OrderID":"64117-305","ShipCountry":"CA","ShipAddress":"9 Monument Trail","ShipName":"Crona Inc","OrderDate":"3/20/2016","TotalPayment":"$17183.61","Status":3,"Type":2},{"OrderID":"61047-825","ShipCountry":"JP","ShipAddress":"7246 Westerfield Park","ShipName":"Ankunding LLC","OrderDate":"2/25/2017","TotalPayment":"$564426.15","Status":4,"Type":2},{"OrderID":"42254-125","ShipCountry":"IS","ShipAddress":"19 Cherokee Plaza","ShipName":"Connelly LLC","OrderDate":"12/24/2017","TotalPayment":"$415349.56","Status":5,"Type":1},{"OrderID":"10578-055","ShipCountry":"IS","ShipAddress":"2143 7th Parkway","ShipName":"Raynor Group","OrderDate":"11/27/2016","TotalPayment":"$729290.79","Status":3,"Type":3},{"OrderID":"58118-0409","ShipCountry":"CA","ShipAddress":"761 Oriole Center","ShipName":"Reichert-DuBuque","OrderDate":"4/13/2016","TotalPayment":"$954344.27","Status":5,"Type":2},{"OrderID":"0363-0664","ShipCountry":"VN","ShipAddress":"29906 Iowa Circle","ShipName":"Bogisich-Stanton","OrderDate":"9/29/2016","TotalPayment":"$183669.44","Status":3,"Type":1},{"OrderID":"59779-648","ShipCountry":"LT","ShipAddress":"49 Hintze Trail","ShipName":"Beier, Ferry and Eichmann","OrderDate":"10/10/2017","TotalPayment":"$1046095.77","Status":5,"Type":2},{"OrderID":"62011-0084","ShipCountry":"RU","ShipAddress":"1 Vidon Place","ShipName":"Parisian-Pfannerstill","OrderDate":"1/30/2016","TotalPayment":"$460247.59","Status":6,"Type":3},{"OrderID":"0311-0585","ShipCountry":"TN","ShipAddress":"28320 Sutherland Trail","ShipName":"Mayert-Hyatt","OrderDate":"12/9/2016","TotalPayment":"$442430.65","Status":4,"Type":2},{"OrderID":"0131-3265","ShipCountry":"DJ","ShipAddress":"0 Petterle Parkway","ShipName":"Kling, Gerlach and Robel","OrderDate":"11/30/2016","TotalPayment":"$25185.33","Status":6,"Type":2},{"OrderID":"50845-0092","ShipCountry":"CN","ShipAddress":"10042 Del Sol Alley","ShipName":"Blanda and Sons","OrderDate":"4/17/2016","TotalPayment":"$411918.88","Status":6,"Type":1},{"OrderID":"67046-268","ShipCountry":"CN","ShipAddress":"6586 Elmside Court","ShipName":"Dicki and Sons","OrderDate":"1/2/2017","TotalPayment":"$739744.26","Status":6,"Type":3},{"OrderID":"47593-383","ShipCountry":"ID","ShipAddress":"20 Prentice Drive","ShipName":"Koepp LLC","OrderDate":"1/5/2016","TotalPayment":"$515040.94","Status":3,"Type":2},{"OrderID":"0185-0134","ShipCountry":"SY","ShipAddress":"0851 Tomscot Center","ShipName":"Leuschke, Okuneva and Bergnaum","OrderDate":"5/17/2016","TotalPayment":"$987132.14","Status":1,"Type":2},{"OrderID":"53240-151","ShipCountry":"CN","ShipAddress":"9102 Shelley Hill","ShipName":"Eichmann LLC","OrderDate":"8/13/2017","TotalPayment":"$812244.63","Status":1,"Type":3}]},\n' +
        '{"RecordID":157,"FirstName":"Heloise","LastName":"Blewett","Company":"Dabshots","Email":"hblewett4c@ezinearticles.com","Phone":"276-901-8947","Status":2,"Type":1,"Orders":[{"OrderID":"59158-723","ShipCountry":"ID","ShipAddress":"3171 Fulton Avenue","ShipName":"Effertz-Sipes","OrderDate":"1/12/2017","TotalPayment":"$636103.96","Status":1,"Type":1},{"OrderID":"37205-535","ShipCountry":"UA","ShipAddress":"92 Southridge Terrace","ShipName":"Green Inc","OrderDate":"4/11/2017","TotalPayment":"$978748.73","Status":5,"Type":1},{"OrderID":"50436-9101","ShipCountry":"PE","ShipAddress":"5 Meadow Vale Street","ShipName":"Torp Inc","OrderDate":"4/30/2016","TotalPayment":"$541999.87","Status":4,"Type":3},{"OrderID":"10544-608","ShipCountry":"HT","ShipAddress":"24980 Grasskamp Center","ShipName":"Casper-Medhurst","OrderDate":"12/30/2017","TotalPayment":"$85216.39","Status":2,"Type":1},{"OrderID":"10144-604","ShipCountry":"PL","ShipAddress":"6481 Wayridge Trail","ShipName":"Morar, Wyman and Emard","OrderDate":"2/8/2017","TotalPayment":"$998173.51","Status":1,"Type":1},{"OrderID":"36987-1747","ShipCountry":"CN","ShipAddress":"044 Moose Circle","ShipName":"Wintheiser LLC","OrderDate":"3/26/2016","TotalPayment":"$153773.91","Status":6,"Type":3},{"OrderID":"58668-2211","ShipCountry":"ET","ShipAddress":"706 Reindahl Circle","ShipName":"Hettinger, Buckridge and Heller","OrderDate":"4/12/2016","TotalPayment":"$285170.46","Status":1,"Type":1},{"OrderID":"60505-0209","ShipCountry":"UA","ShipAddress":"921 Hudson Road","ShipName":"Steuber, Bednar and Koelpin","OrderDate":"2/15/2016","TotalPayment":"$189476.29","Status":1,"Type":3},{"OrderID":"63629-3639","ShipCountry":"JP","ShipAddress":"262 Scofield Lane","ShipName":"Nitzsche LLC","OrderDate":"5/26/2016","TotalPayment":"$701166.79","Status":2,"Type":2},{"OrderID":"13925-101","ShipCountry":"BR","ShipAddress":"97286 Arrowood Parkway","ShipName":"Heidenreich, Kuhlman and Satterfield","OrderDate":"6/17/2017","TotalPayment":"$191107.09","Status":4,"Type":3},{"OrderID":"55714-2355","ShipCountry":"CN","ShipAddress":"3 Sunnyside Center","ShipName":"Barton-Leannon","OrderDate":"4/10/2017","TotalPayment":"$544148.76","Status":2,"Type":1},{"OrderID":"68788-9816","ShipCountry":"PL","ShipAddress":"572 Moulton Trail","ShipName":"Davis Group","OrderDate":"3/15/2016","TotalPayment":"$566600.97","Status":3,"Type":2}]},\n' +
        '{"RecordID":158,"FirstName":"Lucy","LastName":"Osgorby","Company":"Talane","Email":"losgorby4d@comsenz.com","Phone":"962-841-3463","Status":1,"Type":2,"Orders":[{"OrderID":"52343-002","ShipCountry":"PL","ShipAddress":"76 Buell Court","ShipName":"Schulist-Miller","OrderDate":"4/28/2017","TotalPayment":"$546593.75","Status":1,"Type":1},{"OrderID":"58118-1344","ShipCountry":"FR","ShipAddress":"29564 Twin Pines Plaza","ShipName":"Pagac LLC","OrderDate":"10/4/2016","TotalPayment":"$1193295.50","Status":5,"Type":3},{"OrderID":"50021-243","ShipCountry":"IR","ShipAddress":"4814 Mitchell Crossing","ShipName":"Cartwright Inc","OrderDate":"5/25/2016","TotalPayment":"$548040.50","Status":6,"Type":2},{"OrderID":"49349-849","ShipCountry":"JP","ShipAddress":"8345 Buhler Alley","ShipName":"Hand-Cole","OrderDate":"10/24/2016","TotalPayment":"$422993.93","Status":3,"Type":2},{"OrderID":"0085-1291","ShipCountry":"CN","ShipAddress":"9 Sauthoff Alley","ShipName":"Schultz Inc","OrderDate":"6/23/2017","TotalPayment":"$29651.35","Status":5,"Type":3},{"OrderID":"0074-3457","ShipCountry":"CA","ShipAddress":"2840 Summer Ridge Road","ShipName":"Wyman, Weimann and Klocko","OrderDate":"7/4/2016","TotalPayment":"$614774.13","Status":6,"Type":3},{"OrderID":"57525-016","ShipCountry":"FR","ShipAddress":"1907 Nova Hill","ShipName":"Muller, Ryan and Ledner","OrderDate":"8/20/2016","TotalPayment":"$19886.89","Status":2,"Type":1},{"OrderID":"68645-261","ShipCountry":"AZ","ShipAddress":"75472 Cordelia Trail","ShipName":"Schulist, Bartell and O\'Kon","OrderDate":"5/13/2017","TotalPayment":"$737725.80","Status":4,"Type":3},{"OrderID":"55312-546","ShipCountry":"RU","ShipAddress":"2 Northridge Plaza","ShipName":"Koelpin, Barrows and Predovic","OrderDate":"9/30/2016","TotalPayment":"$269138.14","Status":6,"Type":2},{"OrderID":"21695-143","ShipCountry":"ID","ShipAddress":"28 Jay Parkway","ShipName":"Ebert, Lynch and Friesen","OrderDate":"2/2/2017","TotalPayment":"$1116938.56","Status":5,"Type":1},{"OrderID":"50845-0197","ShipCountry":"RS","ShipAddress":"49 Golf Course Crossing","ShipName":"Spinka-Reinger","OrderDate":"12/11/2017","TotalPayment":"$300011.38","Status":4,"Type":3},{"OrderID":"65841-740","ShipCountry":"CN","ShipAddress":"20 Stephen Pass","ShipName":"D\'Amore Group","OrderDate":"4/25/2017","TotalPayment":"$742267.45","Status":1,"Type":3},{"OrderID":"55154-2828","ShipCountry":"CN","ShipAddress":"66 Shoshone Circle","ShipName":"Mayer LLC","OrderDate":"5/21/2017","TotalPayment":"$510673.85","Status":1,"Type":3}]},\n' +
        '{"RecordID":159,"FirstName":"Grazia","LastName":"Frascone","Company":"Yodel","Email":"gfrascone4e@sbwire.com","Phone":"703-883-7151","Status":4,"Type":1,"Orders":[{"OrderID":"43353-856","ShipCountry":"PE","ShipAddress":"2587 Crescent Oaks Trail","ShipName":"Sipes-Bruen","OrderDate":"1/26/2016","TotalPayment":"$956071.07","Status":2,"Type":1},{"OrderID":"16590-998","ShipCountry":"RU","ShipAddress":"24 Tennessee Lane","ShipName":"Murray, Anderson and Blick","OrderDate":"4/11/2016","TotalPayment":"$86687.22","Status":5,"Type":1},{"OrderID":"50114-6085","ShipCountry":"CA","ShipAddress":"3917 Washington Trail","ShipName":"Ortiz LLC","OrderDate":"9/18/2017","TotalPayment":"$311136.21","Status":6,"Type":1},{"OrderID":"24385-213","ShipCountry":"KG","ShipAddress":"75 Anthes Lane","ShipName":"Gutmann Inc","OrderDate":"7/25/2016","TotalPayment":"$360502.94","Status":3,"Type":3},{"OrderID":"36987-2551","ShipCountry":"FI","ShipAddress":"8726 Dennis Plaza","ShipName":"Satterfield-Towne","OrderDate":"11/20/2017","TotalPayment":"$1003125.07","Status":6,"Type":2},{"OrderID":"0264-7865","ShipCountry":"CN","ShipAddress":"9488 Sullivan Hill","ShipName":"Christiansen, Heathcote and Waters","OrderDate":"7/6/2017","TotalPayment":"$423794.88","Status":3,"Type":3},{"OrderID":"57955-6012","ShipCountry":"ZA","ShipAddress":"0244 Shasta Drive","ShipName":"Abbott, Lockman and Conn","OrderDate":"4/28/2017","TotalPayment":"$117457.26","Status":1,"Type":3},{"OrderID":"22840-0039","ShipCountry":"CN","ShipAddress":"70 Golf View Terrace","ShipName":"Predovic, Schimmel and Veum","OrderDate":"9/5/2017","TotalPayment":"$901260.15","Status":6,"Type":2},{"OrderID":"49349-902","ShipCountry":"CN","ShipAddress":"42 Arapahoe Place","ShipName":"Gerhold-Koss","OrderDate":"6/23/2017","TotalPayment":"$332874.28","Status":5,"Type":3},{"OrderID":"0187-5172","ShipCountry":"NZ","ShipAddress":"4407 Glendale Street","ShipName":"Hilpert, Keebler and Lemke","OrderDate":"4/18/2017","TotalPayment":"$39828.66","Status":3,"Type":2},{"OrderID":"76472-1152","ShipCountry":"RU","ShipAddress":"0 Del Sol Place","ShipName":"Bartoletti, Lang and Durgan","OrderDate":"10/3/2017","TotalPayment":"$42971.15","Status":2,"Type":1},{"OrderID":"34022-101","ShipCountry":"PL","ShipAddress":"63577 Johnson Hill","ShipName":"Stiedemann, Marvin and Dicki","OrderDate":"9/10/2016","TotalPayment":"$516273.51","Status":5,"Type":3},{"OrderID":"60505-0833","ShipCountry":"BG","ShipAddress":"113 Manufacturers Drive","ShipName":"Schaefer-Boyle","OrderDate":"6/5/2017","TotalPayment":"$888904.38","Status":1,"Type":2}]},\n' +
        '{"RecordID":160,"FirstName":"Dani","LastName":"Manicomb","Company":"Browseblab","Email":"dmanicomb4f@google.de","Phone":"252-183-7241","Status":4,"Type":2,"Orders":[{"OrderID":"0025-2752","ShipCountry":"RU","ShipAddress":"7988 Steensland Pass","ShipName":"Weimann, Jakubowski and Von","OrderDate":"4/13/2016","TotalPayment":"$1106269.87","Status":5,"Type":3},{"OrderID":"10812-198","ShipCountry":"ID","ShipAddress":"7 Lukken Center","ShipName":"Hickle-Romaguera","OrderDate":"10/20/2017","TotalPayment":"$274401.23","Status":1,"Type":2},{"OrderID":"30014-104","ShipCountry":"PT","ShipAddress":"60425 Lawn Alley","ShipName":"Weber-Tremblay","OrderDate":"1/6/2016","TotalPayment":"$834581.29","Status":6,"Type":2},{"OrderID":"42254-149","ShipCountry":"TL","ShipAddress":"45 Mesta Terrace","ShipName":"Littel Group","OrderDate":"6/5/2016","TotalPayment":"$96884.74","Status":3,"Type":1},{"OrderID":"49781-011","ShipCountry":"PL","ShipAddress":"3374 Aberg Drive","ShipName":"Fisher-Gulgowski","OrderDate":"4/15/2016","TotalPayment":"$845177.14","Status":1,"Type":1},{"OrderID":"0363-0650","ShipCountry":"ZM","ShipAddress":"4916 Center Lane","ShipName":"Schumm-Corkery","OrderDate":"10/19/2016","TotalPayment":"$712651.64","Status":5,"Type":2},{"OrderID":"61601-1217","ShipCountry":"PE","ShipAddress":"4851 Namekagon Trail","ShipName":"Cremin-Waters","OrderDate":"9/21/2016","TotalPayment":"$78523.80","Status":5,"Type":2},{"OrderID":"64616-105","ShipCountry":"MX","ShipAddress":"9469 Butterfield Pass","ShipName":"Pouros-Simonis","OrderDate":"10/9/2017","TotalPayment":"$173307.83","Status":3,"Type":1},{"OrderID":"37808-110","ShipCountry":"ID","ShipAddress":"5894 Judy Parkway","ShipName":"Parker, Kuvalis and McCullough","OrderDate":"9/2/2017","TotalPayment":"$269668.73","Status":4,"Type":2},{"OrderID":"67618-300","ShipCountry":"JP","ShipAddress":"749 Ohio Terrace","ShipName":"Denesik-Schimmel","OrderDate":"7/29/2016","TotalPayment":"$994283.14","Status":4,"Type":1},{"OrderID":"66083-741","ShipCountry":"PT","ShipAddress":"7406 Briar Crest Junction","ShipName":"Nienow, Armstrong and Bauch","OrderDate":"7/23/2017","TotalPayment":"$240411.02","Status":6,"Type":1},{"OrderID":"0185-5050","ShipCountry":"RU","ShipAddress":"7 Randy Point","ShipName":"Hansen, Larkin and Pagac","OrderDate":"7/29/2017","TotalPayment":"$139859.74","Status":3,"Type":1},{"OrderID":"51346-184","ShipCountry":"AM","ShipAddress":"8 Bartelt Parkway","ShipName":"Jacobs Inc","OrderDate":"10/10/2016","TotalPayment":"$586074.20","Status":5,"Type":2},{"OrderID":"24658-304","ShipCountry":"TZ","ShipAddress":"85635 Hayes Place","ShipName":"Effertz, Bode and Larson","OrderDate":"11/30/2017","TotalPayment":"$409400.23","Status":2,"Type":2},{"OrderID":"0615-3596","ShipCountry":"JP","ShipAddress":"37815 2nd Lane","ShipName":"Yundt and Sons","OrderDate":"8/31/2017","TotalPayment":"$1177664.10","Status":3,"Type":1},{"OrderID":"67938-1085","ShipCountry":"JP","ShipAddress":"0009 Forest Dale Junction","ShipName":"Schroeder LLC","OrderDate":"3/27/2017","TotalPayment":"$1120850.95","Status":5,"Type":1},{"OrderID":"43074-207","ShipCountry":"PH","ShipAddress":"39736 Anderson Junction","ShipName":"Fahey-Corkery","OrderDate":"11/10/2017","TotalPayment":"$1038615.45","Status":5,"Type":2},{"OrderID":"76173-1005","ShipCountry":"GR","ShipAddress":"1812 Melrose Avenue","ShipName":"Padberg, Mertz and Heaney","OrderDate":"9/17/2016","TotalPayment":"$1180134.89","Status":3,"Type":2}]},\n' +
        '{"RecordID":161,"FirstName":"Karine","LastName":"Lindegard","Company":"Chatterpoint","Email":"klindegard4g@chronoengine.com","Phone":"626-296-7353","Status":5,"Type":1,"Orders":[{"OrderID":"68276-004","ShipCountry":"CO","ShipAddress":"5 Debs Street","ShipName":"Jacobson Group","OrderDate":"1/8/2017","TotalPayment":"$327436.90","Status":4,"Type":2},{"OrderID":"55111-133","ShipCountry":"PT","ShipAddress":"9 Novick Plaza","ShipName":"O\'Hara, King and Hahn","OrderDate":"2/28/2017","TotalPayment":"$349539.84","Status":1,"Type":1},{"OrderID":"36987-1899","ShipCountry":"US","ShipAddress":"172 Glendale Trail","ShipName":"Ritchie, Maggio and Lowe","OrderDate":"12/7/2017","TotalPayment":"$1167184.76","Status":4,"Type":1},{"OrderID":"53603-2003","ShipCountry":"BR","ShipAddress":"3 Scoville Hill","ShipName":"Goyette-Koss","OrderDate":"8/23/2016","TotalPayment":"$1197264.67","Status":2,"Type":3},{"OrderID":"62362-159","ShipCountry":"CN","ShipAddress":"439 Ryan Junction","ShipName":"Towne Inc","OrderDate":"9/21/2016","TotalPayment":"$47089.49","Status":3,"Type":3},{"OrderID":"68745-1153","ShipCountry":"FR","ShipAddress":"0 Huxley Park","ShipName":"Hintz, Lakin and Breitenberg","OrderDate":"7/11/2016","TotalPayment":"$868302.82","Status":5,"Type":1},{"OrderID":"55315-600","ShipCountry":"PL","ShipAddress":"6 Grayhawk Junction","ShipName":"Will, Corwin and Kunde","OrderDate":"7/1/2016","TotalPayment":"$1197695.65","Status":4,"Type":2},{"OrderID":"64616-098","ShipCountry":"BR","ShipAddress":"250 Dunning Point","ShipName":"Becker, Morissette and Graham","OrderDate":"6/22/2017","TotalPayment":"$837012.51","Status":6,"Type":2},{"OrderID":"11523-7302","ShipCountry":"PT","ShipAddress":"15755 Forest Pass","ShipName":"Schinner, Ritchie and Schumm","OrderDate":"9/25/2016","TotalPayment":"$95430.27","Status":4,"Type":3},{"OrderID":"0603-2110","ShipCountry":"RS","ShipAddress":"185 Roth Trail","ShipName":"Mueller Group","OrderDate":"6/17/2017","TotalPayment":"$815097.00","Status":1,"Type":2}]},\n' +
        '{"RecordID":162,"FirstName":"Lennard","LastName":"Duffan","Company":"Tagpad","Email":"lduffan4h@diigo.com","Phone":"573-297-1345","Status":3,"Type":1,"Orders":[{"OrderID":"55111-282","ShipCountry":"UA","ShipAddress":"61446 Derek Court","ShipName":"Hudson-Gaylord","OrderDate":"7/22/2017","TotalPayment":"$503731.00","Status":1,"Type":2},{"OrderID":"68788-9085","ShipCountry":"CN","ShipAddress":"85929 Thackeray Drive","ShipName":"Block Group","OrderDate":"2/5/2017","TotalPayment":"$1181023.68","Status":3,"Type":2},{"OrderID":"54868-2271","ShipCountry":"SY","ShipAddress":"52 Packers Trail","ShipName":"Orn-Mueller","OrderDate":"1/2/2017","TotalPayment":"$117031.08","Status":5,"Type":1},{"OrderID":"53746-219","ShipCountry":"PT","ShipAddress":"10 Lakewood Street","ShipName":"Rutherford Group","OrderDate":"5/2/2016","TotalPayment":"$1114104.86","Status":2,"Type":3},{"OrderID":"37000-522","ShipCountry":"ID","ShipAddress":"484 Tennessee Court","ShipName":"Ruecker Group","OrderDate":"6/1/2016","TotalPayment":"$226798.07","Status":1,"Type":2},{"OrderID":"68084-020","ShipCountry":"FR","ShipAddress":"8933 Troy Circle","ShipName":"Spencer-Okuneva","OrderDate":"7/11/2017","TotalPayment":"$170235.61","Status":2,"Type":1},{"OrderID":"66969-6022","ShipCountry":"ID","ShipAddress":"667 Bellgrove Circle","ShipName":"DuBuque Inc","OrderDate":"5/27/2017","TotalPayment":"$641933.93","Status":1,"Type":3},{"OrderID":"51079-651","ShipCountry":"HR","ShipAddress":"2854 Anderson Court","ShipName":"McLaughlin-Kovacek","OrderDate":"3/13/2017","TotalPayment":"$1083945.75","Status":4,"Type":1},{"OrderID":"57520-0054","ShipCountry":"DE","ShipAddress":"08 Morningstar Alley","ShipName":"Romaguera, McKenzie and Sauer","OrderDate":"2/14/2016","TotalPayment":"$866786.34","Status":1,"Type":1},{"OrderID":"0615-7549","ShipCountry":"PH","ShipAddress":"2754 Carberry Pass","ShipName":"Rogahn-Cole","OrderDate":"8/8/2017","TotalPayment":"$136727.95","Status":4,"Type":1},{"OrderID":"49999-049","ShipCountry":"US","ShipAddress":"1408 Chinook Crossing","ShipName":"Kunze, Sauer and Koepp","OrderDate":"1/5/2016","TotalPayment":"$253533.22","Status":1,"Type":2},{"OrderID":"11673-311","ShipCountry":"ID","ShipAddress":"8 Ronald Regan Plaza","ShipName":"Kunze and Sons","OrderDate":"6/12/2016","TotalPayment":"$364517.44","Status":2,"Type":2},{"OrderID":"0703-9105","ShipCountry":"CN","ShipAddress":"97 Sachtjen Avenue","ShipName":"Gottlieb and Sons","OrderDate":"12/19/2017","TotalPayment":"$1189295.37","Status":1,"Type":1},{"OrderID":"68745-1044","ShipCountry":"PK","ShipAddress":"241 Elka Center","ShipName":"Goldner Inc","OrderDate":"6/3/2016","TotalPayment":"$1038504.95","Status":3,"Type":2},{"OrderID":"36987-2825","ShipCountry":"PL","ShipAddress":"4845 Surrey Park","ShipName":"Carter-Stanton","OrderDate":"4/25/2016","TotalPayment":"$311707.99","Status":4,"Type":2},{"OrderID":"59746-348","ShipCountry":"BR","ShipAddress":"058 Westend Lane","ShipName":"West-D\'Amore","OrderDate":"3/20/2016","TotalPayment":"$370995.08","Status":1,"Type":2},{"OrderID":"54569-5418","ShipCountry":"CN","ShipAddress":"39 Golden Leaf Avenue","ShipName":"Cormier, Sanford and Thiel","OrderDate":"8/29/2016","TotalPayment":"$426167.14","Status":5,"Type":2}]},\n' +
        '{"RecordID":163,"FirstName":"Luci","LastName":"Baily","Company":"Gevee","Email":"lbaily4i@facebook.com","Phone":"555-486-6648","Status":6,"Type":2,"Orders":[{"OrderID":"0113-0516","ShipCountry":"HN","ShipAddress":"5 Anhalt Court","ShipName":"Ledner, Nitzsche and Sanford","OrderDate":"7/2/2016","TotalPayment":"$317206.62","Status":4,"Type":2},{"OrderID":"44523-415","ShipCountry":"CR","ShipAddress":"7 Harbort Alley","ShipName":"Block, Powlowski and Moore","OrderDate":"5/19/2017","TotalPayment":"$215212.50","Status":2,"Type":2},{"OrderID":"46122-182","ShipCountry":"CM","ShipAddress":"371 Farragut Pass","ShipName":"Orn, Jakubowski and Smitham","OrderDate":"3/31/2017","TotalPayment":"$755893.16","Status":1,"Type":3},{"OrderID":"65044-0843","ShipCountry":"MX","ShipAddress":"66 High Crossing Street","ShipName":"Walker, Huels and Smitham","OrderDate":"3/18/2016","TotalPayment":"$614528.33","Status":6,"Type":2},{"OrderID":"11822-0471","ShipCountry":"VE","ShipAddress":"6 Bultman Circle","ShipName":"Connelly-Schuster","OrderDate":"5/1/2016","TotalPayment":"$51542.85","Status":4,"Type":2},{"OrderID":"36987-3319","ShipCountry":"HT","ShipAddress":"10 Eggendart Drive","ShipName":"Flatley-Howe","OrderDate":"2/28/2017","TotalPayment":"$1150160.58","Status":2,"Type":1},{"OrderID":"54868-2817","ShipCountry":"ID","ShipAddress":"1 Bultman Court","ShipName":"Heaney-Hermiston","OrderDate":"12/19/2017","TotalPayment":"$465175.00","Status":4,"Type":1}]},\n' +
        '{"RecordID":164,"FirstName":"Nevile","LastName":"Goodbanne","Company":"Twitterbeat","Email":"ngoodbanne4j@yolasite.com","Phone":"352-110-5536","Status":4,"Type":2,"Orders":[{"OrderID":"0904-5806","ShipCountry":"PL","ShipAddress":"962 Meadow Vale Court","ShipName":"Lakin Inc","OrderDate":"2/20/2016","TotalPayment":"$462719.36","Status":4,"Type":2},{"OrderID":"53329-822","ShipCountry":"ID","ShipAddress":"53 Steensland Road","ShipName":"Hermiston, Cassin and Adams","OrderDate":"1/16/2017","TotalPayment":"$314828.42","Status":5,"Type":1},{"OrderID":"48951-3054","ShipCountry":"CN","ShipAddress":"6098 Sycamore Parkway","ShipName":"Koepp-Parker","OrderDate":"10/23/2016","TotalPayment":"$864468.79","Status":2,"Type":1},{"OrderID":"52584-039","ShipCountry":"US","ShipAddress":"629 Boyd Drive","ShipName":"Miller and Sons","OrderDate":"5/30/2017","TotalPayment":"$988478.15","Status":3,"Type":3},{"OrderID":"0440-7465","ShipCountry":"AL","ShipAddress":"967 John Wall Trail","ShipName":"Mosciski and Sons","OrderDate":"3/7/2016","TotalPayment":"$918699.01","Status":6,"Type":2},{"OrderID":"24385-623","ShipCountry":"FR","ShipAddress":"6178 Forest Parkway","ShipName":"Fisher LLC","OrderDate":"1/5/2016","TotalPayment":"$794768.49","Status":1,"Type":2},{"OrderID":"54575-121","ShipCountry":"CN","ShipAddress":"49 Daystar Lane","ShipName":"Bogan, Purdy and Stanton","OrderDate":"10/7/2017","TotalPayment":"$702999.42","Status":3,"Type":3},{"OrderID":"53808-0345","ShipCountry":"DO","ShipAddress":"76997 Marquette Place","ShipName":"Turcotte and Sons","OrderDate":"3/13/2016","TotalPayment":"$84059.25","Status":2,"Type":3},{"OrderID":"52731-7004","ShipCountry":"NI","ShipAddress":"8 Straubel Drive","ShipName":"Thompson, Murazik and Stroman","OrderDate":"4/28/2017","TotalPayment":"$503330.45","Status":5,"Type":3}]},\n' +
        '{"RecordID":165,"FirstName":"Allyson","LastName":"Hansley","Company":"Realfire","Email":"ahansley4k@i2i.jp","Phone":"149-570-3990","Status":5,"Type":2,"Orders":[{"OrderID":"49035-516","ShipCountry":"KH","ShipAddress":"69 Pankratz Hill","ShipName":"Spinka-Denesik","OrderDate":"10/13/2017","TotalPayment":"$842807.00","Status":3,"Type":1},{"OrderID":"54868-3230","ShipCountry":"CN","ShipAddress":"5 Kenwood Pass","ShipName":"Lang, Schmidt and Jast","OrderDate":"12/30/2017","TotalPayment":"$367788.28","Status":2,"Type":1},{"OrderID":"0527-1383","ShipCountry":"CN","ShipAddress":"1 Westridge Avenue","ShipName":"Senger and Sons","OrderDate":"4/1/2016","TotalPayment":"$588778.81","Status":1,"Type":2},{"OrderID":"57297-201","ShipCountry":"CN","ShipAddress":"1175 Hazelcrest Crossing","ShipName":"Cummerata Group","OrderDate":"10/9/2016","TotalPayment":"$921101.32","Status":2,"Type":3},{"OrderID":"64525-0560","ShipCountry":"ID","ShipAddress":"397 West Parkway","ShipName":"Howell, Kertzmann and Goyette","OrderDate":"4/2/2016","TotalPayment":"$287502.46","Status":6,"Type":3},{"OrderID":"0179-0015","ShipCountry":"CN","ShipAddress":"86244 Talmadge Road","ShipName":"Conroy LLC","OrderDate":"4/7/2016","TotalPayment":"$915611.80","Status":1,"Type":2},{"OrderID":"76354-001","ShipCountry":"AR","ShipAddress":"72684 Packers Way","ShipName":"Gaylord-Bartell","OrderDate":"7/24/2016","TotalPayment":"$785020.16","Status":2,"Type":3},{"OrderID":"0555-0808","ShipCountry":"RU","ShipAddress":"80141 Mariners Cove Avenue","ShipName":"Frami-Boehm","OrderDate":"3/31/2017","TotalPayment":"$1158102.08","Status":6,"Type":3}]},\n' +
        '{"RecordID":166,"FirstName":"Nari","LastName":"Kehri","Company":"Youbridge","Email":"nkehri4l@ehow.com","Phone":"262-783-8457","Status":3,"Type":3,"Orders":[{"OrderID":"50666-009","ShipCountry":"MA","ShipAddress":"316 Tennessee Road","ShipName":"Konopelski Group","OrderDate":"7/3/2017","TotalPayment":"$359573.69","Status":2,"Type":1},{"OrderID":"10078-001","ShipCountry":"PT","ShipAddress":"9484 Muir Trail","ShipName":"Gleason, Erdman and McKenzie","OrderDate":"11/5/2017","TotalPayment":"$1027913.81","Status":4,"Type":1},{"OrderID":"49738-210","ShipCountry":"CN","ShipAddress":"1 Bluestem Plaza","ShipName":"Balistreri, Wyman and Kautzer","OrderDate":"9/7/2017","TotalPayment":"$621839.76","Status":1,"Type":3},{"OrderID":"0069-0468","ShipCountry":"SE","ShipAddress":"96205 American Ash Junction","ShipName":"Frami Group","OrderDate":"5/5/2017","TotalPayment":"$662462.49","Status":3,"Type":2},{"OrderID":"36987-2758","ShipCountry":"PH","ShipAddress":"1 Swallow Road","ShipName":"Feest-Bailey","OrderDate":"3/8/2017","TotalPayment":"$558521.38","Status":3,"Type":1},{"OrderID":"0078-0385","ShipCountry":"SE","ShipAddress":"92 Tennessee Pass","ShipName":"Rogahn, Cummings and Bernier","OrderDate":"12/15/2016","TotalPayment":"$608382.40","Status":6,"Type":1},{"OrderID":"56062-160","ShipCountry":"ID","ShipAddress":"09224 Loftsgordon Court","ShipName":"Lebsack-Donnelly","OrderDate":"9/2/2017","TotalPayment":"$1140093.15","Status":4,"Type":3},{"OrderID":"44911-0075","ShipCountry":"MY","ShipAddress":"602 Southridge Point","ShipName":"Thiel, Raynor and Bode","OrderDate":"9/30/2016","TotalPayment":"$628333.36","Status":2,"Type":1},{"OrderID":"55651-028","ShipCountry":"RU","ShipAddress":"1 Novick Place","ShipName":"Monahan, O\'Conner and O\'Reilly","OrderDate":"12/6/2016","TotalPayment":"$15847.09","Status":5,"Type":3},{"OrderID":"0068-0011","ShipCountry":"CN","ShipAddress":"1603 Esker Point","ShipName":"Goldner, Rippin and Cartwright","OrderDate":"1/24/2017","TotalPayment":"$279123.50","Status":5,"Type":3},{"OrderID":"43857-0149","ShipCountry":"ID","ShipAddress":"33 Hoard Circle","ShipName":"Koepp, Dicki and Kreiger","OrderDate":"4/16/2016","TotalPayment":"$156152.69","Status":5,"Type":3},{"OrderID":"49738-372","ShipCountry":"NO","ShipAddress":"251 Maywood Street","ShipName":"VonRueden, Mraz and Conn","OrderDate":"7/23/2016","TotalPayment":"$1109575.85","Status":3,"Type":3},{"OrderID":"0032-1708","ShipCountry":"ID","ShipAddress":"30 Jenna Way","ShipName":"Gottlieb, Little and Johns","OrderDate":"12/8/2017","TotalPayment":"$729797.50","Status":5,"Type":3},{"OrderID":"46122-181","ShipCountry":"RS","ShipAddress":"86 Dahle Place","ShipName":"Wehner and Sons","OrderDate":"10/16/2016","TotalPayment":"$283193.93","Status":2,"Type":3},{"OrderID":"24987-435","ShipCountry":"CA","ShipAddress":"57 Village Road","ShipName":"Johnston, Denesik and O\'Connell","OrderDate":"1/14/2017","TotalPayment":"$573257.82","Status":5,"Type":2},{"OrderID":"65113-2373","ShipCountry":"ID","ShipAddress":"7 Corscot Hill","ShipName":"Hettinger, Hodkiewicz and Purdy","OrderDate":"7/2/2017","TotalPayment":"$766973.49","Status":3,"Type":3},{"OrderID":"55319-341","ShipCountry":"CZ","ShipAddress":"2570 Donald Place","ShipName":"Powlowski and Sons","OrderDate":"10/20/2017","TotalPayment":"$1059986.78","Status":1,"Type":2},{"OrderID":"0378-0215","ShipCountry":"MX","ShipAddress":"36 Russell Junction","ShipName":"Glover Group","OrderDate":"12/16/2016","TotalPayment":"$686632.91","Status":2,"Type":1}]},\n' +
        '{"RecordID":167,"FirstName":"Chickie","LastName":"Waulker","Company":"Trudeo","Email":"cwaulker4m@harvard.edu","Phone":"604-747-5710","Status":1,"Type":1,"Orders":[{"OrderID":"50580-198","ShipCountry":"CN","ShipAddress":"72 Texas Hill","ShipName":"Parker, Farrell and Hilpert","OrderDate":"9/18/2016","TotalPayment":"$170627.02","Status":6,"Type":3},{"OrderID":"54973-3114","ShipCountry":"CA","ShipAddress":"88 Pierstorff Center","ShipName":"Bahringer, King and Casper","OrderDate":"9/7/2017","TotalPayment":"$752875.53","Status":2,"Type":1},{"OrderID":"49897-160","ShipCountry":"PT","ShipAddress":"7 Coolidge Street","ShipName":"Gottlieb, Daugherty and Von","OrderDate":"4/23/2017","TotalPayment":"$981942.07","Status":5,"Type":2},{"OrderID":"50436-6579","ShipCountry":"AZ","ShipAddress":"48413 Mallory Park","ShipName":"Funk-Wisozk","OrderDate":"3/16/2017","TotalPayment":"$1137530.44","Status":1,"Type":3},{"OrderID":"17630-2002","ShipCountry":"BA","ShipAddress":"8 Moose Place","ShipName":"Satterfield Inc","OrderDate":"8/27/2017","TotalPayment":"$1114487.32","Status":6,"Type":2},{"OrderID":"0517-0132","ShipCountry":"ID","ShipAddress":"060 Reinke Trail","ShipName":"Daniel Inc","OrderDate":"5/20/2016","TotalPayment":"$222095.28","Status":3,"Type":1},{"OrderID":"62584-747","ShipCountry":"AR","ShipAddress":"6350 Longview Plaza","ShipName":"Ebert-Runolfsson","OrderDate":"3/11/2016","TotalPayment":"$498777.40","Status":5,"Type":2},{"OrderID":"55910-105","ShipCountry":"PL","ShipAddress":"11872 Orin Alley","ShipName":"Davis LLC","OrderDate":"7/14/2017","TotalPayment":"$351937.58","Status":3,"Type":1},{"OrderID":"61543-2285","ShipCountry":"US","ShipAddress":"02070 Aberg Park","ShipName":"Zboncak Inc","OrderDate":"6/10/2017","TotalPayment":"$1013232.84","Status":4,"Type":2},{"OrderID":"59762-0047","ShipCountry":"PH","ShipAddress":"88498 Division Plaza","ShipName":"Bernier, Hettinger and Bogan","OrderDate":"12/20/2017","TotalPayment":"$522271.08","Status":2,"Type":2},{"OrderID":"68703-116","ShipCountry":"VE","ShipAddress":"0 Acker Avenue","ShipName":"Watsica, Marquardt and Roob","OrderDate":"8/14/2016","TotalPayment":"$1037635.67","Status":3,"Type":1},{"OrderID":"35356-050","ShipCountry":"BR","ShipAddress":"8 Brickson Park Trail","ShipName":"Streich-Balistreri","OrderDate":"11/16/2016","TotalPayment":"$155850.02","Status":1,"Type":2},{"OrderID":"68968-6625","ShipCountry":"ID","ShipAddress":"94766 Mayfield Circle","ShipName":"Oberbrunner Group","OrderDate":"5/6/2017","TotalPayment":"$212860.39","Status":2,"Type":2},{"OrderID":"0006-0711","ShipCountry":"GT","ShipAddress":"4557 Gulseth Trail","ShipName":"Gleichner, Ratke and Crist","OrderDate":"9/16/2016","TotalPayment":"$1052041.03","Status":1,"Type":2},{"OrderID":"55154-2058","ShipCountry":"RU","ShipAddress":"009 Mayfield Drive","ShipName":"Jenkins-Murray","OrderDate":"4/11/2016","TotalPayment":"$618296.50","Status":1,"Type":2},{"OrderID":"43857-0246","ShipCountry":"ID","ShipAddress":"896 Independence Center","ShipName":"Collins Inc","OrderDate":"12/6/2017","TotalPayment":"$478480.50","Status":2,"Type":3},{"OrderID":"55714-4485","ShipCountry":"BD","ShipAddress":"572 Lunder Hill","ShipName":"Schmidt-Kozey","OrderDate":"10/7/2017","TotalPayment":"$835269.81","Status":3,"Type":3}]},\n' +
        '{"RecordID":168,"FirstName":"Emilie","LastName":"Cornall","Company":"Kwinu","Email":"ecornall4n@bloomberg.com","Phone":"880-221-7943","Status":6,"Type":2,"Orders":[{"OrderID":"0224-1801","ShipCountry":"CN","ShipAddress":"5840 Coolidge Hill","ShipName":"Larson, O\'Connell and Swaniawski","OrderDate":"2/25/2016","TotalPayment":"$94068.20","Status":1,"Type":1},{"OrderID":"68682-370","ShipCountry":"RU","ShipAddress":"9 Graceland Center","ShipName":"Runolfsson LLC","OrderDate":"9/23/2016","TotalPayment":"$286740.72","Status":5,"Type":2},{"OrderID":"36987-1337","ShipCountry":"BO","ShipAddress":"7 Myrtle Hill","ShipName":"Kassulke-Kessler","OrderDate":"5/11/2016","TotalPayment":"$731389.69","Status":2,"Type":3},{"OrderID":"16590-659","ShipCountry":"CN","ShipAddress":"0401 Iowa Junction","ShipName":"Ernser-Dare","OrderDate":"6/28/2017","TotalPayment":"$1198633.68","Status":4,"Type":1},{"OrderID":"58406-455","ShipCountry":"RU","ShipAddress":"39098 Carberry Circle","ShipName":"O\'Conner-Walsh","OrderDate":"2/1/2016","TotalPayment":"$899693.10","Status":4,"Type":1},{"OrderID":"51346-227","ShipCountry":"PH","ShipAddress":"65450 Meadow Vale Trail","ShipName":"Eichmann-Hagenes","OrderDate":"6/13/2017","TotalPayment":"$621045.95","Status":1,"Type":2},{"OrderID":"0378-3131","ShipCountry":"IQ","ShipAddress":"07655 Talmadge Point","ShipName":"Mayer, Gutmann and Conroy","OrderDate":"2/2/2017","TotalPayment":"$1040441.87","Status":6,"Type":2},{"OrderID":"11559-021","ShipCountry":"CN","ShipAddress":"28 Morning Hill","ShipName":"Halvorson-Mueller","OrderDate":"9/22/2016","TotalPayment":"$802737.68","Status":1,"Type":3}]},\n' +
        '{"RecordID":169,"FirstName":"Ines","LastName":"Perrin","Company":"Eazzy","Email":"iperrin4o@census.gov","Phone":"657-453-0202","Status":6,"Type":1,"Orders":[{"OrderID":"41167-4131","ShipCountry":"PL","ShipAddress":"73 Westport Hill","ShipName":"Blick, Gislason and Hoeger","OrderDate":"8/25/2017","TotalPayment":"$446772.45","Status":1,"Type":1},{"OrderID":"49349-096","ShipCountry":"FR","ShipAddress":"2914 Graceland Circle","ShipName":"Ortiz Inc","OrderDate":"1/7/2016","TotalPayment":"$767245.71","Status":2,"Type":1},{"OrderID":"52533-005","ShipCountry":"SY","ShipAddress":"1 Tomscot Court","ShipName":"Hoeger-Zemlak","OrderDate":"10/13/2016","TotalPayment":"$1030940.40","Status":5,"Type":1},{"OrderID":"50730-8204","ShipCountry":"GB","ShipAddress":"6546 Roth Parkway","ShipName":"Kling-Koss","OrderDate":"8/23/2016","TotalPayment":"$282596.70","Status":5,"Type":3},{"OrderID":"0051-0023","ShipCountry":"ID","ShipAddress":"77 Armistice Lane","ShipName":"Lueilwitz-Towne","OrderDate":"7/5/2016","TotalPayment":"$347616.00","Status":4,"Type":1},{"OrderID":"44009-801","ShipCountry":"FR","ShipAddress":"5250 Spohn Place","ShipName":"Russel, Wuckert and White","OrderDate":"3/19/2016","TotalPayment":"$192741.96","Status":5,"Type":3},{"OrderID":"68180-722","ShipCountry":"SI","ShipAddress":"02022 Oxford Place","ShipName":"Yost-Metz","OrderDate":"2/10/2016","TotalPayment":"$879278.77","Status":2,"Type":3},{"OrderID":"13537-423","ShipCountry":"GH","ShipAddress":"48440 Maple Wood Parkway","ShipName":"Oberbrunner-Halvorson","OrderDate":"3/20/2016","TotalPayment":"$534092.54","Status":6,"Type":1},{"OrderID":"36987-1444","ShipCountry":"CN","ShipAddress":"68 Old Gate Crossing","ShipName":"Zboncak and Sons","OrderDate":"1/3/2017","TotalPayment":"$1179692.75","Status":2,"Type":2},{"OrderID":"55154-1347","ShipCountry":"CN","ShipAddress":"79 Magdeline Avenue","ShipName":"Macejkovic and Sons","OrderDate":"6/30/2016","TotalPayment":"$389251.26","Status":3,"Type":2},{"OrderID":"57691-110","ShipCountry":"ID","ShipAddress":"31 Gulseth Pass","ShipName":"Keeling-Veum","OrderDate":"7/9/2017","TotalPayment":"$89418.52","Status":4,"Type":1},{"OrderID":"62211-338","ShipCountry":"PL","ShipAddress":"1 Donald Park","ShipName":"Ortiz-Bruen","OrderDate":"12/13/2017","TotalPayment":"$756326.18","Status":4,"Type":3},{"OrderID":"42291-655","ShipCountry":"CN","ShipAddress":"94927 Bashford Hill","ShipName":"Aufderhar and Sons","OrderDate":"8/3/2017","TotalPayment":"$872891.74","Status":6,"Type":3},{"OrderID":"21130-556","ShipCountry":"GR","ShipAddress":"5712 Swallow Junction","ShipName":"Lueilwitz Group","OrderDate":"4/12/2016","TotalPayment":"$42766.15","Status":2,"Type":2},{"OrderID":"63830-221","ShipCountry":"CN","ShipAddress":"42366 Division Place","ShipName":"Brakus, McCullough and Brakus","OrderDate":"6/14/2017","TotalPayment":"$385273.00","Status":6,"Type":3},{"OrderID":"57520-0528","ShipCountry":"ZA","ShipAddress":"088 Carberry Place","ShipName":"Torp Group","OrderDate":"1/11/2017","TotalPayment":"$356929.21","Status":5,"Type":1}]},\n' +
        '{"RecordID":170,"FirstName":"Andras","LastName":"Bunn","Company":"Topdrive","Email":"abunn4p@exblog.jp","Phone":"109-143-1017","Status":2,"Type":3,"Orders":[{"OrderID":"11559-769","ShipCountry":"CN","ShipAddress":"2 Mallory Crossing","ShipName":"Hand-Hills","OrderDate":"8/18/2016","TotalPayment":"$50424.46","Status":3,"Type":2},{"OrderID":"0173-0478","ShipCountry":"RU","ShipAddress":"126 Lakeland Way","ShipName":"Walsh, Boyer and Eichmann","OrderDate":"2/8/2016","TotalPayment":"$338335.60","Status":6,"Type":1},{"OrderID":"0113-0578","ShipCountry":"PL","ShipAddress":"046 Browning Pass","ShipName":"Leannon-Haley","OrderDate":"7/26/2016","TotalPayment":"$158095.36","Status":6,"Type":2},{"OrderID":"36987-2396","ShipCountry":"CN","ShipAddress":"18 Mcbride Park","ShipName":"Hoeger, Spencer and Ryan","OrderDate":"7/25/2017","TotalPayment":"$1024111.07","Status":1,"Type":1},{"OrderID":"54868-4126","ShipCountry":"BR","ShipAddress":"8 Eastwood Court","ShipName":"Langworth, Gerhold and Kessler","OrderDate":"2/20/2017","TotalPayment":"$415616.18","Status":5,"Type":1},{"OrderID":"50730-8744","ShipCountry":"SI","ShipAddress":"25 Bunting Hill","ShipName":"Tremblay, Feil and Krajcik","OrderDate":"8/7/2016","TotalPayment":"$384724.70","Status":4,"Type":2},{"OrderID":"59115-044","ShipCountry":"ID","ShipAddress":"59 Straubel Point","ShipName":"Sawayn-Jaskolski","OrderDate":"4/15/2016","TotalPayment":"$36235.31","Status":4,"Type":2},{"OrderID":"0781-1496","ShipCountry":"ID","ShipAddress":"5 Pleasure Drive","ShipName":"Jakubowski, Deckow and Carroll","OrderDate":"4/24/2017","TotalPayment":"$1040711.02","Status":3,"Type":1},{"OrderID":"52125-099","ShipCountry":"RU","ShipAddress":"96327 Milwaukee Park","ShipName":"Koch-Durgan","OrderDate":"9/6/2017","TotalPayment":"$649409.15","Status":2,"Type":1},{"OrderID":"98132-176","ShipCountry":"ID","ShipAddress":"715 Burning Wood Pass","ShipName":"Schultz and Sons","OrderDate":"12/31/2016","TotalPayment":"$369723.81","Status":1,"Type":1},{"OrderID":"21695-662","ShipCountry":"AL","ShipAddress":"3136 Algoma Point","ShipName":"Ratke Group","OrderDate":"7/14/2016","TotalPayment":"$682917.61","Status":5,"Type":3},{"OrderID":"60760-141","ShipCountry":"IR","ShipAddress":"1 Mcbride Parkway","ShipName":"Lueilwitz-Homenick","OrderDate":"7/19/2016","TotalPayment":"$984551.60","Status":1,"Type":2},{"OrderID":"10454-712","ShipCountry":"CN","ShipAddress":"46981 Moland Point","ShipName":"Jacobson, O\'Connell and Farrell","OrderDate":"1/22/2016","TotalPayment":"$210831.37","Status":3,"Type":3},{"OrderID":"68788-9500","ShipCountry":"US","ShipAddress":"22 Luster Parkway","ShipName":"Keeling Group","OrderDate":"10/14/2017","TotalPayment":"$360797.72","Status":3,"Type":1},{"OrderID":"65044-2622","ShipCountry":"NG","ShipAddress":"3294 Dayton Terrace","ShipName":"Spencer Inc","OrderDate":"4/25/2016","TotalPayment":"$427552.81","Status":1,"Type":2},{"OrderID":"64942-1114","ShipCountry":"CN","ShipAddress":"293 Clarendon Drive","ShipName":"Hammes, Kirlin and Hyatt","OrderDate":"5/7/2016","TotalPayment":"$1195316.37","Status":3,"Type":1},{"OrderID":"76439-260","ShipCountry":"CZ","ShipAddress":"427 Nancy Hill","ShipName":"Koch LLC","OrderDate":"1/13/2016","TotalPayment":"$271708.15","Status":2,"Type":3},{"OrderID":"59779-216","ShipCountry":"CA","ShipAddress":"95 Lakewood Gardens Avenue","ShipName":"Upton-Cummings","OrderDate":"4/25/2016","TotalPayment":"$450732.04","Status":6,"Type":3},{"OrderID":"49349-276","ShipCountry":"JP","ShipAddress":"8062 Dahle Avenue","ShipName":"Stark LLC","OrderDate":"5/12/2017","TotalPayment":"$497994.65","Status":3,"Type":3},{"OrderID":"63629-1263","ShipCountry":"TH","ShipAddress":"73140 Fordem Road","ShipName":"Haley Inc","OrderDate":"2/9/2017","TotalPayment":"$307355.83","Status":6,"Type":2}]},\n' +
        '{"RecordID":171,"FirstName":"Morse","LastName":"Chappelle","Company":"Browsebug","Email":"mchappelle4q@amazonaws.com","Phone":"349-963-7857","Status":2,"Type":3,"Orders":[{"OrderID":"51389-252","ShipCountry":"ID","ShipAddress":"7492 David Junction","ShipName":"Heaney, Mitchell and Muller","OrderDate":"5/19/2016","TotalPayment":"$293902.08","Status":2,"Type":3},{"OrderID":"13734-132","ShipCountry":"CN","ShipAddress":"43 Sutherland Circle","ShipName":"Thompson-Beahan","OrderDate":"1/12/2016","TotalPayment":"$1027999.97","Status":4,"Type":1},{"OrderID":"0378-5425","ShipCountry":"VE","ShipAddress":"1697 Hermina Park","ShipName":"Langworth LLC","OrderDate":"9/17/2016","TotalPayment":"$724689.47","Status":5,"Type":1},{"OrderID":"16590-659","ShipCountry":"FM","ShipAddress":"0 Karstens Street","ShipName":"Ledner LLC","OrderDate":"11/5/2017","TotalPayment":"$1100721.16","Status":2,"Type":3},{"OrderID":"0615-7709","ShipCountry":"ID","ShipAddress":"43 Buell Point","ShipName":"Bayer, Upton and Schulist","OrderDate":"1/9/2017","TotalPayment":"$167476.49","Status":1,"Type":1},{"OrderID":"55714-4551","ShipCountry":"CN","ShipAddress":"8171 Fremont Center","ShipName":"Abbott-Upton","OrderDate":"1/3/2016","TotalPayment":"$426569.72","Status":3,"Type":3},{"OrderID":"37012-470","ShipCountry":"CN","ShipAddress":"171 Carey Junction","ShipName":"Kshlerin-Gislason","OrderDate":"2/18/2016","TotalPayment":"$581328.46","Status":4,"Type":2},{"OrderID":"11673-245","ShipCountry":"PE","ShipAddress":"3 Eggendart Place","ShipName":"Kihn LLC","OrderDate":"9/15/2017","TotalPayment":"$895300.98","Status":1,"Type":1},{"OrderID":"36000-064","ShipCountry":"ID","ShipAddress":"542 Park Meadow Trail","ShipName":"Watsica, O\'Conner and Wolf","OrderDate":"3/23/2016","TotalPayment":"$149028.00","Status":5,"Type":2},{"OrderID":"0409-1782","ShipCountry":"HR","ShipAddress":"90 Victoria Avenue","ShipName":"Muller and Sons","OrderDate":"6/22/2017","TotalPayment":"$1147703.99","Status":5,"Type":2},{"OrderID":"60505-3723","ShipCountry":"ID","ShipAddress":"2622 Ridgeview Alley","ShipName":"Leuschke, Renner and King","OrderDate":"6/11/2016","TotalPayment":"$827938.64","Status":2,"Type":2}]},\n' +
        '{"RecordID":172,"FirstName":"Son","LastName":"Leopold","Company":"Mybuzz","Email":"sleopold4r@istockphoto.com","Phone":"861-380-7717","Status":4,"Type":1,"Orders":[{"OrderID":"55111-688","ShipCountry":"MD","ShipAddress":"0027 Macpherson Way","ShipName":"Conn-Trantow","OrderDate":"5/16/2016","TotalPayment":"$718633.19","Status":3,"Type":2},{"OrderID":"41250-090","ShipCountry":"BR","ShipAddress":"8 Bluejay Court","ShipName":"Herzog, Russel and Wuckert","OrderDate":"5/5/2017","TotalPayment":"$461605.92","Status":2,"Type":3},{"OrderID":"68330-001","ShipCountry":"AR","ShipAddress":"8045 Buell Way","ShipName":"Wiza Group","OrderDate":"6/4/2017","TotalPayment":"$51632.61","Status":5,"Type":1},{"OrderID":"11822-0416","ShipCountry":"ID","ShipAddress":"17306 Nevada Pass","ShipName":"Wiegand LLC","OrderDate":"12/18/2016","TotalPayment":"$1119947.34","Status":4,"Type":2},{"OrderID":"50332-0127","ShipCountry":"CN","ShipAddress":"918 Mendota Hill","ShipName":"Hane Group","OrderDate":"6/8/2017","TotalPayment":"$1030059.78","Status":1,"Type":2},{"OrderID":"43269-759","ShipCountry":"RU","ShipAddress":"06 Mifflin Alley","ShipName":"Johnson-Reichert","OrderDate":"4/24/2017","TotalPayment":"$626588.91","Status":2,"Type":1},{"OrderID":"0378-3422","ShipCountry":"PS","ShipAddress":"019 Gulseth Park","ShipName":"Kling LLC","OrderDate":"6/4/2016","TotalPayment":"$414907.81","Status":2,"Type":1},{"OrderID":"54868-3049","ShipCountry":"SL","ShipAddress":"50 La Follette Point","ShipName":"Schuster, Stamm and Kiehn","OrderDate":"6/28/2016","TotalPayment":"$1074568.16","Status":6,"Type":3},{"OrderID":"60681-1407","ShipCountry":"CN","ShipAddress":"1 Maywood Court","ShipName":"Haley Group","OrderDate":"6/23/2017","TotalPayment":"$389817.15","Status":5,"Type":1},{"OrderID":"49349-892","ShipCountry":"RU","ShipAddress":"081 Birchwood Court","ShipName":"Torphy and Sons","OrderDate":"10/18/2016","TotalPayment":"$863341.50","Status":3,"Type":2},{"OrderID":"10544-219","ShipCountry":"CI","ShipAddress":"816 Everett Park","ShipName":"Streich Inc","OrderDate":"10/28/2017","TotalPayment":"$850148.42","Status":2,"Type":1},{"OrderID":"55154-4622","ShipCountry":"CN","ShipAddress":"87 Green Point","ShipName":"Kautzer-Reynolds","OrderDate":"1/23/2016","TotalPayment":"$34839.56","Status":3,"Type":2},{"OrderID":"64169-001","ShipCountry":"CF","ShipAddress":"924 Paget Drive","ShipName":"Sporer-Boehm","OrderDate":"6/17/2017","TotalPayment":"$323272.13","Status":2,"Type":1},{"OrderID":"55289-007","ShipCountry":"CN","ShipAddress":"840 1st Park","ShipName":"Hyatt-Funk","OrderDate":"10/1/2016","TotalPayment":"$397260.29","Status":1,"Type":3},{"OrderID":"37808-455","ShipCountry":"MY","ShipAddress":"9 Northridge Road","ShipName":"Bergstrom, Gutmann and Gorczany","OrderDate":"1/23/2017","TotalPayment":"$33863.33","Status":3,"Type":3},{"OrderID":"58411-105","ShipCountry":"CV","ShipAddress":"16208 Derek Alley","ShipName":"Renner and Sons","OrderDate":"12/21/2016","TotalPayment":"$905307.17","Status":3,"Type":2},{"OrderID":"59779-190","ShipCountry":"AM","ShipAddress":"94 Buena Vista Center","ShipName":"Huel, Toy and O\'Conner","OrderDate":"11/26/2017","TotalPayment":"$582004.47","Status":5,"Type":1},{"OrderID":"65044-3596","ShipCountry":"CN","ShipAddress":"65 Troy Alley","ShipName":"Keeling LLC","OrderDate":"5/28/2016","TotalPayment":"$33410.70","Status":5,"Type":2}]},\n' +
        '{"RecordID":173,"FirstName":"Jimmie","LastName":"O\' Mahony","Company":"Tambee","Email":"jomahony4s@pbs.org","Phone":"359-797-4879","Status":5,"Type":3,"Orders":[{"OrderID":"49685-928","ShipCountry":"TT","ShipAddress":"66 International Park","ShipName":"Hoeger-Cremin","OrderDate":"11/6/2017","TotalPayment":"$1014109.67","Status":3,"Type":3},{"OrderID":"0904-6068","ShipCountry":"PH","ShipAddress":"83 Utah Plaza","ShipName":"Sporer Inc","OrderDate":"12/28/2017","TotalPayment":"$69215.93","Status":4,"Type":2},{"OrderID":"13734-125","ShipCountry":"ID","ShipAddress":"4 Larry Way","ShipName":"Sauer and Sons","OrderDate":"2/25/2016","TotalPayment":"$653446.03","Status":3,"Type":3},{"OrderID":"11673-145","ShipCountry":"GR","ShipAddress":"3 Express Junction","ShipName":"Buckridge-Zulauf","OrderDate":"2/2/2016","TotalPayment":"$554033.58","Status":1,"Type":3},{"OrderID":"0641-6142","ShipCountry":"ID","ShipAddress":"31 3rd Parkway","ShipName":"Jerde, Morissette and Fay","OrderDate":"11/26/2017","TotalPayment":"$543016.78","Status":5,"Type":1},{"OrderID":"0025-2752","ShipCountry":"PH","ShipAddress":"424 Golf Course Place","ShipName":"Schinner and Sons","OrderDate":"7/26/2016","TotalPayment":"$501435.49","Status":3,"Type":3},{"OrderID":"76049-877","ShipCountry":"CN","ShipAddress":"2054 Artisan Crossing","ShipName":"McCullough, Witting and Ortiz","OrderDate":"6/25/2017","TotalPayment":"$801187.22","Status":5,"Type":1},{"OrderID":"12634-943","ShipCountry":"RU","ShipAddress":"42 Eastlawn Place","ShipName":"Wilkinson, Padberg and Herzog","OrderDate":"12/31/2016","TotalPayment":"$97694.24","Status":5,"Type":1},{"OrderID":"36987-2182","ShipCountry":"BR","ShipAddress":"420 Dennis Parkway","ShipName":"Boyer-Kiehn","OrderDate":"7/27/2017","TotalPayment":"$85939.32","Status":1,"Type":3},{"OrderID":"63286-0134","ShipCountry":"CN","ShipAddress":"008 Summer Ridge Trail","ShipName":"Morissette, Marks and Mills","OrderDate":"8/15/2017","TotalPayment":"$345252.34","Status":3,"Type":3},{"OrderID":"0904-5354","ShipCountry":"TJ","ShipAddress":"83 Tennessee Park","ShipName":"Mayert, Casper and Thiel","OrderDate":"4/30/2017","TotalPayment":"$669209.27","Status":4,"Type":1},{"OrderID":"0009-0090","ShipCountry":"US","ShipAddress":"5 Montana Way","ShipName":"Grant-Hackett","OrderDate":"5/28/2017","TotalPayment":"$531761.29","Status":5,"Type":2},{"OrderID":"65974-163","ShipCountry":"IL","ShipAddress":"56628 Havey Hill","ShipName":"Zboncak Group","OrderDate":"7/22/2017","TotalPayment":"$1180652.03","Status":4,"Type":3},{"OrderID":"23155-201","ShipCountry":"ID","ShipAddress":"7 Huxley Place","ShipName":"Christiansen Group","OrderDate":"8/29/2016","TotalPayment":"$452179.59","Status":5,"Type":1},{"OrderID":"21695-740","ShipCountry":"RU","ShipAddress":"23184 Elgar Court","ShipName":"Bosco LLC","OrderDate":"11/2/2017","TotalPayment":"$708204.17","Status":1,"Type":1},{"OrderID":"63629-4719","ShipCountry":"FR","ShipAddress":"7602 Kingsford Place","ShipName":"Rippin-Zboncak","OrderDate":"3/15/2016","TotalPayment":"$54783.14","Status":5,"Type":2}]},\n' +
        '{"RecordID":174,"FirstName":"Paquito","LastName":"Culshew","Company":"Dabshots","Email":"pculshew4t@studiopress.com","Phone":"650-664-5023","Status":3,"Type":2,"Orders":[{"OrderID":"66336-238","ShipCountry":"CN","ShipAddress":"87 Bellgrove Place","ShipName":"Jacobs Inc","OrderDate":"12/9/2016","TotalPayment":"$971266.16","Status":4,"Type":2},{"OrderID":"56136-007","ShipCountry":"US","ShipAddress":"332 Basil Court","ShipName":"Ritchie and Sons","OrderDate":"1/23/2016","TotalPayment":"$246100.97","Status":1,"Type":3},{"OrderID":"10889-111","ShipCountry":"PT","ShipAddress":"967 Troy Parkway","ShipName":"Blanda-Schmeler","OrderDate":"9/23/2016","TotalPayment":"$750249.44","Status":4,"Type":3},{"OrderID":"0187-3758","ShipCountry":"ID","ShipAddress":"80859 Petterle Trail","ShipName":"Pouros, Kassulke and Muller","OrderDate":"7/19/2017","TotalPayment":"$471326.66","Status":2,"Type":1},{"OrderID":"46581-730","ShipCountry":"SE","ShipAddress":"2231 Mosinee Road","ShipName":"Hamill-Gutmann","OrderDate":"5/17/2017","TotalPayment":"$1010490.32","Status":5,"Type":3},{"OrderID":"0591-3770","ShipCountry":"PT","ShipAddress":"3 Pleasure Circle","ShipName":"Kertzmann and Sons","OrderDate":"8/2/2017","TotalPayment":"$351166.96","Status":4,"Type":2},{"OrderID":"49738-176","ShipCountry":"ID","ShipAddress":"8 Redwing Trail","ShipName":"Boyer-Prohaska","OrderDate":"7/7/2016","TotalPayment":"$618830.48","Status":2,"Type":1},{"OrderID":"54569-0289","ShipCountry":"CN","ShipAddress":"5 Sachs Avenue","ShipName":"Prohaska Inc","OrderDate":"9/11/2016","TotalPayment":"$22270.22","Status":5,"Type":3},{"OrderID":"0462-0277","ShipCountry":"GR","ShipAddress":"833 Dovetail Avenue","ShipName":"Yundt-Feest","OrderDate":"7/29/2016","TotalPayment":"$1073296.27","Status":5,"Type":3},{"OrderID":"24794-107","ShipCountry":"CN","ShipAddress":"77 Vahlen Hill","ShipName":"Bruen-Bergnaum","OrderDate":"7/13/2017","TotalPayment":"$186156.15","Status":5,"Type":3},{"OrderID":"30142-532","ShipCountry":"MX","ShipAddress":"3165 Northwestern Circle","ShipName":"Pacocha, Gislason and McLaughlin","OrderDate":"11/3/2016","TotalPayment":"$1031872.61","Status":3,"Type":3},{"OrderID":"66685-1012","ShipCountry":"RU","ShipAddress":"12791 Paget Terrace","ShipName":"Nicolas, Harber and Gislason","OrderDate":"6/8/2017","TotalPayment":"$181793.28","Status":4,"Type":2},{"OrderID":"32909-186","ShipCountry":"PL","ShipAddress":"17388 Anthes Center","ShipName":"Shields Inc","OrderDate":"11/27/2016","TotalPayment":"$931269.98","Status":5,"Type":2},{"OrderID":"0338-0125","ShipCountry":"AL","ShipAddress":"65840 Portage Lane","ShipName":"Koepp LLC","OrderDate":"1/14/2016","TotalPayment":"$110811.30","Status":6,"Type":1},{"OrderID":"44911-0065","ShipCountry":"JP","ShipAddress":"477 Stoughton Crossing","ShipName":"Rempel-Nader","OrderDate":"1/10/2016","TotalPayment":"$45942.92","Status":4,"Type":2},{"OrderID":"36987-1055","ShipCountry":"IR","ShipAddress":"371 Rieder Avenue","ShipName":"Dibbert Inc","OrderDate":"7/18/2017","TotalPayment":"$815541.11","Status":3,"Type":3},{"OrderID":"67510-0665","ShipCountry":"CN","ShipAddress":"4 Tennyson Road","ShipName":"Schaden LLC","OrderDate":"9/7/2017","TotalPayment":"$799690.89","Status":4,"Type":2},{"OrderID":"43063-012","ShipCountry":"LB","ShipAddress":"978 Northview Park","ShipName":"Marquardt, Considine and Toy","OrderDate":"3/28/2016","TotalPayment":"$1098157.59","Status":5,"Type":1},{"OrderID":"0591-3760","ShipCountry":"RU","ShipAddress":"7404 Arrowood Terrace","ShipName":"Brekke Inc","OrderDate":"12/22/2017","TotalPayment":"$727182.56","Status":4,"Type":2},{"OrderID":"43105-1000","ShipCountry":"CN","ShipAddress":"2571 Logan Park","ShipName":"Reinger Group","OrderDate":"4/10/2016","TotalPayment":"$261815.99","Status":3,"Type":3}]},\n' +
        '{"RecordID":175,"FirstName":"Susie","LastName":"Hammonds","Company":"Meezzy","Email":"shammonds4u@bandcamp.com","Phone":"870-264-6213","Status":6,"Type":2,"Orders":[{"OrderID":"11822-0499","ShipCountry":"RU","ShipAddress":"8314 Waubesa Lane","ShipName":"Little Group","OrderDate":"9/2/2017","TotalPayment":"$1141960.50","Status":5,"Type":1},{"OrderID":"68382-537","ShipCountry":"RU","ShipAddress":"54824 Redwing Avenue","ShipName":"Schroeder, Douglas and Rempel","OrderDate":"2/4/2017","TotalPayment":"$242880.12","Status":6,"Type":1},{"OrderID":"49288-0878","ShipCountry":"HU","ShipAddress":"153 Birchwood Trail","ShipName":"Cronin LLC","OrderDate":"5/14/2017","TotalPayment":"$1006286.96","Status":1,"Type":3},{"OrderID":"56062-422","ShipCountry":"PL","ShipAddress":"710 Tennyson Center","ShipName":"Kohler, Lakin and Kassulke","OrderDate":"8/26/2017","TotalPayment":"$38701.98","Status":2,"Type":1},{"OrderID":"50268-330","ShipCountry":"CN","ShipAddress":"53625 Twin Pines Street","ShipName":"Thompson-Lueilwitz","OrderDate":"1/1/2016","TotalPayment":"$298152.32","Status":3,"Type":1},{"OrderID":"68016-135","ShipCountry":"MT","ShipAddress":"59 Drewry Avenue","ShipName":"Pouros-Volkman","OrderDate":"4/8/2016","TotalPayment":"$207620.88","Status":4,"Type":1},{"OrderID":"0781-5311","ShipCountry":"ID","ShipAddress":"54 High Crossing Crossing","ShipName":"Marvin, Gottlieb and Daugherty","OrderDate":"7/29/2017","TotalPayment":"$1008707.62","Status":4,"Type":1},{"OrderID":"60505-0686","ShipCountry":"PH","ShipAddress":"181 Vera Pass","ShipName":"Koelpin-Schuppe","OrderDate":"8/30/2016","TotalPayment":"$615135.93","Status":6,"Type":3},{"OrderID":"17312-027","ShipCountry":"CD","ShipAddress":"3248 Montana Parkway","ShipName":"Grady-Ratke","OrderDate":"11/11/2017","TotalPayment":"$506793.39","Status":5,"Type":2},{"OrderID":"0641-6143","ShipCountry":"ID","ShipAddress":"86 Rigney Circle","ShipName":"Nolan, Cruickshank and Senger","OrderDate":"3/30/2016","TotalPayment":"$842592.10","Status":4,"Type":1},{"OrderID":"55301-370","ShipCountry":"AZ","ShipAddress":"3087 Myrtle Drive","ShipName":"Walsh, O\'Connell and Weber","OrderDate":"11/23/2017","TotalPayment":"$128976.50","Status":4,"Type":3},{"OrderID":"49288-0650","ShipCountry":"RU","ShipAddress":"660 Merrick Alley","ShipName":"Heidenreich-Wilkinson","OrderDate":"12/19/2017","TotalPayment":"$808851.09","Status":1,"Type":1},{"OrderID":"43857-0300","ShipCountry":"SE","ShipAddress":"262 Grasskamp Plaza","ShipName":"Jacobi-Boehm","OrderDate":"9/19/2016","TotalPayment":"$928229.29","Status":6,"Type":3},{"OrderID":"33261-817","ShipCountry":"ID","ShipAddress":"2562 Stoughton Parkway","ShipName":"Lakin-Hane","OrderDate":"5/31/2017","TotalPayment":"$892650.16","Status":6,"Type":1},{"OrderID":"52000-013","ShipCountry":"BR","ShipAddress":"85 Macpherson Street","ShipName":"Altenwerth Group","OrderDate":"8/25/2016","TotalPayment":"$619419.57","Status":5,"Type":2},{"OrderID":"17856-0067","ShipCountry":"US","ShipAddress":"83319 Almo Circle","ShipName":"Kuhn LLC","OrderDate":"11/17/2017","TotalPayment":"$39455.62","Status":6,"Type":1},{"OrderID":"14783-327","ShipCountry":"BF","ShipAddress":"62396 Nobel Circle","ShipName":"Ullrich-Lakin","OrderDate":"10/2/2017","TotalPayment":"$1092159.14","Status":2,"Type":2}]},\n' +
        '{"RecordID":176,"FirstName":"Allina","LastName":"Hoggin","Company":"Zoomcast","Email":"ahoggin4v@cbc.ca","Phone":"263-941-2673","Status":4,"Type":1,"Orders":[{"OrderID":"59779-991","ShipCountry":"BR","ShipAddress":"4511 Bunting Parkway","ShipName":"Hodkiewicz, Dicki and Ullrich","OrderDate":"7/15/2016","TotalPayment":"$844313.61","Status":3,"Type":1},{"OrderID":"49349-722","ShipCountry":"FR","ShipAddress":"1 Center Plaza","ShipName":"Barrows-Ryan","OrderDate":"11/15/2016","TotalPayment":"$634811.61","Status":4,"Type":1},{"OrderID":"68258-3998","ShipCountry":"TH","ShipAddress":"520 Schurz Terrace","ShipName":"Turcotte and Sons","OrderDate":"7/14/2017","TotalPayment":"$174215.94","Status":2,"Type":1},{"OrderID":"59779-932","ShipCountry":"AF","ShipAddress":"2 Schlimgen Park","ShipName":"Bashirian, Kuhn and Willms","OrderDate":"2/13/2017","TotalPayment":"$260788.46","Status":6,"Type":2},{"OrderID":"0069-0104","ShipCountry":"CO","ShipAddress":"0560 Coleman Road","ShipName":"Will and Sons","OrderDate":"5/1/2016","TotalPayment":"$177986.52","Status":6,"Type":2}]},\n' +
        '{"RecordID":177,"FirstName":"Arlie","LastName":"Lutman","Company":"Cogidoo","Email":"alutman4w@arizona.edu","Phone":"132-288-0971","Status":4,"Type":3,"Orders":[{"OrderID":"61314-646","ShipCountry":"ID","ShipAddress":"573 Center Road","ShipName":"Barrows-Monahan","OrderDate":"2/12/2016","TotalPayment":"$746065.12","Status":2,"Type":3},{"OrderID":"76436-202","ShipCountry":"IR","ShipAddress":"4 Holmberg Parkway","ShipName":"Veum, Berge and Mraz","OrderDate":"8/28/2016","TotalPayment":"$947968.60","Status":1,"Type":3},{"OrderID":"59316-104","ShipCountry":"AR","ShipAddress":"164 Lakewood Gardens Alley","ShipName":"Bernhard Group","OrderDate":"3/16/2016","TotalPayment":"$92454.05","Status":2,"Type":3},{"OrderID":"0113-0133","ShipCountry":"US","ShipAddress":"047 Portage Junction","ShipName":"Herman-Stark","OrderDate":"1/2/2016","TotalPayment":"$39757.89","Status":6,"Type":2},{"OrderID":"43742-0207","ShipCountry":"CN","ShipAddress":"45665 Blackbird Place","ShipName":"Schuster-Hessel","OrderDate":"8/20/2016","TotalPayment":"$987460.21","Status":4,"Type":1},{"OrderID":"36987-2158","ShipCountry":"PH","ShipAddress":"8 Carberry Crossing","ShipName":"Fritsch Group","OrderDate":"9/10/2017","TotalPayment":"$1170223.68","Status":3,"Type":1},{"OrderID":"68776-1003","ShipCountry":"BR","ShipAddress":"738 Carioca Crossing","ShipName":"Bartoletti and Sons","OrderDate":"1/8/2017","TotalPayment":"$70841.40","Status":4,"Type":2},{"OrderID":"64942-1350","ShipCountry":"PT","ShipAddress":"6 Dixon Avenue","ShipName":"Satterfield Inc","OrderDate":"12/25/2016","TotalPayment":"$1089213.28","Status":6,"Type":3},{"OrderID":"59779-936","ShipCountry":"PT","ShipAddress":"2 Dunning Place","ShipName":"Brekke, Wilkinson and Steuber","OrderDate":"2/12/2016","TotalPayment":"$945072.87","Status":2,"Type":3},{"OrderID":"61919-478","ShipCountry":"PH","ShipAddress":"3567 Parkside Terrace","ShipName":"Breitenberg-Beier","OrderDate":"4/18/2016","TotalPayment":"$331148.16","Status":2,"Type":3},{"OrderID":"64616-106","ShipCountry":"PH","ShipAddress":"98935 South Way","ShipName":"Pollich LLC","OrderDate":"3/8/2017","TotalPayment":"$617009.38","Status":4,"Type":3},{"OrderID":"68085-8012","ShipCountry":"IE","ShipAddress":"26 Pankratz Terrace","ShipName":"Bosco Inc","OrderDate":"6/29/2016","TotalPayment":"$234329.79","Status":5,"Type":2},{"OrderID":"36987-1982","ShipCountry":"IE","ShipAddress":"9384 Vahlen Avenue","ShipName":"Leannon Group","OrderDate":"4/30/2016","TotalPayment":"$572993.85","Status":3,"Type":2},{"OrderID":"60905-0021","ShipCountry":"CN","ShipAddress":"56620 Bashford Circle","ShipName":"Cummings-Dickinson","OrderDate":"12/17/2016","TotalPayment":"$64867.28","Status":1,"Type":3},{"OrderID":"30142-400","ShipCountry":"UG","ShipAddress":"25411 Fordem Park","ShipName":"Feest-Considine","OrderDate":"2/2/2017","TotalPayment":"$198988.68","Status":2,"Type":1},{"OrderID":"43353-032","ShipCountry":"UA","ShipAddress":"8745 Little Fleur Lane","ShipName":"Roob Group","OrderDate":"4/19/2017","TotalPayment":"$47531.36","Status":2,"Type":2},{"OrderID":"49288-0383","ShipCountry":"ID","ShipAddress":"824 Cambridge Point","ShipName":"Beier-Jakubowski","OrderDate":"6/19/2016","TotalPayment":"$1013812.00","Status":4,"Type":2}]},\n' +
        '{"RecordID":178,"FirstName":"Audie","LastName":"Anderbrugge","Company":"Yodo","Email":"aanderbrugge4x@ustream.tv","Phone":"729-903-0156","Status":6,"Type":3,"Orders":[{"OrderID":"42043-191","ShipCountry":"ET","ShipAddress":"56880 Vidon Place","ShipName":"Bashirian, Tromp and Emmerich","OrderDate":"9/30/2017","TotalPayment":"$785270.12","Status":1,"Type":2},{"OrderID":"50436-4165","ShipCountry":"RU","ShipAddress":"88 Oak Point","ShipName":"Bogan LLC","OrderDate":"2/7/2016","TotalPayment":"$564460.95","Status":5,"Type":2},{"OrderID":"57955-8325","ShipCountry":"AU","ShipAddress":"5 Fisk Crossing","ShipName":"Jast, Orn and McClure","OrderDate":"5/19/2017","TotalPayment":"$791278.10","Status":6,"Type":2},{"OrderID":"36987-2740","ShipCountry":"IR","ShipAddress":"07159 Pearson Center","ShipName":"Lemke, Goyette and Johns","OrderDate":"7/23/2017","TotalPayment":"$1025691.50","Status":1,"Type":3},{"OrderID":"42549-534","ShipCountry":"BA","ShipAddress":"8 Reinke Avenue","ShipName":"Parisian Group","OrderDate":"8/5/2016","TotalPayment":"$504209.84","Status":6,"Type":1},{"OrderID":"41163-182","ShipCountry":"DE","ShipAddress":"46 Corscot Hill","ShipName":"Maggio, Farrell and Conn","OrderDate":"11/29/2017","TotalPayment":"$574860.70","Status":1,"Type":2},{"OrderID":"16781-389","ShipCountry":"ET","ShipAddress":"806 Springview Center","ShipName":"Jakubowski-Hansen","OrderDate":"5/9/2016","TotalPayment":"$1021824.57","Status":1,"Type":2},{"OrderID":"63629-1609","ShipCountry":"MA","ShipAddress":"2 Merrick Lane","ShipName":"Weber, Nader and Abernathy","OrderDate":"3/11/2016","TotalPayment":"$1008036.37","Status":3,"Type":2},{"OrderID":"63941-159","ShipCountry":"FR","ShipAddress":"05 Spenser Park","ShipName":"Torp Group","OrderDate":"9/10/2017","TotalPayment":"$20737.54","Status":5,"Type":3}]},\n' +
        '{"RecordID":179,"FirstName":"Christopher","LastName":"Caddens","Company":"Blognation","Email":"ccaddens4y@addtoany.com","Phone":"792-722-7018","Status":6,"Type":1,"Orders":[{"OrderID":"55038-002","ShipCountry":"CD","ShipAddress":"21 Cottonwood Plaza","ShipName":"Boyle-Schmidt","OrderDate":"7/30/2017","TotalPayment":"$116771.62","Status":5,"Type":1},{"OrderID":"33261-829","ShipCountry":"CN","ShipAddress":"01 Marcy Place","ShipName":"Ratke and Sons","OrderDate":"11/6/2017","TotalPayment":"$381516.38","Status":2,"Type":3},{"OrderID":"55045-3848","ShipCountry":"TZ","ShipAddress":"4 Columbus Avenue","ShipName":"Kertzmann Group","OrderDate":"6/3/2016","TotalPayment":"$1060012.65","Status":6,"Type":1},{"OrderID":"42507-611","ShipCountry":"FR","ShipAddress":"06222 Jenna Court","ShipName":"Welch-Jacobs","OrderDate":"1/18/2017","TotalPayment":"$725141.40","Status":1,"Type":2},{"OrderID":"41163-411","ShipCountry":"AU","ShipAddress":"07 Village Way","ShipName":"Murazik and Sons","OrderDate":"10/23/2016","TotalPayment":"$1122169.68","Status":6,"Type":3},{"OrderID":"52125-765","ShipCountry":"CN","ShipAddress":"7698 Packers Park","ShipName":"Anderson Group","OrderDate":"9/30/2017","TotalPayment":"$625803.70","Status":5,"Type":1},{"OrderID":"0220-9313","ShipCountry":"RS","ShipAddress":"1 8th Road","ShipName":"Turner, Williamson and Schultz","OrderDate":"2/3/2017","TotalPayment":"$119429.94","Status":1,"Type":1},{"OrderID":"67510-0156","ShipCountry":"PH","ShipAddress":"309 Hoepker Trail","ShipName":"Hansen, Schultz and Lubowitz","OrderDate":"1/4/2017","TotalPayment":"$886719.32","Status":3,"Type":3},{"OrderID":"55138-011","ShipCountry":"PT","ShipAddress":"100 Talmadge Trail","ShipName":"Reilly Group","OrderDate":"10/7/2017","TotalPayment":"$58389.62","Status":5,"Type":2},{"OrderID":"62037-833","ShipCountry":"RU","ShipAddress":"4643 Independence Lane","ShipName":"Nolan LLC","OrderDate":"11/3/2017","TotalPayment":"$1094900.10","Status":5,"Type":3},{"OrderID":"42254-220","ShipCountry":"AR","ShipAddress":"754 Utah Avenue","ShipName":"Weber, Harris and Russel","OrderDate":"10/2/2016","TotalPayment":"$428627.56","Status":6,"Type":3},{"OrderID":"61722-041","ShipCountry":"GR","ShipAddress":"898 Straubel Terrace","ShipName":"Stark LLC","OrderDate":"2/19/2016","TotalPayment":"$866711.57","Status":1,"Type":1},{"OrderID":"50114-0114","ShipCountry":"CZ","ShipAddress":"29 Luster Point","ShipName":"Cummerata Inc","OrderDate":"4/27/2016","TotalPayment":"$609914.54","Status":4,"Type":3},{"OrderID":"63029-075","ShipCountry":"CN","ShipAddress":"88097 Butternut Circle","ShipName":"Bernhard Group","OrderDate":"3/14/2016","TotalPayment":"$740252.91","Status":3,"Type":1}]},\n' +
        '{"RecordID":180,"FirstName":"Lorie","LastName":"Glanton","Company":"Geba","Email":"lglanton4z@barnesandnoble.com","Phone":"468-393-7544","Status":6,"Type":3,"Orders":[{"OrderID":"13734-032","ShipCountry":"VN","ShipAddress":"05 6th Crossing","ShipName":"Vandervort-Terry","OrderDate":"1/14/2017","TotalPayment":"$592651.99","Status":4,"Type":1},{"OrderID":"61442-112","ShipCountry":"CN","ShipAddress":"600 Warner Plaza","ShipName":"Lynch Group","OrderDate":"10/16/2017","TotalPayment":"$549027.43","Status":4,"Type":1},{"OrderID":"0527-1354","ShipCountry":"PE","ShipAddress":"7 Sage Point","ShipName":"King, Leannon and Gerhold","OrderDate":"7/11/2017","TotalPayment":"$926169.45","Status":1,"Type":1},{"OrderID":"54973-3109","ShipCountry":"RU","ShipAddress":"36193 Duke Street","ShipName":"Nitzsche LLC","OrderDate":"11/14/2017","TotalPayment":"$787771.82","Status":2,"Type":1},{"OrderID":"24385-337","ShipCountry":"ID","ShipAddress":"378 Reinke Plaza","ShipName":"Robel-D\'Amore","OrderDate":"8/23/2017","TotalPayment":"$411639.39","Status":5,"Type":3},{"OrderID":"63868-939","ShipCountry":"CN","ShipAddress":"692 Crest Line Terrace","ShipName":"Sawayn LLC","OrderDate":"10/4/2016","TotalPayment":"$994330.30","Status":3,"Type":3}]},\n' +
        '{"RecordID":182,"FirstName":"Laina","LastName":"Hainey`","Company":"Flipopia","Email":"lhainey51@newsvine.com","Phone":"424-205-0737","Status":5,"Type":3,"Orders":[{"OrderID":"10893-240","ShipCountry":"PL","ShipAddress":"9 Toban Pass","ShipName":"Hirthe Group","OrderDate":"8/18/2017","TotalPayment":"$124558.20","Status":3,"Type":2},{"OrderID":"0378-3266","ShipCountry":"FR","ShipAddress":"80079 Sullivan Place","ShipName":"Muller LLC","OrderDate":"5/26/2016","TotalPayment":"$74559.20","Status":1,"Type":3},{"OrderID":"0944-4212","ShipCountry":"PH","ShipAddress":"51 Ruskin Avenue","ShipName":"Crist LLC","OrderDate":"11/1/2016","TotalPayment":"$993519.04","Status":4,"Type":1},{"OrderID":"33758-001","ShipCountry":"PS","ShipAddress":"6 New Castle Alley","ShipName":"Baumbach, Schmidt and Senger","OrderDate":"3/31/2017","TotalPayment":"$393304.45","Status":3,"Type":3},{"OrderID":"0113-0498","ShipCountry":"ID","ShipAddress":"274 Goodland Plaza","ShipName":"Cartwright Inc","OrderDate":"12/20/2016","TotalPayment":"$755262.80","Status":6,"Type":3}]},\n' +
        '{"RecordID":183,"FirstName":"Caldwell","LastName":"Naseby","Company":"Realfire","Email":"cnaseby52@thetimes.co.uk","Phone":"324-908-1039","Status":6,"Type":2,"Orders":[{"OrderID":"11673-808","ShipCountry":"RU","ShipAddress":"1083 John Wall Park","ShipName":"Leffler and Sons","OrderDate":"4/28/2016","TotalPayment":"$183608.19","Status":3,"Type":3},{"OrderID":"49349-566","ShipCountry":"AM","ShipAddress":"19 Coolidge Court","ShipName":"Schoen-Effertz","OrderDate":"6/5/2016","TotalPayment":"$476926.87","Status":3,"Type":2},{"OrderID":"64092-204","ShipCountry":"CU","ShipAddress":"720 Boyd Drive","ShipName":"Prosacco, Sipes and Hilpert","OrderDate":"12/22/2017","TotalPayment":"$859711.28","Status":5,"Type":2},{"OrderID":"20276-044","ShipCountry":"PH","ShipAddress":"430 La Follette Way","ShipName":"Huel-Koch","OrderDate":"2/19/2016","TotalPayment":"$1044147.12","Status":4,"Type":3},{"OrderID":"36800-423","ShipCountry":"BR","ShipAddress":"49 Northview Road","ShipName":"Howell-Dibbert","OrderDate":"10/16/2017","TotalPayment":"$598010.28","Status":4,"Type":1},{"OrderID":"54868-5343","ShipCountry":"MG","ShipAddress":"08806 Hoffman Court","ShipName":"Kerluke, Hermiston and Durgan","OrderDate":"12/30/2016","TotalPayment":"$1133973.74","Status":4,"Type":1},{"OrderID":"51393-7333","ShipCountry":"ID","ShipAddress":"5 Cardinal Terrace","ShipName":"Johnston and Sons","OrderDate":"4/11/2016","TotalPayment":"$836434.82","Status":2,"Type":3},{"OrderID":"52584-463","ShipCountry":"PL","ShipAddress":"110 Erie Terrace","ShipName":"Goyette, Lindgren and Wisoky","OrderDate":"12/4/2016","TotalPayment":"$564515.59","Status":5,"Type":3}]},\n' +

    var datatable = $('.m_datatable').mDatatable({
      // datasource definition
      data: {
        type: 'local',
        source: dataJSONArray,
        pageSize: 10, // display 20 records per page
      },

      // layout definition
      layout: {
        theme: 'default',
        scroll: false,
        height: null,
        footer: false,
      },

      sortable: true,

      filterable: false,

      pagination: true,

      detail: {
        title: 'Load sub table',
        content: subTableInit,
      },

      search: {
        input: $('#generalSearch'),
      },

      // columns definition
      columns: [
        {
          field: 'RecordID',
          title: '',
          sortable: false,
          width: 20,
          textAlign: 'center' // left|right|center,
        }, {
        }, {
					';