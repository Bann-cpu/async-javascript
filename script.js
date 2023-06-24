/*const nom = "Miriam"; 
const salutation = `Bonjour, je m'appelle ${nom} !`;

console.log(salutation);


Le programme attend que la tâche précedente soit réalisé pour démarrer l'autre
= Programme synchrone


function createSalutation(blaze) {
    return `bonjour, tu t'appelles ${blaze}`;
}

const name = "Jaques";
const salute = createSalutation(nom)
console.log(salute);


Programme une fois de plus synchrone
*/

/*function generateNbPremiers(quota) {
    function isPrem(n) {
        for (let c = 0; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const nbPremiers = [];
    const maximumQuota = 1000000;

    while (nbPremiers.length < maximumQuota) {
        const numberCreate = Math.floor(Math.random() * (maximumQuota + 1));
        if (generateNbPremiers(numberCreate)) {
            nbPremiers.push(candidat);
        }
    }
    return nbPremiers;
}


document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector(`#quota`).value;
    const nbPremiers = generateNbPremiers(quota);
    document.querySelector("#ouput").textContent = `Génération de ${quota} nombre premiers terminée !`;
})


document.querySelector("#recharge").addEventListener("click", () => {
    document.location.reload();
})*/

function faireOperation1(init, callback) {
    const resultat = init + 1;
    callback(params)
}

function faireOperation2(init, callback) {
    const resultat = init + 2;
    callback(params)
}
function faireOperation3(init, callback) {
    const resultat = init + 3;
    callback(params)
}

function faireOperation() {
    faireOperation1(0, resultat1 => {
        faireOperation2(resultat1, resultat2 => {
            faireOperation3(resultat2, resultat3 => {
                console.log(`Résultat : ${resultat3}`);
            })
        })
    })
}

operationStart();


/* Les callbacks sont penibles on appelle ça callback hell, c'est pourquoi de nos jours les 
frameworks utilisent les promesses */