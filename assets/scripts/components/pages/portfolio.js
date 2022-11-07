
export function portfolio() {
    let content = (`
        <div class="portfolio">
            <div class="heading">
                <i class="fas fa-briefcase case"></i>
                <h2>Projects</h2>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="title">
                        <h4>Frontend</h4>
                        <h2>Tech Landers</h2>
                    </div>
                    <div class="image">
                        <img src="./assets/images/front.jpg">
                    </div>
                    <div class="overlay">
                        <a href="https://habeeb4shittu.github.io/tech_landers"><i class="fa fa-eye eye" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="card">
                    <div class="title">
                        <h4>Javascript</h4>
                        <h2>Calculator</h2>
                    </div>
                    <div class="image">
                        <img src="./assets/images/calc.jpg">
                    </div>
                    <div class="overlay">
                        <a href="https://habeeb4shittu.github.io/sci_calc"><i class="fa fa-eye eye" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="card">
                    <div class="title">
                        <h4>jQuery</h4>
                        <h2>Chat Box</h2>
                    </div>
                    <div class="image">
                        <img src="./assets/images/chat.jpg">
                    </div>
                    <div class="overlay">
                        <a href="https://habeeb4shittu.github.io/Chat-bot"><i class="fa fa-eye eye" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `)
    $('main').empty(300).append(content)
}