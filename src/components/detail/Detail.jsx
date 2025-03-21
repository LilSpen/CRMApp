import "./detail.css"


const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Evan Spencer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At non modi possimus consequuntur expedita distinctio amet officiis ab, temporibus repellat quia quas eaque, et maxime necessitatibus nemo similique incidunt error.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="photos">
                    <div className="photoItems">
                        <span>photo_2023_2.png</span>
                        <img src="./arrowUp.png" alt="" />

                    </div>
                    <img src="./download.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Detail