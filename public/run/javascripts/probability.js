document$.subscribe(async () => {
  const directory = document.getElementById('probability-directory');
  if (!directory || !location.hash) return;
  const original = location.href;
  try {
    const response = await fetch(new URL(directory.dataset.anchors, original));
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const anchors = await response.json();
    const target = anchors[decodeURIComponent(location.hash.slice(1))];
    if (target && location.href === original) {
      const destination = new URL(target, original);
      destination.search = location.search;
      destination.hash = location.hash;
      location.replace(destination.href);
    }
  } catch (error) {
    console.error('Probability bookmark navigation failed', error);
  }
});
