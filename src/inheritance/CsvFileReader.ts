import fs from "fs";



export abstract class CsvFileReader<T> {
  data: string[][] = [];
  parsedData: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string []): T

  read() {
    const matches = fs.readFileSync(this.filename, {
      encoding: "utf-8",
    }); 
    const sorted = matches
      .split("\n")
      .map((s: string): string[] => s.split(","));
    // data should be returned here from sorted
    this.fomart(sorted);

    this.parsedData = this.data.map(this.mapRow);
  }

  // do nothing if no fomarter needed
  fomart (sorted: string [][]) {
    this.data = sorted
  }
}
