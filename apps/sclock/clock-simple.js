/* jshint esversion: 6 */
const timeFontSize = 6;
const dateFontSize = 3;
const gmtFontSize = 2;
const font = "6x8";

const xyCenter = g.getWidth() / 2;
const yposTime = 75;
const yposDate = 130;
const yposYear = 175;
const yposGMT = 220;

function drawSimpleClock() {

    // get date
    var d = new Date();
    var da = d.toString().split(" ");

    // drawSting centered
    g.setFontAlign(0, 0);

    // draw time
    var time = da[4].substr(0, 5);
    var [hours, minutes] = time.split(":");
    var meridian = "AM";
    if (Number(hours) > 12) {
        hours -= String(Number(hours) - 12);
        meridian = "PM";
    }
    g.setFont(font, timeFontSize);
    g.drawString(`${hours}:${minutes}`, xyCenter, yposTime, true);
    g.setFont(font, gmtFontSize);
    g.drawString(meridian, xyCenter + 100, yposTime + 10, true);

    // draw Day, name of month, Date
    var date = [da[0], da[1], da[2]].join(" ");
    g.setFont(font, dateFontSize);

    g.drawString(date, xyCenter, yposDate, true);

    // draw year
    g.setFont(font, dateFontSize);
    g.drawString(d.getFullYear(), xyCenter, yposYear, true);

    // draw gmt
    var gmt = da[5];
    g.setFont(font, gmtFontSize);
    g.drawString(gmt, xyCenter, yposGMT, true);

}

// handle switch display on by pressing BTN1
Bangle.on('lcdPower', function(on) {
  if (on) drawSimpleClock();
});

// clean app screen
g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();

// refesh every 15 sec
setInterval(drawSimpleClock, 15E3);

// draw now
drawSimpleClock();

// Show launcher when middle button pressed
setWatch(Bangle.showLauncher, BTN2, {repeat:false,edge:"falling"});
