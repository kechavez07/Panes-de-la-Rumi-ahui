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
      [ id, name, description, price, id_category]
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
app.get('/product_promotion_id_promotion/:id', async (req, res) => {
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
    const { id_producto } = req.body;
    const result = await pool.query(
      'UPDATE product_promotion SET id_product = $2 WHERE id_promotion = $1 RETURNING *',
      [ id, id_producto]
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



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});