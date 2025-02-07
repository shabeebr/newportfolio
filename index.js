const fs= require('fs');
const http = require('http');
const url = require('node:url');

const slug = require('slugify');

const templater = require(`${__dirname}/templater`);


let overviewpage= fs.readFileSync(`${__dirname}/template/template-overview.html`, 'utf-8');
let productCardTemplate = fs.readFileSync(`${__dirname}/template/template-card.html`, 'utf-8');
let data = JSON.parse( fs.readFileSync(`${__dirname}/data/fruit-data.json`));


const server= http.createServer((req,res)=>{
    const {query, pathname} = url.parse(req.url,true);

    console.log(query,pathname);

     if ( req.url ==='/' || req.url ==='/overview' ) {

        let card = data.map(el=> templater(productCardTemplate,el)).join('');
        overviewpage = overviewpage.replace('<%PRODUCTS%>', card);
        res.writeHead(200).end(overviewpage);


     } else if (req.url ==='/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(data));
     }
    else
    {
        res.writeHead(400,{
            'Content-Type': 'text/html'
        });
        res.end('<h1> no page found!</h1>');
     }
   
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to requerst on port 8000');
})