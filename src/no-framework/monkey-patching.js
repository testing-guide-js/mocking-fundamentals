const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;

utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Kid 1", "Kid 2");
assert.strictEqual(winner, "Kid 1");

utils.getWinner = originalGetWinner;
