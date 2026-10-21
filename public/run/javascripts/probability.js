document$.subscribe(async () => {
  const directory = document.getElementById('chapter-directory');
  if (!directory) return;
  const original = location.href;
  try {
    let target = directory.dataset.target;
    if (!target && location.hash && directory.dataset.anchors) {
      const response = await fetch(new URL(directory.dataset.anchors, original));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const anchors = await response.json();
      target = anchors[decodeURIComponent(location.hash.slice(1))];
    }
    if (target && location.href === original) {
      const destination = new URL(target, original);
      destination.search = location.search;
      destination.hash = location.hash;
      location.replace(destination.href);
    }
  } catch (error) {
    console.error('Chapter bookmark navigation failed', error);
  }
});
