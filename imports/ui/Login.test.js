import { Meteor } from "meteor/meteor";
import React from "react";
import expect from "expect";
import { mount } from "enzyme";

if (Meteor.isClient) {
    describe("Login", function () {

        it("should show error messages", function () {
            const error = "This is not working";
        });
    });
}