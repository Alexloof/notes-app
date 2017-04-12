import { Meteor } from "meteor/meteor";
import expect from "expect";

import { validateNewUser } from "./users";

if (Meteor.isServer) {
    describe("user", function () {
        it("should allow valid email adress", function () {
            const testUser = {
                emails: [
                    {
                        address: "Test@example.com"
                    }
                ]
            };
            const res = validateNewUser(testUser);
            expect(res).toBe(true);
        });

        it("should reject invalid email", function () {
            const testUser = {
                emails: [
                    {
                        address: "hejhej.email.com"
                    }
                ]
            };
            expect(() => {
                validateNewUser(testUser);
            }).toThrow();
        });
    })

}

