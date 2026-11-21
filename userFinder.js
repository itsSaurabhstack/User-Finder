
const users = [
    {
        name: "amisha rathore",
        pic: "https://randomuser.me/api/portraits/women/1.jpg",
        bio: "silent chaos in a loud world 😸🐻 | Iron man Fan"
    },
    {
        name: "Aarohi Sharma",
        pic: "https://randomuser.me/api/portraits/women/2.jpg",
        bio: "collecting sunsets & little moments 🌻 | coffee first ☕"
    },
    {
        name: "Kiara Malhotra",
        pic: "https://randomuser.me/api/portraits/women/3.jpg",
        bio: "pretty mind, messy thoughts ✨ | living my own story"
    },
    {
        name: "Meher Kapoor",
        pic: "https://randomuser.me/api/portraits/women/4.jpg",
        bio: "somewhere between dreams and reality 🌙 | art lover 🎨"
    },
    {
        name: "Ananya Verma",
        pic: "https://randomuser.me/api/portraits/women/5.jpg",
        bio: "less perfection, more authenticity 🦋 | stay curious"
    },
    {
        name: "Ira Malhotra",
        pic: "https://randomuser.me/api/portraits/women/6.jpg",
        bio: "romanticizing the ordinary 🌷 | music is my escape 🎧"
    },
    {
        name: "Myra Singh",
        pic: "https://randomuser.me/api/portraits/women/7.jpg",
        bio: "soft heart, strong boundaries 🖤 | midnight thinker"
    },
    {
        name: "Sana Khan",
        pic: "https://randomuser.me/api/portraits/women/8.jpg",
        bio: "creating my own sunshine ☀️ | books, music & adventures"
    }
];

const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");

// Render users
function showUsers(arr) {

  if(arr.length === 0){
    cards.innerHTML = "<p class = 'no-result'> No User Found</p>";
    return ;

    }
  
    const fragment = document.createDocumentFragment();

    arr.forEach(user => {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        img.className = "bg-img";

        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";
        blurredLayer.style.backgroundImage = `url("${user.pic}")`;

        const content = document.createElement("div");
        content.className = "content";

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.append(heading, para);
        card.append(img, blurredLayer, content);

        fragment.appendChild(card);
    });

    cards.replaceChildren(fragment);
}

// Initial rendering
showUsers(users);

// Search functionality
inp.addEventListener("input", () => {

    const searchValue = inp.value.trim().toLowerCase();


    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().startsWith(searchValue)
    );
    if(searchValue=== users.name){
      return " No result found";
    }
    showUsers(filteredUsers);
});
   