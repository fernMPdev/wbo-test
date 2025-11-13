import styled from 'styled-components'

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 76px 16px;
  background-color: #1e2734;
  gap: 1rem;
  ${({ theme }) => theme.media.md} {
    padding: 86px 24px;
    gap: 2rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 100px 24px;
  }
  ${({ theme }) => theme.media.xl} {
    padding: 144px 24px;
  }
`

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProcessContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  ${({ theme }) => theme.media.md} {
    gap: 42px;
  }
  ${({ theme }) => theme.media.lg} {
    gap: 56px;
  }
`

export const ProcessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 220px;
  text-align: center;
`

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-bottom: 8px;

  svg {
    font-size: 50px;
    color: #082a41;
  }

  ${({ theme }) => theme.media.md} {
    margin-bottom: 1rem;
  }
`

export const NumberCircle = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border: 3px solid #fff984;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
