const messages=[

    'oscar',
    'ana',
    'carolina',
    'nexu',
    'nicolay',
    'yesica',
    'diego',
    'laura'
]

const randomMsg= ()=>{
    const message= messages[Math.floor(Math.random()*messages.length)
    ]
    console.log(message)
}

module.exports={randomMsg}