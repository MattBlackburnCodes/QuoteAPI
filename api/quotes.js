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
            q: 'I am the best',
            a: 'Toad'
        }
    ]
    
    res.status(200).json(quotes);
}