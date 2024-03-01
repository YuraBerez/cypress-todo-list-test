import TodoPage from '../support/todo-page'

describe('TodoMVC application', () => {
  beforeEach(() => {
    TodoPage.visit()
  })

  it('Add a new todo item', () => {
    TodoPage.addTodoItem('item 1')
    TodoPage.verifyTodoItemExist('item 1')
  })

  it('Mark a todo item as completed', () => {
    TodoPage.addTodoItem('item 1')
    TodoPage.markTodoItemAsCompleted()
    TodoPage.verifyTodoItemCompleted()
  })

  it('Delete a todo item', () => {
    TodoPage.addTodoItem('New Todo')
    TodoPage.deleteTodoItem()
    TodoPage.verifyTodoItemDeleted('New Todo')
  })

  it('Edit an existing todo item', () => {
    TodoPage.addTodoItem('New Todo')
    TodoPage.editTodoItem(' Edited')
    TodoPage.verifyTodoItemEdited('New Todo Edited')
  })
})
