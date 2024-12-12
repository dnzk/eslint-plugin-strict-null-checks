import { RuleTester } from 'eslint';
import rule from '../no-optional-chain-call';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
});

ruleTester.run('no-optional-chain-call', rule, {
  valid: [
    {
      code: `
        if (onChange != null) {
          onChange(params);
        }
      `,
    },
    {
      code: `
        if (navigator?.clipboard?.writeText != null) {
          navigator.clipboard.writeText('copy');
        }
      `,
    },
  ],
  invalid: [
    {
      code: 'onChange?.(params);',
      errors: [{ messageId: 'noOptionalChainCall' }],
      output: `if (onChange != null) {
  onChange(params);
}`,
    },
    {
      code: 'navigator?.clipboard?.writeText("copy");',
      errors: [{ messageId: 'noOptionalChainCall' }],
      output: `if (navigator.clipboard.writeText != null) {
  navigator.clipboard.writeText("copy");
}`,
    },
  ],
});
