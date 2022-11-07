
export function contactPage() {
    let content = (`
        <div class="contact">
            <div class="heading">
                <i class="fas fa-link link"></i>
                <h2>Contact Me</h2>
            </div>
            <div class="content">
                <div class="touch">
                    <div class="start">
                        <h3>Start A Project</h3>
                        <p>
                            I’m available for freelance projects
                        </p>
                    </div>
                    <div class="divider"></div>
                    <div class="connect">
                        <div class="con">
                            <h3>Email</h3>
                            <a href="mailto:habeeb4shittu@gmail.com">habeeb4shittu@gmail</a>
                        </div>
                        <div class="con">
                            <h3>Phone</h3>
                            <a href="tel:09166852821">09166852821</a>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <form method="post" action="https://formspree.io/f/mqkjwkjg">
                        <div class="inputs">
                            <div class="form-loft">
                            <input
                                type="text"
                                class="form-control" name="name" id="formId1" placeholder="Your Name goes here">
                            </div>
                            <div class="form-loft">
                            <input
                                type="text"
                                class="form-control" name="email" id="formId2" placeholder="Your Email goes here...">
                            </div>
                        </div>
                        <div class="textarena">
                            <div class="form-loft">
                            <label for="textarea">Tell Me About The Project</label>
                              <textarea type="text" class="form-control" name="content" id="textarea" minlength="30" maxlength="1000" placeholder="Tell Me About The Project">
                              </textarea>
                            </div>
                        </div>
                        <div class="butt">
                            <button class="submit" type="submit">Send</button>
                            <a href="./assets/resume.pdf" class="download" target="_blank">Download My Resume <i class="fas fa-download"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `)

    $('main').empty(300).append(content)
}