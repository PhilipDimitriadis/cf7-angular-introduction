import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = "Markos";

  // // Step 1: One way binding of data
  // person = {
  //   givenName: "Markos",
  //   surname: "Karampatsis",
  //   age: 52, 
  //   email: "marka@aueb.gr"
  // }

  // // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragkoudakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece",
  // }
  
  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@aueb.gr",
  //   address: "New York, USA"
  // }

  // users: Person[] = [
  //   {
  //     "givenName": "Charlena",
  //     "surName": "Artemas",
  //     "age": 1,
  //     "email": "amarkel0@noaa.gov",
  //     "address": "12th Floor"
  //   }, {
  //     "givenName": "Jeanelle",
  //     "surName": "Aleta",
  //     "age": 2,
  //     "email": "asouthall1@nsw.gov.au",
  //     "address": "Apt 1638"
  //   }, {
  //     "givenName": "Wadsworth",
  //     "surName": "Sheila",
  //     "age": 3,
  //     "email": "smeadowcraft2@miibeian.gov.cn",
  //     "address": "11th Floor"
  //   }, {
  //     "givenName": "Nari",
  //     "surName": "Norina",
  //     "age": 4,
  //     "email": "nscotchforth3@noaa.gov",
  //     "address": "Apt 1647"
  //   }, {
  //     "givenName": "Theda",
  //     "surName": "Rona",
  //     "age": 5,
  //     "email": "rharman4@wordpress.com",
  //     "address": "Apt 1351"
  //   }, {
  //     "givenName": "Verene",
  //     "surName": "Homer",
  //     "age": 6,
  //     "email": "htaffs5@blogs.com",
  //     "address": "PO Box 85749"
  //   }, {
  //     "givenName": "Klemens",
  //     "surName": "Marv",
  //     "age": 7,
  //     "email": "mlorenz6@dot.gov",
  //     "address": "PO Box 88500"
  //   }, {
  //     "givenName": "Fionna",
  //     "surName": "Dave",
  //     "age": 8,
  //     "email": "dkielty7@yahoo.com",
  //     "address": "PO Box 96022"
  //   }, {
  //     "givenName": "Keene",
  //     "surName": "Giovanna",
  //     "age": 9,
  //     "email": "gwainscot8@blogtalkradio.com",
  //     "address": "Room 1831"
  //   }, {
  //     "givenName": "Marabel",
  //     "surName": "Gawain",
  //     "age": 10,
  //     "email": "grosina9@unesco.org",
  //     "address": "Suite 70"
  //   }, {
  //     "givenName": "Fionnula",
  //     "surName": "Geralda",
  //     "age": 11,
  //     "email": "gleutya@marriott.com",
  //     "address": "19th Floor"
  //   }, {
  //     "givenName": "Irena",
  //     "surName": "Jessika",
  //     "age": 12,
  //     "email": "jwhewayb@cafepress.com",
  //     "address": "PO Box 32356"
  //   }, {
  //     "givenName": "Bink",
  //     "surName": "Dolley",
  //     "age": 13,
  //     "email": "dhenstridgec@toplist.cz",
  //     "address": "Apt 631"
  //   }, {
  //     "givenName": "Janith",
  //     "surName": "Scottie",
  //     "age": 14,
  //     "email": "sliepmannd@amazonaws.com",
  //     "address": "Suite 89"
  //   }, {
  //     "givenName": "Bing",
  //     "surName": "Melantha",
  //     "age": 15,
  //     "email": "mewbache@latimes.com",
  //     "address": "Suite 65"
  //   }, {
  //     "givenName": "Bartholomew",
  //     "surName": "Hadley",
  //     "age": 16,
  //     "email": "hhanckef@msn.com",
  //     "address": "PO Box 9132"
  //   }, {
  //     "givenName": "Lorri",
  //     "surName": "Flory",
  //     "age": 17,
  //     "email": "fbingleyg@soundcloud.com",
  //     "address": "Suite 6"
  //   }, {
  //     "givenName": "Cheri",
  //     "surName": "Jamal",
  //     "age": 18,
  //     "email": "jdanielczykh@mail.ru",
  //     "address": "Apt 1222"
  //   }, {
  //     "givenName": "Renae",
  //     "surName": "Teresa",
  //     "age": 19,
  //     "email": "tpearnei@flavors.me",
  //     "address": "PO Box 9207"
  //   }, {
  //     "givenName": "Cristian",
  //     "surName": "Lynette",
  //     "age": 20,
  //     "email": "lplumridegej@amazon.de",
  //     "address": "Suite 43"
  //   }
  // ]
}
