import React from "react";
import expect from "expect";
import { Meteor } from "meteor/meteor";
import { mount } from "enzyme";

import NoteListItem from "./NoteListItem";

if (Meteor.isClient) {
    describe("NoteListItem", function () {
        it("should render title and timestamp", function () {
            const title = "My title";
            const updatedAt = 1492021826752;
            const wrapper = mount(<NoteListItem note={{ title, updatedAt }} />);

            expect(wrapper.find("h5").text()).toBe(title);
            expect(wrapper.find("p").text()).toBe(" 4/12/17 ");
        });

        it("shoudld set default title if no title set", function () {
            const updatedAt = 1492021826752;
            const wrapper = mount(<NoteListItem note={{ updatedAt }} />);

            expect(wrapper.find("h5").text()).toBe("Untitled note");
            expect(wrapper.find("p").text()).toBe(" 4/12/17 ");
        });
        
    });
}