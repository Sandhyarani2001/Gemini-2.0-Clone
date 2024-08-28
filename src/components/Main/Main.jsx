import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import MenuRecent from '../MenuRecent/MenuRecent'

function Main() {

    const [extended, setExtended] = useState(false)
    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput,newChat } = useContext(Context)
    return (
        <div className='main'>
            <div className="nav">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu" />
                {/* {extended? <MenuRecent/>:<p>Gemini</p>} */}
                <p>Gemini</p>
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="plus icon" />
                    {/* {extended ? <p>New Chat</p> : null} */}
                </div>
                <img src={assets.user_icon} alt="" className='profile'/>
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Sanvy.</span></p>
                            <p>How can i help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautyful places to on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div> 
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user icon" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? 
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                            
                        </div>

                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : " "}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main
