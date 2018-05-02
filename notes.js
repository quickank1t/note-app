console.log("starting notes.js");
const fs = require('fs');

var fetchNotes = ()=>{
  try{
    var previousText = fs.readFileSync('notes-data.json');
    return JSON.parse(previousText);
  }catch(e){return []}
};

var saveNotes =(notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote =(title,body)=>{
  var notes = [];
  var textToSave = {
    title,
    body
  };

  notes = fetchNotes();

  var duplicateNotes = notes.filter((note)=> note.title === title);
  if (duplicateNotes.length === 0){
    notes.push(textToSave);
    saveNotes(notes);
    return textToSave;
  }
  return [];
};

var getAll =()=>{
  return fetchNotes();
}

var removeNote =(title)=>{
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);
  return notes.length !== filterNotes.length;
}

var readNote =(title)=>{
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title === title);
  return filterNotes ? filterNotes : [] ;
  console.log('Read note');
}

var logChages =(title,body)=>{
  console.log(`Title:${title}`);
  console.log(`Body:${body}`);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote,
  logChages
};
