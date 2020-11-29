import { MatchReader } from "./MatchReader";

const reader = new MatchReader('season-1819_csv.csv')
reader.read();


// read data from a csv
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
console.log(reader.parsedData)
console.log('\n\n>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<\n\n')
