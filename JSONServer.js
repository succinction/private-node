
const http = require('http');
const JSONEdits = require('./JSONEdit');

const server = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.write("You have connected to the API");
        res.end();
    } else if (req.url === '/read') {
        const projectObj = await JSONEdits.readProject();
        res.write(projectObj);
        res.end();
    } else if (req.url === '/write' ) {
        res.write("WRITING FPO");
        res.end();
    } else {
        res.write("WRONG TURN");
        res.end();
    }
})

JSONEdits.initialize()
server.listen(3003)
console.log("listening on port 3003")