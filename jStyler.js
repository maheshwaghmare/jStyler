/*  ========================================================================
 *  jStyler.js v1.0
 *  https://jStyler
 *  http://jStyler
 *
 *  ========================================================================
 *  Copyright 2015 Mahesh Waghmare
 *  ======================================================================== */

;(function ($, window, document, undefined) {

    var pluginName = "jStyler";
    var defaults = {
        css_normal: '',
        css_hover: '',
        selector: '',

        // onShown: function() {},
    };

    function jStyler(element, options) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, defaults, options, this.$element.data());
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    jStyler.prototype = {
        init: function () {

            //  DEFAULT
            // var css = {
            //     normal: {
            //         bg: "green",
            //         c: "red",
            //     },
            //     hover: {
            //         bg: "red",
            //         c: "green",
            //     }
            // };
            // console.log( JSON.stringify(css) );

            var css     = this.options.jstyler;
            var normal  = this._defaults.css_normal;
            var hover   = this._defaults.css_hover;

            //  Loop `normal` & `hover` key css
            $.each( css , function( pk , pv ){

                // console.log( 'parent_key : ' + JSON.stringify( pk ) );
                // console.log( 'parent_value : ' + JSON.stringify( pv ) );
                $.each( pv , function( ck , cv ){

                    // console.log( 'child__key : ' + JSON.stringify( ck ) );
                    // console.log( 'child__value : ' + JSON.stringify( cv ) );
                    
                    switch( pk ) {
                        case 'normal':  normal  = ck + ':' + cv + ';';  // normal  += this.get(ck, cv);  //  Generate & assign css to variable
                            break;
                        case 'hover':   hover   = ck + ':' + cv + ';';  // hover   += this.get(ck, cv);   //  Generate & assign css to variable
                            break;
                    }
                });     
            });
    

            console.log( normal );
            console.log( hover );
        },

        // get: function(ck, cv) {
        //     // switch(ck) {

        //     //     //  For these properties - Not has prefix 'px', 'em' etc
        //     //     case 'c':
        //     //     case 'bg':
        //     //     case 'color':
        //     //     case 'background':  c = ck + ':' + cv + ';';
        //     //         break;

        //     //     case 'font-size':  c = ck + ':' + cv + ';';
        //     //         break;
        //     // }
        //     console.log( ck + ':' + cv + ';' );
        //     // return ck + ':' + cv + ';';
        // },

        show: function() {
            console.log('okay');
        },
    };

    $.fn[pluginName] = function (options, args) {
        //console.log($.data(this, "plugin_" + pluginName));
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new jStyler(this, options));
            }
        });
    };

    $(document).ready(function() {
        
        // Initially call - `jStyler`
        $("[data-jstyler]").jStyler();

        // var css = $('[data-jstyler]').attr('data-jstyler');
        // // var css = $('[data-jstyler]').attr('data-t');

        // console.log( JSON.stringify(css) );
    });

})(jQuery, window, document);
