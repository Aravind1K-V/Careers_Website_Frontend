const folders = document.querySelectorAll('.folder');

  const closeButton = () => {
    const closeButton = document.createElement('button');
    closeButton.classList.add('folder-delete-button');
    return closeButton;
  }
  const heading = () =>{
    const heading = document.createElement('p');
    heading.classList.add('head');
    heading.innerHTML = "Job Listings"
    return heading;

  }

  const handleOpenFolder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(!e.target.classList.contains('open') && e.target.classList.contains('folder')) {
      const folder = e.target;
      // document.getElementById("lm").style.visibility='visible';
      folder.classList.add('open');
      const cb = closeButton();
      const hd = heading();
      cb.addEventListener('click', (e) => {
        // document.getElementById("lm").style.visibility='visible';
        e.stopPropagation();
        e.preventDefault();
        document.getElementsByClassName('main-head')[0].style.display='block'
        folder.classList.remove('open');
        cb.remove();
      });
      folder.appendChild(cb);
      // folder.appendChild(hd);
    }
  }

  folders.forEach((folder) => {
    folder.addEventListener('click', handleOpenFolder);
  });
  const text = `Apple Inc. is a multinational technology company headquartered in Cupertino, California. It designs, develops, and sells consumer electronics, computer software, and online services. The company is widely known for its flagship products such as the iPhone, Mac, iPad, and Apple Watch. Apple has a strong focus on innovation and user experience, and it has revolutionized several industries with its groundbreaking products and services.`;

const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

let index = 0;

function typeNextChar() {
  if (index >= text.length) {
    return; // Stop typing when all characters are typed
  }

  typingText.textContent += text[index];
  index++;

  setTimeout(typeNextChar, 50); // Adjust the typing speed by changing the delay
}

typeNextChar();