const Block = require("./block");
const { GENESIS_DATA } = require("./config");

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

    const block = new Block({ timestamp, lastHash, hash, data });

    it("has a timestamp, lastHash, hash, data, and a property", () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe("genesis()", () => {
        //$ Funções estáticas são convenientes quando não precisa usar ou mudar dados de uma instância específica de uma classe, mas sim de uma classe em si.
        const genesisBlock = Block.genesis();

        it("returns a Block instance", () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it("returns the genesis data", () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

    describe("mineBlock", () => {
        const lastBlock = Block.genesis();
        const data = "mined data";
        const minedBlock = Block.mineBlock({ lastBlock, data });

        it("returns a Block instance", () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it("sets the `lastHash` to be the `hash` of the lastBlock", () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it("sets the `data`", () => {
            expect(minedBlock.data).toEqual(data);
        });

        it("sets a `timestamp`", () => {
            expect(minedBlock).not.toEqual(undefined);
        });
    });
});
