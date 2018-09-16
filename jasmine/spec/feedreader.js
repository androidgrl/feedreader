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


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
