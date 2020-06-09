
@automate.directive({
    namespace: 'webnote',
    key: 'noteResize'
})
class NoteResize extends automate.Directive {
    constructor() {
        super();
    }

    afterLink() {
        var x, y;
        var scope = this.$scope;
        var hammerTime = new Hammer(this.$element);

        hammerTime.on('panstart', function() {
            var size = scope.props.model.size;
            x = size.width;
            y = size.height;
        });

        hammerTime.on('panmove', function(ev) {
            var size = scope.props.model.size;
            size.width = x + ev.deltaX;
            size.height = y + ev.deltaY;
        });
    }
}