
@automate.service({
    namespace: 'webnote',
    key: 'noteService'
})
export class NoteService extends automate.Service {
    constructor() {
        super();
        this.zIndex = 0;
        this.notes = [];
        this.isEditing = false;
        this.events = {
            editStateChange: new automate.Message()
        };
    }

    nextZIndex() {
        return ++this.zIndex;
    }

    isMaxZIndex(zIndex) {
        return zIndex >= this.zIndex;
    }

    create(notes) {
        var newNote = {
            content: 'new note',
            position: {
                x: 20,
                y: 20
            },
            size: {
                width: 180,
                height: 180
            },
            zIndex: this.nextZIndex()
        };

        notes.push(newNote);

        return newNote;
    }

    getList() {
        return this.notes;
    }

    load() {
        var self = this,
            json = localStorage.getItem('notes');
        if (json) {
            this.notes = JSON.parse(json);
            this.notes.forEach(function (note) {
                if (note.zIndex > self.zIndex) {
                    self.zIndex = note.zIndex;
                }
            });
        }
    }

    save() {
        localStorage.setItem('notes', JSON.stringify(this.getList()));
    }

    removeAll(notes) {
        notes.length = 0;
    }

    remove(notes, note) {
        var index = notes.indexOf(note);

        if (index !== -1) {
            notes.splice(index, 1);
        }
    }

    toggleEdit() {
        this.isEditing = !this.isEditing;
        this.events.editStateChange.fire();
    }
}