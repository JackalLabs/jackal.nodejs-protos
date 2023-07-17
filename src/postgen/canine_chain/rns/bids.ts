/* eslint-disable */
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.rns";

export interface Bids {
  index: string;
  name: string;
  bidder: string;
  price: string;
}

function createBaseBids(): Bids {
  return { index: "", name: "", bidder: "", price: "" };
}

export const Bids = {
  encode(message: Bids, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bidder !== "") {
      writer.uint32(26).string(message.bidder);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bids {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBids();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.index = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bidder = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.price = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bids {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bidder: isSet(object.bidder) ? String(object.bidder) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: Bids): unknown {
    const obj: any = {};
    if (message.index !== "") {
      obj.index = message.index;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.bidder !== "") {
      obj.bidder = message.bidder;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bids>, I>>(base?: I): Bids {
    return Bids.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Bids>, I>>(object: I): Bids {
    const message = createBaseBids();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.bidder = object.bidder ?? "";
    message.price = object.price ?? "";
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
