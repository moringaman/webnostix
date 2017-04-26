/**
 * index.js */
/*jslint browser: true */
/*global $, jQuery, alert*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /* define */

($(document).ready(function () {
    
    "use strict";
    
    var headerModule = {
        // Set initial variables & Call Module functions
        
        
        init: function () {
            this.sideClosed = true;
            this.shoNavList = true;
            this.cacheDom();
            this.bindEvents();
            this.toggleNav();
            this.shoLogo();
        },
        // Cache our mudules DOM elements 
        cacheDom: function () {
            this.$window = $(window);
            this.$element = $('#header');
            this.$sideBar = this.$element.find('#sidebar');
            this.$btnClose = this.$sideBar.find('#close-button');
            this.$navList = this.$element.find("ul.menu-list");
            this.$logoSection = this.$element.find('.logo');
            this.$logo = this.$logoSection.find('#logo');
            this.$menuToggle = this.$element.find('#menu-toggle');
            this.viewPort = this.$window.width();
        },
        // fade in WX logo
        shoLogo: function () {
            this.$logo.fadeTo(5000, 0.9);
        },
        // Module Event listeners
        bindEvents: function () {
            this.$window.on('resize', this.checkViewPort.bind(this));
            this.$menuToggle.on('click', this.toggleMenu.bind(this));
            this.$menuToggle.on('click', this.rotateAnimation.bind(this));
            this.$btnClose.on('click', this.toggleMenu.bind(this));
            this.$btnClose.on('click', this.rotateAnimation.bind(this));
        },
        checkViewPort: function () {
            this.viewPort = this.$window.width();
            console.log("screen width: " + this.viewPort);
            this.toggleNav(this.viewPort);
        },
        // Toggle the top Navlist dependent on viewport size;
        toggleNav: function (a) {
            if (this.viewPort < 667) {
                this.$navList.hide();
                this.shoNavList = false;
            } else {
                this.$navList.show();
                this.shoNavList = true;
            }
        },
       // toggle side bar menu
        toggleMenu: function () {
            this.$sideBar.toggle('slow');
            this.sideClosed = !this.sideClosed;
            if (this.viewPort < 450) {
                this.$logoSection.fadeToggle(1000);
            }
            console.log('toggle ' + this.$sideBar);
            if (this.shoNavList) {
                this.$navList.fadeToggle(2000);
    
            }
        },
        
        isBarClosed: function () {
            console.log(this.sideClosed);
            if (!this.sideClosed) {
                return 222;
            } else {
                return -222;
            }
        },
       
        rotateAnimation: function () {
            var btnClose = this.$btnClose;
            $({t: 0}).animate(
                {
                    t: this.isBarClosed()
                },
                {
                    duration: 1000,
                    step: function (now) {
                        btnClose.css('transform', 'rotate(' + now + 'deg)');
                    }
                }
            );
        }
    };
        
       
                   
                
    headerModule.init();
 
}));


