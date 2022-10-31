export function aboutPage() {
    let content = (`
            <div class="about">
                <div class="story">
                    <h2>About Me</h2>
                    <img src="./assets/images/my_image2.jpg">
                </div>
                <div class="story-content">
                    I am Habeeb, a Full Stack Developer from Nigeria. I  
                </div>
            </div>
    `)
    $('main').empty().append(content);
}