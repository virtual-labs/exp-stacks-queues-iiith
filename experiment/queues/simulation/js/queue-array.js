var canvas = document.getElementById("queueArray");
canvas.width = 1200;
canvas.height = 340;
var ctx = canvas.getContext("2d");
class queue_Array {
  constructor() {
    this.lineDist = 3;
    this.txtSize = 25;
    this.rectNo = 8;
    this.lineNo = this.rectNo - 1;
    this.rectWidth = 95;
    this.rectHeight = 80;
    this.rectStartx = (canvas.width - (8 * 95 + 7 * 3)) / 2;
    this.rectStarty = 120;
    this.indexPosx = this.rectStartx;
    this.indexPosy = this.rectStarty + this.rectHeight + 40;
    this.head = -1;
    this.headPosy = this.indexPosy + 250;
    this.tail = -1;
    this.tailPosy = this.headPosy + 50;
    this.hArrowStartx = this.rectStartx + this.rectWidth / 2;
    this.hArrowStarty = this.rectStarty - 30;
    this.hArrowEndx = this.hArrowStartx;
    this.hArrowEndy = this.hArrowStarty - 50;
    this.hArrowHeadOffsetx = 10;
    this.hArrowHeadOffsety = 10;
    this.hArrowHeadx = 10;
    this.hArrowHeady = 10;
    this.tArrowStartx = this.rectStartx + this.rectWidth / 2;
    this.tArrowStarty = this.indexPosy + 10;
    this.tArrowEndx = this.tArrowStartx;
    this.tArrowEndy = this.tArrowStarty + 50;
    this.tArrowHeadOffsetx = 10;
    this.tArrowHeadOffsety = 10;
    this.tArrowTailx = 10;
    this.tArrowTaily = 20;
    this.errorPosy = this.rectStarty + this.rectHeight / 2;
    this.values = [];
  }
}
let queuearray_artefact = new queue_Array();
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawQueueStructure() {
  ctx.beginPath();
  ctx.rect(
    queuearray_artefact.rectStartx,
    queuearray_artefact.rectStarty,
    queuearray_artefact.rectWidth * queuearray_artefact.rectNo +
      queuearray_artefact.lineNo * queuearray_artefact.lineDist,
    queuearray_artefact.rectHeight,
  );
  ctx.strokeStyle = "#288ec8";
  ctx.stroke();

  for (var i = 1; i < queuearray_artefact.rectNo; i++) {
    ctx.rect(
      queuearray_artefact.rectStartx +
        i * queuearray_artefact.rectWidth +
        (i - 1) * queuearray_artefact.lineDist,
      queuearray_artefact.rectStarty,
      queuearray_artefact.lineDist,
      queuearray_artefact.rectHeight,
    );
    ctx.strokeStyle = "#288ec8";
    ctx.stroke();
  }

  ctx.closePath();

  ctx.beginPath();

  for (var i = 0; i < queuearray_artefact.rectNo; i++) {
    ctx.font = "150% Arial";
    ctx.fillStyle = "black";

    txtIndex = i.toString();
    txtWidthIndex = ctx.measureText(txtIndex).width;

    txtXIndex =
      queuearray_artefact.indexPosx +
      i * queuearray_artefact.rectWidth +
      (queuearray_artefact.rectWidth - txtWidthIndex) / 2 +
      i * queuearray_artefact.lineDist;
    txtYIndex = queuearray_artefact.indexPosy;

    ctx.fillText(txtIndex, txtXIndex, txtYIndex);
  }

  ctx.closePath();
  ctx.beginPath();
  document.getElementById("insqb").innerHTML =
    "Index of the Front of the queue:  " +
    (queuearray_artefact.values.length === 0 ? -1 : queuearray_artefact.head);
  var headPosx =
    queuearray_artefact.rectStartx +
    (queuearray_artefact.rectWidth * queuearray_artefact.rectNo +
      queuearray_artefact.lineNo * queuearray_artefact.lineDist) /
      2;
  document.getElementById("insqa").innerHTML =
    "Index of the Rear of the queue:  " +
    (queuearray_artefact.values.length === 0 ? -1 : queuearray_artefact.tail);
}
function writeNumbers() {
  clearCanvas();
  drawQueueStructure();

  if (queuearray_artefact.values.length === 0) {
    return;
  }

  ctx.beginPath();
  for (var i = 0; i < queuearray_artefact.values.length; i++) {
    ctx.fillStyle = "#288ec8";
    ctx.fillRect(
      queuearray_artefact.rectStartx +
        i * queuearray_artefact.rectWidth +
        i * queuearray_artefact.lineDist,
      queuearray_artefact.rectStarty,
      queuearray_artefact.rectWidth,
      queuearray_artefact.rectHeight,
    );
  }
  ctx.closePath();

  ctx.beginPath();
  for (var i = 0; i < queuearray_artefact.values.length; i++) {
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    var txt = queuearray_artefact.values[i].toString();
    var txtWidth = ctx.measureText(txt).width;

    var txtX =
      queuearray_artefact.rectStartx +
      i * queuearray_artefact.rectWidth +
      (queuearray_artefact.rectWidth - txtWidth) / 2 +
      i * queuearray_artefact.lineDist;
    var txtY =
      queuearray_artefact.rectStarty +
      queuearray_artefact.rectHeight -
      (queuearray_artefact.rectHeight - queuearray_artefact.txtSize) / 2;

    ctx.fillText(txt, txtX, txtY);
  }
  ctx.closePath();

  if (queuearray_artefact.head > -1) {
    var relativeArrowPos =
      queuearray_artefact.head * queuearray_artefact.rectWidth +
      queuearray_artefact.head * queuearray_artefact.lineDist;

    ctx.beginPath();

    ctx.moveTo(
      queuearray_artefact.hArrowStartx + relativeArrowPos,
      queuearray_artefact.hArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.hArrowEndx + relativeArrowPos,
      queuearray_artefact.hArrowEndy,
    );
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.moveTo(
      queuearray_artefact.hArrowStartx + relativeArrowPos,
      queuearray_artefact.hArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.hArrowStartx +
        relativeArrowPos -
        queuearray_artefact.hArrowHeadOffsetx,
      queuearray_artefact.hArrowStarty - queuearray_artefact.hArrowHeadOffsety,
    );
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.moveTo(
      queuearray_artefact.hArrowStartx + relativeArrowPos,
      queuearray_artefact.hArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.hArrowStartx +
        relativeArrowPos +
        queuearray_artefact.hArrowHeadOffsetx,
      queuearray_artefact.hArrowStarty - queuearray_artefact.hArrowHeadOffsety,
    );
    ctx.strokeStyle = "black";
    ctx.stroke();

    var htxt = "Front";
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    var htxtWidth = ctx.measureText(htxt).width;
    ctx.fillText(
      htxt,
      queuearray_artefact.hArrowEndx + relativeArrowPos - htxtWidth / 2,
      queuearray_artefact.hArrowEndy - queuearray_artefact.hArrowHeady,
    );

    ctx.closePath();
  }

  if (queuearray_artefact.tail > -1) {
    var relativeArrowPos =
      queuearray_artefact.tail * queuearray_artefact.rectWidth +
      queuearray_artefact.tail * queuearray_artefact.lineDist;

    ctx.beginPath();

    ctx.moveTo(
      queuearray_artefact.tArrowStartx + relativeArrowPos,
      queuearray_artefact.tArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.tArrowEndx + relativeArrowPos,
      queuearray_artefact.tArrowEndy,
    );
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.moveTo(
      queuearray_artefact.tArrowStartx + relativeArrowPos,
      queuearray_artefact.tArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.tArrowStartx +
        relativeArrowPos -
        queuearray_artefact.tArrowHeadOffsetx,
      queuearray_artefact.tArrowStarty + queuearray_artefact.tArrowHeadOffsety,
    );
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.moveTo(
      queuearray_artefact.tArrowStartx + relativeArrowPos,
      queuearray_artefact.tArrowStarty,
    );
    ctx.lineTo(
      queuearray_artefact.tArrowStartx +
        relativeArrowPos +
        queuearray_artefact.tArrowHeadOffsetx,
      queuearray_artefact.tArrowStarty + queuearray_artefact.tArrowHeadOffsety,
    );
    ctx.strokeStyle = "black";
    ctx.stroke();

    var ttxt = "Rear";
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    var ttxtWidth = ctx.measureText(ttxt).width;
    ctx.fillText(
      ttxt,
      queuearray_artefact.tArrowEndx + relativeArrowPos - ttxtWidth / 2,
      queuearray_artefact.tArrowEndy + queuearray_artefact.tArrowTaily,
    );

    ctx.closePath();
  }
}
function atstart() {
  drawQueueStructure();
  writeNumbers();
  handlers();
}
function enqueue() {
  var value = document.getElementById("numbers-qa").value.trim();

  if (queuearray_artefact.values.length >= queuearray_artefact.rectNo) {
    document.getElementById("insqc").innerHTML = "Queue is full";
    document.getElementById("numbers-qa").value = "";
    return;
  }

  if (value === "" || value === null) {
    document.getElementById("insqc").innerHTML =
      "Please enter the element which you want to add to the queue";
    return;
  }

  queuearray_artefact.values.push(value);
  queuearray_artefact.head = 0;
  queuearray_artefact.tail = queuearray_artefact.values.length - 1;
  document.getElementById("insqc").innerHTML = value + " is enqueued";
  writeNumbers();
  document.getElementById("numbers-qa").value = "";
}

function dequeue() {
  var value = document.getElementById("numbers-qa").value.trim();

  if (queuearray_artefact.values.length === 0) {
    document.getElementById("insqc").innerHTML = "Queue has no elements in it";
    return;
  }

  if (value === "" || value === null) {
    var temp = queuearray_artefact.values.shift();
    if (queuearray_artefact.values.length === 0) {
      queuearray_artefact.head = -1;
      queuearray_artefact.tail = -1;
    } else {
      queuearray_artefact.head = 0;
      queuearray_artefact.tail = queuearray_artefact.values.length - 1;
    }
    document.getElementById("insqc").innerHTML =
      temp + " is dequeued (front element)";
    writeNumbers();
    return;
  }

  if (
    queuearray_artefact.values.length > 0 &&
    queuearray_artefact.values[0] == value
  ) {
    var frontValue = queuearray_artefact.values.shift();
    if (queuearray_artefact.values.length === 0) {
      queuearray_artefact.head = -1;
      queuearray_artefact.tail = -1;
    } else {
      queuearray_artefact.head = 0;
      queuearray_artefact.tail = queuearray_artefact.values.length - 1;
    }
    document.getElementById("insqc").innerHTML =
      frontValue + " is dequeued (front element)";
    writeNumbers();
    return;
  }

  document.getElementById("insqc").innerHTML =
    "Only the front element can be dequeued. " +
    value +
    " cannot be dequeued because it is not at the front.";
}

function clear() {
  clearCanvas();
  queuearray_artefact.values = [];
  queuearray_artefact.head = -1;
  queuearray_artefact.tail = -1;
  drawQueueStructure();
  writeNumbers();
  document.getElementById("insqc").innerHTML = "Queue is reset";
}
function handlers() {
  document.getElementById("enqueue-button-qa").onclick = function () {
    enqueue();
  };
  document.getElementById("dequeue-button-qa").onclick = function () {
    dequeue();
  };
  document.getElementById("clear-button").onclick = function () {
    clear();
  };
}
