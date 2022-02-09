// Compare to regular DOM elements
const h1 = document.createElement("h1");
h1.textContent = "This is a test";
h1.className = "test";
document.getElementById("root").append(h1);

// <h1 class="header">


/* */


const element = <h1 className="header">This is JSX</h1>
console.log(element);

/*
{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
*/