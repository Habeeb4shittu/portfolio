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
$(document).ready(() => {
    homePage();
})
$("body").prepend(Header)
homePage()
slideNav()
main()

ScrollReveal().reveal(".brand", { delay: 700, distance: '300px', origin: 'left' })

ScrollReveal().reveal(".side2", { delay: 500, distance: '300px', origin: 'right' })