const fs = require('fs');

// fn() to read(retrieve) notes from file
const fetchNotes = () => {
    try{
        const noteString = fs.readFileSync('notes_json.json');
        return JSON.parse(noteString);
        
    } catch(e){
        return [];
    }    
};

// fn() to write notes in file
const saveNote = (notes) => {
    fs.writeFileSync('notes_json.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    const notes = fetchNotes(); // retrieve existing Notes
    const note = {
        title,
        body
    }
    const duplicateNotes = notes.filter( (nota) => nota.title === title  ); // return true if find any title that matches ---- (nota) => nota.title works as a foreach
    if(duplicateNotes.length === 0){  
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

const getAll = () => {

    return fetchNotes();
};

const getNote = (title) => {

    const notes = fetchNotes();
    let filteredNotes = notes.filter( (nota) => nota.title === title );
    return filteredNotes[0];
}

const removeNote = (title) => {

    const notes = fetchNotes();
    let filteredNotes = notes.filter( (nota) => nota.title !== title );
    saveNote(filteredNotes);

    return notes.length !== filteredNotes.legnth;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote

}