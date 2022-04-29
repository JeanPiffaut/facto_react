import
    './App.css';
import {Navbar} from "./component/navbar/Navbar";
import {Content} from "./component/content/Content";
import {Footer} from "./component/footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="fixed-top">
                <Navbar key={''}/>
            </header>
            <main >
                <Content/>
            </main>
            <footer>
                <Footer key={''}/>
            </footer>
        </div>
    );
}

export default App;
