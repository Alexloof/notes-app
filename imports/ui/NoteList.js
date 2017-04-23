import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

import { Notes } from "../api/notes";
import NoteListHeader from "./NoteListHeader";
import NoteListItem from "./NoteListItem";
import NoteListEmptyItem from "./NoteListEmptyItem";

export const NoteList = (props) => {
    const renderNotes = function () {
        if (props.notes.length === 0) {
            return <NoteListEmptyItem />;
        } else {
            return (
                props.notes.map((note) => {
                    return <NoteListItem key={note._id} note={note} />;
                })
            );
        }
    }
    return (
        <div>
            <NoteListHeader />
            {renderNotes()}
        </div>
    );
};

NoteList.propTypes = {
    notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe("notes");

    return {
        notes: Notes.find().fetch()
    };
}, NoteList);
