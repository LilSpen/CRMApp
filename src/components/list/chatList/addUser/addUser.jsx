import "./addUser.css";
import { useState } from "react";
import {db} from "/lib/firebase";
import {
    arrayUnion,
    collection, query, serverTimestamp, where 
} from "firebase/firestore";
import {useUserStore} from "/lib/userStore";

const AddUser = () => {

const [user, setUser] = useState(null)
const {currentUser} = useUserStore()

    const handleSearch = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target) 
        const username = form.get("username")
    
        try {
                const userRef = collection(db, "users");
                const q = query(userRef, where("username", "==", username));
                const querySnapShot = await getDoc(q)
    
                if(!querySnapShot.empty) {
                    setUser(querySnapShot.docs[0].data())
                }
        } catch (err) {
            console.log(err)
        }
    }

    const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");

        try {
            const newChatRef = doc(chatRef)

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });

            await updateDoc(doc(userChatsRef, user.id), {
                chats:arrayUnion ({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });
            await updateDoc(doc(userChatsRef, currentUser .id), {
                chats:arrayUnion ({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });
        } catch (err) {
            console.log(err);
            
        }
    }

    return(
    <div className="addUser">
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Username" name="username" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src={user.avatar || "./avatar.png"} alt="" />
                <span>{user.username}</span>
            </div>
            <button onClick={handleAdd}>Add User</button>
        </div>
    </div>
)}

export default AddUser;