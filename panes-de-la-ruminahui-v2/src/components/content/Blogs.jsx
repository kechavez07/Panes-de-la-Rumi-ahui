import React, { useEffect, useState } from "react";
import './Blogs.css'
import CircleDinamic from "../loader/CircleDinamic";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const tableName = "blog";
        fetch(`http://localhost/panes-de-la-ruminahui-v2/public/Administrator/service/get_data.php?table=${tableName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.error("Error:", data.error);
                } else {
                    setBlogs(data);
                }
            })
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    return (
        <>
            <div className="container-blogs">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div class="card-blogs">
                            <div class="infos-blogs">
                                <p class="date-time-blogs">{blog.published_date}</p>
                                <h3 class="title-blogs">{blog.title}</h3>
                                <p class="description-blogs">{blog.content}</p>
                            </div>
                            <div class="author-blogs">{blog.author}</div>
                        </div>
                    ))
                ) : (
                    <CircleDinamic/>
                )}
            </div>
        </>
    )
}

export default Blogs;