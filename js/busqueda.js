document.addEventListener('DOMContentLoaded', function () {
    const formBusqueda = document.getElementById('form-busqueda');
    const inputBusqueda = document.getElementById('busqueda-muebles');

    if (formBusqueda && inputBusqueda) {
        formBusqueda.addEventListener('submit', function(e) {
            e.preventDefault();
            const termino = inputBusqueda.value.trim().toLowerCase();
            document.querySelectorAll('.row .col[data-tag]').forEach(col => {
                const titulo = col.querySelector('.card-title')?.textContent.toLowerCase() || '';
                if (titulo.includes(termino) || termino === '') {
                    col.style.display = '';
                } else {
                    col.style.display = 'none';
                }
            });
        });
    }
});