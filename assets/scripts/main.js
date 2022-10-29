import { setHome } from './components/home.js'
import { slideNav } from './components/functions/nav-slide.js'

function main() {
    let main = (`
        <main>

        </main>
    `)
    $(main).insertAfter('header')
}
setHome()
slideNav()
main()

ScrollReveal().reveal(".brand", { delay: 700, distance: '300px', origin: 'left' })
ScrollReveal().reveal(".side2", { delay: 500, distance: '300px', origin: 'right' })