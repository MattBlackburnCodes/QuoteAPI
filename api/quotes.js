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
        henryT: {
            a: "Henry David Thoreau",
            i: `Henry David Thoreau was an American essayist, poet, and philosopher known for his transcendentalist beliefs. His most famous work, "Walden," reflects on simple living in natural surroundings and critiques materialism. Thoreau's writings continue to inspire environmental movements and discussions on civil disobedience.`,
            wiki: "https://en.wikipedia.org/wiki/Henry_David_Thoreau",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg/1024px-Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg",
            q: [
               "Go confidently in the direction of your dreams. Live the life you have imagined."
            ]
        },
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
        florenceN: {
            a: "Florence Nightingale",
            i: `Florence Nightingale was an English social reformer and statistician, best known as the founder of modern nursing. Her pioneering work during the Crimean War revolutionized healthcare practices and established nursing as a respected profession. Nightingale's emphasis on sanitation, patient care, and statistical analysis laid the groundwork for evidence-based medicine.`,
            wiki: "https://en.wikipedia.org/wiki/Florence_Nightingale",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/1024px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg",
            q: [
                "I attribute my success to this: I never gave or took any excuse."
            ]
        },
        mahatmaG: {
            a: "Mahatma Gandhi",
            i: `Mahatma Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist who led the Indian independence movement against British rule. He is best known for his philosophy of nonviolent resistance and civil disobedience, which inspired movements for civil rights and freedom across the world. Gandhi's legacy continues to influence leaders and activists advocating for peace and justice.`,
            wiki: "https://en.wikipedia.org/wiki/Mahatma_Gandhi",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg",
            q: [
                "Live as if you were to die tomorrow. Learn as if you were to live forever."
            ]
        },
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
        sojournerT: {
            a: "Sojourner Truth",
            i: `Sojourner Truth was an African American abolitionist and women’s rights activist who was born into slavery and gained her freedom in the early 1800s. Known for her powerful speeches and unshakable faith, she became a leading voice in the fight for equality and justice. Her most famous speech, “Ain’t I a Woman?”, challenged racial and gender inequalities and continues to inspire movements for human rights today.`,
            wiki: "https://en.wikipedia.org/wiki/Sojourner_Truth",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Sojourner_Truth%2C_1870_%28cropped%2C_restored%29.jpg",
            q: [
                "Truth is powerful and it prevails."
            ]
        },
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
        madamWalker: {
            a: "Madam C.J. Walker",
            i: `Madam C.J. Walker was an African American entrepreneur, philanthropist, and activist who became the first self-made female millionaire in the United States. She built a beauty empire developing haircare products for Black women and used her wealth to support civil rights causes and uplift her community. Her legacy is one of innovation, empowerment, and breaking barriers against all odds.`,
            wiki: "https://en.wikipedia.org/wiki/Madam_C.J._Walker",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Madam_CJ_Walker_face_circa_1914.jpg",
            q: [
                "I had to make my own living and my own opportunity! But I made it!"
            ]
        },
        harrietT: {
            a: "Harriet Tubman",
            i: `Harriet Tubman was an American abolitionist and political activist best known for her work with the Underground Railroad, helping enslaved people escape to freedom. Born into slavery, she escaped and then returned many times to guide others to safety, risking her life each time. Tubman became a powerful symbol of courage, resilience, and unwavering commitment to justice and human dignity.`,
            wiki: "https://en.wikipedia.org/wiki/Harriet_Tubman",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Harriet_Tubman_1895.jpg",
            q: [
                "Every great dream begins with a dreamer."
            ]
        },
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
        emileC: {
            a: "Emile Coue",
            i: `Emile Coué was a French psychologist and pharmacist known for his work in autosuggestion and the placebo effect. He developed the Coué method, emphasizing the power of positive thinking and self-affirmation in achieving personal goals. Coué's teachings have influenced psychology and self-help practices, promoting the idea that belief can lead to positive change.`,
            wiki: "https://en.wikipedia.org/wiki/%C3%89mile_Cou%C3%A9",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/%C3%89mile_Cou%C3%A9_3.jpg",
            q: [
                "Every day, in every way, I am getting better and better."
            ]
        },
    }

    const quotes = {
        randomQuotes: [
            { id: 1, q: authors.franklinR.q[0], a: authors.franklinR.a, i: authors.franklinR.i, link: authors.franklinR.wiki, image: authors.franklinR.image },
            { id: 2, q: authors.theodoreR.q[0], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { id: 3, q: authors.theodoreR.q[1], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { id: 4, q: authors.theodoreR.q[2], a: authors.theodoreR.a, i: authors.theodoreR.i, link: authors.theodoreR.wiki, image: authors.theodoreR.image },
            { id: 5, q: authors.williamJ.q[0], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 6, q: authors.williamJ.q[1], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 7, q: authors.williamJ.q[2], a: authors.williamJ.a, i: authors.williamJ.i, link: authors.williamJ.wiki, image: authors.williamJ.image },
            { id: 8, q: authors.aristotle.q[0], a: authors.aristotle.a, i: authors.aristotle.i, link: authors.aristotle.wiki, image: authors.aristotle.image },
            { id: 9, q: authors.waltW.q[0], a: authors.waltW.a, i: authors.waltW.i, link: authors.waltW.wiki, image: authors.waltW.image },
            { id: 10, q: authors.eleanorR.q[0], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 11, q: authors.eleanorR.q[1], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 12, q: authors.eleanorR.q[2], a: authors.eleanorR.a, i: authors.eleanorR.i, link: authors.eleanorR.wiki, image: authors.eleanorR.image },
            { id: 13, q: authors.williamY.q[0], a: authors.williamY.a, i: authors.williamY.i, link: authors.williamY.wiki, image: authors.williamY.image },
            { id: 14, q: authors.confucius.q[0], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            { id: 15, q: authors.confucius.q[1], a: authors.confucius.a, i: authors.confucius.i, link: authors.confucius.wiki, image: authors.confucius.image },
            { id: 16, q: authors.henryT.q[0], a: authors.henryT.a, i: authors.henryT.i, link: authors.henryT.wiki, image: authors.henryT.image },
            { id: 17, q: authors.ralphE.q[0], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 18, q: authors.ralphE.q[1], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 19, q: authors.ralphE.q[2], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 20, q: authors.ralphE.q[3], a: authors.ralphE.a, i: authors.ralphE.i, link: authors.ralphE.wiki, image: authors.ralphE.image },
            { id: 21, q: authors.friedrichN.q[0], a: authors.friedrichN.a, i: authors.friedrichN.i, link: authors.friedrichN.wiki, image: authors.friedrichN.image },
            { id: 22, q: authors.oscarW.q[0], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { id: 23, q: authors.oscarW.q[1], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { id: 24, q: authors.oscarW.q[2], a: authors.oscarW.a, i: authors.oscarW.i, link: authors.oscarW.wiki, image: authors.oscarW.image },
            { id: 25, q: authors.thomasE.q[0], a: authors.thomasE.a, i: authors.thomasE.i, link: authors.thomasE.wiki, image: authors.thomasE.image },
            { id: 26, q: authors.henryF.q[0], a: authors.henryF.a, i: authors.henryF.i, link: authors.henryF.wiki, image: authors.henryF.image },
            { id: 27, q: authors.laoT.q[0], a: authors.laoT.a, i: authors.laoT.i, link: authors.laoT.wiki, image: authors.laoT.image },
            { id: 28, q: authors.georgeP.q[0], a: authors.georgeP.a, i: authors.georgeP.i, link: authors.georgeP.wiki, image: authors.georgeP.image },
            { id: 29, q: authors.florenceN.q[0], a: authors.florenceN.a, i: authors.florenceN.i, link: authors.florenceN.wiki, image: authors.florenceN.image },
            { id: 30, q: authors.mahatmaG.q[0], a: authors.mahatmaG.a, i: authors.mahatmaG.i, link: authors.mahatmaG.wiki, image: authors.mahatmaG.image },
            { id: 31, q: authors.frederickD.q[0], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            { id: 32, q: authors.frederickD.q[1], a: authors.frederickD.a, i: authors.frederickD.i, link: authors.frederickD.wiki, image: authors.frederickD.image },
            { id: 33, q: authors.sojournerT.q[0], a: authors.sojournerT.a, i: authors.sojournerT.i, link: authors.sojournerT.wiki, image: authors.sojournerT.image },
            { id: 34, q: authors.phyllisW.q[0], a: authors.phyllisW.a, i: authors.phyllisW.i, link: authors.phyllisW.wiki, image: authors.phyllisW.image },
            { id: 35, q: authors.bookerTW.q[0], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            { id: 36, q: authors.bookerTW.q[1], a: authors.bookerTW.a, i: authors.bookerTW.i, link: authors.bookerTW.wiki, image: authors.bookerTW.image },
            { id: 37, q: authors.madamWalker.q[0], a: authors.madamWalker.a, i: authors.madamWalker.i, link: authors.madamWalker.wiki, image: authors.madamWalker.image },
            { id: 38, q: authors.harrietT.q[0], a: authors.harrietT.a, i: authors.harrietT.i, link: authors.harrietT.wiki, image: authors.harrietT.image },
            { id: 39, q: authors.markT.q[0], a: authors.markT.a, i: authors.markT.i, link: authors.markT.wiki, image: authors.markT.image },
            { id: 40, q: authors.willR.q[0], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            { id: 41, q: authors.willR.q[1], a: authors.willR.a, i: authors.willR.i, link: authors.willR.wiki, image: authors.willR.image },
            { id: 42, q: authors.abrahamL.q[0], a: authors.abrahamL.a, i: authors.abrahamL.i, link: authors.abrahamL.wiki, image: authors.abrahamL.image },
            { id: 43, q: authors.elbertH.q[0], a: authors.elbertH.a, i: authors.elbertH.i, link: authors.elbertH.wiki, image: authors.elbertH.image },
            { id: 44, q: authors.emileC.q[0], a: authors.emileC.a, i: authors.emileC.i, link: authors.emileC.wiki, image: authors.emileC.image },
        ]
      };
    
    res.status(200).json(quotes);
}