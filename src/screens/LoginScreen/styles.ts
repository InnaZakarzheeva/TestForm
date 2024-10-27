import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    color: '#010101',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    lineHeight: 22,
    color: '#010101',
  },
  eclipseInner: {
    borderColor: 'rgba(15, 15, 16, 0.2)',
    borderWidth: 1,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eclipseCenter: {
    borderColor: 'rgba(15, 15, 16, 0.2)',
    borderWidth: 1,
    width: 240,
    height: 240,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eclipseOuter: {
    borderColor: 'rgba(15, 15, 16, 0.2)',
    borderWidth: 1,
    width: 330,
    height: 330,
    borderRadius: 165,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 26,
  },
  button: {
    height: 46,
    width: 97,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 5,
  },
  gradient: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.95)',
  },
  imageFrame: {
    zIndex: 2,
  },
  imageIcon: {
    zIndex: 1,
    position: 'absolute',
    width: 58,
    height: 58,
  },
  imageSmallIcon: {
    zIndex: 1,
    position: 'absolute',
    width: 32,
    height: 32,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    fontWeight: '300',
    paddingLeft: 16,
    lineHeight: 16,
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

export const inputStyles = (isValidInput: boolean) => StyleSheet.create({
  input: {
    height: 46,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: isValidInput ? 16 : 0,
    borderColor: isValidInput ? 'rgba(15, 15, 16, 0.05)' : 'red',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '400',
  },
}); 

export default styles;
