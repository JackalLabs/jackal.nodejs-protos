/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.notifications";

export interface Notifications {
  count: number;
  notification: string;
  address: string;
  sender: string;
}

function createBaseNotifications(): Notifications {
  return { count: 0, notification: "", address: "", sender: "" };
}

export const Notifications = {
  encode(message: Notifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.notification !== "") {
      writer.uint32(18).string(message.notification);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notifications {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notification = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sender = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Notifications {
    return {
      count: isSet(object.count) ? Number(object.count) : 0,
      notification: isSet(object.notification) ? String(object.notification) : "",
      address: isSet(object.address) ? String(object.address) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: Notifications): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.notification !== undefined && (obj.notification = message.notification);
    message.address !== undefined && (obj.address = message.address);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<Notifications>, I>>(base?: I): Notifications {
    return Notifications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Notifications>, I>>(object: I): Notifications {
    const message = createBaseNotifications();
    message.count = object.count ?? 0;
    message.notification = object.notification ?? "";
    message.address = object.address ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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
