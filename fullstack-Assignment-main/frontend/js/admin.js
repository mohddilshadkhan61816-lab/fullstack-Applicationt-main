// Add Project
document.getElementById("projectForm").addEventListener("submit", e => {
  e.preventDefault();

  fetch(API.PROJECTS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: pname.value,
      imageUrl: pimage.value,
      description: pdesc.value
    })
  }).then(() => alert("Project added"));
});

// Add Client
document.getElementById("clientForm").addEventListener("submit", e => {
  e.preventDefault();

  fetch(API.CLIENTS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: cname.value,
      imageUrl: cimage.value,
      designation: cdesig.value,
      description: cdesc.value
    })
  }).then(() => alert("Client added"));
});

// Load Contacts
fetch(API.CONTACT)
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById("contacts");
    data.forEach(c => {
      div.innerHTML += `<p>${c.fullName} - ${c.email}</p>`;
    });
  });

// Load Subscribers
fetch(API.SUBSCRIBE)
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById("subscribers");
    data.forEach(s => {
      div.innerHTML += `<p>${s.email}</p>`;
    });
  });


fetch(API.CONTACT)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("contactsObserved");
    container.innerHTML = "";

    data.forEach(contact => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>
          <strong>${contact.fullName}</strong><br/>
          Email: ${contact.email}<br/>
          Mobile: ${contact.mobile}<br/>
          City: ${contact.city}
        </p>
        <hr/>
      `;
      container.appendChild(div);
    });
  });


fetch(API.SUBSCRIBE)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("subscribersObserved");
    container.innerHTML = "";

    data.forEach(sub => {
      const p = document.createElement("p");
      p.textContent = sub.email;
      container.appendChild(p);
    });
  });