import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Sesión Fotográfica Individual',
      precio: 180000,
      imagen: 'assets/img/img1.jpg',
      descripcion:
        'Sesión personalizada para retratos profesionales, redes sociales o portafolio. Incluye 1 hora de sesión en estudio o exterior, 10 fotos editadas en alta resolución, Asesoría de poses y estilo, Entrega digital en galería privada ',
    },
    {
      id: 2,
      nombre: 'Cobertura de Bodas',
      precio: 400000,
      imagen: 'assets/img/img2.jpg',
      descripcion: 'Cobertura completa del evento más importante de tu vida, capturando cada emoción y detalle. Incluye: Cobertura desde la preparación hasta la fiesta, 100 fotos editadas profesionalmente, Álbum digital personalizado, Opcional: video resumen del evento',
    },
    {
      id: 3,
      nombre: 'Fotografía para Eventos Sociales',
      precio: 350000,
      imagen: 'assets/img/img3.jpg',
      descripcion: 'Ideal para quinceaños, cumpleaños, bautizos o reuniones especiales. Incluye: Cobertura de 3 horas, 50 fotos editadas, Entrega digital y en USB, Galería privada online',
    },
    {
      id: 4,
      nombre: 'Fotografía Corporativa o Empresarial',
      precio: 250000,
      imagen: 'assets/img/img4.jpg',
      descripcion: 'Perfecta para empresas o profesionales que buscan una imagen sólida y moderna. Incluye: Sesión en oficina o locación, Retratos individuales y grupales, 15 fotos editadas, Derechos de uso comercial',
    },
    {
      id: 5,
      nombre: 'Fotografía de Productos',
      precio: 200000,
      imagen: 'assets/img/img5.jpg',
      descripcion: 'Servicio ideal para catálogos, redes sociales o tiendas online. Incluye: Hasta 10 productos, Fondo blanco o creativo, Edición profesional para resaltar detalles, Entrega en formato optimizado para web y redes',
    },
    {
      id: 6,
      nombre: 'Sesión Familiar o Parejas',
      precio: 250000,
      imagen: 'assets/img/img6.jpg',
      descripcion: 'Sesión cálida y natural para capturar momentos especiales con tus seres queridos. Incluye: 1 hora de sesión en exterior o domicilio, 15 fotos editadas, Asesoría de vestuario, Galería digital personalizada',
    },
  ];

  constructor() {}

  getProducts(): Product1[] {
    return this.productos;
  }
}
