import express from "express";

const app = express();
const port: string = process.env.PORT ?? "9001";

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});