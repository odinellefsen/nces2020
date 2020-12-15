import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TabLayout = styled.div`
  display: none;
  ${breakpoint("desktop")`
    display: flex;  
    height: 50px;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: flex-start;
    width: 100%;
    padding-left: 20px;
    color: white;
    background: rgb(80, 80, 80);
    visibility: visible;
  `}
`;

const TabItem = styled(Link)`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  font-size: 1em;
  margin: 3px 0px 0px 0px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.selected ? "black" : "inherit")};
  background: ${props => (props.selected ? "white" : "inherit")};
`;

function Tabs(props) {
  const { t } = useTranslation();
  return (
    <TabLayout>
      <TabItem to="/" selected={props.selectedChartgroup === "/"}>
        {t("tabs.tab1")}
      </TabItem>
      <TabItem to="/tab2" selected={props.selectedChartgroup === "/tab2"}>
        {t("tabs.tab2")}
      </TabItem>
      <TabItem to="/tab3" selected={props.selectedChartgroup === "/tab3"}>
        {t("tabs.tab3")}
      </TabItem>
      <TabItem to="/tab4" selected={props.selectedChartgroup === "/tab4"}>
        {t("tabs.tab4")}
      </TabItem>
      <TabItem to="/tab5" selected={props.selectedChartgroup === "/tab5"}>
        {t("tabs.tab5")}
      </TabItem>
      <TabItem to="/tab6" selected={props.selectedChartgroup === "/tab6"}>
        {t("tabs.tab6")}
      </TabItem>
      <TabItem to="/tab7" selected={props.selectedChartgroup === "/tab7"}>
        {t("tabs.tab7")}
      </TabItem>
      <TabItem to="/tab8" selected={props.selectedChartgroup === "/tab8"}>
        {t("tabs.tab8")}
      </TabItem>
    </TabLayout>
  );
}

Tabs.propTypes = {
  selectedChartgroup: PropTypes.string.isRequired
};

export default Tabs;
