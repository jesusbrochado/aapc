import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public data = [
    {
      cargo: "Presidente",
      img: "../../../../../assets/images/img-2.svg",
      nombre: "Felipe Aramburo Jaramillo",
      description: "Biólogo de la Universidad de los Andes y Magister en Ciencias Biológicas",
      correo: "f.aramburo1008@uniandes.edu.co",
      carrer: "Laboratorio de Ecología de  Bosques Tropicales y Primatología (LEBTYP), Universidad de Los Andes"
    },
    {
      cargo: "Vicepresidente",
      img: "../../../../../assets/images/img-1.svg",
      nombre: "Sebastián García",
      description: "Biólogo de la Universidad de Antioquia.",
      correo: "f.aramburo1008@uniandes.edu.co",
      carrer: "Fundación Proyecto Primates ​Laboratorio de Ecología de  Bosques Tropicales y Primatología (LEBTYP), Universidad de Los Andes"
    },
    {
      cargo: "Secretario Ejecutivo",
      img: "../../../../../assets/images/img-3.svg",
      nombre: "Nicolás Botero Henao",
      description: "Biólogo egresado de la Universidad de Caldas, especialista en EIG",
      correo: "biol.nicolasbotero@gmail.com",
      carrer: "Semillero de Investigación en Primatología y Conservación de sus Ecosistemas​ (SIPCE)"
    },
    // {
    //   cargo: "Editora",
    //   img: "../../../../../assets/images/img-5.svg",
    //   nombre: "Carolina García ",
    //   description: "Bióloga con maestría en Ciencias Biológicas de la Universidad de los Andes",
    //   correo: "biocarogarcia@asoprimatologicacolombiana.org",
    //   carrer: "Fundación Proyecto Tití"
    // },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
