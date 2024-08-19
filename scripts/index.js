function exportAsPDF() {
  const data = document.getElementById('cvWrapper');
  if (!data) {
    return;
  }

  html2canvas(data, {
    scale: 2,
    useCORS: true,
    backgroundColor: 'white',
    imageTimeout: 2000,
  }).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jspdf.jsPDF('portrait', 'cm', 'a4', true); // Generates PDF in landscape mode
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 21.0, 29.7);
    pdf.save(`Azad Kavian's CV.pdf`);
  });
}
