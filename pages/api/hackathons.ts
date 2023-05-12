// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const headers = {
  "content-type": "application/json",
};

const graphqlQuery = {
  operationName: "ALL_CHALLENGES_QUERY",
  variables: {
    sortBy: {
      order: "desc",
    },
    searchTerm: "%%",
    page: 0,
  },
  query:
    "query ALL_CHALLENGES_QUERY($sortBy: ChallengeOrderByWithRelationInput, $searchTerm: String, $page: Int) {\n  challenges(where: {publishInfo: {state: {equals: ACTIVE}}, OR: [{name: {contains: $searchTerm, mode: insensitive}}, {slug: {contains: $searchTerm, mode: insensitive}}, {organization: {name: {contains: $searchTerm, mode: insensitive}}}]}, page: $page, orderBy: $sortBy) {\n    id\n    name\n    isClosed\n    shortDescription\n    logoImageFile {\n      id\n      url\n      __typename\n    }\n    cardImageFile {\n      id\n      url\n      __typename\n    }\n    prize\n    prizeDecimals\n    prizeCurrency\n    organization {\n      id\n      name\n      slug\n      __typename\n    }\n    steps {\n      id\n      startDate\n      __typename\n    }\n    currentStep {\n      id\n      name\n      startDate\n      __typename\n    }\n    industries {\n      id\n      title\n      title_br\n      __typename\n    }\n    slug\n    allowedParticipants\n    participantsCount\n    projectMembersCount\n    projectsCount\n    order\n    isPublic\n    publishInfo {\n      id\n      draftToken\n      state\n      __typename\n    }\n    __typename\n  }\n}\n",
};

const getHackathons = axios({
  url: `https://api.taikai.network/api/graphql`,
  method: "post",
  headers: headers,
  data: graphqlQuery,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getHackathons
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.status(500).json(err));
}
