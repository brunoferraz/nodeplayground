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


#### Create server configs
Create a file called **server.js** and edit it writing
```
//configurando o servidor
const express = require("express")
const server = express()

//liga os servidor e permite o acesso na porta 127.0.0.1:3000
server.listen(3000, function(){
    console.log("SERVIDOR Funcionando")
})
```


#### Run server by the first time
```
node server.js
```
If everything is working the prompt will show you the message "SERVIDOR funcionando".
However, everytime something have been changed the server must be manually restarted in order to changes take effect. Due to avoid this the package nodemon must be installed.


#### Installing nodemon
This module works monitoring files and reseting the server always a *js or json* file have changed. To install it simply write on terminal
```
npm install nodemon
```
Edit the file *package.json* inserting the tag **start** in the **scripts** propertie. As follow:
```
"scripts": {
    "start": "nodemon server.js"
  },
 ```
 Now, in order to Run the server you must write
 ```
 npm start
 ```
 This will make run the command *nodemon server.js* which will monitor the files and restart server as needed
 
 #### Config server to read index.html
 Edit *server.js* inserting as follow
 ```
 //configurando a apresentacao da pagina
server.get("/", function(req, res){
    return res.render("index.html")
})
 ```
 So, open your browser using the url 127.0.0.1:3000 and the server will read and open the file *index.html*
 
 #### Installing nunjucks
 Nunjucks is a template engine that allowas you to work in html using inheritance, loops, macros and etc
 To know better, try: https://imasters.com.br/front-end/nunjucks-template-engine-para-js
 
 In your terminal write 
```
npm install nunjucks
```
And then, insert the following code in the file *server.js*
```
//congurando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})
```
#### Configure to find static files in a folder as them would be in the root folder
In terminal, create a public folder
```
mkdir public
```
And then, insert the following code in the file *server.js*
```
//configurar servidor para aprsentar arquivos estaticos
server.use(express.static('public'))
```


