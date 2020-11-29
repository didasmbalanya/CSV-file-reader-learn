"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var _a = dateString.split('/').map(function (value, index) {
        if (index === 1)
            return Number(value) - 1;
        return Number(value);
    }), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month, day);
};
var date = exports.dateStringToDate('1/08/2018');
