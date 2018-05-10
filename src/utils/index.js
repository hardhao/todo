export const filterTodos = (todos,filter) => {
    if(filter === 'COMPL'){
        return todos.filter(t => t.compl === true)
    }
    return todos
}