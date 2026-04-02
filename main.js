const agenda = [
    {
        id: 1,
        nombre: "Ana López",
        telefono: "600123123",
        email: "ana@mail.com",
        empresa: "TechSoft"
    },
    {
        id: 2,
        nombre: "Carlos Ruiz",
        telefono: "611222333",
        email: "carlos.ruiz@mail.com",
        empresa: "InnovaTech"
    },
    {
        id: 3,
        nombre: "Marta Fernández",
        telefono: "622333444",
        email: "marta.fernandez@mail.com",
        empresa: "Diseño Global"
    },
    {
        id: 4,
        nombre: "Javier Martínez",
        telefono: "633444555",
        email: "javier.mtz@mail.com",
        empresa: "Consultora Nexus"
    },
    {
        id: 5,
        nombre: "Lucía Gómez",
        telefono: "644555666",
        email: "lucia.gomez@mail.com",
        empresa: "StartupFlow"
    }
];
function printArray() {
    const tbody = document.getElementById('tablaContactos');
    tbody.innerHTML = '';
    
    for (let i = 0; i < agenda.length; i++) {
        const contacto = agenda[i];
        const fila = `
            <tr>
                <td>${contacto.nombre}</td>
                <td>${contacto.telefono}</td>
                <td>${contacto.email}</td>
                <td>${contacto.empresa}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarContacto(${contacto.id})">
                        Eliminar
                    </button>
                    <button class="btn btn-warning btn-sm" onclick="modificarContacto(${contacto.id})">
                        Modificar
                    </button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    }
}
function agregarContacto(){
    const contacto = {
        id: agenda.length + 1,
        nombre: getElementById('nombre').value,
        telefono: getElementById('telefono').value,
        email: getElementById('email').value,
        empresa: getElementById('empresa').value
    };
    agenda.push(contacto);
    printArray();
    return contacto;
}

printArray();
