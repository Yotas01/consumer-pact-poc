beforeAll((done) => {
    console.log("Imma start it");
    global.provider.setup().then(() => done());
});

afterAll((done) => {
    console.log("Imma kill it");
    global.provider.finalize().then(() => done());
});