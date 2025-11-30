export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    // Add the quotes within the authors object
    const authors = {
        /* Not public domain
        winstonC: {
            a: "Winston Churchill",
            i: `Winston Churchill was the Prime Minister of the United Kingdom during some of its darkest and most triumphant times, particularly during World War II. Renowned for his rousing speeches, unyielding leadership, and indomitable spirit, Churchill became a symbol of British resilience. Beyond politics, he was also a Nobel Prize-winning writer and a skilled painter, leaving behind a legacy of both statesmanship and creativity.`,
            wiki: "https://en.wikipedia.org/wiki/Winston_Churchill",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg",
            q: [
                "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                "If you're going through hell, keep going.",
                "A lie gets halfway around the world before the truth has a chance to get its pants on."
            ]
        },*/
        franklinR: {
            a: "Franklin D. Roosevelt",
            i: `Franklin D. Roosevelt was the 32nd President of the United States, serving from 1933 until his death in 1945. He led the nation through the Great Depression and World War II, implementing the New Deal to provide relief and recovery. His leadership style and ability to communicate with the public through radio broadcasts earned him a lasting legacy as one of America's most influential presidents.`,
            wiki: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
            q: [
                "The only limit to our realization of tomorrow is our doubts of today."
            ]
        },
        theodoreR: {
            a: "Theodore Roosevelt",
            i: `Theodore Roosevelt was the 26th President of the United States, known for his progressive policies and vigorous approach to leadership. He championed conservation, established national parks, and was a key figure in the Progressive Era. A larger-than-life personality, Roosevelt was also an authors, soldier, and naturalist, leaving a profound impact on American history.`,
            wiki: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Theodore_Rooseveltnewtry.jpg",
            q:[
                "Do what you can, with what you have, where you are.",
                "Believe you can and you're halfway there.",
                "It is hard to fail, but it is worse never to have tried to succeed."
            ]
        },
        /*Not public domain
        nelsonM: {
            a: "Nelson Mandela",
            i: `Nelson Mandela was a South African anti-apartheid revolutionary who became the first Black president of South Africa. He spent 27 years in prison for his fight against racial oppression and emerged as a global symbol of peace, forgiveness, and resilience. Mandela’s leadership helped dismantle apartheid and laid the foundation for a more inclusive, democratic South Africa. His legacy continues to inspire movements for justice and equality worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Nelson_Mandela",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg",
            q:[
                "It always seems impossible until it's done.",
                "Education is the most powerful weapon which you can use to change the world.",
                "I never lose. I either win or learn."
            ]
        },*/
        williamJ: {
            a: "William James",
            i: `William James was an American philosopher and psychologist, widely regarded as the father of American psychology. He was a leading thinker in the philosophy of pragmatism and functional psychology, emphasizing the practical application of ideas. His works, including "The Principles of Psychology," have had a lasting impact on both psychology and philosophy.`,
            wiki: "https://en.wikipedia.org/wiki/William_James",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Wm_james.jpg",
            q:[
                "The greatest use of a life is to spend it on something that will outlast it.",
                "Act as if what you do makes a difference. It does.",
                "We are like islands in the sea, separate on the surface but connected in the deep."
            ]
        },
        aristotle:{
            a: "Aristotle",
            i: `Aristotle was a Greek philosopher and student of Plato. He made lasting contributions to philosophy, science, and logic that still influence modern thinking. Aristotle also tutored Alexander the Great and helped shape the foundation of Western knowledge.`,
            wiki: "https://en.wikipedia.org/wiki/Aristotle",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/640px-Aristotle_Altemps_Inv8575.jpg",
            q: [
                "Happiness depends upon ourselves.",
            ]
        },
        /* Not public domain
        albertE: {
            a: "Albert Einstein",
            i: `Albert Einstein was a German-born theoretical physicist best known for developing the theory of relativity, one of the two pillars of modern physics. His equation, E = mc², became one of the most famous formulas in science. Beyond his groundbreaking work, Einstein was also a passionate advocate for peace, civil rights, and intellectual freedom.`,
            wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/640px-Albert_Einstein_Head.jpg",
            q: [
                "In the middle of every difficulty lies opportunity.",
                "Strive not to be a success, but rather to be of value.",
                "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                "A person who never made a mistake never tried anything new."
            ]
        },*/
        waltW: {
            a: "Walt Whitman",
            i: `Walt Whitman was a groundbreaking American poet and essayist best known for his collection Leaves of Grass. Often called the father of free verse, he celebrated individuality, nature, democracy, and the human spirit with bold, lyrical language. His work laid the foundation for modern American poetry and continues to inspire readers with its passion and inclusivity.`,
            wiki: "https://en.wikipedia.org/wiki/Walt_Whitman",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Walt_Whitman_-_George_Collins_Cox.jpg/640px-Walt_Whitman_-_George_Collins_Cox.jpg",
            q:[
                "Keep your face always toward the sunshine, and shadows will fall behind you."
            ]
        },
        eleanorR: {
            a: "Eleanor Roosevelt",
            i: `Eleanor Roosevelt was a transformative First Lady of the United States, diplomat, and human rights advocate. She redefined the role of First Lady by actively engaging in politics, championing civil rights, and promoting social justice. Her legacy endures through her tireless advocacy for equality and her role in drafting the Universal Declaration of Human Rights.`,
            wiki: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Eleanor_Roosevelt_portrait_1933.jpg/640px-Eleanor_Roosevelt_portrait_1933.jpg",
            q:[
                "No one can make you feel inferior without your consent.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "Do what you feel in your heart to be right, for you'll be criticized anyway."
            ]
        },
        williamY: {
            a: "William Butler Yeats",
            i: `William Butler Yeats was an Irish poet, dramatist, and one of the foremost figures of 20th-century literature. A co-founder of the Abbey Theatre, Yeats played a significant role in the Irish Literary Revival. His work blends mysticism, folklore, and personal reflection, earning him the Nobel Prize in Literature in 1923.`,
            wiki: "https://en.wikipedia.org/wiki/W._B._Yeats",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/640px-William_Butler_Yeats_by_George_Charles_Beresford.jpg",
            q: [
                "Do not wait to strike till the iron is hot, but make it hot by striking."
            ]
        },
        /* Not public domain
        wayneG: {
            a: "Wayne Gretzky",
            i: `Wayne Gretzky is widely regarded as the greatest hockey player of all time. Known as “The Great One,” he holds numerous NHL records, including the most goals and assists in league history. Gretzky's unmatched vision, skill, and leadership revolutionized the game and inspired generations of athletes across all sports.`,
            wiki: "https://en.wikipedia.org/wiki/Wayne_Gretzky",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Wgretz_%28croppe1d%29.jpg/640px-Wgretz_%28croppe1d%29.jpg",
            q:[
                "You miss 100% of the shots you don't take."
            ]
        },*/
        /* Not public domain
        earlN: {
            a: "Earl Nightingale",
            i: `Earl Nightingale was a radio speaker and author, widely recognized as one of the pioneers of personal development and motivational speaking. His famous recording "The Strangest Secret" inspired millions to pursue their dreams and achieve success. Nightingale's teachings emphasized the power of positive thinking, goal setting, and self-improvement.`,
            wiki: "https://en.wikipedia.org/wiki/Earl_Nightingale",
            image: "https://www.newtraderu.com/wp-content/uploads/Holly_portrait_of_Earl_Nightingale_cinematic_9a4b5f8f-d375-4e4e-8688-87f051fa9f12.jpg?ezimgfmt=ngcb1/notWebP",
            q:[
                "We become what we think about."
            ]
        },*/
        /* Not public domain
        steveJ: {
            a: "Steve Jobs",
            i: `Steve Jobs was the co-founder of Apple Inc., a visionary entrepreneur, and a pioneer in personal computing. Known for his innovative spirit and design sensibility, Jobs played a crucial role in revolutionizing technology with products like the iPhone, iPad, and MacBook. His legacy continues to influence the tech industry and inspire creativity worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Steve_Jobs",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/1280px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
            q:[
                "The only way to do great work is to love what you do.",
                "Your time is limited, so don't waste it living someone else's life."

            ]
        },*/
        /* Not public domain
        samL: {
            a: "Sam Levenson",
            i: `Sam Levenson was an American humorist, writer, and television host known for his wit and wisdom. He gained fame as a television personality and author, sharing humorous anecdotes and life lessons. Levenson's quotes often reflect his unique perspective on life, blending humor with profound insights.`,
            wiki: "https://en.wikipedia.org/wiki/Sam_Levenson",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Samlevenson.jpg",
            q:[
                "Don't watch the clock; do what it does. Keep going."
            ]
        },*/
        /* Not public domain
        normanV: {
            a: "Norman Vaughan",
            i: `Norman Vaughan was an American dog musher and explorer who inspired many with his daring expeditions. He is best known for his adventures in Antarctica and his determination to reach the South Pole. Vaughan's spirit of adventure and resilience continues to motivate explorers and adventurers today.`,
            wiki: "https://en.wikipedia.org/wiki/Norman_D._Vaughan",
            image: "https://images.findagrave.com/photos/2005/357/12780887_113546708018.jpg?size=photos250",
            q: [
                "Dream big and dare to fail."
            ]
        },*/
        confucius:{
            a: "Confucius",
            i: `Confucius was a Chinese philosopher and teacher whose thoughts laid the foundation for much of East Asian culture and philosophy. Living around 500 BCE, he emphasized morality, proper social relationships, justice, and education. His teachings, compiled into the Analects, continue to influence ethics and personal conduct around the world today.`,
            wiki: "https://en.wikipedia.org/wiki/Confucius",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Cropped_version_of_Confucius_Portrait%2C_Kongzi_%28Confucius%29_Family_Mansion%2C_Qufu_%2813044335945%29.jpg",
            q: [
                "It does not matter how slowly you go as long as you do not stop.",
                "Our greatest glory is not in never falling, but in rising every time we fall."
            ]
        },
        /* Not public domain
        danR: {
            a: "Dan Reeves",
            i: `Dan Reeves was an American football player and coach known for his contributions to the NFL. He played as a running back and later became a successful head coach, leading teams like the Denver Broncos and Atlanta Falcons. Reeves is remembered for his strategic mind and leadership on and off the field.`,
            wiki: "https://en.wikipedia.org/wiki/Dan_Reeves",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Dan_Reeves.JPG",
            q: [
                "Difficulties in life are intended to make us better, not bitter."
            ]
        },*/
        henryT: {
            a: "Henry David Thoreau",
            i: `Henry David Thoreau was an American essayist, poet, and philosopher known for his transcendentalist beliefs. His most famous work, "Walden," reflects on simple living in natural surroundings and critiques materialism. Thoreau's writings continue to inspire environmental movements and discussions on civil disobedience.`,
            wiki: "https://en.wikipedia.org/wiki/Henry_David_Thoreau",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg/1024px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg",
            q: [
               "Go confidently in the direction of your dreams. Live the life you have imagined."
            ]
        },
        /* Not public domain
        daleC: {
            a: "Dale Carnegie",
            i: `Dale Carnegie was an American writer and lecturer known for his self-improvement and interpersonal skills courses. His book "How to Win Friends and Influence People" remains a classic in personal development literature. Carnegie's teachings emphasize the importance of communication, empathy, and building positive relationships.`,
            wiki: "https://en.wikipedia.org/wiki/Dale_Carnegie",
            image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Dale_Carnegie.jpg",
            q: [
                "Success is getting what you want. Happiness is wanting what you get."
            ]
        },*/
        /* Not public domain
        stephenC: {
            a: "Stephen Covey",
            i: `Stephen Covey was an American educator, author, and businessman best known for his book "The 7 Habits of Highly Effective People." His principles of personal and professional effectiveness have influenced millions worldwide. Covey's teachings focus on character ethics, proactive behavior, and the importance of aligning actions with values.`,
            wiki: "https://en.wikipedia.org/wiki/Stephen_Covey",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Stephen_Covey_174-CD-L05-03-02A-002_%28cropped%29.jpg",
            q: [
                "I am not a product of my circumstances. I am a product of my decisions."
            ]
        },*/
        /* Not public domain
        frankO: {
            a: "Frank Ocean",
            i: `Frank Ocean is an American singer, songwriter, and record producer known for his unique blend of R&B, hip-hop, and pop. His critically acclaimed albums, including "Channel Orange" and "Blonde," showcase his introspective lyrics and innovative sound. Ocean's artistry has earned him numerous awards and a dedicated fanbase.`,
            wiki: "https://en.wikipedia.org/wiki/Frank_Ocean",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Frank_Ocean_2022_Blonded.jpg",
            q: [
                "Work hard in silence, let success make the noise."
            ]
        },*/
        /* Not public domain
        peterD: {
            a: "Peter Drucker",
            i: `Peter Drucker was an Austrian-American management consultant, educator, and author, known as the father of modern management. His writings on management theory and practice have shaped the way businesses operate today. Drucker's insights into organizational behavior, innovation, and leadership continue to influence managers and leaders worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Peter_Drucker",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Drucker5789.jpg/1024px-Drucker5789.jpg",
            q: [
                "The best way to predict the future is to create it."
            ]
        },*/
        ralphE: {
            a: "Ralph Waldo Emerson",
            i: `Ralph Waldo Emerson was an American essayist, lecturer, philosopher, and poet who led the Transcendentalist movement of the mid-19th century. He emphasized individuality, self-reliance, and the inherent goodness of people and nature. Emerson's essays and speeches inspired generations of thinkers and writers.`,
            wiki: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg/1024px-Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg",
            q: [
                "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                "It is not length of life, but depth of life.",
                "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                "Do not go where the path may lead, go instead where there is no path and leave a trail."
            ]
        },
        /* Not public domain
        maeW: {
            a: "Mae West",
            i: `Mae West was an American actress, singer, and playwright known for her bold wit, sultry style, and trailblazing presence in early Hollywood. Rising to fame in the 1930s, she challenged social norms with her provocative humor and unfiltered confidence. West became a cultural icon, remembered for her sharp one-liners and fearless approach to female empowerment in entertainment.`,
            wiki: "https://en.wikipedia.org/wiki/Mae_West",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mae_West_LAT.jpg",
            q: [
                "You only live once, but if you do it right, once is enough."
            ]
        },*/
        /*
        muhammadA: {
            a: "Muhammad Ali",
            i: `Muhammad Ali was an American professional boxer and cultural icon, widely regarded as one of the greatest athletes of all time. Known for his charisma, activism, and boxing prowess, Ali became a symbol of resistance against racial injustice and war. His legacy extends beyond the ring, inspiring generations with his advocacy for civil rights and humanitarian efforts.`,
            wiki: "https://en.wikipedia.org/wiki/Muhammad_Ali",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Muhammad_Ali%2C_gtfy.00140_%28cropped%29.jpg",
            q: [
                "Don't count the days, make the days count.",
                "Service to others is the rent you pay for your room here on Earth.",
                "Champions aren't made in the gyms. Champions are made from something they have deep inside them—a desire, a dream, a vision."
            ]
        },
        */
        friedrichN: {
            a: "Friedrich Nietzsche",
            i: `Friedrich Nietzsche was a German philosopher, cultural critic, and poet known for his provocative ideas on morality, religion, and individuality. He challenged traditional values with concepts like the "will to power," the "Übermensch," and the declaration that "God is dead." Nietzsche’s work has had a lasting impact on existentialism, psychology, and modern philosophy.`,
            wiki: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/1024px-Nietzsche187a.jpg",
            q: [
                "He who has a why to live can bear almost any how."
            ]
        },
        oscarW: {
            a: "Oscar Wilde",
            i: `Oscar Wilde was an Irish poet and playwright known for his sharp wit, flamboyant style, and brilliant works. His most famous play, "The Importance of Being Earnest," showcases his talent for satire and social commentary. Wilde's life was marked by both literary success and personal scandal, making him a complex figure in literary history.`,
            wiki: "https://en.wikipedia.org/wiki/Oscar_Wilde",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated.jpg",
            q: [
                "Be yourself; everyone else is already taken.",
                "Some cause happiness wherever they go; others whenever they go.",
                "Always borrow money from a pessimist. He won't expect it back."
            ]
        },
        /* Not public domain
        tonyR: {
            a: "Tony Robbins",
            i: `Tony Robbins is an American author, entrepreneur, and motivational speaker known for his self-help books and seminars. He has inspired millions with his teachings on personal development, finance, and peak performance. Robbins emphasizes the power of mindset and actionable strategies to achieve success and fulfillment.`,
            wiki: "https://en.wikipedia.org/wiki/Tony_Robbins",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tony_Robbins.jpg",
            q: [
                "The only impossible journey is the one you never begin."
            ]
        },*/
        thomasE: {
            a: "Thomas Edison",
            i: `Thomas Edison was an American inventor and businessman who developed many devices that greatly influenced life around the world. He is best known for inventing the phonograph, the motion picture camera, and the electric light bulb. Edison's work laid the foundation for modern electric power generation and distribution.`,
            wiki: "https://en.wikipedia.org/wiki/Thomas_Edison",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Thomas_Edison2.jpg",
            q: [
                "I have not failed. I've just found 10,000 ways that won't work."
            ]
        },
        henryF: {
            a: "Henry Ford",
            i: `Henry Ford was an American industrialist and founder of the Ford Motor Company. He revolutionized the automobile industry by introducing assembly line production techniques, making cars affordable for the average American. Ford's innovations in manufacturing and labor practices had a profound impact on modern industry.`,
            wiki: "https://en.wikipedia.org/wiki/Henry_Ford",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Henry_Ford_portrait_1915_cropped.png",
            q: [
                "Failure is simply the opportunity to begin again, this time more intelligently."
            ]
        },
        laoT: {
            a: "Lao Tzu",
            i: `Lao Tzu was an ancient Chinese philosopher and writer, best known as the founder of Taoism. His work, the "Tao Te Ching," emphasizes harmony with nature, simplicity, and humility. Lao Tzu's teachings have influenced Eastern philosophy and spirituality for centuries.`,
            wiki: "https://en.wikipedia.org/wiki/Laozi",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Zhang_Lu-Laozi_Riding_an_Ox.jpg",
            q: [
                "A journey of a thousand miles begins with a single step."
            ]
        },
        georgeP: {
            a: "George Patton",
            i: `George Patton was a prominent American general during World War II, known for his bold and aggressive tactics. He played a crucial role in the Allied victory in Europe, leading forces in North Africa, Sicily, and the Battle of the Bulge. Patton's leadership style and strategic insights have made him a legendary figure in military history.`,
            wiki: "https://en.wikipedia.org/wiki/George_S._Patton",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/General_George_Patton_by_Robert_F._Cranston%2C_Lee_Elkins%2C_and_Harry_Warnecke%2C_1945%2C_color_carbro_print%2C_from_the_National_Portrait_Gallery_-_NPG-NPG_95_404Patton-000002.jpg",
            q: [
                "Success is how high you bounce when you hit bottom."
            ]
        },
        /* Not public domain
        suzyK: {
            a: "Suzy Kassem",
            i: `Suzy Kassem is an American author, poet, and filmmaker known for her thought-provoking writings on spirituality, philosophy, and social justice. Her work often emphasizes the importance of love, unity, and understanding in a divided world. Kassem's unique voice and perspective have resonated with readers seeking inspiration and empowerment.`,
            wiki: "https://www.imdb.com/name/nm5835419/bio/",
            image: "https://4.bp.blogspot.com/-5_Z5wqLinno/Ww_75VBwDQI/AAAAAAAAL9A/-UCxQ-9sf18HHsvy-PhWsWHWUSFcuoTqgCLcBGAs/s1600/Suzy-Kassem-2013.png",
            q: [
                "Doubt kills more dreams than failure ever will."
            ]
        },*/
        florenceN: {
            a: "Florence Nightingale",
            i: `Florence Nightingale was an English social reformer and statistician, best known as the founder of modern nursing. Her pioneering work during the Crimean War revolutionized healthcare practices and established nursing as a respected profession. Nightingale's emphasis on sanitation, patient care, and statistical analysis laid the groundwork for evidence-based medicine.`,
            wiki: "https://en.wikipedia.org/wiki/Florence_Nightingale",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/1024px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg",
            q: [
                "I attribute my success to this: I never gave or took any excuse."
            ]
        },
        /* Not public domain
        cSLewis: {
            a: "C.S. Lewis",
            i: `C.S. Lewis was a British writer, theologian, and academic best known for his beloved fantasy series The Chronicles of Narnia. A scholar of literature at Oxford and Cambridge, he also wrote extensively on Christian apologetics, including works like Mere Christianity and The Screwtape Letters. Lewis’s blend of imagination, intellect, and spiritual insight continues to influence readers of all ages around the world.`,
            wiki: "https://en.wikipedia.org/wiki/C._S._Lewis",
            image: "https://upload.wikimedia.org/wikipedia/en/1/1e/C.s.lewis3.JPG",
            q: [
                "Hardships often prepare ordinary people for an extraordinary destiny.",
                "You are never too old to set another goal or to dream a new dream."
            ]
        },*/
        mahatmaG: {
            a: "Mahatma Gandhi",
            i: `Mahatma Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist who led the Indian independence movement against British rule. He is best known for his philosophy of nonviolent resistance and civil disobedience, which inspired movements for civil rights and freedom across the world. Gandhi's legacy continues to influence leaders and activists advocating for peace and justice.`,
            wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
            q: [
                "Live as if you were to die tomorrow. Learn as if you were to live forever."
            ]
        },
        /* Not public domain
        napoleonH: {
            a: "Napoleon Hill",
            i: `Napoleon Hill was an American self-help author, best known for his book "Think and Grow Rich," which is one of the best-selling books of all time. Hill's work focuses on personal success, positive thinking, and the principles of achievement. His teachings have inspired countless individuals to pursue their goals and dreams.`,
            wiki: "https://en.wikipedia.org/wiki/Napoleon_Hill",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Napoleon_Hill_headshot.jpg",
            q: [
                "Don't wait. The time will never be just right."
            ]
        },
        */
       /* Not public domain
        martinK: {
            a: "Martin Luther King Jr.",
            i: `Martin Luther King Jr. was an American civil rights leader and activist who played a pivotal role in the American civil rights movement. He is best known for his use of nonviolent civil disobedience based on his Christian beliefs and the teachings of Mahatma Gandhi. King's legacy continues to inspire movements for justice and equality worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
            q: [
                "The time is always right to do what is right."
            ]
        },*/
        /* Not public domain
        langstonH: {
            a: "Langston Hughes",
            i: `Langston Hughes was an American poet, social activist, novelist, playwright, and columnist known for his work during the Harlem Renaissance. His poetry often reflects the experiences and struggles of African Americans, celebrating their culture and resilience. Hughes's unique voice and perspective have made him a central figure in American literature.`,
            wiki: "https://en.wikipedia.org/wiki/Langston_Hughes",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Langston_Hughes_by_Carl_Van_Vechten_%28cropped%29.jpg/800px-Langston_Hughes_by_Carl_Van_Vechten_%28cropped%29.jpg",
            q: [
                "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
                "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go."
            ]
        },*/
        /* Not public domain
        desmondT: {
            a: "Desmond Tutu",
            i: `Desmond Tutu was a South African Anglican bishop and human rights activist best known for his outspoken opposition to apartheid. He promoted peace, forgiveness, and reconciliation, playing a key role in South Africa’s transition to democracy. Awarded the Nobel Peace Prize in 1984, Tutu’s legacy lives on as a global voice for justice, compassion, and human dignity.`,
            wiki: "https://en.wikipedia.org/wiki/Desmond_Tutu",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Archbishop-Tutu-medium.jpg",
            q: [
                "My humanity is bound up in yours, for we can only be human together."
            ]
        },*/
        frederickD: {
            a: "Frederick Douglass",
            i: `Frederick Douglass was a formerly enslaved American who became a powerful abolitionist, writer, and orator. He dedicated his life to the fight for justice, equality, and the end of slavery, using his voice and pen to inspire change. His autobiographies and speeches remain some of the most influential works in American history on civil rights and human freedom.`,
            wiki: "https://en.wikipedia.org/wiki/Frederick_Douglass",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg",
            q: [
                "If there is no struggle, there is no progress.",
                "It is easier to build strong children than to repair broken men."
            ]
        },
        /* Not public domain
        oprahW: {
            a: "Oprah Winfrey",
            i: `Oprah Winfrey is an American talk show host, television producer, actress, author, and media proprietor. She is best known for her talk show, The Oprah Winfrey Show, which ran for 25 years and became one of the most influential programs in television history. Winfrey is also recognized for her philanthropy and advocacy for education and empowerment.`,
            wiki: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Oprah_Winfrey_2016.jpg",
            q: [
                "I am where I am because of the bridges that I crossed.",
                "Do not bring people in your life who weigh you down. And trust your instincts—good relationships feel good. They feel right.",
                "Surround yourself with only people who are going to lift you higher.",
                "Excellence is the best deterrent to racism or sexism."
            ]
        },*/
        sojournerT: {
            a: "Sojourner Truth",
            i: `Sojourner Truth was an African American abolitionist and women’s rights activist who was born into slavery and gained her freedom in the early 1800s. Known for her powerful speeches and unshakable faith, she became a leading voice in the fight for equality and justice. Her most famous speech, “Ain’t I a Woman?”, challenged racial and gender inequalities and continues to inspire movements for human rights today.`,
            wiki: "https://en.wikipedia.org/wiki/Sojourner_Truth",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Sojourner_Truth%2C_1870_%28cropped%2C_restored%29.jpg",
            q: [
                "Truth is powerful and it prevails."
            ]
        },
        /* Not public domain
        shirleyC : {
            a: "Shirley Chisholm",
            i: `Shirley Chisholm was a trailblazing American politician, educator, and author who became the first Black woman elected to the United States Congress in 1968. Known for her bold independence and powerful advocacy, she made history again in 1972 as the first Black woman to run for President of the United States from a major party. Her legacy lives on as a fearless champion for civil rights, women's equality, and political representation.`,
            wiki: "https://en.wikipedia.org/wiki/Shirley_Chisholm",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Shirley_Chisholm.jpg",
            q: [
                "If they don't give you a seat at the table, bring a folding chair.",
                "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas."   
            ]
        },*/
        /* Not public domain
        rosaP: {
            a: "Rosa Parks",
            i: `Rosa Parks was an African American civil rights activist known as "the mother of the civil rights movement." Her refusal to give up her bus seat to a white passenger in Montgomery, Alabama, sparked the Montgomery Bus Boycott and became a symbol of the fight against racial segregation. Parks' courage and determination continue to inspire movements for social justice and equality.`,
            wiki: "https://en.wikipedia.org/wiki/Rosa_Parks",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Rosaparks.jpg",
            q: [
                "You must never be fearful about what you are doing when it is right.",
                "I had no idea that history was being made. I was just tired of giving up."
            ]
        },*/
        /* Not public domain
        mayaA: {
            a: "Maya Angelou",
            i: `Maya Angelou was an American poet, memoirist, and civil rights activist known for her powerful words and advocacy for equality. Her autobiographical works, including "I Know Why the Caged Bird Sings," explore themes of identity, racism, and resilience. Angelou's legacy as a literary icon and social justice advocate continues to inspire people around the world.`,
            wiki: "https://en.wikipedia.org/wiki/Maya_Angelou",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg",
            q: [
                "We may encounter many defeats, but we must not be defeated.",
                "Your crown has been bought and paid for. Put it on your head and wear it.",
                "If you are always trying to be normal, you will never know how amazing you can be.",
                "History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again."
            ]
        },*/
        phyllisW: {
            a: "Phyllis Wheatley",
            i: `Phyllis Wheatley was the first African American woman to publish a book of poetry. Born in West Africa and enslaved as a child, she was brought to Boston where her literary talent quickly emerged. Her work blended classical themes with reflections on race, religion, and freedom, making her a powerful voice in both American literature and early abolitionist thought.`,
            wiki: "https://en.wikipedia.org/wiki/Phyllis_Wheatley",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Phillis_Wheatley_frontispiece.jpg",
            q: [
                "Bravery is being the only one who knows you're afraid."
            ]
        },
        bookerTW: {
            a: "Booker T. Washington",
            i: `Booker T. Washington was an African American educator, author, and advisor to several presidents of the United States. He was a leading figure in the African American community during the late 19th and early 20th centuries, advocating for vocational education and economic self-reliance. Washington's legacy continues to influence discussions on education and civil rights.`,
            wiki: "https://en.wikipedia.org/wiki/Booker_T._Washington",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Booker_T_Washington_retouched_flattened-crop.jpg",
            q: [
                "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.",
                "Character, not circumstances, makes the man."
            ]
        },
        /* Not public domain
        beyonce: {
            a: "Beyoncé",
            i: `Beyoncé is an American singer, songwriter, actress, and producer known for her powerful voice and dynamic performances. Rising to fame in the late 1990s as a member of Destiny's Child, she has since established herself as a solo artist and cultural icon. Beyoncé's music often explores themes of empowerment, love, and social justice, making her a significant figure in contemporary pop culture.`,
            wiki: "https://en.wikipedia.org/wiki/Beyonc%C3%A9",
            image: "https://www.rollingstone.com/wp-content/uploads/2019/04/beyonce-adidas.jpg",
            q: [
                "Power is not given to you. You have to take it.",
                "If everything was perfect, you would never learn and you would never grow."
            ]
        },*/
        /* Not public domain
        angelaD: {
            a: "Angela Davis",
            i: `Angela Davis is an American political activist, scholar, and author who became an iconic figure in the civil rights and Black liberation movements. Known for her involvement with the Black Panther Party and her advocacy for prison reform and social justice, she has spent decades fighting systemic oppression. Davis’s powerful voice continues to inspire generations to challenge inequality and envision a more just world.`,
            wiki: "https://en.wikipedia.org/wiki/Angela_Davis",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Angela_Davis_at_Oregon_State_University.jpg/1920px-Angela_Davis_at_Oregon_State_University.jpg",
            q: [
                "We have to talk about liberating minds as well as liberating society."
            ]
        },*/
        /* Not public domain
        maeJ: {
            a: "Mae Jemison",
            i: `Mae Jemison is an American engineer, physician, and former NASA astronaut who became the first Black woman to travel into space in 1992 aboard the Space Shuttle Endeavour. A lifelong advocate for science education and inclusion, she has broken barriers in both STEM and public service. Jemison continues to inspire future generations through her work in education, technology, and space exploration.`,
            wiki: "https://en.wikipedia.org/wiki/Mae_Jemison",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Mae_Carol_Jemison.jpg",
            q: [
                "Never be limited by other people's limited imaginations.",
                "You have a right to be involved. You have something important to contribute, and you have to take the risk to contribute it."
            ]
        },*/
        /* Not public domain
        colinP: {
            a: "Colin Powell",
            i: `Colin Powell was an American statesman and retired four-star general in the United States Army. He served as the 65th United States Secretary of State from 2001 to 2005, becoming the first African American to hold the position. Powell's leadership and dedication to public service have made him a respected figure in American history.`,
            wiki: "https://en.wikipedia.org/wiki/Colin_Powell",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Colin_Powell_official_Secretary_of_State_photo.jpg/1024px-Colin_Powell_official_Secretary_of_State_photo.jpg",
            q: [
                "Have a vision. Be demanding."
            ]
        },*/
        /* Not public domain
        frankS: {
            a: "Frank Sinatra",
            i: `Frank Sinatra was an American singer, actor, and producer who became one of the best-selling music artists of all time. Known for his smooth voice and charismatic stage presence, he was a leading figure in the music industry for decades. Sinatra's influence extended beyond music, making him a cultural icon in film and entertainment.`,
            wiki: "https://en.wikipedia.org/wiki/Frank_Sinatra",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg/1024px-Frank_Sinatra_%281957_studio_portrait_close-up%29.jpg",
            q: [
                "The best revenge is massive success.",
                "Alcohol may be man's worst enemy, but the Bible says love your enemy."
            ]
        },*/
        /* Not public domain
        malcolmX: {
            a: "Malcolm X",
            i: `Malcolm X was an African American Muslim minister and human rights activist who was a prominent figure in the civil rights movement. Known for his advocacy for Black empowerment and his critique of systemic racism, he became a symbol of resistance and change. Malcolm X's legacy continues to inspire movements for social justice and equality worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Malcolm_X",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Malcolm_X_NYWTS_4.jpg",
            q: [
                "A man who stands for nothing will fall for anything."
            ]
        },*/
        /* Not public domain
        anneS: {
            a: "Anne Sweeney",
            i: `Anne Sweeney is an American television producer and executive known for her influential role in the entertainment industry. As the former president of Disney Channel and ABC Cable Networks, she played a key role in shaping popular culture through innovative programming. Sweeney's leadership and vision have made her a respected figure in media and entertainment.`,
            wiki: "https://en.wikipedia.org/wiki/Anne_Sweeney",
            image: "https://m.media-amazon.com/images/M/MV5BMzI4NzIwODEyNF5BMl5BanBnXkFtZTYwNTMyMTc1._V1_UY1200_CR93,0,630,1200_AL_.jpg",
            q: [
                "Define success on your own terms, achieve it by your own rules, and build a life you're proud to live."
            ]
        },*/
        /* Not public domain
        aliceW: {
            a: "Alice Walker",
            i: `Alice Walker is an American novelist, poet, and activist best known for her Pulitzer Prize–winning novel The Color Purple. Her work explores themes of race, gender, and social justice, often centering the experiences of Black women. Walker’s writing and activism have made her a powerful voice for equality, healing, and empowerment across generations.`,
            wiki: "https://en.wikipedia.org/wiki/Alice_Walker",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Alice_Walker.jpg",
            q: [
                "Don't wait around for other people to be happy for you. Any happiness you get, you've got to make yourself."
            ]
        },*/
        madamWalker: {
            a: "Madam C.J. Walker",
            i: `Madam C.J. Walker was an African American entrepreneur, philanthropist, and activist who became the first self-made female millionaire in the United States. She built a beauty empire developing haircare products for Black women and used her wealth to support civil rights causes and uplift her community. Her legacy is one of innovation, empowerment, and breaking barriers against all odds.`,
            wiki: "https://en.wikipedia.org/wiki/Madam_C.J._Walker",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Madam_CJ_Walker_face_circa_1914.jpg",
            q: [
                "I had to make my own living and my own opportunity! But I made it!"
            ]
        },
        /*
        dukeE: {
            a: "Duke Ellington",
            i: `Duke Ellington was an American composer, pianist, and bandleader who is considered one of the greatest jazz musicians in history. His innovative compositions and arrangements transformed jazz into a sophisticated art form. Ellington's influence on music and culture continues to resonate today.`,
            wiki: "https://en.wikipedia.org/wiki/Duke_Ellington",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Duke_Ellington_%281957%29.jpg/1024px-Duke_Ellington_%281957%29.jpg",
            q: [
                "Life has two rules: Number 1, never quit! Number 2, always remember Rule Number 1."
            ]
        },*/
        /* Not public domain
        bellH: {
            a: "bell hooks",
            i: `bell hooks was an influential American author, professor, feminist, and social activist whose work explored the intersection of race, gender, and class. Known for her powerful critiques of patriarchy and white supremacy, she advocated for love, education, and community as tools for healing and transformation. Her lowercase pen name symbolized her commitment to focus on ideas over identity, and her legacy continues to shape conversations around justice and equality worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Bell_hooks",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Bellhooks.jpg",
            q: [
                "I will not have my life narrowed down. I will not bow down to someone else's whim or to someone else's ignorance."
            ]
        },*/
        /* Not public domain
        anitaH: {
            a: "Anita Hill",
            i: `Anita Hill is an American attorney, educator, and civil rights advocate who became nationally known in 1991 when she testified before the U.S. Senate about the sexual harassment she experienced while working with Supreme Court nominee Clarence Thomas. Her courageous testimony sparked a nationwide conversation about workplace harassment, gender equality, and power dynamics. Hill has since continued her work as a professor and activist, advocating for justice and accountability in education, law, and public policy.`,
            wiki: "https://en.wikipedia.org/wiki/Anita_Hill",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Anita_Hill_by_Gage_Skidmore.jpg/1024px-Anita_Hill_by_Gage_Skidmore.jpg",
            q: [
                "I did what my conscience told me to do, and you can't fail if you do that."
            ]
        },*/
        /* Not public domain
        audreyL: {
            a: "Audre Lorde",
            i: `Audre Lorde was a Black lesbian poet, essayist, and activist whose work explored themes of identity, justice, and empowerment. She described herself as a “Black, lesbian, mother, warrior, poet” and used her voice to confront racism, sexism, homophobia, and classism. Through both her writing and activism, Lorde championed the power of self-expression, intersectionality, and speaking truth to power.`,
            wiki: "https://en.wikipedia.org/wiki/Audre_Lorde",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Audre_Lorde.jpg/800px-Audre_Lorde.jpg",
            q: [
                "Your silence will not protect you."
            ]
        },*/
        /* Not public domain
        patriciaB: {
            a: "Patricia Bath",
            i: `Dr. Patricia Bath was an American ophthalmologist, inventor, and pioneering medical researcher. She was the first Black woman to complete a residency in ophthalmology and the first Black female doctor to receive a medical patent. Her invention of the Laserphaco Probe revolutionized cataract surgery, and she spent her career advocating for equitable healthcare and eradicating preventable blindness worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Patricia_Bath",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Patriciabath.jpg",
            q: [
                "I tell young people to reach for the stars. And I can't think of a better high than discovering something that no one knew before."
            ]
        },*/
        /* Not public domain
        milesD: {
            a: "Miles Davis",
            i: `Miles Davis was an iconic American jazz trumpeter, composer, and bandleader whose innovative style helped shape modern jazz. From cool jazz to fusion, his ability to evolve musically over decades made him one of the most influential musicians of the 20th century. Davis's bold creativity and uncompromising artistry continue to inspire generations of artists across genres.`,
            wiki: "https://en.wikipedia.org/wiki/Miles_Davis",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Miles_Davis_by_Palumbo_cropped.jpg/1024px-Miles_Davis_by_Palumbo_cropped.jpg",
            q: [
                "Do not fear mistakes. There are none.",
                "Jazz is the big brother of revolution. Revolution follows it around."
            ]
        },*/
        /* Not public domain
        ossieD: {
            a: "Ossie Davis",
            i: `Ossie Davis was an American actor, director, and civil rights activist known for his powerful performances in film and theater. He was a prominent figure in the civil rights movement and used his platform to advocate for social justice and equality. Davis's legacy as an artist and activist continues to inspire generations of performers and advocates for change.`,
            wiki: "https://en.wikipedia.org/wiki/Ossie_Davis",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Civil_Rights_March_on_Washington%2C_D.C._%28Actor_Ossie_Davis.%29_-_NARA_-_542018.jpg/800px-Civil_Rights_March_on_Washington%2C_D.C._%28Actor_Ossie_Davis.%29_-_NARA_-_542018.jpg",
            q: [
                "Art is a form of power. It has to be used that way."
            ]
        },*/
        /* Not public domain
        ermaB: {
            a: "Erma Bombeck",
            i: `Erma Bombeck was an American humorist and writer known for her witty observations on suburban family life. Her columns, which appeared in newspapers across the country, humorously captured the joys and challenges of motherhood and domesticity. Bombeck's relatable humor and insights made her a beloved figure in American literature.`,
            wiki: "https://en.wikipedia.org/wiki/Erma_Bombeck",
            image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Erma_Bombeck.jpg",
            q: [
                "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, 'I used everything you gave me.'"
            ]
        },*/
        /* Not public domain
        corettaK: {
            a: "Coretta Scott King",
            i: `Coretta Scott King was an American author, activist, and civil rights leader known for her work in advancing social justice and equality. As the wife of Martin Luther King Jr., she played a crucial role in the civil rights movement and continued to advocate for nonviolence and human rights after his assassination. King's legacy as a leader and advocate for peace continues to inspire generations.`,
            wiki: "https://en.wikipedia.org/wiki/Coretta_Scott_King",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coretta_Scott_King_1964.jpg/800px-Coretta_Scott_King_1964.jpg",
            q: [
                "Struggle is a never-ending process. Freedom is never really won; you earn it and win it in every generation."
            ]
        },*/
        /* Not public domain
        serenaW: {
            a: "Serena Williams",
            i: `Serena Williams is one of the greatest athletes of all time, with 23 Grand Slam singles titles and a career that reshaped the world of tennis. Known for her power, resilience, and unwavering determination, she has broken barriers both on and off the court. Beyond sports, Serena is a vocal advocate for gender equality, maternal health, and Black excellence, using her platform to inspire future generations.`,
            wiki: "https://en.wikipedia.org/wiki/Serena_Williams",
            image: "https://cdn.britannica.com/29/234629-138-240EAB9D/who-is-Serena-Williams.jpg",
            q: [
                "I am lucky that whatever fear I have inside me, my desire to win is always stronger.",
                "A champion is defined not by their wins but by how they can recover when they fall."
            ]

        },*/
        /* Not public domain
        toniM: {
            a: "Toni Morrison",
            i: `Toni Morrison was an acclaimed American novelist, essayist, and editor best known for her powerful exploration of Black identity and experience. She was the first African-American woman to win the Nobel Prize in Literature, celebrated for works like Beloved, The Bluest Eye, and Song of Solomon. Morrison’s writing blended poetic language with deep cultural insight, giving voice to generations of untold stories and reshaping American literature.`,
            wiki: "https://en.wikipedia.org/wiki/Toni_Morrison",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Toni_Morrison.jpg/800px-Toni_Morrison.jpg",
            q: [
                "If you want to fly, you have to give up the things that weigh you down."
            ]
        },*/
        /* Not public domain
        jamesB: {
            a: "James Baldwin",
            i: `James Baldwin was a renowned American writer, essayist, and civil rights activist whose works explored race, identity, and the human condition in 20th-century America. With powerful novels like Go Tell It on the Mountain and essays like The Fire Next Time, Baldwin became a leading voice in the fight for racial and social justice. His eloquent, fearless commentary continues to influence thinkers, writers, and activists around the world.`,
            wiki: "https://en.wikipedia.org/wiki/James_Baldwin",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/James_Baldwin_37_Allan_Warren_%28cropped%29.jpg",
            q: [
                "We do what we have to do so we can do what we want to do."
            ]
        },*/
        harrietT: {
            a: "Harriet Tubman",
            i: `Harriet Tubman was an American abolitionist and political activist best known for her work with the Underground Railroad, helping enslaved people escape to freedom. Born into slavery, she escaped and then returned many times to guide others to safety, risking her life each time. Tubman became a powerful symbol of courage, resilience, and unwavering commitment to justice and human dignity.`,
            wiki: "https://en.wikipedia.org/wiki/Harriet_Tubman",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Harriet_Tubman_1895.jpg",
            q: [
                "Every great dream begins with a dreamer."
            ]
        },
        /* Not public domain
        michaelJ: {
            a: "Michael Jordan",
            i: `Michael Jordan is a former professional basketball player widely regarded as one of the greatest athletes of all time. He played the majority of his career with the Chicago Bulls, winning six NBA championships and earning five regular-season MVP awards. Beyond basketball, Jordan's influence extends to business and philanthropy, making him a global icon.`,
            wiki: "https://en.wikipedia.org/wiki/Michael_Jordan",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg",
            q: [
                "You must expect great things of yourself before you can do them."
            ]
        },*/
        markT: {
            a: "Mark Twain",
            i: `Mark Twain, born Samuel Langhorne Clemens, was a celebrated American author and humorist best known for classics like The Adventures of Tom Sawyer and Adventures of Huckleberry Finn. He had a sharp wit and a keen eye for social observation, often using satire to critique politics, human nature, and societal norms. Twain's legacy endures through his unforgettable characters, quotable wisdom, and bold commentary on life and morality.`,
            wiki: "https://en.wikipedia.org/wiki/Mark_Twain",
            image: `https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg`,
            q: [
                "The secret of getting ahead is getting started.",
                "Courage is resistance to fear, mastery of fear, not absence of fear."
            ]
        },
        /* Not public domain
        dalaiL: {
            a: "Dalai Lama",
            i: `The Dalai Lama is the spiritual leader of Tibetan Buddhism and a global advocate for peace, compassion, and human values. The 14th Dalai Lama, Tenzin Gyatso, has lived in exile since 1959 and has worked tirelessly to promote nonviolence, interfaith harmony, and the importance of inner well-being. He was awarded the Nobel Peace Prize in 1989 and remains a beloved figure for his teachings on mindfulness, kindness, and universal responsibility.`,
            wiki: "https://en.wikipedia.org/wiki/Dalai_Lama",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tenzin_Gyatso_-_14th_Dalai_Lama_%282012%29.jpg/1024px-Tenzin_Gyatso_-_14th_Dalai_Lama_%282012%29.jpg",
            q: [
                "Happiness is not something ready-made. It comes from your own actions."
            ]

        },*/
        /* Not public domain
        jamieP: {
            a: "Jamie Paolinetti",
            i: `Jamie Paolinetti is a motivational speaker and author known for her inspiring messages about resilience, self-acceptance, and personal growth. She encourages individuals to embrace their unique journeys and find strength in vulnerability. Paolinetti's work focuses on empowering others to overcome challenges and live authentically.`,
            wiki: "https://www.imdb.com/name/nm4309739/bio/",
            image: "https://imagebox.cz.osobnosti.cz/foto/jamie-239/jamie-239.jpg?1513185618.0",
            q: [
                "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."
            ]
        },*/
        /* Not public domain
        pabloP: {
            a: "Pablo Picasso",
            i: `Pablo Picasso was a Spanish painter, sculptor, and one of the most influential artists of the 20th century. He co-founded the Cubist movement and continuously reinvented his style, producing over 20,000 works across various mediums. Beyond his art, Picasso is known for thought-provoking quotes like "Everything you can imagine is real," reflecting his boundless creativity and bold approach to life.`,
            wiki: "https://en.wikipedia.org/wiki/Pablo_Picasso",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/1024px-Pablo_picasso_1.jpg",
            q: [
                "Only put off until tomorrow what you are willing to die having left undone.",
                "Everything you can imagine is real."
            ]
        },*/
        /* Not public domain
        zigZ: {
            a: "Zig Ziglar",
            i: `Zig Ziglar was an American author, salesman, and motivational speaker known for his energetic presentations and uplifting message about personal development and success. He wrote several bestselling books, including "See You at the Top," and delivered thousands of speeches worldwide. His timeless teachings emphasized faith, discipline, and perseverance, leaving a lasting legacy in the world of self-improvement and motivation.`,
            wiki: "https://en.wikipedia.org/wiki/Zig_Ziglar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Zig_Ziglar_at_Get_Motivated_Seminar%2C_Cow_Palace_2009-3-24_3.JPG/1920px-Zig_Ziglar_at_Get_Motivated_Seminar%2C_Cow_Palace_2009-3-24_3.JPG",
            q: [
                "You don't have to be great to start, but you have to start to be great."
            ]
        },*/
        /* Not public domain
        waltD: {
            a: "Walt Disney",
            i: `Walt Disney was an American entrepreneur, animator, and film producer who co-founded The Walt Disney Company. He is best known for creating iconic characters like Mickey Mouse and for pioneering innovations in animation and theme parks. Disney's vision and creativity transformed the entertainment industry, making him a beloved figure worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Walt_Disney",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG",
            q: [
                "The way to get started is to quit talking and begin doing."
            ]
        },*/
        /* Not public domain
        vinceL: {
            a: "Vince Lombardi",
            i: `Vince Lombardi was an American football coach and executive known for his leadership and success in the National Football League (NFL). He served as head coach of the Green Bay Packers and is remembered for his emphasis on teamwork, discipline, and winning. Lombardi's legacy extends beyond sports, symbolizing excellence and determination in any field.`,
            wiki: "https://en.wikipedia.org/wiki/Vince_Lombardi",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Vince_Lombardi_%281913-1970%29_in_1964_Crop.jpg",
            q: [
                "It's not whether you get knocked down, it's whether you get up."
            ]
        },*/
        willR: {
            a: "Will Rogers",
            i: `Will Rogers was an American cowboy, vaudeville performer, and social commentator known for his wit and wisdom. He became one of the most popular entertainers in the early 20th century, using humor to address social and political issues. Rogers' legacy as a humorist and commentator continues to resonate today.`,
            wiki: "https://en.wikipedia.org/wiki/Will_Rogers",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Will_Rogers_1922.jpg",
            q: [
                "Even if you're on the right track, you'll get run over if you just sit there.",
                "Everything is funny as long as it is happening to somebody else."
            ]
        },
        /* Not public domain
        stevenW: {
            a: "Steven Wright",
            i: `Steven Wright is an American stand-up comedian, actor, and writer known for his deadpan delivery and surreal humor. His unique style combines absurdist one-liners with philosophical musings, making him a beloved figure in comedy. Wright's work has earned him critical acclaim and a dedicated fan base.`,
            wiki: "https://en.wikipedia.org/wiki/Steven_Wright",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Steven_Wright_1994.jpg",
            q: [
                "The early bird might get the worm, but the second mouse gets the cheese.",
                "If at first you don't succeed, then skydiving definitely isn't for you.",
                "You can't have everything… where would you put it?",
                "I'm writing a book. I've got the page numbers done."
            ]
        },*/
        /* Not public domain
        willF: {
            a: "Will Ferrell",
            i: `Will Ferrell is an American actor, comedian, and producer known for his work on Saturday Night Live and in films like Anchorman and Elf. His unique blend of absurd humor and charismatic performances has made him a beloved figure in comedy. Ferrell's ability to create memorable characters and quotable moments has solidified his status as a comedy icon.`,
            wiki: "https://en.wikipedia.org/wiki/Will_Ferrell",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Will_Ferrell_at_the_2024_Toronto_International_Film_Festival_5_%28cropped%29.jpg/800px-Will_Ferrell_at_the_2024_Toronto_International_Film_Festival_5_%28cropped%29.jpg",
            q: [
                "Before you marry a person, you should first make them use a computer with slow internet to see who they really are."
            ]
        },*/
        /* Not public domain
        robinW: {
            a: "Robin Williams",
            i: `Robin Williams was an American actor and comedian known for his improvisational skills and energetic performances. He starred in numerous films, including Good Will Hunting and Mrs. Doubtfire, earning acclaim for both comedic and dramatic roles. Williams' legacy as a performer and advocate for mental health awareness continues to resonate with audiences worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Robin_Williams",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Robin_Williams_2011a_%282%29.jpg",
            q: [
                "Why do they call it rush hour when nothing moves?"
            ]
        },*/
        /* Not public domain
        earlW: {
            a: "Earl Wilson",
            i: `Earl Wilson was an American journalist and syndicated newspaper columnist best known for his witty and often humorous coverage of celebrities and show business in the mid-20th century. His column, It Happened Last Night, offered a mix of gossip, sharp observations, and showbiz charm, helping shape entertainment journalism. Known for his integrity in an often sensational field, Wilson earned respect as both a reporter and a humorist.`,
            wiki: "https://en.wikipedia.org/wiki/Earl_Wilson_(columnist)",
            image: "https://m.media-amazon.com/images/M/MV5BMDY5ODQ1ZGItMjI5NC00OTQ1LWJjM2YtNGY3YjI3ZTNlMDAwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY1200_CR150,0,630,1200_AL_.jpg",
            q: [
                "If you think nobody cares if you're alive, try missing a couple of car payments."
            ]
        },*/
        /* Not public domain
        luisB: {
            a: "Luis Bunuel",
            i: `Luis Buñuel was a Spanish filmmaker known for his surrealist films and innovative storytelling. His works often challenged societal norms and explored themes of desire, religion, and the subconscious. Buñuel's influence on cinema is profound, making him a key figure in the history of film.`,
            wiki: "https://en.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/LuisBu%C3%B1uel1929.jpg/1024px-LuisBu%C3%B1uel1929.jpg",
            q: [
                "Age is something that doesn't matter, unless you are a cheese."
            ]
        },*/
        /* Not public domain
        charlieC: {
            a: "Charlie Chaplin",
            i: `Charlie Chaplin was an English comic actor, filmmaker, and composer who became one of the most influential figures in the history of cinema. Known for his iconic character "The Tramp," Chaplin's films combined humor with social commentary, addressing issues like poverty and inequality. His legacy as a pioneer of silent film and master of comedy continues to inspire filmmakers and audiences worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Charlie_Chaplin",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Charlie_Chaplin_portrait.jpg",
            q: [
                "A day without laughter is a day wasted."
            ]
        },*/
        /* Not public domain
        rodneyD: {
            a: "Rodney Dangerfield",
            i: `Rodney Dangerfield was an American stand-up comedian and actor known for his self-deprecating humor and catchphrase "I don't get no respect." His unique style and relatable jokes made him a beloved figure in comedy. Dangerfield's influence on the world of humor continues to resonate with audiences today.`,
            wiki: "https://en.wikipedia.org/wiki/Rodney_Dangerfield",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Rodney_Dangerfield_1972-1.jpg",
            q: [
                "My doctor told me to watch my drinking. Now I drink in front of a mirror."
            ]
        },*/
        /* Not public domain
        tommyC: {
            a: "Tommy Cooper",
            i: `Tommy Cooper was a British comedian and magician known for his distinctive style of humor, blending magic tricks with comedic timing. His slapstick comedy and catchphrases made him a beloved figure in British entertainment. Cooper's legacy as a performer continues to inspire comedians and entertainers worldwide.`,
            wiki: "https://en.wikipedia.org/wiki/Tommy_Cooper",
            image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Tommycooper.jpg",
            q: [
                "I'm on a whiskey diet. I've lost three days already."
            ]
        },*/
        /* Not public domain
        bobH: {
            a: "Bob Hope",
            i: `Bob Hope was an American comedian, actor, and singer known for his long career in entertainment and philanthropy. He became a beloved figure through his films, television specials, and USO tours during World War II. Hope's humor and generosity made him a cultural icon, and he received numerous awards for his contributions to entertainment and charity.`,
            wiki: "https://en.wikipedia.org/wiki/Bob_Hope",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bob_Hope_1969_Publicity_Photo.jpg",
            q: [
                "You know you're getting old when the candles cost more than the cake."
            ]
        },*/
        /* Not public domain
        notAbrahamL: {
            a: "Abraham Lincoln (probably not)",
            i: `Abraham Lincoln (probably not) was the 16th President of the United States, who famously led the country through the Civil War and abolished slavery — though we’re pretty sure he didn’t warn us about fake quotes on the internet. Still, he somehow became the unofficial mascot of “internet misattribution,” and this quote — “The trouble with quotes on the internet is that it's difficult to determine whether or not they are genuine.” — hilariously pokes fun at that. Honest Abe may not have had Wi-Fi, but his legend lives on in meme culture.`,
            wiki: "Not Available",
            image: "https://th.bing.com/th/id/R.54bbc1785f6a06e0691dc5de1293efe8?rik=UaN4zHtMAf2O5g&riu=http%3a%2f%2fwww.dailymoss.com%2fwp-content%2fuploads%2f2018%2f01%2fIMG-9491.jpg&ehk=1CqpJyjplT1zBrA4GRft7VdFrhRQyNBBlX4epH1MCGg%3d&risl=&pid=ImgRaw&r=0",
            q: [
                "The trouble with quotes on the internet is that it's difficult to determine whether or not they are genuine."
            ]
        },
        */
        abrahamL: {
            a: "Abraham Lincoln",
            i: `Abraham Lincoln was the 16th President of the United States and one of the most revered figures in American history. He led the nation through the Civil War, preserved the Union, and played a pivotal role in the abolition of slavery. Known for his wisdom, humility, and powerful oratory, Lincoln’s legacy continues to shape the values of democracy and equality around the world.`,
            wiki: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Abraham_Lincoln_1863_Portrait_%283x4_cropped%29.jpg/1024px-Abraham_Lincoln_1863_Portrait_%283x4_cropped%29.jpg",
            q: [
                "If I were two-faced, would I be wearing this one?"
            ]
        },
        elbertH: {
            a: "Elbert Hubbard",
            i: `Elbert Hubbard was an American writer, publisher, artist, and philosopher known for his inspirational essays and aphorisms. He founded the Roycroft artisan community and was a prominent figure in the Arts and Crafts movement. Hubbard's writings often emphasized individualism, creativity, and self-reliance.`,
            wiki: "https://en.wikipedia.org/wiki/Elbert_Hubbard",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg/1024px-Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg",
            q: [
                "Do not take life too seriously. You will never get out of it alive."
            ]
        },
        /* Not public domain
        joeG: {
            a: "Joe Girard",
            i: `Joe Girard is an American author and motivational speaker known for his expertise in sales and customer service. He holds the Guinness World Record for being the world's greatest salesman, having sold over 13,000 cars in a single year. Girard's principles of building relationships and providing exceptional service have inspired countless sales professionals.`,
            wiki: "https://en.wikipedia.org/wiki/Joe_Girard",
            image: "https://i1.wp.com/www.konteudos.com.br/blog/empreendedorismo/wp-content/uploads/2019/04/Joe-Girard.jpg?fit=600%2C600&ssl=1",
            q: [
                "The elevator to success is out of order. You'll have to use the stairs… one step at a time."
            ]
        },*/
        /* Not public domain
        jackieM:{
            a: "Jackie Mason",
            i: `Jackie Mason was an American stand-up comedian and actor known for his unique blend of humor, cultural commentary, and political satire. His comedic style often drew from his Jewish heritage and experiences, making him a beloved figure in comedy. Mason's legacy as a performer and commentator continues to resonate with audiences today.`,
            wiki: "https://en.wikipedia.org/wiki/Jackie_Mason",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/JackieMasonOct06.jpg",
            q: [
                "I have enough money to last me the rest of my life… unless I buy something."
            ]
        },*/
        /* Not public domain
        jimC: {
            a: "Jim Carrey",
            i: `Jim Carrey is a Canadian-American actor, comedian, and writer known for his energetic performances and physical comedy. He gained fame in the 1990s with films like Ace Ventura: Pet Detective and The Mask, showcasing his unique blend of humor and emotion. Carrey's versatility as an actor has earned him critical acclaim and a dedicated fan base.`,
            wiki: "https://en.wikipedia.org/wiki/Jim_Carrey",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jim_Carrey_2020_cropped.jpg/1024px-Jim_Carrey_2020_cropped.jpg",
            q: [
                "Behind every great man is a woman rolling her eyes."
            ]
        },*/
        /* Not public domain
        ronW: {
            a: "Ron White",
            i: `Ron White is an American stand-up comedian and actor known for his laid-back style and sharp wit. He gained fame as a member of the Blue Collar Comedy Tour and has released several successful comedy albums and specials. White's humor often draws from his life experiences, making him a relatable and entertaining performer.`,
            wiki: "https://en.wikipedia.org/wiki/Ron_White",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ron_White01.jpg",
            q: [
                "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka, and have a party."
            ]
        },*/
        /* Not public domain
        billM: {
            a: "Bill Murray",
            i: `Bill Murray is an American actor, comedian, and writer known for his unique blend of humor and charm. He gained fame in the 1980s with films like Ghostbusters and Groundhog Day, showcasing his ability to balance comedy with deeper themes.  Murray's offbeat style and improvisational skills have made him a beloved figure in film and comedy.`,
            wiki: "https://en.wikipedia.org/wiki/Bill_Murray",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bill_Murray_at_the_2024_Toronto_International_Film_Festival_%28Riff_Raff%29_2_%283x4_cropped%29.jpg/1024px-Bill_Murray_at_the_2024_Toronto_International_Film_Festival_%28Riff_Raff%29_2_%283x4_cropped%29.jpg",
            q: [
                "The best way to teach your kids about taxes is by eating 30% of their ice cream."
            ]
        },*/
        emileC: {
            a: "Emile Coue",
            i: `Emile Coué was a French psychologist and pharmacist known for his work in autosuggestion and the placebo effect. He developed the Coué method, emphasizing the power of positive thinking and self-affirmation in achieving personal goals. Coué's teachings have influenced psychology and self-help practices, promoting the idea that belief can lead to positive change.`,
            wiki: "https://en.wikipedia.org/wiki/%C3%89mile_Cou%C3%A9",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/%C3%89mile_Cou%C3%A9_3.jpg",
            q: [
                "Every day, in every way, I am getting better and better."
            ]
        },
        /* Not public domain
        anonymousFunny: {
            a: "Anonymous",
            i: `Anonymous quotes are often attributed to unknown authors, reflecting universal truths and wisdom that resonate across cultures and time. These sayings capture the essence of human experience, offering insights on love, life, and perseverance. Their anonymity allows them to transcend individual identities, making them relatable and timeless.`,
            wiki: "Not Available",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            q: [
                "I'm not arguing, I'm just explaining why I'm right.", 
                "Common sense is like deodorant. The people who need it most never use it.",
                "I am not lazy, I am just on energy-saving mode.",
                "Life is short. Smile while you still have teeth.",
                "I told my wife she should embrace her mistakes. She gave me a hug.",
                "A balanced diet means a cupcake in each hand.",
                "I wish everything was as easy as getting fat.",
                "Some people graduate with honors, I am just honored to graduate.",
                "Why do they put 'Don't Try This at Home' on TV? I don't even have that kind of stuff at home!",
                "I used to think I was indecisive, but now I'm not so sure.",

                "I told my kids I want a YouTube tutorial on how to act at my funeral.",
                "I'm not saying I'm old, but I just had to scroll down to find my birth year.",
                "I used to be a people person… but people ruined that for me.",
                "Some people graduate with honors, I am just honored to graduate.",
                "Money can't buy happiness, but it can buy ice cream, which is basically the same thing.",
                "I am on a seafood diet. I see food and I eat it.",
                "I put my phone in airplane mode, but it didn't fly.",
                "If Cinderella's shoe fit perfectly, why did it fall off?",
                "I started out with nothing, and I still have most of it.",
                "Life's too short to remove USB safely.",

                "Teamwork is essential—it allows you to blame someone else.",
                "Some people are like clouds. When they disappear, it's a beautiful day.",
                "My bed is a magical place where I suddenly remember everything I forgot to do.",
                "Don't worry if plan A fails, there are 25 more letters in the alphabet."
            ]
        },*/
        /*
        anonymousAffirmation: {
            a: "Anonymous",
            i: `Anonymous quotes are often attributed to unknown authors, reflecting universal truths and wisdom that resonate across cultures and time. These sayings capture the essence of human experience, offering insights on love, life, and perseverance. Their anonymity allows them to transcend individual identities, making them relatable and timeless.`,
            wiki: "Not Available",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            q: [
                "I am enough just as I am.",
                "I am worthy of love, success, and happiness.",
                "I attract positivity and opportunities into my life.",
                "I am strong, resilient, and capable.",
                "I choose to be happy and grateful today.",
                "I am in control of my thoughts, emotions, and actions.",
                "My potential is limitless.",
                "I radiate confidence and self-respect.",
                "I am becoming the best version of myself.",
                "I am grateful for all that I have and all that is to come.",
                
                "I am deserving of success and abundance.",
                "I have the power to create my own reality.",
                "I choose faith over fear.",
                "I am a magnet for joy and love.",
                "I am resilient, brave, and strong.",
                "I am exactly where I am meant to be.",
                "My mind is powerful, and I use it to create the life I desire.",
                "I let go of negative thoughts and embrace positivity.",
                "I believe in myself and my abilities.",
                "I am a beautiful work in progress.",
    
                "I am capable of achieving great things.",
                "I trust myself and the decisions I make.",
                "I am growing and evolving every day.",
                "I release all doubts and welcome success.",
                "I am loved, supported, and valued.",
                "I am grateful for my body, mind, and soul.",
                "I attract wealth and prosperity into my life.",
                "I am courageous and stand up for myself.",
                "I am creating a life filled with passion and purpose.",
                "I deserve to be happy and successful.",
    
                "I trust that everything is working out for my highest good.",
                "I am enough, and I always have been.",
                "I am attracting positive, supportive people into my life.",
                "I choose peace over worry.",
                "I am unstoppable and full of energy.",
                "I deserve to take up space and be heard.",
                "I forgive myself for past mistakes and grow from them.",
                "I am filled with gratitude and joy.",
                "I embrace challenges as opportunities for growth.",
                "I am patient, kind, and compassionate with myself.",
    
                "I believe in my dreams and my ability to achieve them.",
                "I choose to focus on what I can control.",
                "I am worthy of all the good things coming my way.",
                "I trust the process of life.",
                "I release all fears and embrace the present moment.",
                "I am proud of who I am becoming.",
                "My happiness is my choice."
                
            ]
        }*/


    }

    const quotes = {
        randomQuotes: [
            /*{ id: 1, q: authors.winstonC.q[0], a: authors.winstonC.a, i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },
            { id: 2, q: authors.winstonC.q[1], a: authors.winstonC.a, i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },
            { id: 3, q: authors.winstonC.q[2], a: authors.winstonC.a, i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },*/
            { id: 4, q: authors.franklinR.q[0], a: authors.franklinR.a, i: authors.franklinR.i, link: authors.franklinR.wiki, image: authors.franklinR.image },
            { id: 5, q: authors.theodoreR.q[0], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { id: 6, q: authors.theodoreR.q[1], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { id: 7, q: authors.theodoreR.q[2], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            /*{ id: 8, q: authors.nelsonM.q[0], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },
            { id: 9, q: authors.nelsonM.q[1], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },
            { id: 10, q: authors.nelsonM.q[2], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },*/
            { id: 11, q: authors.williamJ.q[0], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 12, q: authors.williamJ.q[1], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 13, q: authors.williamJ.q[2], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 14, q: authors.aristotle.q[0], a: authors.aristotle.a, i: authors.aristotle.i, link: authors.aristotle.wiki, image: authors.aristotle.image },
            /*{ id: 15, q: authors.albertE.q[0], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { id: 16, q: authors.albertE.q[1], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { id: 17, q: authors.albertE.q[2], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { id: 18, q: authors.albertE.q[3], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },*/
            { id: 19, q: authors.waltW.q[0], a: authors.waltW.a, i: authors.waltW.i, link: authors.waltW.wiki, image: authors.waltW.image },
            { id: 20, q: authors.eleanorR.q[0], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 21, q: authors.eleanorR.q[1], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 22, q: authors.eleanorR.q[2], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 23, q: authors.eleanorR.q[2], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 24, q: authors.williamY.q[0], a: authors.williamY.a, i: authors.williamY.i, link: authors.williamY.wiki, image: authors.williamY.image },
            //{ id: 25, q: authors.wayneG.q[0], a: authors.wayneG.a, i: authors.wayneG.i, link: authors.wayneG.wiki, image: authors.wayneG.image },
            //{ id: 26, q: authors.earlN.q[0], a: authors.earlN.a, i: authors.earlN.i, link: authors.earlN.wiki, image: authors.earlN.image },
            /*{ id: 27, q: authors.steveJ.q[0], a: authors.steveJ.a, i: authors.steveJ.i, link: authors.steveJ.wiki, image: authors.steveJ.image },
            { id: 28, q: authors.steveJ.q[1], a: authors.steveJ.a, i: authors.steveJ.i, link: authors.steveJ.wiki, image: authors.steveJ.image },*/
            //{ id: 29, q: authors.samL.q[0], a: authors.samL.a, i: authors.samL.i, link: authors.samL.wiki, image: authors.samL.image },
            //{ id: 30, q: authors.normanV.q[0], a: authors.normanV.a, i: authors.normanV.i, link: authors.normanV.wiki, image: authors.normanV.image },
            { id: 31, q: authors.confucius.q[0], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            { id: 32, q: authors.confucius.q[1], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            //{ id: 33, q: authors.danR.q[0], a: authors.danR.a, i: authors.danR.i, link: authors.danR.wiki, image: authors.danR.image },
            { id: 34, q: authors.henryT.q[0], a: authors.henryT.a, i: authors.henryT.i, link: authors.henryT.wiki, image: authors.henryT.image },
            //{ id: 35, q: authors.daleC.q[0], a: authors.daleC.a, i: authors.daleC.i, link: authors.daleC.wiki, image: authors.daleC.image },
            { id: 36, q: authors.stephenC.q[0], a: authors.stephenC.a, i: authors.stephenC.i, link: authors.stephenC.wiki, image: authors.stephenC.image },
            //{ id: 37, q: authors.frankO.q[0], a: authors.frankO.a, i: authors.frankO.i, link: authors.frankO.wiki, image: authors.frankO.image },
            //{ id: 38, q: authors.peterD.q[0], a: authors.peterD.a, i: authors.peterD.i, link: authors.peterD.wiki, image: authors.peterD.image },
            { id: 39, q: authors.ralphE.q[0], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 40, q: authors.ralphE.q[1], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 41, q: authors.ralphE.q[2], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 42, q: authors.ralphE.q[3], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 43, q: authors.maeW.q[0], a: authors.maeW.a, i: authors.maeW.i, link: authors.maeW.wiki, image: authors.maeW.image },
            /*{ id: 44, q: authors.muhammadA.q[0], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },
            { id: 45, q: authors.muhammadA.q[1], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },
            { id: 46, q: authors.muhammadA.q[2], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },*/
            { id: 47, q: authors.friedrichN.q[0], a: authors.friedrichN.a, i: authors.friedrichN.i, link: authors.friedrichN.wiki, image: authors.friedrichN.image },
            { id: 48, q: authors.oscarW.q[0], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { id: 49, q: authors.oscarW.q[1], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { id: 50, q: authors.oscarW.q[2], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            //{ id: 51, q: authors.tonyR.q[0], a: authors.tonyR.a, i: authors.tonyR.i, link: authors.tonyR.wiki, image: authors.tonyR.image },
            { id: 52, q: authors.thomasE.q[0], a: authors.thomasE.a, i: authors.thomasE.i, link: authors.thomasE.wiki, image: authors.thomasE.image },
            { id: 53, q: authors.henryF.q[0], a: authors.henryF.a, i: authors.henryF.i, link: authors.henryF.wiki, image: authors.henryF.image },
            { id: 54, q: authors.laoT.q[0], a: authors.laoT.a, i: authors.laoT.i, link: authors.laoT.wiki, image: authors.laoT.image },
            { id: 55, q: authors.georgeP.q[0], a: authors.georgeP.a, i: authors.georgeP.i, link: authors.georgeP.wiki, image: authors.georgeP.image },
            //{ id: 56, q: authors.suzyK.q[0], a: authors.suzyK.a, i: authors.suzyK.i, link: authors.suzyK.wiki, image: authors.suzyK.image },
            { id: 57, q: authors.florenceN.q[0], a: authors.florenceN.a, i: authors.florenceN.i, link: authors.florenceN.wiki, image: authors.florenceN.image },
            /*{ id: 58, q: authors.cSLewis.q[0], a: authors.cSLewis.a, i: authors.cSLewis.i, link: authors.cSLewis.wiki, image: authors.cSLewis.image },
            { id: 59, q: authors.cSLewis.q[1], a: authors.cSLewis.a, i: authors.cSLewis.i, link: authors.cSLewis.wiki, image: authors.cSLewis.image },*/
            { id: 60, q: authors.mahatmaG.q[0], a: authors.mahatmaG.a, i: authors.mahatmaG.i, link: authors.mahatmaG.wiki, image: authors.mahatmaG.image },
            //{ id: 61, q: authors.napoleonH.q[0], a: authors.napoleonH.a, i: authors.napoleonH.i, link: authors.napoleonH.wiki, image: authors.napoleonH.image },
            //{ id: 62, q: authors.martinK.q[0], a: authors.martinK.a, i: authors.martinK.i, link: authors.martinK.wiki, image: authors.martinK.image },
            /*{ id: 63, q: authors.langstonH.q[0], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },
            { id: 64, q: authors.langstonH.q[1], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },*/
            //{ id: 65, q: authors.desmondT.q[0], a: authors.desmondT.a, i: authors.desmondT.i, link: authors.desmondT.wiki, image: authors.desmondT.image },
            { id: 66, q: authors.frederickD.q[0], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            { id: 67, q: authors.frederickD.q[1], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            /*{ id: 68, q: authors.oprahW.q[0], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { id: 69, q: authors.oprahW.q[1], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { id: 70, q: authors.oprahW.q[2], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { id: 71, q: authors.oprahW.q[3], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },*/
            { id: 72, q: authors.sojournerT.q[0], a: authors.sojournerT.a, i: authors.sojournerT.i, link: authors.sojournerT.wiki, image: authors.sojournerT.image },
            /*{ id: 73, q: authors.shirleyC.q[0], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },
            { id: 74, q: authors.shirleyC.q[1], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },*/
            /*{ id: 75, q: authors.rosaP.q[0], a: authors.rosaP.a, i: authors.rosaP.i, link: authors.rosaP.wiki, image: authors.rosaP.image },
            { id: 76, q: authors.rosaP.q[1], a: authors.rosaP.a, i: authors.rosaP.i, link: authors.rosaP.wiki, image: authors.rosaP.image },
            { id: 77, q: authors.mayaA.q[0], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { id: 78, q: authors.mayaA.q[1], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { id: 79, q: authors.mayaA.q[2], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { id: 80, q: authors.mayaA.q[3], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },*/
            { id: 81, q: authors.phyllisW.q[0], a: authors.phyllisW.a, i: authors.phyllisW.i, link: authors.phyllisW.wiki, image: authors.phyllisW.image },
            { id: 82, q: authors.bookerTW.q[0], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            { id: 83, q: authors.bookerTW.q[1], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            /*{ id: 84, q: authors.beyonce.q[0], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },
            { id: 85, q: authors.beyonce.q[1], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },*/
            //{ id: 86, q: authors.angelaD.q[0], a: authors.angelaD.a, i: authors.angelaD.i, link: authors.angelaD.wiki, image: authors.angelaD.image },
            /*{ id: 87, q: authors.maeJ.q[0], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            { id: 88, q: authors.maeJ.q[1], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            //{ id: 89, q: authors.colinP.q[0], a: authors.colinP.a, i: authors.colinP.i, link: authors.colinP.wiki, image: authors.colinP.image },
            /*{ id: 90, q: authors.frankS.q[0], a: authors.frankS.a, i: authors.frankS.i, link: authors.frankS.wiki, image: authors.frankS.image },
            { id: 91, q: authors.frankS.q[1], a: authors.frankS.a, i: authors.frankS.i, link: authors.frankS.wiki, image: authors.frankS.image },*/
            //{ id: 92, q: authors.malcolmX.q[0], a: authors.malcolmX.a, i: authors.malcolmX.i, link: authors.malcolmX.wiki, image: authors.malcolmX.image },
            //{ id: 93, q: authors.anneS.q[0], a: authors.anneS.a, i: authors.anneS.i, link: authors.anneS.wiki, image: authors.anneS.image },
            //{ id: 94, q: authors.aliceW.q[0], a: authors.aliceW.a, i: authors.aliceW.i, link: authors.aliceW.wiki, image: authors.aliceW.image },
            { id: 95, q: authors.madamWalker.q[0], a: authors.madamWalker.a, i: authors.madamWalker.i, link: authors.madamWalker.wiki, image: authors.madamWalker.image },
            { id: 96, q: authors.dukeE.q[0], a: authors.dukeE.a, i: authors.dukeE.i, link: authors.dukeE.wiki, image: authors.dukeE.image },
            //{ id: 97, q: authors.bellH.q[0], a: authors.bellH.a, i: authors.bellH.i, link: authors.bellH.wiki, image: authors.bellH.image },
            //{ id: 98, q: authors.anitaH.q[0], a: authors.anitaH.a, i: authors.anitaH.i, link: authors.anitaH.wiki, image: authors.anitaH.image },
            { id: 99, q: authors.audreyL.q[0], a: authors.audreyL.a, i: authors.audreyL.i, link: authors.audreyL.wiki, image: authors.audreyL.image },
            { id: 100, q: authors.patriciaB.q[0], a: authors.patriciaB.a, i: authors.patriciaB.i, link: authors.patriciaB.wiki, image: authors.patriciaB.image },
            /*{ id: 101, q: authors.milesD.q[0], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },
            { id: 102, q: authors.milesD.q[1], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },*/
            //{ id: 103, q: authors.ossieD.q[0], a: authors.ossieD.a, i: authors.ossieD.i, link: authors.ossieD.wiki, image: authors.ossieD.image },
            //{ id: 104, q: authors.ermaB.q[0], a: authors.ermaB.a, i: authors.ermaB.i, link: authors.ermaB.wiki, image: authors.ermaB.image },
            //{ id: 105, q: authors.corettaK.q[0], a: authors.corettaK.a, i: authors.corettaK.i, link: authors.corettaK.wiki, image: authors.corettaK.image },
            /*{ id: 106, q: authors.serenaW.q[0], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },
            { id: 107, q: authors.serenaW.q[1], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },*/
            //{ id: 108, q: authors.toniM.q[0], a: authors.toniM.a, i: authors.toniM.i, link: authors.toniM.wiki, image: authors.toniM.image },
            //{ id: 109, q: authors.jamesB.q[0], a: authors.jamesB.a, i: authors.jamesB.i, link: authors.jamesB.wiki, image: authors.jamesB.image },
            { id: 110, q: authors.harrietT.q[0], a: authors.harrietT.a, i: authors.harrietT.i, link: authors.harrietT.wiki, image: authors.harrietT.image },
            //{ id: 111, q: authors.michaelJ.q[0], a: authors.michaelJ.a, i: authors.michaelJ.i, link: authors.michaelJ.wiki, image: authors.michaelJ.image },
            { id: 112, q: authors.markT.q[0], a: authors.markT.a, i: authors.markT.i, link: authors.markT.wiki, image: authors.markT.image },
            //{ id: 113, q: authors.dalaiL.q[0], a: authors.dalaiL.a, i: authors.dalaiL.i, link: authors.dalaiL.wiki, image: authors.dalaiL.image },
            //{ id: 114, q: authors.jamieP.q[0], a: authors.jamieP.a, i: authors.jamieP.i, link: authors.jamieP.wiki, image: authors.jamieP.image },
            /*{ id: 115, q: authors.pabloP.q[0], a: authors.pabloP.a, i: authors.pabloP.i, link: authors.pabloP.wiki, image: authors.pabloP.image },
            { id: 116, q: authors.pabloP.q[1], a: authors.pabloP.a, i: authors.pabloP.i, link: authors.pabloP.wiki, image: authors.pabloP.image },*/
            //{ id: 117, q: authors.zigZ.q[0], a: authors.zigZ.a, i: authors.zigZ.i, link: authors.zigZ.wiki, image: authors.zigZ.image },
            //{ id: 118, q: authors.waltD.q[0], a: authors.waltD.a, i: authors.waltD.i, link: authors.waltD.wiki, image: authors.waltD.image },
            //{ id: 119, q: authors.vinceL.q[0], a: authors.vinceL.a, i: authors.vinceL.i, link: authors.vinceL.wiki, image: authors.vinceL.image },
            /*{ id: 120, q: authors.anonymousFunny.q[0], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 121, q: authors.anonymousFunny.q[1], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 122, q: authors.anonymousFunny.q[2], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 123, q: authors.anonymousFunny.q[3], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 124, q: authors.anonymousFunny.q[4], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 125, q: authors.anonymousFunny.q[5], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 126, q: authors.anonymousFunny.q[6], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 127, q: authors.anonymousFunny.q[7], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 128, q: authors.anonymousFunny.q[8], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 129, q: authors.anonymousFunny.q[9], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 130, q: authors.anonymousFunny.q[10], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 131, q: authors.anonymousFunny.q[11], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 132, q: authors.anonymousFunny.q[12], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 133, q: authors.anonymousFunny.q[13], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 134, q: authors.anonymousFunny.q[14], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 135, q: authors.anonymousFunny.q[15], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 136, q: authors.anonymousFunny.q[16], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 137, q: authors.anonymousFunny.q[17], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 138, q: authors.anonymousFunny.q[18], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 139, q: authors.anonymousFunny.q[19], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 140, q: authors.anonymousFunny.q[20], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 141, q: authors.anonymousFunny.q[21], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 142, q: authors.anonymousFunny.q[22], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { id: 143, q: authors.anonymousFunny.q[23], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },*/
            { id: 144, q: authors.willR.q[0], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            { id: 145, q: authors.willR.q[1], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            /*{ id: 146, q: authors.stevenW.q[0], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { id: 147, q: authors.stevenW.q[1], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { id: 148, q: authors.stevenW.q[2], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { id: 149, q: authors.stevenW.q[3], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },*/
            //{ id: 150, q: authors.willF.q[0], a: authors.willF.a, i: authors.willF.i, link: authors.willF.wiki, image: authors.willF.image },
            //{ id: 151, q: authors.robinW.q[0], a: authors.robinW.a, i: authors.robinW.i, link: authors.robinW.wiki, image: authors.robinW.image },
            //{ id: 152, q: authors.earlW.q[0], a: authors.earlW.a, i: authors.earlW.i, link: authors.earlW.wiki, image: authors.earlW.image },
            //{ id: 153, q: authors.luisB.q[0], a: authors.luisB.a, i: authors.luisB.i, link: authors.luisB.wiki, image: authors.luisB.image },
            //{ id: 154, q: authors.charlieC.q[0], a: authors.charlieC.a, i: authors.charlieC.i, link: authors.charlieC.wiki, image: authors.charlieC.image },
            //{ id: 155, q: authors.rodneyD.q[0], a: authors.rodneyD.a, i: authors.rodneyD.i, link: authors.rodneyD.wiki, image: authors.rodneyD.image },
            //{ id: 156, q: authors.bobH.q[0], a: authors.bobH.a, i: authors.bobH.i, link: authors.bobH.wiki, image: authors.bobH.image },
            //{ id: 157, q: authors.notAbrahamL.q[0], a: authors.notAbrahamL.a, i: authors.notAbrahamL.i, link: authors.notAbrahamL.wiki, image: authors.notAbrahamL.image },
            { id: 158, q: authors.abrahamL.q[0], a: authors.abrahamL.a, i: authors.abrahamL.i, link: authors.abrahamL.wiki, image: authors.abrahamL.image },
            { id: 159, q: authors.elbertH.q[0], a: authors.elbertH.a, i: authors.elbertH.i, link: authors.elbertH.wiki, image: authors.elbertH.image },
            //{ id: 160, q: authors.joeG.q[0], a: authors.joeG.a, i: authors.joeG.i, link: authors.joeG.wiki, image: authors.joeG.image },
            //{ id: 161, q: authors.jackieM.q[0], a: authors.jackieM.a, i: authors.jackieM.i, link: authors.jackieM.wiki, image: authors.jackieM.image },
            //{ id: 162, q: authors.jimC.q[0], a: authors.jimC.a, i: authors.jimC.i, link: authors.jimC.wiki, image: authors.jimC.image },
            //{ id: 163, q: authors.ronW.q[0], a: authors.ronW.a, i: authors.ronW.i, link: authors.ronW.wiki, image: authors.ronW.image },
            //{ id: 164, q: authors.billM.q[0], a: authors.billM.a, i: authors.billM.i, link: authors.billM.wiki, image: authors.billM.image },
            { id: 165, q: authors.emileC.q[0], a: authors.emileC.a, i: authors.emileC.i, link: authors.emileC.wiki, image: authors.emileC.image },
            /*{ id: 166, q: authors.anonymousAffirmation.q[0], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 167, q: authors.anonymousAffirmation.q[1], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 168, q: authors.anonymousAffirmation.q[2], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 169, q: authors.anonymousAffirmation.q[3], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 170, q: authors.anonymousAffirmation.q[4], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 171, q: authors.anonymousAffirmation.q[5], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 172, q: authors.anonymousAffirmation.q[6], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 173, q: authors.anonymousAffirmation.q[7], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 174, q: authors.anonymousAffirmation.q[8], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 175, q: authors.anonymousAffirmation.q[9], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 176, q: authors.anonymousAffirmation.q[10], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 177, q: authors.anonymousAffirmation.q[11], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 178, q: authors.anonymousAffirmation.q[12], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 179, q: authors.anonymousAffirmation.q[13], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 180, q: authors.anonymousAffirmation.q[14], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 181, q: authors.anonymousAffirmation.q[15], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 182, q: authors.anonymousAffirmation.q[16], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 183, q: authors.anonymousAffirmation.q[17], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 184, q: authors.anonymousAffirmation.q[18], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 185, q: authors.anonymousAffirmation.q[19], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 186, q: authors.anonymousAffirmation.q[20], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 187, q: authors.anonymousAffirmation.q[21], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 188, q: authors.anonymousAffirmation.q[22], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 189, q: authors.anonymousAffirmation.q[23], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 190, q: authors.anonymousAffirmation.q[24], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 191, q: authors.anonymousAffirmation.q[25], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 192, q: authors.anonymousAffirmation.q[26], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 193, q: authors.anonymousAffirmation.q[27], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 194, q: authors.anonymousAffirmation.q[28], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 195, q: authors.anonymousAffirmation.q[29], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 196, q: authors.anonymousAffirmation.q[30], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 197, q: authors.anonymousAffirmation.q[31], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 198, q: authors.anonymousAffirmation.q[32], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 199, q: authors.anonymousAffirmation.q[33], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 200, q: authors.anonymousAffirmation.q[34], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 201, q: authors.anonymousAffirmation.q[35], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 202, q: authors.anonymousAffirmation.q[36], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 203, q: authors.anonymousAffirmation.q[37], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 204, q: authors.anonymousAffirmation.q[38], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 205, q: authors.anonymousAffirmation.q[39], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 206, q: authors.anonymousAffirmation.q[40], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 207, q: authors.anonymousAffirmation.q[41], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 208, q: authors.anonymousAffirmation.q[42], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 209, q: authors.anonymousAffirmation.q[43], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 210, q: authors.anonymousAffirmation.q[44], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 211, q: authors.anonymousAffirmation.q[45], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 212, q: authors.anonymousAffirmation.q[46], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },*/


        ],
        blackHistoryQuotes: [
            /*{ q: authors.nelsonM.q[0], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },
            { q: authors.nelsonM.q[1], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },
            { q: authors.nelsonM.q[2], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },*/
            //{ q: authors.frankO.q[0], a: authors.frankO.a, i: authors.frankO.i, link: authors.frankO.wiki, image: authors.frankO.image },
            /*{ q: authors.muhammadA.q[0], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },
            { q: authors.muhammadA.q[1], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },*/
            //{ q: authors.martinK.q[0], a: authors.martinK.a, i: authors.martinK.i, link: authors.martinK.wiki, image: authors.martinK.image },
            /*{ q: authors.langstonH.q[0], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },
            { q: authors.langstonH.q[1], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },*/
            //{ q: authors.desmondT.q[0], a: authors.desmondT.a, i: authors.desmondT.i, link: authors.desmondT.wiki, image: authors.desmondT.image },
            { q: authors.frederickD.q[0], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            { q: authors.frederickD.q[1], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            /*{ q: authors.oprahW.q[0], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { q: authors.oprahW.q[1], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { q: authors.oprahW.q[2], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { q: authors.oprahW.q[3], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },*/
            { q: authors.sojournerT.q[0], a: authors.sojournerT.a, i: authors.sojournerT.i, link: authors.sojournerT.wiki, image: authors.sojournerT.image },
            /*{ q: authors.shirleyC.q[0], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },
            { q: authors.shirleyC.q[1], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },*/
            /*{ q: authors.rosaP.q[0], a: authors.rosaP.a, i: authors.rosaP.i, link: authors.rosaP.wiki, image: authors.rosaP.image },
            { q: authors.rosaP.q[1], a: authors.rosaP.a, i: authors.rosaP.i, link: authors.rosaP.wiki, image: authors.rosaP.image },
            { q: authors.mayaA.q[0], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { q: authors.mayaA.q[1], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { q: authors.mayaA.q[2], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { q: authors.mayaA.q[3], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },*/
            { q: authors.phyllisW.q[0], a: authors.phyllisW.a, i: authors.phyllisW.i, link: authors.phyllisW.wiki, image: authors.phyllisW.image },
            { q: authors.bookerTW.q[0], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            { q: authors.bookerTW.q[1], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
           /* { q: authors.beyonce.q[0], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },
            { q: authors.beyonce.q[1], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },*/
            //{ q: authors.angelaD.q[0], a: authors.angelaD.a, i: authors.angelaD.i, link: authors.angelaD.wiki, image: authors.angelaD.image },
            /*{ q: authors.maeJ.q[0], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            { q: authors.maeJ.q[1], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },*/
            //{ q: authors.colinP.q[0], a: authors.colinP.a, i: authors.colinP.i, link: authors.colinP.wiki, image: authors.colinP.image },
            //{ q: authors.malcolmX.q[0], a: authors.malcolmX.a, i: authors.malcolmX.i, link: authors.malcolmX.wiki, image: authors.malcolmX.image },
            //{ q: authors.aliceW.q[0], a: authors.aliceW.a, i: authors.aliceW.i, link: authors.aliceW.wiki, image: authors.aliceW.image },
            { q: authors.madamWalker.q[0], a: authors.madamWalker.a, i: authors.madamWalker.i, link: authors.madamWalker.wiki, image: authors.madamWalker.image },
            //{ q: authors.dukeE.q[0], a: authors.dukeE.a, i: authors.dukeE.i, link: authors.dukeE.wiki, image: authors.dukeE.image },
            //{ q: authors.bellH.q[0], a: authors.bellH.a, i: authors.bellH.i, link: authors.bellH.wiki, image: authors.bellH.image },
            //{ q: authors.anitaH.q[0], a: authors.anitaH.a, i: authors.anitaH.i, link: authors.anitaH.wiki, image: authors.anitaH.image },
            //{ q: authors.audreyL.q[0], a: authors.audreyL.a, i: authors.audreyL.i, link: authors.audreyL.wiki, image: authors.audreyL.image },
            { q: authors.patriciaB.q[0], a: authors.patriciaB.a, i: authors.patriciaB.i, link: authors.patriciaB.wiki, image: authors.patriciaB.image },
            /*{ q: authors.milesD.q[0], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },
            { q: authors.milesD.q[1], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },*/
            //{ q: authors.ossieD.q[0], a: authors.ossieD.a, i: authors.ossieD.i, link: authors.ossieD.wiki, image: authors.ossieD.image },
            //{ q: authors.corettaK.q[0], a: authors.corettaK.a, i: authors.corettaK.i, link: authors.corettaK.wiki, image: authors.corettaK.image },
            /*{ q: authors.serenaW.q[0], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },
            { q: authors.serenaW.q[1], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },*/
            //{ q: authors.toniM.q[0], a: authors.toniM.a, i: authors.toniM.i, link: authors.toniM.wiki, image: authors.toniM.image },
            ///{ q: authors.jamesB.q[0], a: authors.jamesB.a, i: authors.jamesB.i, link: authors.jamesB.wiki, image: authors.jamesB.image },
            { q: authors.harrietT.q[0], a: authors.harrietT.a, i: authors.harrietT.i, link: authors.harrietT.wiki, image: authors.harrietT.image },
            //{ q: authors.michaelJ.q[0], a: authors.michaelJ.a, i: authors.michaelJ.i, link: authors.michaelJ.wiki, image: authors.michaelJ.image },

        ],
        motivationalQuotes: [
            /*{ q: authors.winstonC.q[0], a: authors.winstonC.a, i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },
            { q: authors.winstonC.q[1], a: authors.winstonC.a, i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },*/
            { q: authors.franklinR.q[0], a: authors.franklinR.a, i: authors.franklinR.i, link: authors.franklinR.wiki, image: authors.franklinR.image },
            { q: authors.theodoreR.q[0], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { q: authors.theodoreR.q[1], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { q: authors.theodoreR.q[2], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            /*{ q: authors.nelsonM.q[0], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },
            { q: authors.nelsonM.q[2], a: authors.nelsonM.a, i: authors.nelsonM.i, link: authors.nelsonM.wiki, image: authors.nelsonM.image },*/
            { q: authors.williamJ.q[0], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { q: authors.williamJ.q[1], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            /*{ q: authors.albertE.q[0], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { q: authors.albertE.q[1], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { q: authors.albertE.q[3], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },*/
            { q: authors.eleanorR.q[0], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { q: authors.eleanorR.q[1], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { q: authors.eleanorR.q[2], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { q: authors.williamY.q[0], a: authors.williamY.a, i: authors.williamY.i, link: authors.williamY.wiki, image: authors.williamY.image },
            //{ q: authors.wayneG.q[0], a: authors.wayneG.a, i: authors.wayneG.i, link: authors.wayneG.wiki, image: authors.wayneG.image },
            //{ q: authors.earlN.q[0], a: authors.earlN.a, i: authors.earlN.i, link: authors.earlN.wiki, image: authors.earlN.image },
            /*{ q: authors.steveJ.q[0], a: authors.steveJ.a, i: authors.steveJ.i, link: authors.steveJ.wiki, image: authors.steveJ.image },
            { q: authors.steveJ.q[1], a: authors.steveJ.a, i: authors.steveJ.i, link: authors.steveJ.wiki, image: authors.steveJ.image },*/
            //{ q: authors.samL.q[0], a: authors.samL.a, i: authors.samL.i, link: authors.samL.wiki, image: authors.samL.image },
            //{ q: authors.normanV.q[0], a: authors.normanV.a, i: authors.normanV.i, link: authors.normanV.wiki, image: authors.normanV.image },
            { q: authors.confucius.q[0], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            { q: authors.confucius.q[1], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            //{ q: authors.danR.q[0], a: authors.danR.a, i: authors.danR.i, link: authors.danR.wiki, image: authors.danR.image },
            { q: authors.henryT.q[0], a: authors.henryT.a, i: authors.henryT.i, link: authors.henryT.wiki, image: authors.henryT.image },
            //{ q: authors.daleC.q[0], a: authors.daleC.a, i: authors.daleC.i, link: authors.daleC.wiki, image: authors.daleC.image },
            //{ q: authors.frankO.q[0], a: authors.frankO.a, i: authors.frankO.i, link: authors.frankO.wiki, image: authors.frankO.image },
            //{ q: authors.peterD.q[0], a: authors.peterD.a, i: authors.peterD.i, link: authors.peterD.wiki, image: authors.peterD.image },
            { q: authors.ralphE.q[0], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { q: authors.ralphE.q[1], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { q: authors.ralphE.q[2], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { q: authors.ralphE.q[3], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { q: authors.maeW.q[0], a: authors.maeW.a, i: authors.maeW.i, link: authors.maeW.wiki, image: authors.maeW.image },
            /*{ q: authors.muhammadA.q[0], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },
            { q: authors.muhammadA.q[2], a: authors.muhammadA.a, i: authors.muhammadA.i, link: authors.muhammadA.wiki, image: authors.muhammadA.image },*/
            { q: authors.friedrichN.q[0], a: authors.friedrichN.a, i: authors.friedrichN.i, link: authors.friedrichN.wiki, image: authors.friedrichN.image },
            //{ q: authors.tonyR.q[0], a: authors.tonyR.a, i: authors.tonyR.i, link: authors.tonyR.wiki, image: authors.tonyR.image },
            { q: authors.thomasE.q[0], a: authors.thomasE.a, i: authors.thomasE.i, link: authors.thomasE.wiki, image: authors.thomasE.image },
            { q: authors.henryF.q[0], a: authors.henryF.a, i: authors.henryF.i, link: authors.henryF.wiki, image: authors.henryF.image },
            { q: authors.laoT.q[0], a: authors.laoT.a, i: authors.laoT.i, link: authors.laoT.wiki, image: authors.laoT.image },
            { q: authors.georgeP.q[0], a: authors.georgeP.a, i: authors.georgeP.i, link: authors.georgeP.wiki, image: authors.georgeP.image },
            //{ q: authors.suzyK.q[0], a: authors.suzyK.a, i: authors.suzyK.i, link: authors.suzyK.wiki, image: authors.suzyK.image },
            { q: authors.florenceN.q[0], a: authors.florenceN.a, i: authors.florenceN.i, link: authors.florenceN.wiki, image: authors.florenceN.image },
            /*{ q: authors.cSLewis.q[0], a: authors.cSLewis.a, i: authors.cSLewis.i, link: authors.cSLewis.wiki, image: authors.cSLewis.image },
            { q: authors.cSLewis.q[0], a: authors.cSLewis.a, i: authors.cSLewis.i, link: authors.cSLewis.wiki, image: authors.cSLewis.image },
            { q: authors.cSLewis.q[1], a: authors.cSLewis.a, i: authors.cSLewis.i, link: authors.cSLewis.wiki, image: authors.cSLewis.image },*/
            { q: authors.mahatmaG.q[0], a: authors.mahatmaG.a, i: authors.mahatmaG.i, link: authors.mahatmaG.wiki, image: authors.mahatmaG.image },
            //{ q: authors.napoleonH.q[0], a: authors.napoleonH.a, i: authors.napoleonH.i, link: authors.napoleonH.wiki, image: authors.napoleonH.image },
            { q: authors.martinK.q[0], a: authors.martinK.a, i: authors.martinK.i, link: authors.martinK.wiki, image: authors.martinK.image },
            /*{ q: authors.langstonH.q[0], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },
            { q: authors.langstonH.q[1], a: authors.langstonH.a, i: authors.langstonH.i, link: authors.langstonH.wiki, image: authors.langstonH.image },*/
            { q: authors.frederickD.q[0], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            /*{ q: authors.oprahW.q[0], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { q: authors.oprahW.q[2], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { q: authors.oprahW.q[3], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },*/
            /*{ q: authors.shirleyC.q[0], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },
            { q: authors.shirleyC.q[1], a: authors.shirleyC.a, i: authors.shirleyC.i, link: authors.shirleyC.wiki, image: authors.shirleyC.image },*/
            /*{ q: authors.rosaP.q[0], a: authors.rosaP.a, i: authors.rosaP.i, link: authors.rosaP.wiki, image: authors.rosaP.image },
            { q: authors.mayaA.q[0], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { q: authors.mayaA.q[3], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },*/
            { q: authors.phyllisW.q[0], a: authors.phyllisW.a, i: authors.phyllisW.i, link: authors.phyllisW.wiki, image: authors.phyllisW.image },
            { q: authors.bookerTW.q[0], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            { q: authors.bookerTW.q[1], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            /*{ q: authors.beyonce.q[0], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },
            { q: authors.beyonce.q[1], a: authors.beyonce.a, i: authors.beyonce.i, link: authors.beyonce.wiki, image: authors.beyonce.image },*/
            /*{ q: authors.maeJ.q[0], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            { q: authors.maeJ.q[1], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            //{ q: authors.colinP.q[0], a: authors.colinP.a, i: authors.colinP.i, link: authors.colinP.wiki, image: authors.colinP.image },
            //{ q: authors.frankS.q[0], a: authors.frankS.a, i: authors.frankS.i, link: authors.frankS.wiki, image: authors.frankS.image },
            { q: authors.malcolmX.q[0], a: authors.malcolmX.a, i: authors.malcolmX.i, link: authors.malcolmX.wiki, image: authors.malcolmX.image },*/
            { q: authors.anneS.q[0], a: authors.anneS.a, i: authors.anneS.i, link: authors.anneS.wiki, image: authors.anneS.image },
            { q: authors.aliceW.q[0], a: authors.aliceW.a, i: authors.aliceW.i, link: authors.aliceW.wiki, image: authors.aliceW.image },
            { q: authors.madamWalker.q[0], a: authors.madamWalker.a, i: authors.madamWalker.i, link: authors.madamWalker.wiki, image: authors.madamWalker.image },
            //{ q: authors.dukeE.q[0], a: authors.dukeE.a, i: authors.dukeE.i, link: authors.dukeE.wiki, image: authors.dukeE.image },
            //{ q: authors.bellH.q[0], a: authors.bellH.a, i: authors.bellH.i, link: authors.bellH.wiki, image: authors.bellH.image },
            //{ q: authors.anitaH.q[0], a: authors.anitaH.a, i: authors.anitaH.i, link: authors.anitaH.wiki, image: authors.anitaH.image },
            { q: authors.audreyL.q[0], a: authors.audreyL.a, i: authors.audreyL.i, link: authors.audreyL.wiki, image: authors.audreyL.image },
            { q: authors.patriciaB.q[0], a: authors.patriciaB.a, i: authors.patriciaB.i, link: authors.patriciaB.wiki, image: authors.patriciaB.image },
            /*{ q: authors.milesD.q[0], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },
            { q: authors.milesD.q[0], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },*/
            { q: authors.ermaB.q[0], a: authors.ermaB.a, i: authors.ermaB.i, link: authors.ermaB.wiki, image: authors.ermaB.image },
            //{ q: authors.corettaK.q[0], a: authors.corettaK.a, i: authors.corettaK.i, link: authors.corettaK.wiki, image: authors.corettaK.image },
            /*{ q: authors.serenaW.q[0], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },
            { q: authors.serenaW.q[1], a: authors.serenaW.a, i: authors.serenaW.i, link: authors.serenaW.wiki, image: authors.serenaW.image },*/
            //{ q: authors.toniM.q[0], a: authors.toniM.a, i: authors.toniM.i, link: authors.toniM.wiki, image: authors.toniM.image },
            //{ q: authors.jamesB.q[0], a: authors.jamesB.a, i: authors.jamesB.i, link: authors.jamesB.wiki, image: authors.jamesB.image },
            { q: authors.harrietT.q[0], a: authors.harrietT.a, i: authors.harrietT.i, link: authors.harrietT.wiki, image: authors.harrietT.image },
            //{ q: authors.michaelJ.q[0], a: authors.michaelJ.a, i: authors.michaelJ.i, link: authors.michaelJ.wiki, image: authors.michaelJ.image },
            { q: authors.markT.q[0], a: authors.markT.a, i: authors.markT.i, link: authors.markT.wiki, image: authors.markT.image },
            { q: authors.markT.q[1], a: authors.markT.a, i: authors.markT.i, link: authors.markT.wiki, image: authors.markT.image },
            //{ q: authors.dalaiL.q[0], a: authors.dalaiL.a, i: authors.dalaiL.i, link: authors.dalaiL.wiki, image: authors.dalaiL.image },
            //{ q: authors.jamieP.q[0], a: authors.jamieP.a, i: authors.jamieP.i, link: authors.jamieP.wiki, image: authors.jamieP.image },
            /*{ q: authors.pabloP.q[0], a: authors.pabloP.a, i: authors.pabloP.i, link: authors.pabloP.wiki, image: authors.pabloP.image },
            { q: authors.pabloP.q[1], a: authors.pabloP.a, i: authors.pabloP.i, link: authors.pabloP.wiki, image: authors.pabloP.image },*/
            //{ q: authors.zigZ.q[0], a: authors.zigZ.a, i: authors.zigZ.i, link: authors.zigZ.wiki, image: authors.zigZ.image },
            //{ q: authors.waltD.q[0], a: authors.waltD.a, i: authors.waltD.i, link: authors.waltD.wiki, image: authors.waltD.image },
            //{ q: authors.vinceL.q[0], a: authors.vinceL.a, i: authors.vinceL.i, link: authors.vinceL.wiki, image: authors.vinceL.image },
            //{ q: authors.charlieC.q[0], a: authors.charlieC.a, i: authors.charlieC.i, link: authors.charlieC.wiki, image: authors.charlieC.image },
            //{ q: authors.joeG.q[0], a: authors.joeG.a, i: authors.joeG.i, link: authors.joeG.wiki, image: authors.joeG.image },
            { q: authors.emileC.q[0], a: authors.emileC.a, i: authors.emileC.i, link: authors.emileC.wiki, image: authors.emileC.image },
        ],
        funnyQuotes: [
            /*{ q: authors.winstonC.q[2], a: authors.winstonC.a , i: authors.winstonC.i, link: authors.winstonC.wiki, image: authors.winstonC.image },*/
            { q: authors.albertE.q[2], a: authors.albertE.a, i: authors.albertE.i, link: authors.albertE.wiki, image: authors.albertE.image },
            { q: authors.oscarW.q[1], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { q: authors.oscarW.q[2], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            //{ q: authors.frankS.q[1], a: authors.frankS.a, i: authors.frankS.i, link: authors.frankS.wiki, image: authors.frankS.image },
            //{ q: authors.dukeE.q[0], a: authors.dukeE.a, i: authors.dukeE.i, link: authors.dukeE.wiki, image: authors.dukeE.image },
            { q: authors.willR.q[0], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            { q: authors.willR.q[1], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            /*{ q: authors.anonymousFunny.q[0], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[1], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[2], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[3], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[4], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[5], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[6], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[7], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[8], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[9], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[10], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[11], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[12], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[13], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[14], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[15], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[16], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[17], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[18], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[19], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[20], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[21], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[22], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },
            { q: authors.anonymousFunny.q[23], a: authors.anonymousFunny.a, i: authors.anonymousFunny.i, link: authors.anonymousFunny.wiki, image: authors.anonymousFunny.image },*/
            /*{ q: authors.stevenW.q[0], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { q: authors.stevenW.q[1], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { q: authors.stevenW.q[2], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },
            { q: authors.stevenW.q[3], a: authors.stevenW.a, i: authors.stevenW.i, link: authors.stevenW.wiki, image: authors.stevenW.image },*/
            //{ q: authors.willF.q[0], a: authors.willF.a, i: authors.willF.i, link: authors.willF.wiki, image: authors.willF.image },
            //{ q: authors.robinW.q[0], a: authors.robinW.a, i: authors.robinW.i, link: authors.robinW.wiki, image: authors.robinW.image },
            //{ q: authors.earlW.q[0], a: authors.earlW.a, i: authors.earlW.i, link: authors.earlW.wiki, image: authors.earlW.image },
            //{ q: authors.luisB.q[0], a: authors.luisB.a, i: authors.luisB.i, link: authors.luisB.wiki, image: authors.luisB.image },
            //{ q: authors.charlieC.q[0], a: authors.charlieC.a, i: authors.charlieC.i, link: authors.charlieC.wiki, image: authors.charlieC.image },
            //{ q: authors.rodneyD.q[0], a: authors.rodneyD.a, i: authors.rodneyD.i, link: authors.rodneyD.wiki, image: authors.rodneyD.image },
            { q: authors.tommyC.q[0], a: authors.tommyC.a, i: authors.tommyC.i, link: authors.tommyC.wiki, image: authors.tommyC.image },
            //{ q: authors.bobH.q[0], a: authors.bobH.a, i: authors.bobH.i, link: authors.bobH.wiki, image: authors.bobH.image },
            //{ q: authors.notAbrahamL.q[0], a: authors.notAbrahamL.a, i: authors.notAbrahamL.i, link: authors.notAbrahamL.wiki, image: authors.notAbrahamL.image },
            { q: authors.abrahamL.q[0], a: authors.abrahamL.a, i: authors.abrahamL.i, link: authors.abrahamL.wiki, image: authors.abrahamL.image },
            { q: authors.elbertH.q[0], a: authors.elbertH.a, i: authors.elbertH.i, link: authors.elbertH.wiki, image: authors.elbertH.image },
            //{ q: authors.joeG.q[0], a: authors.joeG.a, i: authors.joeG.i, link: authors.joeG.wiki, image: authors.joeG.image },
            //{ q: authors.jackieM.q[0], a: authors.jackieM.a, i: authors.jackieM.i, link: authors.jackieM.wiki, image: authors.jackieM.image },
            //{ q: authors.jimC.q[0], a: authors.jimC.a, i: authors.jimC.i, link: authors.jimC.wiki, image: authors.jimC.image },
            //{ q: authors.ronW.q[0], a: authors.ronW.a, i: authors.ronW.i, link: authors.ronW.wiki, image: authors.ronW.image },
            //{ q: authors.billM.q[0], a: authors.billM.a, i: authors.billM.i, link: authors.billM.wiki, image: authors.billM.image },

        ],
        affirmations: [
            { id: 1, q: authors.aristotle.q[0], a: authors.aristotle.a , i: authors.aristotle.i, link: authors.aristotle.wiki, image: authors.aristotle.image },
            { id: 2, q: authors.eleanorR.q[0], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 3, q: authors.eleanorR.q[1], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 4, q: authors.eleanorR.q[2], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            /*{ id: 5, q: authors.oprahW.q[1], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },
            { id: 6, q: authors.oprahW.q[2], a: authors.oprahW.a, i: authors.oprahW.i, link: authors.oprahW.wiki, image: authors.oprahW.image },*/
            /*{ id: 7, q: authors.mayaA.q[1], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },
            { id: 8, q: authors.mayaA.q[2], a: authors.mayaA.a, i: authors.mayaA.i, link: authors.mayaA.wiki, image: authors.mayaA.image },*/
            { id: 9, q: authors.phyllisW.q[0], a: authors.phyllisW.a, i: authors.phyllisW.i, link: authors.phyllisW.wiki, image: authors.phyllisW.image },
            /*{ id: 10, q: authors.maeJ.q[0], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },
            { id: 11, q: authors.maeJ.q[1], a: authors.maeJ.a, i: authors.maeJ.i, link: authors.maeJ.wiki, image: authors.maeJ.image },*/
            //{ id: 12, q: authors.anneS.q[0], a: authors.anneS.a, i: authors.anneS.i, link: authors.anneS.wiki, image: authors.anneS.image },
            { id: 13, q: authors.aliceW.q[0], a: authors.aliceW.a, i: authors.aliceW.i, link: authors.aliceW.wiki, image: authors.aliceW.image },
            { id: 14, q: authors.bellH.q[0], a: authors.bellH.a, i: authors.bellH.i, link: authors.bellH.wiki, image: authors.bellH.image },
            { id: 15, q: authors.anitaH.q[0], a: authors.anitaH.a, i: authors.anitaH.i, link: authors.anitaH.wiki, image: authors.anitaH.image },
            { id: 16, q: authors.audreyL.q[0], a: authors.audreyL.a, i: authors.audreyL.i, link: authors.audreyL.wiki, image: authors.audreyL.image },
            { id: 17, q: authors.patriciaB.q[0], a: authors.patriciaB.a, i: authors.patriciaB.i, link: authors.patriciaB.wiki, image: authors.patriciaB.image },
            /*{ id: 18, q: authors.milesD.q[0], a: authors.milesD.a, i: authors.milesD.i, link: authors.milesD.wiki, image: authors.milesD.image },*/
            //{ id: 19, q: authors.ermaB.q[0], a: authors.ermaB.a, i: authors.ermaB.i, link: authors.ermaB.wiki, image: authors.ermaB.image },
            //{ id: 20, q: authors.toniM.q[0], a: authors.toniM.a, i: authors.toniM.i, link: authors.toniM.wiki, image: authors.toniM.image },
            { id: 21, q: authors.harrietT.q[0], a: authors.harrietT.a, i: authors.harrietT.i, link: authors.harrietT.wiki, image: authors.harrietT.image },
            //{ id: 22, q: authors.michaelJ.q[0], a: authors.michaelJ.a, i: authors.michaelJ.i, link: authors.michaelJ.wiki, image: authors.michaelJ.image },
            //{ id: 23, q: authors.dalaiL.q[0], a: authors.dalaiL.a, i: authors.dalaiL.i, link: authors.dalaiL.wiki, image: authors.dalaiL.image },
            //{ id: 24, q: authors.pabloP.q[1], a: authors.pabloP.a, i: authors.pabloP.i, link: authors.pabloP.wiki, image: authors.pabloP.image },
            { id: 25, q: authors.emileC.q[0], a: authors.emileC.a, i: authors.emileC.i, link: authors.emileC.wiki, image: authors.emileC.image },
            /*{ id: 26, q: authors.anonymousAffirmation.q[0], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 27, q: authors.anonymousAffirmation.q[1], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 28, q: authors.anonymousAffirmation.q[2], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 29, q: authors.anonymousAffirmation.q[3], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 30, q: authors.anonymousAffirmation.q[4], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 31, q: authors.anonymousAffirmation.q[5], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 32, q: authors.anonymousAffirmation.q[6], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 33, q: authors.anonymousAffirmation.q[7], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 34, q: authors.anonymousAffirmation.q[8], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 35, q: authors.anonymousAffirmation.q[9], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 36, q: authors.anonymousAffirmation.q[10], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 37, q: authors.anonymousAffirmation.q[11], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 38, q: authors.anonymousAffirmation.q[12], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 39, q: authors.anonymousAffirmation.q[13], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 40, q: authors.anonymousAffirmation.q[14], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 41, q: authors.anonymousAffirmation.q[15], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 42, q: authors.anonymousAffirmation.q[16], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 43, q: authors.anonymousAffirmation.q[17], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 44, q: authors.anonymousAffirmation.q[18], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 45, q: authors.anonymousAffirmation.q[19], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 46, q: authors.anonymousAffirmation.q[20], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 47, q: authors.anonymousAffirmation.q[21], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 48, q: authors.anonymousAffirmation.q[22], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 49, q: authors.anonymousAffirmation.q[23], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 50, q: authors.anonymousAffirmation.q[24], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 51, q: authors.anonymousAffirmation.q[25], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 52, q: authors.anonymousAffirmation.q[26], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 53, q: authors.anonymousAffirmation.q[27], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 54, q: authors.anonymousAffirmation.q[28], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 55, q: authors.anonymousAffirmation.q[29], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 56, q: authors.anonymousAffirmation.q[30], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 57, q: authors.anonymousAffirmation.q[31], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 58, q: authors.anonymousAffirmation.q[32], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 59, q: authors.anonymousAffirmation.q[33], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 60, q: authors.anonymousAffirmation.q[34], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 61, q: authors.anonymousAffirmation.q[35], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 62, q: authors.anonymousAffirmation.q[36], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 63, q: authors.anonymousAffirmation.q[37], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 64, q: authors.anonymousAffirmation.q[38], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 65, q: authors.anonymousAffirmation.q[39], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 66, q: authors.anonymousAffirmation.q[40], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 67, q: authors.anonymousAffirmation.q[41], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 68, q: authors.anonymousAffirmation.q[42], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 69, q: authors.anonymousAffirmation.q[43], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 70, q: authors.anonymousAffirmation.q[44], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 71, q: authors.anonymousAffirmation.q[45], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },
            { id: 72, q: authors.anonymousAffirmation.q[46], a: authors.anonymousAffirmation.a, i: authors.anonymousAffirmation.i, link: authors.anonymousAffirmation.wiki, image: authors.anonymousAffirmation.image },*/

        ],
      };
    
    res.status(200).json(quotes);
}