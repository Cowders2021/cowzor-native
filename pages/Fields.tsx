import React from "react";
import { Text } from "react-native";
import FkaContainer from "../components/ui/FkaContainer";
import FieldCard from "../components/FieldCard";
import { useIssueContext } from "../contexts/IssueContext";
import FkaTitle from "../components/ui/FkaTitle";
import FkaSpaceBottom from "../components/ui/FkaSpaceBottom";

const Fields: React.FC = () => {

  const { issueState } = useIssueContext();

  return (
    <FkaContainer>
      <>
        <FkaSpaceBottom>
          <FkaTitle>Mine jorder</FkaTitle>
          <Text>Her finner du varsler for alle dine jorder</Text>
        </FkaSpaceBottom>
        {
          issueState.issues.map((issue) => <FieldCard {...issue} key={issue.id} />)
        }
      </>
    </FkaContainer>
  )
}

export default Fields;
