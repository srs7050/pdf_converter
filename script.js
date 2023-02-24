$('#exportForm').click(function(){
  var pdf = new jsPDF('a', 'mm', 'a4');
  var firstPage;
  var secondPage;
  var thirdPage;
  
  html2canvas($('#first-page'), {
    onrendered: function(canvas) {
      firstPage = canvas.toDataURL('image/jpeg', 1.0);
    }
  });
  
  html2canvas($('#second-page'), {
    onrendered: function(canvas) {
      secondPage = canvas.toDataURL('image/jpeg', 1.0);
    }
  });

  html2canvas($('#third-page'), {
    onrendered: function(canvas) {
      thirdPage = canvas.toDataURL('image/jpeg', 1.0);
    }
  });
  
  
  setTimeout(function(){
    pdf.addImage(firstPage, 'JPEG', 5, 5, 200, 0);
    pdf.addPage();
    pdf.addImage(secondPage, 'JPEG', 5, 5, 200, 0);
    pdf.save("export.pdf");
    pdf.addImage(thirdPage, 'JPEG', 5, 5, 200, 0);
    pdf.addPage();
  }, 150);
});