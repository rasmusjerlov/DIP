class YatzyDice {
    // Random number generator
    constructor() {
      this.random = Math.random;
    }
  
    // Face values of the 5 dice (1 to 6)
    values = new Array(5).fill(0);
  
    // Number of times the dice have been thrown (0 to 3)
    throwCount = 0;
  
    /**
     * Return the 5 face values of the dice.
     */
    getValues() {
      console.log(this.values);
      this.frequency();
      return this.values;
    }
  
    /**
     * Set the 5 face values of the dice (for testing only).
     */
    setValues(values) {
      this.values = values;
    }
  
    /**
     * Return the number of times the dice have been thrown.
     */
    getThrowCount() {
      return this.throwCount;
    }
  
    /**
     * Reset the throw count.
     */
    resetThrowCount() {
      this.throwCount = 0;
    }
  
    /**
     * Roll the dice that are not held.
     */
    throwDice(holdStatus) {
      for (let i = 0; i < this.values.length; i++) {
        if (!holdStatus[i]) {
          this.values[i] = Math.floor(this.random() * 6) + 1;
        }
      }
      this.throwCount++;
    }
  
    // -------------------------------------------------------------------------
  
    /**
     * Return all possible results with the current face values.
     */
    getResults() {
      const results = new Array(15).fill(0);
      for (let i = 0; i <= 5; i++) {
        results[i] = this.sameValuePoints(i + 1);
      }
      results[6] = this.onePairPoints();
      results[7] = this.twoPairPoints();
      results[8] = this.threeSamePoints();
      results[9] = this.fourSamePoints();
      results[10] = this.fullHousePoints();
      results[11] = this.smallStraightPoints();
      results[12] = this.largeStraightPoints();
      results[13] = this.chancePoints();
      results[14] = this.yatzyPoints();
      return results;
    }
  
    // -------------------------------------------------------------------------
  
    // Return an array containing the frequency of each face value (1 to 6)
    frequency() {
      const frequency = new Array(7).fill(0);
      for (let i = 0; i < this.values.length; i++) {
        frequency[this.values[i]]++;
      }
      console.log(frequency);
      return frequency;
    }
  
    /**
     * Return points for the same face value.
     */
    sameValuePoints(value) {
      let sum = 0;
      for (let i = 0; i < this.values.length; i++) {
        if (this.values[i] === value) {
          sum += value;
        }
      }
      return sum;
    }
  
    /**
     * Return points for one pair (highest value).
     */
    onePairPoints() {
      const frequency = this.frequency();
      let sum = 0;
      for (let i = 0; i < frequency.length; i++) {
        if (frequency[i] >= 2) {
          sum = i * 2;
          break;
        }
      }
      return sum;
    }
  
    /**
     * Return points for two pairs (highest values combined).
     */
    twoPairPoints() {
      const frequency = this.frequency();
      let pairCount = 0;
      let sum = 0;
      for (let i = 0; i < frequency.length; i++) {
        if (frequency[i] >= 2) {
          sum += i * 2;
          pairCount++;
        }
      }
      return pairCount === 2 ? sum : 0;
    }
  
    /**
     * Return points for three of a kind.
     */
    threeSamePoints() {
      const frequency = this.frequency