// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInterface.js

function makeInterface()
{
    // mainDiv
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.className = 'mainDiv';
    mainDiv.style.opacity = 0.0;
    setTimeout(function()
    {
        mainDiv.style.opacity = 1.0; 
    }, 10);
    ba(mainDiv);

    //-//

    let creditText = ce('div');
    creditText.innerHTML = 'Topalian JavaScript Frames Per Second';
    creditText.innerHTML += '<br>';
    creditText.innerHTML += `<a href = 'https://github.com/christophertopalian' target = '_blank'> github.com/ChristopherTopalian </a>`;
    creditText.innerHTML += '<br>';
    creditText.innerHTML += `<a href = 'https://sites.google.com/view/collegeofscripting' target = '_blank'> College of Scripting </a>`;
    creditText.id = 'creditText';
    creditText.style.position = 'absolute';
    creditText.style.left = (mainDiv.getBoundingClientRect().x + 450 + 'px');
    creditText.style.top = (mainDiv.getBoundingClientRect().y + 12 + 'px');
    creditText.style.fontWeight = 'bold';
    creditText.style.color = 'rgb(100, 100, 100)';
    mainDiv.parentNode.insertBefore(creditText, mainDiv);

    //-//

    // counterLabel
    let counterLabel = ce('label');
    counterLabel.textContent = 'Counter';
    counterLabel.id = 'counterLabel';
    counterLabel.className = 'counterLabel';
    counterLabel.title = 'counterLabel';
    mainDiv.append(counterLabel);

    //-//

    // counterTextbox
    let counterTextbox = ce('input');
    counterTextbox.type = 'text';
    counterTextbox.id = 'counterTextbox';
    counterTextbox.className = 'counterTextbox';
    mainDiv.append(counterTextbox);

    //-//

    // linebreak
    let linebreakUnderCounter = ce('hr');
    mainDiv.append(linebreakUnderCounter);

    //-//

    // fpsLabel
    let fpsLabel = ce('label');
    fpsLabel.textContent = 'FPS';
    fpsLabel.id = 'fpsLabel';
    fpsLabel.className = 'fpsLabel';
    mainDiv.append(fpsLabel);

    //-//

    // fpsTextbox
    let fpsTextbox = ce('input');
    fpsTextbox.type = 'text';
    fpsTextbox.placeholder = 1000 / fps;
    fpsTextbox.id = 'fpsTextbox';
    fpsTextbox.className = 'fpsTextbox';
    fpsTextbox.onkeyup = function()
    {
        changeFPS(fpsTextbox.value);
    };
    mainDiv.append(fpsTextbox);

    //-//

    // linebreak
    let linebreakUnderFpsTextbox = ce('hr');
    mainDiv.append(linebreakUnderFpsTextbox);

    //-//

    // fpsSlider
    let fpsSlider = ce('input');
    fpsSlider.type = 'range';
    fpsSlider.id = 'fpsSlider';
    fpsSlider.className = 'fpsSlider';
    fpsSlider.min = '1';
    fpsSlider.max = '120';
    fpsSlider.value = 1000 / fps;
    fpsSlider.step = '1';
    fpsSlider.style.width = '400px';
    fpsSlider.oninput = function()
    {
        ge('sfx_blip_001').play();

        ge('fpsTextbox').value = fpsSlider.value;

        fps = changeFPS(fpsTextbox.value);
    };

    fpsSlider.onchange = function()
    {
        ge('sfx_warp_001').play();
    };

    mainDiv.append(fpsSlider);
}

