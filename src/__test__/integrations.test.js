import React from "react";
import { mount } from 'enzyme';
import Root from "../Root";
import App from "../component/App";
import moxios from 'moxios';

beforeEach(() => {
   moxios.install();
   moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
       status: 200,
       response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
   })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of components and display them', (done) => {
    const component = mount(
        <Root>
            <App />
        </Root>
    );
    component.find('.fetch_comments').simulate('click');
    moxios.wait(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
        component.unmount();
    })
});