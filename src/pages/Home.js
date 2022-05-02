import {Component} from "react";
import icon_ahorrar from "./../img/icon-ahorrar.webp";
import icon_cuando from "./../img/icon-cuando.webp";
import icon_gestionar from "./../img/icon-gestionar.webp";
import icon_todo from "./../img/icon-todo.webp";
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        let banner = "banner-1";

        return (
            <div>
                <div className={banner}>
                    <div className="container">
                        <div className="after-header">
                            a
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row card-section mb-5">
                        <div className="col-3">
                            <div className="card">
                                <img src={icon_gestionar} alt="Gestiona el dia a dia"/>
                                <h3 className="facto-color-1"><b>Gestiona el dia a dia</b></h3>
                                <p>Controla tus compras, ventas y todo lo que ocurre en tu negocio.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={icon_todo} alt="Todo en su lugar"/>
                                <h3 className="facto-color-1"><b>Todo en un solo lugar</b></h3>
                                <p>Un sólo sistema para cotizar, vender y gestionar, sin tipear doble.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={icon_ahorrar} alt="Ahorra tiempo"/>
                                <h3 className="facto-color-1"><b>Ahorra tiempo</b></h3>
                                <p>Un sistema rápido, que te permite encontrar toda la información de manera fácil.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <img src={icon_cuando} alt="Ahorra tiempo"/>
                                <h3 className="facto-color-1"><b>Cuando y donde quieras</b></h3>
                                <p>Disponible en mi oficina y en mi celular, las 24 horas del día.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        TODO: doing the section whit diferent panels
                    </div>
                </div>
                <div className="section-question">
                    <div className="container">
                        <div className="row pt-5 mb-5">
                            <h2 className="text-center text-white"><b>¿Tienes dudas?</b></h2>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="card p-4">
                                    <h3 className="text-center facto-color-2"><b>¿FACTO es gratuito?</b></h3>
                                    <p><b>Tenemos una DEMO gratuita para tu negocio.</b></p>
                                    <p>Adicional a eso contamos con un plan gratuito donde puedes tener acceso a todas
                                        las funcionalidades básicas de nuestro sistema.</p>
                                    <Link className="facto-button-2" to="/funcionalidades">Ver todas las funcionalidades</Link>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-4">
                                    <h3 className="text-center facto-color-2"><b>¿FACTO es seguro?</b></h3>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card p-4">
                                    <h3 className="text-center facto-color-2"><b>¿Requisitos para usar FACTO?</b></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}