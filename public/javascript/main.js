let item_todos = document.querySelectorAll(".btn-edit")
let img_todos = document.querySelectorAll(".img-edit")


// delete_todos.forEach((delete_todo) => {
//     delete_todo.addEventListener('click', e => {
//         console.log(true)
//     })
// })

img_todos.forEach((img_todo) => {
    img_todo.addEventListener('click', e => {
        
        img_todo.src = `asset/save.png`
        input_todo = img_todo.parentElement.parentElement.parentElement.querySelector("input")
        console.log(input_todo)

        input_todo.removeAttribute("readonly");
        input_todo.focus();

        //img_todo.parentNode.href = "/todo"
        //e.preventDefault()
    })
})

