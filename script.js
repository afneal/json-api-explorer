// so much empty
const postList = document.getElementById('postList');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');
const fetchButton = document.getElementById('fetchButton');
const error = document.getElementById('error');
const deleteButton = document.getElementById('deleteButton');

document.addEventListener('click', function (event) {
	if (event.target.id === 'submit') {
		event.preventDefault();
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => {
				response.json().then(data => {
					postList.innerHTML = `<h2>${titleInput.value}</h2>
                    <p>${bodyInput.value}</p>`;
				});
			});
	}
});
fetchButton.innerHTML

document.addEventListener('click', function (event) {
	if (event.target.id === 'fetchButton') {
		alert("Loading...")
		event.preventDefault();
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(json => {
				json.forEach(post => {
					const newPost = document.createElement('div');
					newPost.innerHTML = `<h2>${post.title}</h2> <p>${post.body}</p>`
					postList.appendChild(newPost);
				})
			}
			)
			.catch(error => {
				console.error("Error. Failed to fetch.", error);
			})
	}
})









