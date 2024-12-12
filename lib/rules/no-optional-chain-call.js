"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow optional chaining on function calls',
            category: 'Best Practices',
            recommended: true,
        },
        fixable: 'code',
        schema: [],
        messages: {
            noOptionalChainCall: 'Avoid using optional chaining on function calls. Use explicit null checks instead.',
        },
    },
    create(context) {
        return {
            'ChainExpression > CallExpression'(node) {
                if (node.callee.type === 'OptionalMemberExpression' ||
                    node.callee.type === 'ChainExpression') {
                    context.report({
                        node,
                        messageId: 'noOptionalChainCall',
                        fix(fixer) {
                            const sourceCode = context.getSourceCode();
                            const calleeText = sourceCode.getText(node.callee);
                            const argsText = node.arguments.map((arg) => sourceCode.getText(arg)).join(', ');
                            const cleanCalleeText = calleeText.replace(/\?\./, '.');
                            return fixer.replaceText(node, `if (${cleanCalleeText} != null) {\n` +
                                `  ${cleanCalleeText}(${argsText});\n` +
                                `}`);
                        },
                    });
                }
            },
        };
    },
};
exports.default = rule;
