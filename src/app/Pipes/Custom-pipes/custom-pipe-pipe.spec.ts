import { CustomPipePipe } from './Custom-pipes/custom-pipe-pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
