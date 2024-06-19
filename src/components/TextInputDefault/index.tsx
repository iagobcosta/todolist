import { TextInput } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

interface TextInputDefaultProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export function TextInputDefault({ placeholder, value, onChangeText }: TextInputDefaultProps) {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && { borderColor: '#5E60CE' }]}
      placeholder={placeholder}
      placeholderTextColor="#808080"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      cursorColor='#FFFFFF'
      value={value}
      onChangeText={onChangeText}
    />
  )
}