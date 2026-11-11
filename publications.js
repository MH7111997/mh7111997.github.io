document.querySelectorAll('[data-summary-toggle]').forEach((button) => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  if (!panel) return;

  // Leave the text readable when JavaScript is unavailable.
  panel.hidden = true;
  button.hidden = false;

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    panel.hidden = expanded;
    button.setAttribute('aria-expanded', String(!expanded));
    button.title = expanded ? 'Read summary' : 'Hide summary';
  });
});

// Kramdown protects inline math during Markdown rendering and emits \(...\).
if (typeof window.renderMathInElement === 'function') {
  document.querySelectorAll('.publication-summary').forEach((panel) => {
    window.renderMathInElement(panel, { throwOnError: false });
  });
}
