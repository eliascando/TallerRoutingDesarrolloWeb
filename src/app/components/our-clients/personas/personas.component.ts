import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  clientes = [
    { nombre: 'John Doe', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Jane Smith', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Robert Johnson', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Emily Davis', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Michael Wilson', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Sarah Brown', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'David Lee', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Anna Taylor', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'James Rodriguez', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Linda Martinez', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'William White', avatar: 'https://thispersondoesnotexist.com/' },
    { nombre: 'Olivia Moore', avatar: 'https://thispersondoesnotexist.com/' }
  ];
}
