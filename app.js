const fs= require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs
    .command('add','Add a new note',{
      title:{
        describe: 'Title of the note',
        demand: true,
        alias: 't'
      }
    })
    .help()
    .argv;
var command = argv._[0];

if(command === 'list'){
  var all = notes.getAll();
  all.forEach((note)=>console.log(note));

}else if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note.length === 0){
    console.log("not saved");
  }else{
    console.log("Success");
    console.log("-------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

  }
}else if(command === 'remove'){
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note not found';
  console.log(message);
}else if(command === 'read'){
  var note = notes.readNote(argv.title);
  var message = note.length !== 0 ? `Body: ${note[0].body}` : 'Note not found';
  console.log(message);
}else {
  console.log('Unkonwn argument');
}
