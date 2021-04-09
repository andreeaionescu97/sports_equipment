// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
});

// Homepage 4 boxes/categories JS

var clickHandler = ('ontouchstart' in document.documentElement ? "touchend" : "click");

$(function(){

  var prevSelect = '';

  $('.small-box .original').click(function () {
    if($('#boxes').attr("class")) {
      endFlip();
    } else {
      flipTo($(this));
    }
  });

  $(document).on(clickHandler, function (e) {
    var boxes = $("#boxes");

    if(!boxes.is(e.target) && boxes.has(e.target).length === 0) {
      endFlip();
    }
  });

  /*$('.small-box .original').hoverIntent(function () {
        flipTo($(this));
    }, function () {});

    $('#banner .container').mouseleave(function () {
        //$('#banner #boxes').attr("class", prevSelect + "-previous");
        $('#banner #boxes').attr("class", "");
    });*/

  function flipTo($this) {
    var value = $this.parents('.small-box').attr('rel');
    $('.small-box').parent().attr("class", "").addClass(value + "-chosen");
    prevSelect = value;
  }

  function startFlip() {
    if(prevSelect == '' || prevSelect == 'beaches') {
      flipTo($('.mountains .mountains-visible'));
    } else if(prevSelect == 'mountains') {
      flipTo($('.lakes .lakes-visible'));
    } else if(prevSelect == 'lakes') {
      flipTo($('.forests .forests-visible'));
    } else if(prevSelect == 'forests') {
      flipTo($('.beaches .beaches-visible'));
    }
  }

  function endFlip() {
    $('#banner #boxes').attr("class", "");
  }

  /* Autorun */
  /*var interval = 7000,
      intervalDelay = interval - 1000,
      start = setInterval(startFlip, interval),
      end = setInterval(),
      endStagger = setTimeout(function(){
        end = setInterval(endFlip, interval);
      }, intervalDelay);

  $('#boxes').hover(function(e){
    clearInterval(start);
    clearInterval(end);
    clearTimeout(endStagger);
  }, function(e){
    start = setInterval(startFlip, interval);

    endStagger = setTimeout(function(){
      end = setInterval(endFlip, interval);
    }, intervalDelay);
  });*/

});
