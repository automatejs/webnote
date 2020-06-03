import template from './note.html';
import { NoteService } from '../service';

@automate.component({
    namespace: 'webnote',
    key: 'note',
    template: template,
    inject: {
        noteService: NoteService
    },
})
class NoteComponent extends automate.Component {
    constructor() {
        super();
        this.state.isEditing = false;
        this.props.model = null;
        this.events.closed = new automate.Message();
        this.init();
    }

    init() {
        var self = this;

        this.state.isEditing = this.noteService.isEditing;

        this.noteService.events.editStateChange.on(() => {
            self.state.isEditing = self.noteService.isEditing;
        });

        this.$watchCollection('props.model', function () {
            self.noteService.save();
        });

        this.$watchCollection('props.model.position', function () {
            self.noteService.save();
        });
    }

    onMouseDown() {
        if (!this.noteService.isMaxZIndex(this.props.model.zIndex)) {
            this.props.model.zIndex = this.noteService.nextZIndex();
        }
    }

    close() {
        this.events.closed.fire();
    }
    
    onDestroy() {
        
    }
}