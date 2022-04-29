import './App.css';
import {Navbar} from "./component/navbar/Navbar";
import {Content} from "./component/content/Content";
import {Footer} from "./component/footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar/>
            </header>
            <main>
                <Content/>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
