import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://wallpapercave.com/wp/wp8741529.jpg")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">Movie name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">{truncate(`fdgdfgdfgdfg
                dfgfdgfdgdfgdfgfdhdfs
                dfgdsfgdfgdfgdfgdfgdfgfdgdsfg
                dfg
                dsfgdfgdfgfdgdfgdfgdfgdfgfdgfdgfd
                fdsggdddddddddddddddddddddddddd`, 100)}</div>

            </div>
            <div className="banner--fadebottom" />





        </header >
    )
}

export default Banner