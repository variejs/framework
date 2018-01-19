"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getByDot(data, path, defaultValue) {
    var value = path.split(".").reduce(function (prev, curr) {
        return prev ? prev[curr] : undefined;
    }, data);
    return value !== undefined ? value : defaultValue;
}
exports.default = getByDot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QnlEb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2dldEJ5RG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0JBQ0UsSUFBWSxFQUNaLElBQVksRUFDWixZQUFrQjtJQUVsQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQVksRUFBRSxJQUFZO1FBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVULE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUNwRCxDQUFDO0FBVkQsMkJBVUMifQ==