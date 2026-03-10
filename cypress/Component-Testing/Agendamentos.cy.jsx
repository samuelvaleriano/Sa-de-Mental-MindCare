import Agendamentos from "../../src/pages/AgendamentosPages/Agendamentos"
import { MemoryRouter } from "react-router-dom"

describe("Componente Agendamentos", () => {

  function montarComponente() {
    cy.mount(
      <MemoryRouter>
        <Agendamentos />
      </MemoryRouter>
    )
  }

  it("Tem que renderizar a tela de agendamento", () => {

    montarComponente()

    cy.contains("Agende sua consulta")
    cy.contains("Confirmar Agendamento")
    cy.contains("Voltar")

  })


  it("Aqui deve permitir selecionar um horário", () => {

    montarComponente()

    cy.contains("10:00").click()

    cy.contains("10:00").should("exist")

  })


  it("Mostrar alerta se não selecionar data e horário", () => {

    montarComponente()

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alerta")
    })

    cy.contains("Confirmar Agendamento").click()

    cy.get("@alerta")
      .should("have.been.calledWith", "Selecione uma data e um horário.")

  })


  it("Confirmar o agendamento", () => {

    montarComponente()

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alerta")
    })

    cy.get('input[type="date"]').type("2026-03-20")

    cy.contains("09:00").click()

    cy.contains("Confirmar Agendamento").click()

    cy.get("@alerta").should("have.been.called")

  })

})