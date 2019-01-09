"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode_1.commands.registerCommand("catCoding.start", () => {
        // Create and show panel
        const panel = vscode_1.window.createWebviewPanel("catCoding", "Cat Coding", vscode_1.ViewColumn.One, {});
        // And set its HTML content
        panel.webview.html = getWebviewContent();
    }));
}
exports.activate = activate;
function getWebviewContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}
//# sourceMappingURL=viewer.js.map