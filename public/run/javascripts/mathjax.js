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
    ignoreHtmlClass: 'tex2jax_ignore|MathJax',
    processHtmlClass: 'tex2jax_process',
  },
};

let mathjaxTypesetting = Promise.resolve();
let mathjaxContent = document.querySelector('.md-content__inner');

document$.subscribe(() => {
  const mathjax = window.MathJax;
  if (!mathjax?.startup?.promise) return;
  const content = document.querySelector('.md-content__inner');
  if (content === mathjaxContent) return;
  mathjaxContent = content;

  mathjaxTypesetting = mathjaxTypesetting
    .then(() => mathjax.startup.promise)
    .then(() => {
      mathjax.typesetClear();
      mathjax.texReset();
      return mathjax.typesetPromise();
    })
    .catch(error => console.error('MathJax typesetting failed', error));
});
