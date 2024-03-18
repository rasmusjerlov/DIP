const assert = require('assert');

describe('YatzyDice', () => {
  let yatzy;

  beforeEach(() => {
    yatzy = new YatzyDice();
  });

  describe('getValues()', () => {
    it('should return the face values of the dice', () => {
      yatzy.setValues([1, 2, 3, 4, 5]);
      const values = yatzy.getValues();
      assert.deepEqual(values, [1, 2, 3, 4, 5]);
    });
  });

  describe('setValues()', () => {
    it('should set the face values of the dice (for testing only)', () => {
      yatzy.setValues([6, 6, 6, 6, 6]);
      assert.deepEqual(yatzy.values, [6, 6, 6, 6, 6]);
    });
  });

  describe('getThrowCount()', () => {
    it('should return the number of times the dice have been thrown', () => {
      assert.equal(yatzy.getThrowCount(), 0);
      yatzy.throwDice([]);
      assert.equal(yatzy.getThrowCount(), 1);
    });
  });

  describe('resetThrowCount()', () => {
    it('should reset the throw count to 0', () => {
      yatzy.throwDice([]);
      yatzy.resetThrowCount();
      assert.equal(yatzy.getThrowCount(), 0);
    });
  });

  describe('throwDice()', () => {
    it('should roll the dice that are not held', () => {
      const holdStatus = [true, false, true, false, false];
      yatzy.setValues([1, 2, 3, 4, 5]);
      const beforeThrow = yatzy.values.slice();
      yatzy.throwDice(holdStatus);
      assert.notDeepEqual(yatzy.values, beforeThrow); // Dice values should change
      assert.equal(yatzy.values[0], 1); // Held die stays the same
    });
  });

  describe('frequency()', () => {
    it('should return an array with the frequency of each face value', () => {
      yatzy.setValues([1, 2, 2, 3, 3]);
      const frequency = yatzy.frequency();
      assert.deepEqual(frequency, [0, 1, 2, 2, 0, 0, 0]);
    });
  });

  describe('sameValuePoints()', () => {
    it('should return the sum of dice values for a given face value', () => {
      yatzy.setValues([1, 2, 3, 3, 3]);
      assert.equal(yatzy.sameValuePoints(3), 9);
    });

    it('should return 0 if no dice have the given face value', () => {
      yatzy.setValues([4, 5, 6, 1, 2]);
      assert.equal(yatzy.sameValuePoints(3), 0);
    });
  });

  describe('onePairPoints()', () => {
    it('should return points for the highest pair (or 0 if none)', () => {
      yatzy.setValues([4, 4, 2, 5, 6]);
      assert.equal(yatzy.onePairPoints(), 8);

      yatzy.setValues([1, 2, 3, 4, 5]);
      assert.equal(yatzy.onePairPoints(), 0);
    });
  });

  // Add similar test cases for twoPairPoints, threeSamePoints, etc.

  // Test cases for other scoring methods (twoPairPoints, threeSamePoints, etc.) can be added following a similar structure.
});