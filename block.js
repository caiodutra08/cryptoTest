const { GENESIS_DATA } = require("./config");

class Block {
    /**
     * [The constructor it intializes each block]
     * @param  {[Date]} timestamp [The time when the block was created]
     * @param  {[string]} lastHash [The hash from the previous block]
     * @param  {[string]} hash [The hash from the current block]
     * @param  {[array|object]} data [The data from the current block]
     */
    constructor({ timestamp, lastHash, hash, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    /**
     * It returns a new instance of the block class with the genesis data.
     * @returns A new instance of the Block class with the GENESIS_DATA as the data.
     */
    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        return new this({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data,
        });
    }
}

module.exports = Block;
