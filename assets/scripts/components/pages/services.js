import { contactPage } from './contact.js'
export function servicePage() {
    let content = (`
        <div class="services">
            <div class="services-heading">
                <i class="fas fa-handshake shake"></i>
                <h1>Services</h1>
            </div>
            <div class="services-contents">
                <div class="service-card">
                    <div class="body">
                        <div class="title">
                            <h1>Front-End Development</h1>
                        </div>
                        <div class="divider"></div>
                        <div class="text">
                            Front-End Development with fully responsive and interactive User-Interface at an affordable Price
                        </div>
                        <div class="butt">
                            <button class="order">Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-globe ico"></i>
                    </div>
                </div>
                <div class="service-card">
                    <div class="body">
                        <div class="title">
                            <h1>Back-End Development</h1>
                        </div>
                        <div class="divider"></div>
                        <div class="text">
                            Back-End Development with PHP and Node.js at an affordable Price
                        </div>
                        <div class="butt">
                            <button class="order">Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-bacterium ico"></i>
                    </div>
                </div>
                <div class="service-card">
                    <div class="body">
                        <div class="title">
                            <h1>Database Management</h1>
                        </div>
                        <div class="divider"></div>
                        <div class="text">
                            Database Management With MySQL at an affordable Price
                        </div>
                        <div class="butt">
                            <button class="order">Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-database ico"></i>
                    </div>
                </div>
            </div>
        </div>
    `)
    $('main').empty(300).append(content)
    $(".order").click(() => {
        contactPage()
        $('.nav-links').find(".link").removeClass('link')
        $(".con-link").addClass('link')
    })
}