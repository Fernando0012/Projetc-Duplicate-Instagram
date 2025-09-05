const likeButton = document.querySelectorAll('.like-button');
const heart = document.querySelectorAll('#heart')
const save = document.querySelectorAll('#save')

heart.forEach(heart => {
    heart.addEventListener('click', () =>{
        if(heart.classList.contains('icon-heart-o')){
            heart.classList.replace('icon-heart-o', 'icon-heart');
        }
        else{
            heart.classList.replace('icon-heart', 'icon-heart-o');
        }
    })
})
save.forEach(save => {
    save.addEventListener('click', () => {
        if (save.classList.contains('icon-bookmark1')) {
            save.classList.replace('icon-bookmark1', 'icon-bookmark2');
            } else {
                save.classList.replace('icon-bookmark2', 'icon-bookmark1');
            }
    })
});

const modalHidden = document.querySelector('.linha')
const modalShow = document.querySelectorAll('#comment-button')
const modal = document.querySelector('#modal_comment')

modalHidden.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('open')
})

modalShow.forEach(modalShow => {
        
    modalShow.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.classList.add('open')
    })
})


// Pegando falor do input

const comment = document.querySelector('#sendComment')
const MyComment = document.querySelector('#MyComment');
const value = MyComment.value.trim();
const test = document.querySelector('#test1')
const createMyComment = document.createElement('div.test1')

function Comment(){
    if(MyComment.value.length){
        const div = document.getElementById('test1')
        const text = MyComment.value
        test.classList.remove('hidden')
        console.log(div)
        console.log(paragraphAndNickName)
        text.appendChild( document.getElementById('test-comment').innerHTML = text.trim())
        document.body.appendChild(createMyComment)
        test.classList.remove('hidden')

        text.trim() = value

    }
}

comment.addEventListener('click',(e) => {
    e.preventDefault();
     new Comment(value)
})