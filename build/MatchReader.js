"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("./inheritance/CsvFileReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fomart = function (sorted) {
            var requiredColumIndexs = [1, 2, 3, 4, 5, 9, 10];
            sorted.map(function (v, i) {
                var temp = [];
                v.map(function (item, index) {
                    if (requiredColumIndexs.includes(index)) {
                        temp.push(item);
                    }
                });
                temp.length && _this.data.push(temp);
            });
        };
        return _this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5],
            row[6],
        ];
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
