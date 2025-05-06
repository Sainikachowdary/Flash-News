
  
  const newsContainer = document.getElementById("newsContainer");
  const searchInput = document.getElementById("searchInput");
  
  function renderArticles(filter = "") {
    newsContainer.innerHTML = "";
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(filter.toLowerCase())
    );
  
    filtered.forEach(article => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
      newsContainer.appendChild(card);
    });
  }
  const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  document.querySelectorAll(".news-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});

  
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderArticles(searchInput.value);
    });
  }
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

  renderArticles();
  