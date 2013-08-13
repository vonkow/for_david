// We wrap everything in an anonymous function so that we don't leak global variables
(function($, _, undefined){
    // PUT YOUR JAVASCRIPT HERE
    var colors = ['#0000ff', '#ff0000', '#00ff00'],
        index = -1,
        t
    t = window.setInterval(function(){
        index++
        if (index >= colors.length) index = 0
        $('#my-header').css({
            color: colors[index]
        })
    }, 1000)
})(jQuery, _);
// here we pass in jQuery and underscore to our scope (read: anonymous function).
// You don't have to do this, as $ and _ should already be jQuery and underscore
// but it ensures that $ is jQuery in our scope, even if someone re-defined $ elsewhere.
// Note, we aren't passing a 3rd argument for undefined, this is intentional.
// Someone could do something dumb like undefined = true and then the undefined keyword is ruined.
// However, if we don't pass a required argument to a function, that argument's value will be undefined.
// This way, we have defined undefined as truely undefined in our scope.
