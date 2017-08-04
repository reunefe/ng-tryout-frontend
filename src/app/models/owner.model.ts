import { Address } from './address.model';

export class Owner {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  phoneNr: string;
  emergencyNr: string;
  picture: string;

  constructor(firstName: string, lastName: string, phoneNr: string, id?: string, address?: Address, email?: string, emergencyNr?: string, picture?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNr = phoneNr;
    this.id = id;
    this.address = address;
    this.email = email;
    this.emergencyNr = emergencyNr;
    this.picture = picture;
  }
}
