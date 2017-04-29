/**
 * index.js */
/*jslint browser: true */
/*global $ */

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
        toggleNav: function () {
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
        
       
    var navigationScroller = {
            
            init: function () {
                this.cacheDom();
                this.bindEvents();
            },
            cacheDom: function () {
                //cache menu links
                this.$element = headerModule.$element.find('#topNav');
                //console.log(this.$element);
                this.$list = this.$element.find('.menu-list');
                console.log(this.$list.length);
               // console.log(this.$list);
               // Iterate through ul and cache each child element
               
                var items = this.$list.find("li");
                console.log(items.length);
                for (var i = 0; i < items.length; ++i) {   
                console.log((items[i]).className);
                }
               
                this.$liHome = this.$list.find('li.home:first-child');
                this.$liAbout = this.$list.find('li.about:nth-child(2)');
                this.$liPortfolio = this.$list.find('li.portfolio:nth-child(3)');
                this.$lnkHome = this.$liHome.find("a");
                this.$lnkAbout =this.$liAbout.find("a");
               this.$lnkPortfolio = this.$liPortfolio.find("a");
               // this.$lnkHome = this.$element.find('#blog');
                //cache section divs
                this.$homeSection = $('#HomeSection');
            },
            
            bindEvents: function () {
                //link.on('click', this.scrollTo.bind(this, link));
                this.$lnkHome.on('click', this.scrollTo.bind(this, this.$lnkHome));
                this.$lnkAbout.on('click', this.scrollTo.bind(this, this.$lnkAbout));
                this.$lnkPortfolio.on('click', this.scrollTo.bind(this, this.$lnkPortfolio));
            },
        
            scrollTo: function (linkName) {
               
              var $section = '#' + linkName[0].innerHTML + 'Section';
             var toPosition = $($section).offset().top;
                console.log($section);
                 console.log(toPosition);
              
               $('html, body').animate({
               scrollTop: toPosition
              }, 2000, 'swing');
            }
        };         
                
    headerModule.init();
    navigationScroller.init();
}));


