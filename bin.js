#!/usr/bin/env node

const args = process.argv.slice(2);
const argv = require('minimist')(args);

var cmd = args[0];
var name = args[1];
var dist = argv.dist;

if(cmd == '--version' || cmd == '--v'){
  console.log('Show current version');
}

if(cmd == 'init'){
  var newCmd = require('./cli/init.js');
  newCmd.init()
}

if(cmd == 'make:theme'){
	if(name == undefined){
    console.log('Please specify a theme name. Ex: npx webpixels make:theme awesome');
    return;
	}

  if(dist == undefined){
    console.log('Please specify the location of your Sass files. Ex: scss/');
    return;
  }

  var newCmd = require('./cli/make.js');

  newCmd.makeTheme(name, dist);
  
  return;
}