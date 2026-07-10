import misc from "./acro_lsts/misc.js"
import wrlsAndMbl from "./acro_lsts/wrls_mble.js"
import cldAndVrtzn from "./acro_lsts/cld_vrtzn.js"
import cryptAndPki from "./acro_lsts/crypt_pki.js"
import ntwkAndInfra from "./acro_lsts/ntwk_infra.js"
import genConcepts from "./acro_lsts/gen_concepts.js"
import attksAndMlwre from "./acro_lsts/attks_mlwre.js"
import identityAccessManage from "./acro_lsts/ident_access_manag.js"

// Converts all the imported Arrays into readable json objects
const rawData1 = genConcepts
const genConceptList = JSON.parse(rawData1)

const rawData2 = identityAccessManage
const identityAccessList = JSON.parse(rawData2)

const rawData3 = cryptAndPki
const cryptPkiList = JSON.parse(rawData3)

const rawData4 = ntwkAndInfra
const ntwkInfraList = JSON.parse(rawData4)

const rawData5 = attksAndMlwre
const attkMlwreList = JSON.parse(rawData5)

const rawData6 = misc
const miscList = JSON.parse(rawData6)

const rawData7 = wrlsAndMbl
const wrlsMblList = JSON.parse(rawData7)

const rawData8 = cldAndVrtzn
const cldVrtznList = JSON.parse(rawData8)

const sidebar = document.querySelector('#topicSelection')
sidebar.onclick = (event) => {
    if (event.target.matches('h3.topic')) {
        const selection = event.target.textContent
        topicSelection(selection)
    }
}


// sets cardTopic to the correct list of acronyms to run
function topicSelection (selection) {
    let cardTopic

    if (selection == 'General Concepts') {
        cardTopic = genConceptList
    } else if (selection == 'Cryptography & PKI') {
        cardTopic = cryptPkiList
    } else if (selection == 'Identity & Access Management') {
        cardTopic = identityAccessList
    } else if (selection == 'Networking & Infrastructure') {
        cardTopic = ntwkInfraList
    } else if (selection == 'Threats Attacks & Malware') {
        cardTopic = attkMlwreList
    } else if (selection == 'Wireless & Mobile') {
        cardTopic =  wrlsMblList
    } else if (selection == 'Cloud & Virtualization') {
        cardTopic = cldVrtznList
    } else if (selection == 'Miscellaneous') {
        cardTopic = miscList
    }

    displayCards(cardTopic, selection)
}


// makes the for loop wait for the reveal button to be clicked
function waitForNext() {
    return new Promise((reslove) => {
        let nextCard = document.getElementById('next')
        let card = document.getElementById('flashCard')

        nextCard.onclick = () => {
            card.innerHTML = ''
            nextCard.onclick = null
            reslove()
        }
        
    })
}

// reveals the answer and purpose of the current acronym
function showAnswer(lAnswer, lPurpose) {

    const card = document.getElementById("flashCard")
    const answer = document.createElement("h4")
    const purpose = document.createElement("h4")
    answer.className = 'answer'
    purpose.className = 'purpose'
    answer.textContent = lAnswer
    purpose.textContent = lPurpose
    card.appendChild(answer)
    card.appendChild(purpose)

}

// displays select topic title
function showTopic(selection) {
    const topicTtleHldr = document.getElementById('selectedTopic')
    let tTitle = document.createElement('h2')
    tTitle.id = 'tTitle'
    tTitle.textContent = selection
    topicTtleHldr.appendChild(tTitle)
}

// displays correct cards and sets functionality to them
async function displayCards (cardTopic, selection) {

    const display = document.getElementById('displayArea')
    const card = document.getElementById("flashCard")
    const topicTtleHldr = document.getElementById('selectedTopic')
    topicTtleHldr.innerHTML = ''
    showTopic(selection)

    const acroAttempt = document.getElementById('acronymAttempt')
    const acroAttemptFull = document.getElementById('acronymAttemptFull')
    const purposeAttempt = document.getElementById('purposeAttempt')    

    const options = document.getElementById("options")
    let shwAnsr = document.getElementById("show")    

    for (const a of cardTopic) {        

        card.innerHTML = ''
        acroAttempt.value = ''
        acroAttemptFull.value = ''
        purposeAttempt.value = ''

        shwAnsr.style.color = 'white'
        card.style.visibility = "visible"
        options.style.visibility = "visible"

        let answer = a['definition']
        let purpose = a['purpose']

        const acronym = document.createElement("h4")
        acronym.className = "acronyms"
        acronym.textContent = a["acronym"]
        card.appendChild(acronym)

        shwAnsr.onclick = () => {
            showAnswer(answer, purpose)
            shwAnsr.style.color = 'gray'
            shwAnsr.onclick = null
        }

        await waitForNext()
    }
}



