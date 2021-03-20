var canvasA = document.getElementById("queue-demo-canvas1");
var canvasB = document.getElementById("queue-demo-canvas2");
var queueA_canvas = canvasA.getContext("2d");
var queueB_canvas = canvasB.getContext("2d");

class queue_class{
    constructor(){
    this.rand = 0;
    this.txtSize = 25;
    this.rectWidth = 60;
    this.rectHeight = 60;
    this.rectStartx = 450;
    this.rectStarty = 83;
    this.arrayDist = 5;
    this.head = -1;
    this.tail = -1;
    this.headb = -1;
    this.tailb = -1;
    this.hArrowStartx = this.rectStartx + this.rectWidth / 2;
    this.hArrowStarty = this.rectStarty - 10; 
    this.hArrowEndx = this.hArrowStartx;
    this.hArrowEndy = this.hArrowStarty - 40;
    this.hArrowHeadOffsetx = 10;
    this.hArrowHeadOffsety = 10;
    this.hArrowHeadx = 5;
    this.hArrowHeady = 10; 
    this.tArrowStartx = this.rectStartx + this.rectWidth / 2;
    this.tArrowStarty = this.rectStarty + this.rectHeight + 10; 
    this.tArrowEndx = this.tArrowStartx;
    this.tArrowEndy = this.tArrowStarty + 40;
    this.tArrowHeadOffsetx = 10;
    this.tArrowHeadOffsety = 10;
    this.tArrowTailx = 5;
    this.tArrowTaily = 17; 
    this.values = [];
    this.val = [];
    this.reset_array = [];
    this.resethead = -1;
    this.resettail = -1;
    this.correct = ["E","N","C","R","Y","P","T"];
    this.count = 0;
    this.interval = 0;
    this.started = 0;
    this.prev = -1;
    this.popped;
    this.checker = 0;
    this.ispaused = 0;
    };
};
let queue_artefact = new queue_class();
function change_interval()
{
  if(queue_artefact.interval != 0) { clearInterval(queue_artefact.interval); }
  
  if(document.getElementById("interval").value != 100)
  {
     queue_artefact.interval = setInterval(check, 3400-document.getElementById("interval").value); 
     document.getElementById("pause-queuedemo").style.backgroundColor = "#288ec8";
  }
  else document.getElementById("pause-queuedemo").style.backgroundColor = "grey";
};
function clearCanvas(ctx) {
    if (ctx === queueA_canvas) ctx.clearRect(0, 0, canvasA.width, canvasA.height);
    else if (ctx === queueB_canvas) ctx.clearRect(0, 0, canvasB.width, canvasB.height);
}
function drawQueueStructure(ctx) {
if (ctx === queueA_canvas) 
{
    headhere = 0;
    tailhere = queue_artefact.tail-queue_artefact.head;
}
else 
{
    headhere = 0;
    tailhere = queue_artefact.tailb-queue_artefact.headb;
}
ctx.beginPath();
if (headhere >= -1 && tailhere >= -1) 
{
    if(headhere===-1 && tailhere===-1)
    {
        headhere = 0;
        tailhere = 0;
    }
    ctx.strokeStyle = "#a4c652";
    ctx.fillStyle = "#a4c652";

    txta = "Queue A";
    txtb = "Queue B";
    queueA_canvas.fillStyle = "black";
    queueA_canvas.font = "25px arial";
    queueB_canvas.font = "25px arial";
    queueB_canvas.fillStyle = "black";
    queueA_canvas.fillText(txta,"225","125"); 
    queueB_canvas.fillText(txtb,"225","125"); 

    ctx.strokeStyle = "#a4c652";
    ctx.fillStyle = "#a4c652";
    ctx.fillRect( queue_artefact.rectStartx + (headhere * queue_artefact.rectWidth) + (headhere * queue_artefact.arrayDist), queue_artefact.rectStarty, queue_artefact.rectWidth, queue_artefact.rectHeight);
    for (var i = headhere ; i <= tailhere; i++) 
    {
        ctx.fillStyle = "#288ec8";
        ctx.fillRect(queue_artefact.rectStartx + (i * queue_artefact.rectWidth) + (i * queue_artefact.arrayDist), queue_artefact.rectStarty, queue_artefact.rectWidth, queue_artefact.rectHeight);
    }
    ctx.fillStyle = "#a4c652";
    ctx.fillRect(queue_artefact.rectStartx + (headhere * queue_artefact.rectWidth) + (headhere * queue_artefact.arrayDist), queue_artefact.rectStarty, queue_artefact.rectWidth, queue_artefact.rectHeight);
    ctx.fillRect(queue_artefact.rectStartx + (tailhere * queue_artefact.rectWidth) + (tailhere * queue_artefact.arrayDist), queue_artefact.rectStarty, queue_artefact.rectWidth, queue_artefact.rectHeight);
}
ctx.closePath();
} 
function writeNumbers(ctx) {
clearCanvas(ctx);
drawQueueStructure(ctx);

ctx.shadowBlur = 0;
valueshere = [];
ctx.beginPath();
if (ctx === queueA_canvas) {
    valueshere = queue_artefact.values;
    headhere = 0;
    tailhere = queue_artefact.tail-queue_artefact.head;
} else {
    valueshere = queue_artefact.val;
    headhere = 0;
    tailhere = queue_artefact.tailb-queue_artefact.headb;
}

if (headhere > -1 && valueshere.length > 0 && tailhere > -1) {
    for (var i = headhere; i <=tailhere; i++) {
        ctx.font = "20px Arial"
        ctx.fillStyle = "white";
        txt = valueshere[i].toString();
        txtWidth = ctx.measureText(txt).width;

    txtX = queue_artefact.rectStartx + (i * queue_artefact.rectWidth) + (i * queue_artefact.arrayDist) + (queue_artefact.rectWidth - txtWidth) / 2;;
    txtY = queue_artefact.rectStarty + queue_artefact.rectHeight - ((queue_artefact.rectHeight - queue_artefact.txtSize) / 2);

    ctx.fillText(txt, txtX, txtY);
    }
}

ctx.closePath();
if (headhere > -1) {
    var relativeArrowPos = headhere * queue_artefact.rectWidth + headhere * queue_artefact.arrayDist;

    ctx.beginPath();

    ctx.moveTo(queue_artefact.hArrowStartx + relativeArrowPos, queue_artefact.hArrowStarty);
    ctx.lineTo(queue_artefact.hArrowEndx + relativeArrowPos, queue_artefact.hArrowEndy);
    ctx.strokeStyle = "#a4c652";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.moveTo(queue_artefact.hArrowStartx + relativeArrowPos, queue_artefact.hArrowStarty);
    ctx.lineTo(queue_artefact.hArrowStartx + relativeArrowPos - queue_artefact.hArrowHeadOffsetx, queue_artefact.hArrowStarty - queue_artefact.hArrowHeadOffsety);
    ctx.strokeStyle = "#a4c652";
    ctx.stroke();

    ctx.moveTo(queue_artefact.hArrowStartx + relativeArrowPos, queue_artefact.hArrowStarty);
    ctx.lineTo(queue_artefact.hArrowStartx + relativeArrowPos + queue_artefact.hArrowHeadOffsetx, queue_artefact.hArrowStarty - queue_artefact.hArrowHeadOffsety);
    ctx.strokeStyle = "#a4c652";
    ctx.stroke();

    htxt = "Front of the queue";
    ctx.font = "18px arial";
    ctx.fillStyle = "black";
    htxtWidth = ctx.measureText(htxt).width;
    ctx.fillText(htxt, queue_artefact.hArrowEndx + relativeArrowPos - htxtWidth / 2, queue_artefact.hArrowEndy - queue_artefact.hArrowHeady);

    ctx.closePath();
}     
 if (tailhere > -1) {
var relativeArrowPos = tailhere * queue_artefact.rectWidth + tailhere * queue_artefact.arrayDist;;

ctx.beginPath();

ctx.moveTo(queue_artefact.tArrowStartx + relativeArrowPos, queue_artefact.tArrowStarty);
ctx.lineTo(queue_artefact.tArrowEndx + relativeArrowPos, queue_artefact.tArrowEndy);
ctx.strokeStyle = "#7bde3d";
ctx.lineWidth = 1.5;
ctx.stroke();

ctx.moveTo(queue_artefact.tArrowStartx + relativeArrowPos, queue_artefact.tArrowStarty);
ctx.lineTo(queue_artefact.tArrowStartx + relativeArrowPos - queue_artefact.tArrowHeadOffsetx, queue_artefact.tArrowStarty + queue_artefact.tArrowHeadOffsety);
ctx.strokeStyle = "#7bde3d";
ctx.stroke();

ctx.moveTo(queue_artefact.tArrowStartx + relativeArrowPos, queue_artefact.tArrowStarty);
ctx.lineTo(queue_artefact.tArrowStartx + relativeArrowPos + queue_artefact.tArrowHeadOffsetx, queue_artefact.tArrowStarty + queue_artefact.tArrowHeadOffsety);
ctx.strokeStyle = "#7bde3d";
ctx.stroke();

ttxt = "Rear of the queue";
ctx.font = "18px arial";
ctx.fillStyle = "black";
ttxtWidth = ctx.measureText(ttxt).width;
ctx.fillText(ttxt, queue_artefact.tArrowEndx + relativeArrowPos - ttxtWidth / 2, queue_artefact.tArrowEndy + queue_artefact.tArrowTaily);

ctx.closePath();
}
}
function enqueuetob(){
    if (queue_artefact.head === -1 && queue_artefact.tail === -1) {
        //alert("Queue A is empty!!!");
    } else if (queue_artefact.tailb > 16) {
        alert("Queue B is full!!!");
    } else {
        var value = queue_artefact.values.shift();
        queue_artefact.head++;
        if (queue_artefact.head > queue_artefact.tail) {
            queue_artefact.values = [];
            queue_artefact.head = -1;
            queue_artefact.tail = -1;
        }
        if (value === "" || value === null) return;
        else {
            queue_artefact.val.push(value);
            if (queue_artefact.headb === -1) queue_artefact.headb++;
            queue_artefact.tailb++;
            writeNumbers(queueA_canvas);
            writeNumbers(queueB_canvas);
        }
    }
}
function dequeuea(){
    if (queue_artefact.head=== -1 && queue_artefact.tail === -1) {
        alert("Queue A is empty");
    } else if (queue_artefact.tail > 16) {
        alert("Queue A is full!!!");
    } else {
        var value = queue_artefact.values.shift();
        queue_artefact.head++;
        if (queue_artefact.head > queue_artefact.tail) {
            queue_artefact.values = [];
            queue_artefact.head = -1;
            queue_artefact.tail = -1;
        }
        queue_artefact.popped = value; 
        writeNumbers(queueA_canvas);
        writeNumbers(queueB_canvas);
    }
}            
function enqueuetoa()
{
value = queue_artefact.popped;
if (value === "" || value === null) return;
    else {
        queue_artefact.values.push(value);
        if (queue_artefact.head === -1) queue_artefact.head++;
        queue_artefact.tail++;
        document.getElementById("ins").innerHTML = "The letter Dequeued from queue A (i.e " + value + " ) is Enqueued to <b>Queue A</b> as it is not the required one";
        writeNumbers(queueA_canvas);
        writeNumbers(queueB_canvas);
    }
} 
function check(){
if(queue_artefact.values.length <= 0)
{
    document.getElementById("ins").innerHTML = "<b>Demonstration is complete!!!</b>";
    document.getElementById("pause-queuedemo").disabled = true;
    document.getElementById("startbutton-queuedemo").disabled = true;
    document.getElementById("pause-queuedemo").style.backgroundColor="grey";
    document.getElementById("startbutton-queuedemo").style.backgroundColor="grey";
}
else if(queue_artefact.checker === 1){
    enqueuetoa();
    queue_artefact.checker = 0;
    return;
}
else if(queue_artefact.correct[queue_artefact.count] === queue_artefact.values[0])
{
    document.getElementById("ins").innerHTML = "The letter pointed by the Front pointer (i.e " + queue_artefact.values[0] + " ) is the required one so it is Dequeued from <b>Queue A</b> and Enqueued to <b>Queue B</b>";
    queue_artefact.count++;
    enqueuetob();    
}
else
    {
        if(queue_artefact.checker === 0)
        {
            queue_artefact.checker = 1;
            document.getElementById("ins").innerHTML = "The letter pointed by the Front pointer (i.e " + queue_artefact.values[0] + " ) is not the required one so it is Dequeued from <b>Queue A</b>"; 
            dequeuea();
        }
    }
}
function onpause(){
if(queue_artefact.prev === -1){
    queue_artefact.prev = document.getElementById("interval").value;
    if(queue_artefact.interval != 0){ 
      clearInterval(queue_artefact.interval);
}
queue_artefact.ispaused = 1;
document.getElementById("pause-queuedemo").value = "Play";
  }else{
    queue_artefact.prev = -1;
    queue_artefact.ispaused = 0;
    clearInterval(queue_artefact.interval);
    queue_artefact.interval = setInterval(check, 3400-document.getElementById("interval").value);
    document.getElementById("pause-queuedemo").value = "Pause";
  }
}
function initializeArtefact(){
    queue_artefact.values = [];
    queue_artefact.headb = -1;
    queue_artefact.tailb = -1;
    queue_artefact.val = [];
    queue_artefact.reset_array = [];
    queue_artefact.values = ["T","R","E","P","N","Y","C"];
    var elementNo = queue_artefact.values.length;
    queue_artefact.tail = elementNo - 1;
    queue_artefact.head = elementNo - queue_artefact.tail - 1;
    queue_artefact.resethead = queue_artefact.head;
    queue_artefact.resettail = queue_artefact.tail;
    queue_artefact.count = 0;
    document.getElementById("interval").value = 1500;
    document.getElementById("startbutton-queuedemo").value = "Start";
    document.getElementById("pause-queuedemo").disabled = true;
    document.getElementById("reset-queuedemo").disabled = true;
    document.getElementById("pause-queuedemo").style.backgroundColor="grey";
    document.getElementById("reset-queuedemo").style.backgroundColor="grey";
    handlers();
    drawQueueStructure(queueA_canvas);
    writeNumbers(queueA_canvas);
    drawQueueStructure(queueB_canvas);
    writeNumbers(queueB_canvas);
}
function onstart(){
document.getElementById("pause-queuedemo").style.backgroundColor="#288ec8";
document.getElementById("reset-queuedemo").style.backgroundColor="#288ec8";
document.getElementById("pause-queuedemo").disabled = false;
document.getElementById("reset-queuedemo").disabled = false;

if(document.getElementById("interval").value === 100 || queue_artefact.started === 1)
  {
    document.getElementById("startbutton-queuedemo").value = "Next";
    document.getElementById("startbutton-queuedemo").disabled = false;
    clearInterval(queue_artefact.interval);
    if(queue_artefact.ispaused==1){
            check();
        }
    else{
        check();        
        queue_artefact.interval = setInterval(check, 3400-document.getElementById("interval").value); 
    }
    document.getElementById("pause-queuedemo").style.visibility = "visible";
  }
else{
    document.getElementById("ins").innerHTML = "<b>Demonstration started</b>";
    document.getElementById("interval").value === 1500;
    document.getElementById("startbutton-queuedemo").value = "Next";
    queue_artefact.started = 1;
    change_interval();
  }
}
function onreset(){
    location.reload(true);
}
function handlers()
{ 
 document.getElementById("interval").oninput = function() { change_interval(); };
 document.getElementById("interval").onchange = function() { change_interval(); };
 document.getElementById("startbutton-queuedemo").onclick = function() { onstart(); };
 document.getElementById("reset-queuedemo").onclick = function() { onreset(); };
 document.getElementById("pause-queuedemo").onclick = function() { onpause(); };
};
