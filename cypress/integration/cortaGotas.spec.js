///<reference types="cypress" />

describe('Validar cenários referentes a funcionalidade de Corta Gotas da Evino', () => {
    context('Dado que acesso o site da Evino', () => {
        beforeEach(() => {
            cy.clearCookies()
            cy.clearLocalStorage()
            cy.viewport(1920, 1080)
            cy.visit('https://www.evino.com.br/')
            
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .FormGroup > .InputWrapper > .FormControl')
                .type('guilherme.teste.evino@teste.com.br',
                    {force:true})
                .log('E-mail')
        
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .Btn')
                .click({force:true})
                .log('Confirmar e-mail')
            
            cy.wait(2000)
        });

    context('Quando adiciono uma garrafa de vinho na minha EvinoBOX', () => {
        beforeEach(() => {
            cy.get('.NavigationSearch__form')
                .type('Villa Matilde Cecubo 2014')
                .log('Campo de pesquisa')

            cy.wait(2000)

            cy.get('mark')
                .click({force:true})
                .log('Selecionar produto')
        
            cy.get('.BuyBox__callToAction > .sc-bdVaJa')
                .click()
                .log('Adicionar ao carrinho')

            cy.wait(2000)
        });

        it('Então devo visualizar apenas um corta gotas na minha EvinoBOX', () => {
            cy.get('.CartNavigation__icon')
                .click({force:true})
                .log('Ícone da EvinoBOX')

            cy.wait(1000)
            
            cy.get('.CartView > :nth-child(1)')
                .should('be.visible')
                .contains('1un. grátis')
            });
        });
    });

    context('Dado que possuo 1 garrafa em minha EvinoBox', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://www.evino.com.br/')
            
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .FormGroup > .InputWrapper > .FormControl')
                .type('guilherme.teste.evino@teste.com.br',
                    {force:true})
                .log('E-mail')
    
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .Btn')
                .click({force:true})
                .log('Confirmar e-mail')

            cy.wait(2000)

            cy.get('.CartNavigation__icon')
                .click({force:true})
                .log('Ícone da EvinoBOX')
            
            cy.get('.CartView > :nth-child(1)')
                .should('be.visible')
                .contains('1un. grátis')
        });

    context('Quando adiciono um kit de 10 garrafas de vinho na minha EvinoBO', () => {
        beforeEach(() => {
            cy.get(':nth-child(3) > .MainNavigation__item > span')
                .click()
                .log('Kits')
        
            cy.wait(800)

            cy.contains('Kit 10')
                .scrollIntoView()
                .click({force:true})
                .log('Selecionar algum kit com 10 garrafas')

            cy.wait(1500)

            cy.get('.BuyBox__callToAction > .sc-bdVaJa')
                .click()
                .log('Adicionar à EvinoBOX')
                
            cy.wait(2000)
        });

        it('Então devo visualizar onze corta gotas na minha EvinoBOX', () => {
            cy.get('.CartNavigation__icon')
                .click({force:true})
                .log('Ícone da EvinoBOX')

            cy.get('.CartView > :nth-child(1)')
                .should('be.visible')
                .contains('11un. grátis')
            });
        });
    });

    context('Dado que possuo 11 garrafas de vinho na minha EvinoBOX', () => {
        beforeEach(() => {
            cy.viewport(1920, 1080)
            cy.visit('https://www.evino.com.br/')
            
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .FormGroup > .InputWrapper > .FormControl')
                .type('guilherme.teste.evino@teste.com.br',
                    {force:true})
                .log('E-mail')
    
            cy.get('#SoftLoginForm > .InputAction > .InputInline > .Btn')
                .click({force:true})
                .log('Confirmar e-mail')

            cy.wait(2000)

            cy.get('.CartNavigation__icon')
                .click({force:true})
                .log('Ícone da EvinoBOX')
            
            cy.get('.CartView > :nth-child(1)')
                .should('be.visible')
                .contains('11un. grátis')
        });
        
    context('Quando removo todas as garrafas de vinho da minha EvinoBOX', () => {
        beforeEach(() => {
            cy.get(':nth-child(1) > .CartTile > :nth-child(1) > .cwdKQS > .CartItemContentWrapper > .kJvUHU > .hZNxQG > .sc-bdVaJa')
                .click({force:true})
                .log('Excluir produto')

            cy.wait(500)

            cy.get(':nth-child(2) > .CartTile > :nth-child(1) > .cwdKQS > .CartItemContentWrapper > .kJvUHU > .hZNxQG > .sc-bdVaJa')
                .click({force:true})
                .log('Excluir produto')

            cy.wait(2100)
        });
        
        it('Então devo visualizar uma mensagem Sua EvinoBOX está vazia', () => {
            cy.contains('Sua EvinoBOX está vazia')
        });
    });
    });
}); 