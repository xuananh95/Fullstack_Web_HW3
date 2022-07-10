const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.writeHead(200);
    if (req.url === "/") {
        res.end(`<b>Đây là trang chủ</b>`);
    } else if (req.url === "/about") {
        res.end(`<b>Đây là thông tin cá nhân của bản thân.</b>`);
    } else {
        res.end(`<b>Đường dẫn không tồn tại</b>`);
    }
});
server.listen(5000);
