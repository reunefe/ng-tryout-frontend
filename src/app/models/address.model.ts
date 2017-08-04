export class Address {
  street: string;
  houseNr: string;
  zipCode: string;
  city: string;

  constructor(street: string, houseNr: string, zipCode: string, city: string) {
    this.street = street;
    this.houseNr = houseNr;
    this.zipCode = zipCode;
    this.city = city;
  }
}
