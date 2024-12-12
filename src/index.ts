import { Rule } from 'eslint';
import noOptionalChainCall from './rules/no-optional-chain-call';

export = {
  rules: {
    'no-optional-chain-call': noOptionalChainCall as Rule.RuleModule
  }
};
