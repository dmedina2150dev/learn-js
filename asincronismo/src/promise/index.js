const somethingWillHappen =  () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Verdadero')
            }, 2000)
        } else {
            const error = new Error('WHooops!');
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('then encadenado que se puede hacer si necesitas'))
    .catch( error => console.error(error) )


    // corre las dos promesas y regresa un arreglo con las resolve
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then( res => {
        console.log('Array of resulst', res);
    })
    .catch( err => {
        console.error(err);
    })