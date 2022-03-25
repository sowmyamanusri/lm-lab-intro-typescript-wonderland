import { askQuestion, clear, print } from '../console';
import { endAdventure, haveAdventures } from '..';

const prerequisite: Array<string> = ['tracksuit', 'waterbottle', 'shoes', 'walk tracker', 'ipod'] ;

const gearForWalk: Array<string> = [];
let ready : string = '';

prerequisite.forEach(item =>{gearForWalk.push(item)});


export function goForWalk(): void {
    clear(false);
    print('Make your bed!!!')
    print('Brushing your teeth is not only great hygiene,but it helps you wake and feel alert!!')
    print('Wait ... Am I ready for walk?')
  


    print('------------------------');
    print(' Is the prerequisite for the walk met ?');
    prerequisite.forEach((item, i) => { 
        print(`${i} -> ${item}`) 
    });
    console.log('ReadyWithItems : ' +  gearForWalk);
  askQuestion('Are you ready for walk with all the items checked in the gearForWalk, press the number 5?', startWalk);
  
}
function startWalk(ready:string): void {
    clear(true);
    const number = parseInt(ready);

	if (isNaN(number)) {
		print(`😮`);
		print(`That's not a number 😭`);
		return endAdventure();
	}

	if (number < 0 || number > gearForWalk.length || number < gearForWalk.length) {
		print(`😮`);
		print(`${number} is an invalid number 😭`);
		return endAdventure();
	}
  if(ready== '5') {
    print('YAY!!! You are ready for walk!!🥳');
  print('✅ CONGRATULATIONS! You enjoy Wonderland walk 🥳');
    return askQuestion(
        'Press ENTER to re-enter Wonderland! ',
        haveAdventures
    )}else {
        print(`WHAAAAT ❓🤯😅❓`);
        print('You are not ready for walk!!');
        return endAdventure();
}
}
