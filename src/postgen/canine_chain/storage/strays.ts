/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.storage";

export interface Strays {
  cid: string;
  fid: string;
  signee: string;
  filesize: string;
  merkle: string;
  end: number;
}

function createBaseStrays(): Strays {
  return { cid: "", fid: "", signee: "", filesize: "", merkle: "", end: 0 };
}

export const Strays = {
  encode(message: Strays, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cid !== "") {
      writer.uint32(10).string(message.cid);
    }
    if (message.fid !== "") {
      writer.uint32(18).string(message.fid);
    }
    if (message.signee !== "") {
      writer.uint32(26).string(message.signee);
    }
    if (message.filesize !== "") {
      writer.uint32(34).string(message.filesize);
    }
    if (message.merkle !== "") {
      writer.uint32(42).string(message.merkle);
    }
    if (message.end !== 0) {
      writer.uint32(48).int64(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Strays {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStrays();
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

          message.fid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signee = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filesize = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.merkle = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.end = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Strays {
    return {
      cid: isSet(object.cid) ? String(object.cid) : "",
      fid: isSet(object.fid) ? String(object.fid) : "",
      signee: isSet(object.signee) ? String(object.signee) : "",
      filesize: isSet(object.filesize) ? String(object.filesize) : "",
      merkle: isSet(object.merkle) ? String(object.merkle) : "",
      end: isSet(object.end) ? Number(object.end) : 0,
    };
  },

  toJSON(message: Strays): unknown {
    const obj: any = {};
    message.cid !== undefined && (obj.cid = message.cid);
    message.fid !== undefined && (obj.fid = message.fid);
    message.signee !== undefined && (obj.signee = message.signee);
    message.filesize !== undefined && (obj.filesize = message.filesize);
    message.merkle !== undefined && (obj.merkle = message.merkle);
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },

  create<I extends Exact<DeepPartial<Strays>, I>>(base?: I): Strays {
    return Strays.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Strays>, I>>(object: I): Strays {
    const message = createBaseStrays();
    message.cid = object.cid ?? "";
    message.fid = object.fid ?? "";
    message.signee = object.signee ?? "";
    message.filesize = object.filesize ?? "";
    message.merkle = object.merkle ?? "";
    message.end = object.end ?? 0;
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
