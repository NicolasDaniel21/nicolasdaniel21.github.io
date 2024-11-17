const iconCircle = document.getElementById('icon-circle');
const tooltip = document.getElementById('tooltip');

iconCircle.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Ajuste a posição do tooltip
  tooltip.style.left = mouseX + 10 + 'px';  // 10px para afastar um pouco do cursor
  tooltip.style.top = mouseY + 10 + 'px';   // 10px para afastar um pouco do cursor
});

iconCircle.addEventListener('mouseenter', () => {
  tooltip.style.visibility = 'visible';  // Torna o tooltip visível
  tooltip.style.opacity = '1';           // Torna o tooltip opaco
});

iconCircle.addEventListener('mouseleave', () => {
  tooltip.style.visibility = 'hidden';  // Torna o tooltip invisível
  tooltip.style.opacity = '0';          // Torna o tooltip transparente
});
