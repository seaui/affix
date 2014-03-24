define(function(require) {

    require('../src/affix');
    var expect = require('expect');
    var $ = require('$');

  describe('affix', function() {

      it('should provide no conflict', function () {
          var affix = $.fn.affix.noConflict()
          expect($.fn.affix).to.not.be.ok();// 'affix was set back to undefined (org value)'
          $.fn.affix = affix
      })

      it('should be defined on jquery object', function () {
          expect($(document.body).affix).to.be.ok();// 'affix method is defined')
      })

      it('should return element', function () {
          expect($(document.body).affix()[0]).to.equal(document.body);// 'document.body returned'
      })

      it('should exit early if element is not visible', function () {
          var $affix = $('<div styles="display: none"></div>').affix()
          $affix.data('bs.affix').checkPosition()
          expect($affix.hasClass('affix')).to.not.be.ok();// 'affix class was not added')
      })

      it('should trigger affixed event after affix', function () {

          var template = $('<div id="affixTarget"><ul><li>Please affix</li><li>And unaffix</li></ul></div><div id="affixAfter" style="height: 20000px; display:block;"></div>')
          template.appendTo('body')

          var affixer = $('#affixTarget').affix({
              offset: $('#affixTarget ul').position()
          })

          $('#affixTarget')
              .on('affix.bs.affix', function (e) {
                  expect(true).to.be.ok();// 'affix event triggered')
              }).on('affixed.bs.affix', function (e) {
                  expect(true).to.be.ok();//'affixed event triggered')
                  $('#affixTarget').remove();
                  $('#affixAfter').remove();
              })

          setTimeout(function () {
              window.scrollTo(0, document.body.scrollHeight)
              setTimeout(function () { window.scroll(0,0) }, 0)
          },0)
      })
  });

});
