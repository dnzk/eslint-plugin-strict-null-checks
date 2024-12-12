# eslint-plugin-strict-null-checks

An ESLint plugin that enforces explicit null checks instead of optional chaining on function calls.

## Installation

```bash
npm install eslint-plugin-strict-null-checks --save-dev
```

## Usage

Add `strict-null-checks` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": ["strict-null-checks"]
}
```

Then configure the rule in the rules section:

```json
{
    "rules": {
        "strict-null-checks/no-optional-chain-call": "error"
    }
}
```

## Rule Details

This rule aims to prevent the use of optional chaining on function calls, enforcing explicit null checks instead.

### ❌ Incorrect

```js
onChange?.(params);
navigator?.clipboard?.writeText('copy');
```

### ✅ Correct

```js
if (onChange != null) {
  onChange(params);
}

if (navigator?.clipboard?.writeText != null) {
  navigator.clipboard.writeText('copy');
}
```
