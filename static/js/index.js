[... document.querySelectorAll('.project-cell .cover')].forEach(

    projectCellCover => {
        projectCellCover.onclick = 
        () => {
            // document.getElementById(projectCellCover.dataset.target).classList.toggle('show')

            toggleClass(document.getElementById(projectCellCover.dataset.target), 'show')
        }
    }

)

function toggleClass($el, className ){
    $el.classList.toggle(className)
}

console.log('Console')