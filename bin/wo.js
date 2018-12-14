#! /usr/bin/env node

const program = require('commander')  // npm i commander -D
const json = require('../package.json')
const init = require('./wo-init')

program
  .version(json.version)
  .description('运营活动脚手架')
  .option('-v', '版本号')

if (!process.argv.slice(2).length) {
    program.outputHelp()
} else if (process.argv.length === 3 && process.argv[2] === '-v') {
    console.info('version', json.version)
}
// 创建项目
program
  .command('init')
  .alias('c')
  .description('初始化项目')
  .option('-n, --name [name]', '项目英文名称')
  .option('-t, --type [type]', '项目类型：vue(默认)')
  .action(option => {
    init(option)
  })
  .on('--help', function() {
    console.info('  Examples:')
    console.info('')
    console.info('$ wo init --name [name]')
    console.info('$ wo in -n [name]')
  })

program.parse(process.argv)

