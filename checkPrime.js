function primeCheck()
            {
            let a =parseInt(document.getElementById("demo").value)
            console.log(a,typeof(a))
            let sum=0
            for(let i=1;i<=a;i++)
            {
               
                if(a%i===0)
                {
                    sum+=i
                }
                
            }
            
            if(sum===(a+1))
            {
                alert(`${a} is prime number `)
            }
            else
            {
                alert(`${a} is not prime number `)
            }
        }