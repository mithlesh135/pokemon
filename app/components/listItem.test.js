import React from 'react';
import ListItem from "./listItem";
import { shallow } from "enzyme";
import { expect } from "chai"; 

let data, wrapper;
beforeEach(() => {
    data = {name: "test", "id": "1", sprites: { front_default: "http://image" }};
    wrapper = shallow(<ListItem {...data}/>);
});

describe("ListItem Component", () => {
    it("creates listItem with passed data", () => {
        expect(wrapper.find("label:first-child").text()).to.equal(data.name);
        expect(wrapper.find("label:last-child").text()).to.equal(`ID: ${data.id}`);
        expect(wrapper.find("img").prop("src")).to.equal(data.sprites.front_default);
    });
}); 