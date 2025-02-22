// import { onSmartTablePage } from "../support/page_objects/smartTablePage"\
import { generatorUniqueId } from "../support/funcitonalitiesJs/generatorUniqueId"
import { mathNumberRandom } from "../support/funcitonalitiesJs/generatorUniqueId"







describe('Test with backedn', () => {

  before('login to application', () => {
    cy.loginToApplication()
  })

  it.only('verify correct request and response', () => {

    // const titleWithUniqueId = `${title} + ${generatorUniqueId}`
    // cy.log(titleWithUniqueId)
    const titleWithUniqueId = `${title} + ${mathNumberRandom}`


    cy.contains('New Article').click()
    cy.get('[formcontrolname="title"]').type('title')
    cy.get('[formcontrolname="description"]').type('des')
    cy.get('[formcontrolname="body"]').type('body')
    cy.contains("Publish Article").click()
  })
})