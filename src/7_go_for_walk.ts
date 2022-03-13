import { askQuestion, askQuestion2, clear, print } from '../console';
import { endAdventure ,haveAdventures} from '..';

 const prerequisite = [ 'tracksuit','waterbottle','shoes','walk tracker','ipod','all gears are equipped'] as const;
 type Prerequisite = typeof prerequisite[number];


export function goForWalk() :void{
    clear(false);
    print('Make your bed!!!')
    print('Brushing your teeth is not only great hygiene,but it helps you wake and feel alert!!')
    print('Wait ... Am I ready for walk?')

   
    print('------------------------');
	print(' Is the prerequisite for the walk met ?');
    prerequisite.forEach((item,i) => print(`${i} -> ${item}`));
    askQuestion('Are you ready for walk?', startWalk);
}

function startWalk(item:string):void {
    clear(true)
    const number = parseInt(item);
    if(prerequisite[number] === 'all gears are equipped') {
        print('✅ CONGRATULATIONS! You enjoy Wonderland walk 🥳');
        return askQuestion(
			'Press ENTER to re-enter Wonderland! ',
			haveAdventures
		);
      }else{
        print(`WHAAAAT ❓🤯😅❓`);
		print('You are not ready for walk!!');
		return endAdventure();
     }
}
   