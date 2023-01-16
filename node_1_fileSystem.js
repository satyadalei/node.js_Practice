const fs = require("fs");
 //########################## creating new file and adding content in that ###############
//fs.writeFileSync("node_1_fileSystem.txt","Hello there it is a file created using node.js");
 //fs.writeFileSync("node_1.c","#include<stdio.h>\n#include<conio.h>\nvoid main(){\n  printf('Hello I am Satya');\n}");
 //########################## adding new data without deleting previos data ######################
 //fs.appendFileSync("./node_1_fileSystem.txt","\n Its me satya. I am fine thank you");
 //######################## Reading file data #####################
// const dataInFile = fs.readFileSync("node_1_fileSystem.txt");
// console.log(dataInFile);
// console.log(dataInFile.toString());
// const cFileData = fs.readFileSync("./node_1.c");
// console.log(cFileData);
// const originalData = cFileData.toString(); // comverting buffer data to string
// console.log(originalData);

// ################### Renaming the file ####################
fs.renameSync("node_1_fileSystem.txt","node_1_fileSystemRenamed.txt");