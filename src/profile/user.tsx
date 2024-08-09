import { ReactNode } from "react"
import styled from "styled-components"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

interface userProps {
    className?: string,
    children?: ReactNode
}

const User: React.FC<userProps> = ({className, children}) => {
    return <div>
        <AccountCircleRoundedIcon style={{fontSize: '3rem', color: 'white'}} />
    </div>
}

export  const StyledUser = styled(User)``