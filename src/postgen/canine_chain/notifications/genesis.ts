/* eslint-disable */
import _m0 from "protobufjs";
import { NotiCounter } from "./noti_counter";
import { Notifications } from "./notifications";
import { Params } from "./params";

export const protobufPackage = "canine_chain.notifications";

/** GenesisState defines the notifications module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  notificationsList: Notifications[];
  notiCounterList: NotiCounter[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, notificationsList: [], notiCounterList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.notificationsList) {
      Notifications.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.notiCounterList) {
      NotiCounter.encode(v!, writer.uint32(26).fork()).ldelim();
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

          message.notificationsList.push(Notifications.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.notiCounterList.push(NotiCounter.decode(reader, reader.uint32()));
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
      notificationsList: Array.isArray(object?.notificationsList)
        ? object.notificationsList.map((e: any) => Notifications.fromJSON(e))
        : [],
      notiCounterList: Array.isArray(object?.notiCounterList)
        ? object.notiCounterList.map((e: any) => NotiCounter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.notificationsList) {
      obj.notificationsList = message.notificationsList.map((e) => e ? Notifications.toJSON(e) : undefined);
    } else {
      obj.notificationsList = [];
    }
    if (message.notiCounterList) {
      obj.notiCounterList = message.notiCounterList.map((e) => e ? NotiCounter.toJSON(e) : undefined);
    } else {
      obj.notiCounterList = [];
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
    message.notificationsList = object.notificationsList?.map((e) => Notifications.fromPartial(e)) || [];
    message.notiCounterList = object.notiCounterList?.map((e) => NotiCounter.fromPartial(e)) || [];
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
