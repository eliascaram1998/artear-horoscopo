import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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