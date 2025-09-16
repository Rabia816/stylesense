const outfits = [
    { title: "Casual Chic", description: "Denim jacket, white tee, black jeans, sneakers.", img: "https://via.placeholder.com/200x150?text=Casual+Chic" },
    { title: "Formal Elegance", description: "Navy blazer, white shirt, grey trousers, leather shoes.", img: "https://via.placeholder.com/200x150?text=Formal+Elegance" },
    { title: "Party Glam", description: "Red dress, heels, statement jewelry.", img: "https://via.placeholder.com/200x150?text=Party+Glam" },
    { title: "Summer Vibes", description: "Floral shirt, beige shorts, sandals.", img: "https://via.placeholder.com/200x150?text=Summer+Vibes" },
    { title: "Winter Comfort", description: "Wool coat, scarf, boots, dark trousers.", img: "https://via.placeholder.com/200x150?text=Winter+Comfort" }
];

const chatReplies = [
    "Always pick outfits that suit your skin tone.",
    "Accessorize lightly for a clean look.",
    "Layering is key in cooler weather.",
    "Neutral colors go with everything!",
    "Confidence is the best accessory."
];

function generateOutfit() {
    const desc = document.getElementById("description").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    if (!desc) {
        resultDiv.innerHTML = "<p>Please describe your mood or occasion.</p>";
        return;
    }
    outfits.forEach(outfit => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = \`
            <img src="\${outfit.img}" alt="\${outfit.title}" />
            <h4>\${outfit.title}</h4>
            <p>\${outfit.description}</p>
        \`;
        resultDiv.appendChild(card);
    });
}

function previewPhoto(event) {
    const preview = document.getElementById("photo-preview");
    preview.innerHTML = "";
    const file = event.target.files[0];
    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    }
}

function sendMessage() {
    const input = document.getElementById("chat-input").value.trim();
    const output = document.getElementById("chat-output");
    if (!input) {
        return;
    }
    const userMsg = document.createElement("div");
    userMsg.innerHTML = "<strong>You:</strong> " + input;
    output.appendChild(userMsg);
    const replyMsg = document.createElement("div");
    const reply = chatReplies[Math.floor(Math.random() * chatReplies.length)];
    replyMsg.innerHTML = "<strong>Style Sense:</strong> " + reply;
    output.appendChild(replyMsg);
    output.scrollTop = output.scrollHeight;
    document.getElementById("chat-input").value = "";
}
