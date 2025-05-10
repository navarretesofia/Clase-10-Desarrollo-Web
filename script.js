const filas = document.querySelector("tbody");
const texto = document.querySelector("#promedio");
var total = 0;

async function notas() {
    let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
    let data = await consulta.json();
    console.log(data);
    data.forEach((d) => {
        filas.innerHTML += `<tr><td>${d.nombre}</td><td>${progreso(d.nota)}</td><td>${carita(d.nota)}</td></tr>`;
        total = total + d.nota;
        promedio = total / 12;
    });

    texto.innerHTML = (total / 12).toFixed(1);
} notas().catch((error) => console.error(error));

    function carita(n) {
        var emoji;
        if (n > 5.9) {
            emoji = "🤩";
        } else if (n == 5.9) {
            emoji = "🙂";
        } else if (n < 5.9) {
            emoji = "😕";
        }
        return emoji;
    }

function progreso(n) {
    let ancho = n*10; 
    let mono = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20">
   <rect fill="var(--colorsecundario)" x="0" y="0" width="80" height="20" rx="10" ry="10"/>
    <rect fill="var(--colorprincipal)" width="${ancho}" height="20" x="0" y="0" rx="10" ry="10" font-weight="bold"></rect>
    <text x="10" y="10" dominant-baseline="middle" font-size="12" text-align: fill="white">${(ancho/10).toFixed(1)}</text>
</svg>`;

    return mono; 
}



           
