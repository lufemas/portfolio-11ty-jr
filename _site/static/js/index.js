[... document.querySelectorAll('.project-cell .cover')].forEach(

    projectCellCover => {
        projectCellCover.onclick = 
        () => {
            document.getElementById(projectCellCover.dataset.target).classList.toggle('show')
        }
    }

)

console.log('Console')