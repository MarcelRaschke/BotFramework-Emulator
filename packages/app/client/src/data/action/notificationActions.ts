//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

export enum NotificationActions {
  add = 'NOTIFICATION/ADD',
  remove = 'NOTIFICATION/REMOVE',
  markAsRead = 'NOTIFICATION/MARK_AS_READ',
  clear = 'NOTIFICATION/CLEAR'
}

export type NotificationAction =
  AddNotificationAction |
  RemoveNotificationAction |
  MarkAsReadNotificationAction |
  ClearNotificationAction;

export interface AddNotificationAction {
  type: NotificationActions.add;
  payload: {
    id: string,
    read: boolean
  };
}

export interface RemoveNotificationAction {
  type: NotificationActions.remove;
  payload: {
    id: string
  };
}

export interface MarkAsReadNotificationAction {
  type: NotificationActions.markAsRead;
  payload: {
    id: string
  };
}

export interface ClearNotificationAction {
  type: NotificationActions.clear;
  payload: {};
}

export function add(id: string, read: boolean = false): NotificationAction {
  return {
    type: NotificationActions.add,
    payload: {
      id,
      read
    }
  };
}

export function remove(id: string): NotificationAction {
  return {
    type: NotificationActions.remove,
    payload: {
      id
    }
  };
}

export function markAsRead(id: string): NotificationAction {
  return {
    type: NotificationActions.markAsRead,
    payload: {
      id
    }
  };
}

export function clear(): NotificationAction {
  return {
    type: NotificationActions.clear,
    payload: {}
  };
}
