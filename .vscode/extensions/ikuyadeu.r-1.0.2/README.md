# R support for Visual Studio Code

**Sorry, supporting this extension is ended. Please looking forward to coming new one (<https://github.com/Microsoft/RTVS/issues/1295>).**

Requires [R](https://www.r-project.org/).

## Usage

* For Windows, set config `r.rterm.windows` to your `R.exe` Path like `"C:\\Program Files\\R\\R-3.3.4\\bin\\x64\\R.exe"`;
* Open your folder that has R source file (**Can't work if you open only file**)
* Use `F1` key and `R:` command or `⌘+Enter`(windows: `ctrl+enter`)

## Features

* Run Source(`⌘+Shift+S` or Push icon![icon](https://github.com/Ikuyadeu/vscode-R/raw/master/images/FileDownload.png)) and Run Selected((`⌘+Enter`))
  * If you use Windows or linux `⌘` to `Ctrl`

![use Run .R](https://github.com/Ikuyadeu/vscode-R/raw/master/images/feature.png)

* R Integrated Terminal

![Create R terminal](https://github.com/Ikuyadeu/vscode-R/raw/master/images/terminal.png)

* Extended Syntax(R, R Markdown, R Documentation)

![Syntax](https://github.com/Ikuyadeu/vscode-R/raw/master/images/Rsyntax.png)

* Create .gitignore based [R.gitignore](https://github.com/github/gitignore/raw/master/R.gitignore)

* Data frame viewer and Environment viewer(`Preview Data frame` or `Preview Environment`)

![Image](https://github.com/Ikuyadeu/vscode-R/raw/master/./images/DataframePreview.gif)

* Snippets

* Package development short cut (`Load All`, `Test Package`, `Install Package`, `Build Package` and `Document`)

## Requirements

* R base from <https://www.r-project.org/>

## Extension Settings

This extension contributes the following settings:

* `r.rterm.windows`: set to R.exe path for Windows
* `r.rterm.mac`: set to R term's path for Mac OS X
* `r.rterm.linux`: set to R term's path for Linux
* `r.rpath.lsp`: set to R.exe path for Language Server Protocol
* `r.rterm.option`: R command line options (i.e: --vanilla)
* `r.source.encoding`: An optional encoding to pass to R when executing the file
* `r.source.focus` : Keeping focus when running(editor or terminal)

* Language server(developing [here](https://github.com/REditorSupport/languageserver))

## TODO

* Output Plot
* Debug

## CONTRIBUTING

* Please see [CONTRIBUTING.md](https://github.com/Ikuyadeu/vscode-R/blob/master/CONTRIBUTING.md)

This extension based on

* [r.tmbundle](https://github.com/textmate/r.tmbundle)
* [markdown-redcarpet.tmbundle](https://github.com/streeter/markdown-redcarpet.tmbundle)
* [Markdown extension in VS Code](https://github.com/Microsoft/vscode/blob/master/extensions/markdown/snippets/markdown.json)
* [R.gitignore](https://github.com/github/gitignore/raw/master/R.gitignore)
* [language-r](https://github.com/lee-dohm/language-r)
* [R box](https://github.com/randy3k/R-Box)

## FAQ

* Q: I can't use command and message is `xxx no command found`.
* A: Please open your folder that has R source file

The R logo is © 2016 The R Foundation
