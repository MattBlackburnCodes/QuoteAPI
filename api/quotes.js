export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
    }

    const quotes = [
        { 
            q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
            a: "Winston Churchill" 
        },
        { 
            q: "The only limit to our realization of tomorrow is our doubts of today.", 
            a: "Franklin D. Roosevelt" 
        },
        { 
            q: "Do what you can, with what you have, where you are.", 
            a: "Theodore Roosevelt" 
        },
        { 
            q: "It always seems impossible until it's done.", 
            a: "Nelson Mandela" 
        },
        { 
            q: "Believe you can and you're halfway there.", 
            a: "Theodore Roosevelt" 
        },
        { 
            q: "Act as if what you do makes a difference. It does.", 
            a: "William James" 
        },
        { q: 
            "Happiness depends upon ourselves.", 
            a: "Aristotle" 
        },
        { 
            q: "In the middle of every difficulty lies opportunity.", 
            a: "Albert Einstein" 
        },
        { 
            q: "Keep your face always toward the sunshine, and shadows will fall behind you.", 
            a: "Walt Whitman" 
        },
        { 
            q: "No one can make you feel inferior without your consent.", 
            a: "Eleanor Roosevelt" 
        },
        { 
            q: "Do not wait to strike till the iron is hot, but make it hot by striking.", 
            a: "William Butler Yeats" 
        },
        { 
            q: "You miss 100% of the shots you don’t take.", 
            a: "Wayne Gretzky" 
        },
        { 
            q: "We become what we think about.", 
            a: "Earl Nightingale" 
        },
        { 
            q: "Strive not to be a success, but rather to be of value.", 
            a: "Albert Einstein" 
        },
        { 
            q: "The only way to do great work is to love what you do.", 
            a: "Steve Jobs" 
        },
        { 
            q: "Opportunities don't happen. You create them.", 
            a: "Chris Grosser" 
        },
        { 
            q: "Don't watch the clock; do what it does. Keep going.", 
            a: "Sam Levenson" 
        },
        { 
            q: "Dream big and dare to fail.", 
            a: "Norman Vaughan" 
        },
        { 
            q: "It does not matter how slowly you go as long as you do not stop.", 
            a: "Confucius" 
        },
        { 
            q: "Difficulties in life are intended to make us better, not bitter.", 
            a: "Dan Reeves" 
        },
        { 
            q: "Go confidently in the direction of your dreams. Live the life you have imagined.", 
            a: "Henry David Thoreau" 
        },
        { 
            q: "Success is getting what you want. Happiness is wanting what you get.", 
            a: "Dale Carnegie" 
        },
        { 
            q: "Act as if what you do makes a difference. It does.", 
            a: "William James" 
        },
        { 
            q: "I am not a product of my circumstances. I am a product of my decisions.", 
            a: "Stephen R. Covey" 
        },
        { 
            q: "If you’re going through hell, keep going.", 
            a: "Winston Churchill" 
        },
        { 
            q: "Do what you feel in your heart to be right, for you’ll be criticized anyway.", 
            a: "Eleanor Roosevelt" 
        },
        { 
            q: "Work hard in silence, let success make the noise.", 
            a: "Frank Ocean" 
        },
        { 
            q: "The best way to predict the future is to create it.", 
            a: "Peter Drucker" }
            ,
        { 
            q: "A person who never made a mistake never tried anything new.", 
            a: "Albert Einstein" 
        },
        { 
            q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
            a: "Ralph Waldo Emerson" 
        },
        { 
            q: "You only live once, but if you do it right, once is enough.", 
            a: "Mae West" 
        },
        { 
            q: "Don’t count the days, make the days count.", 
            a: "Muhammad Ali" 
        },
        { 
            q: "He who has a why to live can bear almost any how.", 
            a: "Friedrich Nietzsche" 
        },
        { 
            q: "Your time is limited, so don’t waste it living someone else’s life.", 
            a: "Steve Jobs" 
        },
        { 
            q: "Be yourself; everyone else is already taken.", 
            a: "Oscar Wilde" 
        },
        { 
            q: "It is not length of life, but depth of life.", 
            a: "Ralph Waldo Emerson" 
        },
        { 
            q: "The only impossible journey is the one you never begin.", 
            a: "Tony Robbins" 
        },
        { 
            q: "I have not failed. I've just found 10,000 ways that won't work.", 
            a: "Thomas Edison" 
        },
        { 
            q: "Failure is simply the opportunity to begin again, this time more intelligently.", 
            a: "Henry Ford" 
        },
        { 
            q: "A journey of a thousand miles begins with a single step.", 
            a: "Lao Tzu" 
        },
        { 
            q: "Do what you can, with what you have, where you are.", 
            a: "Theodore Roosevelt" 
        },
        { 
            q: "Success is how high you bounce when you hit bottom.", 
            a: "George S. Patton" 
        },
        { 
            q: "Doubt kills more dreams than failure ever will.", 
            a: "Suzy Kassem" },
        { 
            q: "I attribute my success to this: I never gave or took any excuse.", 
            a: "Florence Nightingale" 
        },
        { 
            q: "Hardships often prepare ordinary people for an extraordinary destiny.", 
            a: "C.S. Lewis" 
        },
        { 
            q: "Everything you’ve ever wanted is on the other side of fear.", 
            a: "George Addair" 
        },
        { 
            q: "Live as if you were to die tomorrow. Learn as if you were to live forever.", 
            a: "Mahatma Gandhi" 
        },
        { 
            q: "Don’t wait. The time will never be just right.", 
            a: "Napoleon Hill" 
        }
    ];
    

    res.status(200).json(quotes);
}