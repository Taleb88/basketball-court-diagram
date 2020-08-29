let ctx = document.getElementById('canvas').getContext('2d');

// court's first half

let court = () => {
    ctx.beginPath();
    ctx.rect(10,60,450,1000);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
court();

let coachAndBenchAreaOne = () => {
    ctx.beginPath()
    ctx.rect(10,365,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
coachAndBenchAreaOne();

let coachAndBenchAreaTwo = () => {
    ctx.beginPath()
    ctx.rect(10,755,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
coachAndBenchAreaTwo();

let paintArea = () => {
    ctx.beginPath();
    ctx.rect(175,60,125,200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
paintArea();

// free throw rebound position area
let ftPosBox = () => {
    ctx.beginPath();
    ctx.rect(148.5,60,175,200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
ftPosBox();

// defensive player rebound positions one, two, three, and four
let defRebPos = () => {
    ctx.beginPath()
    ctx.rect(140.1,110,8,15);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPos();

let defRebPosTwo = () => {
    ctx.beginPath()
    ctx.rect(138.5,210,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPosTwo();

let defRebPosThree = () => {
    ctx.beginPath()
    ctx.rect(323.5,110,8,15);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath();     
}
defRebPosThree();

let defRebPosFour = () => {
    ctx.beginPath()
    ctx.rect(323.5,210,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPosFour();

// offensive player rebound positions one, and two
let offRebPos = () => {
    ctx.beginPath()
    ctx.rect(138.5,165,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
offRebPos();

let offRebPosTwo = () => {
    ctx.beginPath()
    ctx.rect(323.5,165,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
offRebPosTwo();

let topOfTheKey = () => {
    ctx.beginPath();
    ctx.arc(237.5,260,62.5,0, Math.PI*2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
topOfTheKey();

let threeLeftCorner = () => {
    ctx.beginPath();
    ctx.rect(49,60,0,130);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
threeLeftCorner();

let threeRightCorner = () => {
    ctx.beginPath();
    ctx.rect(418,60,0,130);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
threeRightCorner();

let threeArc = () => {
    ctx.beginPath();
    ctx.arc(233.5,189,184.7,0, Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
threeArc();

let basket = () => {
    // basket
    ctx.beginPath();
    ctx.arc(236.5,100,5.5,0, Math.PI*2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#8A2BE2';
    ctx.stroke();
    
    // backboard
    ctx.beginPath()
    ctx.rect(217,93,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath();
}
basket();

let underBasket = () => {
    ctx.beginPath();
    ctx.arc(236.3,93,28.5,0, Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
underBasket();

// half court

let halfCourtLine = () => {
    ctx.beginPath();
    ctx.rect(10,565,450.3,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
halfCourtLine();

let midCourtCircle = () => {
    ctx.beginPath();
    ctx.arc(233.5,565,62.5,0, Math.PI*2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
midCourtCircle();

let midCourtInnerCircle = () => {
    ctx.beginPath();
    ctx.arc(233.5,565,18.5,0, Math.PI*2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
midCourtInnerCircle();

// the court's other half

let coachAndBenchAreaThree = () => {
    ctx.beginPath()
    ctx.rect(420,365,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
coachAndBenchAreaThree();

let coachAndBenchAreaFour = () => {
    ctx.beginPath()
    ctx.rect(420,755,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
coachAndBenchAreaFour();

let paintAreaTwo = () => {
    ctx.beginPath();
    ctx.rect(175,860,125,200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
paintAreaTwo();

// free throw rebound position area
let ftPosBoxTwo = () => {
    ctx.beginPath();
    ctx.rect(148.5,860,175,200);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
ftPosBoxTwo();

// defensive player rebound positions five, six, seven, and eight
let defRebPosFive = () => {
    ctx.beginPath()
    ctx.rect(140.1,1010,8,15);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPosFive();

let defRebPosSix = () => {
    ctx.beginPath()
    ctx.rect(138.5,923,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPosSix();

let defRebPosSeven = () => {
    ctx.beginPath()
    ctx.rect(323.5,1010,8,15);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath();     
}
defRebPosSeven();

let defRebPosEight = () => {
    ctx.beginPath()
    ctx.rect(323.5,923,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
defRebPosEight();

// offensive player rebound positions three, and four
let offRebPosThree = () => {
    ctx.beginPath()
    ctx.rect(138.5,968,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
offRebPosThree();

let offRebPosFour = () => {
    ctx.beginPath()
    ctx.rect(323.5,968,10,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
offRebPosFour();

let topOfTheKeyTwo = () => {
    ctx.beginPath();
    ctx.arc(237.5,860,62.5,0,Math.PI*2,false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
topOfTheKeyTwo();

let threeLeftCornerTwo = () => {
    ctx.beginPath();
    ctx.rect(49,930.5,0,130);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
threeLeftCornerTwo();

let threeRightCornerTwo = () => {
    ctx.beginPath();
    ctx.rect(418,930.5,0,130);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}
threeRightCornerTwo();

let threeArcTwo = () => {
    ctx.beginPath();
    ctx.arc(233.5,930.5,184.7,0, Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
threeArcTwo();

let basketTwo = () => {
    // basket
    ctx.beginPath();
    ctx.arc(236.5,1025,5.5,0, Math.PI*2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#8A2BE2';
    ctx.stroke();
    
    // backboard
    ctx.beginPath()
    ctx.rect(217,1031.5,40,0);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();   
    ctx.closePath(); 
}
basketTwo();

let underBasketTwo = () => {
    ctx.beginPath();
    ctx.arc(236.3,1032.5,28.5,0, Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
underBasketTwo();