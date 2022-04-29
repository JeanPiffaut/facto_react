import {Component} from "react";
import "./Navbar.css"
import logo from "./img/Logo-V-3-fondo-azul.webp";
import config from "./../../config.json";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = config['pages'];
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-facto py-2 py-lg-0">
                <div className="container-fluid text-center text-lg-start">
                    <Link className="navbar-brand facto-logo" to="/">
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-content flex-column" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-end w-100">
                            {this.renderNavButton('conocenos')}
                            {this.renderNavButton('ayuda')}
                            <li className="nav-item button-content">
                                <a className="btn btn-success btn-sm d-none d-lg-block" href="tel:+56 4 4202 0550">+56 4 4202 0550</a>
                                <a className="btn btn-success d-lg-none d-block w-100 mb-2 mb-lg-0" href="tel:+56 4 4202 0550">+56 4 4202 0550</a>
                            </li>
                            <li className="nav-item button-content">
                                <Link className="btn btn-success btn-sm d-none d-lg-block" to="/ingresar">Iniciar sesión</Link>
                                <Link className="btn btn-success d-lg-none d-block w-100 mb-2 mb-lg-0" to="/ingresar">Iniciar sesión</Link>
                            </li>
                            <li className="nav-item button-content">
                                <Link className="btn btn-demo btn-sm d-none d-lg-block" to="/producto/facto-demo">PRUEBA LA DEMO</Link>
                                <Link className="btn btn-demo d-lg-none d-block w-100 mb-2 mb-lg-0" to="/producto/facto-demo">PRUEBA LA DEMO</Link>
                            </li>
                        </ul>
                        <hr className="mb-2 mb-lg-0"/>
                        <ul className="navbar-nav justify-content-evenly w-100">
                            {this.renderNavButton('funcionalidades')}
                            {this.renderNavButton('precios')}
                            {this.renderNavButton('dispositivos')}
                            {this.renderNavButton('firma_electronica')}
                            {this.renderNavButton('remuneraciones')}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    renderNavButton(button, name = "") {
        const pages = this.state;
        if(name === "") {
            name = pages[button]['name'];
        }
        if (pages[button]['link'] !== undefined) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to={pages[button]['link']}>{name}</Link>
                </li>
            );
        } else {
            return (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id={'dropdown_' + button} href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">{name}</a>
                    <ul className="dropdown-menu mb-2" aria-labelledby={'dropdown_' + button}>
                        {pages[button]['subpages'].map((page, i) => (
                            <li key={pages[page]['name'] + '_' + i}>
                                <Link className="dropdown-item" to={pages[page]['link']}>{pages[page]['name']}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            );
        }
    }
}