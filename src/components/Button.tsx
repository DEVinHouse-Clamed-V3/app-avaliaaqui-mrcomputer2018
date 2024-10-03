import { View, Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

type ButtonProps = {
    title: string;
    width?: string | number;
    handleAction: Function;
    bgColor: string;
}

export default function Button({ title, width, handleAction, bgColor } : ButtonProps) {
    return (
        <TouchableOpacity
        style={[ buttonStyles.button, { backgroundColor: bgColor, width: typeof width === 'string' ? parseInt(width) : width }]} 
        onPress={() => {}}>
            <Text style={ buttonStyles.textButton }>
                {title}
            </Text>
        </TouchableOpacity>
    );
}   