// components/header.tsx

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { StyledTitle1, HeaderDiv, StyledImg } from "./styles/styled-components";

type HeaderProps = {
    userId: string | null;
    userImage: string | null | undefined;
};
    
export default function Header({ userId, userImage }: HeaderProps) {
    return (
        <HeaderDiv>
            {userImage && <StyledImg src={userImage} alt="User" />}
            <StyledTitle1>Employee Data App</StyledTitle1>
            {userId !== null ? <LogoutButton /> : <LoginButton />}
        </HeaderDiv>
    );
}
  