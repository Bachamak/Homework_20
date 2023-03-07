let setMath = (znak) => {
    return (...numbers) => {
        let str = numbers.reduce((a, b) => {
            return znak === '+' ? a += b :
            znak === '-' ? a - b :
            znak === '*' ? a * b :
            znak === '/' ? a / b :
            znak === '**' ? a ** b :
            a;
        });
        const condition = numbers.join(`${znak}`);
        return ` ${condition} = ${str} `;
        }
    }
    let funcWithMath = setMath('-');
    let res = funcWithMath(10,2,3);
    let res_1 = funcWithMath(3,1);

    console.log(res);
    console.log(res_1);
    
    let setNumbers  = (...numbers) => {
        return (znak) => {
            let str = numbers.reduce((a, b) => {
                return znak === '+' ? a += b :
                znak === '-' ? a - b :
                znak === '*' ? a * b :
                znak === '/' ? a / b :
                znak === '**' ? a ** b :
                a;
            });
            const condition = numbers.join(`${znak}`);
            return ` ${condition} = ${str} `;
            }
        }
let whatDo = setNumbers(10,2,3);
let whatDo_1 = setNumbers(3,1);

console.log(whatDo('-')); 
console.log(whatDo_1('+'));