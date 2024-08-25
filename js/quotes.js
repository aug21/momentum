const quotes = [
	{
		quote: "From fairest creatures we desire increase, That thereby beauty's rose might never die.",
		author: "Shakespeare's Sonnets 1 by William Shakespeare"
	},
	{
		quote: "But if the while I think on thee, dear friend, All losses are restored and sorrows end.",
		author: "Shakespeare's Sonnets 30 by William Shakespeare"
	},
	{
		quote: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate.",
		author: "Shakespeare's Sonnets 18 by William Shakespeare"
	},
	{
		quote: "That time of year thou mayst in me behold, When yellow leaves, or none, or few, do hang.",
		author: "Shakespeare's Sonnets 73 by William Shakespeare"
	},
	{
		quote: "So are you to my thoughts as food to life, Or as sweet seasoned showers are to the ground.",
		author: "Shakespeare's Sonnets 75 by William Shakespeare"
	},
	{
		quote: "My love is strengthened, though more weak in seeming; I love not less, though less the show appear.",
		author: "Shakespeare's Sonnets 102 by William Shakespeare"
	},
	{
		quote: "When I have seen by Time's fell hand defaced The rich-proud cost of outworn buried age.",
		author: "Shakespeare's Sonnets 64 by William Shakespeare"
	},
	{
		quote: "Love's not Time's fool, though rosy lips and cheeks Within his bending sickle's compass come.",
		author: "Shakespeare's Sonnets 116 by William Shakespeare"
	},
	{
		quote: "Against the wrackful siege of battering days When rocks impregnable are not so stout.",
		author: "Shakespeare's Sonnets 65 by William Shakespeare"
	},
	{
		quote: "For sweetest things turn sourest by their deeds; Lilies that fester smell far worse than weeds.",
		author: "Shakespeare's Sonnets 94 by William Shakespeare"
	}
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;