import { Header } from './components/header.js'
import { homePage } from './components/pages/home.js'
import { aboutPage } from './components/pages/about.js'
import { slideNav } from './components/functions/nav-slide.js'
function main() {
    let main = (`
    <main>
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
homePage()
slideNav()
main()
preloader()