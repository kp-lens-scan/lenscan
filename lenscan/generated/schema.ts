// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Profile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("followNFTInstance", Value.fromBytes(Bytes.empty()));
    this.set("followingCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Profile entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Profile must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Profile", id.toString(), this);
    }
  }

  static load(id: string): Profile | null {
    return changetype<Profile | null>(store.get("Profile", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get followNFTInstance(): Bytes {
    let value = this.get("followNFTInstance");
    return value!.toBytes();
  }

  set followNFTInstance(value: Bytes) {
    this.set("followNFTInstance", Value.fromBytes(value));
  }

  get followingCount(): BigInt {
    let value = this.get("followingCount");
    return value!.toBigInt();
  }

  set followingCount(value: BigInt) {
    this.set("followingCount", Value.fromBigInt(value));
  }

  get followers(): Array<string> | null {
    let value = this.get("followers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set followers(value: Array<string> | null) {
    if (!value) {
      this.unset("followers");
    } else {
      this.set("followers", Value.fromStringArray(<Array<string>>value));
    }
  }
}
