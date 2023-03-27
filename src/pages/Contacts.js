

const Contacts = () => {
    return ( 
        <main className="section">
            <div className="conteiner">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ukraine, Chernivtsi</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="tel:+380961409941">+380 96 104 99 41</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:Email"> oleg.grudei@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;