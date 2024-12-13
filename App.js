// const heading=React.createElement("h2",{},"heello world!");
const heading1=React.createElement("h2",{id:"hi1"},"heading1!");
const heading2=React.createElement("h2",{id: "hi2"},"heading2!");
const cont=React.createElement("div",{id:"contt"},[heading1,heading2]);


const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(cont);