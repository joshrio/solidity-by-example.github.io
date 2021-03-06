// metadata
export const version = "0.6.0"
export const title = "Import"
export const description = "Learn how to import other Solidity files"

const html = `<p>You can import local and external files in Solidity.</p>
<h3 id="local">Local</h3>
<p>Here is our folder structure.</p>
<pre><code>├── Import.sol
└── Foo.sol</code></pre>
<p>Foo.sol</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract Foo {
    string public name = "Foo";
}
</code></pre>
<p>Import.sol</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

// import Foo.sol from current directory
import "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it&#39;s name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}
</code></pre>
<h3 id="external">External</h3>
<p>You can also import from <a href="https://github.com">GitHub</a> by simply copying the url</p>
<pre><code class="language-solidity">// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v3.0.0 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/cryptography/ECDSA.sol";</code></pre>
`

export default html
