import { CsvFileReader } from "./inheritance/CsvFileReader";
import { MatchData, MatchResult } from "./types";
import { dateStringToDate } from "./utils";

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }

  fomart = (sorted: string[][]) => {
    const requiredColumIndexs = [1, 2, 3, 4, 5, 9, 10];
    sorted.map((v, i) => {
      const temp: string[] = [];
      v.map((item, index) => {
        if (requiredColumIndexs.includes(index)) {
          temp.push(item);
        }
      });
      temp.length && this.data.push(temp);
    });
  };
}