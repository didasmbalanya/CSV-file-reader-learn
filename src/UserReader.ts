import { CsvFileReader } from "./inheritance/CsvFileReader";
import { UserData } from "./types";
import { dateStringToDate } from "./utils";

export class UserReader extends CsvFileReader<UserData> {
  mapRow(row: string[]): UserData {
    return [row[0], row[1], Number(row[2]), row[3]];
  }
}
