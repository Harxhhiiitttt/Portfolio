const projects = {
    'web-dev': [
        {
            name: 'Personal Portfolio',
            description: 'A responsive portfolio website showcasing my skills and projects.',
            highlights: [
                'Built with HTML, Tailwind CSS, and JavaScript.',
                'Features a graffiti-style landing page with a custom background.',
                'Deployed on GitHub Pages.'
            ],
            link: 'https://yourusername.github.io/portfolio'
        }
    ],
    'machine-learning': [
        {
            name: 'Movie Recommender System',
            description: 'Developed a machine learning-based system to recommend movies based on user preferences.',
            highlights: [
                'Used Python, Pandas, and Scikit-learn for data processing and model training.',
                'Achieved [X]% accuracy in recommendations.',
                'Implemented collaborative filtering techniques.'
            ],
            link: 'https://your-deployed-movie-recommender-link.com'
        },
        {
            name: 'Cricket Score Prediction',
            description: 'Built a predictive model to forecast cricket match scores using historical data.',
            highlights: [
                'Utilized Python and machine learning algorithms like Random Forest.',
                'Analyzed datasets with over [X] matches for accurate predictions.',
                'Presented insights to optimize team strategies.'
            ],
            link: 'https://your-deployed-cricket-score-link.com'
        }
    ],
    'iot': [
        {
            name: 'Smart Parking',
            description: 'Developed an IoT-based smart parking system to detect and manage available parking spots.',
            highlights: [
                'Used Arduino and ultrasonic sensors for real-time vehicle detection.',
                'Displayed parking availability on an LCD screen and web dashboard.',
                'Enhanced urban mobility with efficient space utilization.'
            ],
            link: 'https://your-smart-parking-demo-link.com'
        }
    ],
    'business-analysis': [
        {
            name: 'Sales Dashboard',
            description: 'Created an interactive dashboard to analyze sales performance for a retail company.',
            highlights: [
                'Used Power BI for data visualization and insights.',
                'Identified key trends to improve sales strategies.',
                'Collaborated with stakeholders to refine requirements.'
            ],
            link: 'https://your-deployed-sales-dashboard-link.com'
        }
    ]
};

// Project Menu Functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const projectList = document.getElementById('project-list');
const projectDetails = document.getElementById('project-details');
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const projectHighlights = document.getElementById('project-highlights');
const projectLink = document.getElementById('project-link');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        projectDetails.classList.add('hidden');
        projectList.innerHTML = '';
        projects[category].forEach(project => {
            const projectItem = document.createElement('button');
            projectItem.className = 'bg-gray-900 text-gray-300 p-4 rounded hover:bg-gray-800 text-left';
            projectItem.textContent = project.name;
            projectItem.addEventListener('click', () => {
                projectTitle.textContent = project.name;
                projectDescription.textContent = project.description;
                projectHighlights.innerHTML = '';
                project.highlights.forEach(highlight => {
                    const li = document.createElement('li');
                    li.textContent = highlight;
                    projectHighlights.appendChild(li);
                });
                projectLink.href = project.link;
                projectDetails.classList.remove('hidden');
            });
            projectList.appendChild(projectItem);
        });
    });
});

// Initialize with first category
categoryButtons[0].click();

// Image Sequence Animation
const canvas = document.querySelector('#image-sequence-canvas');
const context = canvas.getContext('2d');

if (!canvas || !context) {
    console.error('Canvas or context not found');
} else {
    console.log('Canvas and context initialized');
}

function resizeCanvas() {
    try {
        if (canvas && canvas.parentElement) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            console.log(`Canvas resized: ${canvas.width}x${canvas.height}`);
            render();
        } else {
            console.error('Canvas or parent element not found during resize');
        }
    } catch (error) {
        console.error('Resize canvas failed:', error);
    }
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function files(index) {
    const data = `
        ./male0001.png
        ./male0002.png
        ./male0003.png
        ./male0004.png
        ./male0005.png
        ./male0006.png
        ./male0007.png
        ./male0008.png
        ./male0009.png
        ./male0010.png
        ./male0011.png
        ./male0012.png
        ./male0013.png
        ./male0014.png
        ./male0015.png
        ./male0016.png
        ./male0017.png
        ./male0018.png
        ./male0019.png
        ./male0020.png
        ./male0021.png
        ./male0022.png
        ./male0023.png
        ./male0024.png
        ./male0025.png
        ./male0026.png
        ./male0027.png
        ./male0028.png
        ./male0029.png
        ./male0030.png
        ./male0031.png
        ./male0032.png
        ./male0033.png
        ./male0034.png
        ./male0035.png
        ./male0036.png
        ./male0037.png
        ./male0038.png
        ./male0039.png
        ./male0040.png
        ./male0041.png
        ./male0042.png
        ./male0043.png
        ./male0044.png
        ./male0045.png
        ./male0046.png
        ./male0047.png
        ./male0048.png
        ./male0049.png
        ./male0050.png
        ./male0051.png
        ./male0052.png
        ./male0053.png
        ./male0054.png
        ./male0055.png
        ./male0056.png
        ./male0057.png
        ./male0058.png
        ./male0059.png
        ./male0060.png
        ./male0061.png
        ./male0062.png
        ./male0063.png
        ./male0064.png
        ./male0065.png
        ./male0066.png
        ./male0067.png
        ./male0068.png
        ./male0069.png
        ./male0070.png
        ./male0071.png
        ./male0072.png
        ./male0073.png
        ./male0074.png
        ./male0075.png
        ./male0076.png
        ./male0077.png
        ./male0078.png
        ./male0079.png
        ./male0080.png
        ./male0081.png
        ./male0082.png
        ./male0083.png
        ./male0084.png
        ./male0085.png
        ./male0086.png
        ./male0087.png
        ./male0088.png
        ./male0089.png
        ./male0090.png
        ./male0091.png
        ./male0092.png
        ./male0093.png
        ./male0094.png
        ./male0095.png
        ./male0096.png
        ./male0097.png
        ./male0098.png
        ./male0099.png
        ./male0100.png
        ./male0101.png
        ./male0102.png
        ./male0103.png
        ./male0104.png
        ./male0105.png
        ./male0106.png
        ./male0107.png
        ./male0108.png
        ./male0109.png
        ./male0110.png
        ./male0111.png
        ./male0112.png
        ./male0113.png
        ./male0114.png
        ./male0115.png
        ./male0116.png
        ./male0117.png
        ./male0118.png
        ./male0119.png
        ./male0120.png
        ./male0121.png
        ./male0122.png
        ./male0123.png
        ./male0124.png
        ./male0125.png
        ./male0126.png
        ./male0127.png
        ./male0128.png
        ./male0129.png
        ./male0130.png
        ./male0131.png
        ./male0132.png
        ./male0133.png
        ./male0134.png
        ./male0135.png
        ./male0136.png
        ./male0137.png
        ./male0138.png
        ./male0139.png
        
        
    `;
    return data.split('\n').map(line => line.trim())[index];
}

const frameCount = 140;
const images = [];
const imageSeq = { frame: 0 }; // Start at frame 0

try {
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        img.onload = () => {
            console.log(`Loaded: ${files(i)}`);
            if (i === 0) render(); // Render first frame immediately
        };
        img.onerror = () => console.error(`Failed to load: ${files(i)}`);
        images.push(img);
    }
    console.log('Image loading initiated');
} catch (error) {
    console.error('Image loading setup failed:', error);
}

function render() {
    try {
        if (!context || !images[imageSeq.frame]) {
            console.error(`Render failed: Context or image ${imageSeq.frame} not available`);
            return;
        }
        scaleImage(images[imageSeq.frame], context);
        console.log(`Rendered frame: ${imageSeq.frame}`);
    } catch (error) {
        console.error('Render failed:', error);
    }
}

function scaleImage(img, ctx) {
    try {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
        console.log('Image scaled and drawn');
    } catch (error) {
        console.error('Scale image failed:', error);
    }
}

// ScrollTrigger Setup
try {
    gsap.registerPlugin(ScrollTrigger);

    // Add smooth scrolling to body
    document.body.style.scrollBehavior = 'smooth';

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
            trigger: '#projects',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            scroller: window, // Use native scroll
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                console.log(`Scroll progress: ${self.progress.toFixed(3)}, Frame: ${imageSeq.frame}`);
                render();
            },
            onRefresh: () => console.log('ScrollTrigger refreshed'),
        },
    });
    console.log('ScrollTrigger initialized');
} catch (error) {
    console.error('ScrollTrigger setup failed:', error);
}

// Initial render
resizeCanvas();

// Manual frame update for testing (comment out after testing)
// setTimeout(() => {
//     console.log('Starting manual frame test');
//     let testFrame = 0;
//     const interval = setInterval(() => {
//         if (testFrame >= frameCount) {
//             clearInterval(interval);
//             console.log('Manual frame test complete');
//             return;
//         }
//         imageSeq.frame = testFrame;
//         render();
//         console.log('Manual frame:', imageSeq.frame);
//         testFrame++;
//     }, 100);
// }, 2000);