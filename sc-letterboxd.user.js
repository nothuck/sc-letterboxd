// ==UserScript==
// @name        sc-letterboxd
// @namespace   https://github.com/nothuck/sc-letterboxd/
// @version     1.1
// @author      huck
// @description Add link to Letterboxd to SC torrent page.
// @homepage    https://secret-cinema.pw/forums.php?action=viewthread&threadid=902
//
// @icon        https://letterboxd.com/favicon.ico
// @updateURL   https://github.com/nothuck/sc-letterboxd/raw/master/sc-letterboxd.user.js
// @downloadURL https://github.com/nothuck/sc-letterboxd/raw/master/sc-letterboxd.user.js
// @match       *://*.secret-cinema.pw/torrents.php?id=*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @run-at      document-body
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

function get_imdb(href) {
    var from = href.indexOf("imdb.com/title/tt") + 17;
    if(from < 17)
        return null;
    var to = href.indexOf("/", from);
    if(to < 0)
        to = href.length;
    var id = href.substring(from, to);
    while (id.length < 7) {
        id = "0" + id;
    }
    return id;
}

(function() {
    'use strict';
 
    var imdb_url = $('a.tooltip[href*="imdb.com/title/"]').first().attr('href');
    var lb_page = "//letterboxd.com/imdb/" + get_imdb(imdb_url) + "#featured-film-header";
    var linkbox = $(".linkbox").first();
    var a = $('<a class="brackets" href="'+ lb_page + '" target="_blank">Letterboxd</a>')[0];
    linkbox.append(a)
})();
