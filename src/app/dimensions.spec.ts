// import { Dimensions } from './dimensions';

// // 1. describe - define test suite, Create a group of specs (often called a suite)
// describe('DimensionCalculator', () => {

//   let obj: Dimensions;

//   beforeAll(() => { //setup
//     obj = new Dimensions();
//   })

//   afterAll(() => { //teardown
//     obj = null;
//   })

//   // 2. it - define an individual unit test case
//   it('should return area equal or greater than 100', () => {

//     // dependency injection
//     // let obj: Dimensions = new Dimensions();

//     const areaResult = obj.getArea(10, 10);

//     // 3. expect - Create an expectation/assertion for a spec
//     expect(areaResult).toBeGreaterThanOrEqual(100);

//   })

//   it('should include person name in greeting', () => {
//     let length = 10;
//     // let obj: Dimensions = new Dimensions();
//     expect(obj.greetingsTo("nitesh")).toContain("Welcome nitesh");

//   });

//   it('should return supported country in array', () => {
//     // let obj: Dimensions = new Dimensions();
//     expect(obj.getCountry()).toContain('India');
//     expect(obj.getCountry()).toContain('Russia');
//   })

// }) // describe

// // describe('Dimensions', () => {
// //   let obj: Dimensions;

// //   beforeEach(() => { // Setup
// //     obj = new Dimensions();
// //   });

// //   afterEach(() => { // TearDown
// //     obj = new Dimensions();
// //   }) 

// //   // it('should create an instance', () => {
// //   //   expect(new Dimensions()).toBeTruthy();
// //   // });
// // });
