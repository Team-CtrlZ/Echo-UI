import React from 'react';
import { Icon } from '@/icons/Icons.types';
import UserCircleFilled from '@/icons/users/UserCircleFilled';
import UserCircleLine from '@/icons/users/UserCircleLine';
import UserFilled from '@/icons/users/UserFilled';
import UserLine from '@/icons/users/UserLine';
import UserPlusFilled from '@/icons/users/UserPlusFilled';
import UserPlusLine from '@/icons/users/UserPlusLine';
import UsersLine from '@/icons/users/UsersLine';
import UsersPlus from '@/icons/users/UsersPlus';

const icons = {
  user: {
    line: UserLine,
    filled: UserFilled
  },
  users: {
    line: UsersLine
  },
  userPlus: {
    line: UserPlusLine,
    filled: UserPlusFilled
  },
  usersPlus: {
    line: UsersPlus
  },
  userCircle: {
    line: UserCircleLine,
    filled: UserCircleFilled
  }
};

type UsersIconMap = typeof icons;
type UsersIconName = keyof UsersIconMap;

interface UsersProps<N extends UsersIconName> extends Icon {
  name: N;
  variant: keyof UsersIconMap[N];
}

export const Users = <N extends UsersIconName>({
  name,
  variant,
  ...rest
}: UsersProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
