import "./addUser.css";
import { useState } from "react";


const AddUser = () => {
    <div className="addUser">
        <form>
            <input type="text" placeholde="Username" name="username" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>John Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
}

export default AddUser;