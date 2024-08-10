// alert("Hola Mundo! <3");

let introd= document.getElementById('introd');
let typewriterIntrod = new Typewriter(introd, {
  loop: true,
  delay: 75,
});
// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterIntrod
  .pauseFor(600)
  .typeString('Rocio Ibarrola')
  .pauseFor(500)
  .deleteAll()
  .typeString('Desarrolladora Frontend JR')
  .pauseFor(500)
  .deleteAll()
  .typeString('Ingeniera Industrial')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
  .pauseFor(1500)
  .typeString('"La mejora continua es mejor que la perfección tardía." — Mark Zuckerberg.')
  .pauseFor(1500)
  .deleteAll()
  .start();

