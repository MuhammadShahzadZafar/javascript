(function(){
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from IIFE');
    hello ();
})();
(function(name) {
    console.log('Hello' + name)
}
)(' Shawn');