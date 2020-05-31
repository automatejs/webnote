
@automate.directive({
    namespace: 'webnote',
    key: 'note-pan'
})
class NotePan extends automate.Directive {
    constructor() {
        super();
    }

    afterLink() {
        var x, y;
        var scope = this.$scope;
        var hammerTime = new Hammer(this.$element);

        hammerTime.on('panstart', function () {
            var pos = scope.props.model.position;
            x = pos.x;
            y = pos.y;
        });

        hammerTime.on('panmove', function (ev) {
            var pos = scope.props.model.position;
            pos.x = x + ev.deltaX;
            pos.y = y + ev.deltaY;
        });
    }
}