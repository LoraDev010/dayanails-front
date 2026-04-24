import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuOpen = signal(false);
  isScrolled = signal(false);

  products = [
    { id: 1, name: 'Oslo',  fullName: 'Bolso Estructurado Oslo',    category: 'Cuero Genuino',   price: 'L. 1,850', tag: 'Nuevo',    featured: true,  color: '#5c3d2e' },
    { id: 2, name: 'Aire',  fullName: 'Cartera Minimalista Aire',   category: 'Cuero Vegano',    price: 'L. 980',   tag: 'Popular',  featured: false, color: '#2c3e50' },
    { id: 3, name: 'Kova',  fullName: 'Tote Urbano Kova',           category: 'Canvas Premium',  price: 'L. 1,250', tag: null,       featured: false, color: '#1a2a1a' },
    { id: 4, name: 'Maren', fullName: 'Clutch Nocturno Maren',      category: 'Satín Italiano',  price: 'L. 650',   tag: 'Limitado', featured: false, color: '#1c1a2e' },
  ];

  categories = [
    { name: 'Cuero Artesanal',  description: 'Piezas elaboradas a mano con cuero seleccionado', count: '24 piezas', accent: '#8B5E3C' },
    { name: 'Colección Urbana', description: 'Funcional y moderna para el ritmo de la ciudad',  count: '18 piezas', accent: '#2C4A3E' },
    { name: 'Edición Nocturna', description: 'Elegancia que ilumina cada noche',                count: '12 piezas', accent: '#2A1F3D' },
  ];

  marqueeItems = [
    'Nueva Colección 2025', 'Envío Gratis en Honduras', 'Cuero Artesanal',
    'Diseño Exclusivo',     'Pago Seguro',              'Garantía de Calidad',
    'Nueva Colección 2025', 'Envío Gratis en Honduras', 'Cuero Artesanal',
    'Diseño Exclusivo',     'Pago Seguro',              'Garantía de Calidad',
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  onNewsletterSubmit(e: Event) {
    e.preventDefault();
  }
}
