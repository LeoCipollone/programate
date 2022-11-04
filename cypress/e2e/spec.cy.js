const URL = "https://programate.vercel.app";

describe('Test if the app is running correctly', () => {
  it('finds the content "Bienvenido"', () => {
    cy.visit(URL)

    cy.contains('Bienvenido')
  })
});

describe('Check if the title is not modified', () => {
  it('check if the title is equal to "PrograMate ChatBot"', () => {
    cy.visit(URL)

    cy.title().should('eq', 'PrograMate ChatBot')
  })
});

describe('Check if the app have all the options', () => {
  it('check if the initial number of widgets is the correct (14)', () => {
    cy.visit(URL)

    cy.get('.option-item').should('have.length', 14)
  })
});

describe('Check if answer to user questions', () => {
  it('type questions and wait the bot to answer correctly', () => {
    cy.visit(URL)
    
    cy.get('input').type('Hola').type('{enter}')
    cy.get('.react-chatbot-kit-chat-bot-message-container').should('include.text', 'Hola')

    cy.get('input').type('Quiero hacer una app').type('{enter}')
    cy.get('.react-chatbot-kit-chat-bot-message-container').should('include.text', '?')

    cy.get('input').type('Una app de dinosaurios para android').type('{enter}')
    cy.get('.react-chatbot-kit-chat-bot-message-container').should('include.text', 'Java')
  })
});

describe('Test buttons and check correct options', () => {
  it('clicks the link with "Frameworks" and wait for options "Front End" and "Back End"', () => {
    cy.visit(URL)
    
    cy.contains('Frameworks').click()
    cy.get('.option-item')
      .should('include.text', 'Front End')
      .should('include.text', 'Back End')
  })
});

describe('Check font-family', () => {
  it('check if font-family is not modified', () => {
    cy.visit(URL)
    
    cy.get('body') // yields <nav> // yields <nav>
    .should('have.css', 'font-family') // yields 'sans-serif'
    .and('match', /Roboto/) // yields 'sans-serif'
  })
});