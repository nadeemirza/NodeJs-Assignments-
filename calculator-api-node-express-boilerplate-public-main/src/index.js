let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
const checkvalue = (num1, num2) => {
  if (num1 == "" || num2 == "") {
    return true;
  }
  return false;
};
const checkDataType = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return true;
  }
  return false;
};
const underflow = (num1, num2, result) => {
  if (num1 < -10000000 || num2 < -10000000 || result < -10000000) {
    return true;
  }
  return false;
};
const overflow = (num1, num2, result) => {
  if (num1 > 10000000 || num2 > 10000000 || result > 10000000) {
    return true;
  }
  return false;
};
app.post("/add", (req, res) => {
  let { num1, num2 } = req.body;
  if (checkvalue(num1, num2)) {
    return res.send({
      status: "error",
      message: "Please provide valid inputs",
    });
  }
  if (checkDataType(num1, num2)) {
    return res.send({
      status: "error",
      message: "Invalid data types",
    });
  }
  let rest = Number(num1) + Number(num2);
  if (underflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Underflow",
    });
  }
  if (overflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Overflow",
    });
  }
  res.send({
    status: "Success",
    message: "the sum of given two numbers",
    sum: rest,
  });
});
app.post("/sub", (req, res) => {
  let { num1, num2 } = req.body;
  if (checkvalue(num1, num2)) {
    return res.send({
      status: "error",
      message: "Please provide valid inputs",
    });
  }
  if (checkDataType(num1, num2)) {
    return res.send({
      status: "error",
      message: "Invalid data types",
    });
  }
  let rest = Number(num1) - Number(num2);
  if (underflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Underflow",
    });
  }
  if (overflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Overflow",
    });
  }
  res.send({
    status: "Success",
    message: "the difference of given two numbers",
    difference: rest,
  });
});
app.post("/multiply", (req, res) => {
  let { num1, num2 } = req.body;
  if (checkvalue(num1, num2)) {
    return res.send({
      status: "error",
      message: "Please provide valid inputs",
    });
  }
  if (checkDataType(num1, num2)) {
    return res.send({
      status: "error",
      message: "Invalid data types",
    });
  }
  let rest = Number(num1) * Number(num2);
  if (underflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Underflow",
    });
  }
  if (overflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Overflow",
    });
  }
  res.send({
    status: "Success",
    message: "The product of given numbers",
    result: rest,
  });
});
app.post("/divide", (req, res) => {
  let { num1, num2 } = req.body;
  if (checkvalue(num1, num2)) {
    return res.send({
      status: "error",
      message: "Please provide valid inputs",
    });
  }
  if (checkDataType(num1, num2)) {
    return res.send({
      status: "error",
      message: "Invalid data types",
    });
  }
  let rest = Number(num1) + Number(num2);
  if (underflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Underflow",
    });
  }
  if (overflow(num1, num2, rest)) {
    return res.send({
      status: "error",
      message: "Overflow",
    });
  }
  if (Number(num2) == 0) {
    return res.send({
      status: "error",
      message: "Cannot divide by zero",
    });
  }
  res.send({
    status: "Success",
    message: "The division of given numbers",
    result: rest,
  });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
