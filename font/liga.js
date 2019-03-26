/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'license_forbidden': '&#xe900;',
            'license_cc_cc': '&#xe901;',
            'license_cc_by': '&#xe902;',
            'license_cc_nc': '&#xe903;',
            'license_cc_sa': '&#xe904;',
            'license_cc_0': '&#xe905;',
            'license_cc_nd': '&#xe906;',
            'license_cc0-10': '&#xe907;',
            'license_cc-by-40': '&#xe908;',
            'license_cc-by-sa-40': '&#xe909;',
            'license_ecl-20': '&#xe90a;',
            'license_epl-10': '&#xe90b;',
            'license_eupl-11': '&#xe90c;',
            'license_gpl': '&#xe90d;',
            'license_gpl-20': '&#xe90e;',
            'license_gpl-30': '&#xe90f;',
            'license_isc': '&#xe910;',
            'license_lgpl': '&#xe911;',
            'license_lgpl-21': '&#xe912;',
            'license_lgpl-30': '&#xe913;',
            'license_lppl-13c': '&#xe914;',
            'license_mit': '&#xe915;',
            'license_mpl-20': '&#xe916;',
            'license_ms-pl': '&#xe917;',
            'license_ncsa': '&#xe918;',
            'license_ofl-11': '&#xe919;',
            'license_osl-30': '&#xe91a;',
            'license_postgresql': '&#xe91b;',
            'license_unlicense': '&#xe91c;',
            'license_wtfpl': '&#xe91d;',
            'license_apache-20': '&#xe921;',
            'license_artistic-20': '&#xe922;',
            'license_bsd-2-clause': '&#xe923;',
            'license_bsd-3-clause': '&#xe924;',
            'license_bsd-3-clause-clear': '&#xe925;',
            'license_bsl-10': '&#xe926;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
