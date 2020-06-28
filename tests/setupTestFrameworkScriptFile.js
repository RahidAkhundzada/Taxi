jest.setTimeout(10000) // we set timeout interval is 10 seconds for every test case

beforeAll(async () => {
    await initializeDatabase(); // this is just an example
    initializeOtherDepedency();

}, 3000)
