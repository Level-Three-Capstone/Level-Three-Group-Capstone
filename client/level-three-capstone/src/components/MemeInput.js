import React from "react"




export default function MemeInput() {

   

    return (
        <main className="memeMain">
            <form className="memeForm">
                <input 
                    type="text" 
                    className="topText" 
                    placeholder="Top Text"
                    name="topText"
                    value=""

                />
                <input 
                    type="text" 
                    className="bottomText" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value=""
            
                />
                <button className="submitButton" >    {/*//only got rid of the onClick due to annoying errors untill it has a function*/}
                    Get a new meme image
                </button>
            </form>
            <div className="center-cont">
                <div className="preview-header">
                    Preview of your Meme:
                </div>  
                <div className="imgTextCont">      
                    <img 
                        src="http://i.imgflip.com/1bij.jpg" className="meme--image" 
                        alt="Placeholder Image"
                    />
                    <div className="meme--text">
                        <h2 className="top memeText">
                            Top Text
                        </h2>
                        <h2 className="bottom memeText">
                            Bottom Text
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    )
}