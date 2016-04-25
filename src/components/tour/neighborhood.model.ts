export class Neighborhood {
  name: string;
  TTAmount: number;

  constructor(name: string, TTAmount: number = 0) {
    this.name = name;
    this.TTAmount = TTAmount;
  }

  setTTAmount(value: any): Neighborhood {
    this.TTAmount = parseFloat(value);
    return this;
  }
}