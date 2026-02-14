/// <reference types="cypress" />

describe('Teste de Autenticação', () => {
  it('should pass', () => {

     const emailValido = "samuelvaleriano@gmail.com";
     const senhaValida = "1234";

        cy.visit('http://localhost:5173');

     cy.get('input#loginpage_input_email').type(emailValido);
     cy.get('input#loginpage_input_password ')
     .type(senhaValida);

        cy.get('#loginpage_button_entrar').click();
       

        cy.location('pathname').should('eq', '/Home');



  });   
});
