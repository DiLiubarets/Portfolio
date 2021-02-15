const herotext = document.querySelector("#herotext")
const message = document.querySelector('#message .letters');

herotext.innerHTML = herotext.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#herotext .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#herotext',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  message.innerHTML = message.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#message .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 800
  })
  .add({
    targets: '#message .line',
    translateX: [0, document.querySelector('#message .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
  }).add({
    targets: '#message .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '#message',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 1000
  });


  