import React from "react";
import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../action/types";

it('handles action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new Comment'
    };
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['new Comment']);
});

it('handles actions with unknown type', () => {
    const newState = commentsReducer([], { type: "UNKNOWN"});
    expect(newState).toEqual([]);
});