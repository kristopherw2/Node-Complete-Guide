const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    const url = req.url;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body>");
        res.write(
            "<form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Submit</button></form>"
        );
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log(chunk)
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            res.statusCode = 302;
            res.setHeader("location", "/")
            console.log(message);
        });
    }

    if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body>");
        res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body>");
    res.write("<h1>Hello, this is my node.js server!</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
});

server.listen(3000);

// const requestHandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (req.url === "/") {
//         res.write("<html>");
//         res.write('<body>')
//         res.write("<h1>Hello, this is my node.js server!</h1>");
//         res.write('</body>');
//         res.write("</html>");
//         return res.end();
//     }

//     if(req.url === "/users"){
//       res.write("<html>");
//       res.write("<body>");
//       res.write("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
//       res.write("</html>");
//       res.write("</body>");
//       return res.end();
//     }
// };
