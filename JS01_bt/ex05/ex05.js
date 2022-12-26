let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    alert("failure");
  } else {
    msg.innerHTML = "";
    alert("successs");

  }
  acceptData()
}
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};
let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)">&#8635;</i>
      <i onClick="deletePost(this)">&#9932;</i>
    </span>
  </div>
  `;
  input.value = "";
};
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};