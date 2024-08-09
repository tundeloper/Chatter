import React, { ReactNode } from "react"
import styled from "styled-components"

interface ProfileProps {
    className?: string,
    children?: ReactNode
}

const ProfileBar : React.FC<ProfileProps> = ({className, children}) => {
    return <div className={className}>{children}</div>
}

const StyledNav = styled(ProfileBar)`
display: flex;
justify-content: space-between;
align-items: center;
`
export default StyledNav