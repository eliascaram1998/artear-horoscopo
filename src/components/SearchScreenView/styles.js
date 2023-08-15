import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: windowWidth * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  filterInput: {
    flex: 1,
    padding: windowWidth * 0.02,
    borderWidth: 1,
    color: 'black',
    borderColor: '#ccc',
    borderRadius: windowWidth * 0.02,
    marginRight: windowWidth * 0.03,
  },
  clearButton: {
    backgroundColor: 'red',
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowWidth * 0.015,
    borderRadius: windowWidth * 0.02,
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
    paddingVertical: windowWidth * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardHorizontal: {
    paddingVertical: windowWidth * 0.03,
    width: windowWidth * 0.95,
    marginHorizontal: windowWidth * 0.025,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContainer: {
    flex: 1,
  },
  signName: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: windowWidth * 0.008,
  },
  descriptionText: {
    color: 'black',
  },
  circleImage: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: (windowWidth * 0.2) / 2,
    marginRight: windowWidth * 0.03,
  },
  errorText: {
    color: 'red',
    fontSize: windowWidth * 0.045,
    textAlign: 'center',
    marginTop: windowWidth * 0.05,
  },
  media: {
    width: '20%',
    marginRight: windowWidth * 0.03,
    height: windowWidth * 0.2,
    overflow: 'hidden',
    borderRadius: (windowWidth * 0.2) / 2,
  },
  highlightedBackground: {
    backgroundColor: '#e3e4e5',
  },
});