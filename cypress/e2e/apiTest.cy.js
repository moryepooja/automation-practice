describe('API Test', () => {

    it('Verify GET request', () => {
    
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
    
    expect(response.status).to.eq(200)
    
    expect(response.body.id).to.eq(1)
    
    })
    
    })
    
    })