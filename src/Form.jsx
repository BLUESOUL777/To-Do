function subhandle(event){
    event.preventDefault();
    console.log("The form was submitted");
}

export default function Form(){
    return(
        <form onSubmit={subhandle}>
            <input type="text" placeholder="Enter Name" />
            <button>Submit</button>
        </form>
    )
}