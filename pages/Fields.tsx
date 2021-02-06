import React from "react";
import { Text } from "react-native";
import Container from "../components/ui/Container";
import FieldCard from "../components/FieldCard";
import { useIssueContext } from "../contexts/IssueContext";
import FkaTitle from "../components/ui/FkaTitle";
import SpaceBottom from "../components/ui/SpaceBottom";

const Fields: React.FC = () => {

  const { issueState } = useIssueContext();

  return (
    <Container>
      <>
        <SpaceBottom>
          <FkaTitle>Mine jorder</FkaTitle>
          <Text>Her finner du varsler for alle dine jorder</Text>
        </SpaceBottom>
        {
          issueState.issues.map((issue) => <FieldCard {...issue} key={issue.id} />)
        }
      </>
    </Container>
  )
}

export default Fields;
