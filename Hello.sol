pragma solidity ^0.4.21;
 
contract Hello {
    string _text;
 
    function Hello(string text) public {
        _text = text;
    }
 
    function showText() public view returns(string) {
        return _text;
    }
}
