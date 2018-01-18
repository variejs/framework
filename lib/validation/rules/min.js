"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        return isLength(value, { min: attributes[0] });
    },
    message: function (attributes) {
        return "Minimum Length is " + attributes[0] + ".";
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFnQjtRQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxPQUFPLFlBQUMsVUFBZTtRQUNyQixNQUFNLENBQUMsdUJBQXFCLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFDIn0=