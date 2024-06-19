import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logo:{
    height: 173,
    width: '100%',
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 24,
    
  },
  form:{
    marginTop: -30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingBottom: 32,
  },
  tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    padding: 24,
  },
  footerText: {
    color: '#808080',
    fontSize: 12,
  }
})