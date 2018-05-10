const state = {
    all:[
        {
          id:1,
          text:'hello1',
          compl:false
        },
        {
          id:2,
          text:"hello2",
          compl:false
        }
      ],
      currentFilter:'All'
}
const mutations = {
    submit(state,comment){
        state.all.push(comment)
    },
    close(state,id){
        state.all = state.all.map(todo => {
            if( id === todo.id) todo.compl = true
            return todo
        })
    },
    setFilter(state,filter){
        state.currentFilter = filter
    }
}

export default {
    state,
    mutations
}