const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Set up Sequelize with a simple model
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'pictionary_db',
  });

  const Drawing = sequelize.define('Drawing', {
    word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

// Sync the model with the database
sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
  });
  
  // Set up routes
  app.get('/drawings', async (req, res) => {
    const drawings = await Drawing.findAll();
    res.json(drawings);
  });

  app.post('/drawings', async (req, res) => {
    const { word, image } = req.body;
  
    try {
      const newDrawing = await Drawing.create({ word, image });
      res.json(newDrawing);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });