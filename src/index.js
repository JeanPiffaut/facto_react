import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import config from "./config.json";

const pages = config.pages;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route key={pages['facturacion']['id']} path={pages['facturacion']['link']} element={<App page={pages['facturacion']['id']}/>}/>
                <Route key={pages['contabilidad']['id']} path={pages['contabilidad']['link']} element={<App page={pages['contabilidad']['id']}/>}/>
                <Route key={pages['punto_de_venta']['id']} path={pages['punto_de_venta']['link']} element={<App page={pages['punto_de_venta']['id']}/>}/>
                <Route key={pages['inventario']['id']} path={pages['inventario']['link']} element={<App page={pages['inventario']['id']}/>}/>
                <Route key={pages['api_ecommerce']['id']} path={pages['api_ecommerce']['link']} element={<App page={pages['api_ecommerce']['id']}/>}/>
                <Route key={pages['caja_y_cobranza']['id']} path={pages['caja_y_cobranza']['link']} element={<App page={pages['caja_y_cobranza']['id']}/>}/>
                <Route key={pages['actualizaciones']['id']} path={pages['actualizaciones']['link']} element={<App page={pages['actualizaciones']['id']}/>}/>
                <Route key={pages['todas_las_funcionalidades']['id']} path={pages['todas_las_funcionalidades']['link']} element={<App page={pages['todas_las_funcionalidades']['id']}/>}/>
                <Route key={pages['precios']['id']} path={pages['precios']['link']} element={<App page={pages['precios']['id']}/>}/>
                <Route key={pages['dispositivos']['id']} path={pages['dispositivos']['link']} element={<App page={pages['dispositivos']['id']}/>}/>
                <Route key={pages['firma_electronica']['id']} path={pages['firma_electronica']['link']} element={<App page={pages['firma_electronica']['id']}/>}/>
                <Route key={pages['remuneraciones']['id']} path={pages['remuneraciones']['link']} element={<App page={pages['remuneraciones']['id']}/>}/>
                <Route key={pages['nuestro_modelo']['id']} path={pages['nuestro_modelo']['link']} element={<App page={pages['nuestro_modelo']['id']}/>}/>
                <Route key={pages['seguridad']['id']} path={pages['seguridad']['link']} element={<App page={pages['seguridad']['id']}/>}/>
                <Route key={pages['blog']['id']} path={pages['blog']['link']} element={<App page={pages['blog']['id']}/>}/>
                <Route key={pages['beneficios']['id']} path={pages['beneficios']['link']} element={<App page={pages['beneficios']['id']}/>}/>
                <Route key={pages['contactos']['id']} path={pages['contactos']['link']} element={<App page={pages['contactos']['id']}/>}/>
                <Route key={pages['soporte']['id']} path={pages['soporte']['link']} element={<App page={pages['soporte']['id']}/>}/>
                <Route key={pages['capacitate']['id']} path={pages['capacitate']['link']} element={<App page={pages['capacitate']['id']}/>}/>
                <Route key={pages['condiciones_de_uso']['id']} path={pages['condiciones_de_uso']['link']} element={<App page={pages['condiciones_de_uso']['id']}/>}/>
                <Route key={pages['politicas_de_seguridad']['id']} path={pages['politicas_de_seguridad']['link']} element={<App page={pages['politicas_de_seguridad']['id']}/>}/>
                <Route key={pages['trabaja_con_nosotros']['id']} path={pages['trabaja_con_nosotros']['link']} element={<App page={pages['trabaja_con_nosotros']['id']}/>}/>
                <Route key={pages['ingresar']['id']} path={pages['ingresar']['link']} element={<App page={pages['ingresar']['id']}/>}/>
                <Route key={pages['probar_demo']['id']} path={pages['probar_demo']['link']} element={<App page={pages['probar_demo']['id']}/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
