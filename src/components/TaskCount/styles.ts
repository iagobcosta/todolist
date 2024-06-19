import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 14,
    color: '#808080',
  },
  contentCount: {
    width: 'auto',
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  count: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: 'bold',
  },
})