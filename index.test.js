import towerHanoi from './index.js';
import assert from 'assert';

describe("Integration test", function() {
    it("test", function() {
        assert.strictEqual(towerHanoi(3), 7);
        assert.strictEqual(towerHanoi(5), 31);
        assert.strictEqual(towerHanoi(0), 0);
    });
});


