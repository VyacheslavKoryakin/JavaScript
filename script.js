const colors = ['#DDE1E4', '#85CB33', '#788CA5', '#3BA2E3', '#D4ADCF', '#E4CC37'];
const palette = document.getElementById('colors');
const text = document.getElementById('text');

colors.forEach((color) => {
        const colorBlock = document.createElement('div');
        colorBlock.className = 'colorBlock';
        colorBlock.style.backgroundColor = color;
        colorBlock.setAttribute('data-color', color);

        colorBlock.addEventListener('click', () => {
                const selectedColor = colorBlock.dataset.color;
                text.style.color = selectedColor;
        });

        palette.appendChild(colorBlock);
});