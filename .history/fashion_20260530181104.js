
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let slides = document.querySelectorAll(".theme, .theme2");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "flex";
}

setInterval(() => {
    changeSlide(1);
}, 2000);


const cards = document.querySelectorAll('.card')
let cardShown = false;

function showcardsOnScroll() {
    let triggerPoint = window.innerHeight * 0.7;
    let container = document.querySelector('.cards-container');
    let containerTop = container.getBoundingClientRect().top;
    if (containerTop < triggerPoint && !cardShown) {
        cardShown = true;
        showcards();
    }
}

function showcards() {
    //1st card centre
    cards[0].style.transform = "translateX(0)";
    cards[0].style.opacity = 1

    setTimeout(() => {
        cards[1].style.opacity = 1;
        cards[2].style.opacity = 1;
    }, 800);

    setTimeout(() => {
        cards[3].style.opacity = 1;
        cards[4].style.opacity = 1;
    }, 1600);
}

window.addEventListener('scroll', showcardsOnScroll)


const buttons = document.querySelectorAll('.gallery1')
const contentBox = document.getElementById('contentBox')

function createImageGrid(imageArray) {
    return imageArray.map(src => {
        return `<img src="${src}" alt="">`
    }).join("");
}


function loadHomeImages() {
    contentBox.classList.add("home-grid")
    contentBox.innerHTML = createImageGrid([
        "naya/IMG_20260316_1055011.jpg",
        "naya/IMG_20260316_085445.jpg",
        "naya/IMG_20260315_231658.jpg",
        "naya/IMG_20260314_221026.jpg",
        "naya/IMG_20260316_1134381.png",
        "naya/IMG_20260316_113616.png",
        "naya/IMG_20260316_115712.png",
        "naya/IMG_5443.PNG",
        "naya/IMG_20260316_1004416.jpg"
    ])
}

function createSkillItem(img, text) {
    return `
    <div class="skill-item">
            <img src="${img}" class="skill-img" />
            <p class="skill-text">${text}</p>
        </div>
    `
}

window.addEventListener("DOMContentLoaded", () => {
    loadHomeImages();
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let type = btn.getAttribute('data-type')


        if (type === 'home') {
            loadHomeImages();
        }

        if (type === 'contant') {
            window.open("https://t.me/techknowledgeaditya")
        }

        if (type === 'skill') {
            contentBox.classList.remove("home-grid");

            contentBox.innerHTML = `
            <h2 class = "skill-heading">
            Creative Illustrations That Reflect Your Artistic Vision Perfectly </h2>
            
            <div style = "margin-top:67px; display:flex; flex-direction:column; gap:35px; width:133vh;">
            
            ${createSkillItem("img/IMG_20250509_095013.jpg", "Dynamic anime boy illustrations designed with sharp lines, expressive poses and detailed shading. Har character me attitude, confidence aur stylish fashion sense dikhaya jata hai. Clean proportions aur smooth highlights use karke overall look ko bold, attractive aur visually appealing banaya jata hai.")}
            ${createSkillItem("img/IMG_20250517_182100.jpg", "Elegant anime girl artwork featuring soft lines, balanced proportions and graceful expressions. Har design me delicate detailing, smooth shading aur stylish outfits ka perfect combination hota hai. Illustrations ko is tarah create kiya jata hai ki wo fashion concepts ko visually beautiful aur eye-catching banaye.")}
            ${createSkillItem("img/chatgpt-1757149497129.jpg", "Realistic girl sketches created with natural proportions, clean outlines and expressive detailing. Har portrait me skin texture, facial features aur hair flow ko carefully highlight kiya jata hai. Yeh drawings fashion looks ko real-world feel deti hain aur overall presentation ko professional banati hain.")}
            ${createSkillItem("img/IMG-20251106-WA0007.jpg", "Delicate pencil strokes se bani ye portrait simplicity aur depth ka perfect blend dikhati hai, jahan emotions, posture aur detailing milkar ek graceful artistic expression create karte hain.")}
            ${createSkillItem("img/ChatGPT Image Nov 21, 2025, 01_55_10 PM.png", "Soft pastel tones aur elegant silhouette milkar ek calm, graceful style create karte hain jo har look ko subtle sophistication deta hai.")}</div>`;
        }
        
        let filterOn = false;

        if (type === "filter") {
            filterOn = !filterOn;   // toggle ON/OFF
            console.log(filterOn)

            if (filterOn) {
                contentBox.classList.add("bw-filter");
            } if(!filterOn) {
                contentBox.classList.remove("bw-filter");
            }
            
            return;
        }




        if (type === 'dress') {
            contentBox.classList.remove("home-grid");
            contentBox.innerHTML = createImageGrid([
                "dress/dress3.png (1).jpg",
                "dress/dress4.png.jpg",
                "dress/red.png",
                "dress/IMG_20251110_142439.jpg",
                "dress/dress4.png (1) (1).jpg",
                "dress/dress111png.jpg",
                "dress/download (1).jpeg",
                "dress/IMG_20251118_213315.jpg",
                "dress/IMG_20251118_213332.jpg",
                "dress/IMG_20251118_213409.jpg",
                "dress/dress2.png.jpg",
                "dress/dress1.png (1).jpg",
                "dress/dress1.png (2).jpg",
                "dress/dress2.png (1).jpg",
                "dress/dress101png.jpg",
                "dress/dress211png.jpg",
                "dress/dress17 (1).png",
                "dress/dress18.png",
                "dress/dress19 (2).png",
                "dress/dress20.png",


            ]).replaceAll('<img ', '<img class="dress-img" ');
        }

        else if (type === 'casual') {
            contentBox.classList.remove("home-grid");
            contentBox.innerHTML = `
                <div class = "carosil" >
                    ${createImageGrid([
                        
                "naya/IMG_20260316_215124.jpg",
                "naya/file_00000000341c71fa8479094dadaed936.png",
                "naya/IMG_20260316_215145.jpg",
                "naya/IMG_20260315_223639.png.jpg",
                "naya/IMG_20260316_215225.jpg",
                "naya/IMG_20260316_122918.png",
                "naya/IMG_20260316_215253.png",
                
                ,

            ])}
                    ${createImageGrid([

                "naya/IMG_20260316_215124.jpg",
                "naya/file_00000000341c71fa8479094dadaed936.png",
                "naya/IMG_20260316_215145.jpg",
                "naya/IMG_20260315_223639.png.jpg",
                "naya/IMG_20260316_215225.jpg",
                "naya/IMG_20260316_122918.png",
                "naya/IMG_20260316_215253.png",
                

               
            ])}
                </div>
            `;
        }

    })
});





