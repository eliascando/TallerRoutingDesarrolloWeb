import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
  clientes = [
    { nombre: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { nombre: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { nombre: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Facebook.svg' },
    { nombre: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Tesla_Motors_Logo.svg' },
    { nombre: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Oracle_Logo.svg' },
    { nombre: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { nombre: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
    { nombre: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { nombre: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg' },
    { nombre: 'Walmart', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' },
    { nombre: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg' },
    { nombre: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' }
  ];
}
