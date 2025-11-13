import styled from 'styled-components'

export const Menu = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.black};
  position: relative;
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MenuLinks = styled.ul`
  margin: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 650px;
  color: ${({ theme }) => theme.colors.neutral.white};
  gap: 46px;
`

export const LinkPainted = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  color: ${({ theme }) => theme.colors.neutral.black};
  border-radius: 4px;
`
