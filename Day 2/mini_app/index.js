async function listfunction() {
  try {
    const response = await fetch(
      "https://api.sampleapis.com/cartoons/cartoons2D"
    );

    const data = await response.json();

    const listItem = document.getElementById("listItem");
    listItem.innerText = "";
    data.forEach((item) => {
      if (!item.title == "") {
        const li = document.createElement("li");
        li.textContent = `${item.title}`;
        listItem.append(li);
      }
    });
  } catch (error) {}
}

async function checkfunction() {
  try {
    const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");
    const data = await res.json();
    const resList = document.getElementById("resList");
    resList.innerHTML = "";

    const input_text = document.getElementById("input_txt").value.toLowerCase();
    data.forEach((user) => {
      if (user.title.toLowerCase().includes(input_text)) {
        console.log(user);
        const content = document.createElement("content");
        content.innerHTML = `
  <strong>TITLE:</strong> ${user.title} <br>
  <strong>YEAR:</strong> ${user.year} <br>
  <strong>CREATOR:</strong> ${user.creator}
`;
        resList.append(content);
      }
    });
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
}
