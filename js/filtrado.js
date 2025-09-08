document.addEventListener('DOMContentLoaded', function () {
    function filtrarMuebles(tag) {
        document.querySelectorAll('.row .col[data-tag]').forEach(col => {
            if (tag === 'todos' || col.getAttribute('data-tag') === tag) {
                col.style.display = '';
            } else {
                col.style.display = 'none';
            }
        });
    }

    document.getElementById('filter-living')?.addEventListener('click', function(e) {
        e.preventDefault();
        filtrarMuebles('living');
    });
    document.getElementById('filter-oficina')?.addEventListener('click', function(e) {
        e.preventDefault();
        filtrarMuebles('oficina');
    });
    document.getElementById('filter-bano')?.addEventListener('click', function(e) {
        e.preventDefault();
        filtrarMuebles('baño');
    });
    document.getElementById('filter-todos')?.addEventListener('click', function(e) {
        e.preventDefault();
        filtrarMuebles('todos');
    });
});