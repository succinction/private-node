const fs = require('fs')
const { readFile, mkdir } = require('fs/promises');

const filePath = '.files/data.json';

function initialize() {
    if (!fs.existsSync(filePath)) {
        mkdir(".files")
        console.log("init:");
        const initialJSON = {
            owner: "Undefined",
            project: "init",
            description: "testing",
            steps: [
                {
                    stepNum: 0,
                    state: "PAUSED",
                    description: "text...description"
                }
            ]
        }
        const jsonString = JSON.stringify(initialJSON);
        fs.writeFile(filePath, jsonString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON', err);
            } else {
                console.log("initial init")
            }
        })
    } else {
        console.log("initialized");
    }
}

function saveProject(projectObject) {
    const jsonString = JSON.stringify(projectObject);
    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON', err);
        } else {
            console.log("SUCCESS saved init")
        }
    })
}

function readProject(projectName) {
    return readFile(filePath, 'utf8')
}

module.exports = {
    saveProject,
    readProject,
    initialize,
}



// const helo = await readProject()
// console.log("helo:", helo);

// const http = require('http');

// const server = http.createServer( async (req, res) => {
//     if (req.url === '/') {
//         res.write(JSON.stringify([1, 2, "JSON Object"]));
//         res.end();
//     }

//     if (req.url === '/read') {
//         const projectObj = await readProject();
//         console.log("projectObj:", projectObj);
//         res.write(JSON.stringify(projectObj))
//         res.end();
//     }

// })

// server.listen(3003)
// console.log("listening on port 3003")
