import { GenderTypes } from './GenderTypes';

export default interface UserNew {
  name: string;
  age: string;
  income: string;
  communityId: string;
  telephone: string;
  status: boolean;
  gender: GenderTypes;
  profilePicture: string;
  id: string;
  address: string;
  docNumber: bigint;
  //docPicture: string;
  //docPictureBack: string;
  //residenceProofPicture: string;
  isBlocked: boolean;
  racial: string;
  schooling: string;
  schoolingStatus: string;
  userQuiz: {
    alreadyUseBPR: boolean;
  };
}

export const mapUsersData = (data: any) => {
  return Object.keys(data).map(id => {
    return { id, ...data[id] };
  });
};