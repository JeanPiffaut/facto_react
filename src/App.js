import {Navbar} from "./component/navbar/Navbar";
import {Footer} from "./component/footer/Footer";
import config from "./config.json";
import './App.css';

function App(params) {
    let Page = chargePage(config['pages'][params.page]['element']);
    console.log(Page);
    if(Page === undefined) {
        Page = chargePage(config['pages']['home']['element']);
    }
    return (
        <div>
            <header className="fixed-top">
                <Navbar/>
            </header>
            <main>
                <Page/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

function chargePage(Component) {
    try {
        return require("./pages/" + Component).default;
    } catch (error) {
        return undefined;
    }
}

export default App;
