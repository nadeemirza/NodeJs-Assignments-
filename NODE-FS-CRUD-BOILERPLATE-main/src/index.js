const fs = require("fs/promises");
// const path = require("path");
const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  let readData = await fs.writeFile(fileName, fileContent);
};
const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  let writeData = await fs.readFile(fileName, "utf-8");
  console.log(writeData);
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  let updData = await fs.appendFile(fileName, fileContent);
  console.log(updData);
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };

myFileWriter("hello.py", "# A python file ");
myFileReader("hello.py");
myFileUpdater("hello.py", " added");
myFileDeleter("hello.py");
