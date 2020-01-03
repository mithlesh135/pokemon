import React from 'react';
import Pager from "./pager";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon"; 

let prevFn, nextFn, wrapper;
beforeEach(() => {
    prevFn = sinon.spy();
    nextFn = sinon.spy();
    wrapper = shallow(<Pager prevPage = {prevFn} nextPage = {nextFn}/>);
});

describe("ListItem Component", () => {
    it("renders prev and next buttons", () => {
        expect(wrapper.find("button").length).to.equal(2);
    });

    it("invokes respective callbacks on button clicks", () => {
        wrapper.find("button:first-child").simulate("click");
        expect(prevFn.called).to.equal(true);

        wrapper.find("button:last-child").simulate("click");
        expect(nextFn.called).to.equal(true);
    });
}); 