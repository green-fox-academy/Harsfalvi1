/*BattleApp
Create a BattleApp class, where you can fight with ships
Create 2 ships, fill them with pirates
Have a battle!*/
import { Pirate } from "./pirate";
import { Ship } from "./ship";

export class BattleApp{
    private ship = new Ship ("Queen Anne's Revenge");
    private enemyShip = new Ship ("Fancy");

    shipBattle(){
        this.ship.fillShip();
        this.enemyShip.fillShip();
        console.log(this.ship.toString());
        console.log(this.enemyShip.toString());
        
        this.ship.battle(this.enemyShip);
        console.log(this.ship.toString());
        console.log(this.enemyShip.toString());
}
}

let battle = new BattleApp;
battle.shipBattle();
