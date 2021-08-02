import request from 'supertest';


import  app  from '../app';


describe("Digimons", ()=>{
 
    it("list digimons",async ()=>{
        const response = await request(app)
        .get("/v1/digimons");        
        expect(response.status).toBe(200);       
    });    
    it("if get especific digimon",async ()=>{
        const response = await request(app)
        .get("/v1/digimon/digimon");        
        expect(response.status).toBe(200);       
    });  
})