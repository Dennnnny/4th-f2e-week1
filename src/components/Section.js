import styled from "styled-components";
import { device } from "../../styles/config";

const Layout = styled.section.withConfig({ componentId: "SectionLayout" })`
  box-sizing: border-box;
  /* border: 1px dashed #ccc; */
  min-height: calc(100vh - 60px);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobile} {
    max-width: 375px;
    margin: 0 auto;
  }
`;

export default function Section({ className, children }) {
  return <Layout className={className}>{children}</Layout>;
}
