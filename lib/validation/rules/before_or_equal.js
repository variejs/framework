"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDate = require("validator/lib/toDate");
var isBefore = require("validator/lib/isBefore");
exports.default = {
    passes: function (value, parameters) {
        var date = toDate(parameters[0]);
        if (value) {
            date.setDate(date.getDate() + 1);
            return isBefore(value, date.toLocaleDateString("en-US"));
        }
    },
    replacers: function () {
        return ['date'];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmb3JlX29yX2VxdWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvYmVmb3JlX29yX2VxdWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQStDO0FBQy9DLGlEQUFtRDtBQUVuRCxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVLEVBQUUsVUFBZ0I7UUFDakMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQyJ9