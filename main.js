



const phone = prompt('Push your number', '')

alert(formattedPhone(phone))

function formattedPhone(phone) {
	if(phone.length<11){
		alert ('Push Number!!!')
	}
  for (let i=0; i<phone.length; i++)
  { let result = 
        phone.charAt(0)+phone.charAt(1)+ ' '+
        '('+phone.charAt(2)+phone.charAt(3)
        +phone.charAt(2)+')'+' '+phone.charAt(3)
        +phone.charAt(4)+phone.charAt(5)+'-'+
        +phone.charAt(6)+phone.charAt(7)+'-'+
        +phone.charAt(8)+phone.charAt(9)
      return result}
}

