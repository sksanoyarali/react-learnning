
// const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
// console.log(heading);
import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 taghljlhs,hk"),React.createElement("h2",{},"I am h2 tag")]
    ),
   React.createElement("div",{id:"child2"},
    [React.createElement("h3",{},"i am hskhwsh3"),React.createElement("p",{},"i am p tag")]
   )]
);
console.log(parent);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);