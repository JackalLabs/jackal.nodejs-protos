/* eslint-disable */
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.storage";

export interface ActiveDeals {
  cid: string;
  signee: string;
  provider: string;
  startblock: string;
  endblock: string;
  filesize: string;
  proofverified: string;
  proofsmissed: string;
  blocktoprove: string;
  creator: string;
  merkle: string;
  fid: string;
}

function createBaseActiveDeals(): ActiveDeals {
  return {
    cid: "",
    signee: "",
    provider: "",
    startblock: "",
    endblock: "",
    filesize: "",
    proofverified: "",
    proofsmissed: "",
    blocktoprove: "",
    creator: "",
    merkle: "",
    fid: "",
  };
}

export const ActiveDeals = {
  encode(message: ActiveDeals, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.signee !== "") {
      writer.uint32(18).string(message.signee);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.startblock !== "") {
      writer.uint32(34).string(message.startblock);
    }
    if (message.endblock !== "") {
      writer.uint32(42).string(message.endblock);
    }
    if (message.filesize !== "") {
      writer.uint32(50).string(message.filesize);
    }
    if (message.proofverified !== "") {
      writer.uint32(58).string(message.proofverified);
    }
    if (message.proofsmissed !== "") {
      writer.uint32(66).string(message.proofsmissed);
    }
    if (message.blocktoprove !== "") {
      writer.uint32(74).string(message.blocktoprove);
    }
    if (message.creator !== "") {
      writer.uint32(82).string(message.creator);
    }
    if (message.merkle !== "") {
      writer.uint32(90).string(message.merkle);
    }
    if (message.fid !== "") {
      writer.uint32(98).string(message.fid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveDeals {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveDeals();
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

          message.signee = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startblock = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endblock = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.filesize = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.proofverified = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.proofsmissed = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.blocktoprove = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.merkle = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.fid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActiveDeals {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      startblock: isSet(object.startblock) ? String(object.startblock) : "",
      endblock: isSet(object.endblock) ? String(object.endblock) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      proofverified: isSet(object.proofverified) ? String(object.proofverified) : "",
      proofsmissed: isSet(object.proofsmissed) ? String(object.proofsmissed) : "",
      blocktoprove: isSet(object.blocktoprove) ? String(object.blocktoprove) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
    };
  },

  toJSON(message: ActiveDeals): unknown {
    const obj: any = {};
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.signee !== "") {
      obj.signee = message.signee;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.startblock !== "") {
      obj.startblock = message.startblock;
    }
    if (message.endblock !== "") {
      obj.endblock = message.endblock;
    }
    if (message.filesize !== "") {
      obj.filesize = message.filesize;
    }
    if (message.proofverified !== "") {
      obj.proofverified = message.proofverified;
    }
    if (message.proofsmissed !== "") {
      obj.proofsmissed = message.proofsmissed;
    }
    if (message.blocktoprove !== "") {
      obj.blocktoprove = message.blocktoprove;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.merkle !== "") {
      obj.merkle = message.merkle;
    }
    if (message.fid !== "") {
      obj.fid = message.fid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActiveDeals>, I>>(base?: I): ActiveDeals {
    return ActiveDeals.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ActiveDeals>, I>>(object: I): ActiveDeals {
    const message = createBaseActiveDeals();
    message.cid = object.cid ?? "";
    message.signee = object.signee ?? "";
    message.provider = object.provider ?? "";
    message.startblock = object.startblock ?? "";
    message.endblock = object.endblock ?? "";
    message.filesize = object.filesize ?? "";
    message.proofverified = object.proofverified ?? "";
    message.proofsmissed = object.proofsmissed ?? "";
    message.blocktoprove = object.blocktoprove ?? "";
    message.creator = object.creator ?? "";
    message.merkle = object.merkle ?? "";
    message.fid = object.fid ?? "";
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
