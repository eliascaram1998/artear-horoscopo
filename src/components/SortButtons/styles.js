import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    sortButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sortButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    activeSortButton: {
        backgroundColor: 'blue',
    },
    sortButtonText: {
        color: 'black',
    },
    activeSortButtonText: {
        color: 'white',
    },
});