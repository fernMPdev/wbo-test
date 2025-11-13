import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`

export const ServicesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.blue};

  padding: 3rem 1rem;
`

export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

    ${({ theme }) => theme.media.lg} {
     grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.media.lg} {
    gap: 1.5rem;
  }


  ${({ theme }) => theme.media.xxl} {
   grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));
  }
`

export const Card = styled.article`
  border: 2px solid transparent;
  border-radius: 0.75rem;
  background-color: #181826;

  box-shadow:
    0 0.5px 1px rgba(0, 0, 0, 0.3),
    0 0 5px rgba(255, 255, 255, 0.03);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition:
    border 0.2s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
  height: 100%;
  padding: 1rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-5px);
      box-shadow:
        0 6px 15px rgba(0, 0, 0, 0.6),
        0 0 20px rgba(255, 255, 255, 0.08);
    }

    &:hover div {
      animation: ${bounce} 0.4s ease;
    }
  }

  ${({ theme }) => theme.media.lg} {
    padding: 1rem;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(255, 255, 255, 0.05);
  }
`

export const IconWrapper = styled.div`
  width: 2rem;

  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 3rem;
    height: 3rem;
  }
  ${({ theme }) => theme.media.lg} {
    margin-bottom: 1rem;
    justify-content: center;
  }
`
