import '../css/index.css';

import '../image/github-logo.png';
import '../image/test.png';
import '../image/liverider.png';
import '../image/balsamiq.png';

window.addEventListener('load', () => {
    document.getElementById('content').style.display = 'block';

    let projects = Array.from(document.getElementsByClassName('project'));

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add('project-appear');
        }, 1000 + index * 100);
    });
});
