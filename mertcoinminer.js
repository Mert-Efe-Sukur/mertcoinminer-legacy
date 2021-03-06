var def = 0;
function benchmark (){
  console.log("Button pressed.");
  document.getElementById("address").innerHTML = "";
  var inputfield = document.getElementById("addressfield");
  inputfield.remove();
  console.log("Input field removed.");
  //Part of the code that does the benchmarking.
 document.getElementById("button").innerHTML ="";
 document.getElementById("status").innerHTML ="Benchmarking...";
console.log("Benchmarking...");

 try {
   function getVideoCardInfo() {
     const gl = document.createElement('canvas').getContext('webgl');
     if (!gl) {
       console.error("WebGL is not supported.");
       throw ("WebGL is not supported.");
       return {
         error: "no webgl",
       };
     }
     const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
     return debugInfo ? {
       vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
       renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
     } : {
       error: "no WEBGL_debug_renderer_info",
     };
   }
   
   var delayInMilliseconds = 5000; 
setTimeout(function() {
 console.log("Vendor: "+getVideoCardInfo().vendor+" Renderer: "+getVideoCardInfo().renderer);
   document.getElementById("benchmark").innerHTML = getVideoCardInfo().renderer;
 }, delayInMilliseconds);
   
   
 } catch {
   console.error("Failed Benchmark.")
   throw("Failed Benchmark.");
   
 }

 var delayInMilliseconds = 10000; 
setTimeout(function() {
  console.log("Benchmark Succeeded.");
  console.log("Mining...");
  mine();
 }, delayInMilliseconds);
 
}

function mine () {
  //Part of the code that does the mining.
  document.getElementById("mert").innerHTML ="Mertcoin Mined:";
  document.getElementById("status").innerHTML ="Mining...";
  document.getElementById("w").innerHTML ="Winning Hashes:";
  document.getElementById("benchmark").innerHTML ="";
  for (let i = 0; i < 10; i++) {
    
  Math.random();
var a = Math.floor(Math.random() * 10) + 1;
var b = Math.floor(Math.random() * 10) + 1;
var c = Math.floor(Math.random() * 10) + 1;
var d = Math.floor(Math.random() * 10) + 1;
var e = Math.floor(Math.random() * 10) + 1;
var f = Math.floor(Math.random() * 10) + 1;
var sum = ""+a+b+c+d+e+f;
var md = forge.md.sha256.create();
md.update(sum);
var hash = md.digest().toHex();
    
   // console.log(hash);
   // console.log(hash.startsWith("0000"));
    if (hash.startsWith("0000")){
      def = def + 0.0001;
      document.getElementById("amount").innerHTML = def.toFixed(4);
      document.getElementById("wh").innerHTML = hash;
    }

  
 
  }
  
  setInterval(mine, 1000);
}
