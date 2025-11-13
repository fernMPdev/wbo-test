import { useEffect, useRef, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Card from '../Card'
import { useDevice } from 'context/DeviceContext'
import * as S from './styled'

const baseOptions = {
  autoWidth: true,
  gap: 4,
  pagination: false,
  arrows: true,
  drag: 'free',
  flickPower: 300,
  perPage: 1,
  dragMinThreshold: { mouse: 0, touch: 10 },
  focus: 'center',
  speed: 600,
  easing: 'ease-in-out'
}

const TeamSlider = ({ members, selected, setSelected }) => {
  const splideRef = useRef(null)
  const { isUp } = useDevice()
  const isXXl = isUp('xxl')

  const sliderOptions = {
    ...baseOptions,
    ...(isXXl && { arrows: false, perPage: 1, gap: '4px' })
  }

  const handleMoved = useCallback(
    (_, newIndex) => {
      setSelected(members[newIndex])
    },
    [members, setSelected]
  )

  useEffect(() => {
    if (splideRef.current && selected) {
      const index = members.findIndex((m) => m.id === selected.id)
      if (index >= 0) {
        splideRef.current.go(index)
      }
    }
  }, [selected, members])

  return (
    <S.Root>
      <Splide ref={splideRef} options={sliderOptions} onMoved={handleMoved}>
        {members.map((member) => (
          <SplideSlide key={member.id}>
            <Card
              member={member}
              onClick={() => setSelected(member)}
              isSelected={selected?.id === member.id}
            />
          </SplideSlide>
        ))}
      </Splide>
    </S.Root>
  )
}

export default TeamSlider
