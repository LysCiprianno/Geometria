document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('areaForm');
    const result = document.getElementById('result');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const inputs = Array.from(formData.values()).map(Number);
            
            let area;
            switch (document.title.split(' - ')[0]) {
                case 'Círculo':
                    area = Math.PI * inputs[0] ** 2;
                    break;
                case 'Cubo':
                    area = 6 * inputs[0] ** 2;
                    break;
                case 'Retângulo':
                    area = inputs[0] * inputs[1];
                    break;
                case 'Romboedro':
                    area = 6 * inputs[0] * inputs[1];
                    break;
                case 'Trapezoide Irregular':
                    area = ((inputs[0] + inputs[1]) / 2) * inputs[2];
                    break;
                case 'Polígono Regular':
                    const n = inputs[0];
                    const s = inputs[1];
                    area = (n * s ** 2 * (1 / Math.tan(Math.PI / n))) / 4;
                    break;
                case 'Quadrado':
                    area = inputs[0] ** 2;
                    break;
                case 'Cubóide':
                    area = 2 * (inputs[0] * inputs[1] + inputs[0] * inputs[2] + inputs[1] * inputs[2]);
                    break;
                default:
                    area = 0;
            }
            
            result.textContent = `A área é: ${area.toFixed(2)} unidades quadradas`;
        });
    }
});