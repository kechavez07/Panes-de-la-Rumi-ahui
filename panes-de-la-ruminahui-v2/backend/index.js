const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

/////////// TABLE: product ///////////

// get all products
app.get('/product', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// get a product
app.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM product WHERE id_product = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// create product
app.post('/product', async (req, res) => {
  try {
    const { name, description, price, id_category } = req.body;
    const result = await pool.query(
      'INSERT INTO product (name, description, price, id_category) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, id_category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// upload product
app.put('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, id_category } = req.body;
    const result = await pool.query(
      'UPDATE product SET name = $2, description = $3, price = $4, id_category = $5 WHERE id_product = $1 RETURNING *',
      [id, name, description, price, id_category]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// delete product
app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM product WHERE id_product = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

/////////// TABLE: product_promotion ///////////

app.get('/product_promotion', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product_promotion');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// get by id_promotion
app.get('/product_promotion_id_promotion/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM product_promotion WHERE id_promotion = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// get by id_product
app.get('/product_promotion_id_product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM product_promotion WHERE id_product = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.post('/product_promotion', async (req, res) => {
  try {
    const { id_product, id_promotion } = req.body;
    const result = await pool.query(
      'INSERT INTO product_promotion (id_product, id_promotion) VALUES ($1, $2) RETURNING *',
      [id_product, id_promotion]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.put('/product_promotion/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_product } = req.body;
    const result = await pool.query(
      'UPDATE product_promotion SET id_product = $2 WHERE id_promotion = $1 RETURNING *',
      [id, id_product]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.delete('/product_promotion/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM product_promotion WHERE id_product = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// aqui poner las demas apissssssssssssssssssssssss

// blog api

app.get('/blog', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blog');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.get('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM blog WHERE id_blog = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.post('/blog', async (req, res) => {
  try {
    const { title, content, author, published_date } = req.body;
    const result = await pool.query(
      'INSERT INTO blog (title, content, author, published_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, content, author, published_date || new Date()]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.put('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const result = await pool.query(
      'UPDATE blog SET title = $2, content = $3, author = $4 WHERE id_blog = $1 RETURNING *',
      [id, title, content, author]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.delete('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM blog WHERE id_blog = $1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

// category api

app.get('/category', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM category');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error');
  }
});

app.post('/category', async (req, res) => {
  try {
