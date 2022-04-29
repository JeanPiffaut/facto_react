import
    './App.css';
import {Navbar} from "./component/navbar/Navbar";
import {Content} from "./component/content/Content";
import {Footer} from "./component/footer/Footer";
import {Precios} from "./pages/Precios";

function App(params) {

    return (
        <div>
            <header className="fixed-top">
                <Navbar />
            </header>
            <main>
                {(params.page === "precios") ? <Precios /> : <Content />}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
