import fs = require("fs");

function concatTypedArrays(a: Uint8Array, b: Uint8Array): Uint8Array {
    const c = new Uint8Array(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

function concatBuffers(
    a: Uint8Array | Uint16Array | Uint32Array,
    b: Uint8Array | Uint16Array | Uint32Array
): Uint8Array {
    return concatTypedArrays(
        new Uint8Array(a.buffer || a),
        new Uint8Array(b.buffer || b)
    );
}

const test_var = "this is a long string: 6caD764D996ceB0B6217a01C3ec29DDEc760286C97c28FCBFFdF0dc41CD2AE5A0BdcF36a7Cd29cfc99E118Ef0Be71b4Ba4c1dfdE5CeEAaafee3b93ea4eb20ED5ab99bd0aABd2BFd9bdAc1FdA962813D7CD558c9a0AAD4dD81988eaF6c1481bA8AAa731A87AF7DC0B90cB303CBB16122f8778a1c62F38f19Ff599c147c133fC9a9ba0e272de1bA9eD8b6DcC3bD84Ea8d8d0033CdE1d56aa8bcfb4d7dBFd3cF7e354642c026f6EbFb0f1D28Bb6778Ba4CCaaB15eD66fF6Bd428a3cf6C8dD1dBAb3bAbbA3FF7B1ce784473daD21eF45f7a08Eff4FF1Beae9ce4F69DdB1351Bb1d348A7b4aE2F21c9dF3DeAaA2bECF646e34Dbc7F18C3c28fcccAafbA5ACA9C3d8D240adB5C18Df99DcefbEdE1b27C7bd867364abB983eEa7cDC25B401df91ba8A8E776AD0f3a8Faa06bc1ECaF5B0dA0f633f9bf85B24A33c6cAFfF0eEc4BD68B99eBdc8Af258F90ebB049Eb8e9daD3AcbdA47a5Cd2BFFD4d3cbd26BA";

console.log(`test_var: ${test_var}`);

let blob = new Uint8Array(0);

const test_str = "a string";

blob = concatBuffers(blob, new Uint8Array([0x41, 0x20]));

// blob = concatBuffers(blob, Buffer.from(test_str));
blob = concatBuffers(blob, Buffer.alloc(test_str.length, test_str));

fs.writeFileSync("./test_f.bin", blob);
