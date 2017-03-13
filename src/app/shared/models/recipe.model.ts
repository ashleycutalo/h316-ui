export class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public ingredients: string[],
    public directions: string,
    public imageUrl: string,
    public created?: Date
  ) {  }
}
