---
Estatus: A medias
Tema: producción musical, proceso creativo, herramientas, IA
---

---

<style>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300;400;600&family=Syne:wght@400;600;800&family=Courier+Prime:wght@400;700&display=swap');

.metodo-article {
  font-family: 'Syne', sans-serif;
  max-width: 900px;
  margin: 0 auto;
}

.apertura-potente {
  background: rgba(255,0,255,0.08);
  border: 3px solid #ff00ff;
  padding: 3rem;
  margin: 3rem 0;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 600;
  box-shadow: 8px 8px 0 rgba(255,0,255,0.2);
  transform: rotate(-0.3deg);
}

.definicion-box {
  background: rgba(0,255,255,0.05);
  border-left: 4px solid #00ffff;
  padding: 2rem;
  margin: 3rem 0;
}

.definicion-box h3 {
  font-family: 'Azeret Mono', monospace;
  color: #00ffff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0;
}

.definicion-lista {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.definicion-lista li {
  padding-left: 2rem;
  margin-bottom: 1rem;
  position: relative;
  font-size: 1.05rem;
}

.definicion-lista li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #00ffff;
  font-weight: bold;
}

.juegos-section {
  margin: 4rem 0;
}

.juegos-section h2 {
  font-family: 'Azeret Mono', monospace;
  color: #ffff00;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  border-bottom: 3px solid #ffff00;
  padding-bottom: 0.5rem;
}

.juegos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.juego-card {
  background: rgba(0,0,0,0.3);
  border: 2px solid;
  padding: 1.5rem;
  transition: transform 0.2s;
  position: relative;
}

.juego-card:nth-child(1),
.juego-card:nth-child(2),
.juego-card:nth-child(3) {
  border-color: #00ff00;
}

.juego-card:nth-child(4),
.juego-card:nth-child(5),
.juego-card:nth-child(6) {
  border-color: #00ffff;
}

.juego-card:nth-child(7),
.juego-card:nth-child(8),
.juego-card:nth-child(9) {
  border-color: #ff00ff;
}

.juego-card:nth-child(10) {
  border-color: #ffff00;
}

.juego-numero {
  font-family: 'Courier Prime', monospace;
  font-size: 2.5rem;
  font-weight: bold;
  color: rgba(255,255,255,0.08);
  position: absolute;
  top: 5px;
  right: 10px;
  line-height: 1;
}

.juego-card h4 {
  font-family: 'Azeret Mono', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.juego-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #ccc;
}

.gordon-quote {
  background: rgba(255,0,0,0.08);
  border-top: 3px solid #ff0000;
  border-bottom: 3px solid #ff0000;
  padding: 2.5rem;
  margin: 4rem 0;
  font-family: 'Courier Prime', monospace;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.8;
}

.gordon-quote::before {
  content: "// Mick Gordon";
  display: block;
  font-family: 'Azeret Mono', monospace;
  font-size: 0.75rem;
  color: #ff0000;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.herramientas-section {
  background: rgba(0,255,0,0.05);
  border: 2px dashed #00ff00;
  padding: 2.5rem;
  margin: 4rem 0;
}

.herramientas-section h2 {
  font-family: 'Azeret Mono', monospace;
  color: #00ff00;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.ia-section {
  background: rgba(255,255,0,0.08);
  border-left: 5px solid #ffff00;
  padding: 2rem;
  margin: 3rem 0;
}

.ia-section h3 {
  font-family: 'Azeret Mono', monospace;
  color: #ffff00;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.colaboracion-box {
  background: rgba(255,0,255,0.05);
  border: 3px solid #ff00ff;
  padding: 2.5rem;
  margin: 4rem 0;
  box-shadow: -6px -6px 0 rgba(255,0,255,0.2);
  transform: rotate(0.2deg);
}

.colaboracion-box h2 {
  font-family: 'Azeret Mono', monospace;
  color: #ff00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.ejemplos-simples {
  background: rgba(0,255,255,0.05);
  border-top: 3px solid #00ffff;
  border-bottom: 3px solid #00ffff;
  padding: 2rem;
  margin: 3rem 0;
}

.ejemplos-simples h3 {
  font-family: 'Azeret Mono', monospace;
  color: #00ffff;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.ejemplo-simple {
  background: rgba(0,0,0,0.2);
  border-left: 3px solid #00ffff;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  font-size: 0.95rem;
}

.cierre-link {
  margin: 4rem 0;
  padding: 2rem;
  border: 2px solid #00ff00;
  text-align: center;
  background: rgba(0,255,0,0.03);
}

.cierre-link a {
  font-family: 'Azeret Mono', monospace;
  color: #00ff00;
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: 2px solid #00ff00;
  padding-bottom: 0.2rem;
}

.cierre-link a:hover {
  background: rgba(0,255,0,0.1);
}

@media (max-width: 768px) {
  .juegos-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="metodo-article">

<div class="apertura-potente">

No hay un método para todas las canciones.

Hay un método para cada canción.

</div>

---

<div class="definicion-box">

### ¿Qué es producir música?

<ul class="definicion-lista">
<li>Llevar ideas musicales que uno tiene a la vida</li>
<li>Generar nuevas ideas por las ganas de hacer música</li>
<li>Componer (suena más exacto, pero también más formal)</li>
</ul>

</div>

En realidad, **producir música es buscar maneras en las que el sonido se convierta en una dinámica, en un juego en el que represente algún tipo de idea**.

No hace falta saber teoría. No hace falta tener un estudio. No hace falta esperar a estar listo.

---

<div class="juegos-section">

## Juegos para empezar

<div class="juegos-grid">

<div class="juego-card">
<span class="juego-numero">01</span>
<h4>IMAGEN → TEXTURA</h4>
<p>Coger una imagen y jugar con sus curvas, sus colores. Una que pueda funcionar de textura. Convertirla en un visual para acompañar un tema.</p>
</div>

<div class="juego-card">
<span class="juego-numero">02</span>
<h4>LUGAR IMAGINADO → IA → RUNWAY</h4>
<p>Pedir a alguien que imagine un sitio. Representarlo con cualquier IA generativa. Luego animar ese espacio con Runway o similar.</p>
</div>

<div class="juego-card">
<span class="juego-numero">03</span>
<h4>CUALQUIER COSA → MIDI</h4>
<p>Pasar el ruido del autobús, tu voz, un ritmo que hagas con la boca a MIDI con Ableton. El motor es un drone. Las frenadas son percusión.</p>
</div>

<div class="juego-card">
<span class="juego-numero">04</span>
<h4>INTERCAMBIAR ROLES</h4>
<p>Pasar las baterías a melodías o viceversa. El bajo se convierte en hi-hat. Los acordes se convierten en kick. Intercambiar midis.</p>
</div>

<div class="juego-card">
<span class="juego-numero">05</span>
<h4>SEGUIR UN TUTORIAL Y TIRAR</h4>
<p>Busca un tutorial de TouchDesigner, Max/MSP, Processing, lo que sea. Sigue los tres primeros pasos. Luego rompe todo y haz lo contrario.</p>
</div>

<div class="juego-card">
<span class="juego-numero">06</span>
<h4>COPIAR ESTRUCTURA</h4>
<p>Coger una canción que te guste. Copiar su estructura, escala y acordes principales. Modificar el resto: timbres, ritmo, atmósfera.</p>
</div>

<div class="juego-card">
<span class="juego-numero">07</span>
<h4>CANCIÓN SOLO CON ECOS</h4>
<p>Hacer una canción solo con ecos de la misma canción. Un delay larguísimo. Reverb sin fin. Resampling infinito.</p>
</div>

<div class="juego-card">
<span class="juego-numero">08</span>
<h4>RUIDOS IRRECONOCIBLES</h4>
<p>Hacer una canción solo con ruidos irreconocibles. Samples destruidos. Field recordings hasta que no sepas qué eran.</p>
</div>

<div class="juego-card">
<span class="juego-numero">09</span>
<h4>METER PLUGINS HASTA QUE PETE</h4>
<p>Carga todos los plugins posibles en una pista hasta que crashee el DAW. El overload es parte del proceso.</p>
</div>

<div class="juego-card">
<span class="juego-numero">10</span>
<h4>DOS NOTAS Y NADA MÁS</h4>
<p>Pintar dos notas donde sea. Construir todo a partir de ahí. Sin más. La limitación como motor.</p>
</div>

</div>

</div>

---

<div class="gordon-quote">

El método hace la canción.

Cambiando el método, cambiamos el resultado.

</div>

Mick Gordon, el que hizo la música de DOOM, lo decía claro: **no hay un método para todas las canciones**.

No aplicaba su fórmula habitual a cada proyecto. Cambiaba completamente la forma de trabajar según lo que necesitaba el juego. No buscaba "el sonido correcto", sino **una estructura que le obligara a pensar distinto**.

Si siempre trabajas de la misma forma, siempre acabas en el mismo sitio.

---

<div class="herramientas-section">

## Combinar herramientas para objetivos concretos

La cosa es **combinar las herramientas para un objetivo determinado**.

En el software, en su mayor parte, la gente ya ha desarrollado las herramientas que tú tienes en tu mente. Entonces tienes que buscar ese software.

**La idea es usar todas las herramientas disponibles de la mejor manera para representar tu idea.**

No la idea de otros.  
No la idea de una inteligencia artificial.  
**Tu idea.**

</div>

---

<div class="ia-section">

### IA como potenciador, no como sustituto

De esta manera, la inteligencia artificial se puede integrar como un uso que **potencia la capacidad del artista**.

La música automática es interesante cuando se hace con modulares (porque hay decisión humana en cómo se conectan los cables, qué módulos controlan a qué).

Pero no cuando se hace de manera totalmente automática.

**La IA es una herramienta más. No un atajo para no pensar.**

</div>

---

<div class="colaboracion-box">

## La música también tiene que ser colaborativa

Es un proyecto en el que uno se apoya en los trabajos de los demás.

**Potenciar y dejar abierta la mente musical** para que uno no se encasille, sino que se apoye mutuamente con la gente que quiere hacer cosas.

Al final, **a todo el mundo le interesa expresarse artísticamente** y es una cosa que hay que explotar, que hay que mimar poco a poco, y empezar desde lo más sencillo hasta lo más difícil.

No se trata de competir.  
Se trata de construir juntos.

</div>

---

<div class="ejemplos-simples">

### Empezar desde lo más sencillo

<div class="ejemplo-simple">
Usar **Koala Sampler** para grabar distintos sonidos de tu día e intentar hacer un beat.
</div>

<div class="ejemplo-simple">
Grabar distintos sonidos **sin mezclarlos** para ver cómo quedan, tal cual.
</div>

<div class="ejemplo-simple">
Enchufar una **vieja radio** a un pedal de delay que te cuesta 30€ por AliExpress.
</div>

<div class="ejemplo-simple">
Probar a tocar **cualquier instrumento** aunque no sepas. El primer día no suena bien. El décimo día suena distinto.
</div>

<div class="ejemplo-simple">
Usar tu cuerpo como instrumento con **micros de contacto**.
</div>

<div class="ejemplo-simple">
Samplearte tocando con la boca ritmos y **pasarlos a batería**.
</div>

</div>

No hace falta equipo caro.  
No hace falta saber teoría.  
No hace falta un estudio.

**Hace falta ganas de jugar.**

---

<div class="cierre-link">

<p style="margin-bottom: 1rem; color: #999;">Si quieres empezar gratis, aquí:</p>

<a href="https://www.bandlab.com" target="_blank" rel="noopener">bandlab.com</a>

</div>

</div>