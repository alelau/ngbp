describe('module load', function () {

    beforeEach(function () {
        browser.get('index.html');
    });

    afterEach(function () {
        //browser.driver.sleep(2000);
    });

    describe('loading of the application', function () {
        it('should create the navigation bar', function () {
            var container = element(by.css('div.container'));
            expect(container.element(by.css('.navbar'))).toBeTruthy();
        });
    });
});

