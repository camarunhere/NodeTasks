const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 9053;


app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', async (req, res) => {
    const { name, email, phone, profession, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`We are watching on the port${port}/`);
});
