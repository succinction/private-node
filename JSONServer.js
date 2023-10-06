
const http = require('http');
const JSONEdits = require('./JSONEdit');

const server = http.createServer( async (req, res) => {
    if (req.url === '/') {
        res.write(JSON.stringify([1, 2, "JSON Object"]));
        res.end();
    }

    if (req.url === '/read') {
        const projectObj = await JSONEdits.readProject();
        console.log("projectObj:", projectObj);
        res.write(JSON.stringify(projectObj))
        res.end();
    }

})

server.listen(3003)
console.log("listening on port 3003")