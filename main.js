const fs = require('fs');


function decodeValue(base, value) {
    
    return parseInt(value, base);
}


function lagrangeInterpolation(points) {
    let constantTerm = 0;
    
    const k = points.length;
    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        let term = yi; 
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                
                term *= (0 - xj) / (xi - xj);
            }
        }
        constantTerm += term;
    }

    return Math.round(constantTerm); 
}


function findSecretFromPolynomial(inputFile) {
    
    const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

    
    const n = data.keys.n;
    const k = data.keys.k;

   
    const points = [];
    for (let i = 1; i <= n; i++) {
        if (data[i]) {
            const x = parseInt(i);  
            const base = parseInt(data[i].base); 
            const value = data[i].value;  
            const y = decodeValue(base, value);  
            points.push({ x, y });
        }
    }

   
    points.sort((a, b) => a.x - b.x);

  
    const secret = lagrangeInterpolation(points.slice(0, k));

    
    console.log(`The secret constant term (c) for ${inputFile} is: ${secret}`);
}


findSecretFromPolynomial('testcase1.json');
findSecretFromPolynomial('testcase2.json');
