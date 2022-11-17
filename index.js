const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	const writeData = await fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont change function name
	const readData = await fs.readFile(fileName, "utf-8");
	console.log(readData);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	const updateFile = await fs.appendFile(fileName, fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont change function name
	const deleteFile = await fs.unlink(fileName);
}
myFileWriter("File.txt", "This is my first project on Nodejs");
myFileReader("File.txt");
myFileUpdater("File.txt", " Hello I am learning Node Js");
myFileDeleter("File.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }