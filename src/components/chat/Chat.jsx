import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useRef, useState, useEffect } from "react"
import { doc, onSnapshot} from "firebase/firestore";
import {db} from "/lib/firebase"
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {

    const handleEmojiClick = e => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }

    const [chat, setChat] = useState();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const endRef = useRef(null);

    const {chatId} = useChatStore();

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, []);

    useEffect(() => {
        const unSub = onSnapshot(
            doc(db, "chats", chatId), 
            (res)=> {
            setChat(res.data());
        }
    );

    return () => {
        unSub();
    };
    }, [chatId]);

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
            <div className="center">
                {chat?.messages?.map((message) => (
                    <div className="message own" key={message?.createAt}>
                        <div className="texts">
                            {message.img && <img
                            src={message.img}
                            alt=""
                            />}

                        <p>
                                {message.text}
                        </p>
                        {/* <span>{message}</span> */}
                    </div>
                </div>     
            ))}
            <div ref={endRef}>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message" onChange={e => setText(e.target.value)}
                    value={text}
                />
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat