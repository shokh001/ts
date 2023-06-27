export class ID {
  static id: number = 1;

  static getNewId(): number {
    return this.id++;
  }
}
