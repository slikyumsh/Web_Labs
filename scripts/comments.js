const container = document.getElementById('feedback-container')
const form = document.getElementById('form')

const createComment = (name, message) => {
  const html = `
    <div class="comment" id='${new Date().getTime()}'>
      <h3>${name}</h3>
      <p>${message}</p>
    </div>
  `
  container.insertAdjacentHTML('beforeend', html);
}

if (localStorage.getItem('comments')) {
  const comments = JSON.parse(localStorage.getItem('comments'));
  comments.forEach((c) => {
    createComment(c.name, c.text);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = e.target[0].value
  const message = e.target[1].value
  createComment(name, message)
  form.reset()
});

container.addEventListener('DOMSubtreeModified', () => {
  const items = document.querySelectorAll('.comment');

  let comments = [];
  items.forEach((item) => {
    const id = item.id;
    const name = item.querySelector('h3').innerText;
    const text = item.querySelector('p').innerText;

    comments.push({ id, name, text });
  });

  localStorage.setItem('comments', JSON.stringify(comments));
})
