"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(data, path, defaultValue) {
    var value = path.split(".").reduce(function (prev, curr) {
        return prev ? prev[curr] : undefined;
    }, data);
    return value !== undefined ? value : defaultValue;
}
exports.default = get;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxhQUE0QixJQUFJLEVBQUUsSUFBWSxFQUFFLFlBQWtCO0lBQ2hFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVMsSUFBWSxFQUFFLElBQVk7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRVQsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ3BELENBQUM7QUFORCxzQkFNQyJ9