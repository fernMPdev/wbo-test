import Icon from '@atoms/Icon'
import Text from '@atoms/Text'
import { forwardRef } from 'react'

import * as S from './styled'

const Checkbox = forwardRef(
  (
    {
      name,
      label,
      onChange,
      onBlur,
      disabled,
      description,
      onClick,
      active,
      indeterminate,
      className
    },
    fdRef
  ) => {
    return (
      <label htmlFor={name} onClick={onClick} className={className}>
        {name && (
          <S.Input
            ref={fdRef}
            id={name}
            type='checkbox'
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
          />
        )}
        <S.InputBox hasDescription={!!description} sIsActive={active}>
          <S.Checkbox>
            {indeterminate ? (
              <Icon iconName='dash' size='1.4em' />
            ) : (
              <Icon iconName='ok' size='1.4em' />
            )}
          </S.Checkbox>
          {label && (
            <S.InfoBox>
              <S.Label>
                <Text font='actions.form.checkbox.label' translate>
                  {label}
                </Text>
              </S.Label>
              {description && (
                <S.Description>
                  <Text font='body.paragraph' translate>
                    {description}
                  </Text>
                </S.Description>
              )}
            </S.InfoBox>
          )}
        </S.InputBox>
      </label>
    )
  }
)

export default Checkbox
