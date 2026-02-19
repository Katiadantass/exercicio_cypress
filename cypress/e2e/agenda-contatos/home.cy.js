/// <reference types="cypress" />

describe("Agenda de Contatos - Testes E2E", () => {

    beforeEach(() => {
        cy.visit("https://ebac-agenda-contatos-tan.vercel.app/")
    })

    it("Deve incluir um novo contato", () => {

        cy.get(".sc-gLDzan > input[type='text']")
            .type("Ana Coelho")

        cy.get(".sc-gLDzan > input[type='email']")
            .type("ana.coelho.teste@gmail.com")

        cy.get(".sc-gLDzan > input[type='tel']")
            .type("21999999999")

        cy.get(".sc-gLDzan > div > button")
            .click()

        cy.contains("Ana Coelho").should("exist")
        cy.contains("ana.coelho.teste@gmail.com").should("exist")
        cy.contains("21999999999").should("exist")
    })

    it("Deve alterar o primeiro contato da lista", () => {

        cy.get(".edit").first().click()

        cy.get(".sc-gLDzan > input[type='text']")
            .clear()
            .type("Pedro Coelho")

        cy.get(".sc-gLDzan > input[type='email']")
            .clear()
            .type("pedro.coelho.teste@gmail.com")

        cy.get(".sc-gLDzan > input[type='tel']")
            .clear()
            .type("21912345678")

        cy.get(".alterar").click()

        cy.contains("Pedro Coelho").should("exist")
        cy.contains("pedro.coelho.teste@gmail.com").should("exist")
        cy.contains("21912345678").should("exist")
    })

    it("Deve remover o primeiro contato da lista", () => {

        cy.get(".delete").first().click()

        // Confirmação automática caso exista alert
        cy.on('window:confirm', () => true)

        // Valida que o contato não existe mais
        cy.contains("Pedro Coelho").should("not.exist")
    })

})
