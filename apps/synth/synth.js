Bangle.on('gesture',(xyz)=>{
  E.showMessage("gesture detected");
  console.log("gesture ", xyz);
  Bangle.beep(300, 1000);
  setTimeout(()=>g.clear(), 1000);
});

Bangle.on('faceUp',(up)=>{
  E.showMessage("up is " + up);
  Bangle.beep(1000, 600);
  setTimeout(()=>g.clear(), 1000);
});

Bangle.on('accel',(xyz)=>{ 
  E.showMesage("accel detected");
  console.log("accel ", xyz);
  Bangle.beep(200, 4000);
  setTimeout(()=>g.clear(), 200);
});

Bangle.on('touch', function(button) {
  E.showMesage("touch detected");
  console.log("touch ", button);
  Bangle.beep(500, 800);
  setTimeout(()=>g.clear(), 500);
});
