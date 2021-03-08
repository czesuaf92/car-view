import styled from 'styled-components';
import {
    Link
} from "react-router-dom"

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <StyledDashboardItem to="/przebieg"> Przebieg </StyledDashboardItem>
            <StyledDashboardItem to="/"> Item1 </StyledDashboardItem>
            <StyledDashboardItem to="/"> Item1 </StyledDashboardItem>
            <StyledDashboardItem to="/"> Item1 </StyledDashboardItem>
            <StyledDashboardItem to="/"> Item1 </StyledDashboardItem>
            <StyledDashboardItem to="/"> Item1 </StyledDashboardItem>
        </StyledDashboard>
    )
}

const StyledDashboard = styled.div`
background-color: greenyellow;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`
const StyledDashboardItem = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
flex: 0 0 calc(50% - 50px);
height: 150px;
background-color: cadetblue;
padding: 25px;
box-sizing: border-box;
margin: 25px 0;
text-decoration: none;
`