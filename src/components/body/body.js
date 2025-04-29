import React from "react";
import "./body.css"
export default function body(){
    return(
        <main>
            <section className="bnr">
                <div className="container">
                    <div className="ins-bnr">
                        <div className="solgan">
                            <img src="images/slogan.png" alt="e"/>
                        </div>
                        <div className="download flex">
                            <div className="itm">
                                <img src="images/qrcode-5.png"  alt="e"/>
                            </div>
                            <div className="dwn">
                                <div className="itm flex cross-play">
                                    <div className="str">
                                        <img src="images/index-btns.png"  alt="e"/>
                                    </div>
                                    <div className="pltfrm">
                                        <p>
                                            CROSS-PLATFORMPLY <br/> ANYTIME,ANYWHERE
                                        </p>
                                    </div>
                                </div>
                                <div className="itm flex">
                                    <div className="btn">
                                        <img src="images/index-two-btns.png"  alt="e"/>
                                    </div>
                                    <div className="btn">
                                        <img src="images/index-three-btns.png"  alt="e"/>
                                    </div>
                                    <div className="btn">
                                        <img src="images/index-four-btns.png"  alt="e"/>
                                    </div>
                                </div>
                                <div className="itm flex">
                                    <div className="btn">
                                        <img src="images/index-five-btns.png"  alt="e"/>
                                    </div>
                                    <div className="btn">
                                        <img src="images/index-six-btns.png"  alt="e"/>
                                    </div>
                                    <div className="btn">
                                        <img src="images/index-seven-btns.png"  alt="e"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}