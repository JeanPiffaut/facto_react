import {Component} from "react";
import "./Navbar.css"
import logo from "./img/Logo-V-3-fondo-azul.webp";
import config from "./../../config.json";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = config['pages'];
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-facto py-2 py-lg-0">
                <div className="container-fluid text-center text-lg-start">
                    <a className="navbar-brand facto-logo" href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
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
                                <a className="btn btn-success btn-sm d-none d-lg-block" href="ingresar">Iniciar sesión</a>
                                <a className="btn btn-success d-lg-none d-block w-100 mb-2 mb-lg-0" href="ingresar">Iniciar sesión</a>
                            </li>
                            <li className="nav-item button-content">
                                <a className="btn btn-demo btn-sm d-none d-lg-block" href="producto/facto-demo">PRUEBA LA DEMO</a>
                                <a className="btn btn-demo d-lg-none d-block w-100 mb-2 mb-lg-0" href="producto/facto-demo">PRUEBA LA DEMO</a>
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

    renderNavButton(button) {
        const pages = this.state;
        if (pages[button]['link'] !== undefined) {
            return (
                <li className="nav-item">
                    <a className="nav-link" href={pages[button]['link']}>{pages[button]['name']}</a>
                </li>
            );
        } else {
            return (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id={'dropdown_' + button} href="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">{pages[button]['name']}</a>
                    <ul className="dropdown-menu mb-2" aria-labelledby={'dropdown_' + button}>
                        {pages[button]['subpages'].map((page) => (
                            <li>
                                <a className="dropdown-item" href={pages[page]['link']}>{pages[page]['name']}</a>
                            </li>
                        ))}
                    </ul>
                </li>
            );
        }
    }
}