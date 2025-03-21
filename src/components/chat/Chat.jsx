import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react"


const Chat = () => {

    const handleEmojiClick = e => {
        console.log(e)
    }
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('')


    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span> Ashley Sandor</span>
                        <p>User description</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message" />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={(prev) => !prev} />
                    <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat