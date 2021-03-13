  var canvasA = document.getElementById("stack_1");
  canvasA.width = 400;
  canvasA.height = 340;
  var stackA_canvas = canvasA.getContext("2d");
  var canvasB = document.getElementById("stack_2");
  canvasB.width = 400;
  canvasB.height = 340;
  var stackB_canvas = canvasB.getContext("2d");
  var canvasC = document.getElementById("stack_3");
  canvasC.width = 400;
  canvasC.height = 340;
  var stackC_canvas = canvasC.getContext("2d");
  class stack_class {
      constructor(){	    
          this.txtSize = 25;
          this.lineDist = 1;
          this.rectNo = 7;
          this.lineNo = this.rectNo - 1;
          this.rectHeight = 37;
          this.rectWidth = this.rectHeight * 4;	    
          this.rectStartx = 100;
          this.rectStarty = 30;
          this.topOfStack = -1; 
          this.arrowStartx = this.rectStartx + this.rectWidth + 20;
          this.arrowEndx = this.arrowStartx + 40;
          this.arrowHeadOffsetx = 10;
          this.arrowHeadOffsety = 10;
          this.arrowTopx = 5;
          this.arrowTopy = 30;
          this.values = [];
          this.topB = -1;
          this.topC = -1;
          this.demo_values = [];
          this.demo_valuesB = [];
          this.demo_valuesC = [];
          this.interval = 0;
          this.started = 0;
          this.prev = -1;
          this.ispaused = 0;
      };
  };
  let stack_demo = new stack_class();
  function clearCanvas(ctx) {
      if(ctx===stackA_canvas)ctx.clearRect(0, 0, canvasA.width, canvasA.height);
      if(ctx===stackB_canvas)ctx.clearRect(0, 0, canvasB.width, canvasB.height);
      if(ctx===stackC_canvas)ctx.clearRect(0, 0, canvasC.width, canvasC.height);
  }
  function change_interval()
  {
    if(stack_demo.interval != 0) { clearInterval(stack_demo.interval); }
    
    if(document.getElementById("interval").value != 100)
    {
       stack_demo.interval = setInterval(pop_demo, 3400-document.getElementById("interval").value); 
       document.getElementById("pause-stackdemo").style.backgroundColor = "#288ec8";
    }
    else document.getElementById("pause-stackdemo").style.backgroundColor = "grey";
  };
  function test_prime(n)
  {
    if (n===1)return false;
    else if(n === 2)return true;
    else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        return false;
        
      }
      return true;  
    }
  }
  function drawStackStructure(ctx) {
  ctx.beginPath();
  ctx.rect(stack_demo.rectStartx, stack_demo.rectStarty, stack_demo.rectWidth, stack_demo.rectHeight*stack_demo.rectNo + stack_demo.lineNo*stack_demo.lineDist);
  ctx.strokeStyle = "#969696";
  ctx.stroke();
  
  ctx.closePath();
  } 
  function writeNumbers(ctx) {
  var stackhere = [];
  var tophere = -1;
  if(ctx===stackA_canvas)
  {
     stackhere = stack_demo.demo_values;
     tophere = stack_demo.topOfStack;
  }
  else if (ctx === stackB_canvas)
  {
      stackhere = stack_demo.demo_valuesB.slice();
      tophere = stack_demo.topB;
  } 	
  else if(ctx === stackC_canvas)
  {
      stackhere = stack_demo.demo_valuesC.slice();
      tophere = stack_demo.topC;
  }           		
  clearCanvas(ctx);
  drawStackStructure(ctx);
  		
  ctx.beginPath();
  if(ctx===stackA_canvas)
  {
      stackA_canvas.font = "20px";
      stackA_canvas.fillStyle = "black";
      stackA_canvas.fillText("Stack A","150","335");
  }
  else if(ctx===stackB_canvas)
  {
      stackB_canvas.font = "20px";
      stackB_canvas.fillStyle = "black";
      stackB_canvas.fillText("Stack B","150","335");
  }
  else if(ctx===stackC_canvas)
  {
      stackC_canvas.font = "20px";
      stackC_canvas.fillStyle = "black";
      stackC_canvas.fillText("Stack C","150","335");
  }
  for(var i=0; i<stackhere.length; i++)
  {
      ctx.fillStyle = "#288ec8";
      ctx.fillRect(stack_demo.rectStartx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-((i+1)*stack_demo.rectHeight)-(i*stack_demo.lineDist), stack_demo.rectWidth, stack_demo.rectHeight);
  }
  ctx.closePath();
  ctx.beginPath();
  	
  for(var i=0; i<stackhere.length; i++) 
  {
      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
  		    
      txt = stackhere[i].toString();
      txtWidth = ctx.measureText(txt).width;
  		    
      txtX = stack_demo.rectStartx + (stack_demo.rectWidth-txtWidth)/2;
      txtY = stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(i*stack_demo.lineDist)-((i+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2+8;
  		    
      ctx.fillText(txt, txtX, txtY);  
  }
  
  ctx.closePath();
  if(tophere > -1) 
  {
      ctx.beginPath();
  		    
      ctx.moveTo(stack_demo.arrowStartx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2);
      ctx.lineTo(stack_demo.arrowEndx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2);
      ctx.strokeStyle = "#a4c652";
      ctx.lineWidth=1.5;
      ctx.stroke();
  		    
      ctx.moveTo(stack_demo.arrowStartx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2);
      ctx.lineTo(stack_demo.arrowStartx + stack_demo.arrowHeadOffsetx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2+stack_demo.arrowHeadOffsety);
      ctx.strokeStyle = "#a4c652";
      ctx.stroke();
                  		    
      ctx.moveTo(stack_demo.arrowStartx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2);
      ctx.lineTo(stack_demo.arrowStartx + stack_demo.arrowHeadOffsetx, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2-stack_demo.arrowHeadOffsety);
      ctx.strokeStyle = "#a4c652";
      ctx.stroke();
  
      txt = "Top";
      ctx.font = "18px Arial";
      ctx.fillStyle = "black";
      txtWidth = ctx.measureText(txt).width;
      ctx.fillText(txt, stack_demo.arrowEndx + 10, stack_demo.rectStarty+(stack_demo.lineDist*stack_demo.lineNo)+(stack_demo.rectNo*stack_demo.rectHeight)-(tophere*stack_demo.lineDist)-((tophere+1)*stack_demo.rectHeight)+stack_demo.rectHeight/2+18/2);
      ctx.closePath();
  }	
  }
  function onpause(){
      if(stack_demo.prev === -1){
      stack_demo.prev = document.getElementById("interval").value;
      if(stack_demo.interval != 0){ 
        clearInterval(stack_demo.interval);
      }
      stack_demo.ispaused = 1;
      document.getElementById("pause-stackdemo").value = "Play";
    }else{
      stack_demo.prev = -1;
      stack_demo.ispaused = 0;
      clearInterval(stack_demo.interval);
      stack_demo.interval = setInterval(pop_demo, 3400-document.getElementById("interval").value);
      document.getElementById("pause-stackdemo").value = "Pause";
    }
  }
  function onstart(){
  document.getElementById("pause-stackdemo").style.backgroundColor="#288ec8";
  document.getElementById("reset-stackdemo").style.backgroundColor="#288ec8";
  document.getElementById("pause-stackdemo").disabled = false;
  document.getElementById("reset-stackdemo").disabled = false;
  if(document.getElementById("interval").value === 100 || stack_demo.started ===1)
    {
      document.getElementById("start-stdemo").value = "Next";
      document.getElementById("start-stdemo").disabled = false;
      clearInterval(stack_demo.interval);
      if(stack_demo.ispaused==1){
          pop_demo();
      }
      else{
          pop_demo();
          stack_demo.interval = setInterval(pop_demo, 3400-document.getElementById("interval").value);
      }
      document.getElementById("pause-stackdemo").style.visibility = "visible";
    }
  else{
      document.getElementById("ins").innerHTML = "<b>Demonstration started</b>";
      document.getElementById("interval").value === 1500;
      document.getElementById("start-stdemo").value = "Next";
      stack_demo.started = 1;
      change_interval();
    }
  }
  function reload(){
    location.reload(true);
  };
  
  function handlers() { 
   document.getElementById("interval").oninput = function() { change_interval(); };
   document.getElementById("interval").onchange = function() { 
      if(document.getElementById("pause-stackdemo").value == "Play")return;
      else change_interval(); };
   document.getElementById("start-stdemo").onclick = function() { onstart(); };
   document.getElementById("reset-stackdemo").onclick = function() { reload(); };
   document.getElementById("pause-stackdemo").onclick = function() { onpause(); };
  };
  function initializeArtefact(){
      stack_demo.topOfStack = 6;
      stack_demo.demo_values = [];
      stack_demo.demo_valuesB = [];
      stack_demo.demo_valuesC = [];
      stack_demo.topB = -1;
      stack_demo.topC = -1;
      while(stack_demo.demo_values.length < 7){
          var random_number = Math.floor((Math.random() * 100) + 1) ;
          if(stack_demo.demo_values.indexOf(random_number) === -1) {
              stack_demo.demo_values.push(random_number);
          }
      }
      document.getElementById("interval").value = 1500;
      document.getElementById("start-stdemo").value = "Start";
      document.getElementById("pause-stackdemo").disabled = true;
      document.getElementById("reset-stackdemo").disabled = true;
      document.getElementById("pause-stackdemo").style.backgroundColor="grey";
      document.getElementById("reset-stackdemo").style.backgroundColor="grey";
  
      drawStackStructure(stackA_canvas);
      writeNumbers(stackA_canvas);
      drawStackStructure(stackB_canvas);
      writeNumbers(stackB_canvas);
      drawStackStructure(stackC_canvas);
      writeNumbers(stackC_canvas);
      handlers();
  }
  function push_common(ctx,value)
  {
      if(ctx === stackB_canvas){
          valueshere = stack_demo.demo_valuesB;
          tophere = stack_demo.topB;
      }
      else if(ctx === stackC_canvas)
      {
          valueshere = stack_demo.demo_valuesC;
          tophere = stack_demo.topC;
      }
      if (value === null || value === "")return;
      if(valueshere.length >= stack_demo.rectNo)return;
      else if (value===null || value==="") return;
      else
      {
  	valueshere.push(value);
          tophere++;
          if(ctx===stackB_canvas)
          {
              stack_demo.topB++;
          }
          else if (ctx===stackC_canvas)
          {
              stack_demo.topC++;
          }
      drawStackStructure(stackA_canvas);
      writeNumbers(stackA_canvas);
      drawStackStructure(ctx);
      writeNumbers(ctx);
      }   
  }
  function pop_demo(){
      if(stack_demo.topOfStack === -1)
      {
          document.getElementById("ins").innerHTML = "As stack A is empty.<br><b>Demonstration is complete!!.</b>";
      }
      else
      {
          pop_value = stack_demo.demo_values.pop();
      	stack_demo.topOfStack--;
          if(test_prime(pop_value))
          {
              document.getElementById("ins").innerHTML = "The number popped from stack A (i.e " + pop_value + ") is prime, so it is pushed into stack B";
              push_common(stackB_canvas,pop_value);
          }
          else{
              document.getElementById("ins").innerHTML = "The number popped from stack A (i.e " + pop_value + ") is not a prime, so it is pushed into stack C";
              push_common(stackC_canvas,pop_value);
          }
          if(stack_demo.topOfStack === -1)
          {
              document.getElementById("ins").innerHTML += "<br>As stack A is empty.<br><b>Demonstration is complete!!.</b>";
              document.getElementById("pause-stackdemo").disabled = true;
              document.getElementById("start-stdemo").disabled = true;
              document.getElementById("pause-stackdemo").style.backgroundColor="grey";
              document.getElementById("start-stdemo").style.backgroundColor="grey";
          }
      drawStackStructure(stackA_canvas);
      writeNumbers(stackA_canvas);
      }
  }
