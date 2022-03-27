import { BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { FollowNFTDeployed } from "../generated/Events/Events"
import { FollowNFT } from "../generated/templates"
import { Transfer } from "../generated/templates/FollowNFT/FollowNFT"
import { Profile } from "../generated/schema"


export function handleFollowNFTCreated(event: FollowNFTDeployed): void {
  let profileEntity = Profile.load(event.params.profileId.toString())
  if(profileEntity == null){
   profileEntity = new Profile(event.params.profileId.toString())
  }
  profileEntity.followNFTInstance = event.params.followNFT
  profileEntity.followingCount = BigInt.fromI32(1)
  FollowNFT.create(event.params.followNFT)
  profileEntity.followers = []
  profileEntity.save()
}

export function handleTransferFollower(event: Transfer): void {
  let input = event!.transaction!.input||Bytes.fromHexString("0x00")
  if(input) {
    
  let decoded = ethereum.decode("(address,(uint256[2],bool))", input)!.toTuple();
  let profileEntity = Profile.load( decoded[0].toArray()[0].toBigInt().toString())
  if(profileEntity){
    profileEntity.followingCount = profileEntity.followingCount.plus(BigInt.fromI32(1))
    let followers:Array<string> = [""]
    if(profileEntity.followers) {
      followers = profileEntity.followers!
      if(followers.length > 0) {
        followers.push(event.params.to.toHex())
        profileEntity.followers = followers
       }
    }
    profileEntity.save()
  }
  }
}