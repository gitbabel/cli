gitbabel
========

gitBabel CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gitbabel.svg)](https://npmjs.org/package/gitbabel)
[![Downloads/week](https://img.shields.io/npm/dw/gitbabel.svg)](https://npmjs.org/package/gitbabel)
[![License](https://img.shields.io/npm/l/gitbabel.svg)](https://github.com/gitbabel/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gitbabel
$ gitbabel COMMAND
running command...
$ gitbabel (-v|--version|version)
gitbabel/0.0.0 darwin-x64 node-v13.6.0
$ gitbabel --help [COMMAND]
USAGE
  $ gitbabel COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gitbabel init`](#gitbabel-init)
* [`gitbabel help [COMMAND]`](#gitbabel-help-command)

## `gitbabel init`

creates a copy of gitBabel config in current director

```
USAGE
  $ gitbabel init
```

_See code: [src/commands/init.ts](https://github.com/gitbabel/cli/blob/v0.0.0/src/commands/init.ts)_

## `gitbabel help [COMMAND]`

display help for gitbabel

```
USAGE
  $ gitbabel help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
