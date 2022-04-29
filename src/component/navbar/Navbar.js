import {Component} from "react";
import "./Navbar.css"
import logo from "./img/Logo-V-3-fondo-azul.webp";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionalidades: {
                name: 'Funcionalidades',
                subpages: [
                    'facturacion', 'contabilidad', 'punto_de_venta', 'inventario', 'caja_y_cobranza', 'api_ecommerce',
                    'actualizaciones', 'todas_las_funcionalidades'
                ]
            },
            facturacion: {
                name: 'Facturación',
                link: 'facturacion'
            },
            contabilidad: {
                name: 'Contabilidad',
                link: 'contabilidad'
            },
            punto_de_venta: {
                name: 'Punto de venta',
                link: 'punto-de-venta'
            },
            inventario: {
                name: 'Inventario',
                link: 'inventario'
            },
            api_ecommerce: {
                name: 'API / E-commerce',
                link: 'integracion-facto-e-commerce'
            },
            caja_y_cobranza: {
                name: 'Caja y cobranza',
                link: 'caja-y-cobranza'
            },
            actualizaciones: {
                name: 'Actualizaciones a FACTO',
                link: 'actualizaciones'
            },
            todas_las_funcionalidades: {
                name: 'Todas las funcionalidades',
                link: 'funcionalidades'
            },
            precios: {
                name: 'Precios',
                link: 'precios',
            },
            dispositivos: {
                name: 'Dispositivos',
                link: 'producto/dispositivos'
            },
            firma_electronica: {
                name: 'Firma electrónica',
                link: 'producto/firma-electronica',
            },
            remuneraciones: {
                name: 'Remuneraciones',
                link: 'previred',
            },
            conocenos: {
                name: 'Conocenos',
                subpages: [
                    'nuestro_modelo', 'seguridad', 'blog', 'beneficios'
                ]
            },
            nuestro_modelo: {
                name: 'Nuestro modelo gratuito',
                link: 'conoce-facto',
            },
            seguridad: {
                name: 'Seguridad',
                link: 'seguridad',
            },
            blog: {
                name: 'Blog',
                link: 'blog',
            },
            beneficios: {
                name: 'Beneficios',
                link: 'beneficios',
            },
            ayuda: {
                name: 'Ayuda',
                subpages: [
                    'contactos', 'soporte', 'capacitate'
                ]
            },
            contactos: {
                name: 'Contáctos',
                link: 'contactos',
            },
            soporte: {
                name: 'Soporte',
                link: 'ayuda',
            },
            capacitate: {
                name: 'Capacítate',
                link: 'capacitate',
            },
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-facto">
                <div className="container-fluid">
                    <a className="navbar-brand facto-logo" href="/">
                        <img src={logo} alt="Logo"/>
                    </a>
                    <div className="collapse navbar-collapse navbar-content flex-column">
                        <ul className="navbar-nav ms-auto">
                            {this.renderNavButton('conocenos')}
                            {this.renderNavButton('ayuda')}
                        </ul>
                        <hr/>
                        <ul className="navbar-nav mx-auto">
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
                    <ul className="dropdown-menu" aria-labelledby={'dropdown_' + button}>
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