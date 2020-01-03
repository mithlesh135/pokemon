import React from 'react';
import List from "./list";
import { shallow } from "enzyme";
import { expect } from "chai"; 

let data, wrapper;
beforeEach(() => {
    data = [{name: "test", "id": "1"}, {name: "test1", "id": "2"}]
    wrapper = shallow(<List items={data}/>);
});

describe("List Component", () => {
    it("creates list with passed data", () => {
        expect(wrapper.find("ul").length).to.equal(1);
        expect(wrapper.find("ul li").length).to.equal(2);
    });
}); 