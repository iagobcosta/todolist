import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 9999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '80%',
  },
  text: {
    color: '#F2F2F2',
    fontSize: 14,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})