"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var _ = require("lodash");
exports.add = function(state, notification) {
  notification.id = guid();
  state.notifications.push(notification);
};
exports.remove = function(state, notification) {
  vue_1.default.set(
    state,
    "notifications",
    _.reject(state.notifications, { id: notification.id })
  );
};
// TODO - this needs to be moved out
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsdWdpbnMvbm90aWZpY2F0aW9ucy9zdG9yZS9ub3RpZmljYXRpb25zL211dGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUFzQjtBQUN0QiwwQkFBNEI7QUFJZixRQUFBLEdBQUcsR0FBRyxVQUNqQixLQUF5QixFQUN6QixZQUErQjtJQUUvQixZQUFZLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO0lBQ3pCLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLFVBQ3BCLEtBQXlCLEVBQ3pCLFlBQStCO0lBRS9CLGFBQUcsQ0FBQyxHQUFHLENBQ0wsS0FBSyxFQUNMLGVBQWUsRUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3ZELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixvQ0FBb0M7QUFDcEM7SUFDRTtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FDTCxFQUFFLEVBQUU7UUFDSixFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osR0FBRztRQUNILEVBQUUsRUFBRTtRQUNKLEdBQUc7UUFDSCxFQUFFLEVBQUU7UUFDSixHQUFHO1FBQ0gsRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFO1FBQ0osRUFBRSxFQUFFLENBQ0wsQ0FBQztBQUNKLENBQUMifQ==
