---
title: "Queimada Circuit Records"
---

<div id="p5-sketch" style="position: fixed; top: 0; left: 0; z-index: -1; width: 100vw; height: 100vh;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
<script>
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-sketch');
  noFill();
}

function draw() {
  let time = frameCount * 0.01;

  let fade = 110 + sin(time * 0.3) * 20;
  background(0, fade);

  translate(width / 2, height / 2);

  let mouseDistance = dist(mouseX, mouseY, width / 2, height / 2);
  let influence = map(mouseDistance, 0, width, 5, 0.5);

  let peaks = 5 + sin(time * 0.5) * 4;
  let amplitude = 10 + cos(time * 0.3) * 5;
  let propagation = 0.05 + sin(time * 0.4) * 0.03;
  let rotation = sin(time * 0.6) * 0.5;

  let strokeThickness = 0.2 + sin(time * 0.35) * 0.15;
  let spacing = 5 + cos(time * 0.25) * 2;
  let maxRings = 400 + sin(time * 0.2) * 50;
  let smoothness = 0.04 + cos(time * 0.4) * 0.015;
  let brightness = 255;

  rotate(rotation);

  for (let r = 20; r < maxRings; r += spacing) {
    strokeWeight(strokeThickness);
    stroke(brightness);

    beginShape();
    for (let a = 0; a < TWO_PI + 0.1; a += smoothness) {
      let xoff = cos(a) * r;
      let yoff = sin(a) * r;

      let dx = mouseX - width / 2 - xoff;
      let dy = mouseY - height / 2 - yoff;
      let d = sqrt(dx * dx + dy * dy);
      let distort = map(d, 0, 40, influence * 4, 0);

      let wave = sin(a * peaks + time + r * propagation) * (amplitude + distort);

      let x = xoff + cos(a) * wave;
      let y = yoff + sin(a) * wave;

      vertex(x, y);
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
</script>

<div style="position: relative; z-index: 1; color: white; text-align: center; padding-top: 40vh;">

# Queimada Circuit Records

Sello discográfico experimental. Bilbao.
**Any subgenre is accepted.**

Curator: [@cuerpopensante](https://instagram.com/cuerpopensante)
Instagram: [@queimada.circuit.records](https://instagram.com/queimada.circuit.records)

---

## Navegar

- [[01_CATÁLOGO/index|Catálogo]]
- [[02_ARTISTAS/index|Artistas]]
- [[03_EVENTOS/index|Eventos]]
- [[04_LAB/index|Lab]]
- [[05_BLOG/index|Blog]]

</div>
