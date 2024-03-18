const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            throw new Error('Invalid input. Expecting an data.');
        }

        const evenNumbers = data.filter(num => num % 2 === 0);
        const oddNumbers = data.filter(num => num % 2 !== 0);
        const alphabets = data.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

        const user_id = 'vanshika_aggarwal_21112002';
        const email_id = 'vanshika1513.be21@chitkara.edu.in';
        const roll_number = '2110992065';

        const response = {
            user_id,
            email_id,
            roll_number,
            is_success: true,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets: alphabets
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});