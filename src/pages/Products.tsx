import { View, Text } from 'react-native';
import { productStyles } from '../styles/productStyles';

export default function Products() {
    return (
        <View style={ productStyles.container }>
            <Text>Products</Text>
        </View>
    );
}