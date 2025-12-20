//Project LOad
fetch(API.PROJECTS)
  .then(res => res.json())
  .then(data => {
    const projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    data.forEach(project => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${project.imageUrl || 'https://via.placeholder.com/300'}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <button class="btn">Read More</button>
      `;

      projectsDiv.appendChild(card);
    });
  });

// ================= LOAD CLIENTS =================
fetch(API.CLIENTS)
  .then(res => res.json())
  .then(data => {
    const clientsDiv = document.getElementById("clients");
    clientsDiv.innerHTML = "";

    data.forEach(client => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${client.imageUrl || 'https://via.placeholder.com/150'}">
        <h3>${client.name}</h3>
        <p><strong>${client.designation}</strong></p>
        <p>${client.description}</p>
      `;

      clientsDiv.appendChild(card);
    });
  });

// ================= CONTACT FORM =================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const city = document.getElementById("city").value;

  fetch(API.CONTACT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      mobile: mobile,
      city: city
    })
  })
  .then(() => {
    alert("Contact submitted successfully");
    document.getElementById("contactForm").reset();
  })
  .catch(err => console.error("Contact error", err));
});

// ================= NEWSLETTER =================
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(API.SUBSCRIBE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: subEmail.value
    })
  })
  .then(() => {
    alert("Subscribed successfully");
    this.reset();
  });
});