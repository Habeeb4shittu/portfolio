
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
                            <button>Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-globe ico"></i>
                    </div>
                </div>
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
                            <button>Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-globe ico"></i>
                    </div>
                </div>
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
                            <button>Order</button>
                        </div>
                    </div>
                    <div class="inter">
                        <i class="fas fa-globe ico"></i>
                    </div>
                </div>
            </div>
        </div>
    `)

    $('main').empty(300).append(content)
}