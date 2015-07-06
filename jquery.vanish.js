/**
 * jQuery.vanish
 *
 * Creates a vanish effect vanishing random
 * characters of the string in a specific time
 *
 * @options
 *  {Number} duration, the duration in milliseconds
 *    to vanish all string, default to 3s
 *  {Number} animation, the time of an item animation
 *    default to 300ms
 *  {String} className, a class to add when the
 *    character starts to vanish, default to 'is-vanishing'
 *
 * @example
 *  <h1 class="foo">Hello Foo Bar</h1>
 *
 *  $('.foo').vanish({
 *    duration: 2500,
 *    animation: 200
 *  });
 */

;(function($, window, document, undefined) {
  'use strict';

  var defaults = {
    duration: 3000,
    animation: 300,
    className: 'is-vanishing'
  };

  function Vanish(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this.init();
  }

  Vanish.prototype.init = function() {
    this.text = this.element.text();
    this.chars = this.text.split('');

    this.mount();

    this.chars = this.removeEmpties(this.chars);
    this.randomizables = this.indexes();
    this.startTimer();
  };

  Vanish.prototype.mount = function() {
    var elements = $(this.generate());
    elements.css('transition', 'opacity ' + this.settings.animation + 'ms');
    this.element.html(elements);
  };

  Vanish.prototype.generate = function() {
    var html = '';

    $.each(this.chars, function(index, char) {
      if (char !== ' ') {
        html += '<span>' + char + '</span>';
      } else {
        html += ' ';
      }
    });

    return html;
  };

  Vanish.prototype.removeEmpties = function(item) {
    return item.filter(function(char) {
      return char !== ' ';
    });
  };

  Vanish.prototype.indexes = function() {
    return Array(this.chars.length).join(0).split(0).map(Number.call, Number);
  };

  Vanish.prototype.random = function() {
    return this.randomizables[Math.floor((Math.random() * this.randomizables.length))];
  };

  Vanish.prototype.remove = function(index) {
    this.randomizables.splice(this.randomizables.indexOf(index), 1);
  };

  Vanish.prototype.endVanishment = function(index) {
    clearInterval(this.settings.timer);

    this.element.trigger('vanished');
  };

  Vanish.prototype.vanish = function() {
    var sorted = this.random();

    this.remove(sorted);
    this.element.find('span:eq(' + sorted + ')')
      .addClass(this.settings.className)
      .css('opacity', 0);

    if (this.randomizables.length === 0) {
      this.endVanishment();
    }
  };

  Vanish.prototype.startTimer = function() {
    var self = this;

    self.vanish();

    this.settings.timer = setInterval(function() {
      self.vanish();
    }, (this.settings.duration - this.settings.animation) / (this.chars.length - 1));
  };

  $.fn.vanish = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_vanish')) {
        $.data(this, 'plugin_vanish', new Vanish(this, options));
      }
    });
  };

})(jQuery, window, document);
