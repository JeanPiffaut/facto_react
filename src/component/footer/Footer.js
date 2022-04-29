import {Component} from "react";
import "./Footer.css";
import logo from "./img/footer-icon-facto.webp";
import iso from "./img/ISO-9001-Calidad.webp";
import config from "./../../config.json";

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = config['pages'];
    }

    render() {
        return (
            <div className="w-100">
                <div className="footer-section-1"></div>
                <div className="footer-section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <h1 className="text-center facto-color-1 mb-3"><b>¿Todavía sigues trabajando a la
                                        antigua?</b></h1>
                                    <h5 className="text-center mb-5 text-dark">Mejora el control, gana visibilidad, toma mejores
                                        decisiones. ¡Pruébalo!</h5>
                                    <div className="d-flex">
                                        <a className="btn btn-success ms-auto me-2" href="producto/facto-demo"><b>PROBAR
                                            DEMO</b></a>
                                        <a className="btn btn-success me-auto ms-2" href="contactos"><b>CONTACTANOS</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-4 d-flex align-items-center">
                                <img src={logo} alt="Logo complementado" className="logo-content"/>
                            </div>
                            <div className="col-3">
                                <h5 className="mb-4">{this.state['funcionalidades']['name']}</h5>
                                <ul>
                                    {this.state['funcionalidades']['subpages'].map(page => (
                                        <li><a href={this.state[page]['link']}>{this.state[page]['name']}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-2 be-white">
                                <h5 className="mb-4">{this.state['conocenos']['name']}</h5>
                                <ul>
                                    {this.state['conocenos']['subpages'].map(page => (
                                        <li><a href={this.state[page]['link']}>{this.state[page]['name']}</a></li>
                                    ))}
                                </ul>
                                <h5 className="mb-4">{this.state['ayuda']['name']}</h5>
                                <ul>
                                    {this.state['ayuda']['subpages'].map(page => (
                                        <li><a href={this.state[page]['link']}>{this.state[page]['name']}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-3 text-center">
                                <h5 className="mb-4">Siguenos</h5>
                                <div className="w-100 d-flex justify-content-evenly mb-5">
                                    <a href="https://www.instagram.com/facto.cl/">
                                        <i className="fab fa-instagram icon-social"></i>
                                    </a>
                                    <a href="https://www.facebook.com/facto.cl/">
                                        <i className="fab fa-facebook-square icon-social"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/factocl">
                                        <i className="fab fa-linkedin icon-social"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCMFPmqT3EVEWn3nqVKuVeFA">
                                        <i className="fab fa-youtube icon-social"></i>
                                    </a>
                                </div>
                                <h5 className="mb-4">Contactanos</h5>
                                <ul>
                                    <li>
                                        <a href={'tel:' + config['information']['phone']}>
                                            {config['information']['phone']}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={'mailto:' + config['information']['support_mail']}>
                                            {config['information']['support_mail']}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={config['pages']['trabaja_con_nosotros']['link']}>
                                            {config['pages']['trabaja_con_nosotros']['name']}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row bt-white pt-3 mt-3">
                            <div className="col-3">
                                <p>© 2022 FACTO SpA es una marca registrada</p>
                            </div>
                            <div className="col-3">
                                <img src={iso} alt="ISO 9001 Calidad" className="w-100"/>
                            </div>
                            <div className="col-3 text-center">
                                <a href={config['pages']['condiciones_de_uso']['link']}>{config['pages']['condiciones_de_uso']['name']}</a>
                            </div>
                            <div className="col-3">
                                <a href={config['pages']['politicas_de_seguridad']['link']}>{config['pages']['politicas_de_seguridad']['name']}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}