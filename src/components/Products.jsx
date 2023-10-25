import React from 'react';
import { useState } from 'react';
import useProducts from '../hooks/useProducts';

export default function Products() {
    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProducts({salesOnly : checked});

    const handleChange = () => setChecked((prev) => !prev);

    if(loading) return <p>Loding...</p>

    if(error) return <p>{error}</p>
    
    return (
        <>
             <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                Show Only 🎈 Sale    
            </label> 
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}    
            </ul> 
        </>
    );
}
