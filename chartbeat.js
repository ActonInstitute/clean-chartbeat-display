// ==UserScript==
// @name        Chartbeat Clean 1
// @namespace   acton
// @description Clean up the Chartbeat page
// @include     https://chartbeat.com/dashboard/?url=acton.org
// @version     1
// @grant       none
// ==/UserScript==
var div = document.getElementById('dashboardNav').style; if(div) void(div.display=(div.display=='none')? 'block':'none');
var nav = document.querySelector('#dashboardNav');

var wrapper = document.querySelector('#viewWrapper');
void(wrapper.style.left = '0');
void(wrapper.style.paddingTop = '40px');
void(wrapper.style.paddingLeft = '40px');
void(wrapper.style.paddingRight = '40px');
void(wrapper.style.background = '#FFF');

var body = document.querySelector('body');
void(body.style.marginTop = '40px');

var overview = document.querySelector('.dashboardView.overview');
void(overview.style.border = '0');
void(overview.style.background = 'none');
void(overview.style.boxShadow = 'none');

var concurrents = document.querySelector('.concurrents');
void(concurrents.style.padding = '0 10px');

var concurrentsh3 = document.querySelector('.concurrents h3');
void(concurrentsh3.style.fontSize = '10em');

var concurrentsCanvas = document.querySelector('.concurrents canvas');
void(concurrentsCanvas.style.top = '100px');

var concurrentsAvg = document.querySelector('.concurrents .avgLabel');
void(concurrentsAvg.style.top = '225px');

var concurrentsMax = document.querySelector('.concurrents .maxLabel');
void(concurrentsMax.style.top = '185px');