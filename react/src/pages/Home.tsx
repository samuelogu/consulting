import {useState} from "react";

export function Home() {
const [text, setText] = useState("Wonderful world");

const handleClick = () => {
    setText("Beautiful world");
}
    return (
        <>
            <h1>{text}</h1>
            <button onClick={handleClick} className="btn btn-info">Change text</button>
        </>
    )
}