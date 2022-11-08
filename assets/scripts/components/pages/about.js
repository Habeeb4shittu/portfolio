export function aboutPage() {
    let content = (`
            <div class="about">
            <div class="story-content">
                <div class="image">
                    <img src="./assets/images/my_image2.jpg">
                    <div class="socials-overlay">
                        <a href="https://www.linkedin.com/in/habeeb-shittu-5a013824b" target="_blank"><i class="fab fa-linkedin soc" aria-hidden="true"></i></a>
                        <a href="https://web.facebook.com/profile.php?id=100080684107038" target="_blank"><i class="fab fa-facebook soc" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/HabeebAdedolapo" target="_blank"><i class="fab fa-twitter soc" aria-hidden="true"></i></a>
                        <a href="https://github.com/habeeb4shittu" target="_blank"><i class="fab fa-github soc" aria-hidden="true"></i></a>
                        <a href="https://wa.me/message/AQMDXR7LYQSTF1" target="_blank"><i class="fab fa-whatsapp soc" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/habeebadedolapo4/" target="_blank"><i class="fab fa-instagram soc" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="main">
                    <div class="story">
                        <h2>About Me</h2>
                        <img src="./assets/images/my_image1.jpg">
                    </div>
                        <div class="sto">
                            <h2>A little bit about Habeeb</h2>
                            I am Habeeb, a Full Stack Developer from    Nigeria. I am very passionate when it comes to making fully responsive UIs. I am also very good with javascript/jQuery.
                        </div>
                    </div>
                </div>
                <div class="skills">
                    <h2>My Skills</h2>
                    <div class="each">
                        <span>HTML</span>
                        <div class="range">
                            <div></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>CSS</span>
                        <div class="range">
                            <div class="n"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>JS</span>
                        <div class="range">
                            <div class="e"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>SCSS</span>
                        <div class="range">
                            <div class="n"></div>
                        </div> 
                    </div>
                    <div class="each">
                        <span>Bootstrap</span>
                        <div class="range">
                            <div class="seventy"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>jQuery</span>
                        <div class="range">
                            <div class="n"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>PHP</span>
                        <div class="range">
                            <div class="sixty"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>Node.js</span>
                        <div class="range">
                            <div class="sixty"></div>
                        </div> 
                    </div> 
                    <div class="each">
                        <span>MySQL</span>
                        <div class="range">
                            <div class="seventy"></div>
                        </div> 
                    </div> 
                    <div class="info">
                        <div class="custom-table">
                            <div class="head">
                                Information
                            </div>
                            <div class="body">
                                <div class="rows">
                                    <p class="col1">
                                        Name
                                    </p>
                                    <p class="col2">
                                        Shittu Habeebllah A.
                                    </p>
                                </div>
                                <div class="rows">
                                    <p class="col1">
                                        Birthday
                                    </p>
                                    <p class="col2">
                                        May 2, 2006
                                    </p>
                                </div>
                                <div class="rows">
                                    <p class="col1">
                                        Phone
                                    </p>
                                    <p class="col2">
                                        <a href="tel:091668528821" id="info-link">09166852821</a>
                                    </p>
                                </div>
                                <div class="rows">
                                    <p class="col1">
                                        Email
                                    </p>
                                    <p class="col2">
                                        <a href="mailto:habeeb4shittu@gmail.com" id="info-link">habeeb4shittu@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="experience">
                            <div class="exp">
                                <h2>2+</h2>
                                <h3>Years Of Experience</h3>
                            </div>
                            <div class="exp divider"></div>
                            <div class="exp">
                                <h2>5+</h2>
                                <h3>Project Finished</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `)
    $('main').empty().append(content);
}