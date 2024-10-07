import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { evaluateStyles } from '../styles/evaluateStyles';
import { productStyles } from '../styles/productStyles';
import { globalStyles } from '../styles/globalStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Evaluate = {
    id: number;
    productId: string;
    name: string;
    email: string;
    feedback: string;
    experience: string;
    recommend: boolean;
}

export default function Evaluate({route} : {route: any}) {
    // pegando parametros da rota
    const { productId } = route.params;
    
    const [evaluate, setEvaluate] = useState<Evaluate[]>([
        {
            id: 1,
            productId: productId,
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
            <View>
                <Text style={ globalStyles.title }>
                    Nos dê seu feedback
                </Text>

                <Text style={ globalStyles.subtitle }>
                    Sua opinião é importante para nós.
                    Por favor, compartilhe a sua experiência.
                </Text>
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput
                    style={ evaluateStyles.input } 
                    value={name}
                    onChangeText={setName}
                    placeholder="Seu nome..."
                />
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput 
                    style={ evaluateStyles.input } 
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Seu email..."
                />
            </View>

            <View style={ evaluateStyles.inputArea }>
                <TextInput 
                    style={ evaluateStyles.input } 
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder="Seu feedback..."
                />
            </View>

            <View>
                <Text style={[ globalStyles.subtitle, 
                    {
                        fontWeight: "bold", 
                        textAlign: "left",
                        color: "#333",
                        fontSize: 18,
                    }] 
                }>
                    Compartilhe sua experiência
                </Text>
            </View>

            <View>
                <BouncyCheckbox
                    size={20}
                    fillColor="#666"
                    unFillColor="#FFFFFF"
                    text="Recomendaria para outras pessoas?"
                    iconStyle={{ borderColor: "#666" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    textStyle={{ 
                        color: "#666", 
                        textDecorationLine: "none", 
                        fontSize: 16
                     }}
                    onPress={(recommend: boolean) => {console.log(recommend)}}
                />

            </View>
        </View>
    );
}