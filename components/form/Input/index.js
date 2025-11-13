import { forwardRef } from 'react'
import * as S from './styled'
import InputErrors from '@form/components/InputErrors'

const Input = forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      required,
      placeholder,
      disabled,
      errors,
      type = 'text',
      className,
      forceErrorState
    },
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
        <S.Input
          ref={fdRef}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
        <InputErrors errors={errors} />
      </S.InputBox>
    )
  }
)

export default Input
