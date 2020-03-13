import React from "react";
import { mount } from 'enzyme';
import CommentBox from "../CommentBox";
import Root from "../../Root";

let component;
beforeEach(() => {
    component = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
   component.unmount();
});

it('shows a textarea and a button ', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
});

describe("a textarea", () => {
    beforeEach(() => {
        component.find('textarea').simulate('change', {
            target: { value: "test comment"}
        });
        component.update();
    });

    it('has a textarea and user can type in', () => {
        expect(component.find('textarea').prop('value')).toEqual('test comment');
    });

    it('when form get submitted, textarea get emptied', () => {
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
});