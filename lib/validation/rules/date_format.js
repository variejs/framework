"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDate = require("validator/lib/toDate");
exports.default = {
    passes: function (value, parameters) {
        if (value && toDate(value)) {
            console.info(parameters);
            console.info(toDate(value));
            // return  ? true : false;
            return false;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZV9mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9kYXRlX2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErQztBQUUvQyxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVLEVBQUUsVUFBZTtRQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsMEJBQTBCO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMifQ==