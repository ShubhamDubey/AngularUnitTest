import { Functions } from './functions';

describe('Functions', () => {
  let obj: Functions;

  beforeEach(() => { // Setup
    obj = new Functions();
  });

  afterEach(() => { // TearDown
    obj = new Functions();
  })

  it('should return 0 if input is -ve', () => {
    const counterResult = obj.counterParameter(-1);
    expect(counterResult).toBe(0);
    expect(counterResult).toBeLessThanOrEqual(0);
  })

  it('should increment if input is positive', () => {
    const counterResult = obj.counterParameter(1);
    expect(counterResult).toBe(2);
  })

  // it('should create an instance', () => {
  //   expect(new Functions()).toBeTruthy();
  // });
});
