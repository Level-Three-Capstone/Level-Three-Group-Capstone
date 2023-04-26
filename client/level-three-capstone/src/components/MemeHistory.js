import React, { useState } from "react";

export default function MemeHistory({ memeHistory }) {

  return (
    <div className="padding-history">
        <div className="preview-header">
            Your Meme History
        </div>
        <div className="memeHistory">
            {memeHistory.map((meme, index) => (
                <div key={index} className="history-piece">
                    <h2 className="meme-history-header">
                        {"Meme " + (index + 1)}
                    </h2>
                    <div className="meme-wrapper">
                    <   img src={meme.randomImage} alt="Meme" />
                        <h2 className="history-text history-top-text">
                            {meme.topText}
                        </h2>
                        <h2 className="history-text history-bottom-text">
                            {meme.bottomText}
                        </h2>
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
}
