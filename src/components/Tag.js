import styled from "styled-components";

const TagLayout = styled.div.withConfig({ componentId: "TagLayout" })`
  background-color: ${({ background }) => background || "transparent"};
  color: ${({ color }) => color || "white"};

  border: ${({ type, color }) => type !== "primaty" && `2px solid ${color}`};
  /* border: 2px solid #A46039; */

  font-weight: 700;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 0.05em;

  border-radius: 100px;
  padding: 4px 15px;
  width: max-content;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > img {
    margin-right: 4px;
  }
`;

export default function Tag({
  text,
  color,
  background,
  img = "",
  type = "primary",
}) {
  return (
    <TagLayout type={type} color={color} background={background}>
      {img !== "" && <img src={img} alt="tag-image" />}
      {text}
    </TagLayout>
  );
}
