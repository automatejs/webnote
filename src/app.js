import template from './app.html';
import './app.css';
import { NoteService } from './service';

@automate.component({
    namespace: 'webnote',
    key: 'app',
    template: template,
    inject: {
        noteService: NoteService
    }
})
class App extends automate.Component {
    constructor() {
        super();
        this.noteService.load();
        this.state.notes = this.noteService.getList();
    }

    createNote() {
        this.noteService.create(this.state.notes);
        this.noteService.save();
    }

    saveNote() {
        this.noteService.save();
    }

    clearNote() {
        this.noteService.removeAll(this.state.notes);
        this.noteService.save();
    }

    removeNote(note) {
        this.noteService.remove(this.state.notes, note);
        this.noteService.save();
    }

    editNote() {
        this.noteService.toggleEdit();
    }
}