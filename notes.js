const fs = require('fs');

// CONVERTENDO ARRAY PARA OBJETO
// const arrayToObject = (array) =>
//    array.reduce((obj, item) => {
//      obj[item.id] = item
//      return obj
//    }, {})

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes_json.json');
        return JSON.parse(noteString);
        
    } catch(e){
        return [];
    }    
};

var saveNote = (notes) => {
    fs.writeFileSync('notes_json.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter( (nota) => nota.title === title  ); // retorna boolean na arrow function, para a variavel duplicateNotes ---- (nota) => nota.title funciona como foreach
    if(duplicateNotes.length === 0){  
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

var getAll = () => {

    return fetchNotes();
};

var getNote = (title) => {

    var notes = fetchNotes();
    var filteredNotes = notes.filter( (nota) => nota.title === title );
    return filteredNotes[0];
}

var removeNote = (title) => {

    var notes = fetchNotes();
    var filteredNotes = notes.filter( (nota) => nota.title !== title );
    saveNote(filteredNotes);

    return notes.length !== filteredNotes.legnth;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote

}