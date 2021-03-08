import styled from 'styled-components';

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
            <StyledDashboardItem> Item1 </StyledDashboardItem>
        </StyledDashboard>
    )
}

const StyledDashboard = styled.div`
background-color: greenyellow;
display: flex;

`
const StyledDashboardItem = styled.div`

`