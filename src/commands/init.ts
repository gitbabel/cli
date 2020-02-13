import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as fs from 'fs'

export default class Init extends Command {
  static description = 'create template of gitbabel config'

  static examples = [
    `$ gitbabel init
`,
    `$ gitbabel init --target 'foldername'
`,
  ]

  static flags = {
    // flag with a value (-f, --target=VALUE)
    target: flags.string({char: 't', description: 'folder to store config'}),
  }

  async run() {
    const {flags} = this.parse(Init)

    const configTemplate = `{
        "version": "1.0",
        "topics": {
            "mapping": {}
        },
        "collections": []
    }`

    const gitbabelDir = flags.target || '.gitbabel'
    const configFilename = 'config.json'
    /*
    if directory and config file exists then prompt user on whether overwrite with config template
    if directory doesn't exists, write out config template to location
    */
    if (fs.existsSync(gitbabelDir)) {
      if (fs.existsSync(gitbabelDir + '/' + configFilename)) {
        const overwrite = await cli.confirm(gitbabelDir + '/' + configFilename + ' exists.  Overwrite? (yes/no)')
        if (overwrite) {
          fs.writeFileSync(gitbabelDir + '/' + configFilename, configTemplate, 'utf-8')
          this.log(gitbabelDir + '/' + configFilename + ' saved')
        } else {
          this.log(gitbabelDir + '/' + configFilename + ' has NOT been overwritten')
        }
      }
    } else {
      fs.mkdirSync(gitbabelDir)
      fs.writeFileSync(gitbabelDir + '/' + configFilename, configTemplate, 'utf-8')
      this.log(gitbabelDir + '/' + configFilename + ' saved')
    }
  }
}
