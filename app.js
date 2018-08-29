const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes/notes.js');

const argv = yargs.argv;
var command = argv._[0];
// console.log(process.argv);
//console.log('Yargs: ' + argv);
debugger;

console.log(argv);

if(command === 'add'){

    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Nota: ');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log('Já existe uma nota com esse título');
    }
}else if(command === 'list'){

    var notesList = notes.getAll();
    notesList.forEach( (nota) => 
        console.log(nota.title)   
    );
}else if(command === 'read'){

    var note = notes.getNote(argv.title);
    if(note){
        console.log(`Body: ${note.body}`);
    }else{
        console.log('Note not found!');
    }
  //  console.log(notaLida.body);

}else if( command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed sucessuly' : 'There was not any notes to be removed';
    console.log(message); 
}else{
    console.log('Command not recognized');
}