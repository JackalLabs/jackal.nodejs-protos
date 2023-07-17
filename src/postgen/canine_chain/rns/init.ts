/* eslint-disable */
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.rns";

export interface Init {
  address: string;
  complete: boolean;
}

function createBaseInit(): Init {
  return { address: "", complete: false };
}

export const Init = {
  encode(message: Init, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.complete === true) {
      writer.uint32(16).bool(message.complete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Init {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInit();
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
          if (tag !== 16) {
            break;
          }

          message.complete = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Init {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      complete: isSet(object.complete) ? Boolean(object.complete) : false,
    };
  },

  toJSON(message: Init): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.complete === true) {
      obj.complete = message.complete;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Init>, I>>(base?: I): Init {
    return Init.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Init>, I>>(object: I): Init {
    const message = createBaseInit();
    message.address = object.address ?? "";
    message.complete = object.complete ?? false;
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
