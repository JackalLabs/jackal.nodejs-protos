/* eslint-disable */
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.storage";

export interface Providers {
  address: string;
  ip: string;
  totalspace: string;
  burnedContracts: string;
  creator: string;
  keybaseIdentity: string;
  authClaimers: string[];
}

function createBaseProviders(): Providers {
  return {
    address: "",
    ip: "",
    totalspace: "",
    burnedContracts: "",
    creator: "",
    keybaseIdentity: "",
    authClaimers: [],
  };
}

export const Providers = {
  encode(message: Providers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.ip !== "") {
      writer.uint32(18).string(message.ip);
    }
    if (message.totalspace !== "") {
      writer.uint32(26).string(message.totalspace);
    }
    if (message.burnedContracts !== "") {
      writer.uint32(34).string(message.burnedContracts);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.keybaseIdentity !== "") {
      writer.uint32(50).string(message.keybaseIdentity);
    }
    for (const v of message.authClaimers) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Providers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalspace = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.burnedContracts = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.keybaseIdentity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.authClaimers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Providers {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      ip: isSet(object.ip) ? String(object.ip) : "",
      totalspace: isSet(object.totalspace) ? String(object.totalspace) : "",
      burnedContracts: isSet(object.burnedContracts) ? String(object.burnedContracts) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      keybaseIdentity: isSet(object.keybaseIdentity) ? String(object.keybaseIdentity) : "",
      authClaimers: Array.isArray(object?.authClaimers) ? object.authClaimers.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Providers): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.totalspace !== "") {
      obj.totalspace = message.totalspace;
    }
    if (message.burnedContracts !== "") {
      obj.burnedContracts = message.burnedContracts;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.keybaseIdentity !== "") {
      obj.keybaseIdentity = message.keybaseIdentity;
    }
    if (message.authClaimers?.length) {
      obj.authClaimers = message.authClaimers;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Providers>, I>>(base?: I): Providers {
    return Providers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Providers>, I>>(object: I): Providers {
    const message = createBaseProviders();
    message.address = object.address ?? "";
    message.ip = object.ip ?? "";
    message.totalspace = object.totalspace ?? "";
    message.burnedContracts = object.burnedContracts ?? "";
    message.creator = object.creator ?? "";
    message.keybaseIdentity = object.keybaseIdentity ?? "";
    message.authClaimers = object.authClaimers?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
