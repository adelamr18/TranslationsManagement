process.env.NODE_ENV = 'test';
const mongoose = require("mongoose");
const Translation = require('../models/translation');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
describe('Translations', () => {
beforeEach((done) => { //Before each test we empty the database
    Translation.deleteMany({}, (err) => {
        done();
    });
});
/*
 * Test the /api/translations  get route
 */
describe('/api/translations  Translation', () => {
    it('it should GET all the translations from the database', (done) => {
        chai.request(server)
            .get('/api/translations')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});


/*
 * Test the /api/translations  post route
 */
describe('/api/translations translations', () => {
    let TranslationsArray = [{
        source: 'Hello guys, allow me to introduce the newest team member',
        target: 'Hola chicos, permítanme presentar al nuevo colega de equipo    '
    }, {
        source: 'Hello Everyone',
        target: 'Hola a todos'
    }]
    it('it should POST imported json data which must be equal to atleast one object in an array to the database', (done) => {
        setTimeout(done, 300);
        chai.request(server)
            .post('/api/translations')
            .send(TranslationsArray)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            });
    })
});
/*
 * Test the /api/translations  post route
 */
describe('/api/translations translations', () => {
    let TranslationsArray =[];
    it('it should not POST imported json data because the json data will be an empty array', (done) => {
        setTimeout(done, 300);
        chai.request(server)
            .post('/api/translations')
            .send(TranslationsArray)
            .end((err, res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                done();
            });
    })
});

});