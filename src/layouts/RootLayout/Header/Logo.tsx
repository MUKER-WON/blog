import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: 'Merriweather, Arial, sans-serif';
  font-size: 1.5rem;
  font-weight: bold;
`
