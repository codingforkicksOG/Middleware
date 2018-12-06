const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const supplierRouter = require("./supplier_router");
const itemRouter = require("./item_router");

const server = express();
const PORT = process.env.PORT || 5050;

server.use(
   express.json(),
   helmet(),
   morgan("dev")
)

server.use("/api/suppliers", supplierRouter);
server.use("/api/items", itemRouter);

server.listen(PORT, (err) => {
   console.log(`server running on ${PORT}`)
});