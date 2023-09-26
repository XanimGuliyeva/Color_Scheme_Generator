document.getElementById('button').addEventListener('click', function() {
    
    const seedColor = document.getElementById('input-color').value.substring(1)
    const selection = document.getElementById('selection')
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selection.value}`)
        .then(res => res.json())
        .then(data => {
            
            const allColors = data.colors
            const allBoxes = document.querySelectorAll('.color-box')

            allBoxes.forEach((box, index) => {
                // Check if there's a corresponding color in the response data
                if (index < allColors.length) {
                    
                     const colorValue = allColors[index].hex.value
                    
                     box.style.backgroundColor = colorValue
                     
                     const textDiv = document.createElement('p');
                     textDiv.classList.add('color-text'); 
                     box.appendChild(textDiv);                                         
                     textDiv.innerText = colorValue;
                }
            })
        })
})
