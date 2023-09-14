// let items = document.querySelectorAll('.item')
// let openedItem

// items.forEach((item, idx) => {
//     item.onclick = () => {

//         if(openedItem === idx) {
//             item.classList.remove('active')
//             return
//         }

//         if(items[openedItem]) {
//             items[openedItem].classList.remove('active')
//         }

//         item.classList.add('active')
//         openedItem = idx
//     }
// })

let modal = document.querySelector('.modal_bg')
let modal_content = modal.querySelector('.left_right')
let btnOpen = document.querySelector('.right button')


btnOpen.onclick = () => {
    modal.style.display = "flex"
    // modal_content.style.display = "block"
}