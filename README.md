# NODE PLAYGROUND
This repository will be used in order to learn node

## How to start
First of all Node.js must be installed. 
Download the package needed [here](https://nodejs.org/en/)
Node package also install NPM package manager which will be usefull soon

## Testing before start
Open your terminal and write
```
node -v
```
It will show which version has been installed
Also check npm
```
npm -v
```
These steps are import since some problem could happen. For instance, by some reason, npm have not worked in my windows instalation.

## Preparing the development enviroment
### Create directory
```
mkdir dojo
cd dojo
```
### Init node directory
```
npm init -y
```
This command will create a a file *package.json* where will be registered the modules downloaded and installed by npm aferward

### Installing server
```
npm install express
```
This command will create a folder *node_modules*, the file *package-lock.json* and will edit the file *package.json* adding the property *dependencies*. This propertie list the modules installed by npm that my project needs.







