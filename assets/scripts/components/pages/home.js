
export function homePage() {
    let content = (`
        <div class="home">
            <div class="contents">
                <div class="my-image">
                    <img src="./assets/images/my_image1.jpg" class="avatar">
                </div>
                <div class="hello">
                    Hello!
                </div>
                <div class="last">
                    I am Habeeb, a Full-Stack Web Developer
                </div>
                <div class="button">
                    <button class="btn">Lets Begin</button>
                </div>
            </div>
            <div class="second-image">
                <img src="./assets/images/my_image2.jpg">
            </div>
        </div>
    `)
    $('main').empty(300).append(content)
}