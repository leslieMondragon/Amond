import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = idCategory 
                                ? query(collection(db, 'Items'), where('category', '==', idCategory)) 
                                : collection(db, 'Items');
        getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [idCategory]);

    return (
        <main>
            {loading ? <Loading/> : <ItemList Items={Items}/>}
        </main>
    )
}

export default ItemListContainer;
