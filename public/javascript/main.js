let delete_todos = document.querySelectorAll(".button-x")
let img_todos = document.querySelectorAll(".img-edit")
let complete_todos = document.querySelectorAll(".button-not-done")


// delete_todos.forEach((delete_todo) => {
//     delete_todo.addEventListener('click', e => {
//         console.log(true)
//     })
// })

img_todos.forEach((img_todo) => {
    img_todo.addEventListener('click', e => {
        
        img_todo.src = `asset/save.png`
        img_todo.parentNode.href = "/todo"
        //e.preventDefault()
    })
})

complete_todos.forEach((complete_todo) => {

    complete_todo.addEventListener('click', e => {
        
        console.log(complete_todo.src)
        // complete_todo.src = `asset/save.png`
        // complete_todo.classList.remove("");
        // e.preventDefault()
    })
})
