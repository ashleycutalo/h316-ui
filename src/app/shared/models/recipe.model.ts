export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public directions: string,
    public created?: Date
  ) {  }
}
