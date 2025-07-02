Content.makeFrontInterface(1320, 890);


const btnInstagram = Content.getComponent("btnInstagram");
const btnYouTube = Content.getComponent("btnYouTube");
const btnWebsite = Content.getComponent("btnWebsite");
const btnInstagram1 = Content.getComponent("btnInstagram1");

inline function onInstagramClick(component, value) {
    if (value)
        Engine.openWebsite("https://instagram.com/gillatrack");
}

inline function onYouTubeClick(component, value) {
    if (value)
        Engine.openWebsite("https://open.spotify.com/album/4YU2VBLrCrjaMCnSecEEWl?si=TO54np39RKWhvE7tu2Q-Jw");
}

inline function onWebsiteClick(component, value) {
    if (value)
        Engine.openWebsite("https://quietformat.com");
}

inline function onInstagram1Click(component, value) {
    if (value)
        Engine.openWebsite("https://instagram.com/quietformat");
}

// 콜백 연결
btnInstagram.setControlCallback(onInstagramClick);
btnYouTube.setControlCallback(onYouTubeClick);
btnWebsite.setControlCallback(onWebsiteClick);
btnInstagram1.setControlCallback(onInstagram1Click);



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 