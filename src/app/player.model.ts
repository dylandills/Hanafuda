export class Player {
  public turn: boolean = false;
  public hand: any[] = ['cards'];

  constructor (public name: string, public score: number) {}
}

// public birthMonth: string is wish list
