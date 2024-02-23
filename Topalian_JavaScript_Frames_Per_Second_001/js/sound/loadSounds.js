// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// loadSounds.js

function loadSounds()
{
    let sounds =
    [
        // 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_blip_001.mp4',

        // 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_warp_001.mp4'

        'media/sounds/sfx_blip_001.mp4', 
        'media/sounds/sfx_warp_001.mp4', 
    ];

    for (let z = 0; z < sounds.length; z++)
    {
        let theSound = ce('audio');
        theSound.src = sounds[z];
        theSound.loop = false;

        theSound.id = extractFileName(sounds[z]);

        theSound.volume = 1.0;
        ba(theSound);
    }
}

