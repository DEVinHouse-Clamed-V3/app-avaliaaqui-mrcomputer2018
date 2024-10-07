import { useState } from 'react';
import { View, Text } from 'react-native';
import { evaluateStyles } from '../styles/evaluateStyles';
import { productStyles } from '../styles/productStyles';

type Evaluate = {
    id: number;
    productId: string;
    name: string;
    email: string;
    feedback: string;
    experience: string;
    recommend: boolean;
}

export default function Evaluate() {
    
    const [evaluate, setEvaluate] = useState<Evaluate[]>([
        {
            id: 1,
            productId: "insira o ID do produto selecionado",
            name: "insira o nome digitado",
            email: "insira o email digitado",
            feedback: "insira o feedback digitado",
            experience: "insira a experiência selecionada",
            recommend: false
        }
    ]);

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ feedback, setFeedback ] = useState<string>('');
    const [ experience, setExperience ] = useState<string>('');
    const [ recommend, setRecommend ] = useState<boolean>(false);

    return (
        <View style={ productStyles.container }>
            <Text>
                Evaluate
            </Text>
        </View>
    );
}