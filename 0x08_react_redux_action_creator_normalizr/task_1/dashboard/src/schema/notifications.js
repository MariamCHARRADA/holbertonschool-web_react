import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

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
const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notifications.default, [notification]);

export { normalized };
