function printhello(){
    console.log("Hello boi");
}

function printbye(){
    console.log("TATA");
}

function dbleclick(){
    console.log("Double Clikc Event.")
}

export default function Button(){
    return(<div>
            <button onClick={printhello}>
                Click me!!
            </button>
            <p onMouseOver={printbye}>What to leave the site?</p>
            <button onDoubleClick={dbleclick}>Double Click Button</button>
        </div>
        );
}