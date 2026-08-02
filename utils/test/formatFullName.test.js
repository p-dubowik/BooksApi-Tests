const formatFullName = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullName', () => {

    it('should format correct fullname', () => {
        expect(formatFullName('John Doe')).to.equal('John Doe');
    });

    it('should correct lowercase and uppercase letters', () => {
        expect(formatFullName('jOHn dOE')).to.equal('John Doe');
        expect(formatFullName('janE DOe')).to.equal('Jane Doe');
        expect(formatFullName('JOHN doe')).to.equal('John Doe');
    });

    it('should return Error with no arguments', () => {
        expect(formatFullName()).to.equal('Error');
    });

    it('should return Error when argument is not a string', () => {
        expect(formatFullName(1)).to.equal('Error');
        expect(formatFullName(null)).to.equal('Error');
        expect(formatFullName(true)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function () {})).to.equal('Error');
    });

    it('should return Error with only first name', () => {
        expect(formatFullName('John')).to.equal('Error');
    });

    it('should return Error with only last name', () => {
        expect(formatFullName('Doe')).to.equal('Error');
    });

    it('should return Error when more than name is provided', () => {
        expect(formatFullName('John Doe Test')).to.equal('Error');
    });

})