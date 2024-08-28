import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets';
import './MenuRecent.css'
import { Context } from '../../context/Context';

function MenuRecent() {
    // const [extended, setExtended] = useState(false);
    const { prevPrompt, setRecentPrompt, onSent } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <>
            {/* <img
                onClick={() => setExtended(prev => !prev)}
                className='menu'
                src={assets.menu_icon}
                alt="menu"
            /> */}
            {/* {extended && (
                <>
            
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item, index) => (
                            <div
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                                key={index}
                            >
                                <img src={assets.message_icon} alt="message icon" />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
                </>
            )} */}


            <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompt.map((item, index) => (
                            <div
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                                key={index}
                            >
                                <img src={assets.message_icon} alt="message icon" />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                        ))}
                    </div>
        </>
    );
}

export default MenuRecent;
