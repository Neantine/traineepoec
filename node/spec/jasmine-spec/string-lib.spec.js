/**
 * Created by Administrateur on 29/08/2016.
 */
const stringLib = require('../../jasmine-spec/string-lib');

describe("stringLib", function() {
    describe ("concat", function() {
        it("concat function should exist", function() {
            expect(stringLib.concat).toBeDefined();
            expect(typeof stringLib.concat).toBe('function');
        });
        //it("concat('hello,' ','world') should return 'hello world'");  //Test en pending si on met pas la fonction (comme avec xit)
        it("concat('hello,' ','world') should return 'hello world'", function() {
            expect(stringLib.concat('hello',' ','world')).toBe('hello world');
        });
    })
});