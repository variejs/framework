"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(string) {
    return string
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        .toLowerCase();
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5jYW1lbGl6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5jYW1lbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1CQUF5QixNQUFjO0lBQ3JDLE1BQU0sQ0FBQyxNQUFNO1NBQ1YsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQztTQUNuQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDO1NBQzlDLFdBQVcsRUFBRSxDQUFBO0FBQ2xCLENBQUM7QUFMRCw0QkFLQyJ9