describe("Asynchronous specs", function() {

    var value;

    //Comment what you need to test.

    // OK

    /*beforeEach(function (done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 1000);
    });*/

    // FAIL
 
    beforeEach(function () {
        setTimeout(function() {
            value = 0;
        }, 1000);
    });

    // And the it goes here.

    it("should work using done().", function () {
        value++;
        expect(value).toBeGreaterThan(0);
    });
});
