// metadata
export const version = "0.5.16"
export const title = "If / Else"
export const description = "If / Else conditional statement in Solidity"

const html = `<p>Solidity support conditional statements <code>if</code>, <code>else if</code> and <code>else</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x &lt; 10) {
            return 0;
        } else if (x &lt; 20) {
            return 1;
        } else {
            return 2;
        }
    }
}
</code></pre>
`

export default html
