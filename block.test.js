const Block = require("./block");



describe("Block", () => {
    const timestamp = "a-date";
    const lastHash = "foo-hash";
    const hash = "bar-hash";
    const data = ["blockchain", "data"];
    //@ Se a chave no valor é a mesma que o objeto, pode-se usar sintaxe curta.
    // const block = new Block({
    //     timestamp: timestamp,
    //     lastHash: lastHash,
    //     hash: hash,
    //     data: data,
    // });
    const block = new Block({timestamp, lastHash, hash, data});

    it("has a timestamp, lastHash, hash, data, and a property", () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});
