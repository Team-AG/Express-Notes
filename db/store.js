/*===================================================================================================================
                                                Key variables
                                                
             This package will be used to generate our unique ids.https: //www.npmjs.com/package/uuid
===================================================================================================================*/

const {
  util,
  fs,
  uuidv1
} = constRequireFunction();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

/*=====================================================================================================================
                                Generates a function that allows you to store 
=====================================================================================================================*/
class Store {

  read() {
    return readFileFunction();
  }
  write(note) {
    const notes = this.noteCommand(note);
    return notes;
  }
  noteCommand(note) {
    const writeFiles = writeFileAsync("./db.json", JSON.stringify(note));
    return writeFiles;
  }


  /*=====================================================================================================================
                                  Get Function
  =====================================================================================================================*/
  getNotes() {
    const notes = this.read();
    /*=====================================================================================================================
                        Writes a....
                    1) function that coordinates with the above read function with in the function,
                    2) parses the notes
    =====================================================================================================================*/
    let parsedNotes = parseNotesFunction();
    /*=====================================================================================================================
                    Send Back in array function
    =====================================================================================================================*/
    let __return;
    ({
      __return,
      parsedNotes
    } = this.generateParseNotes(parsedNotes, notes));
    return __return;
  }
  generateParseNotes(parsedNotes, notes) {
    parsedNotes = this.ifNotArraySendBackIntoEmptyArrayFunction(parsedNotes, notes);
    return {
      __return: parsedNotes,
      parsedNotes
    };
  }
  ifNotArraySendBackIntoEmptyArrayFunction(parsedNotes, notes) {
    parsedNotes = [].concat(JSON.parse(notes));
    return parsedNotes;
  }


  /*=====================================================================================================================
                      Add Note Function
      =====================================================================================================================*/
  addNote(newNote) {
    /*=====================================================================================================================
                                Setting the variables w/ our data from notes
    =====================================================================================================================*/
    const {
      title,
      text
    } = newNote;
    this.consoleLogNewNote(newNote);
    /*=====================================================================================================================
                                        Id from uuid Package
    =====================================================================================================================*/
    const noteId = this.uuidv1TitleTextFunction(title, text);
    const NotesInput = this.retrieveNotes();
    /*=====================================================================================================================
                                Grabs, Adds, Write on all Notes, Then Returns a function 
    =====================================================================================================================*/
    return this.noteVariableOutputs(NotesInput, noteId);
  }
  uuidv1TitleTextFunction(title, text) {
    return {
      title,
      text,
      id: uuidv1()
    };
  }
  retrieveNotes() {
    return this.getNotes();
  }
  noteVariableOutputs(NotesInput, noteId) {
    const notes = NotesInput;
    const newNotes = this.notesFunction(notes, noteId);
    this.newNoteFunction(newNotes);
    return noteId;
  }
  consoleLogNewNote(newNote) {
    console.log(newNote);
  }
  newNoteFunction(newNotes) {
    this.newNoteFunctionInput(newNotes);
  }
  newNoteFunctionInput(newNotes) {
    this.write(newNotes);
  }
  notesFunction(notes, noteId) {
    return [...notes, noteId];
  }


  /*=====================================================================================================================
                                              Remove Function
  ========================================================================+============================================*/

  removeNote(id) {
    /*=====================================================================================================================
                                                Filter out Function 
    ========================================================================+============================================*/
    const notes = this.getNotes();
    return this.notesIdFunction(notes, id);
  }
  notesIdFunction(notes, id) {
    const remainingNotes = this.notesIdInput(notes, id);
    return this.remainingNotesFunction(remainingNotes);
  }
  notesIdInput(notes, id) {
    const noteFilters = notes.filter(note => note.id !== id);
    return noteFilters;
  }
  /*=====================================================================================================================
                                          Remaining Filter Function 
  ========================================================================+============================================*/
  remainingNotesFunction(remainingNotes) {
    return this.write(remainingNotes);
  }
};


/*=====================================================================================================================
                            Exports command Function
=====================================================================================================================*/
module.exports = new Store();


/*=====================================================================================================================
                            Above Required Functions
=====================================================================================================================*/

function constRequireFunction() {
  const util = require("util");
  const fs = require("fs");
  const uuidv1 = require("uuid/v1");
  return {
    util,
    fs,
    uuidv1
  };
}
/*=====================================================================================================================
                            Above Read File Function
=====================================================================================================================*/
function readFileFunction() {
  return readFileAsync("./db.json", "utf8");
}
/*=====================================================================================================================
                            Above Parse note Function within Get notes
=====================================================================================================================*/
function parseNotesFunction() {
  let parsedNotes;
  return parsedNotes;
}