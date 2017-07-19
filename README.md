# Hanafuda (also known as Koi-Koi)

#### An Epicodus team week project proposal utilizing Angular2, 07.10.17

#### **By Anabel Ramirez, Ethan, Jenna, Dylan**

## Description

This web application will allow two players to play the card game Hanafuda. The game itself was brought to Japan in 1549 by a Portuguese missionary. It is also played in Hawaii and South Korea. The card art to be used in this project is a tribute to the traditional artwork.

## Specs

|Behavior|Input|Output|
|---|:---|:---|
|Game will have a deck of 48 cards.| 48 cards|48 cards|
|Game will have two players.| Player1, Player2|Player1, Player2|
|Eight cards are dealt face-down to each player.| Player1: 8cards, Player2: 8 cards|Player1: 8cards, Player2: 8 cards|
|Player with earliest birthday is the dealer.|Player1=Jan, Player2=March|Player1 is dealer|
|Play starts with the dealer and proceeds counterclockwise.| Player1, clockwise is Player2|Player1, clockwise is Player2|
|The player takes a card that was dealt to them and matches suit with a card that is on the table.|"Matsu" match to "Poetry Ribbon" in January suit|"Matsu" match to "Poetry Ribbon" in January suit|
|If there isn't a matching card, the player discards a card to the center of the table.|"discards card to center of table"|"top stock card is turned face up"|
|If there is a matching suit on the playing field, the player takes the cards.| "player takes cards"|"player takes cards"|
|If there is no matching suit on the playing field, the stock card is added to the playing field.| "card added to the playing field"| "card added to the playing field"|
|Play ends when either the stock is exhausted or either player's hand is empty.| stock exhausted or player's hand is empty |stock exhausted or player's hand is empty |
|If a player is dealt four pairs or two complete suits, that player automatically wins the round.| Player1: 4 pairs or 2 complete suits|Player1 wins|
|If there are a number of cards on the playing field of one suit, and a player has the rest of the suit in hand, this is a hiki. | Player1 has a hiki|Player1 has a hiki|
|The player may take the entire suit of cards on their turn instead of playing a card from their hand. |Player1 takes entire suit|Player1 takes entire suit|
|Trying to take a card from a hiki with the storm card is an illegal move.|storm card present|hiki illegal|
|If the cards are dealt so that all four of one suit are on the playing field, the cards are shuffled and redealt.|four cards on playing field|cards shuffled, redealt|
|If three cards are on the table, they are stacked together and the remaining card takes all three.|3 cards on table|stacked together and the remaining card takes all three|
|At the end of the round, each player adds the value of all cards they have taken.|Players tally up value of cards|player1: tally, player2: tally|
|the winner of the match gets all the points the opponent has accumulated in that round.|Player1 wins round|Player1 + Player2 tally for the round|
|In case of a tie, dealer wins.|Player1 tally = Player2 tally|Dealer wins|

## Further Exploration

|Behavior|Input|Output|
|---|:---|:---|
|User can view scores of several games.| 3 games played|score, score, score|
|User can view accumulated score of several games.| 3 games played|totaled score|
|User can see their place on a leaderboard.| 3 games played, totaled score|totaled score placement on leaderboard|
|User can play Yaku with the deck.| click choose game|select Yaku game|


## Card Database
There are twelve suits, representing months. Each is designated by a flower, and each suit has four cards. Typically, each suit will have two normal cards and two special cards. The point values could be considered unnecessary and arbitrary, as the most popular games only concern themselves with certain combinations of taken cards. For this project, we will start with the point values.

|Month|Flower|Cards|
|---|:---|:---|
|January|Matsu (pine)|Two Normals (1 point), one Poetry Ribbon (5 points) and one Special: Crane and Sun (20 points)|
|February|Ume (plum blossom)|Two Normals (1 point), one Poetry Ribbon (5 points) and one Special: Bush-warbler in a Tree (10 points)|
|March|Sakura (cherry blossom)|Two Normals (1 point), one Poetry Ribbon (5 points) and one Special: Camp Curtain (20 points)|
|April|Fuji (wisteria)|Two Normals (1 point), one Red Ribbon (5 points) and one Special: Cuckoo (10 points)|
|May| Ayama (iris)| Two Normals (1 point), one Red Ribbon (5 points) and one Special: Water Iris and Eight-plank Bridge (10 points)|
|June|Botan (peony)|Two Normals (1 point), one Purple Ribbon (5 points) and one Special: Butterflies (10 points)|
|July| Hagi (bush clover)| Two Normals (1 point), one Red Ribbon (5 points) and one Special: Boar (10 points)|
|August|Susuki (Susuki grass)|Two Normals (1 point), two Specials: Geese in Flight (10 points), Full Moon with Red Sky (20 points)|
|September|Kiku(chrysanthemum)|Two Normals (1 point), one Purple Ribbon (5 points) and one Special: Poetry Sake Cup (10 points)|
|October|Momiji|Two Normals (1 point), one Purple Ribbon (5 points) and one Special: Deer and Maple (10 points)|
|November|Yanagi(willow)|One Red Ribbon (5 points) and three Specials: Lightning (1 point), Swallow (10 points), Ono no Michikaze ("Rainman") with Umbrella and Frog (20 points)|
|December|Kiri (paulownia)|Three Normals (1 point, one off-shaded), and one Special: Chinese Phoenix (20 points)|


## Rules

|Focus|Description|
|---|:---|
|Objective | Accumulate more points than the opponent. Either a set number of rounds is played, a point goal is set to determine the winner, or players try to get so many more points than their opponent.|
|Rules of play| Cards are shuffled and placed into a pile (called the stock). Eight cards are placed face up between the players, and then eight cards are dealt face-down to each player. If there are more than two players, then the hand size is decreased.|
|Play| Play starts with the dealer and proceeds counterclockwise. The player takes a card that was dealt to them and matches suit with a card that is on the table. If there isn't a matching card, the player discards a card to the center of the table. Then, the top stock card is turned face up, and if there is a matching suit on the playing field, the player takes the cards, otherwise the stock card is added to the playing field.<br><br>Play ends when either the stock is exhausted or either player's hand is empty.<br><br>If a player is dealt four pairs or two complete suits, that player automatically wins the round. Scoring for this instance varies, but can be the value of the cards in the playing field.|
|Hiki| If there are a number of cards on the playing field of one suit, and a player has the rest of the suit in hand, this is a hiki. The player may take the entire suit of cards on their turn instead of playing a card from their hand. Trying to take a card from a hiki with the storm card is an illegal move. If the cards are dealt so that all four of one suit are on the playing field, the cards are shuffled and redealt. If three cards are on the table, they are stacked together and the remaining card takes all three.|
|Scoring| At the end of the round, each player adds the value of all cards they have taken.<br><br>In some variations, 'winner takes all', meaning the winner of the match gets all the points the opponent has accumulated in that round.<br><br> Card sets and scoring can vary by which variant of Hanafuda is being played.|
|Oya-gachi| In case of a tie, dealer wins. If the dealer isn't involved with the tie, the player closest to the dealer's left wins.|


## Design Keyframe Draft

The game cards would look similar to these: (To Be Added)


## Technologies Used

* Angular
* HTML
* CSS
* Bootstrap
* SASS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez (add contributors here)**
