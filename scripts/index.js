/**
 * index.js */
/*jslint browser: true */
/*global $, jQuery, alert*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /* define */

 /* - All our useful JS goes here, awesome! */

($(document).ready(function () {
    
    "use strict";
    
    var headerModule = {
      
        init: function () {
            this.shoNavList = true;
            this.cacheDom();
            this.bindEvents();
            this.toggleNav();
            this.shoLogo();
        },
    
        cacheDom: function () {
            this.$window = $(window);
            this.$element = $('#header');
            this.$sideBar = this.$element.find('#sidebar');
            this.$navList = this.$element.find("ul.menu-list");
            this.$logo = this.$element.find('#logo');
            this.$menuToggle = this.$element.find('#menu-toggle');
        },
        
        shoLogo: function (){
            this.$logo.fadeTo(5000, 0.9);
        },
    
        bindEvents: function () {
            this.$window.on('resize', this.checkViewPort.bind(this));
            this.$menuToggle.on('click', this.toggleMenu.bind(this));
        },
        checkViewPort: function () {
            this.viewPort = this.$window.width();
            console.log("screen width: " + this.viewPort);
            this.toggleNav(this.viewPort);    
        },
        
        toggleNav: function (a) {
            if (a < 667) {
                this.$navList.hide(); 
                this.shoNavList = false; 
                return this.showNavList;
            } else {
                this.$navList.show();
                this.shoNavList = true;
                return this.showNavList;
            }
        },
      
        toggleMenu: function () {
            this.$sideBar.toggle("slow");
            console.log('toggle ' + this.$sideBar);
            if (this.shoNavList) {
                this.$navList.fadeToggle(2000);
            }
        }
        
    };
                   
                
    headerModule.init();
 
}));



 

/*($(document).ready(function () {
    
    "use strict";
    //DOM Setup
    
   headerModule.init(); 
    console.log("The page is loaded");
    
   
    var a = $('#sidebar'),  logo = $('#logo'),
     navlist = $("ul.menu-list"),
     shoNavList = true;
    
    $(window).resize(function () {
    var viewPort = $(window).width();
        console.log("screen width: " + viewPort);
        if (viewPort < 667) {
        navlist.hide(); 
        return shoNavList = false;     
    } else {
        navlist.show();
        return shoNavList = true;
    } });
    
    
    
    a.hide();
    logo.fadeTo(5000, 0.9);
    
    //events
    $('#menu-toggle').click(function() {
        a.toggle('slow');
        if (shoNavList) {
            navlist.fadeToggle(2000);
        }
        
    });

}));*/