export function Footer() {
    let content = (`
        <footer>
            <div class="copy">
                <p>&copy;Copyright Habeeb</p>
            </div>
            <div class="footer-socials">
                <a href="https://www.linkedin.com/in/habeeb-shittu-5a013824b" target="_blank"><i class="fab fa-linkedin soc" aria-hidden="true"></i></a>
                <a href="https://web.facebook.com/profile.php?id=100080684107038" target="_blank"><i class="fab fa-facebook soc" aria-hidden="true"></i></a>
                <a href="https://twitter.com/HabeebAdedolapo" target="_blank"><i class="fab fa-twitter soc" aria-hidden="true"></i></a>
                <a href="https://github.com/habeeb4shittu" target="_blank"><i class="fab fa-github soc" aria-hidden="true"></i></a>
                <a href="https://wa.me/message/AQMDXR7LYQSTF1" target="_blank"><i class="fab fa-whatsapp soc" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/habeebadedolapo4/" target="_blank"><i class="fab fa-instagram soc" aria-hidden="true"></i></a>
            </div>
        </footer>
    `)
    $(content).insertAfter('main')
}