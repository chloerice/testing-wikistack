const chai = require('chai');
const expect = chai.expect;
const models = require('../models')
const Page = models.Page;

describe('Page model', function () {

  describe('Virtuals', function () {

    beforeEach(function () {
      var page = Page.build();
      page.urlTitle = "Pancake_Batter";
    });

    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function () {
        expect(page.urlTitle).to.be.equal('/wiki/Pancake_Batter');
      });
    });

    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML', function () {
        var marked = chai.spy(marked);
        expect(marked).to.have.been.called.with('page.content');
      });
    });

  });

  describe('Class methods', function () {
    beforeEach(function (done) {
      Page.create({
        title: 'foo',
        content: 'bar',
        tags: ['foo', 'bar']
      })
      .then(function () {
        done();
      })
      .catch(done);
      });

    describe('findByTag', function () {
      it('gets pages with the search tag', function () {
        
        expect()
      });


      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

});
