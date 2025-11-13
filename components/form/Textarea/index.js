import { forwardRef } from 'react'
import * as S from './styled'
import InputErrors from '@form/components/InputErrors'

const Textarea = forwardRef(
  (
    { name, onChange, onBlur, required, placeholder, disabled, errors, className, forceErrorState },
    fdRef
  ) => {
    const hasErrors = forceErrorState || !!errors?.message
    return (
      <S.InputBox
        hasErrors={hasErrors}
        isDisabled={disabled}
        isRequired={required}
        className={className}
      >
        <S.Textarea
          ref={fdRef}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
        />
        <InputErrors errors={errors} />
      </S.InputBox>
    )
  }
)

export default Textarea
