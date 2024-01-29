//last in first out!
function bar(){
    console.log("bar");
    throw new Error("Error in bar function.");
}

function foo(){
    console.log("foo");
    bar();
}

foo();