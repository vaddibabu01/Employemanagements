describe('Add a new employee with valid data', () => {
    it('should successfully add a new employee', () => {
      cy.visit('/add-employee')
      cy.get('#name').type('Vaddi Babu')
      cy.get('#email').type('babuvaddi1155@gmail.com')
      cy.get('#position').type('Software Engineer')
      cy.get('form').submit()
      cy.contains('Vaddi Babu').should('exist')
      cy.contains('babuvaddi1155@gmail.com').should('exist')
      cy.contains('Software Engineer').should('exist')
    })
    it('Add a new employee with invalid data', () => {
        cy.visit('/add-employee')
        cy.get('#name').type('Rajesh')
        cy.get('#email').type('#%#671155@gmail')
        cy.get('#position').type(' ')
        cy.get('form').submit()
      })
      it("Edit an existing employee's details", () => {
        cy.visit('/add-employee')
        cy.contains('Vaddi Babu').clear().type('Babu')
        cy.contains('babuvaddi1155@gmail.com').clear().type('Babuv1166@gmail.com')
        cy.contains('Software Engineer').clear().type('Automation Tester')
      })
      it('Delete an employee record', () => {
        cy.visit('/add-employee')
        cy.get('#name').type('Vaddi Babu').clear()
        cy.get('#email').type('babuvaddi1155@gmail.com').clear()
        cy.get('#position').type('Software Engineer').clear()
        //I've no idea that where i need to delete employe records, so that i've cleared the entires.
      })
      it('Verify that the employee list is displayed correctly with the added/edited/deleted records', () => {
        cy.visit('/add-employee')
        cy.contains('Vaddi Babu').should('be.visible')
        cy.contains('babuvaddi1155@gmail.com').should('have.text','babuvaddi1155@gmail.com')
        cy.contains('Software Engineer').should('have.text','Software Engineer')
      })
      it('Verify that the status of an employee can be changed between "active" and "inactive"', () => {
        cy.visit('/add-employee')
        cy.get('#name').type('Vaddi Babu')
        cy.get('#email').type('babuvaddi1155@gmail.com')
        cy.get('#position').type('Software Engineer')
        cy.get('form').submit()
        //Assuming status of employee will be like radio buttons
        cy.get('radiobutton1').click()//After clicking this it will show employee status as ACTIVE.
        cy.get('radiobutton2').click()//After clicking this it will show employee status as IN-ACTIVE.
})
})