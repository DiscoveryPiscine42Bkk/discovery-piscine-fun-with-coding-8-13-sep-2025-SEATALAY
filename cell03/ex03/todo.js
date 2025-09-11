const list = document.getElementById("ft_list");
const btn = document.getElementById("newBtn");

// โหลดจาก cookie
window.onload = () => {
  const saved = getCookie("todos");
  if (saved) {
    JSON.parse(saved).forEach(text => addTodo(text, false));
  }
};

btn.addEventListener("click", () => {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text.trim(), true);
  }
});

function addTodo(text, save) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Remove this TO DO?")) {
      list.removeChild(div);
      saveTodos();
    }
  });

  list.insertBefore(div, list.firstChild);
  if (save) saveTodos();
}

function saveTodos() {
  const items = Array.from(document.querySelectorAll(".todo")).map(el => el.textContent);
  document.cookie = "todos=" + JSON.stringify(items) + ";path=/";
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}
