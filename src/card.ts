// class Card
//   constructor: (str) ->
//     @value = str.substr(0,1)
//     @suit = str.substr(1,1).toLowerCase()
//     @rank = Card.VALUES.indexOf(@value)

//   toString: ->
//     if @rank == 0
//       "A#{@suit}(Low)"
//     else
//       "#{@value}#{@suit}"

// Card.VALUES=['1','2','3','4','5','6','7','8','9','T','J','Q','K','A']
// Card.sort = (a,b) ->
//   if a.rank > b.rank
//     -1
//   else if a.rank < b.rank
//     1
//   else
//     0

// exports.Card = Card

class Card {
    value : string;
    suit : string;
    rank : number;

    constructor(str: string) {
        this.value = str.substr(0,1);
        this.suit = str.substr(1,1).toLowerCase();
        this.rank = Card.VALUES.indexOf(str);
    }

    toString() : string {
        if (this.rank == 0) {
            return `A#${this.suit}(Low)`
        } else {
            return `${this.value}${this.suit}`
        }
    }

    static VALUES = ['1','2','3','4','5','6','7','8','9','T','J','Q','K','A'];

    static sort(a: Card, b: Card ): number {
        if (a.rank > b.rank) {
            return -1;
        } else if (a.rank < b.rank) {
            return 1;
        } else {
            return 0;
        }
    }
}