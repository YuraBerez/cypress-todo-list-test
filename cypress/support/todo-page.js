class TodoPage {
    visit() {
      cy.visit('https://todomvc.com/examples/react/dist/')
    }
  
    addTodoItem(text) {
      cy.get('[data-testid="text-input"]').type(`${text}{enter}`)
    }
  
    markTodoItemAsCompleted() {
      cy.get('[data-testid="todo-item-toggle"]').click()
    }
  
    deleteTodoItem() {
      cy.get('.destroy').click({ force: true })
    }
  
    editTodoItem(newText) {
      cy.get('[data-testid="todo-item-label"]').dblclick()
      cy.get('#root > main > ul > li > div > div > #todo-input').type(`${newText}{enter}`)
    }
  
    verifyTodoItemExist(text) {
      cy.get('[data-testid="todo-list"] li').should('contain', text)
    }
  
    verifyTodoItemCompleted() {
      cy.get('[data-testid="todo-item"]').should('have.class', 'completed')
    }
  
    verifyTodoItemDeleted(text) {
      cy.get('[data-testid="todo-list"]').should('not.contain', text)
    }
  
    verifyTodoItemEdited(text) {
      cy.get('[data-testid="todo-list"]').should('contain', text)
    }
  }
  
  export default new TodoPage()
  