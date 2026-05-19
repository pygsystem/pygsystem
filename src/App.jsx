import logo from "./assets/logo.png";
import carrusel1 from "./assets/carrusel1.webp";
import carrusel2 from "./assets/carrusel2.png";
import carrusel3 from "./assets/carrusel3.webp";
import carrusel4 from "./assets/carrusel4.png";
import carrusel5 from "./assets/carrusel5.jpg";


import servicio1 from "./assets/servicio1.webp";
import servicio2 from "./assets/servicio2.jpg";
import servicio3 from "./assets/servicio3.webp";
import servicio4 from "./assets/servicio4.jpg";
import servicio5 from "./assets/servicio5.jpg";
import servicio6 from "./assets/servicio6.png";
import servicios from "./assets/servicios.png";

import hikvision from "./assets/hikvision.png";
import dahua from "./assets/dahua.png";
import siemens from "./assets/siemens.jpg";

import { Phone } from "lucide-react";


export default function MultiserviciosPyGSystem() {
  const carouselItems = [
    {
      title: "Cableado Estructurado",
      image: carrusel1
    },
    {
      title: "Sistemas de Video Vigilancia CCTV",
      image: carrusel2
    },
    {
      title: "Sistemas de Alarmas",
      image: carrusel3
    },
    {
      title: "Sistemas Contra Incendios",
      image: carrusel4
    },
    {
      title: "Sistemas de Llamado de Enfermeras",
      image: carrusel5
    }
  ];

  const services = [
    {
      title: "DATA CENTER",
      image: servicio1,
      items: [
        "Diseño e instalación de centro de datos",
        "Diseño y ejecución de infraestructura de telecomunicaciones (horizontales y verticales)",
        "Proyectos con soluciones en fibra óptica y cobre",
        "Implementación de sistemas de control de acceso"
      ]
    },
    {
      title: "REDES Y COMUNICACIONES",
      image: servicio2,
      items: [
        "Radio enlaces e internet satelital",
        "Implementación de redes físicas y WIFI",
        "Optimización de infraestructura TI"
      ]
    },
    {
      title: "VIDEO VIGILANCIA",
      image: servicio3,
      items: [
        "Instalación de sistemas de video vigilancia inteligente",
        "Venta de software VMS y CMS para gestión y centros de monitoreo"
      ]
    },
    {
      title: "SISTEMAS MULTIMEDIA",
      image: servicio4,
      items: [
        "Instalación de sistemas de perifoneo IP",
        "Instalación de sistemas de audio y video"
      ]
    },
    {
      title: "SISTEMAS DE ALERTA, DETECCIÓN E INTRUSIÓN",
      image: servicio5,
      items: [
        "Instalación de sistema contra robos",
        "Instalación de sistema para detección de incendios",
        "Implementación de sistemas para llamado de enfermeras"
      ]
    },
    {
      title: "SOPORTE Y CONSULTORÍA",
      image: servicio6,
      items: [
        "Consultoría en informática y gestión de sistemas tecnológicos",
        "Soporte técnico",
        "Elaboración de expedientes técnicos",
        "Venta de equipos informáticos"
      ]
    }
  ];

  return (
    <div className="bg-[#f4f7fb] text-slate-800 min-h-screen font-sans overflow-x-hidden">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="PyG System"
              className="w-24 h-24 object-contain"
            />

            <nav className="hidden md:flex gap-12 text-lg font-medium ml-10">
              <a href="#inicio" className="text-blue-700 border-b-4 border-blue-700 pb-2">Inicio</a>
              <a href="#nosotros" className="hover:text-blue-700 transition-all duration-300">Nosotros</a>
              <a href="#servicios" className="hover:text-blue-700 transition-all duration-300">Nuestros servicios</a>
              <a href="#contacto" className="hover:text-blue-700 transition-all duration-300">Contáctenos</a>
            </nav>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg flex items-center gap-3">

  <Phone className="text-green-300 w-8 h-8" />

  <span>966676543</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-8 py-8">
        <section id="inicio" className="bg-white rounded-[24px] shadow-lg p-6 mb-14 border border-[#e4e8ef]">
          <div className="grid md:grid-cols-5 gap-3 items-stretch">
            {carouselItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg border border-slate-200 bg-white hover:scale-105 transition-all duration-300">
                <img src={item.image} alt={item.title} className="h-[210px] w-full object-cover" />
                <div className="bg-[#005bbb] text-white text-center font-semibold py-3 px-2 text-[22px] leading-tight min-h-[88px] flex items-center justify-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="nosotros" className="py-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <h4 className="text-blue-700 uppercase font-bold tracking-widest mb-4">Nosotros</h4>
              <h2 className="text-[64px] font-extrabold mb-8 text-[#1f2d3d]">¿Quiénes somos?</h2>
              <div className="w-20 h-1 bg-blue-700 mb-8 rounded-full"></div>

              <p className="text-2xl text-slate-600 leading-relaxed">
                Somos una empresa dedicada a dar soluciones en el rubro de TI, con los mejores estándares para el diseño e implementación de proyectos en negocios, edificaciones públicas y privadas, nuestro personal cuenta con una amplia experiencia en el rubro.
              </p>
            </div>

            <div>
              <img
                src= {servicios}
                alt="Ciudad inteligente"
                className="rounded-[24px] shadow-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-200">
              <h3 className="text-4xl font-bold text-blue-700 mb-6">Cultura</h3>
              <p className="text-xl leading-relaxed text-slate-600">
                En Multiservicios PyG System entendemos el valor que tiene cada colaborador dentro de nuestro equipo, trabajamos para que todas las funciones que realicen les permita un desarrollo profesional y personal, teniendo en claro que su desarrollo también es el desarrollo de la empresa.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-200">
              <h3 className="text-4xl font-bold text-blue-700 mb-8">Valores</h3>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-blue-50 rounded-2xl py-6 font-semibold text-xl">Responsabilidad</div>
                <div className="bg-blue-50 rounded-2xl py-6 font-semibold text-xl">Integridad</div>
                <div className="bg-blue-50 rounded-2xl py-6 font-semibold text-xl">Ética</div>
                <div className="bg-blue-50 rounded-2xl py-6 font-semibold text-xl">Trabajo en equipo</div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold text-blue-700">NUESTROS SERVICIOS</h2>
            <div className="w-28 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-md border border-[#e6eaf0] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                <img src={service.image} alt={service.title} className="w-full h-[240px] object-cover" />

                <div className="p-8">
                  <h3 className="text-[34px] font-bold text-[#005bbb] mb-5 leading-tight">
                    {service.title}
                  </h3>

                  <ul className="space-y-3 text-[19px] text-slate-600 leading-relaxed">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-blue-700 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="py-20">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold text-blue-700">CONTÁCTENOS</h2>
            <div className="w-28 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                <h3 className="text-4xl font-bold mb-4 flex items-center gap-3">

  <Phone className="text-green-500 w-10 h-10" />

  <span className="text-blue-700">
    966676543
  </span></h3>
                <p className="text-2xl text-slate-600">Llámanos o escríbenos al Whatsapp</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">paul16garate@gmail.com</h3>
                <p className="text-2xl text-slate-600">Envíanos un correo</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[24px] shadow-md border border-[#e6eaf0]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Nombre completo" className="border border-slate-300 rounded-xl p-5 text-lg" />
                  <input type="email" placeholder="Correo electrónico" className="border border-slate-300 rounded-xl p-5 text-lg" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Teléfono" className="border border-slate-300 rounded-xl p-5 text-lg" />
                  <input type="text" placeholder="Asunto" className="border border-slate-300 rounded-xl p-5 text-lg" />
                </div>

                <textarea rows="6" placeholder="Mensaje" className="w-full border border-slate-300 rounded-xl p-5 text-lg"></textarea>

                <button className="bg-blue-700 hover:bg-blue-800 transition text-white px-10 py-5 rounded-xl text-xl font-bold shadow-lg">
                  ENVIAR CONSULTA
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-14">TRABAJAMOS CON LAS MEJORES MARCAS</h2>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <img
              src={hikvision}
              alt="Hikvision"
              className="h-20 mx-auto object-contain"
            />

            <img
              src={dahua}
              alt="Dahua"
              className="h-20 mx-auto object-contain"
            />

            <img
              src={siemens}
              alt="Siemens"
              className="h-20 mx-auto object-contain"
            />
          </div>
        </section>
      </main>

      <footer className="bg-[#003f7d] text-white py-10 text-center">
        <p className="text-lg">© 2026 Multiservicios PyG System. Todos los derechos reservados.</p>
        
        <a
  href="https://wa.me/51966676543"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl z-50 text-3xl"
>
  💬
</a>
      </footer>
    </div>
  );
}
