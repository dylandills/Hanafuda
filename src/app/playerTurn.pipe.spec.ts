import { PlayerTurnPipe } from './player.pipe';

describe('PlayerTurnPipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerTurnPipe();
    expect(pipe).toBeTruthy();
  });
});
