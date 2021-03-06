// metadata
export const version = "0.6.0"
export const title = "Fallback"
export const description = "Example of how to use fallback in Solidity"

const html = `<p>A <code>fallback function</code> is an anonymous function that does not take any arguments and does not return anything.</p>
<p>Fallback functions are executed when</p>
<ul>
<li>calling a function that does not exist</li>
<li>sending Ether directly to a contract</li>
</ul>
<p><code>Fallback</code> functions have a 2300 gas limit when called by <code>transfer</code> or <code>send</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

contract Fallback {
    event Log(uint gas);

    // Fallback function must be declared as external.
    fallback() external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log(gasleft());
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent,) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }
}
</code></pre>
`

export default html
