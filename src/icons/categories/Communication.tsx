import MessageChatCircleFilled from '@/icons/communication/MessageChatCircleFilled';
import MessageChatCircleLine from '@/icons/communication/MessageChatCircleLine';
import MessageChatSquareFilled from '@/icons/communication/MessageChatSquareFilled';
import MessageChatSquareLine from '@/icons/communication/MessageChatSquareLine';
import MessageCircleFilled from '@/icons/communication/MessageCircleFilled';
import MessageCircleLine from '@/icons/communication/MessageCircleLine';
import MessageMultipleFilled from '@/icons/communication/MessageMultipleFilled';
import MessageMultipleLine from '@/icons/communication/MessageMultipleLine';
import MessageMultipleTwoWayFilled from '@/icons/communication/MessageMultipleTwoWayFilled';
import MessageMultipleTwoWayLine from '@/icons/communication/MessageMultipleTwoWayLine';
import MessagePlusCircle from '@/icons/communication/MessagePlusCircle';
import MessagePlusSquareFilled from '@/icons/communication/MessagePlusSquareFilled';
import MessagePlusSquareLine from '@/icons/communication/MessagePlusSquareLine';
import MessageSquareFilled from '@/icons/communication/MessageSquareFilled';
import MessageSquareLine from '@/icons/communication/MessageSquareLine';
import MessageXCircle from '@/icons/communication/MessageXCircle';
import PhoneCallFilled from '@/icons/communication/PhoneCallFilled';
import PhoneCallLine from '@/icons/communication/PhoneCallLine';
import PhoneFilled from '@/icons/communication/PhoneFilled';
import PhoneIncomeFilled from '@/icons/communication/PhoneIncomeFilled';
import PhoneIncomeLine from '@/icons/communication/PhoneIncomeLine';
import PhoneLine from '@/icons/communication/PhoneLine';
import SendFilled from '@/icons/communication/SendFilled';
import SendLine from '@/icons/communication/SendLine';
import { Icon } from '@/icons/Icons.types';
import React from 'react';

const icons = {
  send: {
    line: SendLine,
    filled: SendFilled
  },
  messageCircle: {
    line: MessageCircleLine,
    filled: MessageCircleFilled
  },
  messageSquare: {
    line: MessageSquareLine,
    filled: MessageSquareFilled
  },
  messageMultiple: {
    line: MessageMultipleLine,
    filled: MessageMultipleFilled
  },
  messageMultipleTwoWay: {
    line: MessageMultipleTwoWayLine,
    filled: MessageMultipleTwoWayFilled
  },
  messageChatCircle: {
    line: MessageChatCircleLine,
    filled: MessageChatCircleFilled
  },
  messageChatSquare: {
    line: MessageChatSquareLine,
    filled: MessageChatSquareFilled
  },
  phone: {
    line: PhoneLine,
    filled: PhoneFilled
  },
  phoneCall: {
    line: PhoneCallLine,
    filled: PhoneCallFilled
  },
  phoneIncome: {
    line: PhoneIncomeLine,
    filled: PhoneIncomeFilled
  },
  messageXCircle: {
    line: MessageXCircle
  },
  messagePlusCircle: {
    line: MessagePlusCircle
  },
  messagePlusSquare: {
    line: MessagePlusSquareLine,
    filled: MessagePlusSquareFilled
  }
};

type CommunicationIconMap = typeof icons;
type CommunicationIconName = keyof CommunicationIconMap;

interface CommunicationProps<N extends CommunicationIconName> extends Icon {
  name: N;
  variant: keyof CommunicationIconMap[N];
}

export const Communication = <N extends CommunicationIconName>({
  name,
  variant,
  ...rest
}: CommunicationProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
