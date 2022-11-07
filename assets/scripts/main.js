import { Header } from './components/header.js'
import { Footer } from './components/footer.js'
import { homePage } from './components/pages/home.js'
import { slideNav } from './components/functions/nav-slide.js'
function main() {
    let main = (`
    <main id="body">
    </main>
    `)
    $(main).insertAfter('header')
}
function preloader() {
    let preloader = (`
    <div class="preloader-container">
    <div class="preloader"></div>
    </div>
    `)
    $("body").prepend(preloader)
}
$(document).ready(() => {
    homePage();
    $(".preloader-container").fadeOut();
})

$("body").prepend(Header)
slideNav()
main()
Footer()
preloader()