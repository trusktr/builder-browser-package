// @ts-check
const fs = require('fs')
const path = require('path')
const CWD = process.cwd()

let userConfigPath = path.join(CWD, 'lume.config.js')
let userConfigExists = fs.existsSync(userConfigPath)

if (!userConfigExists) {
	userConfigPath = path.join(CWD, 'lume.config.cjs')
	userConfigExists = fs.existsSync(userConfigPath)
}

/**
 * @typedef {{
 *   webpackConfigs?: (configs: import('webpack').Configuration[]) => void
 *   testWithAllTSAndBabelDecoratorBuildConfigurations?: boolean
 *   tsProjectReferenceMode?: boolean
 *   figletFont?: string
 *   testSpecFormat?: 'jasmine' | 'mochachai'
 *   prettierIgnorePath?: string
 * }} UserConfig
 */

/** @type {UserConfig} */
const userConfig = userConfigExists ? require(userConfigPath) : {}

module.exports = userConfig
