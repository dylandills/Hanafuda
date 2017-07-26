export class Player {
  public turn: boolean = false;
  public hand: any[] = ['cards'];
  constructor (public name: string, public birthMonth: string, public score: number) {}
}
