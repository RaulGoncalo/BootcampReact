// EXEMPLO 1 - CRIAÇÃO DE PROMISSE E EXECUÇÃO
/*const p1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Sucesso P1") }, 2000)
});

p1.then((res) => { console.log(res) }, (rej) => { });

new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Sucesso P1") }, 2000)
}).then((res) => { console.log(res) }, (rej) => { });

//EXEMPLO 2 - CRIAÇÃO DA PROMISSE COM O CATCH

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Sucesso P2") }, 2000)
});


p2.then((res) => { console.log(res) });
p2.catch((rej) => { });


p2.then((res) => { console.log(res) }).catch((rej) => { });


//EXEMPLO 3 - CATCH UNICO PARA TODAS AS REIJEIÇÕES

const p3 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Sucesso P3");
    } else {
        reject("Falha P3");
    }
});


p3.then(console.log).catch(console.error);
*/

//EXEMPLO 4 - 
/*
const p4 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Sucesso P4");
    } else {
        reject("Falha P4");
    }
});

p4.then(function acao1(res) { console.log(`${res} - da ação 1`); return res })
    .then(function acao2(res) { console.log(`${res} - da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} - da ação 3`); return res })
    .catch(function erro(rej) { console.log(rej) });


//EXEMPLO 5 - 

const p5 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Sucesso p5");
    } else {
        reject("Falha p5");
    }
});

p5.then(function acao1(res) { console.log(`${res} - da ação 1`); return res })
    .catch(function erro1(rej) { console.log("Erro no primeiro catch"); return rej })
    .then(function acao2(res) { console.log(`${res} - da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} - da ação 3`); return res })
    .catch(function erro2(rej) { console.log(rej) });



//EXEMPLO 6
const p6 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Sucesso P6");
    } else {
        reject("Falha P6");
    }
});

p6.catch(function erro1(rej) { console.log("Erro no primeiro catch p6"); return rej })
    .catch(function erro2(rej) { console.log(rej) });


p6.then(function acao1(res) { console.log(`${res} - da ação 1`); return res })
    .then(function acao2(res) { console.log(`${res} - da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} - da ação 3`); return res })
*/
//EXEMPLO 7

const p7 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Sucesso P7");
    } else {
        reject("Falha P7");
    }
});

p7.catch(function erro1(rej) { console.log("Erro 1 no primeiro catch p7"); return rej });
p7.then(function acao1(res) { console.log(`${res} - da ação 1`); throw new Error("Erro"); })
    .catch(function erro2(rej) { console.log("Erro 2 da ação 1"); return rej })
    .then(function acao2(res) { console.log(`${res} - da ação 2`); return res })
    .then(function acao3(res) { console.log(`${res} - da ação 3`); return res })
    .catch(function erro3(rej) { console.log('Erro 3 - da ação 2 e 3') });