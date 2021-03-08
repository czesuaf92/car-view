import styled from 'styled-components';

export const PageLayout = ({ children }) => {
  return (
    <StyledPageLayout>{children}</StyledPageLayout>
  )
}

const StyledPageLayout = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
`
