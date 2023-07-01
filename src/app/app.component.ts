import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cause-effect';

  readonly people = [
    {name: "Octavia Blake", street: "4827 Bolman Court", city: "Oakwood", state: "Illinois", country: "United States", telephone: "315-931-6349", birthday: "12/11/2000"},
    {name: "Bellamy Blake", street: "4169 Nutter Street", city: "Overlandpk", state: "Missouri", country: "United States", telephone: "885-553-2356", birthday: "31/01/1990"},
    {name: "Clarke Griffin", street: "622 Lightning Point Drive", city: "Arlington", state: "Tennessee", country: "United States", telephone: "399-543-6195", birthday: "17/09/1995"},
    {name: "John Murphy", street: "204 Elsie Drive", city: "Gordon", state: "South Dakota", country: "United States", telephone: "889-332-639", birthday: "12/11/1995"},
    {name: "Raven Reyes", street: "3912 Bruce Street", city: "Saint Louis", state: "Missouri", country: "United States", telephone: "365-596-6349", birthday: "07/11/1992"},
    {name: "Madi Griffin", street: "1369 Plainfield Avenue", city: "Liverpool", state: "New York", country: "United States", telephone: "315-572-6199", birthday: "23/06/2010"},
    {name: "Charmaine Diyoza", street: "1121 Melody Lane", city: "Richmond", state: "Virginia", country: "United States", telephone: "804-464-3045", birthday: "07/04/1976"},
    {name: "Monty Green", street: "1754 Snowbird Lane", city: "Omaha", state: "Nebraska", country: "United States", telephone: "402-659-9292", birthday: "02/01/1995"},
    {name: "Hope Diyoza", street: "2543 Armory Road", city: "Fayetteville", state: "North Carolina", country: "United States", telephone: "910-723-7064", birthday: "09/11/2000"},
    {name: "Nathan Miller", street: "1345 Jody Road", city: "Plymouth Meeting", state: "Pennsylvania", country: "United States", telephone: "610-608-6087", birthday: "08/01/1995"},
    {name: "Harper McIntyre", street: "4810 Lincoln Street", city: "Camden", state: "New Jersey", country: "United States", telephone: "609-529-7488", birthday: "28/01/1995"},
  ];

  empty = true
  select = false

  currentName: string = '';
  currentStreet: string = '';
  currentCity: string = '';
  currentState: string = '';
  currentCountry: string = '';
  currentTelephone: string = '';
  currentBirthday: string = '';

  showInformation(item: any, listItem: HTMLElement){

    this.empty = false

    let lis = document.querySelectorAll('li')

    lis.forEach((li) => {
      li.classList.remove('selected')
    })

    listItem.classList.add('selected')

    this.currentName = item.name;
    this.currentStreet = item.street;
    this.currentCity = item.city;
    this.currentState = item.state;
    this.currentCountry = item.country;
    this.currentTelephone = item.telephone;
    this.currentBirthday = item.birthday;

  }
}
