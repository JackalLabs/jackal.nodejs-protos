/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import _m0 from "protobufjs";

export const protobufPackage = "canine_chain.rns";

export interface MsgRegister {
  creator: string;
  name: string;
  years: string;
  data: string;
}

export interface MsgRegisterResponse {
}

export interface MsgUpdate {
  creator: string;
  name: string;
  data: string;
}

export interface MsgUpdateResponse {
}

export interface MsgBid {
  creator: string;
  name: string;
  bid: string;
}

export interface MsgBidResponse {
}

export interface MsgAcceptBid {
  creator: string;
  name: string;
  from: string;
}

export interface MsgAcceptBidResponse {
}

export interface MsgCancelBid {
  creator: string;
  name: string;
}

export interface MsgCancelBidResponse {
}

export interface MsgList {
  creator: string;
  name: string;
  price: string;
}

export interface MsgListResponse {
}

export interface MsgBuy {
  creator: string;
  name: string;
}

export interface MsgBuyResponse {
}

export interface MsgDelist {
  creator: string;
  name: string;
}

export interface MsgDelistResponse {
}

export interface MsgTransfer {
  creator: string;
  name: string;
  receiver: string;
}

export interface MsgTransferResponse {
}

export interface MsgAddRecord {
  creator: string;
  name: string;
  value: string;
  data: string;
  record: string;
}

export interface MsgAddRecordResponse {
}

export interface MsgDelRecord {
  creator: string;
  name: string;
}

export interface MsgDelRecordResponse {
}

export interface MsgInit {
  creator: string;
}

export interface MsgInitResponse {
}

function createBaseMsgRegister(): MsgRegister {
  return { creator: "", name: "", years: "", data: "" };
}

export const MsgRegister = {
  encode(message: MsgRegister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.years !== "") {
      writer.uint32(26).string(message.years);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.years = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRegister {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      years: isSet(object.years) ? String(object.years) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgRegister): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.years !== "") {
      obj.years = message.years;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegister>, I>>(base?: I): MsgRegister {
    return MsgRegister.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegister>, I>>(object: I): MsgRegister {
    const message = createBaseMsgRegister();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.years = object.years ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}

export const MsgRegisterResponse = {
  encode(_: MsgRegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },

  toJSON(_: MsgRegisterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRegisterResponse>, I>>(base?: I): MsgRegisterResponse {
    return MsgRegisterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterResponse>, I>>(_: I): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  },
};

function createBaseMsgUpdate(): MsgUpdate {
  return { creator: "", name: "", data: "" };
}

export const MsgUpdate = {
  encode(message: MsgUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdate {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: MsgUpdate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdate>, I>>(base?: I): MsgUpdate {
    return MsgUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdate>, I>>(object: I): MsgUpdate {
    const message = createBaseMsgUpdate();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return {};
}

export const MsgUpdateResponse = {
  encode(_: MsgUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateResponse {
    return {};
  },

  toJSON(_: MsgUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateResponse>, I>>(base?: I): MsgUpdateResponse {
    return MsgUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateResponse>, I>>(_: I): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    return message;
  },
};

function createBaseMsgBid(): MsgBid {
  return { creator: "", name: "", bid: "" };
}

export const MsgBid = {
  encode(message: MsgBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bid !== "") {
      writer.uint32(26).string(message.bid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.bid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bid: isSet(object.bid) ? String(object.bid) : "",
    };
  },

  toJSON(message: MsgBid): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.bid !== "") {
      obj.bid = message.bid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBid>, I>>(base?: I): MsgBid {
    return MsgBid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBid>, I>>(object: I): MsgBid {
    const message = createBaseMsgBid();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.bid = object.bid ?? "";
    return message;
  },
};

function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}

export const MsgBidResponse = {
  encode(_: MsgBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBidResponse {
    return {};
  },

  toJSON(_: MsgBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBidResponse>, I>>(base?: I): MsgBidResponse {
    return MsgBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBidResponse>, I>>(_: I): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
};

function createBaseMsgAcceptBid(): MsgAcceptBid {
  return { creator: "", name: "", from: "" };
}

export const MsgAcceptBid = {
  encode(message: MsgAcceptBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptBid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.from = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: MsgAcceptBid): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.from !== "") {
      obj.from = message.from;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAcceptBid>, I>>(base?: I): MsgAcceptBid {
    return MsgAcceptBid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptBid>, I>>(object: I): MsgAcceptBid {
    const message = createBaseMsgAcceptBid();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgAcceptBidResponse(): MsgAcceptBidResponse {
  return {};
}

export const MsgAcceptBidResponse = {
  encode(_: MsgAcceptBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptBidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAcceptBidResponse {
    return {};
  },

  toJSON(_: MsgAcceptBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAcceptBidResponse>, I>>(base?: I): MsgAcceptBidResponse {
    return MsgAcceptBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptBidResponse>, I>>(_: I): MsgAcceptBidResponse {
    const message = createBaseMsgAcceptBidResponse();
    return message;
  },
};

function createBaseMsgCancelBid(): MsgCancelBid {
  return { creator: "", name: "" };
}

export const MsgCancelBid = {
  encode(message: MsgCancelBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgCancelBid): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelBid>, I>>(base?: I): MsgCancelBid {
    return MsgCancelBid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBid>, I>>(object: I): MsgCancelBid {
    const message = createBaseMsgCancelBid();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgCancelBidResponse(): MsgCancelBidResponse {
  return {};
}

export const MsgCancelBidResponse = {
  encode(_: MsgCancelBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCancelBidResponse {
    return {};
  },

  toJSON(_: MsgCancelBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCancelBidResponse>, I>>(base?: I): MsgCancelBidResponse {
    return MsgCancelBidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBidResponse>, I>>(_: I): MsgCancelBidResponse {
    const message = createBaseMsgCancelBidResponse();
    return message;
  },
};

function createBaseMsgList(): MsgList {
  return { creator: "", name: "", price: "" };
}

export const MsgList = {
  encode(message: MsgList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

  fromJSON(object: any): MsgList {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: MsgList): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.price !== "") {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgList>, I>>(base?: I): MsgList {
    return MsgList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgList>, I>>(object: I): MsgList {
    const message = createBaseMsgList();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseMsgListResponse(): MsgListResponse {
  return {};
}

export const MsgListResponse = {
  encode(_: MsgListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgListResponse {
    return {};
  },

  toJSON(_: MsgListResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgListResponse>, I>>(base?: I): MsgListResponse {
    return MsgListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgListResponse>, I>>(_: I): MsgListResponse {
    const message = createBaseMsgListResponse();
    return message;
  },
};

function createBaseMsgBuy(): MsgBuy {
  return { creator: "", name: "" };
}

export const MsgBuy = {
  encode(message: MsgBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgBuy {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgBuy): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBuy>, I>>(base?: I): MsgBuy {
    return MsgBuy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuy>, I>>(object: I): MsgBuy {
    const message = createBaseMsgBuy();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}

export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgBuyResponse {
    return {};
  },

  toJSON(_: MsgBuyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgBuyResponse>, I>>(base?: I): MsgBuyResponse {
    return MsgBuyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyResponse>, I>>(_: I): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  },
};

function createBaseMsgDelist(): MsgDelist {
  return { creator: "", name: "" };
}

export const MsgDelist = {
  encode(message: MsgDelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDelist {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgDelist): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelist>, I>>(base?: I): MsgDelist {
    return MsgDelist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelist>, I>>(object: I): MsgDelist {
    const message = createBaseMsgDelist();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgDelistResponse(): MsgDelistResponse {
  return {};
}

export const MsgDelistResponse = {
  encode(_: MsgDelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelistResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDelistResponse {
    return {};
  },

  toJSON(_: MsgDelistResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelistResponse>, I>>(base?: I): MsgDelistResponse {
    return MsgDelistResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelistResponse>, I>>(_: I): MsgDelistResponse {
    const message = createBaseMsgDelistResponse();
    return message;
  },
};

function createBaseMsgTransfer(): MsgTransfer {
  return { creator: "", name: "", receiver: "" };
}

export const MsgTransfer = {
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.receiver = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgTransfer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
    };
  },

  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgTransfer>, I>>(base?: I): MsgTransfer {
    return MsgTransfer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransfer>, I>>(object: I): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
};

function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}

export const MsgTransferResponse = {
  encode(_: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgTransferResponse {
    return {};
  },

  toJSON(_: MsgTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(base?: I): MsgTransferResponse {
    return MsgTransferResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferResponse>, I>>(_: I): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  },
};

function createBaseMsgAddRecord(): MsgAddRecord {
  return { creator: "", name: "", value: "", data: "", record: "" };
}

export const MsgAddRecord = {
  encode(message: MsgAddRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.record !== "") {
      writer.uint32(42).string(message.record);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
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

          message.value = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.record = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddRecord {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      data: isSet(object.data) ? String(object.data) : "",
      record: isSet(object.record) ? String(object.record) : "",
    };
  },

  toJSON(message: MsgAddRecord): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.data !== "") {
      obj.data = message.data;
    }
    if (message.record !== "") {
      obj.record = message.record;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddRecord>, I>>(base?: I): MsgAddRecord {
    return MsgAddRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddRecord>, I>>(object: I): MsgAddRecord {
    const message = createBaseMsgAddRecord();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.data = object.data ?? "";
    message.record = object.record ?? "";
    return message;
  },
};

function createBaseMsgAddRecordResponse(): MsgAddRecordResponse {
  return {};
}

export const MsgAddRecordResponse = {
  encode(_: MsgAddRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRecordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddRecordResponse {
    return {};
  },

  toJSON(_: MsgAddRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddRecordResponse>, I>>(base?: I): MsgAddRecordResponse {
    return MsgAddRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddRecordResponse>, I>>(_: I): MsgAddRecordResponse {
    const message = createBaseMsgAddRecordResponse();
    return message;
  },
};

function createBaseMsgDelRecord(): MsgDelRecord {
  return { creator: "", name: "" };
}

export const MsgDelRecord = {
  encode(message: MsgDelRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelRecord {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDelRecord {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgDelRecord): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelRecord>, I>>(base?: I): MsgDelRecord {
    return MsgDelRecord.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelRecord>, I>>(object: I): MsgDelRecord {
    const message = createBaseMsgDelRecord();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgDelRecordResponse(): MsgDelRecordResponse {
  return {};
}

export const MsgDelRecordResponse = {
  encode(_: MsgDelRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelRecordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDelRecordResponse {
    return {};
  },

  toJSON(_: MsgDelRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelRecordResponse>, I>>(base?: I): MsgDelRecordResponse {
    return MsgDelRecordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelRecordResponse>, I>>(_: I): MsgDelRecordResponse {
    const message = createBaseMsgDelRecordResponse();
    return message;
  },
};

function createBaseMsgInit(): MsgInit {
  return { creator: "" };
}

export const MsgInit = {
  encode(message: MsgInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInit {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgInit): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInit>, I>>(base?: I): MsgInit {
    return MsgInit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgInit>, I>>(object: I): MsgInit {
    const message = createBaseMsgInit();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgInitResponse(): MsgInitResponse {
  return {};
}

export const MsgInitResponse = {
  encode(_: MsgInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgInitResponse {
    return {};
  },

  toJSON(_: MsgInitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInitResponse>, I>>(base?: I): MsgInitResponse {
    return MsgInitResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitResponse>, I>>(_: I): MsgInitResponse {
    const message = createBaseMsgInitResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Register(request: DeepPartial<MsgRegister>, metadata?: grpc.Metadata): Promise<MsgRegisterResponse>;
  Bid(request: DeepPartial<MsgBid>, metadata?: grpc.Metadata): Promise<MsgBidResponse>;
  AcceptBid(request: DeepPartial<MsgAcceptBid>, metadata?: grpc.Metadata): Promise<MsgAcceptBidResponse>;
  CancelBid(request: DeepPartial<MsgCancelBid>, metadata?: grpc.Metadata): Promise<MsgCancelBidResponse>;
  List(request: DeepPartial<MsgList>, metadata?: grpc.Metadata): Promise<MsgListResponse>;
  Buy(request: DeepPartial<MsgBuy>, metadata?: grpc.Metadata): Promise<MsgBuyResponse>;
  Delist(request: DeepPartial<MsgDelist>, metadata?: grpc.Metadata): Promise<MsgDelistResponse>;
  Transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse>;
  AddRecord(request: DeepPartial<MsgAddRecord>, metadata?: grpc.Metadata): Promise<MsgAddRecordResponse>;
  DelRecord(request: DeepPartial<MsgDelRecord>, metadata?: grpc.Metadata): Promise<MsgDelRecordResponse>;
  Init(request: DeepPartial<MsgInit>, metadata?: grpc.Metadata): Promise<MsgInitResponse>;
  Update(request: DeepPartial<MsgUpdate>, metadata?: grpc.Metadata): Promise<MsgUpdateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Register = this.Register.bind(this);
    this.Bid = this.Bid.bind(this);
    this.AcceptBid = this.AcceptBid.bind(this);
    this.CancelBid = this.CancelBid.bind(this);
    this.List = this.List.bind(this);
    this.Buy = this.Buy.bind(this);
    this.Delist = this.Delist.bind(this);
    this.Transfer = this.Transfer.bind(this);
    this.AddRecord = this.AddRecord.bind(this);
    this.DelRecord = this.DelRecord.bind(this);
    this.Init = this.Init.bind(this);
    this.Update = this.Update.bind(this);
  }

  Register(request: DeepPartial<MsgRegister>, metadata?: grpc.Metadata): Promise<MsgRegisterResponse> {
    return this.rpc.unary(MsgRegisterDesc, MsgRegister.fromPartial(request), metadata);
  }

  Bid(request: DeepPartial<MsgBid>, metadata?: grpc.Metadata): Promise<MsgBidResponse> {
    return this.rpc.unary(MsgBidDesc, MsgBid.fromPartial(request), metadata);
  }

  AcceptBid(request: DeepPartial<MsgAcceptBid>, metadata?: grpc.Metadata): Promise<MsgAcceptBidResponse> {
    return this.rpc.unary(MsgAcceptBidDesc, MsgAcceptBid.fromPartial(request), metadata);
  }

  CancelBid(request: DeepPartial<MsgCancelBid>, metadata?: grpc.Metadata): Promise<MsgCancelBidResponse> {
    return this.rpc.unary(MsgCancelBidDesc, MsgCancelBid.fromPartial(request), metadata);
  }

  List(request: DeepPartial<MsgList>, metadata?: grpc.Metadata): Promise<MsgListResponse> {
    return this.rpc.unary(MsgListDesc, MsgList.fromPartial(request), metadata);
  }

  Buy(request: DeepPartial<MsgBuy>, metadata?: grpc.Metadata): Promise<MsgBuyResponse> {
    return this.rpc.unary(MsgBuyDesc, MsgBuy.fromPartial(request), metadata);
  }

  Delist(request: DeepPartial<MsgDelist>, metadata?: grpc.Metadata): Promise<MsgDelistResponse> {
    return this.rpc.unary(MsgDelistDesc, MsgDelist.fromPartial(request), metadata);
  }

  Transfer(request: DeepPartial<MsgTransfer>, metadata?: grpc.Metadata): Promise<MsgTransferResponse> {
    return this.rpc.unary(MsgTransferDesc, MsgTransfer.fromPartial(request), metadata);
  }

  AddRecord(request: DeepPartial<MsgAddRecord>, metadata?: grpc.Metadata): Promise<MsgAddRecordResponse> {
    return this.rpc.unary(MsgAddRecordDesc, MsgAddRecord.fromPartial(request), metadata);
  }

  DelRecord(request: DeepPartial<MsgDelRecord>, metadata?: grpc.Metadata): Promise<MsgDelRecordResponse> {
    return this.rpc.unary(MsgDelRecordDesc, MsgDelRecord.fromPartial(request), metadata);
  }

  Init(request: DeepPartial<MsgInit>, metadata?: grpc.Metadata): Promise<MsgInitResponse> {
    return this.rpc.unary(MsgInitDesc, MsgInit.fromPartial(request), metadata);
  }

  Update(request: DeepPartial<MsgUpdate>, metadata?: grpc.Metadata): Promise<MsgUpdateResponse> {
    return this.rpc.unary(MsgUpdateDesc, MsgUpdate.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "canine_chain.rns.Msg" };

export const MsgRegisterDesc: UnaryMethodDefinitionish = {
  methodName: "Register",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegister.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgRegisterResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgBidDesc: UnaryMethodDefinitionish = {
  methodName: "Bid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBid.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgBidResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgAcceptBidDesc: UnaryMethodDefinitionish = {
  methodName: "AcceptBid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAcceptBid.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAcceptBidResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgCancelBidDesc: UnaryMethodDefinitionish = {
  methodName: "CancelBid",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCancelBid.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgCancelBidResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgListDesc: UnaryMethodDefinitionish = {
  methodName: "List",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgList.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgListResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgBuyDesc: UnaryMethodDefinitionish = {
  methodName: "Buy",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgBuy.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgBuyResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgDelistDesc: UnaryMethodDefinitionish = {
  methodName: "Delist",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDelist.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgDelistResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgTransferDesc: UnaryMethodDefinitionish = {
  methodName: "Transfer",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgTransfer.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgTransferResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgAddRecordDesc: UnaryMethodDefinitionish = {
  methodName: "AddRecord",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgAddRecord.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgAddRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgDelRecordDesc: UnaryMethodDefinitionish = {
  methodName: "DelRecord",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDelRecord.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgDelRecordResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgInitDesc: UnaryMethodDefinitionish = {
  methodName: "Init",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgInit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgInitResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateDesc: UnaryMethodDefinitionish = {
  methodName: "Update",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata ?? this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata ?? {},
        ...(this.options.transport !== undefined ? { transport: this.options.transport } : {}),
        debug: this.options.debug ?? false,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
