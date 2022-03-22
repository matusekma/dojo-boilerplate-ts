const expect = require('chai').expect;
const { myFunction } = require('../index');

describe('My Function', () => {
  it('should return true', () => {
      expect(myFunction()).to.equals(true);
  })
});
