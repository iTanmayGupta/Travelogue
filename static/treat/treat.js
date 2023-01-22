"use strict";


document.addEventListener('DOMContentLoaded', function() {
    var activeAddress = "";
    var activeName = "";
    let cardData = [{
            name: 'Stark Industries',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern1.jpeg",
            walletAddress: "0x4D19B23165bEbD6Bf7eCF8345EA7a54d10aAC42d"
        },
        {
            name: 'Kothur Indian Cuisine',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern2.jpeg",
            walletAddress: "0x4D19B23165bEbD6Bf7eCF8345EA7a54d10aAC42d"
        },
        {
            name: 'Chelsea Cutler',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern3.jpeg",
            walletAddress: "0x9fdb5065c5f5cbeef0fb9784bc2e8e1b3621d58a"
        },
        {
            name: 'MKBHD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern4.jpeg",
            walletAddress: "0xfbb61b8b98a59fbc4bd79c23212addbefaeb289f"
        },
        {
            name: 'Mickey Mouse Club House',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern5.jpeg",
            walletAddress: "0x3c0e319ced31717b5c6dc921610423e9a748eee6"
        },
        {
            name: 'Matt Stonie',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern6.jpeg",
            walletAddress: "0x6f0979e2e7aa0dfbc23cf06e46a99735e165f027"
        },
        {
            name: 'Erin Yeager',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern7.jpeg",
            walletAddress: "0x2f318C334780961FB129D2a6c30D0763d9a5C970"
        },
        {
            name: 'Eddies Pawn Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern8.jpeg",
            walletAddress: "0x2f318C334780961FB129D2a6c30D0763d9a5C970"
        },
        {
            name: 'Corner Store 1122',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde quibusdam, saepe rem totam minus culpa fugit, rerum alias similique obcaecati natus sequi reprehenderit eos cupiditate aliquam vel ullam nesciunt?',
            image: "../static/treat/pattern9.jpeg",
            walletAddress: "0x2f318C334780961FB129D2a6c30D0763d9a5C970"
        }
    ]
    let cont = document.getElementById("c1")
    let payH = document.getElementById("paymentH")

    for(let i=0; i < cardData.length; i++){
        let image = document.createElement('img')
        image.classList.add('card-img-top')
        // image.alt="..."
        image.src=cardData[i].image

        let cardBody = document.createElement('div')
        cardBody.classList.add("card-body")

        let heading = document.createElement('h5')
        heading.classList.add("card-title")
        heading.innerHTML = cardData[i].name

        let content = document.createElement('p')
        content.classList.add("card-text")
        content.innerHTML = cardData[i].description

        let button = document.createElement('a')
        button.href = "#"
        button.classList.add("btn" , "border-danger",  "text-danger",  "btn-sm")
        button.id = "enableEthereumButton"
        button.innerHTML = "Send Candii!"

        button.addEventListener('click', () => {
            activeAddress = cardData[i].walletAddress
            console.log(activeAddress)
            activeName = cardData[i].name

            let marker = document.createElement("mark")
            marker.classList.add("red")
            marker.innerText = "Candii"

            payH.innerHTML = 
                "Send <mark class='red'>Candii</mark> and show some 💖 to <p><mark class='red'>" + activeName + "</mark></p>"
            
            // let marker = document.createElement('mark')
            // marker.innerHTML = " to " + activeName
            // marker.classList.add("red")
            // payH.append(marker)
        })

        let card = document.createElement('div')
        card.classList.add("card")

        let mainClass = document.createElement('div')
        mainClass.classList.add("col-lg-4", "mb-3")

        card.append(image)
        cardBody.append(heading)
        cardBody.append(content)
        cardBody.append(button)
        card.append(cardBody)
        mainClass.append(card)
        cont.append(mainClass)
    }

    let amount = document.querySelectorAll(".amountNum")
        for(let i=0; i<amount.length; i++) {
        amount[i].addEventListener('click', () => {
            let amt = amount[i].innerHTML
            let finalAmount = document.querySelector("#finalAmount")
            finalAmount.value = amt
            console.log(finalAmount)
        })
    }

        const ethereumButton = document.querySelector('#enableEthereumButton');
        const sendEthButton = document.querySelector('#sendMoney');

        console.log(ethereumButton)

        let accounts = [];

        //Sending Ethereum to an address
        sendEthButton.addEventListener('click', () => {
            let finalAmount = document.querySelector("#finalAmount")
            console.log(activeAddress)
        ethereum
            .request({
            method: 'eth_sendTransaction',
            params: [
                {
                from: accounts[0],
                to: activeAddress,
                value: Number(10000000000011*finalAmount.value).toString(16),
                gasPrice: '0x09184e72a000',
                gas: Number(10000000000011*finalAmount.value).toString(16)/10000000000001,
                },
            ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
        });

        ethereumButton.addEventListener('click', () => {
        getAccount();
        });

        async function getAccount() {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        
    }
})