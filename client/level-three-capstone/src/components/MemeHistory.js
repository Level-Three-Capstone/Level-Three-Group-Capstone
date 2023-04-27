import React, { useState } from "react";

export default function MemeHistory({ memeHistory, setMemeHistory }) {
    const [memeEdit, setMemeEdit] = React.useState(false)

    function editToggle(){
        setMemeEdit(prevEdit => !prevEdit)
    }
    
    function deleteItem(index){
        const newHistory = memeHistory.filter((_, i) => i !== index);
        setMemeHistory(newHistory)
    }
    

  return (
    <div className="padding-history">
        <div className="preview-header">
            Your Meme History
        </div>
        <div className="memeHistory">
            {memeHistory.map((meme, index) => (
                <div key={"a" + index} id={index} className="history-piece">
                    <h2 className="meme-history-header">
                        {"Meme " + (index + 1)}
                    </h2>
                    <div className="meme-wrapper">
                    <   img src={meme.randomImage} alt="Meme" />
                        {memeEdit ? <input 
                            type="text" 
                            className="top-text-edit" 
                            
                            name="topText"
                            placeholder={meme.topText}
                            onChange={function(event){
                                meme.topText = event.target.value
                            }}
                            
                        />
                        :<h2 className="history-text history-top-text">
                            {meme.topText}
                        </h2>}

                        {memeEdit ? <input 
                            type="text" 
                            className="bottom-text-edit" 
                            
                            name="topText"
                            placeholder={meme.bottomText}
                            onChange={function(event){
                                meme.bottomText = event.target.value
                            }}
                            
                        /> 
                        :<h2 className="history-text history-bottom-text">
                            {meme.bottomText}
                        </h2>}
                    </div>
                    <button className="edit-button" onClick={editToggle}>Edit</button>
                    <button className="delete-button" id={index} onClick={() => deleteItem(index)}>delete</button>
                </div>
            ))}
      </div>
    </div>
  );
}
