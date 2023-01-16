/* make basic server
 function as a parameter in node
 arrow function
 get output on browser
*/
// http -> NodeJs ke andar server ki request or response ko handle krta hai
const http = require("http");

function dataControl(req, res) {
  res.write("H! There, this is me Jagmeet singh");
  res.end();
}

http.createServer(dataControl).listen(4500);
