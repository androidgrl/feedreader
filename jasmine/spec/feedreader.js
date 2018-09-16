$(function() {
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    it('each have a URL that is not empty', function() {
      const urls = allFeeds.map(function(feed) {
        return feed.url;
      })

      const result = urls.every(function(url) {
        return url;
      })
      expect(result).toBe(true);
    })

    it('each have a name that is not empty', function() {
      const names = allFeeds.map(function(feed) {
        return feed.name;
      })

      const result = names.every(function(name) {
        return name;
      })
      expect(result).toBe(true);
    })
  });


  describe('The menu', function(){
    it('is hidden by default', function() {
      expect(document.getElementsByTagName('body')[0].classList[0]).toBe('menu-hidden');
    })

    it('taggles visibility when clicked', function() {
      const hamburger = document.getElementsByClassName('menu-icon-link')[0];

      hamburger.click();
      expect(document.getElementsByTagName('body')[0].classList[0]).toBe(undefined);

      hamburger.click();
      expect(document.getElementsByTagName('body')[0].classList[0]).toBe('menu-hidden');
    })
  })

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('loads entries in the container', function(done) {
      const container = document.getElementsByClassName('feed')[0];
      const firstEntry = container.firstElementChild.firstElementChild;

      expect(firstEntry.innerText).toBe('This Business Analytics Grad Set Her Sights on Success, and Landed a New Job\n');
      done();
    })
  })

  describe('New Feed Selection', function() {
    beforeEach(function(done) {
      loadFeed(1, function() {
        done();
      });
    });

    it('changes content when a new feed is selected', function(done) {
      const container = document.getElementsByClassName('feed')[0];
      const firstEntry = container.firstElementChild.firstElementChild;

      expect(firstEntry.innerText).toBe('Removing jQuery from GitHub.com frontend\n');
      done();
    })
  })
}());
