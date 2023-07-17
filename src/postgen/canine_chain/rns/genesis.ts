/* eslint-disable */
import _m0 from "protobufjs";
import { Bids } from "./bids";
import { Forsale } from "./forsale";
import { Init } from "./init";
import { Names } from "./names";
import { Params } from "./params";
import { Whois } from "./whois";

export const protobufPackage = "canine_chain.rns";

/** GenesisState defines the rns module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  whoIsList: Whois[];
  namesList: Names[];
  bidsList: Bids[];
  forSaleList: Forsale[];
  initList: Init[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, whoIsList: [], namesList: [], bidsList: [], forSaleList: [], initList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.whoIsList) {
      Whois.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.namesList) {
      Names.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bidsList) {
      Bids.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forSaleList) {
      Forsale.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.initList) {
      Init.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.whoIsList.push(Whois.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.namesList.push(Names.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bidsList.push(Bids.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.forSaleList.push(Forsale.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initList.push(Init.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      whoIsList: Array.isArray(object?.whoIsList) ? object.whoIsList.map((e: any) => Whois.fromJSON(e)) : [],
      namesList: Array.isArray(object?.namesList) ? object.namesList.map((e: any) => Names.fromJSON(e)) : [],
      bidsList: Array.isArray(object?.bidsList) ? object.bidsList.map((e: any) => Bids.fromJSON(e)) : [],
      forSaleList: Array.isArray(object?.forSaleList) ? object.forSaleList.map((e: any) => Forsale.fromJSON(e)) : [],
      initList: Array.isArray(object?.initList) ? object.initList.map((e: any) => Init.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.whoIsList?.length) {
      obj.whoIsList = message.whoIsList.map((e) => Whois.toJSON(e));
    }
    if (message.namesList?.length) {
      obj.namesList = message.namesList.map((e) => Names.toJSON(e));
    }
    if (message.bidsList?.length) {
      obj.bidsList = message.bidsList.map((e) => Bids.toJSON(e));
    }
    if (message.forSaleList?.length) {
      obj.forSaleList = message.forSaleList.map((e) => Forsale.toJSON(e));
    }
    if (message.initList?.length) {
      obj.initList = message.initList.map((e) => Init.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.whoIsList = object.whoIsList?.map((e) => Whois.fromPartial(e)) || [];
    message.namesList = object.namesList?.map((e) => Names.fromPartial(e)) || [];
    message.bidsList = object.bidsList?.map((e) => Bids.fromPartial(e)) || [];
    message.forSaleList = object.forSaleList?.map((e) => Forsale.fromPartial(e)) || [];
    message.initList = object.initList?.map((e) => Init.fromPartial(e)) || [];
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
