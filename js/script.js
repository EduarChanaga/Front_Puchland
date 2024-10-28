function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.user-button') && !event.target.matches('.profile-pic')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}