 function convert() {
            let rupees = document.getElementById("rupees").value;
            let rate = 0.012; 
            let dollars = (rupees * rate).toFixed(2);

            document.getElementById("output").innerHTML =
                `💲 ${rupees} INR = <span style="color:yellow">${dollars} USD</span>`;
        }