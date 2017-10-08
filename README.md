
# Learnig JS

Here you will see my first steps in JS. There are some interestings excercises with real aplications, like Luhn algorithm. 

## What's Luhn algorithm?
The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers and Greek Social Security Numbers (ΑΜΚΑ)...

##### If you want to know more about Luhn check out next link: [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)

### What did I do?
The challenge was apply Luhn algorithm in JS without using arrays. 
We found many ways to reach that task. This one is one o them: [Luhn excercise](Luhn.js)

```
var numero="4509953566233704";
var isSecondDigit= false;
var total=0;
console.log(numero);

for(var i = numero.length - 1; i >= 0 ; i--){
	var x= parseInt(numero.charAt(i));
		if (isSecondDigit==true){
			x=x*2;
		  if (x>9) {
			x-=9;
		}
		total+=x;
	    esSegundoDigit=false;
	}
	else {
		total+=parseInt(numero.charAt(i));
		isSecondDigit=true;
	}
}
console.log("The total is: "+total);
if (total%10===0){
	alert("Correct number");
}
else {
	alert("Incorrect number");
}

```

#### Math tricks :stuck_out_tongue_winking_eye: :
In that case, when we have to add the digits of the product, and as know that number can't be more than 18, we can subtract it with 9 and become it in one digit. Let's see that part in the code:

```
if (isSecondDigit==true){
			x=x*2;
		  if (x>9) {
			x-=9;
		}
```

### Next challenge was to know what is the verifynumber. 
So instead of having 16 number we start with 15. The most part of code is similar to the othe other one. What did I change? The way I initialized that variable:
`var esSegundoDigito= true;`
[Verify number excercise](numeroverificador.js)
 
##### Math tricks: As you the Luhn algorithm say, the total must be modulo 10 equal 0. 
The function modulo is "a%b=c". So with the verify number it must be "a%10=0". But we don't have it. 
Ex. total=67 --> 67%10=7 --> if we want that number be modulo 10 --> 10-7=3 --> 3 is the verify number.
So the formula would be "b-a%b=verfynumber"

Here the code: 
```
var verifynumber=0;
verifynumber= 10-(total%10);
console.log(verifynumber);
```





#### Next challenge: Caesar cipher!!! :stuck_out_tongue_winking_eye:

