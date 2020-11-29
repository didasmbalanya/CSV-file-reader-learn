"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
        this.parsedData = [];
    }
    CsvFileReader.prototype.read = function () {
        var matches = fs_1.default.readFileSync(this.filename, {
            encoding: "utf-8",
        });
        var sorted = matches
            .split("\n")
            .map(function (s) { return s.split(","); });
        // data should be returned here from sorted
        this.fomart(sorted);
        this.parsedData = this.data.map(this.mapRow);
    };
    // do nothing if no fomarter needed
    CsvFileReader.prototype.fomart = function (sorted) {
        this.data = sorted;
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
