export class Cat {
  id: string;
  name: string;
  birthDate: Date;
  sex: string;
  neutered: boolean;
  medication: string;
  vet: string;
  ownerId: string;
  food: string;
  behaviour: string;
  picture: string;

  constructor(name: string, birthDate: Date, sex: string,
              id?: string, neutered?: boolean, medication?: string,
              vet?: string, ownerId?: string, food?: string,
              behaviour?: string, picture?: string) {
    this.name = name;
    this.birthDate = birthDate;
    this.sex = sex;

    this.id = id;
    this.neutered = neutered;
    this.medication = medication;
    this.vet = vet;
    this.ownerId = ownerId;
    this.food = food;
    this.behaviour = behaviour;
    this.picture = picture;
  }
}
