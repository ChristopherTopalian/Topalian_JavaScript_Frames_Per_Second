// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// gameLoop.js

function gameLoop()
{
    timerId = setInterval(function()
    {
        ge("counterTextbox").value = counter;

        counter += 1;
    }, fps);
}

