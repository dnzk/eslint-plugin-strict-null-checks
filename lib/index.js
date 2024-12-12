"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const no_optional_chain_call_1 = __importDefault(require("./rules/no-optional-chain-call"));
module.exports = {
    rules: {
        'no-optional-chain-call': no_optional_chain_call_1.default
    }
};
