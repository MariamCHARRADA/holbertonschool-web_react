import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = {
    notifications: [],
    filter: "DEFAULT",
  };

  it("should return the initial state when no action is passed", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ],
    };
    const expectedState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      ],
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ", () => {
    const action = { type: MARK_AS_READ, index: 2 };
    const state = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      ],
    };
    const expectedState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      ],
    };
    expect(notificationReducer(state, action)).toEqual(expectedState);
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const expectedState = {
      ...initialState,
      filter: "URGENT",
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
