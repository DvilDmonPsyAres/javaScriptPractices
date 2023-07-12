const sha256 = require('js-sha256');

console.log(sha256("Hello, world!"));
// '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'
console.log(sha256("Hello, world!"));
console.log(sha256("ABC"));
// 'b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78'

console.log(sha256("ABCDEF"));
// 'e9c0f8b575cbfcb42ab3b78ecc87efa3b011d9a5d10b09fa4e96f240bf6a82f5'

console.log(sha256("ABBEEF"));
// 'cafd8090e01c3d9c886428dec6128a19416675d615a26211caf1c5721641bc1f'

console.log(sha256("Hello, world!"));
// '315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3'
