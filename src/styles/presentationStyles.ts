import { StyleSheet } from "react-native";

export const presentationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginVertical: 30,
        justifyContent: "center",
    },
    imageArea: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 20,
    },
    image: {
        width: 100,
        height: 180,
        marginVertical: 10,
    },
    imageLandscape: {
        width: 180,
        height: 100,
    },
    textArea: {
        alignItems: "center",
        marginVertical: 50,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "#555",
        textAlign: "center",
    },
    buttonArea: {
        alignItems: "center",
        marginVertical: 50,
    },
});