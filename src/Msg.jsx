export default function({username , textcolor}){
    return (
        <h1 style={{color: textcolor}}>Hi {username.toUpperCase()} </h1>
    );
};
