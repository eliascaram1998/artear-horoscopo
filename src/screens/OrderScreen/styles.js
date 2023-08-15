import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  signName: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
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
    fontSize: windowWidth * 0.05,
    textAlign: 'center',
    marginTop: windowWidth * 0.08,
  },
  cardVertical: {
    flexDirection: 'row',
    paddingVertical: windowWidth * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cardHorizontal: {
    paddingVertical: windowWidth * 0.02,
    width: windowWidth * 0.95,
    marginHorizontal: windowWidth * 0.025,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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