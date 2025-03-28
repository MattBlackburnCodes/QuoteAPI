export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
    }

    const quotes = {
        randomQuotes: [
          { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill", i: "British Prime Minister during WWII, known for leadership and oratory.", link: "https://en.wikipedia.org/wiki/Winston_Churchill" },
          { q: "The only limit to our realization of tomorrow is our doubts of today.", a: "Franklin D. Roosevelt", i: "32nd U.S. President, led during Great Depression and WWII.", link: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt" },
          { q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt", i: "26th U.S. President, conservationist, and reformer.", link: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
          { q: "It always seems impossible until it's done.", a: "Nelson Mandela", i: "Anti-apartheid leader and former President of South Africa.", link: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
          { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt", i: "26th U.S. President, conservationist, and reformer.", link: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
          { q: "Act as if what you do makes a difference. It does.", a: "William James", i: "American philosopher and psychologist, father of American psychology.", link: "https://en.wikipedia.org/wiki/William_James" },
          { q: "Happiness depends upon ourselves.", a: "Aristotle", i: "Greek philosopher and polymath, student of Plato.", link: "https://en.wikipedia.org/wiki/Aristotle" },
          { q: "In the middle of every difficulty lies opportunity.", a: "Albert Einstein", i: "Theoretical physicist, developed the theory of relativity.", link: "https://en.wikipedia.org/wiki/Albert_Einstein" },
          { q: "Keep your face always toward the sunshine, and shadows will fall behind you.", a: "Walt Whitman", i: "American poet, author of 'Leaves of Grass'.", link: "https://en.wikipedia.org/wiki/Walt_Whitman" },
          { q: "No one can make you feel inferior without your consent.", a: "Eleanor Roosevelt", i: "U.S. First Lady, diplomat, and human rights advocate.", link: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt" },
          { q: "Do not wait to strike till the iron is hot, but make it hot by striking.", a: "William Butler Yeats", i: "Irish poet and one of the foremost figures of 20th-century literature.", link: "https://en.wikipedia.org/wiki/W._B._Yeats" },
          { q: "You miss 100% of the shots you don't take.", a: "Wayne Gretzky", i: "Canadian ice hockey player, known as 'The Great One'.", link: "https://en.wikipedia.org/wiki/Wayne_Gretzky" },
          { q: "We become what we think about.", a: "Earl Nightingale", i: "Radio speaker and author, focused on personal development.", link: "https://en.wikipedia.org/wiki/Earl_Nightingale" },
          { q: "Strive not to be a success, but rather to be of value.", a: "Albert Einstein", i: "Theoretical physicist, developed the theory of relativity.", link: "https://en.wikipedia.org/wiki/Albert_Einstein" },
          { q: "The only way to do great work is to love what you do.", a: "Steve Jobs", i: "Co-founder of Apple Inc., innovator in tech and design.", link: "https://en.wikipedia.org/wiki/Steve_Jobs" },
          { q: "Opportunities don't happen. You create them.", a: "Chris Grosser", i: "Entrepreneur known for motivational business quotes.", link: "https://www.goodreads.com/author/show/5807752.Chris_Grosser" },
          { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson", i: "American humorist, writer, and television host.", link: "https://en.wikipedia.org/wiki/Sam_Levenson" },
          { q: "Dream big and dare to fail.", a: "Norman Vaughan", i: "Explorer and dog musher who inspired by daring expeditions.", link: "https://en.wikipedia.org/wiki/Norman_D._Vaughan" },
          { q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius", i: "Chinese teacher and philosopher, founder of Confucianism.", link: "https://en.wikipedia.org/wiki/Confucius" },
          { q: "Difficulties in life are intended to make us better, not bitter.", a: "Dan Reeves", i: "American football player and coach.", link: "https://en.wikipedia.org/wiki/Dan_Reeves" },
          { q: "Go confidently in the direction of your dreams. Live the life you have imagined.", a: "Henry David Thoreau", i: "American naturalist and philosopher, author of 'Walden'.", link: "https://en.wikipedia.org/wiki/Henry_David_Thoreau" },
          { q: "Success is getting what you want. Happiness is wanting what you get.", a: "Dale Carnegie", i: "Writer and lecturer on self-improvement and salesmanship.", link: "https://en.wikipedia.org/wiki/Dale_Carnegie" },
          { q: "Act as if what you do makes a difference. It does.", a: "William James", i: "American philosopher and psychologist, father of American psychology.", link: "https://en.wikipedia.org/wiki/William_James" },
          { q: "I am not a product of my circumstances. I am a product of my decisions.", a: "Stephen R. Covey", i: "Author of 'The 7 Habits of Highly Effective People'.", link: "https://en.wikipedia.org/wiki/Stephen_Covey" },
          { q: "If you're going through hell, keep going.", a: "Winston Churchill", i: "British Prime Minister during WWII, known for leadership and oratory.", link: "https://en.wikipedia.org/wiki/Winston_Churchill" },
          { q: "Do what you feel in your heart to be right, for you'll be criticized anyway.", a: "Eleanor Roosevelt", i: "U.S. First Lady, diplomat, and human rights advocate.", link: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt" },
          { q: "Work hard in silence, let success make the noise.", a: "Frank Ocean", i: "American singer, songwriter, and visual artist.", link: "https://en.wikipedia.org/wiki/Frank_Ocean" },
          { q: "The best way to predict the future is to create it.", a: "Peter Drucker", i: "Austrian-American management consultant and author.", link: "https://en.wikipedia.org/wiki/Peter_Drucker" },
          { q: "A person who never made a mistake never tried anything new.", a: "Albert Einstein", i: "Theoretical physicist, developed the theory of relativity.", link: "https://en.wikipedia.org/wiki/Albert_Einstein" },
          { q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", a: "Ralph Waldo Emerson", i: "American essayist, lecturer, philosopher, and poet.", link: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson" },
          { q: "You only live once, but if you do it right, once is enough.", a: "Mae West", i: "American actress, singer, and sex symbol.", link: "https://en.wikipedia.org/wiki/Mae_West" },
          { q: "Don't count the days, make the days count.", a: "Muhammad Ali", i: "American professional boxer and cultural icon.", link: "https://en.wikipedia.org/wiki/Muhammad_Ali" },
          { q: "He who has a why to live can bear almost any how.", a: "Friedrich Nietzsche", i: "German philosopher, cultural critic, and poet.", link: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche" },
          { q: "Your time is limited, so don't waste it living someone else's life.", a: "Steve Jobs", i: "Co-founder of Apple Inc., innovator in tech and design.", link: "https://en.wikipedia.org/wiki/Steve_Jobs" },
          { q: "Be yourself; everyone else is already taken.", a: "Oscar Wilde", i: "Irish poet and playwright known for wit and satire.", link: "https://en.wikipedia.org/wiki/Oscar_Wilde" },
          { q: "It is not length of life, but depth of life.", a: "Ralph Waldo Emerson", i: "American essayist, lecturer, philosopher, and poet.", link: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson" },
          { q: "The only impossible journey is the one you never begin.", a: "Tony Robbins", i: "Author, coach, and motivational speaker.", link: "https://en.wikipedia.org/wiki/Tony_Robbins" },
          { q: "I have not failed. I've just found 10,000 ways that won't work.", a: "Thomas Edison", i: "Inventor of the light bulb, phonograph, and more.", link: "https://en.wikipedia.org/wiki/Thomas_Edison" },
          { q: "Failure is simply the opportunity to begin again, this time more intelligently.", a: "Henry Ford", i: "Founder of Ford Motor Company, pioneer of assembly line.", link: "https://en.wikipedia.org/wiki/Henry_Ford" },
          { q: "A journey of a thousand miles begins with a single step.", a: "Lao Tzu", i: "Ancient Chinese philosopher, author of Tao Te Ching.", link: "https://en.wikipedia.org/wiki/Laozi" },
          { q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt", i: "26th U.S. President, conservationist, and reformer.", link: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
          { q: "Success is how high you bounce when you hit bottom.", a: "George S. Patton", i: "U.S. Army general in WWII, known for tank warfare.", link: "https://en.wikipedia.org/wiki/George_S._Patton" },
          { q: "Doubt kills more dreams than failure ever will.", a: "Suzy Kassem", i: "American writer, poet, and philosopher.", link: "https://en.wikipedia.org/wiki/Suzy_Kassem" },
          { q: "I attribute my success to this: I never gave or took any excuse.", a: "Florence Nightingale", i: "Founder of modern nursing.", link: "https://en.wikipedia.org/wiki/Florence_Nightingale" },
          { q: "Hardships often prepare ordinary people for an extraordinary destiny.", a: "C.S. Lewis", i: "British writer and theologian, author of Narnia series.", link: "https://en.wikipedia.org/wiki/C._S._Lewis" },
          { q: "Everything you've ever wanted is on the other side of fear.", a: "George Addair", i: "Motivational speaker best known for inspirational quotes.", link: "https://www.goodreads.com/author/show/969073.George_Addair" },
          { q: "Live as if you were to die tomorrow. Learn as if you were to live forever.", a: "Mahatma Gandhi", i: "Leader of Indian independence movement against British rule.", link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi" },
          { q: "Don't wait. The time will never be just right.", a: "Napoleon Hill", i: "Author of 'Think and Grow Rich', self-help pioneer.", link: "https://en.wikipedia.org/wiki/Napoleon_Hill" },
        ],
        blackHistoryQuotes: [
          { q: "The time is always right to do what is right.", a: "Martin Luther King Jr.", i: "Leader in the American civil rights movement, known for nonviolent activism.", link: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr." },
          { q: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", a: "Langston Hughes", i: "American poet and social activist, a leader of the Harlem Renaissance.", link: "https://en.wikipedia.org/wiki/Langston_Hughes" },
          { q: "My humanity is bound up in yours, for we can only be human together.", a: "Desmond Tutu", i: "South African Anglican bishop and social rights activist.", link: "https://en.wikipedia.org/wiki/Desmond_Tutu" },
          { q: "Where there is no struggle, there is no progress.", a: "Frederick Douglass", i: "American social reformer, abolitionist, and writer.", link: "https://en.wikipedia.org/wiki/Frederick_Douglass" },
          { q: "Service to others is the rent you pay for your room here on Earth.", a: "Muhammad Ali", i: "American professional boxer and cultural icon.", link: "https://en.wikipedia.org/wiki/Muhammad_Ali" },
          { q: "I am where I am because of the bridges that I crossed.", a: "Oprah Winfrey", i: "", link: "" },
          { q: "Truth is powerful and it prevails.", a: "Sojourner Truth", i: "", link: "" },
          { q: "If they don't give you a seat at the table, bring a folding chair.", a: "Shirley Chisholm", i: "", link: "" },
          { q: "You must never be fearful about what you are doing when it is right.", a: "Rosa Parks", i: "", link: "" },
          { q: "We may encounter many defeats, but we must not be defeated.", a: "Maya Angelou", i: "", link: "" },
          { q: "I don't measure a man's success by how high he climbs, but how high he bounces when he hits bottom.", a: "George S. Patton", i: "U.S. Army general in WWII, known for tank warfare.", link: "https://en.wikipedia.org/wiki/George_S._Patton" },
          { q: "Bravery is being the only one who knows you're afraid.", a: "Phyllis Wheatley", i: "", link: "" },
          { q: "Champions aren't made in the gyms. Champions are made from something they have deep inside them—a desire, a dream, a vision.", a: "Muhammad Ali", i: "American professional boxer and cultural icon.", link: "https://en.wikipedia.org/wiki/Muhammad_Ali" },
          { q: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", a: "Booker T. Washington", i: "", link: "" },
          { q: "Power is not given to you. You have to take it.", a: "Beyoncé", i: "", link: "" },
          { q: "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.", a: "Shirley Chisholm", i: "", link: "" },
          { q: "We have to talk about liberating minds as well as liberating society.", a: "Angela Davis", i: "", link: "" },
          { q: "Education is the most powerful weapon which you can use to change the world.", a: "Nelson Mandela", i: "Anti-apartheid leader and former President of South Africa.", link: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
          { q: "Never be limited by other people's limited imaginations.", a: "Dr. Mae Jemison", i: "", link: "" },
          { q: "Have a vision. Be demanding.", a: "Colin Powell", i: "", link: "" },
          { q: "A man who stands for nothing will fall for anything.", a: "Malcolm X", i: "", link: "" },
          { q: "It is easier to build strong children than to repair broken men.", a: "Frederick Douglass", i: "American social reformer, abolitionist, and writer.", link: "https://en.wikipedia.org/wiki/Frederick_Douglass" },
          { q: "Character, not circumstances, makes the man.", a: "Booker T. Washington", i: "", link: "" },
          { q: "Do not bring people in your life who weigh you down. And trust your instincts—good relationships feel good. They feel right.", a: "Oprah Winfrey", i: "", link: "" },
          { q: "Define success on your own terms, achieve it by your own rules, and build a life you're proud to live.", a: "Anne Sweeney", i: "", link: "" },
          { q: "You have a right to be involved. You have something important to contribute, and you have to take the risk to contribute it.", a: "Mae Jemison", i: "", link: "" },
          { q: "Don't wait around for other people to be happy for you. Any happiness you get, you've got to make yourself.", a: "Alice Walker", i: "", link: "" },
          { q: "I had to make my own living and my own opportunity! But I made it!", a: "Madam C.J. Walker", i: "", link: "" },
          { q: "Your crown has been bought and paid for. Put it on your head and wear it.", a: "Maya Angelou", i: "", link: "" },
          { q: "Life has two rules: Number 1, never quit! Number 2, always remember Rule Number 1.", a: "Duke Ellington", i: "", link: "" },
          { q: "I will not have my life narrowed down. I will not bow down to someone else's whim or to someone else's ignorance.", a: "Bell Hooks", i: "", link: "" },
          { q: "If you are always trying to be normal, you will never know how amazing you can be.", a: "Maya Angelou", i: "", link: "" },
          { q: "I did what my conscience told me to do, and you can't fail if you do that.", a: "Anita Hill", i: "", link: "" },
          { q: "Once we recognize what it is we are feeling, once we recognize we can feel deeply, love deeply, can feel joy, then we will demand that all parts of our lives produce that kind of joy.", a: "Audre Lorde", i: "", link: "" },
          { q: "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.", a: "Langston Hughes", i: "American poet and social activist, a leader of the Harlem Renaissance.", link: "https://en.wikipedia.org/wiki/Langston_Hughes" },
          { q: "I tell young people to reach for the stars. And I can't think of a better high than discovering something that no one knew before.", a: "Dr. Patricia Bath", i: "", link: "" },
          { q: "Do not fear mistakes. There are none.", a: "Miles Davis", i: "", link: "" },
          { q: "Art is a form of power. It has to be used that way.", a: "Ossie Davis", i: "", link: "" },
          { q: "Jazz is the big brother of revolution. Revolution follows it around.", a: "Miles Davis", i: "", link: "" },
          { q: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, 'I used everything you gave me.'", a: "Erma Bombeck", i: "", link: "" },
          { q: "Struggle is a never-ending process. Freedom is never really won; you earn it and win it in every generation.", a: "Coretta Scott King", i: "", link: "" },
          { q: "History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again.", a: "Maya Angelou", i: "", link: "" },
          { q: "I am lucky that whatever fear I have inside me, my desire to win is always stronger.", a: "Serena Williams", i: "", link: "" },
          { q: "Surround yourself with only people who are going to lift you higher.", a: "Oprah Winfrey", i: "", link: "" },
          { q: "If you want to fly, you have to give up the things that weigh you down.", a: "Toni Morrison", i: "", link: "" },
          { q: "We do what we have to do so we can do what we want to do.", a: "James Baldwin", i: "", link: "" },
          { q: "I had no idea that history was being made. I was just tired of giving up.", a: "Rosa Parks", i: "", link: "" },
          { q: "If everything was perfect, you would never learn and you would never grow.", a: "Beyoncé", i: "", link: "" },
          { q: "Excellence is the best deterrent to racism or sexism.", a: "Oprah Winfrey", i: "", link: "" },
          { q: "Every great dream begins with a dreamer.", a: "Harriet Tubman", i: "", link: "" },
        ],
        motivationalQuotes: [
          { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt", i: "26th U.S. President, conservationist, and reformer.", link: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
          { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill", i: "British Prime Minister during WWII, known for leadership and oratory.", link: "https://en.wikipedia.org/wiki/Winston_Churchill" },
          { q: "Act as if what you do makes a difference. It does.", a: "William James", i: "American philosopher and psychologist, father of American psychology.", link: "https://en.wikipedia.org/wiki/William_James" },
          { q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius", i: "Chinese teacher and philosopher, founder of Confucianism.", link: "https://en.wikipedia.org/wiki/Confucius" },
          { q: "Your time is limited, so don't waste it living someone else's life.", a: "Steve Jobs", i: "Co-founder of Apple Inc., innovator in tech and design.", link: "https://en.wikipedia.org/wiki/Steve_Jobs" },
          { q: "The only way to do great work is to love what you do.", a: "Steve Jobs", i: "Co-founder of Apple Inc., innovator in tech and design.", link: "https://en.wikipedia.org/wiki/Steve_Jobs" },
          { q: "Opportunities don't happen. You create them.", a: "Chris Grosser", i: "Entrepreneur known for motivational business quotes.", link: "https://www.goodreads.com/author/show/5807752.Chris_Grosser" },
          { q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt", i: "26th U.S. President, conservationist, and reformer.", link: "https://en.wikipedia.org/wiki/Theodore_Roosevelt" },
          { q: "Don't watch the clock; do what it does. Keep going.", a: "Sam Levenson", i: "American humorist, writer, and television host.", link: "https://en.wikipedia.org/wiki/Sam_Levenson" },
          { q: "The best revenge is massive success.", a: "Frank Sinatra", i: "", link: "" },
          { q: "Everything you've ever wanted is on the other side of fear.", a: "George Addair", i: "Motivational speaker best known for inspirational quotes.", link: "https://www.goodreads.com/author/show/969073.George_Addair" },
          { q: "I never lose. I either win or learn.", a: "Nelson Mandela", i: "Anti-apartheid leader and former President of South Africa.", link: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
          { q: "Dream big and dare to fail.", a: "Norman Vaughan", i: "Explorer and dog musher who inspired by daring expeditions.", link: "https://en.wikipedia.org/wiki/Norman_D._Vaughan" },
          { q: "A champion is defined not by their wins but by how they can recover when they fall.", a: "Serena Williams", i: "", link: "" },
          { q: "Don't count the days, make the days count.", a: "Muhammad Ali", i: "American professional boxer and cultural icon.", link: "https://en.wikipedia.org/wiki/Muhammad_Ali" },
          { q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", a: "Ralph Waldo Emerson", i: "American essayist, lecturer, philosopher, and poet.", link: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson" },
          { q: "Do what you feel in your heart to be right, for you'll be criticized anyway.", a: "Eleanor Roosevelt", i: "U.S. First Lady, diplomat, and human rights advocate.", link: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt" },
          { q: "Hardships often prepare ordinary people for an extraordinary destiny.", a: "C.S. Lewis", i: "British writer and theologian, author of Narnia series.", link: "https://en.wikipedia.org/wiki/C._S._Lewis" },
          { q: "It always seems impossible until it's done.", a: "Nelson Mandela", i: "Anti-apartheid leader and former President of South Africa.", link: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
          { q: "Success is not in what you have, but who you are.", a: "Bo Bennett", i: "", link: "" },
          { q: "You must expect great things of yourself before you can do them.", a: "Michael Jordan", i: "", link: "" },
          { q: "Success is how high you bounce when you hit bottom.", a: "George S. Patton", i: "U.S. Army general in WWII, known for tank warfare.", link: "https://en.wikipedia.org/wiki/George_S._Patton" },
          { q: "Act as if what you do makes a difference. It does.", a: "William James", i: "American philosopher and psychologist, father of American psychology.", link: "https://en.wikipedia.org/wiki/William_James" },
          { q: "Courage is resistance to fear, mastery of fear, not absence of fear.", a: "Mark Twain", i: "", link: "" },
          { q: "You are never too old to set another goal or to dream a new dream.", a: "C.S. Lewis", i: "British writer and theologian, author of Narnia series.", link: "https://en.wikipedia.org/wiki/C._S._Lewis" },
          { q: "Happiness is not something ready-made. It comes from your own actions.", a: "Dalai Lama", i: "Spiritual leader of the Tibetan people.", link: "https://en.wikipedia.org/wiki/Dalai_Lama" },
          { q: "A journey of a thousand miles begins with a single step.", a: "Lao Tzu", i: "Ancient Chinese philosopher, author of Tao Te Ching.", link: "https://en.wikipedia.org/wiki/Laozi" },
          { q: "The secret of getting ahead is getting started.", a: "Mark Twain", i: "", link: "" },
          { q: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", a: "Jamie Paolinetti", i: "", link: "" },
          { q: "Only put off until tomorrow what you are willing to die having left undone.", a: "Pablo Picasso", i: "", link: "" },
          { q: "He who has a why to live can bear almost any how.", a: "Friedrich Nietzsche", i: "German philosopher, cultural critic, and poet.", link: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche" },
          { q: "Success is getting what you want. Happiness is wanting what you get.", a: "Dale Carnegie", i: "Writer and lecturer on self-improvement and salesmanship.", link: "https://en.wikipedia.org/wiki/Dale_Carnegie" },
          { q: "The only limit to our realization of tomorrow is our doubts of today.", a: "Franklin D. Roosevelt", i: "32nd U.S. President, led during Great Depression and WWII.", link: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt" },
          { q: "Work hard in silence, let success make the noise.", a: "Frank Ocean", i: "American singer, songwriter, and visual artist.", link: "https://en.wikipedia.org/wiki/Frank_Ocean" },
          { q: "We become what we think about.", a: "Earl Nightingale", i: "Radio speaker and author, focused on personal development.", link: "https://en.wikipedia.org/wiki/Earl_Nightingale" },
          { q: "Strive not to be a success, but rather to be of value.", a: "Albert Einstein", i: "Theoretical physicist, developed the theory of relativity.", link: "https://en.wikipedia.org/wiki/Albert_Einstein" },
          { q: "You don't have to be great to start, but you have to start to be great.", a: "Zig Ziglar", i: "", link: "" },
          { q: "The way to get started is to quit talking and begin doing.", a: "Walt Disney", i: "", link: "" },
          { q: "It's not whether you get knocked down, it's whether you get up.", a: "Vince Lombardi", i: "", link: "" },
          { q: "Failure is simply the opportunity to begin again, this time more intelligently.", a: "Henry Ford", i: "Founder of Ford Motor Company, pioneer of assembly line.", link: "https://en.wikipedia.org/wiki/Henry_Ford" },
          { q: "I attribute my success to this: I never gave or took any excuse.", a: "Florence Nightingale", i: "Founder of modern nursing.", link: "https://en.wikipedia.org/wiki/Florence_Nightingale" },
          { q: "Our greatest glory is not in never falling, but in rising every time we fall.", a: "Confucius", i: "Chinese teacher and philosopher, founder of Confucianism.", link: "https://en.wikipedia.org/wiki/Confucius" },
          { q: "Doubt kills more dreams than failure ever will.", a: "Suzy Kassem", i: "American writer, poet, and philosopher.", link: "https://en.wikipedia.org/wiki/Suzy_Kassem" },
          { q: "Everything you can imagine is real.", a: "Pablo Picasso", i: "", link: "" },
          { q: "Do not go where the path may lead, go instead where there is no path and leave a trail.", a: "Ralph Waldo Emerson", i: "American essayist, lecturer, philosopher, and poet.", link: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson" },
          { q: "Live as if you were to die tomorrow. Learn as if you were to live forever.", a: "Mahatma Gandhi", i: "Leader of Indian independence movement against British rule.", link: "https://en.wikipedia.org/wiki/Mahatma_Gandhi" },
          { q: "Don't wait. The time will never be just right.", a: "Napoleon Hill", i: "Author of 'Think and Grow Rich', self-help pioneer.", link: "https://en.wikipedia.org/wiki/Napoleon_Hill" },
          { q: "Go confidently in the direction of your dreams. Live the life you have imagined.", a: "Henry David Thoreau", i: "American naturalist and philosopher, author of 'Walden'.", link: "https://en.wikipedia.org/wiki/Henry_David_Thoreau" },
          { q: "Everything happens for a reason, but it is up to you to find that reason.", a: "Jeanette Coron", i: "", link: "" },
        ],
        funnyQuotes: [
          { q: "I'm not arguing, I'm just explaining why I'm right.", a: "Anonymous", i: "", link: "" },
          { q: "The road to success is dotted with many tempting parking spaces.", a: "Will Rogers", i: "American stage and film actor, vaudeville performer, and humorist.", link: "https://en.wikipedia.org/wiki/Will_Rogers" },
          { q: "Common sense is like deodorant. The people who need it most never use it.", a: "Anonymous", i: "", link: "" },
          { q: "The early bird might get the worm, but the second mouse gets the cheese.", a: "Steven Wright", i: "American stand-up comedian known for his dry delivery.", link: "https://en.wikipedia.org/wiki/Steven_Wright" },
          { q: "If at first you don't succeed, then skydiving definitely isn't for you.", a: "Steven Wright", i: "American stand-up comedian known for his dry delivery.", link: "https://en.wikipedia.org/wiki/Steven_Wright" },
          { q: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.", a: "Will Ferrell", i: "", link: "" },
          { q: "I am not lazy, I am just on energy-saving mode.", a: "Anonymous", i: "", link: "" },
          { q: "Life is short. Smile while you still have teeth.", a: "Anonymous", i: "", link: "" },
          { q: "I told my wife she should embrace her mistakes. She gave me a hug.", a: "Anonymous", i: "", link: "" },
          { q: "A balanced diet means a cupcake in each hand.", a: "Anonymous", i: "", link: "" },
          { q: "I wish everything was as easy as getting fat.", a: "Anonymous", i: "", link: "" },
          { q: "Some people graduate with honors, I am just honored to graduate.", a: "Anonymous", i: "", link: "" },
          { q: "Why do they call it rush hour when nothing moves?", a: "Robin Williams", i: "", link: "" },
          { q: "Why do they put 'Don't Try This at Home' on TV? I don't even have that kind of stuff at home!", a: "Anonymous", i: "", link: "" },
          { q: "I used to think I was indecisive, but now I'm not so sure.", a: "Anonymous", i: "", link: "" },
          { q: "You can't have everything… where would you put it?", a: "Steven Wright", i: "American stand-up comedian known for his dry delivery.", link: "https://en.wikipedia.org/wiki/Steven_Wright" },
          { q: "I told my kids I want a YouTube tutorial on how to act at my funeral.", a: "Anonymous", i: "", link: "" },
          { q: "I'm not saying I'm old, but I just had to scroll down to find my birth year.", a: "Anonymous", i: "", link: "" },
          { q: "I used to be a people person… but people ruined that for me.", a: "Anonymous", i: "", link: "" },
          { q: "Some people graduate with honors, I am just honored to graduate.", a: "Anonymous", i: "", link: "" },
          { q: "If you think nobody cares if you're alive, try missing a couple of car payments.", a: "Earl Wilson", i: "", link: "" },
          { q: "Age is something that doesn't matter, unless you are a cheese.", a: "Luis Buñuel", i: "Spanish filmmaker known for surrealist works.", link: "https://en.wikipedia.org/wiki/Luis_Buñuel" },
          { q: "Everything is funny as long as it is happening to somebody else.", a: "Will Rogers", i: "American stage and film actor, vaudeville performer, and humorist.", link: "https://en.wikipedia.org/wiki/Will_Rogers" },
          { q: "Some cause happiness wherever they go; others whenever they go.", a: "Oscar Wilde", i: "Irish poet and playwright known for wit and satire.", link: "https://en.wikipedia.org/wiki/Oscar_Wilde" },
          { q: "Money can't buy happiness, but it can buy ice cream, which is basically the same thing.", a: "Anonymous", i: "", link: "" },
          { q: "A day without laughter is a day wasted.", a: "Charlie Chaplin", i: "", link: "" },
          { q: "I am on a seafood diet. I see food and I eat it.", a: "Anonymous", i: "", link: "" },
          { q: "I put my phone in airplane mode, but it didn't fly.", a: "Anonymous", i: "", link: "" },
          { q: "Alcohol may be man's worst enemy, but the Bible says love your enemy.", a: "Frank Sinatra", i: "", link: "" },
          { q: "My doctor told me to watch my drinking. Now I drink in front of a mirror.", a: "Rodney Dangerfield", i: "", link: "" },
          { q: "Always borrow money from a pessimist. He won't expect it back.", a: "Oscar Wilde", i: "Irish poet and playwright known for wit and satire.", link: "https://en.wikipedia.org/wiki/Oscar_Wilde" },
          { q: "If Cinderella's shoe fit perfectly, why did it fall off?", a: "Anonymous", i: "", link: "" },
          { q: "I'm on a whiskey diet. I've lost three days already.", a: "Tommy Cooper", i: "", link: "" },
          { q: "I started out with nothing, and I still have most of it.", a: "Anonymous", i: "", link: "" },
          { q: "You know you're getting old when the candles cost more than the cake.", a: "Bob Hope", i: "", link: "" },
          { q: "The trouble with quotes on the internet is that it's difficult to determine whether or not they are genuine.", a: "Abraham Lincoln (probably not)", i: "", link: "" },
          { q: "If I were two-faced, would I be wearing this one?", a: "Abraham Lincoln", i: "", link: "" },
          { q: "A lie gets halfway around the world before the truth has a chance to get its pants on.", a: "Winston Churchill", i: "British Prime Minister during WWII, known for leadership and oratory.", link: "https://en.wikipedia.org/wiki/Winston_Churchill" },
          { q: "Do not take life too seriously. You will never get out of it alive.", a: "Elbert Hubbard", i: "", link: "" },
          { q: "Life's too short to remove USB safely.", a: "Anonymous", i: "", link: "" },
          { q: "The elevator to success is out of order. You'll have to use the stairs… one step at a time.", a: "Joe Girard", i: "", link: "" },
          { q: "Teamwork is essential—it allows you to blame someone else.", a: "Anonymous", i: "", link: "" },
          { q: "I have enough money to last me the rest of my life… unless I buy something.", a: "Jackie Mason", i: "", link: "" },
          { q: "Some people are like clouds. When they disappear, it's a beautiful day.", a: "Anonymous", i: "", link: "" },
          { q: "Behind every great man is a woman rolling her eyes.", a: "Jim Carrey", i: "", link: "" },
          { q: "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka, and have a party.", a: "Ron White", i: "", link: "" },
          { q: "I'm writing a book. I've got the page numbers done.", a: "Steven Wright", i: "American stand-up comedian known for his dry delivery.", link: "https://en.wikipedia.org/wiki/Steven_Wright" },
          { q: "The best way to teach your kids about taxes is by eating 30% of their ice cream.", a: "Bill Murray", i: "", link: "" },
          { q: "My bed is a magical place where I suddenly remember everything I forgot to do.", a: "Anonymous", i: "", link: "" },
          { q: "Don't worry if plan A fails, there are 25 more letters in the alphabet.", a: "Anonymous", i: "", link: "" },
        ],
        affirmations: [
          { q: "I am enough just as I am.", a: "", i: "", link: "" },
          { q: "I am worthy of love, success, and happiness.", a: "", i: "", link: "" },
          { q: "I attract positivity and opportunities into my life.", a: "", i: "", link: "" },
          { q: "I am strong, resilient, and capable.", a: "", i: "", link: "" },
          { q: "I choose to be happy and grateful today.", a: "", i: "", link: "" },
          { q: "I am in control of my thoughts, emotions, and actions.", a: "", i: "", link: "" },
          { q: "My potential is limitless.", a: "", i: "", link: "" },
          { q: "I radiate confidence and self-respect.", a: "", i: "", link: "" },
          { q: "I am becoming the best version of myself.", a: "", i: "", link: "" },
          { q: "I am grateful for all that I have and all that is to come.", a: "", i: "", link: "" },
          { q: "I am deserving of success and abundance.", a: "", i: "", link: "" },
          { q: "I have the power to create my own reality.", a: "", i: "", link: "" },
          { q: "Every day, in every way, I am getting better and better.", a: "Émile Coué", i: "French psychologist and pharmacist, known for self-improvement through autosuggestion.", link: "https://en.wikipedia.org/wiki/Émile_Coué" },
          { q: "I choose faith over fear.", a: "", i: "", link: "" },
          { q: "I am a magnet for joy and love.", a: "", i: "", link: "" },
          { q: "I am resilient, brave, and strong.", a: "", i: "", link: "" },
          { q: "I am exactly where I am meant to be.", a: "", i: "", link: "" },
          { q: "My mind is powerful, and I use it to create the life I desire.", a: "", i: "", link: "" },
          { q: "I let go of negative thoughts and embrace positivity.", a: "", i: "", link: "" },
          { q: "I believe in myself and my abilities.", a: "", i: "", link: "" },
          { q: "I am capable of achieving great things.", a: "", i: "", link: "" },
          { q: "I trust myself and the decisions I make.", a: "", i: "", link: "" },
          { q: "I am growing and evolving every day.", a: "", i: "", link: "" },
          { q: "I release all doubts and welcome success.", a: "", i: "", link: "" },
          { q: "I am loved, supported, and valued.", a: "", i: "", link: "" },
          { q: "I am grateful for my body, mind, and soul.", a: "", i: "", link: "" },
          { q: "I attract wealth and prosperity into my life.", a: "", i: "", link: "" },
          { q: "I am courageous and stand up for myself.", a: "", i: "", link: "" },
          { q: "I am creating a life filled with passion and purpose.", a: "", i: "", link: "" },
          { q: "I deserve to be happy and successful.", a: "", i: "", link: "" },
          { q: "I trust that everything is working out for my highest good.", a: "", i: "", link: "" },
          { q: "I am enough, and I always have been.", a: "", i: "", link: "" },
          { q: "I am attracting positive, supportive people into my life.", a: "", i: "", link: "" },
          { q: "I choose peace over worry.", a: "", i: "", link: "" },
          { q: "I am unstoppable and full of energy.", a: "", i: "", link: "" },
          { q: "I deserve to take up space and be heard.", a: "", i: "", link: "" },
          { q: "I forgive myself for past mistakes and grow from them.", a: "", i: "", link: "" },
          { q: "I am filled with gratitude and joy.", a: "", i: "", link: "" },
          { q: "I embrace challenges as opportunities for growth.", a: "", i: "", link: "" },
          { q: "I am patient, kind, and compassionate with myself.", a: "", i: "", link: "" },
          { q: "I believe in my dreams and my ability to achieve them.", a: "", i: "", link: "" },
          { q: "I choose to focus on what I can control.", a: "", i: "", link: "" },
          { q: "I am worthy of all the good things coming my way.", a: "", i: "", link: "" },
          { q: "I trust the process of life.", a: "", i: "", link: "" },
          { q: "I release all fears and embrace the present moment.", a: "", i: "", link: "" },
          { q: "I am proud of who I am becoming.", a: "", i: "", link: "" },
          { q: "My happiness is my choice.", a: "", i: "", link: "" },
          { q: "I am a beautiful work in progress.", a: "", i: "", link: "" },
        ],
      };
    

    res.status(200).json(quotes);
}