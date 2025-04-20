import CreditCardLine from '@/icons/finance/CreditCardLine';
import CreditCardAction from '@/icons/finance/CreditCardAction';
import Tag from '@/icons/finance/Tag';
import Tags from '@/icons/finance/Tags';
import { Icon } from '@/icons/Icons.types';
import React from 'react';

const icons = {
  tag: {
    line: Tag
  },
  tags: {
    line: Tags
  },
  creditCard: {
    line: CreditCardLine,
    action: CreditCardAction
  }
};

type FinanceIconMap = typeof icons;
type FinanceIconName = keyof FinanceIconMap;

interface FinanceProps<N extends FinanceIconName> extends Icon {
  name: N;
  variant: keyof FinanceIconMap[N];
}

export const Finance = <N extends FinanceIconName>({
  name,
  variant,
  ...rest
}: FinanceProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
