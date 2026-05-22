import logo from "./assets/logo.png";
import carrusel1 from "./assets/carrusel1.webp";
import carrusel2 from "./assets/carrusel2.png";
import carrusel3 from "./assets/carrusel3.webp";
import carrusel4 from "./assets/carrusel4.png";
import carrusel5 from "./assets/carrusel5.jpg";


import servicio1 from "./assets/servicio1.webp";
import servicio2 from "./assets/servicio2.jpg";
import servicio3 from "./assets/servicio3.webp";
import servicio4 from "./assets/servicio4.png";
import servicio5 from "./assets/servicio5.jpg";
import servicio6 from "./assets/servicio6.png";
import servicio7 from "./assets/servicio7.png";
import servicios from "./assets/servicios.png";

import hikvision from "./assets/hikvision.png";
import dahua from "./assets/dahua.png";
import siemens from "./assets/siemens.jpg";
import cisco from "./assets/cisco.png";
import eset from "./assets/eset.png";
import fortinet from "./assets/fortinet.png";
import hp from "./assets/hp.png";
import huawei from "./assets/huawei.png";
import ibernex from "./assets/ibernex.png";
import simplex from "./assets/simplex.png";
import tplink from "./assets/tplink.png";
import ubiquiti from "./assets/ubiquiti.png";

import { Phone
 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MultiserviciosPyGSystem() {

  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ikt8xwh",
      "template_oodlx2x",
      form.current,
      "bFqXm877MVnHPQ6Is"
    )
    .then(
      () => {
        alert("Mensaje enviado correctamente");
      },
      (error) => {
        alert("Error al enviar el mensaje");
        console.log(error.text);
      }
    );
};
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
      title: "DISEÑO DE SOFTWARE",
      image: servicio7,
      items: [
        "Sistema de facturación electrónica para distintos rubros",
        "Diseño de páginas web",
        "Diseño de aplicaciones"
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
const brands = [
  hikvision,
  dahua,
  siemens,
  cisco,
  eset,
  fortinet,
  hp,
  huawei,
  ibernex,
  simplex,
  tplink,
  ubiquiti,

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
        <section
  id="inicio"
  className="bg-white rounded-[24px] shadow-lg p-6 mb-14 border border-[#e4e8ef]"
>
  <Swiper
    modules={[Autoplay, Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    loop={true}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    }}
  >
    {carouselItems.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-white">

          <img
            src={item.image}
            alt={item.title}
            className="h-[250px] w-full object-cover"
          />

          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center font-bold p-6 px-4 text-3xl leading-tight min-h-[120px] flex items-center justify-center">
            {item.title}
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

        <section id="nosotros" className="py-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
            <div>
              <h4 className="text-blue-700 uppercase font-bold tracking-widest mb-4">Nosotros</h4>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-[#1f2d3d]">¿Quiénes somos?</h2>
              <div className="w-20 h-1 bg-blue-700 mb-8 rounded-full"></div>
              <div className="w-full overflow-hidden"></div>

              <p className="text-base md:text-2xl text-slate-600 leading-relaxed text-left normal-case">
  Somos una empresa dedicada a dar soluciones en el rubro de TIC, con los mejores estándares para el diseño e implementación de proyectos en empresas, edificaciones y entidades públicas y privadas, contamos con una amplia experiencia en el rubro de TIC.
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                <div className="bg-blue-50 rounded-2xl p-6 font-semibold text-xl">Responsabilidad</div>
                <div className="bg-blue-50 rounded-2xl p-6 font-semibold text-xl">Integridad</div>
                <div className="bg-blue-50 rounded-2xl p-6 font-semibold text-xl">Ética</div>
                <div className="bg-blue-50 rounded-2xl p-6 font-semibold text-xl">Trabajo en equipo</div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700">NUESTROS SERVICIOS</h2>
            <div className="w-28 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-[20px] overflow-hidden shadow-md border border-[#e6eaf0] hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
                <img src={service.image} alt={service.title} className="w-full h-[240px] object-cover" />

                <div className="p-8">
                  <h3 className="text-2xl md:text-[34px] font-bold text-[#005bbb] mb-5 leading-tight">
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700">CONTÁCTENOS</h2>
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
                <h3 className="text-3xl font-bold text-blue-700 mb-4">pygsystemweb@gmail.com</h3>
                <p className="text-2xl text-slate-600">Envíanos un correo</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[24px] shadow-md border border-[#e6eaf0]">
            <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>
                <div className="grid md:grid-cols-2 gap-5">
                 <input
                 type="text"
                 name="nombre"
                 placeholder="Nombre completo"
                className="border border-slate-300 rounded-xl p-5 text-lg"
/>
                  <input type="email" 
                  name="correo"
                  placeholder="Correo electrónico" 
                  className="border border-slate-300 rounded-xl p-5 text-lg" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text"
                  name="telefono"
                   placeholder="Teléfono"
                    className="border border-slate-300 rounded-xl p-5 text-lg" />

                  <input type="text" 
                  name="asunto"
                  placeholder="Asunto" 
                  className="border border-slate-300 rounded-xl p-5 text-lg" />
                </div>

                <textarea 
                name="mensaje"
                rows="6" 
                placeholder="Mensaje" 
                className="w-full border border-slate-300 rounded-xl p-5 text-lg"></textarea>

                <button type= "submit"
                className="bg-blue-700 hover:bg-blue-800 transition text-white px-10 py-5 rounded-xl text-xl font-bold shadow-lg">
                  ENVIAR CONSULTA
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-14">TRABAJAMOS CON LAS MEJORES MARCAS</h2>

          <Swiper
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={2}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={1500}
  loop={true}
  breakpoints={{
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  }}
>
  {brands.map((brand, index) => (
    <SwiperSlide key={index}>
      <div className="flex items-center justify-center bg-white rounded-2xl shadow-md p-6 h-[140px]">

        <img
          src={brand}
          alt="Marca"
          className="max-h-[80px] object-contain hover:scale-110 transition duration-300"
        />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
        </section>
      </main>

      <footer className="bg-[#003f7d] text-white pt-14 pb-10 mt-10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-10 items-start">

      {/* Empresa */}
      <div>
        <h3 className="text-3xl font-bold mb-4">
          Multiservicios PyG System
        </h3>

        <p className="text-slate-200 text-lg leading-relaxed">
          Especialistas en cableado estructurado,
          CCTV, redes, sistemas contra incendios
          y soluciones tecnológicas.
        </p>
      </div>

      {/* Enlaces */}
      <div>
        <h3 className="text-2xl font-bold mb-5">
          Enlaces rápidos
        </h3>

        <div className="flex flex-col gap-3 text-lg">
          <a href="#inicio" className="hover:text-blue-300 transition">
            Inicio
          </a>

          <a href="#nosotros" className="hover:text-blue-300 transition">
            Nosotros
          </a>

          <a href="#servicios" className="hover:text-blue-300 transition">
            Servicios
          </a>

          <a href="#contacto" className="hover:text-blue-300 transition">
            Contacto
          </a>
        </div>
      </div>

      {/* Redes Sociales */}
      <div>
        <h3 className="text-2xl font-bold mb-5">
          Síguenos
        </h3>

        <div className="flex gap-5">

          <a
            href="https://www.facebook.com/MULTISERVISPYGSYSTEMTPP"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-blue-600 transition p-4 rounded-full"
          >
            <FaFacebookF className="w-7 h-7" />
          </a>

          <a
            href="https://www.instagram.com/multiserviciospygsystem/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-pink-500 transition p-4 rounded-full"
          >
            <FaInstagram className="w-7 h-7" />
          </a>

          

          

        </div>
      </div>
    </div>

    {/* Línea divisora */}
    <div className="border-t border-white/20 mt-12 pt-6 text-center text-slate-300">
      © 2026 Multiservicios PyG System. Todos los derechos reservados.
    </div>
  </div>

  {/* Botón flotante WhatsApp */}
  <a
    href="https://wa.me/51966676543"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl z-50 text-3xl animate-bounce"
    aria-label="WhatsApp"
  >
    💬
</a>
      </footer>
    </div>
  );
}
