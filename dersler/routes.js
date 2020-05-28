const fs = require('fs');
const qs = require('querystring');

const routeHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type','text/html');
    if(url === '/'){
        res.write('<html><head><title>Mesajınızı girin...</title></head>');
        res.write('<body><form method="POST" action="/log">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Kaydet</button>');
        res.write('</form></body></html>');       
        return res.end();
    }
    if(url === '/log' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString();
            const message = bodyParsed.split('=')[1];
            fs.appendFileSync('message.txt','/n'+message);
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
}

module.exports = routeHandler;