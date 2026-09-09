window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: '.*|',
    processHtmlClass: 'arithmatex',
  },
};

document$.subscribe(() => {
  if (!window.MathJax?.typesetPromise) return;

  window.MathJax.startup.output.clearCache();
  window.MathJax.typesetClear();
  window.MathJax.texReset();
  window.MathJax.typesetPromise();
});
