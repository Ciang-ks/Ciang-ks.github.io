window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    // 标准全页扫描：目录（TOC）里的公式也能渲染。
    // MathJax 默认跳过 script/style/textarea/pre/code，正文代码块不受影响。
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
  },
};

document$.subscribe(() => {
  if (!window.MathJax?.typesetPromise) return;

  window.MathJax.startup.output.clearCache();
  window.MathJax.typesetClear();
  window.MathJax.texReset();
  window.MathJax.typesetPromise();
});
