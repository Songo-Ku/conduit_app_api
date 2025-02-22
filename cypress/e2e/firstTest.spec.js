describe('Test with backedn', () => {

  before('login to application', () => {
    cy.loginToApplication()
  })

  it.only('verify correct request and response', () => {
    cy.contains('New Article').click()
    cy.get('[formcontrolname="title"]')
    cy.get('[formcontrolname="description"]')
    cy.get('[formcontrolname="body"]')
    cy.contains("Publish Article")

  })
})