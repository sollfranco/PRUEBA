// script.js

// Función para generar el PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(16);
    doc.text("Reporte de Roles y Horarios", 10, 10);
    doc.setFontSize(12);
    doc.text(" ", 10, 20); // Espacio para el subtítulo

    // Obtener la tabla
    const table = document.getElementById("reportTable");
    let rowData = [];
    
    // Obtener encabezados de la tabla
    const headers = [];
    for (const header of table.querySelectorAll("thead th")) {
        headers.push(header.innerText);
    }
    rowData.push(headers);

    // Obtener las filas de la tabla
    for (const row of table.querySelectorAll("tbody tr")) {
        const rowCells = [];
        for (const cell of row.querySelectorAll("td")) {
            rowCells.push(cell.innerText);
        }
        rowData.push(rowCells);
    }

    // Añadir la tabla al PDF
    doc.autoTable({
        head: [headers],
        body: rowData.slice(1),
        startY: 30,
    });

    // Guardar el PDF
    doc.save("Reporte.pdf");
}
