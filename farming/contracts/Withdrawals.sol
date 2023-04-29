pragma solidity 0.6.12;

import "./lib/SafeERC20.sol";
import "./SwaprumToken.sol";

contract SwaprumWithdrawals {
    using SafeERC20 for IERC20;

    SwaprumToken private _token;
    address private _admin;

    constructor (SwaprumToken token, address admin) public {
        _token = token;
        _admin = admin;
    }

    function withdrawal(uint256[] memory _amounts, address[] memory _users) public {
        require(msg.sender == _admin, 'Only admin can withdrawal');

        for (uint i = 0; i < _users.length; i++){
            _token.transfer(_users[i], _amounts[i]);
        }

    }
}