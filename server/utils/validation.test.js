const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject a non-string value', () => {
        var value = 1234;

        expect(isRealString(value)).toBe(false);
    })
    it('should reject strings with only spaces', () => {
        var value = '   ';

        expect(isRealString(value)).toBe(false);
    })
    it('should allow strings with non-space characters', () => {
        var value = '  username  ';

        expect(isRealString(value)).toBe(true);
    })
})