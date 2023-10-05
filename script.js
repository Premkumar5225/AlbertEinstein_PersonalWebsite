document.addEventListener('DOMContentLoaded', function() {
    const papersList = document.querySelectorAll('.paper');

    papersList.forEach(paper => {
        const paperImage = paper.querySelector('.paper-image img');
        const paperName = paper.querySelector('.paper-info h3 a');

        paperImage.addEventListener('click', function() {
            const paperLink = paperName.getAttribute('href');
            window.open(paperLink, '_blank');
        });

        paperName.addEventListener('click', function(event) {
            event.preventDefault();
            const paperLink = paperName.getAttribute('href');
            window.open(paperLink, '_blank');
        });
    });
});
