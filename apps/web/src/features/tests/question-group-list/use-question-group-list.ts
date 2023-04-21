import { FC, useMemo } from 'react';

import { CardColors } from '~common/types/types';
import { GLassCardProps } from '~components/cards/glass-card/glass-card';

import { useFindAllQuestionGroupsQuery } from '~graphql-api';

type QuestionGroupListReturn = {
  questionGroups: GLassCardProps[];
};

const useQuestionGroupList = (): QuestionGroupListReturn => {
  const { data: questionGroup } = useFindAllQuestionGroupsQuery();

  const questionGroups = useMemo(
    () =>
      questionGroup?.findAllQuestionGroups.edges
        .slice(0, 3)
        .map((edge, index) => ({
          title: `${edge.node.name.toUpperCase()}`,
          description: `This is a collection of ${edge.node.name.toUpperCase()} questions. Click to view more or to add new questions.`,
          color: ['primary', 'secondary', 'accent'][index] as CardColors,
          button: {
            text: 'View Question Pool',
            url: `/company/tests/questions?question-pool=${edge.node.name}`,
          },
        })) ?? [],
    [questionGroup]
  );

  return {
    questionGroups,
  };
};

export default useQuestionGroupList;
