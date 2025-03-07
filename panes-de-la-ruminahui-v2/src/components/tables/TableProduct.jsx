import React, { useState, useEffect } from 'react';
import CircleDinamic from '../loader/CircleDinamic';

const Table = () => {
    const [data, setData] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', price: '' });
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`https://api-panes-ruminahui.onrender.com/product`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setData(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }

    const deleteItem = (id) => {
        fetch(`https://api-panes-ruminahui.onrender.com/product/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (response.status === 204) {
                getData();
                window.alert('Producto eliminado exitosamente');
            }
        }).catch((error) => {
            console.log("Error delete", error);
        });
    }

    const handleEditClick = (product) => {
        setEditingProduct(product.id_product);
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price
        });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleNewProductChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api-panes-ruminahui.onrender.com/product/${editingProduct}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then(() => {
            getData();
            setEditingProduct(null);
            setFormData({ name: '', description: '', price: '' });
        })
        .catch((error) => console.error("Error al actualizar producto:", error));
    }

    const handleNewProductSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api-panes-ruminahui.onrender.com/product`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
        .then((response) => response.json())
        .then(() => {
            getData();
            setNewProduct({ name: '', description: '', price: '' });
        })
        .catch((error) => console.error("Error al crear producto:", error));
    }

    return (
        <>
            <h2>Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id_product}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => handleEditClick(item)}>Editar</button>
                                    <button onClick={() => deleteItem(item.id_product)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <CircleDinamic />
                    )}
                </tbody>
            </table>
            
            {editingProduct && (
                <div>
                    <h3>Editar Producto</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
                        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" required />
                        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" required />
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={() => setEditingProduct(null)}>Cancelar</button>
                    </form>
                </div>
            )}

            <div>
                <h3>Crear Nuevo Producto</h3>
                <form onSubmit={handleNewProductSubmit}>
                    <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} placeholder="Nombre" required />
                    <input type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} placeholder="Descripción" required />
                    <input type="number" name="price" value={newProduct.price} onChange={handleNewProductChange} placeholder="Precio" required />
                    <button type="submit">Crear</button>
                </form>
            </div>
        </>
    );
}

export default Table;
