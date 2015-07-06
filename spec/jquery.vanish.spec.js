describe('Jquery Vanish', function() {
  var subject;

  beforeEach(function() {
    subject = $('<h1>Hello Foo Bar</h1>');
  });

  describe('When finished', function() {
    it('Execute callback', function() {
      var foo = { fn: function() {} };

      jasmine.clock().install();
      spyOn(foo, 'fn');

      subject.vanish({
        duration: 100,
        animation: 0,
      });
      subject.on('vanished', foo.fn)

      jasmine.clock().tick(99);
      expect(foo.fn).not.toHaveBeenCalled();

      jasmine.clock().tick(101);
      expect(foo.fn).toHaveBeenCalled();

      jasmine.clock().uninstall();
    });

    it('Add class to elements', function() {
      jasmine.clock().install();

      subject.vanish({
        duration: 100,
        animation: 0,
        className: 'is-foo'
      });

      jasmine.clock().tick(101);
      expect(subject.find('.is-foo').length).toEqual(11);

      jasmine.clock().uninstall();
    });
  });
});
