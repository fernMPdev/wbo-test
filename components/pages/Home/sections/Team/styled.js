import styled from 'styled-components'

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.blue};
  padding: 3rem 1rem;
  ${({ theme }) => theme.media.md} {
    padding: 3rem 1.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 32px;

  ${({ theme }) => theme.media.xxl} {
    align-items: flex-start;
    padding: 1rem;
    border-radius: 4px;
    gap: 5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ theme }) => theme.media.md} {
    gap: 0;
  }
`

export const Line = styled.div`
  margin-top: 8px;
  height: 4px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.media.md} {
    margin-bottom: 1rem;
  }
`

export const WrapperSlider = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  ${({ theme }) => theme.media.xxl} {
    display: grid;
    grid-template-columns: 550px 1fr;
    flex-direction: row-reverse;
    gap: 0;
  }
`

export const Container = styled.div`
  width: 100%;
`
export const Wave = styled.div`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: -2px;
  left: 0;
  z-index: 0;
`
export const WaveContainer = styled.div`
  padding: 56px 0 32px 0;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.media.lg} {
    padding: 112px 0 86px 0;
  }
`

export const RootWave = styled.div`
  background-color: #fed154;
  position: relative;
`
