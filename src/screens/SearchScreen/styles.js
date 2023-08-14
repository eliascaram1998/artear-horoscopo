import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  filterInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    color: 'black',
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  clearButtonText: {
    color: 'white',
  },
  filterPicker: {
    flex: 1,
    color: 'black',
  },
  cardVertical: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardHorizontal: {
    padding: 10,
    width:380,
    marginHorizontal:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  signName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    color: 'black',
  },
  circleImage: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  media: {
    width: '20%',
    marginRight: 10,
    height: 70,
    overflow: 'hidden',
    borderRadius: 300,
  },
  highlightedBackground: {
    backgroundColor: '#e3e4e5',
  },
});