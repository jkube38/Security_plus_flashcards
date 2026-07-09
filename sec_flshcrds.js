import misc from "./acro_lsts/misc.js"
import wrlsAndMbl from "./acro_lsts/wrls_mble.js"
import cldAndVrtzn from "./acro_lsts/cld_vrtzn.js"
import cryptAndPki from "./acro_lsts/crypt_pki.js"
import ntwkAndInfra from "./acro_lsts/ntwk_infra.js"
import genConcepts from "./acro_lsts/gen_concepts.js"
import attksAndMlwre from "./acro_lsts/attks_mlwre.js"
import identityAccessManage from "./acro_lsts/ident_access_manag.js"


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

console.log()
