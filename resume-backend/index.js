
const express = require('express');
const cors = require('cors');
const connectDB = require('./config'); 
const Resumedata = require('./Resume');
const SignUp = require('./SignUp');
const Review = require('./Review');

const app = express();
const port = process.env.PORT;
connectDB();

app.use(cors());
app.use(express.json());

app.post('/Resume', async (req, res) => {
  try {
    const content = new Resumedata(req.body);
    const savedContent = await content.save();
    res.status(201).json(savedContent);
  } catch (error) {
    console.error('Error saving template content:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/Resume', async (req, res) => {
    try {
      const data = await Resumedata.findOne().sort({ createdAt: -1 });
      res.json(data);
    } catch (error) {
      console.error('Error fetching resume data:', error);
      res.status(500).send('Internal Server Error');
    }
});


app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await SignUp.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new SignUp({ name, email, password });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/signup',async(req,res)=>{
  try{
    const signupdata = await SignUp.find();
    res.json(signupdata);
  }catch(error){
    console.error("error in catch")
  }
})
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await SignUp.findOne({ email, password }).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).send({ message: 'User already exists' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/Review', async (req, res) => {
  try {
    console.log('Received review data:', req.body); // Log the incoming data for debugging
    const review = new Review(req.body);
    const reviewData = await review.save();
    res.send(reviewData);
  } catch (error) {
    console.error('Error saving review:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/Review', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
