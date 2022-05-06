const expect = require("chai").expect;

/* eslint-disable no-undef */
const { Queue, cardGame } = require("../checkpoint.js");

describe("EJERCICIO 6: cardGame", function () {
  var playerOne;
  var playerOneCopy;
  var playerTwo;
  var strongPlayer;
  var weakPlayer;

  beforeEach(function () {
    playerOne = new Queue();
    playerOneCopy = new Queue();
    playerTwo = new Queue();
    strongPlayer = new Queue();
    weakPlayer = new Queue();

    playerOne.enqueue({ attack: 5, defense: 5 });
    playerOne.enqueue({ attack: 15, defense: 10 });

    playerOne.enqueue({ attack: 28, defense: 26 });
    playerOne.enqueue({ attack: 5, defense: 12 });

    playerOne.enqueue({ attack: 21, defense: 18 });
    playerOne.enqueue({ attack: 15, defense: 12 });

    // Player One Copy
    playerOneCopy.enqueue({ attack: 5, defense: 5 });
    playerOneCopy.enqueue({ attack: 15, defense: 10 });
    playerOneCopy.enqueue({ attack: 28, defense: 26 });
    playerOneCopy.enqueue({ attack: 5, defense: 12 });
    playerOneCopy.enqueue({ attack: 21, defense: 18 });
    playerOneCopy.enqueue({ attack: 15, defense: 12 });

    playerTwo.enqueue({ attack: 20, defense: 26 });
    playerTwo.enqueue({ attack: 5, defense: 26 });

    playerTwo.enqueue({ attack: 15, defense: 15 });
    playerTwo.enqueue({ attack: 5, defense: 6 });

    playerTwo.enqueue({ attack: 22, defense: 1 });
    playerTwo.enqueue({ attack: 5, defense: 30 });

    // Strong Player
    strongPlayer.enqueue({ attack: 19, defense: 5 });
    strongPlayer.enqueue({ attack: 15, defense: 20 });
    strongPlayer.enqueue({ attack: 34, defense: 26 });
    strongPlayer.enqueue({ attack: 20, defense: 12 });
    strongPlayer.enqueue({ attack: 21, defense: 18 });
    strongPlayer.enqueue({ attack: 15, defense: 12 });
    strongPlayer.enqueue({ attack: 50, defense: 18 });
    strongPlayer.enqueue({ attack: 15, defense: 24 });
    strongPlayer.enqueue({ attack: 50, defense: 18 });
    strongPlayer.enqueue({ attack: 15, defense: 24 });

    // Player One Copy
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
    weakPlayer.enqueue({ attack: 5, defense: 5 });
  });

  it("Debe devolver al jugador ganador si se acabaron los mazos", function () {
    expect(cardGame(playerOne, playerTwo)).to.deep.equal("PLAYER TWO");
  });

  it('Debe devolver "TIE" si no hubo ganador al acabarse los mazos', function () {
    expect(cardGame(playerOne, playerOneCopy)).to.deep.equal("TIE");
  });

  it("Debe devolver al jugador ganador si destruyo el castillo enemigo", function () {
    expect(cardGame(strongPlayer, weakPlayer)).to.deep.equal("PLAYER ONE");
  });
});
