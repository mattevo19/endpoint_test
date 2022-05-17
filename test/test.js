import chai, { expect } from "chai"
import chaiHttp from "chai-http"

chai.use(chaiHttp)

describe("/Gyms", () => {
  it("testing if the err is nul", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms")
      .end((err, res) => {
        expect(err).to.be.null
        done()
      })
  })
  it("testing if the status is 200", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms")
      .end((err, res) => {
        expect(res).to.have.status(200)
        // expect(res).to.have.status(300);
        done()
      })
  })
  it("testing if res is json", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms")
      .end((err, res) => {
        expect(res).to.be.json
        done()
      })
  })
  it("testing if res is an object", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms")
      .end((err, res) => {
        expect(res.body).to.be.instanceof(Array)
        expect(res.body).to.be.an("array") /* .that.is.empty */
        done()
      })
  })
  it("testing if object.length = 3", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms")
      .end((err, res) => {
        expect(res.body).to.have.length(3)
        done()
      })
  })
})
// expect(res.body).to.have.any.keys("id", "name","location");

describe("/Gyms/:id", () => {
  it("testing for keys present", (done) => {
    chai
      .request("http://localhost:3000")
      .get("/gyms/1")
      .end((err, res) => {
        expect(res.body).to.have.all.keys("id", "name", "location")
        done()
      })
  })
})
