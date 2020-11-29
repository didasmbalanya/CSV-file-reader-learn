"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader('season-1819_csv.csv');
reader.read();
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n');
console.log(reader.parsedData);
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n');
