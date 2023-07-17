/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.storage";

export interface Contracts {
  cid: string;
  priceamt: string;
  pricedenom: string;
  creator: string;
  merkle: string;
  signee: string;
  duration: string;
  filesize: string;
  fid: string;
  age: number;
}

function createBaseContracts(): Contracts {
  return {
    cid: "",
    priceamt: "",
    pricedenom: "",
    creator: "",
    merkle: "",
    signee: "",
    duration: "",
    filesize: "",
    fid: "",
    age: 0,
  };
}

export const Contracts = {
  encode(message: Contracts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.priceamt !== "") {
      writer.uint32(18).string(message.priceamt);
    }
    if (message.pricedenom !== "") {
      writer.uint32(26).string(message.pricedenom);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(42).string(message.merkle);
    }
    if (message.signee !== "") {
      writer.uint32(50).string(message.signee);
    }
    if (message.duration !== "") {
      writer.uint32(58).string(message.duration);
    }
    if (message.filesize !== "") {
      writer.uint32(66).string(message.filesize);
    }
    if (message.fid !== "") {
      writer.uint32(74).string(message.fid);
    }
    if (message.age !== 0) {
      writer.uint32(80).int64(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contracts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.priceamt = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pricedenom = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.merkle = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.signee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.duration = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.filesize = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.fid = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.age = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contracts {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      priceamt: isSet(object.priceamt) ? String(object.priceamt) : "",
      pricedenom: isSet(object.pricedenom) ? String(object.pricedenom) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
    };
  },

  toJSON(message: Contracts): unknown {
    const obj: any = {};
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.priceamt !== "") {
      obj.priceamt = message.priceamt;
    }
    if (message.pricedenom !== "") {
      obj.pricedenom = message.pricedenom;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.merkle !== "") {
      obj.merkle = message.merkle;
    }
    if (message.signee !== "") {
      obj.signee = message.signee;
    }
    if (message.duration !== "") {
      obj.duration = message.duration;
    }
    if (message.filesize !== "") {
      obj.filesize = message.filesize;
    }
    if (message.fid !== "") {
      obj.fid = message.fid;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Contracts>, I>>(base?: I): Contracts {
    return Contracts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Contracts>, I>>(object: I): Contracts {
    const message = createBaseContracts();
    message.cid = object.cid ?? "";
    message.priceamt = object.priceamt ?? "";
    message.pricedenom = object.pricedenom ?? "";
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.signee = object.signee ?? "";
    message.duration = object.duration ?? "";
    message.filesize = object.filesize ?? "";
    message.fid = object.fid ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
