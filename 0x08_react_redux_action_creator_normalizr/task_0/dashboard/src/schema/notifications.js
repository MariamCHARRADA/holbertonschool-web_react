import * as notifications from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  const list = [];

  for (let i = 0; i < notifications.default.length; i++) {
    const notification = notifications.default[i];
    if (notification.author.id === userId) {
      list.push(notification.context);
    }
  }
  return list;
}
