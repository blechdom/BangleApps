Bangle.on('gesture',(xyz)=>{
  E.showMessage("gesture is " + xyz);
  Bangle.buzz(1000, 1);
  setTimeout(()=>g.clear(), 1000);
});

Bangle.on('faceUp',(up)=>{
  E.showMessage("up is " + up);
  Bangle.beep(1000, 600);
  setTimeout(()=>g.clear(), 1000);
});

Bangle.on('accel',(xyz)=>{ 
  E.showMesage("accel is " + xyz);
  Bangle.beep(200, 400);
  setTimeout(()=>g.clear(), 200);
});

