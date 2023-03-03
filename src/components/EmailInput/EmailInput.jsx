import { useState } from 'react';
import { InputWrapper, StyledLabel, StyledInput } from '../../utils/style/Atom';
import { useTheme } from '../../utils/hooks/hooks';

export default function EmailInput() {

    const { inputValue, setInputValue} = useState('');
    const { theme } = useTheme();

    return (
        <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse Email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </InputWrapper>
    )
}