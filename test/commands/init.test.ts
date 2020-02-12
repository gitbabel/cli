import {expect, test} from '@oclif/test'
import cli from 'cli-ux'
import * as fs from 'fs'

const gitbabelDir = 'tmp'
const configFilename = 'config.json'

describe('init', () => {
  afterEach(function () {
  // runs after all tests in this block
  // delete test folder after test
    if (fs.existsSync(gitbabelDir)) {
      if (fs.existsSync(gitbabelDir + '/' + configFilename)) {
        fs.unlinkSync(gitbabelDir + '/' + configFilename)
      }
      fs.rmdirSync(gitbabelDir)
    }
  })

  describe('init (dir does not exists)', () => {
    beforeEach(function () {
      // runs before all tests in this block
      // if test folder exists, delete before starting test
      if (fs.existsSync(gitbabelDir)) {
        if (fs.existsSync(gitbabelDir + '/' + configFilename)) {
          fs.unlinkSync(gitbabelDir + '/' + configFilename)
        }
        fs.rmdirSync(gitbabelDir)
      }
    })

    test
    .stdout()
    .command(['init', '--folder',  gitbabelDir])
    .it('runs init (directory does not exists) ', ctx => {
      expect(ctx.stdout).to.contain('saved')
    })
  })

  describe('init (dir does exists but not config)', () => {
    beforeEach(function () {
      // runs before all tests in this block
      // create test folder if it doesn't already exists
      if (fs.existsSync(gitbabelDir)) {
        if (fs.existsSync(gitbabelDir + '/' + configFilename)) {
          fs.unlinkSync(gitbabelDir + '/' + configFilename)
        }
      }
    })

    test
    .stdout()
    .command(['init', '--folder',  gitbabelDir])
    .it('runs init (directory does not exists) ', ctx => {
      expect(ctx.stdout).to.contain('saved')
    })
  })

  describe('init (dir and config does exists)', () => {
    beforeEach(function () {
      // runs before all tests in this block
      // create test folder if it doesn't already exists
      if (!fs.existsSync(gitbabelDir)) {
        fs.mkdirSync(gitbabelDir)
      }
      fs.writeFileSync(gitbabelDir + '/' + configFilename, {}, 'utf-8')
    })

    test
    // stub response for cli.confirm to true
    .stub(cli, 'confirm', () => async () => true)
    .stdout()
    .command(['init', '--folder',  gitbabelDir])
    .it('runs init (Y) ', ctx => {
      expect(ctx.stdout).to.contain('saved')
    })

    test
    // stub response for cli.confirm to false
    .stub(cli, 'confirm', () => async () => false)
    .stdout()
    .command(['init', '--folder',  gitbabelDir])
    .it('runs init (N) ', ctx => {
      expect(ctx.stdout).to.contain('has NOT been overwritten')
    })
  })
})
