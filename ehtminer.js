const https = require("https");
var url = "https://api.ethermine.org/miner/0x2c05c58775E35b1C576bC5F5Ec593b2e87587817/currentStats";



function getBx(){
  const url ="https://bx.in.th/api/orderbook/?pairing=20";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });

  res.on("end", () => {
    body = JSON.parse(body);
    //console.log("BX       Bids = "+body.bids[0][0]+"   volume = "+body.bids[0][1]);
    //console.log("BX       Asks = "+body.asks[0][0]+"   volume = "+body.asks[0][1]);
     bx = new OrderBook(body.bids[0][0],body.bids[0][1],body.asks[0][0],body.asks[0][1]);
    //console.log(bx);
    return bx;
  });
});

}


function getMiner(){
  const url ="https://api.ethermine.org/miner/0x2c05c58775E35b1C576bC5F5Ec593b2e87587817/currentStats";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });

  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body.data.unpaid);
    //return body;
  });
});

}

function getMiner();