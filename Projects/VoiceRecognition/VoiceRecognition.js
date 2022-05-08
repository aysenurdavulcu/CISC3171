var recognition = new webkitSpeechRecognition();
// recognition.onresult = function(event) { 
//   console.log(event) 
// }
//recognition.start();

//var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'

function handleSpeak(){
    console.log("begin speach")
    recognition.start();
}

function handleSpeakEnd(){
    console.log("end speach")
    recognition.start();
}
// var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
// var recognition = new webkitSpeechRecognition()znew SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;

// var diagnostic = document.querySelector('.output');
// var bg = document.querySelector('html');

// document.body.onclick = function() {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }

// abortBtn.onclick = function() {
//   recognition.abort();
//   console.log('Speech recognition aborted.');
// }

// recognition.onspeechend = function() {
//   recognition.stop();
//   console.log('Speech recognition has stopped.');
// }

