import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { productStyles } from '../styles/productStyles';
import api from '../services/api';
import ProductsList from '../components/ProductsList';
import Loading from '../components/Loading';

type Product = {
    id: number;
    name: string;
    price: string;
    brand: string;
    description: string;
    image: string;
}

export default function Products() {

    const [products, setProducts] = useState<Product[]>([]);

    const [ loading, setLoading ] = useState(true);
    const [ search, setSearch ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState<Product[]>([]);

    useEffect(() => {
        function getProducts() {
            api.get('/products')
            .then((response) => {
                    console.log("response: " + response.data);
                    setProducts(response.data)
                    setLoading(false);
                }
            )
            .catch((error) => {
                console.log("error: " + error);
            });
        }

        getProducts();

    }, []);

    return (
        <View style={ productStyles.container }>
            <Text style={ productStyles.title }>
                Lista de Produtos
            </Text>

            {   
                loading ?
                <View style={ productStyles.loading }>
                    <Loading size="large"color='#E59500'/>
                    <Text style={ productStyles.textLoading }>
                        Carregando produtos...
                    </Text>
                </View>
                :
                <FlatList 
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }: { item: Product }) => (
                        <ProductsList item={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={ productStyles.text }>
                            Nenhum produto cadastrado
                        </Text>
                    )}
                />
            }
        </View>
    );
}