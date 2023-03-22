var randLoc = Math.floor(Math.random() * 5);
var loc1 = randLoc;
var loc2 = loc1 + 1;
var loc3 = loc2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Привет! Это игра в морской бой. В данной игре поле состоит из 7 ячеек, пронумерованных от 0 до 6 и корабля, состоящего из 3 ячеек.  Ваша задача потопить корабль за наименьшее количество шагов. Удачи! (Введите число от 0 до 6):");
    
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите число из заданного диапазона!");
    } else {
        guesses++;

        if (guess == loc1 || guess == loc2 || guess == loc3) {
            alert("Попадание!");
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert("Ты потопил мой корабль!");
            }
        } else {
            alert("Промах!");
        }
    }
}

var stats = "Вы потопили мой корабль за " + guesses + " попыток, " +
                "вероятность вашего попадания составляет " + (3 / guesses);

alert(stats);