const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 10000;

// Middleware for security headers
app.use(helmet());

// Middleware for logging HTTP requests
app.use(morgan('combined'));

// Serve static files from the "public/assets" folder
app.use(express.static(path.join(__dirname, 'public', 'assets')));

// Route racine avec res.send() pour envoyer directement du contenu HTML
app.get('/', (req, res) => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRAZY-MD</title>
  <meta name="theme-color" content="#f0a500">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Poppins:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Aladin&family=Grenze+Gotisch:wght@900&family=Jolly+Lodger&family=New+Rocker&display=swap');

    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100vh;
      margin: 0;
      background-image: url("https://telegra.ph/file/e1c97c509ab9dc093bcca.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      color: #f0f0f0;
      font-family: 'Roboto', sans-serif;
    }

    header {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 50px
    }

    h1 {
      /*font-family: 'Fira Code', sans-serif;*/
      font-family: 'New Rocker',cursive;
      font-size: 3.2em;
      color: #047601;
      margin: 0;
      text-shadow: 
                2px 2px 0 #000, 
                -2px -2px 0 #000, 
                -2px 2px 0 #000, 
                2px -2px 0 #000,
                2px 0 0 #000, 
                -2px 0 0 #000, 
                0 2px 0 #000, 
                0 -2px 0 #000;
    }

    h2 {
      font-family: 'Fira Code', sans-serif;
      font-size: 0.8em;
      color: #d3d0c2;
      margin: 5px 0 30px;
      opacity: 0.8;
    }

    .btn {
      --primary-color: #a9263e;
      --secondary-color: #5a806c;
      width: 180px;
      padding: 0.6em 1.5em;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      border-radius: 6px;
      border: 1px solid var(--primary-color);
      transition: 0.5s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 1;
      font-weight: 500;
      font-size: 15px;
      font-family: 'Fira Code', monospace;
      text-transform: uppercase;
      color: var(--secondary-color);
      margin-bottom: 15px;
      top: -30px;
      text-align: center;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;    
    }

    .btn::after, .btn::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform: skew(90deg) translate(-50%, -50%);
      position: absolute;
      inset: 50%;
      left: 25%;
      z-index: -1;
      transition: 0.5s ease-out;
      background-color: var(--primary-color);
    }

    .btn::before {
      top: -50%;
      left: -25%;
      transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::before {
      transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::after {
      transform: skew(45deg) translate(-50%, -50%);
    }

    .btn:hover {
      /*color: var(--secondary-color);*/
      color: black;
      font-weight: 600;
    }

    .btn:active {
      filter: brightness(0.7);
      transform: scale(0.98);
    }


.btn:nth-of-type(1) {
    animation: shrink 2.4s infinite 0s;
}

.btn:nth-of-type(2) {
    animation: shrink 2.4s infinite 0.4s;
}

.btn:nth-of-type(3) {
    animation: shrink 2.4s infinite 0.8s;
}

.btn:nth-of-type(4) {
    animation: shrink 2.4s infinite 1.2s;
}

.btn:nth-of-type(5) {
    animation: shrink 2.4s infinite 1.6s;
}

.btn:nth-of-type(6) {
    animation: shrink 2.4s infinite 2s;
}

@keyframes shrink {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}




    footer {
      position: absolute;
      bottom: 10px;
      text-align: center;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.8em;
      color: #f0f0f0;
    }

.menu-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: transparent; /* Transparent background */
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s;
  color: #a9263e; /* Orange color for the icon */
  font-size: 24px;
  padding: 10px;
}

.menu-btn:hover {
  transform: scale(1.1);
  color: #a9263e; /* Slightly darker orange on hover */
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: #f0f0f0;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}

.sidebar.show {
  transform: translateX(0);
}

.sidebar.lock {
  transform: translateX(0);
}

.sidebar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px dotted #047601;
}

.sidebar .profile-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2em;
  margin-bottom: 30px;
  opacity: 0.9;
  color: #d3d0c2;
}

.sidebar .bio {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8em;
  color: #d3d0c2;
  margin-top: 0px;
  margin-bottom: 30px;
  margin-left: 5px;
  margin-right: 5px;
  
}

.sidebar .follow-btn {
  width: 150px;
  padding: 0.4em 1em;
  background-color: #000;
  border-radius: 6px;
  border: 1px solid #a9263e;
  transition: 0.3s;
  text-transform: uppercase;
  color: #d3d0c2;
  text-align: center;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  opacity: 0.8;
   background: linear-gradient(-45deg, #2f5c4f, #5a806c, #c14a5e, #773849);
   background-size: 400% 400%;
   animation: gradient 10s ease infinite;
   display: flex;
   justify-content: center;
   align-items: center;
}

@keyframes gradient {
   0% {
       background-position: 0% 50%;
   }
   50% {
       background-position: 100% 50%;
   }
   100% {
       background-position: 0% 50%;
   }
}


.sidebar .follow-btn:hover {
  color: black;
}

#love {
 position: relative;
 margin-top: 95px;
text-align: center;
 font-family: 'Courier New', Courier, monospace;
 font-size: 0.9em;
 color: #d3d0c2;
}
  </style>
</head>
<body>

  <header>
    <h1 id="titre">CRAZY-MD</h1>
    <h2>Multifunctional WhatsApp Bot <br>(Coming soon)</h2>
  </header>

  <button class="menu-btn" onclick="toggleSidebar()">&#9776;</button>

<div class="sidebar" id="sidebar">
  <img src="https://telegra.ph/file/3e6c0250c7ac90c8379ca.jpg" alt="Profile Picture" id="profile-pic">
  <div class="profile-name"onclick="redirigerVersWhatsApp()">@CrazyPrince</div>
  <div class="bio">Ce bot est développé par la Team CRAZY-MD avec Ken~v et Crazy_Prince...<br>Thanks to @Crypto_RIV for their voice🙃</div>
 
  <a href="https://app.koyeb.com/auth/signup" class="follow-btn" target="_blank">KHOYEB</a>
  <a href="https://dashboard.heroku.com/new?template=https://github.com/CrazyPrince/CRAZY-MD" class="follow-btn" target="_blank">HEROKU</a>
  <a href="https://github.com/kenvofc" class="follow-btn" target="_blank">GITHUB</a>
  <a href="https://railway.app/login" class="follow-btn" target="_blank">RAIWAY</a>
  <a href="https://pastebin.com/asbE1Zbr" class="follow-btn" target="_blank">BOTS LIST</a>
  <a href="wa.me/237620114013" class="follow-btn" target="_blank"> Contact Me</a>

  <a id="love">Made with ❤️</>
 
</div>

  <a href="/pair" class="btn" id="btn1" target="_blank" onclick="window.open('/pair'); return false;">Pair Code</a>
  <a href="/crazyqr" class="btn" id="btn2" target="_blank" onclick="window.open('/crazyqr'); return false;">Qr code</a>
  <a href="https://github.com/CrazyPrince/CRAZY-MD/fork" class="btn" id="btn3" target="_blank">FORK</a>
  <a href="https://dashboard.heroku.com/new?template=https://github.com/CrazyPrince/CRAZY-MD" class="btn" id="btn4" target="_blank">Deploy</a>
  <a href="/helps" class="btn" id="btn5" target="_blank" onclick="window.open('/helps'); return false;">Helps</a>
<br>
<br>
<audio controls>
  <source src="kongga.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

  <footer>
    &copy; 2024 Crazy-MD
  </footer>

<script>
  document.getElementById('titre').addEventListener('click', function() {
    location.reload(); // Refresh the page
  });
</script>
<script>
  function redirigerVersWhatsApp() {
    window.location.href = "https://wa.me/+237620114013";
  }
</script>
<script>
  document.getElementById('profile-pic').addEventListener('click', function() {
    location.reload(); // Refresh the page
  });
</script>
<script>
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
  }
</script>
</body>
</html>
  `;
  res.send(htmlContent);
});

// Route pour servir pair.html lorsque la route /pair est accédée
app.get('/pair', (req, res) => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pair Code</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(-45deg, #52aaee, #10e826, #3f10e8, #23d5ab);
   background-size: 400% 400%;
   animation: gradient 25s ease infinite;
    }

    @keyframes gradient {
   0% {
       background-position: 0% 50%;
   }
   50% {
       background-position: 100% 50%;
   }
   100% {
       background-position: 0% 50%;
   }
}

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .box {
      width: 300px;
      height: 320px;
      padding: 20px;
      position: relative;
      text-align: center;
      background-color: rgb(0, 0, 0);
      border-radius: 10px;
      transform: perspective(1000px) rotateY(0deg);
      box-shadow: 0 0 20px rgba(250, 249, 249, 0.7);
      position: relative;
    }

    #text {
      color: #f6f5f5;
    }

    .input-container input {
      color: #f1eaea;
    }

    .centered-text {
      color: #e9e4e4;
    }

    .input-container {
      display: flex;
      background: rgb(10, 10, 10);
      border-radius: 1rem;
      background: black;
      box-shadow: black;
      padding: 0.3rem;
      gap: 0.3rem;
      max-width: 300px;
      width: 100%;
    }

    .input-container input {
      border-radius: 0.8rem 0 0 0.8rem;
      background: #e8e8e8;
      box-shadow: inset 13px 13px 10px #dcdcdc, inset -13px -13px 10px #f4f4f4;
      width: 100%;
      flex-basis: 75%;
      padding: 1rem;
      border: none;
      border-left: 2px solid #ecf2f8;
      color: #000000;
      transition: all 0.2s ease-in-out;
    }

    .input-container input:focus {
      border-left: 2px solid #ecf1f6;
      outline: none;
      box-shadow: inset 13px 13px 10px #f0f2f3, inset -13px -13px 10px #f4f4f4;
    }

    .input-container button {
      flex-basis: 15%;
      padding: 1rem;
      background: #5935ac;
      font-weight: 700;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: white;
      border: none;
      width: 90%;
      border-radius: 0 1rem 1rem 0;
      transition: all 0.2s ease-in-out;
    }

    .input-container button:hover {
      background: linear-gradient(135deg, #c01736 0%, #8b17b6 100%);
    }

    @media (max-width: 500px) {
      .input-container {
        flex-direction: column;
      }

      .input-container input {
        border-radius: 0.8rem;
      }

      .input-container button {
        padding: 0.4rem;
        border-radius: 0.8rem;
      }
    }

    .centered-text {
      text-align: center;
    }

    @media (max-width: 500px) {
      .box {
        width: 90%; 
      }
    }

    @media (max-width: 500px) {
      .input-container input {
        border-radius: 0.8rem;
        width: 80%; 
      }

      .input-container button {
        padding: 1rem;
        border-radius: 0.9rem;
        width: 100%; 
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="main">
      <div class="box" id="box">
        <div id="text">
          <i class="fa fa-user"></i>
          <p>
            <h3 class="centered-text">CRAZY-MD PAIRING CODE</h3>
            <br>
            <h6>Made By Crazy_Prince👑.</h6>
            <h6>Enter Your Number with Country Code.</h6>
            <div class="input-container">
              <input placeholder="237620114xxx" type="number" id="number" placeholder="Enter your Phone Pumber with Cuntry Code" name="">
              <button id="submit">Submit</button>
            </div>
            
            <a id="waiting-message" class="centered-text" style="display: none;">Please wait a while</a>
            <br>
            <br>
            <main id="pair"></main>
          </p>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js"></script>
  <script>
    let a = document.getElementById("pair");
    let b = document.getElementById("submit");
    let c = document.getElementById("number");
    let box = document.getElementById("box");

    async function Copy() {
      let text = document.getElementById("copy").innerText;
      let obj = document.getElementById("copy");
      await navigator.clipboard.writeText(obj.innerText.replace('CODE: ', ''));
      obj.innerText = "COPIED";
      obj.style = "color:blue;font-weight:bold";
      obj.size = "5";
      setTimeout(() => {
        obj.innerText = text;
        obj.style = "color:white;font-weight-bold";
        obj.size = "5";
      }, 500);
    }

    b.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!c.value) {
        a.innerHTML = '<a style="color:white;font-weight:bold">Enter your WhatsApp number with Country Code</a><br><br>';
      } else if (c.value.replace(/[^0-9]/g, "").length < 11) {
        a.innerHTML = '<a style="color:red;font-weight:bold">Invalid Number</a><br><br>';
      } else {
        const Wasi_Tech = c.value.replace(/[^0-9]/g, "");
        let bb = "";
        let bbc = "";
        const cc = Wasi_Tech.split('');
        cc.map(a => {
          bbc += a;
          if (bbc.length == 3) {
            bb += " " + a;
          } else if (bbc.length == 8) {
            bb += " " + a;
          } else {
            bb += a;
          }
        });
        c.type = "text";
        c.value = "+" + bb;
        c.style = "color:black;font-size:20px";
        a.innerHTML = '<a style="color:white;font-weight:bold">Please Wait...</a><br><br>';
        let { data } = await axios(`/code?number=${Wasi_Tech}`);
        let code = data.code || "Service Unavailable";
        a.innerHTML = '<font id="copy" onclick="Copy()" style="color:red;font-weight:bold" size="5">CODE: <span style="color:white;font-weight:bold">' + code + '</span></font><br><br><br>';
      }
    });
  </script>
</body>
</html>
  `;
  res.send(htmlContent);
});

// Route pour servir helps.html lorsque la route /helps est accédée
app.get('/helps', (req, res) => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<style>
    body {
        font-family: 'Poppins';
        background-color: #000813;
        /* Dark Blue */
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
        overflow: hidden;
        text-align: center;
    }

    h2 {
            color: blue;
            margin-top: 0;
            margin-bottom: 40px;
            white-space: nowrap; /* Prevent line breaks */
            overflow: hidden; /* Hide text that goes beyond the element's boundaries */
            animation: typing 4s infinite;
        }

        @keyframes typing {
            0% {
                width: 0; /* Start with no text visible */
            }
            50% {
                width: 100%; /* Show the entire text */
            }
            100% {
                width: 0; /* Hide the text again */
            }
        }

    p {
        margin-top: 0;
        margin-bottom: 20px;
        line-height: 1.5;
    }

    e, a {
        color: #FFD700;
        /* Gold color for emphasis */
        font-style: italic;
    }

    .floating-box {
        width: 30px;
        height: 30px;
        border: 5px solid blue;
        /* Thick blue border */
        background-color: transparent;
        /* Transparent background */
        position: absolute;
        border-radius: 10px;
        animation: float 5s ease-in-out infinite;
    }

    .top-left {
        top: 10px;
        left: 10px;
    }

    .top-right {
        top: 10px;
        right: 10px;
    }

    .bottom-left {
        bottom: 10px;
        left: 10px;
    }

    .bottom-right {
        bottom: 10px;
        right: 10px;
    }

    @keyframes float {
        0% {
            opacity: 0;
            transform: translate(0, 0) rotate(0deg);
        }

        25% {
            opacity: 1;
            transform: translate(20px, 20px) rotate(180deg);
        }

        75% {
            opacity: 1;
            transform: translate(-20px, -20px) rotate(360deg);
        }

        100% {
            opacity: 0;
            transform: translate(0, 0) rotate(0deg);
        }
    }


     
</style>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Delpoyment</title>
    <link rel="icon" type="image/jpeg" href="https://i.imgur.com/H6ClIod.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
    <h2>CRAZY-MD</h2>
<br>


<p>Now when you add a credit card to <e>Heroku</e>, we
perform a <e>$1 USD</e> temporary pre-
authorization transaction as a credit
security check to ensure your card details
are correct and authorized. These
temporary holds can appear on your
statement for up to 7 days, but no funds
transfer from your card to <e>Heroku</e>.
Previously, <e>the pre-authorization
transactions were a random amount.</e><br>
<b>Notes: Now the deployment of bots is done on the following platforms: <e>GitHub Workflows</e> (commonly used for Wasi MD), <e>Khoyeb</e> (Free but unstable), <e>Render</e> (very slow but better for static applications), <e>Railways</e> (never used but recommended).
<e><a href="wa.me/237620114013" target="wa.me/237620114013">Contact Me</a></e></b></p>

    <div class="floating-box top-left"></div>
    <div class="floating-box top-right"></div>
    <div class="floating-box bottom-left"></div>
    <div class="floating-box bottom-right"></div>

  <div class="video-container">
        <iframe
            width="350"
            height="120"
            src="https://www.youtube.com/embed/YOf6k8JJx4U?autoplay=1&controls=1"
            frameborder="0"
            allowfullscreen
        ></iframe>
    </div>


</body>

</html>
  `;
  res.send(htmlContent);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Démarrage du serveur
const serverInstance = app.listen(port, () => {
  const actualPort = serverInstance.address().port;
  console.log(`Server is running at http://localhost:${actualPort}`);
  
  // Terminer le processus une fois le serveur démarré
  process.exit(0);
});

// Export the app for PM2 clustering
module.exports = app;
