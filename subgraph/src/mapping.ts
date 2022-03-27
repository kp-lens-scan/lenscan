import { BigInt } from "@graphprotocol/graph-ts"
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
  profileEntity.followingCount = BigInt.fromI32(0)
  FollowNFT.create(event.params.followNFT)
  profileEntity.followers = []
  profileEntity.save()
}

export function handleTransferFollower(event: Transfer): void {
  let profileEntity = Profile.load(event.transaction.from.toHex())
  if(profileEntity){
    profileEntity.followingCount = profileEntity.followingCount.plus(BigInt.fromI32(1))
    let followers:Array<string>|null
    if(profileEntity.followers) {
      followers = profileEntity.followers
    }
     
    followers.push(event.params.to.toHex())
    profileEntity.followers = followers
    profileEntity.save()
  }

}
// export function handleApproval(event: Approval): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (entity == null) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity.owner = event.params.owner
//   entity.approved = event.params.approved

//   // Entities can be written to the store with `.save()`
//   entity.save()

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.balanceOf(...)
//   // - contract.defaultProfile(...)
//   // - contract.exists(...)
//   // - contract.getApproved(...)
//   // - contract.getCollectModule(...)
//   // - contract.getCollectNFT(...)
//   // - contract.getContentURI(...)
//   // - contract.getDispatcher(...)
//   // - contract.getDomainSeparator(...)
//   // - contract.getFollowModule(...)
//   // - contract.getFollowNFT(...)
//   // - contract.getFollowNFTURI(...)
//   // - contract.getGovernance(...)
//   // - contract.getHandle(...)
//   // - contract.getProfile(...)
//   // - contract.getProfileIdByHandle(...)
//   // - contract.getPub(...)
//   // - contract.getPubCount(...)
//   // - contract.getPubPointer(...)
//   // - contract.getPubType(...)
//   // - contract.getReferenceModule(...)
//   // - contract.getState(...)
//   // - contract.isApprovedForAll(...)
//   // - contract.isCollectModuleWhitelisted(...)
//   // - contract.isFollowModuleWhitelisted(...)
//   // - contract.isProfileCreatorWhitelisted(...)
//   // - contract.isReferenceModuleWhitelisted(...)
//   // - contract.mintTimestampOf(...)
//   // - contract.name(...)
//   // - contract.ownerOf(...)
//   // - contract.sigNonces(...)
//   // - contract.supportsInterface(...)
//   // - contract.symbol(...)
//   // - contract.tokenByIndex(...)
//   // - contract.tokenDataOf(...)
//   // - contract.tokenOfOwnerByIndex(...)
//   // - contract.tokenURI(...)
//   // - contract.totalSupply(...)
// }