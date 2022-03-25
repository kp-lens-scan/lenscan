export interface IPub {
  collectModule: string;
  collectNFT: string;
  contentURI: string;
  profileIdPointed: number;
  pubIdPointed: number;
  referenceModule: string;
}

export interface IProfile {
  followModule: string;
  followNFT: string;
  followNFTURI: string;
  handle: string;
  imageURI: string;
  pubCount: number;
}
