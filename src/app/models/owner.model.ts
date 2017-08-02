import { Address } from './address.model';

export class Owner {
  id: string;
  firstName: Date;
  lastName: string;
  address: Address;
  email: string;
  phoneNr: string;
  emergencyNr: string;
  picture: string;

  constructor(firstName: Date, lastName: string, phoneNr: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNr = phoneNr;
  }
}
