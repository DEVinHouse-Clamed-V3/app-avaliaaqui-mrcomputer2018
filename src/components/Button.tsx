import { View, Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

type ButtonProps = {
    title: string;
    width?: string | number;
    handleAction: Function;
    bgColor: string;
    fontSize?: number;
}

export default function Button({ title, width, handleAction, bgColor, fontSize } : ButtonProps) {
    return (
        <TouchableOpacity
        style={[ buttonStyles.button, 
            { backgroundColor: bgColor, width: 
                typeof width === 'string' ? parseInt(width) : 
                width }]} 
        onPress={() => handleAction()}>
            <Text style={[ buttonStyles.textButton, { fontSize: fontSize } ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}   