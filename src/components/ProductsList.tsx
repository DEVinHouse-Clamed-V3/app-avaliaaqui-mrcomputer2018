import { View, Text } from 'react-native';
import { productsListStyles } from '../styles/productsListStyles';

type ProductsListProps = {
    name: string;
}

export default function ProductsList({ name }: ProductsListProps) {
    return (
        <View style={ productsListStyles.container}>
            <Text>
                { name }
            </Text>
        </View>
    );
}