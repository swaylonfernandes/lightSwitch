let btn = document.getElementById("btn");
let theme = document.getElementById("linkTag");
let para = document.querySelector("#paragraph");
let mainQuote = document.querySelector("#quote");
let pic = document.querySelector("#bulb");

btn.addEventListener("click", () => {
    let currMode = theme.getAttribute("href");
    if(currMode === "light.css")
        {
            theme.setAttribute("href","dark.css")
            
            mainQuote.innerText = "Dim the Lights";
            para.innerText = "Darkness invites introspection, concealing details but deepening the mystery. In shadow, we turn inward, finding comfort in subtlety and silence. Dark Mode is not merely an aesthetic — it is the quiet reminder that clarity is not always found in what is seen, but often in what is felt. In the embrace of darkness, we discover focus, serenity, and the vastness of the unseen.";
            pic.setAttribute("src","whiteBulb.png");
            
        }
    else if (currMode === "dark.css")
        {
            theme.setAttribute("href","light.css")
            
            mainQuote.innerText = "Shine Bright";
            para.innerText = "Light unveils clarity, illuminating every detail and leaving nothing hidden in shadow. In brightness, there is a sense of openness, of truth laid bare before us. Light Mode is not just a theme — it is a reflection of our desire to understand, to see things as they are, and to navigate the world with clarity and purpose. In the glow of light, everything feels possible.";
            pic.setAttribute("src","blackBulb.png");
        }
})
