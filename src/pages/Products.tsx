import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { productStyles } from '../styles/productStyles';

export default function Products() {

    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Vingadores: Ultimato (Blu-ray)",
            "price": "R$ 39,99",
            "brand": "Marvel Studios",
            "description": "O épico final da saga dos Vingadores, com muita ação e emoção.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92RibS6nXGww1R7R2dYrHb53A0aS9CbjE5w&s"
          }
    ]);

    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ filteredProducts, setFilteredProducts ] = useState([]);

    return (
        <View style={ productStyles.container }>
            <Text style={ productStyles.title }>
                Lista de Produtos
            </Text>
            <FlatList 
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={ productStyles.text }>
                        {item.name}
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={ productStyles.text }>
                        Nenhum produto cadastrado
                    </Text>
                )}
            />
        </View>
    );
}